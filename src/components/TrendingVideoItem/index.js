import {BsDot} from 'react-icons/bs'
import {formatDistanceToNow} from 'date-fns'

import {
  LinkItem,
  VideoItem,
  Thumbnail,
  DetailsContainer,
  Title,
  Text,
  ViewContainer,
} from './styledComponents'
import AppContext from '../../context/AppContext'

const TrendingVideoItem = props => (
  <AppContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const {details} = props
      const {id, thumbnailUrl, channel, publishedAt, title, viewCount} = details
      const {name} = channel
      const url = `/videos/${id}`

      console.log(viewCount, formatDistanceToNow(new Date(publishedAt)))
      return (
        <LinkItem to={url}>
          <VideoItem>
            <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
            <DetailsContainer>
              <Title darkTheme={isDarkTheme}>{title}</Title>
              <Text darkTheme={isDarkTheme}>{name}</Text>
              <ViewContainer darkTheme={isDarkTheme}>
                <Text darkTheme={isDarkTheme}>{`${viewCount} views`}</Text>
                <BsDot />
                <Text darkTheme={isDarkTheme}>{publishedAt}</Text>
              </ViewContainer>
            </DetailsContainer>
          </VideoItem>
        </LinkItem>
      )
    }}
  </AppContext.Consumer>
)

export default TrendingVideoItem
