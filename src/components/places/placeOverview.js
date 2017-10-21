import React from 'react'
import ReactDOM from 'react-dom'

export default class Overview extends React.Component {
  render() {
    return (
         <div class="row topMargin">
              <div class="panel panel-default">
                <div class="panel-heading">
                  Overview
                  <div class="pull-right">
                    <span class="label label-success">
                      Last Visited: <em>16 Oct,2017</em>
                    </span>
                    &nbsp;
                    <button type="button" class="btn btn-warning btn-xs pull-right">
                      <span class="glyphicon glyphicon-plus"></span>
                    </button>
                  </div>   
                </div>
                <div class="panel-body">
                  <div class="col-xs-12">
                    <p class="text-info">Nilay has been there 5 times</p>
                  </div>
                  <div class="col-xs-12">
                    <p class="text-danger">Amit thinks this place sucks</p>
                  </div>
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