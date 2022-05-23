import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import AppContext from '../../context/AppContext'
import {
  LoginPage,
  LoginCard,
  LoginLogo,
  FormInput,
  FormLabel,
  Checkbox,
  CheckboxContainer,
  CheckboxLabel,
  LoginButton,
  ErrorMsg,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    loginFailed: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onToggleCheckbox = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
    }))
  }

  onSuccessLogin = token => {
    Cookies.set('jwt_token', token, {expires: 30})
    const {history} = this.props
    history.replace('/')
    this.setState({loginFailed: false})
  }

  onFailedLogin = errorMsg => {
    this.setState({loginFailed: true, errorMsg})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      this.onSuccessLogin(data.jwt_token)
    } else {
      this.onFailedLogin(data.error_msg)
    }
  }

  renderForm = () => (
    <AppContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const {
          username,
          password,
          showPassword,
          loginFailed,
          errorMsg,
        } = this.state
        const type = showPassword ? 'text' : 'password'

        return (
          <>
            <FormLabel darkTheme={isDarkTheme} htmlFor="username">
              USERNAME
            </FormLabel>
            <FormInput
              id="username"
              onChange={this.onChangeUsername}
              value={username}
              placeholder="Username"
              type="text"
              darkTheme={isDarkTheme}
            />
            <FormLabel darkTheme={isDarkTheme} htmlFor="password">
              PASSWORD
            </FormLabel>
            <FormInput
              id="password"
              onChange={this.onChangePassword}
              value={password}
              placeholder="Password"
              type={type}
              darkTheme={isDarkTheme}
            />
            <CheckboxContainer>
              <Checkbox
                type="checkbox"
                id="checkbox"
                onChange={this.onToggleCheckbox}
              />
              <CheckboxLabel darkTheme={isDarkTheme} htmlFor="checkbox">
                Show Password
              </CheckboxLabel>
            </CheckboxContainer>
            <LoginButton type="submit">Login</LoginButton>
            {loginFailed && <ErrorMsg>{`*${errorMsg}`}</ErrorMsg>}
          </>
        )
      }}
    </AppContext.Consumer>
  )

  render() {
    const token = Cookies.get('jwt_token')
    if (token !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <AppContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const logoUrl = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          return (
            <LoginPage darkTheme={isDarkTheme}>
              <LoginCard darkTheme={isDarkTheme} onSubmit={this.onSubmitForm}>
                <LoginLogo src={logoUrl} alt="website logo" />
                {this.renderForm()}
              </LoginCard>
            </LoginPage>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default Login
