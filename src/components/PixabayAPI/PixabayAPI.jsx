import axios from "axios";

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = "29633086-11caad9948f49927590f6b971";

async function fetchImagesByQuery(query='', page = 1) {
  const controller = new AbortController();
  const params = {
    key: `${API_KEY}`,
    q: `${query}`,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
    page: `${page}`,
    signal: controller.signal,
  }; 
 
  try {
    const response = await axios.get(BASE_URL, { params }); 
    return response.data.hits; 
  } catch {
    return Promise.reject(new Error(`No pictures as requested: ${query}`));
  }
  // finally {
  //   return () => {
  //     controller.abort();
  //   };
  // }
};

const PixabayAPI = {
  fetchImagesByQuery,
};

export default PixabayAPI;