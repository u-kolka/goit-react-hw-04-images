import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types'; 

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {

  static propTypes = {
    image: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    const { image, tags } = this.props;

    return createPortal(
    <div className="Overlay" onClick={this.handleBackdropClick}>
        <div className="Modal">{this.props.children}
          <img src={image} alt={tags} />
        </div>
    </div>,
      modalRoot,
    );
  }
}