import React from 'react'
import ReactStars from 'react-stars'
import ReactDOM from 'react-dom';

export default class RatingsAndReviews extends React.Component {
  render() {
    return (
        <div class="row">
            <div class='col-sm-4'>
              <h1 class="h1Align"> Gokarna </h1>
            </div>
            <div class='col-sm-8'>
             <ReactStars
                count={5}
                size={24}
                value={4.6}
                edit={false}
                color2={'#ffd700'} />
                 &nbsp;&nbsp;(48 reviews)
            </div>
           
          </div>
      )
  }
}
