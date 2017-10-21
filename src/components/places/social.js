import React from 'react'
import ReactDOM from 'react-dom'
import RatingsGraph from './ratingsChart.js'

export default class Social extends React.Component {
  render() {
    return (
         <div class="row topMargin">
              <div class="panel panel-default">
                <div class="panel-heading">
                  Activities
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
                    <p class="text-info">Ankur is planning to visit this place in October</p>
                  </div>
                  <div class="col-xs-12">
                    <p class="text-info">Nilay has been there 5 times</p>
                  </div>
                  <div class="col-xs-12">
                    <p class="text-warning">Amit thinks this place sucks</p>
                  </div>
                  <div class="col-xs-12">
                    <p class="text-info">Nilay has been there 5 times</p>
                  </div>
                  <div class="col-xs-12">
                    <RatingsGraph />
                  </div>
                </div>
              </div>     
            </div> 
      )
  }
}