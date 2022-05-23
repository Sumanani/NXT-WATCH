import React from 'react'

const AppContext = React.createContext({
  isDarkTheme: false,
  savedVideos: [],
  videoStatusList: [],
  changeLikeStatus: () => {},
  toggleTheme: () => {},
  addVideo: () => {},
  removeVideo: () => {},
})

export default AppContext
