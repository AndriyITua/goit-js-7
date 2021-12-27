import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const galleryCardMarkup = createImagesCardsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryCardMarkup);

galleryContainer.addEventListener('click', ongalleryContainerClick);

function createImagesCardsMarkup (galleryItems) { 
    return galleryItems
        .map(({ preview, original, description }) => {
            return `
            <div class="gallery__item">
            <a class="gallery__link" href="large-image.jpg">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
             />
            </a>
            </div>
            `
        }).join('');
}

function ongalleryContainerClick(e) {

    if (!e.target.classList.contains('gallery__image')) {
        return;
    }
    console.log(e.target);
}

galleryContainer.addEventListener('click', createModal)

let image = '';
function createModal(e) {
    e.preventDefault();
    image = basicLightbox.create(
        `<div class = 'modal'> <img src = '${e.target.dataset.source}'></div>`
    );
    image.show();
}

function onEscKeyPress(e) {
    const ESC_KEY_CODE = 'Escape';
    const isEscKey = e.code === ESC_KEY_CODE;

    if (isEscKey) {
        image.close();
    }
}

galleryContainer.addEventListener('keydown', onEscKeyPress);