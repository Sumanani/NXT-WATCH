import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const HeaderContainer = styled.div`
  padding: 16px 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${props => (props.darkTheme ? '#212121' : '#fff')};
`

export const LinkItem = styled(Link)`
  text-decoration: none;
`

export const HeaderLogo = styled.img`
  width: 150px;
`
export const NavBar = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
  display: flex;
  align-items: center;
`

export const NavItem = styled.li`
  margin: 0 16px;
`

export const NavButton = styled.button`
  padding: 0;
  border: 0;
  background-color: none;
  cursor: pointer;
  background-color: transparent;
`
export const NavImage = styled.img`
  width: 30px;
`
