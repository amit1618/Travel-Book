import React from 'react';
import { Card, CardBody, Button, ButtonGroup, CardTitle,CardSubtitle, CardText, CardImg } from 'reactstrap';
import Avatar from 'react-toolbox/lib/avatar'
import Lightbox from 'lightbox-react';
import ImgGroup from 'react-uikit-img-gallery';
import LikeCommentButtons from './likeAndComment.js'
import './feed.css'
  var images = [
            'http://lorempixel.com/400/400/',
            'http://lorempixel.com/500/700/',
            'http://lorempixel.com/600/500/',
            'http://lorempixel.com/600/800/'
    ];
export default class Feed extends React.Component {

    constructor(props) {
        super(props);
 
        this.state = {
            photoIndex: 0,
            isOpen: false,
           
        };
        this.myClick = this.myClick.bind(this);
    }
    handleImageClick() {
       console.log("asdsda")
    }

    myClick () {
        this.setState(prevState => ({
            isOpen: true
        }));
    }

    render() {

        const {
            photoIndex,
            isOpen,
        } = this.state;
 
        return (
            <div>
                <Card>
                    <CardBody>
                        <CardTitle>
                            <Avatar><img src="https://placeimg.com/40/40/animals"/><span class="paddingLeft">Amit</span></Avatar>
                        </CardTitle>
                        <CardSubtitle>
                            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                        </CardSubtitle>
                        <CardText>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </CardText>
                    </CardBody>
       
                    <div id="feed" onClick={this.myClick}>
                        <div class="row imagetiles">
                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 fixOverlayDiv">
                                <img src="https://static2.tripoto.com/media/filter/nt/img/186426/TripDocument/1480004793_img_20160915_151155.jpg" class="img-responsive" />
                                <div class="centered"></div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 fixOverlayDiv">
                                <img src="https://static2.tripoto.com/media/filter/nt/img/186426/TripDocument/1480004793_img_20160915_151155.jpg" class="img-responsive" />
                                <div class="centered"></div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 fixOverlayDiv">
                                <img src="https://static2.tripoto.com/media/filter/nt/img/186426/TripDocument/1480004793_img_20160915_151155.jpg" class="img-responsive" />
                                <div class="centered"></div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 fixOverlayDiv">
                                <img src="https://static2.tripoto.com/media/filter/nt/img/186426/TripDocument/1480004793_img_20160915_151155.jpg" class="img-responsive" />
                                <div class="centered">+4</div>
                            </div>
                        </div>
                    </div>
                    <LikeCommentButtons />
                </Card>
  
                {isOpen &&
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
 
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() => this.setState({
                            photoIndex: (photoIndex + images.length - 1) % images.length,
                        })}
                        onMoveNextRequest={() => this.setState({
                            photoIndex: (photoIndex + 1) % images.length,
                        })}
                    />
                }
            </div>
        );
    }
}