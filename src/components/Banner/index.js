import {IoCloseOutline} from 'react-icons/io5'

import {
  BannerContainer,
  BannerLogo,
  BannerText,
  BannerButton,
  CloseButton,
} from './styledComponents'

const Banner = props => {
  const {closeBanner} = props
  const onClickClose = () => {
    closeBanner()
  }
  return (
    <BannerContainer data-testid="banner">
      <CloseButton data-testid="close" onClick={onClickClose} type="button">
        <IoCloseOutline size={24} />
      </CloseButton>
      <BannerLogo
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
        alt="nxt watch logo"
      />
      <BannerText>
        Buy Nxt Watch Premium prepaid plans with <br /> UPI
      </BannerText>
      <BannerButton type="button">GET IT NOW</BannerButton>
    </BannerContainer>
  )
}

export default Banner
