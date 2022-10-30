import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem'
 
export function ImageGallery({images}) {
    
    return (
        <ul className="ImageGallery" id='galleryHeight'>
            {images.map(elem =>
                <ImageGalleryItem key={elem.id} image={elem.webformatURL} modalImage={elem.largeImageURL} tags={elem.tags} />
            )}
        </ul>
    );
};

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
    }))
}
