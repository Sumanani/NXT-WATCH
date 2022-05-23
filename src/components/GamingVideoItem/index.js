import {LinkItem, VideoItem, Thumbnail, Title, Text} from './styledComponents'
import AppContext from '../../context/AppContext'

const GamingVideoItem = props => (
  <AppContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const {details} = props
      const {id, thumbnailUrl, title, viewCount} = details
      const url = `/videos/${id}`

      return (
        <LinkItem to={url}>
          <VideoItem>
            <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
            <Title darkTheme={isDarkTheme}>{title}</Title>
            <Text
              darkTheme={isDarkTheme}
            >{`${viewCount} Watching Worldwide`}</Text>
          </VideoItem>
        </LinkItem>
      )
    }}
  </AppContext.Consumer>
)

export default GamingVideoItem
