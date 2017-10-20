import React from 'react'

export default class ImageCarousel extends React.Component {
  render() {
    return (
      <div id="myCarousel" class="carousel slide" data-ride="carousel">
         
          <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>
      
         
          <div class="carousel-inner">
            <div class="item active">
      <img src="http:\/\/a1.images.thrillophilia.com/image/upload/s--d5SUFW5b--/c_fill,f_auto,fl_strip_profile,h_800,q_jpegmini,w_1300/v1/images/photos/000/103/190/original/1479127533_Om_Beach__Gokarna_(Sunset).jpg.jpg?1479127533" alt="Gokarna" class="imageWidth" />
            </div>
      
            <div class="item">
      <img src="http:\/\/a5.images.thrillophilia.com/image/upload/s--zu6i1Klt--/c_fill,f_auto,fl_strip_profile,h_800,q_jpegmini,w_1300/v1/images/photos/000/051/304/original/Lord_Shiva_statue_at_Murudeshwara.jpg.jpg?1458198447" alt="Gokarna" class="imageWidth" />
            </div>
          
            <div class="item">
      <img src="http:\/\/a2.images.thrillophilia.com/image/upload/s--ZGlO1j3V--/c_fill,f_auto,fl_strip_profile,h_800,q_jpegmini,w_1300/v1/images/photos/000/010/826/original/m_IMG_0131.jpg.jpg?1453306672" alt="Gokarna" class="imageWidth" />
            </div>
          </div>
      
         
          <a class="left carousel-control" href="#myCarousel" data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="right carousel-control" href="#myCarousel" data-slide="next">
            <span class="glyphicon glyphicon-chevron-right"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      )
  }
}
