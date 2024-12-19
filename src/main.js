import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import getImages from './js/pixabay-api';
import { createCard, appendCards, hideLoader } from './js/render-functions';

const formRef = document.querySelector('.search-form');
const inputRef = document.querySelector('.search-input');
const ulElemRef = document.querySelector('.images-list');

formRef.addEventListener('submit', e => handleSubmit(e));

function handleSubmit(e) {
  e.preventDefault();

  if (!e.target.search.value.trim()) {
    iziToast.show({
      title: 'Warning',
      message: 'Please fill the field!',
      position: 'topRight',
      color: 'red',
    });
    return;
  }

  ulElemRef.innerHTML = '';

  const query = e.target.search.value.trim().split(' ').join('+');

  getImages(query)
    .then(result => {
      if (result.hits.length) {
        const cards = result.hits.map(hit => createCard(hit)).join('');
        appendCards(ulElemRef, cards);
        gallery.refresh();
      } else {
        iziToast.show({
          title: 'Warning',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          color: 'yellow',
        });
      }
    })
    .catch(error => {
      iziToast.show({
        title: 'Error',
        message: 'Sorry, trouble happend. Please try again later!',
        position: 'topRight',
        color: 'red',
      });
    })
    .finally(() => {
      hideLoader();
    });
}

let gallery = new SimpleLightbox('.card-link', {
  captionsData: 'alt',
  captionDelay: 250,
});

gallery.on('show.simplelightbox');
