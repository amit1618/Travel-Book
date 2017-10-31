import React from 'react'
import './homepage.css'
import Story from '../feed/story.js'
import Feed from '../feed/feed.js'
import Ad from '../ads/ad.js'

export default class HomePage extends React.Component {
  render () {
    return (
     
      <div class='container main'>
        <div id="wrapper">
          <div id="c1"></div>
          <div id="c2">
          <Feed />
          </div>
          <div id="c3">
          <Ad />
          </div>
        </div>
      </div>
    )
  }
}
