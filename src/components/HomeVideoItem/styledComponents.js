import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const LinkItem = styled(Link)`
  text-decoration: none;
`

export const VideoItem = styled.li`
  padding: 0;
  width: 350px;
  margin: 12px 12px 20px;
`

export const Thumbnail = styled.img`
  width: 100%;
`

export const LogoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 5px;
`
export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

export const ChannelLogo = styled.img`
  width: 40px;
  margin-right: 16px;
`

export const Title = styled.p`
  font-size: 18px;
  font-weight: normal;
  margin: 0;
  margin-bottom: 6px;
  color: ${props => (props.darkTheme ? '#f1f1f1' : '#1e293b')};
`

export const ChannelText = styled.p`
  font-size: 16px;
  margin: 0;
  color: #777;
`
export const ViewContainer = styled(LogoContainer)`
  color: #777;
  margin: 0;
  margin-top: 4px;
  align-items: center;
`
