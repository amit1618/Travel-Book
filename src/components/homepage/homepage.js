import React from 'react'
import './homepage.css'
import Story from '../feed/story.js'

export default class HomePage extends React.Component {
  render () {
    return (
     
      <div class='container main'>
        <div id="wrapper">
          <div id="c1"></div>
          <div id="c2">
          <Story />
           <Story />
          </div>
          <div id="c3"></div>
        </div>
      </div>
    )
  }
}