import {Component} from 'react'
import {HiFire} from 'react-icons/hi'

import {
  SavedVideosContainer,
  Content,
  PageHeader,
  IconContainer,
  PageHeading,
  VideosList,
  ErrorContainer,
  ErrorImg,
  ErrorHeading,
  ErrorText,
} from './styledComponents'
import AppContext from '../../context/AppContext'
import Header from '../Header'
import SideBar from '../SideBar'
import TrendingVideoItem from '../TrendingVideoItem'

class SavedVideos extends Component {
  render() {
    return (
      <AppContext.Consumer>
        {value => {
          const {isDarkTheme, savedVideos} = value
          const isEmpty = savedVideos.length === 0

          const renderPageHeader = () => (
            <PageHeader darkTheme={isDarkTheme}>
              <IconContainer darkTheme={isDarkTheme}>
                <HiFire size={36} color="#ff0000" />
              </IconContainer>
              <PageHeading darkTheme={isDarkTheme}>Saved Videos</PageHeading>
            </PageHeader>
          )

          const renderVideos = () => (
            <>
              {renderPageHeader()}
              <VideosList>
                {savedVideos.map(each => (
                  <TrendingVideoItem key={each.id} details={each} />
                ))}
              </VideosList>
            </>
          )

          const renderFailureView = () => {
            const imageUrl =
              'https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png'

            return (
              <ErrorContainer>
                <ErrorImg src={imageUrl} alt="no saved videos" />
                <ErrorHeading darkTheme={isDarkTheme}>
                  No saved videos found
                </ErrorHeading>
                <ErrorText darkTheme={isDarkTheme}>
                  You can save your videos while watching them
                </ErrorText>
              </ErrorContainer>
            )
          }

          return (
            <>
              <Header />
              <SavedVideosContainer
                data-testid="savedVideos"
                darkTheme={isDarkTheme}
              >
                <SideBar />
                <Content>
                  {isEmpty ? renderFailureView() : renderVideos()}
                </Content>
              </SavedVideosContainer>
            </>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default SavedVideos
