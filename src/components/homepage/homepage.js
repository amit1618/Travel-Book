import React from 'react'
import './homepage.css'
import Story from '../feed/story.js'
import Feed from '../feed/feed.js'
import Ad from '../ads/ad.js'
import TripOverview from '../trips/tripsOverview.js'
export default class HomePage extends React.Component {
  render () {
    return (
     
      <div class='main'>
        {
          /*
            <div id="wrapper">
          <div id="c1">
            <TripOverview />
          </div>
          <div id="c2">
          <Feed />
          </div>
          <div id="c3">
          <Ad />
          </div>
        </div>
          */
        }
        <div class="col-md-3 zeroPaddingLeft">
           <TripOverview />
        </div>
        <div class="col-md-6">
           <Feed />
        </div>
        <div class="col-md-3">
          <Ad />
        </div>
      </div>
    )
  }
}
