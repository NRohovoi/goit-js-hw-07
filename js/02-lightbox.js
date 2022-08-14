import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

const createGalleryCard = (galleryItems) => {
    return galleryItems.map(({ preview, original, description }) =>
    `<div class= "gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </div>`).join('');
};

gallery.insertAdjacentHTML('beforeend', createGalleryCard(galleryItems));

let galleryModal = new SimpleLightbox('.gallery a', {
  captionType:`attr`,
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
  caption: true,
     
});
 
console.log(galleryItems);
