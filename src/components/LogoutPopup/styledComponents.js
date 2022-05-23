import Popup from 'reactjs-popup'
import styled from 'styled-components'

export const StyledPopup = styled(Popup)`
  &-content {
    width: 320px;
    padding: 32px;
    background-color: ${props => (props.darkTheme ? '#313131 ' : '#f9f9f9')};
    border-radius: 8px;
    text-align: center;
  }
  &-overlay {
    background: rgba(0, 0, 0, 0.5);
  }
`

export const PopupDescription = styled.p`
  font-size: 16px;
  color: ${props => (props.darkTheme ? '#fff' : '#475569')};
`

export const LogoutButton = styled.button`
  color: ${props => (props.darkTheme ? '#fff' : '#3b82f6')};
  font-weight: 500;
  border-radius: 4px;
  border: 2px solid #3b82f6;
  background-color: transparent;
  padding: 5px 20px;
  font-size: 16px;
  border-color: ${props => (props.darkTheme ? '#fff' : '#3b82f6')};
  cursor: pointer;
`
export const CancelButton = styled(LogoutButton)`
  background-color: transparent;
  border-color: #616e7c;
  color: #616e7c;
  margin: 10px 10px;
`
export const ConfirmButton = styled(LogoutButton)`
  background-color: #3b82f6;
  border-color: #3b82f6;
  color: #fff;
  margin: 10px 10px;
`
