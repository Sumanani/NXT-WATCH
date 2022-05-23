import {Component} from 'react'
import {HiFire} from 'react-icons/hi'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {
  TrendingContainer,
  Content,
  PageHeader,
  IconContainer,
  PageHeading,
  VideosList,
  LoaderContainer,
  ErrorContainer,
  ErrorImg,
  ErrorHeading,
  ErrorText,
  RetryButton,
} from './styledComponents'
import AppContext from '../../context/AppContext'
import Header from '../Header'
import SideBar from '../SideBar'
import TrendingVideoItem from '../TrendingVideoItem'

const trendingConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN-PROGRESS',
}

class Trending extends Component {
  state = {videosArray: [], trendingPageStatus: trendingConstants.initial}

  componentDidMount = () => {
    this.getVideos()
  }

  onSuccessRequest = data => {
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
      trendingPageStatus: trendingConstants.success,
    })
  }

  onFailureRequest = () => {
    this.setState({trendingPageStatus: trendingConstants.failure})
  }

  getVideos = async () => {
    this.setState({trendingPageStatus: trendingConstants.inProgress})
    const url = `https://apis.ccbp.in/videos/trending`
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

  onClickRetry = () => {
    this.getVideos()
  }

  render() {
    return (
      <AppContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const {videosArray} = this.state

          const renderPageHeader = () => (
            <PageHeader darkTheme={isDarkTheme}>
              <IconContainer darkTheme={isDarkTheme}>
                <HiFire size={36} color="#ff0000" />
              </IconContainer>
              <PageHeading darkTheme={isDarkTheme}>Trending</PageHeading>
            </PageHeader>
          )

          const renderVideos = () => (
            <>
              {renderPageHeader()}
              <VideosList>
                {videosArray.map(each => (
                  <TrendingVideoItem key={each.id} details={each} />
                ))}
              </VideosList>
            </>
          )

          const renderLoader = () => (
            <LoaderContainer data-testid="loader">
              <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
            </LoaderContainer>
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
                  We are having some Trouble to complete your request. <br />
                  Please try again.
                </ErrorText>
                <RetryButton type="button" onClick={this.onClickRetry}>
                  Retry
                </RetryButton>
              </ErrorContainer>
            )
          }

          const renderResults = () => {
            const {trendingPageStatus} = this.state
            switch (trendingPageStatus) {
              case trendingConstants.inProgress:
                return renderLoader()

              case trendingConstants.success:
                return renderVideos()

              case trendingConstants.failure:
                return renderFailureView()

              default:
                return null
            }
          }

          return (
            <>
              <Header />
              <TrendingContainer data-testid="trending" darkTheme={isDarkTheme}>
                <SideBar />
                <Content>{renderResults()}</Content>
              </TrendingContainer>
            </>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default Trending
