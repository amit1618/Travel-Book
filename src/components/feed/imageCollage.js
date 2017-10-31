import React from 'react';
import './feed.css'
 import Gallery from 'react-grid-gallery';
import PropTypes from 'prop-types';

export default class ImageCollage extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            images: this.props.images
        };

    }

    
    render () {
        return (
                <div onClick={this.myClick}>
                <Gallery
            images={this.state.images}
            enableLightbox={false}
            enableImageSelection={false}/>
                </div>
        );
    }
}

ImageCollage.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string.isRequired,
            thumbnail: PropTypes.string.isRequired,
            srcset: PropTypes.array,
            caption: PropTypes.string,
            thumbnailWidth: PropTypes.number.isRequired,
            thumbnailHeight: PropTypes.number.isRequired
        })
    ).isRequired
};

ImageCollage.defaultProps = {
    images: [
        {
            src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
            thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
            thumbnailWidth: 350,
            thumbnailHeight: 220,
            caption: "After Rain (Jeshu John - designerspics.com)"
        },
        {
            src: "https://c6.staticflickr.com/9/8890/28897154101_a8f55be225_b.jpg",
            thumbnail: "https://c6.staticflickr.com/9/8890/28897154101_a8f55be225_n.jpg",
            thumbnailWidth: 350,
            thumbnailHeight: 220,
            caption: "37H (gratispgraphy.com)"
        },
        {
            src: "https://c7.staticflickr.com/9/8106/28941228886_86d1450016_b.jpg",
            thumbnail: "https://c7.staticflickr.com/9/8106/28941228886_86d1450016_n.jpg",
            thumbnailWidth: 350,
            thumbnailHeight: 220,
            caption: "Orange Macro (Tom Eversley - isorepublic.com)"
        },
        {
            src: "https://c6.staticflickr.com/9/8342/28897193381_800db6419e_b.jpg",
            thumbnail: "https://c6.staticflickr.com/9/8342/28897193381_800db6419e_n.jpg",
            thumbnailWidth: 350,
            thumbnailHeight: 220,
            caption: "201H (gratisography.com)"
        }
    ]
};