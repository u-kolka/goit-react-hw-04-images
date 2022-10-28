import { Component } from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem'
 
export class ImageGallery extends Component {

    static propTypes = {
        images: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
        }))
    }
    
    render() {
        const { images } = this.props;
        return (
            <ul className="ImageGallery" id='galleryHeight'>
                {images.map(elem =>
                    <ImageGalleryItem key={elem.id} image={elem.webformatURL} modalImage={elem.largeImageURL} tags={elem.tags} />
                )}
            </ul>)
    }
}
