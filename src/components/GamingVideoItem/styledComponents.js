import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const LinkItem = styled(Link)`
  text-decoration: none;
`

export const VideoItem = styled.li`
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 28px 28px 40px;
`
export const Thumbnail = styled.img`
  width: 275px;
`
export const Title = styled.p`
  font-size: 20px;
  margin: 10px 0;
  font-weight: 500;
  color: ${props => (props.darkTheme ? '#fff' : '#212121')};
`

export const Text = styled.p`
  font-size: 18px;
  margin: 0;
  color: ${props => (props.darkTheme ? '#7e858e' : '#777')};
`
