import {Component} from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import AppContext from '../../context/AppContext'
import Header from '../Header'
import SideBar from '../SideBar'
import Banner from '../Banner'
import HomeVideoItem from '../HomeVideoItem'

import {
  HomeContainer,
  Content,
  SearchContainer,
  Search,
  SearchButton,
  VideosContainer,
  LoaderContainer,
  ErrorContainer,
  ErrorImg,
  ErrorHeading,
  ErrorText,
  RetryButton,
} from './styledComponents'

const homeConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProgress: 'IN-PROGRESS',
  noVideos: 'NO-VIDEOS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    searchText: '',
    videosArray: [],
    isBannerShown: true,
    homePageStatus: homeConstants.initial,
  }

  componentDidMount = () => {
    this.getVideos()
  }

  onSuccessRequest = data => {
    if (data.length > 0) {
      const formattedData = data.map(each => ({
        channel: each.channel,
        id: each.id,
        publishedAt: each.published_at,
        thumbnailUrl: each.thumbnail_url,
        viewCount: each.view_count,
        title: each.title,
      }))
      this.setState({
        videosArray: formattedData,
        homePageStatus: homeConstants.success,
      })
    } else {
      this.setState({homePageStatus: homeConstants.noVideos})
    }
  }

  onFailureRequest = () => {
    this.setState({homePageStatus: homeConstants.failure})
  }

  getVideos = async () => {
    this.setState({homePageStatus: homeConstants.inProgress})
    const {searchText} = this.state
    const url = `https://apis.ccbp.in/videos/all?search=${searchText}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      this.onSuccessRequest(data.videos)
    } else {
      this.onFailureRequest()
    }
  }

  closeBanner = () => {
    this.setState({isBannerShown: false})
  }

  onChangeSearchInput = event => {
    this.setState({searchText: event.target.value})
  }

  onClickRetry = () => {
    this.getVideos()
  }

  render() {
    return (
      <AppContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const {isBannerShown} = this.state
          const renderSearchBar = () => {
            const {searchText} = this.state
            return (
              <SearchContainer>
                <Search
                  type="search"
                  onChange={this.onChangeSearchInput}
                  value={searchText}
                  placeholder="Search"
                  darkTheme={isDarkTheme}
                />
                <SearchButton
                  darkTheme={isDarkTheme}
                  data-testid="searchButton"
                  type="button"
                  onClick={this.onClickRetry}
                >
                  <AiOutlineSearch size={20} />
                </SearchButton>
              </SearchContainer>
            )
          }

          const renderLoader = () => (
            <LoaderContainer data-testid="loader">
              <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
            </LoaderContainer>
          )

          const renderVideos = () => {
            const {videosArray} = this.state
            return (
              <VideosContainer>
                {videosArray.map(each => (
                  <HomeVideoItem key={each.id} details={each} />
                ))}
              </VideosContainer>
            )
          }

          const renderNoVideosView = () => (
            <ErrorContainer>
              <ErrorImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                alt="no videos"
              />
              <ErrorHeading darkTheme={isDarkTheme}>
                No Search results found
              </ErrorHeading>
              <ErrorText darkTheme={isDarkTheme}>
                Try different key words or remove search filter
              </ErrorText>
              <RetryButton type="button" onClick={this.onClickRetry}>
                Retry
              </RetryButton>
            </ErrorContainer>
          )

          const renderFailureView = () => {
            const imageUrl = isDarkTheme
              ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
              : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
            return (
              <ErrorContainer>
                <ErrorImg src={imageUrl} alt="failure view" />
                <ErrorHeading darkTheme={isDarkTheme}>
                  Oops! Something Went Wrong
                </ErrorHeading>
                <ErrorText darkTheme={isDarkTheme}>
                  We are having some Trouble to complete your request. Please
                  try again.
                </ErrorText>
                <RetryButton type="button" onClick={this.onClickRetry}>
                  Retry
                </RetryButton>
              </ErrorContainer>
            )
          }

          const renderResults = () => {
            const {homePageStatus} = this.state
            switch (homePageStatus) {
              case homeConstants.inProgress:
                return renderLoader()

              case homeConstants.success:
                return renderVideos()

              case homeConstants.failure:
                return renderFailureView()

              case homeConstants.noVideos:
                return renderNoVideosView()

              default:
                return null
            }
          }

          return (
            <>
              <Header />
              <HomeContainer darkTheme={isDarkTheme} data-testid="home">
                <SideBar />
                <Content>
                  {isBannerShown && <Banner closeBanner={this.closeBanner} />}
                  {renderSearchBar()}
                  {renderResults()}
                </Content>
              </HomeContainer>
            </>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default Home
