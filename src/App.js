import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import AppContext from './context/AppContext'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import VideoItemDetails from './components/VideoItemDetails'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'
import './App.css'

class App extends Component {
  state = {isDarkTheme: false, savedVideos: [], videoStatusList: []}

  toggleTheme = () => {
    this.setState(prevState => ({
      isDarkTheme: !prevState.isDarkTheme,
    }))
  }

  addVideo = videoDetails => {
    this.setState(prevState => ({
      savedVideos: [...prevState.savedVideos, videoDetails],
    }))
  }

  removeVideo = videoDetails => {
    const {id} = videoDetails
    this.setState(prevState => ({
      savedVideos: prevState.savedVideos.filter(each => each.id !== id),
    }))
  }

  changeLikeStatus = (id, status) => {
    const {videoStatusList} = this.state
    const videoIdObject = videoStatusList.find(eachItem => eachItem.id === id)
    if (videoIdObject === undefined) {
      this.setState(prevState => ({
        videoStatusList: [...prevState.videoStatusList, {id, status}],
      }))
    } else {
      this.setState(prevState => ({
        videoStatusList: prevState.videoStatusList.map(eachObj => {
          if (eachObj.id === id) {
            return {...eachObj, status}
          }
          return eachObj
        }),
      }))
    }
  }

  render() {
    const {isDarkTheme, videoStatusList, savedVideos} = this.state
    return (
      <AppContext.Provider
        value={{
          isDarkTheme,
          savedVideos,
          videoStatusList,
          toggleTheme: this.toggleTheme,
          addVideo: this.addVideo,
          removeVideo: this.removeVideo,
          changeLikeStatus: this.changeLikeStatus,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </AppContext.Provider>
    )
  }
}

export default App
