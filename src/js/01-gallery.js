// 1. Додай бібліотеку SimpleLightbox як залежність проекту,
// використовуючи npm (посилання на CDN з твоєї минулої роботи більше не потрібне).
// 2. Використовуй свій JavaScript код з попередньої домашньої роботи,
// але виконай рефакторинг з урахуванням того, що бібліотека була встановлена 
// через npm (синтаксис import / export).

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryRef = document.querySelector('.gallery');

galleryRef.insertAdjacentHTML('beforeend', createGallery(galleryItems));

galleryRef.addEventListener('click', onGalleryClick);

function createGallery(galleryItems) {
return galleryItems.map(({preview, original, description}) => {
    return `
<a 
class="gallery__item" 
href="${original}">
<img 
class="gallery__image" 
src="${preview}" 
alt="${description}" />
</a>
    `
}).join('');
};

const lightbox = new SimpleLightbox('.gallery a', {
captionsData: 'alt',
captionsDelay: 250,
});


