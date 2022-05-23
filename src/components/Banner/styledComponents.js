import styled from 'styled-components'

export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 8px 16px 8px 32px;
`

export const BannerLogo = styled.img`
  width: 200px;
`

export const BannerText = styled.p`
  font-size: 20px;
  font-weight: 400;
  color: #222;
  line-height: 1.5;
  margin: 32px 0;
`

export const CloseButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 0;
  align-self: flex-end;
`

export const BannerButton = styled.button`
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  background-color: transparent;
  border: 1px solid '#333';
  color: #333;
  padding: 8px 16px;
`
