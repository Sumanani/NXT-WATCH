import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  min-height: 90vh;
  background-color: ${props => (props.darkTheme ? '#0f0f0f' : '#f9f9f9')};
`

export const Content = styled.div`
  flex: 1;
  width: 90%;
  height: 90vh;
  overflow-y: auto;
`

export const PlayerContainer = styled.div`
  padding: 24px 36px;
  width: 100%;
  max-width: 1020px;
  height: 550px;
`
export const Title = styled.p`
  font-size: 20px;
  font-weight: 400;
  color: ${props => (props.darkTheme ? '#ffffff' : '#1e293b')};
`
export const Text = styled.p`
  font-size: 18px;
  margin: 0;
  color: ${props => (props.darkTheme ? '#7e858e' : '#777')};
`

export const ViewContainer = styled.div`
  color: ${props => (props.darkTheme ? '#7e858e' : '#777')};
  display: flex;
  justify-content: flex-start;
  align-items: ${props => (props.center ? 'center' : 'flex-start')};
  margin: 0;
`

export const RowContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 24px;
  border-bottom: 1px solid #cbd5e1;
  margin-bottom: 24px;
  margin-top: 28px;
`

export const ReactionContainer = styled(ViewContainer)`
  color: #7e858e;
`
export const ReactionButton = styled.button`
  padding: 0;
  border: 0;
  font-size: 18px;
  margin: 0 8px;
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  color: ${props => (props.isActive ? '#2563eb' : '#64748b')};
`

export const ChannelImage = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 18px;
`
export const ChannelContainer = styled.div`
  padding: 0;
`
export const ChannelTitle = styled(Title)`
  margin-top: 0;
  margin-bottom: 10px;
`
export const Description = styled(Title)`
  font-size: 18px;
  margin-top: 28px;
  margin-bottom: 48px;
`
export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
`
export const ErrorContainer = styled(LoaderContainer)`
  justify-content: center;
`

export const ErrorImg = styled.img`
  width: 100%;
  max-width: 450px;
`
export const ErrorHeading = styled.h1`
  font-size: 28px;
  margin-bottom: 0;
  color: ${props => (props.darkTheme ? '#fff' : '#000')};
`
export const ErrorText = styled.p`
  font-size: 20px;
  text-align: center;
  color: ${props => (props.darkTheme ? '#94a3b8' : '#94a3b8')};
`

export const RetryButton = styled.button`
  border: 0;
  background-color: #4f46e5;
  color: #ffffff;
  border-radius: 6px;
  padding: 8px 18px;
  font-size: 16px;
  cursor: pointer;
`
