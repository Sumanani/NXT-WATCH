import {Component} from 'react'
import Cookies from 'js-cookie'
import {SiYoutubegaming} from 'react-icons/si'
import Loader from 'react-loader-spinner'

import {
  GamingContainer,
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
import GamingVideoItem from '../GamingVideoItem'

const gamingConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN-PROGRESS',
}

class Gaming extends Component {
  state = {videosArray: [], gamingPageStatus: gamingConstants.initial}

  componentDidMount = () => {
    this.getVideos()
  }

  onSuccessRequest = data => {
    const formattedData = data.map(each => ({
      id: each.id,
      thumbnailUrl: each.thumbnail_url,
      viewCount: each.view_count,
      title: each.title,
    }))
    this.setState({
      videosArray: formattedData,
      gamingPageStatus: gamingConstants.success,
    })
  }

  onFailureRequest = () => {
    this.setState({gamingPageStatus: gamingConstants.failure})
  }

  getVideos = async () => {
    this.setState({gamingPageStatus: gamingConstants.inProgress})
    const url = `https://apis.ccbp.in/videos/gaming`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
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
                <SiYoutubegaming size={36} color="#ff0000" />
              </IconContainer>
              <PageHeading darkTheme={isDarkTheme}>Gaming</PageHeading>
            </PageHeader>
          )

          const renderVideos = () => (
            <>
              {renderPageHeader()}
              <VideosList>
                {videosArray.map(each => (
                  <GamingVideoItem key={each.id} details={each} />
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
            const {gamingPageStatus} = this.state
            switch (gamingPageStatus) {
              case gamingConstants.inProgress:
                return renderLoader()

              case gamingConstants.success:
                return renderVideos()

              case gamingConstants.failure:
                return renderFailureView()

              default:
                return null
            }
          }

          return (
            <>
              <Header />
              <GamingContainer data-testid="gaming" darkTheme={isDarkTheme}>
                <SideBar />
                <Content>{renderResults()}</Content>
              </GamingContainer>
            </>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default Gaming
