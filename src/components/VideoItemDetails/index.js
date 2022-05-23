import {Component} from 'react'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import {CgPlayListCheck, CgPlayListAdd} from 'react-icons/cg'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {BsDot} from 'react-icons/bs'
import Loader from 'react-loader-spinner'

import {
  Container,
  Content,
  PlayerContainer,
  Title,
  ViewContainer,
  Text,
  RowContainer,
  ReactionContainer,
  ChannelTitle,
  Description,
  ChannelImage,
  ChannelContainer,
  LoaderContainer,
  ErrorContainer,
  ErrorImg,
  ErrorHeading,
  ErrorText,
  RetryButton,
  ReactionButton,
} from './styledComponents'
import AppContext from '../../context/AppContext'
import Header from '../Header'
import SideBar from '../SideBar'

const videoConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN-PROGRESS',
}
class VideoItemDetails extends Component {
  state = {
    videoDetails: {},
    channelDetails: {},
    apiStatus: videoConstants.initial,
  }

  componentDidMount = () => {
    this.getVideoDetails()
  }

  formatChannel = data => ({
    name: data.name,
    profileImageUrl: data.profile_image_url,
    subscriberCount: data.subscriber_count,
  })

  onSuccessRequest = data => {
    const formattedData = {
      id: data.id,
      videoUrl: data.video_url,
      description: data.description,
      channel: data.channel,
      thumbnailUrl: data.thumbnail_url,
      publishedAt: data.published_at,
      viewCount: data.view_count,
      title: data.title,
    }
    const formattedChannel = this.formatChannel(data.channel)
    this.setState({
      videoDetails: formattedData,
      channelDetails: formattedChannel,
      apiStatus: videoConstants.success,
    })
  }

  onFailedRequest = () => {
    this.setState({apiStatus: videoConstants.failure})
  }

  getVideoDetails = async () => {
    this.setState({apiStatus: videoConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/videos/${id}`
    const token = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      this.onSuccessRequest(data.video_details)
    } else {
      this.onFailedRequest()
    }
  }

  onClickRetry = () => {
    this.getVideoDetails()
  }

  render() {
    return (
      <AppContext.Consumer>
        {value => {
          const {
            isDarkTheme,
            savedVideos,
            addVideo,
            removeVideo,
            changeLikeStatus,
            videoStatusList,
          } = value
          console.log(savedVideos)
          const {videoDetails, channelDetails} = this.state

          const {id} = videoDetails
          const isSaved = savedVideos.find(each => each.id === id)
          const onClickSave = () => {
            if (isSaved) {
              removeVideo(videoDetails)
            } else {
              addVideo(videoDetails)
            }
          }

          const saveButtonText = isSaved ? 'Saved' : 'Save'

          const getVIdeoLikeStatus = () => {
            const videoObject = videoStatusList.find(
              eachItem => eachItem.id === id,
            )
            if (videoObject === undefined) {
              return 'NONE'
            }
            return videoObject.status
          }

          const likeStatus = getVIdeoLikeStatus()

          const onClickLike = () => {
            if (likeStatus === 'LIKE') {
              changeLikeStatus(id, 'NONE')
            } else {
              changeLikeStatus(id, 'LIKE')
            }
          }

          const onClickDislike = () => {
            if (likeStatus === 'DISLIKE') {
              changeLikeStatus(id, 'NONE')
            } else {
              changeLikeStatus(id, 'DISLIKE')
            }
          }

          const {
            videoUrl,
            title,
            description,
            viewCount,
            publishedAt,
          } = videoDetails
          const {name, subscriberCount, profileImageUrl} = channelDetails
          const renderPlayer = () => (
            <PlayerContainer>
              <ReactPlayer width="100%" height="100%" controls url={videoUrl} />
              <Title darkTheme={isDarkTheme}>{title}</Title>
              <RowContainer>
                <ViewContainer center darkTheme={isDarkTheme}>
                  <Text darkTheme={isDarkTheme}>{`${viewCount} views`}</Text>
                  <BsDot />
                  <Text darkTheme={isDarkTheme}>{publishedAt}</Text>
                </ViewContainer>
                <ReactionContainer>
                  <ReactionButton
                    isActive={likeStatus === 'LIKE'}
                    onClick={onClickLike}
                    type="button"
                  >
                    <AiOutlineLike size="20" />
                    Like
                  </ReactionButton>
                  <ReactionButton
                    isActive={likeStatus === 'DISLIKE'}
                    onClick={onClickDislike}
                    type="button"
                  >
                    <AiOutlineDislike size="22" />
                    Dislike
                  </ReactionButton>
                  <ReactionButton
                    isActive={isSaved}
                    onClick={onClickSave}
                    type="button"
                  >
                    {isSaved ? (
                      <CgPlayListCheck size="22" />
                    ) : (
                      <CgPlayListAdd size="22" />
                    )}
                    {saveButtonText}
                  </ReactionButton>
                </ReactionContainer>
              </RowContainer>
              <ViewContainer darkTheme={isDarkTheme}>
                <ChannelImage src={profileImageUrl} alt="channel logo" />
                <ChannelContainer>
                  <ChannelTitle darkTheme={isDarkTheme}>{name}</ChannelTitle>
                  <Text
                    darkTheme={isDarkTheme}
                  >{`${subscriberCount} subscribers`}</Text>
                  <Description darkTheme={isDarkTheme}>
                    {description}
                  </Description>
                </ChannelContainer>
              </ViewContainer>
            </PlayerContainer>
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
            const {apiStatus} = this.state
            switch (apiStatus) {
              case videoConstants.success:
                return renderPlayer()

              case videoConstants.failure:
                return renderFailureView()

              case videoConstants.inProgress:
                return renderLoader()

              default:
                return null
            }
          }

          return (
            <>
              <Header />
              <Container data-testid="videoItemDetails" darkTheme={isDarkTheme}>
                <SideBar />
                <Content>{renderResults()}</Content>
              </Container>
            </>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default VideoItemDetails
