import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  min-height: 90vh;
  background-color: ${props => (props.darkTheme ? '#181818' : '#f9f9f9')};
`
export const Content = styled.div`
  flex: 1;
  width: 100%;
  height: 90vh;
  overflow-y: auto;
`

// search bar styles
export const SearchContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  max-width: 500px;
  margin: 32px;
`

export const Search = styled.input`
  padding: 8px 16px;
  font-size: 16px;
  width: 100%;
  background-color: ${props => (props.darkTheme ? 'transparent' : '#fff')};
  outline: 0;
  border: ${props =>
    props.darkTheme ? '1px solid #909090' : '1px solid #cbd5e1'};
`

export const SearchButton = styled.button`
  border: ${props =>
    props.darkTheme ? '1px solid #909090' : '1px solid #cbd5e1'};
  outline: 0;
  cursor: pointer;
  padding: 0 20px;
  background-color: ${props => (props.darkTheme ? '#383838' : '#f9f9f9')};
  color: ${props => (props.darkTheme ? ' #cccccc' : '#7e858e')};
`
export const VideosContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0 24px;
  margin: 0;
  list-style-type: none;
  width: 100%;
`

export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vh;
`
export const ErrorContainer = styled(LoaderContainer)`
  height: 90vh;
  justify-content: flex-start;
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
