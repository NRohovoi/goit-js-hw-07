// Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.
// Реализация делегирования на div.gallery и получение url большого изображения.
// Подключение скрипта и стилей библиотеки модального окна basicLightbox.Используй CDN сервис jsdelivr 
// и добавь в проект ссылки на минифицированные(.min) файлы библиотеки.
// Открытие модального окна по клику на элементе галереи. Для этого ознакомься с документацией и примерами.
// Замена значения атрибута src элемента < img > в модальном окне перед открытием.Используй готовую разметку 
// модального окна с изображением из примеров библиотеки basicLightbox.


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

const onGalleryItemClick = (e) => {
  e.preventDefault();
  if (e.target.nodeName !== `IMG`) {
    return;
  }
  let enlargedPicture = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">
`, {
  onShow: (enlargedPicture) => {window.addEventListener('keydown', onEscKeyPress)},
  onClose: (enlargedPicture) =>{window.removeEventListener('keydown', onEscKeyPress)}
  })
    
    enlargedPicture.show()
    
function onModalClose(){
  enlargedPicture.close();
}

function onEscKeyPress(e) {
  if (e.code === "Escape") {
    onModalClose();
    
  }
}
};
gallery.addEventListener(`click`, onGalleryItemClick);

console.log(galleryItems);
