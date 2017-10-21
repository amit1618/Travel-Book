import React from 'react'
import ReactDOM from 'react-dom'
import { Row, Col } from 'reactstrap';
import PlacesToVisit from './placesToVisit.js'

export default class PlacesToVisitList extends React.Component {
  render() {
    return(
      <div class="panel panel-default">
          <div class="panel-heading" align="center"><b>Place To Visit in Gokarna</b></div>
          <div class="panel-body">
            <Col sm="3">
              <PlacesToVisit />
            </Col>
             <Col sm="3">
              <PlacesToVisit />
            </Col>
            <Col sm="3">
              <PlacesToVisit />
            </Col>
            <Col sm="3">
              <PlacesToVisit />
            </Col>
             <Col sm="3">
              <PlacesToVisit />
            </Col>
             <Col sm="3">
              <PlacesToVisit />
            </Col>
            <Col sm="3">
              <PlacesToVisit />
            </Col>
            <Col sm="3">
              <PlacesToVisit />
            </Col>
          </div>
        </div>
      )
  }
}