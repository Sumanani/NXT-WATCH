import AppContext from '../../context/AppContext'
import {
  NotFoundContainer,
  Content,
  ErrorContainer,
  ErrorHeading,
  ErrorImg,
  ErrorText,
} from './styledComponents'
import Header from '../Header'
import SideBar from '../SideBar'

const NotFound = () => (
  <AppContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const renderNotFoundView = () => {
        const imageUrl = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

        return (
          <ErrorContainer>
            <ErrorImg src={imageUrl} alt="not found" />
            <ErrorHeading darkTheme={isDarkTheme}>Page Not Found</ErrorHeading>
            <ErrorText darkTheme={isDarkTheme}>
              we are sorry, the page you requested could not be found.
            </ErrorText>
          </ErrorContainer>
        )
      }
      return (
        <>
          <Header />
          <NotFoundContainer darkTheme={isDarkTheme}>
            <SideBar />
            <Content>{renderNotFoundView()}</Content>
          </NotFoundContainer>
        </>
      )
    }}
  </AppContext.Consumer>
)

export default NotFound
