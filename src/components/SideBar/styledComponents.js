import {Link} from 'react-router-dom'

import styled from 'styled-components'

export const SideBarContainer = styled.div`
  min-height: 90vh;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${props => (props.darkTheme ? '#212121' : '#fff')};
`
// contact us styles
export const ContactUs = styled.div`
  width: 100%;
  padding: 0 24px 0 36px;
`

export const Heading = styled.p`
  font-size: 24px;
  font-weight: 500;
  color: ${props => (props.darkTheme ? '#fff' : '#313131')};
`

export const ContactUsIconList = styled.ul`
  padding: 0;
  margin: 24px 0;
  list-style-type: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
export const ListItem = styled.li`
  margin: 0 20px 0 0;
`

export const IconImage = styled.img`
  width: 35px;
`
export const Text = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: ${props => (props.darkTheme ? '#f4f4f4' : '#313131')};
`

// Route Item styles
export const NavList = styled.ul`
  padding: 0;
  margin: 16px 0 0 0;
  width: 100%;
`

export const LinkItem = styled(Link)`
  text-decoration: none;
`

export const NavItem = styled.li`
  padding: 0;
`

export const NavButton = styled.button`
  display: flex;
  justify-content: flex-start;
  padding: 12px 36px;
  width: 100%;
  border: 0;
  cursor: pointer;
  font-weight: ${props => (props.isActive ? '500' : 'normal')};
  color: ${props => (props.isActive ? '#ff0000' : '#606060')};
  background-color: ${props => (props.isActive ? props.bg : 'transparent')};
`

export const NavItemText = styled.p`
  font-size: 18px;
  padding: 1px 0 0 0;
  margin: 0;
  margin-left: 28px;
  color: ${props => (props.darkTheme ? '#f4f4f4' : '#313131')};
`
