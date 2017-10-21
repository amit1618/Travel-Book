import React from 'react'
import ReactDOM from 'react-dom';
import './place.css'
import ImageCarousel from './placeImageCarousel.js'
import RatingsAndReviews from './ratingsAndReviews.js'
import Overview from './placeOverview.js'
import TravelAndAccomodation from '../travelsAndAccomodations/travelsAndAccomodations.js'
import PlaceImages from './placeImages.js'
import PlacesToVisitList from './placesToVisitList.js'
import ReviewsList from './placesReviews.js'

export default class Place extends React.Component {
  render() {
    return (
     
     <div class="container-fluid main">

      
      <div class="row">
        <div class='col-md-4'>
          <RatingsAndReviews />       
           <Overview />
           <TravelAndAccomodation />
        </div>
        <div class="col-md-8">
          <PlaceImages />
          <p>Gokarna, a small pilgrimage town in Karnataka has grown into a tourist destination over the years, thanks to its stretch of beautiful, sandy beaches. With the advent of foreigners thronging it, it no longer remains a quaint temple town, but a thriving vacation spot that is as laidback as Goa, only less commercial. In fact, many Goa regulars have now moved on to Gokarna’s pristine beaches where the crowds are less and the beaches cleaner. In fact, this trend has divided Gokarna into two parts, one that is for the religious devotee who comes to seek blessings of Shiva, and the other of the carefree tourist looking for some peace and quiet in nature’s lap. Owing to its growing popularity, several hotels and restaurants have come up in Gokarna. The temple town is now an emerging beach destination that offers something to different types of tourists with its natural beauty and its history steeped in mythology. Here is everything you need to know about Gokarna.</p>
          <p>Gokarna, a small pilgrimage town in Karnataka has grown into a tourist destination over the years, thanks to its stretch of beautiful, sandy beaches. With the advent of foreigners thronging it, it no longer remains a quaint temple town, but a thriving vacation spot that is as laidback as Goa, only less commercial. In fact, many Goa regulars have now moved on to Gokarna’s pristine beaches where the crowds are less and the beaches cleaner. In fact, this trend has divided Gokarna into two parts, one that is for the religious devotee who comes to seek blessings of Shiva, and the other of the carefree tourist looking for some peace and quiet in nature’s lap.</p>
        </div>
      </div>

      <div class="row">
        <div class='col-md-4'>
        </div>
        <div class='col-md-8'>
          <ReviewsList />
        </div>
      </div>

      <div class="row">
        <PlacesToVisitList />
      </div>

     </div>
      )
  }
}