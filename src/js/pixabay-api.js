import { showLoader } from './render-functions';
import axios from 'axios';

const url = 'https://pixabay.com/api/';

export default async function getImages(query, page, limit) {
  const params = {
    key: '47568770-df67670bdc8e06478abf0c27f',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    q: query,
    page,
    per_page: limit
  };
  showLoader();
  const result = await axios.get(url, {params});
  return result.data;
}