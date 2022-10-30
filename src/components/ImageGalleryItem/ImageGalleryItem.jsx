import { useState } from "react"
import PropTypes from 'prop-types'; 
import Modal from "../Modal/Modal";

export function ImageGalleryItem ({image, modalImage, tags}){
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = () => {
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    return (
        <li className='ImageGalleryItem'>
            <img className='ImageGalleryItem-image' src={image} alt={tags} onClick={openModal} />
            {isModalOpen && <Modal image={modalImage} tags={tags} onClose={closeModal} />}
        </li >
    )
};

    ImageGalleryItem.propTypes = {
        image: PropTypes.string.isRequired,
        modalImage: PropTypes.string.isRequired,
        tags: PropTypes.string.isRequired,
    }