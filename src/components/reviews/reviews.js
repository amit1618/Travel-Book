import Comment from 'react-uikit-comment'
import Button from 'react-uikit-button';
import React from 'react'
import './reviews.css'
import ReactStars from 'react-stars'

export default class Reviews extends React.Component {

 

  render () {

     const meta = <div>
  <Button type='link' context='link' size='mini' body='12 days ago'/> |
  <Button type='link' context='link' size='mini' body='Profile'/> |
  <Button type='link' context='link' size='mini' body='#'/>
  </div>;

    return ( 
        <div class="list-group-item">
          <Comment primary title='Author' meta={meta}
            avatar={{src:'http://www.iconninja.com/ico/32/office-user-costume-business-avatar-man-male-15872.ico', alt: 'Avatar placeholder'}}>
              <ReactStars
                    count={5}
                    size={18}
                    value={4.6}
                    edit={false}
                    color2={'#ffd700'}  />
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam...
            </p>
          </Comment>
        </div>
      )
  }
}
