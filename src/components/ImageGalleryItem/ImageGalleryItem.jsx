import { Component } from "react"
import PropTypes from 'prop-types'; 
import Modal from "../Modal/Modal";

export class ImageGalleryItem extends Component {

    static propTypes = {
        image: PropTypes.string.isRequired,
        modalImage: PropTypes.string.isRequired,
        tags: PropTypes.string.isRequired,
    }

    state = {
        isModalOpen: false,
    }

    openModal = () => {
        this.setState({isModalOpen: true})
    }

    closeModal = () => {
        this.setState({isModalOpen: false})
    }

    render() {
        const { image, modalImage, tags } = this.props;
        const { isModalOpen } = this.state;

    return (
        <li className='ImageGalleryItem'>
            <img className='ImageGalleryItem-image' src={image} alt={tags} onClick={this.openModal}/>
            {isModalOpen && <Modal image={modalImage} tags={tags} onClose={this.closeModal} />}
        </li >
        )
    }
} 
