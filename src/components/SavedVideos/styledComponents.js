import styled from 'styled-components'

export const SavedVideosContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  min-height: 90vh;
  background-color: ${props => (props.darkTheme ? '#0f0f0f' : '#f9f9f9')};
`

export const Content = styled.div`
  flex: 1;
  width: 100%;
  height: 90vh;
  overflow-y: auto;
`
export const PageHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 20px 64px;
  background-color: ${props => (props.darkTheme ? '#313131' : '#f1f1f1')};
`

export const IconContainer = styled(PageHeader)`
  justify-content: center;
  border-radius: 50%;
  padding: 24px;
  background-color: ${props => (props.darkTheme ? '#000' : '#e2e8f0')};
`

export const PageHeading = styled.h1`
  font-size: 32px;
  margin-left: 20px;
  color: ${props => (props.darkTheme ? '#fff' : '#000')};
`
export const VideosList = styled.ul`
  padding: 10px 36px;
  list-style-type: none;
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
