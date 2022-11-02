import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loader } from './Loader/Loader';

import PixabayAPI from "./PixabayAPI/PixabayAPI";
import Searchbar from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Button } from "./Button/Button";

export const App = () => {
  const [queryImages, setQueryImages] = useState('');   
  const [images, setImages] = useState([]);   
  const [page, setPage] = useState(1);   
  const [isLoading, setIsLoading] = useState(false);   
  const [error, setError] = useState(null); 

  useEffect(() => {
    if (queryImages === '') {
      return;
    }

    try {
      (async function fetchImages() {
      const nextImages = await PixabayAPI.fetchImagesByQuery(queryImages, page);
      setImages(prevImages => [...prevImages, ...nextImages]);
      })();
    }
    catch {
      setError(error)
      console.log(error.message)
    }

    setIsLoading(true);
  }, [queryImages, page]);

  useEffect(() => {
    setTimeout(() => {
      const galleryHeight = document.getElementById('galleryHeight').clientHeight
      window.scrollBy({
        top: galleryHeight,
        left: 0,
        behavior: 'smooth'
      });
    }, 300);
  }, [page])
  
  const handleFormSubmit = (query) => {
    if (query === queryImages) {
      return toast.info('🦄 Please enter a new word to search.');
    }

    setQueryImages(query);
    setImages([]);
    setPage(1);
    setIsLoading(false);
  };

  const LoadMore = () => {
    setPage(prevPage => prevPage + 1);
    setIsLoading(false);
  };

  return (
    <div className="Wrapper">
      <Searchbar onSearch={handleFormSubmit} />
      {images && <ImageGallery images={images} />}
      {queryImages && !isLoading && <Loader />}
      {images.length > 11 && images.length % 2 === 0 && <Button onClick={LoadMore} />}
      <ToastContainer autoClose={3000} theme={"dark"} icon={false} />
    </div>
  );
}