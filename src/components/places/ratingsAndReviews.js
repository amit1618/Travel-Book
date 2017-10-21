import React from 'react'
import ReactStars from 'react-stars'
import ReactDOM from 'react-dom';

export default class RatingsAndReviews extends React.Component {
  render() {
    return (
     
      <div  class="container-fluid">
        <div class="row">
          <h3 class="h1Align"> Gokarna </h3>
        </div>

        <div class="row">
          <div class="col-sm-8">
            <div class="wrapper">
              <div>
                <ReactStars
                    count={5}
                    size={18}
                    value={4.6}
                    edit={false}
                    color2={'#ffd700'}  />
              </div>
              <div>
              <a href="#reviewSection">(48 reviews)</a>
                
              </div>
            </div>
          </div>       
        <div class="col-sm-4" align="center">
          <i>Not a bad Place</i> 
        </div>
      </div>

     </div>
      )
  }
}
