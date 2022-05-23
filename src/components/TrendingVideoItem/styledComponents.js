import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const LinkItem = styled(Link)`
  text-decoration: none;
`

export const VideoItem = styled.li`
  padding: 0;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 28px 20px 40px;
`
export const Thumbnail = styled.img`
  width: 350px;
`
export const DetailsContainer = styled.div`
  padding: 0;
  margin-left: 28px;
`
export const Title = styled.p`
  font-size: 20px;
  max-width: 550px;
  margin: 0;
  color: ${props => (props.darkTheme ? '#ffffff' : '#1e293b')};
`
export const Text = styled.p`
  font-size: 18px;
  margin: 10px 0 0px;
  color: ${props => (props.darkTheme ? '#7e858e' : '#777')};
`

export const ViewContainer = styled.div`
  color: ${props => (props.darkTheme ? '#7e858e' : '#777')};
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0;
  align-items: center;
`
