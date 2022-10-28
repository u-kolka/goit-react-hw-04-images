import { Component, useEffect, useState } from "react";
import {Loader} from './Loader/Loader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from "./Searchbar/Searchbar";
import PixabayAPI from "./PixabayAPI/PixabayAPI";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Button } from "./Button/Button";

// class App extends Component {

//   state = {
//     queryImages: '',
//     images: [],
//     page: 1,
//     isLoading: false,
//     error: null,
//   }

//   async componentDidUpdate(prevProps, prevState) {
//     const prevQuery = prevState.queryImages;
//     const nextQuery = this.state.queryImages;
         
//     if (prevQuery !== nextQuery || prevState.page !== this.state.page) {
//       try {
//         const nextImages = await PixabayAPI.fetchImagesByQuery(nextQuery, this.state.page);
//         const newImages = [...this.state.images, ...nextImages];
//         this.setState({ images: newImages, isLoading: true });
//       } catch (error) {
//         console.log(error.message)
//         this.setState({ error });
//       }
//     }
 
//     if (this.state.page !== 1) {
//       const galleryHeight = document.getElementById('galleryHeight').clientHeight
//       window.scrollBy({
//         top: galleryHeight,
//         left: 0,
//         behavior: 'smooth'
//       });
//     };
//   }
        




  
//     render() {
//       const { queryImages, isLoading, images } = this.state;

//       return (
//         <div className="Wrapper">
//           <Searchbar onSearch={this.handleFormSubmit} />
//           {images && <ImageGallery images={images} />}
//           {queryImages && !isLoading && <Loader />}
//           {images.length > 0 && <Button onClick={this.onLoadMore} />}
//           <ToastContainer autoClose={3000} theme={"dark"} icon={false} />
//         </div>
//       )
//     }
//   }


// export default App;


export const App = () => {
  const [queryImages, setQueryImages] = useState('');   
  const [images, setImages] = useState([]);   
  const [page, setPage] = useState(1);   
  const [isLoading, setIsLoading] = useState(false);   
  const [error, setError] = useState(null); 
  
  const handleFormSubmit = (query) => {
    setQueryImages(query);
    setImages([]);
    setPage(1);
    setIsLoading(false);

    // if (query === this.state.queryImages) {
    //   return toast.info('🦄 Please enter a new word to search.');
    // }
  };

  const LoadMore = () => {
    setPage(prevPage => prevPage + 1);
    setIsLoading(false);
  };

  useEffect(() => {
    async function fetch () {
      const nextImages = await PixabayAPI.fetchImagesByQuery(queryImages, page);
      setImages(prevImages => [...prevImages, ...nextImages]);
    }  
    fetch ()
    
    setIsLoading(true);
  }, [queryImages, page])

  return (
    <div className="Wrapper">
      <Searchbar onSearch={handleFormSubmit} />
      {images && <ImageGallery images={images} />}
      {queryImages && !isLoading && <Loader />}
      {images.length > 0 && <Button onClick={LoadMore} />}
      <ToastContainer autoClose={3000} theme={"dark"} icon={false} />
    </div>
  );


}