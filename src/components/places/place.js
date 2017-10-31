import React from 'react'
import ReactDOM from 'react-dom';
import './place.css'
import ImageCarousel from './placeImageCarousel.js'
import RatingsAndReviews from './ratingsAndReviews.js'
import Overview from './placeOverview.js'
import Social from './social.js'
import TravelAndAccomodation from '../travelsAndAccomodations/travelsAndAccomodations.js'
import PlaceImages from './placeImages.js'
import PlacesToVisitList from './placesToVisitList.js'
import ReviewsList from './placesReviews.js'
import TipsNHacks from './tipsNHacks.js'

export default class Place extends React.Component {
  render() {
    return (
     
      <div class="container-fluid main">
        <div class="row">
          <div class="col-md-3">
            <div class="row">
              <RatingsAndReviews />       
              <Social />
              <TravelAndAccomodation />
              <Overview />
            </div>
          </div>
          <div class="col-md-9">
            <PlaceImages />
            <div class="col-md-4">
              <TipsNHacks />
            </div>
            <div class="col-md-8">
              <ReviewsList />
            </div>
           
          </div>
        </div>
        
        <div class="row">
          <PlacesToVisitList />
        </div>
      </div>
      )
  }
}