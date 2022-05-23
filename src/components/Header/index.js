import {FaMoon} from 'react-icons/fa'
import {CgSun} from 'react-icons/cg'

import AppContext from '../../context/AppContext'
import LogoutPopup from '../LogoutPopup'
import {
  HeaderContainer,
  HeaderLogo,
  NavBar,
  NavItem,
  NavButton,
  NavImage,
  LinkItem,
} from './styledComponents'

const Header = () => (
  <AppContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const logoUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
      return (
        <HeaderContainer darkTheme={isDarkTheme}>
          <LinkItem to="/">
            <HeaderLogo src={logoUrl} alt="website logo" />
          </LinkItem>
          <NavBar>
            <NavItem>
              <NavButton
                onClick={toggleTheme}
                data-testid="theme"
                type="button"
              >
                {isDarkTheme ? (
                  <CgSun color="#fff" size="26" />
                ) : (
                  <FaMoon size="26" />
                )}
              </NavButton>
            </NavItem>
            <NavItem>
              <NavButton type="button">
                <NavImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
              </NavButton>
            </NavItem>
            <NavItem>
              <LogoutPopup />
            </NavItem>
          </NavBar>
        </HeaderContainer>
      )
    }}
  </AppContext.Consumer>
)

export default Header
