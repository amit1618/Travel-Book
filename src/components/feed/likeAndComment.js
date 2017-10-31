import React from 'react';
import { Button } from 'reactstrap';
import Comment from 'react-uikit-comment'

export default class LikeCommentButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(event) {
    this.setState({ liked: !this.state.liked});
  }
  render() {
    let buttonText = this.state.liked? 'Unlike': 'Like';
    const text = this.state.liked ? 'liked' : 'haven\'t liked';
    const label = this.state.liked ? 'Unlike' : 'Like';

    return (
     
      <div>
      <Button onClick={this.handleClick} color="info" size="sm"><span class="glyphicon glyphicon-thumbs-up glyphForInfo">&nbsp;{label}</span></Button>{' '}
      <Button color="info" size="sm"><span class="glyphicon glyphicon-comment glyphForInfo"> Comment</span></Button>{' '}
      <div>
       <Comment primary title='Ankit'
            avatar={{src:'http://www.iconninja.com/ico/32/office-user-costume-business-avatar-man-male-15872.ico', alt: 'Avatar placeholder'}}>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing
            </p>
          </Comment>
          <hr/>
      </div>
      </div>
     );
  }
}