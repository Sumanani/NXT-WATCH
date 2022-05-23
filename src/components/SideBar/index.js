import {RiHome6Fill} from 'react-icons/ri'
import {HiFire} from 'react-icons/hi'
import {MdPlaylistAdd} from 'react-icons/md'
import {SiYoutubegaming} from 'react-icons/si'
import {withRouter} from 'react-router-dom'

import {
  SideBarContainer,
  Heading,
  ContactUs,
  ContactUsIconList,
  ListItem,
  IconImage,
  Text,
  NavItem,
  NavList,
  LinkItem,
  NavItemText,
  NavButton,
} from './styledComponents'

import AppContext from '../../context/AppContext'

const SideBar = props => (
  <AppContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const {location} = props
      const activeRoute = location.pathname

      const renderSideBarItems = () => (
        <NavList>
          <LinkItem to="/">
            <NavItem>
              <NavButton
                isActive={activeRoute === '/'}
                bg={isDarkTheme ? '#424242' : '#f1f5f9'}
              >
                <RiHome6Fill size={24} />
                <NavItemText darkTheme={isDarkTheme}>Home</NavItemText>
              </NavButton>
            </NavItem>
          </LinkItem>

          <LinkItem to="/trending">
            <NavItem>
              <NavButton
                isActive={activeRoute === '/trending'}
                bg={isDarkTheme ? '#424242' : '#f1f5f9'}
              >
                <HiFire size={24} />
                <NavItemText darkTheme={isDarkTheme}>Trending</NavItemText>
              </NavButton>
            </NavItem>
          </LinkItem>

          <LinkItem to="/gaming">
            <NavItem>
              <NavButton
                isActive={activeRoute === '/gaming'}
                bg={isDarkTheme ? '#424242' : '#f1f5f9'}
              >
                <SiYoutubegaming size={24} />
                <NavItemText darkTheme={isDarkTheme}>Gaming</NavItemText>
              </NavButton>
            </NavItem>
          </LinkItem>

          <LinkItem to="/saved-videos">
            <NavItem>
              <NavButton
                isActive={activeRoute === '/saved-videos'}
                bg={isDarkTheme ? '#424242' : '#f1f5f9'}
              >
                <MdPlaylistAdd size={24} />
                <NavItemText darkTheme={isDarkTheme}>Saved videos</NavItemText>
              </NavButton>
            </NavItem>
          </LinkItem>
        </NavList>
      )

      const renderContactUs = () => (
        <ContactUs>
          <Heading darkTheme={isDarkTheme}>CONTACT US</Heading>
          <ContactUsIconList>
            <ListItem>
              <IconImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
            </ListItem>
            <ListItem>
              <IconImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
            </ListItem>
            <ListItem>
              <IconImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </ListItem>
          </ContactUsIconList>
          <Text darkTheme={isDarkTheme}>
            Enjoy! Now to see your channels and recommendations!
          </Text>
        </ContactUs>
      )

      return (
        <SideBarContainer darkTheme={isDarkTheme}>
          {renderSideBarItems()}
          {renderContactUs()}
        </SideBarContainer>
      )
    }}
  </AppContext.Consumer>
)

export default withRouter(SideBar)
