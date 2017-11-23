import React from 'react';
import { Card,Button, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle,Row, Col  } from 'reactstrap';
import './myPlaces.css'

export default class VisitedCards extends React.Component {
  render () {
    return (
    <div id="cardsBg">
      <p class="text-primary buttonWrapper">Gokarna <span class="label label-success"><em>16 Oct,2017</em></span></p>
      <img src="http:\/\/a1.images.thrillophilia.com/image/upload/s--d5SUFW5b--/c_fill,f_auto,fl_strip_profile,h_800,q_jpegmini,w_1300/v1/images/photos/000/103/190/original/1479127533_Om_Beach__Gokarna_(Sunset).jpg.jpg?1479127533" alt="Gokarna" class="img-responsive" />
      </div>
    )
  }
}

