import React from 'react'
import ReactDOM from 'react-dom';
import './place.css'
import ImageCarousel from './placeImageCarousel.js'
import RatingsAndReviews from './ratingsAndReviews.js'

export default class Place extends React.Component {
  render() {
    return (
     
     <div class="container-fluid main">

      <div class="row">
        <div class='col-sm-4'>
          <RatingsAndReviews />
            <div class="row">
              <div class="col-xs-12">
                <h5>Nilay has been there 5 times</h5>
              </div>
            </div>
            <div class="row">

              <div class="panel panel-default">
                <div class="panel-heading">Overview</div>
                <div class="panel-body">
                  <div class="col-xs-12">
                    <p class="objText"> <span class="glyphicon glyphicon-asterisk glyphForInfo"></span> <span class="objHeading">Weather: </span>
                    <span><img src="https:\/\/www.holidify.com/images/logos/weather-icons/cloudy" class="weatherIcon" /> 31° C</span> </p>
                  </div>
                  <div class="col-xs-12">
                    <p class="objText"> <span class="glyphicon glyphicon-time glyphForInfo"></span> 
                    <span>Ideal duration: </span> 2-3 days</p>
                  </div>
                </div>
              </div>     
            </div>
        </div>
        <div class="col-sm-8">
          <ImageCarousel />
        </div>
      </div>
     </div>
      )
  }
}