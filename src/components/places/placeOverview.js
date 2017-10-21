import React from 'react'
import ReactDOM from 'react-dom'

export default class Overview extends React.Component {
  render() {
    return (
         <div class="row topMargin">
              <div class="panel panel-default">
                <div class="panel-heading">
                  Overview
                </div>
                <div class="panel-body">
                  <div class="col-xs-12">
                    <p class="objText"> <span class="glyphicon glyphicon-heart glyphForInfo"></span> <span class="objHeading">Popularity: </span>
                    <span>35% in India. 12% in World</span> </p>
                  </div>
                  <div class="col-xs-12">
                    <p class="objText"> <span class="glyphicon glyphicon-asterisk glyphForInfo"></span> <span class="objHeading">Weather: </span>
                    <span> 31° C</span> </p>
                  </div>
                  <div class="col-xs-12">
                    <p class="objText"> <span class="glyphicon glyphicon-time glyphForInfo"></span> 
                    <span>Ideal duration: </span> 2-3 days</p>
                  </div>
                  <div class="col-xs-12 nopaddingLeft">
                    <p class="objText"> <span class="glyphicon glyphicon-plane glyphForInfo"></span>
                       <span class="objHeading">Nearest Airport: </span>
                         Goa
                   </p>
                  </div>
                  <div class="col-xs-12 nopaddingLeft">            
                    <p class="objText"> <span class="glyphicon glyphicon-calendar glyphForInfo"></span> 
                      <span>Best time: </span>
                      Throughout the year
                    </p>
                  </div>
                </div>
              </div>     
            </div> 
      )
  }
}