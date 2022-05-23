import styled from 'styled-components'

export const NotFoundContainer = styled.div`
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
export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
  align-items: center;
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
