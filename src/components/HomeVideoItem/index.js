import {BsDot} from 'react-icons/bs'

import AppContext from '../../context/AppContext'
import {
  LinkItem,
  VideoItem,
  Thumbnail,
  TitleContainer,
  LogoContainer,
  ChannelLogo,
  Title,
  ChannelText,
  ViewContainer,
} from './styledComponents'

const HomeVideoItem = props => (
  <AppContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const {details} = props
      const {id, thumbnailUrl, channel, publishedAt, title, viewCount} = details
      const {name, profile_image_url: profileUrl} = channel
      const url = `/videos/${id}`

      return (
        <LinkItem to={url}>
          <VideoItem>
            <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
            <LogoContainer>
              <ChannelLogo src={profileUrl} alt="channel logo" />
              <TitleContainer>
                <Title darkTheme={isDarkTheme}>{title}</Title>
                <ChannelText>{name}</ChannelText>
                <ViewContainer>
                  <ChannelText>{`${viewCount} views`}</ChannelText>
                  <BsDot />
                  <ChannelText>{publishedAt}</ChannelText>
                </ViewContainer>
              </TitleContainer>
            </LogoContainer>
          </VideoItem>
        </LinkItem>
      )
    }}
  </AppContext.Consumer>
)

export default HomeVideoItem
