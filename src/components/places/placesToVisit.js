import React from 'react'
import ReactDOM from 'react-dom'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

export default class PlacesToVisit extends React.Component {
  render () {
    return (
      

      <a href="#">
              <Card>
                <CardImg top width="100%%" src="https:\/\/www.holidify.com/images/compressed/1007.jpg" alt="Card image cap" />
                <CardBody>
                  <CardTitle>Om Beach</CardTitle>
                </CardBody>
              </Card>
      </a>
      )
  }
}