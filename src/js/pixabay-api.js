import { showLoader } from './render-functions';

const params = new URLSearchParams({
  key: '47568770-df67670bdc8e06478abf0c27f',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
});

const url = `https://pixabay.com/api/?${params}`;

export default function getImages(query) {
  showLoader();
  return fetch(`${url}&q=${query}`).then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    }
    return res.json();
  });
}
