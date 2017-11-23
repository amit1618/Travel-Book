import React from 'react';
import VisitedCarousel from './visited.js'
export default class MyPlaces extends React.Component {
  render () {
    return (
      <div class="container-fluid main">
        <div class="row">
          <VisitedCarousel />
        </div>
         <div class="row">
          <VisitedCarousel />
        </div>
         <div class="row">
          <VisitedCarousel />
        </div>
      </div>
     
    )
  }
}