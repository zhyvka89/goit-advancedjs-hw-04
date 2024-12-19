import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import getImages from './js/pixabay-api';
import {
  createCard,
  appendCards,
  hideLoader,
  scrollPage,
} from './js/render-functions';

const formRef = document.querySelector('.search-form');
const ulElemRef = document.querySelector('.images-list');
const loadMoreBtnRef = document.querySelector('.load-more-btn');
const infoTextRef = document.querySelector('.info');

let page = 1;
let query = '';
const limit = 15;
const totalPages = Math.ceil(500 / limit);

formRef.addEventListener('submit', e => handleSubmit(e));
loadMoreBtnRef.addEventListener('click', handleClick);

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

  if (e.target.search.value.trim() !== query) {
    page = 1;
    loadMoreBtnRef.style.display = 'none';
  }

  ulElemRef.innerHTML = '';

  query = e.target.search.value.trim().split(' ').join('+');

  getImages(query, page, limit)
    .then(result => {
      if (result.hits.length) {
        const cards = result.hits.map(hit => createCard(hit)).join('');
        appendCards(ulElemRef, cards);
        gallery.refresh();
        page++;
        loadMoreBtnRef.style.display = 'block';
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

function handleClick() {
  getImages(query, page, limit)
    .then(result => {
      if (result.hits.length) {
        const cards = result.hits.map(hit => createCard(hit)).join('');
        appendCards(ulElemRef, cards);
        gallery.refresh();
        page++;
        scrollPage();
      }
      if (page > totalPages) {
        infoTextRef.style.display = 'block';
        loadMoreBtnRef.style.display = 'none';
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
