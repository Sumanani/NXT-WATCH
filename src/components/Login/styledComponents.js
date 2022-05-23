import styled from 'styled-components'

export const LoginPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${props => (props.darkTheme ? '#212121' : '#f8fafc')};
`

export const LoginCard = styled.form`
  width: 100%;
  max-width: 420px;
  padding: 40px 36px 36px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: ${props => (props.darkTheme ? '#000' : '#ffffff')};
`

export const LoginLogo = styled.img`
  width: 175px;
  align-self: center;
  margin: 0 0 24px;
`

export const FormLabel = styled.label`
  font-size: 13px;
  font-weight: 500;
  margin: 20px 0 5px 0;
  display: block;
  color: ${props => (props.darkTheme ? '#f9f9f9' : '#64748b')};
`

export const FormInput = styled.input`
  padding: 8px 16px;
  font-size: 16px;
  border: 1px solid #64748b;
  border-radius: 4px;
  outline: 0;
  width: 100%;
  color: ${props => (props.darkTheme ? '#fff' : '#64748b')};
  background-color: transparent;
`

export const CheckboxContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 12px 0 24px 0;
`

export const CheckboxLabel = styled.label`
  font-size: 15px;
  margin-left: 6px;
  font-weight: 400;
  font-family: 'Roboto';
  color: ${props => (props.darkTheme ? '#f8fafc' : '#64748b')};
`

export const Checkbox = styled.input`
  height: 15px;
  width: 15px;
  margin: 0;
`

export const LoginButton = styled.button`
  border-radius: 4px;
  color: #ffffff;
  background-color: #3b82f6;
  border: 0;
  width: 100%;
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
`

export const ErrorMsg = styled.p`
  color: #ff0b37;
  font-size: 15px;
  margin: 0;
  margin-top: 3px;
`
