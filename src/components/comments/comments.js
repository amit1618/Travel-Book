import Comment from 'react-uikit-comment'
import Button from 'react-uikit-button';
import React from 'react'

export default class Comments extends React.Component {

 

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

          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </p>
        </Comment>
        <hr />
      </div>
      )
  }
}
