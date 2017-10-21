import React from 'react'
import ReactStars from 'react-stars'
import ReactDOM from 'react-dom';
import Reviews from '../reviews/reviews.js'

  const ratingChanged = (newRating) => {
  console.log(newRating)
}

export default class ReviewsList extends React.Component {

  render () {
    return(
      <div id="reviewSection"class="panel panel-default">
            <div class="panel-heading">Reviews</div>
            <div class="list-group">
              <Reviews />
              <Reviews />
            </div>
            <div class="panel-footer">
              <button type="button" class="btn btn-success btn-md" data-toggle="modal" data-target="#myModal">Add Review</button>
             
              <a href="#myModal" class="btn btn-success pull-right btn-md">Load More...</a>

              <div id="myModal" class="modal fade" role="dialog">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <button type="button" class="close" data-dismiss="modal">&times;</button>
                      <h4 class="modal-title">Add Review</h4>
                    </div>
                    <div class="modal-body">
                      <form class="form-horizontal">
                        <fieldset>
                        <div class="form-group">
                          <label class="col-lg-2 control-label">Ratings : </label>
                          <div class="col-lg-10">
                            <ReactStars
                            count={5}
                            size={24}
                            onChange={ratingChanged}
                            color2={'#ffd700'}  />
                          </div>
                          
                        </div>
                        <div class="form-group">
                          <div class="col-lg-12">
                            <textarea class="form-control reviewForm" rows="6" id="textArea"></textarea>
                          </div>
                        </div>
                        </fieldset>
                      </form>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-default" data-dismiss="modal">Save</button>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
      )
  }
}