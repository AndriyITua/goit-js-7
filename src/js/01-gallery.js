import { galleryItems } from './gallery-items.js';
// Change code below this line

const galletyContainer = document.querySelector('.gallery');
const galleryCardMarkup = createImagesCardsMarkup(galleryItems);

galletyContainer.insertAdjacentHTML('beforeend', galleryCardMarkup);

galletyContainer.addEventListener('click', ongalletyContainerClick);

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

function ongalletyContainerClick(e) {

    if (!e.target.classList.contains('gallery__image')) {
        return;
    }
    console.log(e.target);
}

galletyContainer.addEventListener('click', createModal)

function createModal(e) {
    e.preventDefault();
    const image = basicLightbox.create(
        `<div class = 'modal'> <img src = '${e.target.dataset.source}'></div>`
    );
    image.show();
}
console.log(galleryItems);