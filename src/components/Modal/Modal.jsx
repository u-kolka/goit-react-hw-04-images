import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types'; 

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ image, tags, onClose }) {
  
  useEffect(() => { 
    const handleKeyDown = event => {
    if (event.code === 'Escape') {
      onClose();
    }
  };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);  
    };
  }, [onClose]);

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

    return createPortal(
    <div className="Overlay" onClick={handleBackdropClick}>
        <div className="Modal">
          <img src={image} alt={tags} />
        </div>
    </div>,
      modalRoot,
    );
}

  Modal.propTypes = {
    image: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
  }