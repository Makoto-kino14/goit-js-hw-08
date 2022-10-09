// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import '../css/common.css';
import '../css/01-gallery.css';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const imagesMarkup = createImgGallery(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", imagesMarkup);

function createImgGallery(item) {
    return galleryItems
    .map(({ preview, original, description }) => {
        return `
            <div class='gallery__item'>
                <a class='gallery__link'
                    href='${original}'>
                    <img 
                        class='gallery__image'
                        src='${preview}'
                        data-source='${original}'
                        alt='${description}'
                    />
                </a>
            </div>`;
    })
    .join("");
}


const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionPosition:"bottom",
    captionDelay: 250,
    captionType: "alt",
    docClose: "true",
});