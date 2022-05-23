import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'

import AppContext from '../../context/AppContext'
import {
  LogoutButton,
  StyledPopup,
  CancelButton,
  ConfirmButton,
  PopupDescription,
} from './styledComponents'

const LogoutPopup = props => (
  <AppContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const onLogout = () => {
        Cookies.remove('jwt_token')
        const {history} = props
        console.log(history)
        history.replace('/login')
      }

      return (
        <StyledPopup
          modal
          trigger={<LogoutButton darkTheme={isDarkTheme}>Logout</LogoutButton>}
          darkTheme={isDarkTheme}
        >
          {close => (
            <>
              <PopupDescription darkTheme={isDarkTheme}>
                Are you sure, you want to logout
              </PopupDescription>
              <CancelButton type="button" onClick={() => close()}>
                Cancel
              </CancelButton>
              <ConfirmButton type="button" onClick={onLogout}>
                Confirm
              </ConfirmButton>
            </>
          )}
        </StyledPopup>
      )
    }}
  </AppContext.Consumer>
)

export default withRouter(LogoutPopup)
