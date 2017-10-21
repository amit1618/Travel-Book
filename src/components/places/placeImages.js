import React from 'react'
import ImageGallery from 'react-image-gallery';
export default class PlaceImages extends React.Component {
 
  handleImageLoad(event) {
    console.log('Image loaded ', event.target)
  }
 
 myRenderItem() {
    return (
      <a href="#">
        <img src="http:\/\/a2.images.thrillophilia.com/image/upload/s--ZGlO1j3V--/c_fill,f_auto,fl_strip_profile,h_800,q_jpegmini,w_1300/v1/images/photos/000/010/826/original/m_IMG_0131.jpg.jpg?1453306672" alt="HTML tutorial"  />
      </a>
    )
  }

  render() {
 
    const images = [
      {
        original: 'http:\/\/a1.images.thrillophilia.com/image/upload/s--d5SUFW5b--/c_fill,f_auto,fl_strip_profile,h_800,q_jpegmini,w_1300/v1/images/photos/000/103/190/original/1479127533_Om_Beach__Gokarna_(Sunset).jpg.jpg?1479127533'
        
      },
      {
        original: 'http:\/\/a5.images.thrillophilia.com/image/upload/s--zu6i1Klt--/c_fill,f_auto,fl_strip_profile,h_800,q_jpegmini,w_1300/v1/images/photos/000/051/304/original/Lord_Shiva_statue_at_Murudeshwara.jpg.jpg?1458198447'
       
      },
      {
        renderItem: this.myRenderItem
      }
    ]
 
    return (
       <div class="imageCarousel">
        <ImageGallery
          items={images}
          slideInterval={2000}
          showPlayButton={false}
          autoPlay={true}
         showThumbnails={false}
          onImageLoad={this.handleImageLoad}/>
        </div>
    );
  }
 
}