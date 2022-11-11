import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const basicBox = document.querySelector(".gallery");

function createGallery(elements) {
  return elements
    .map(
      (element) =>
        `<li> <a class="gallery__item" href="${element.original}">
  <img class="gallery__image" src="${element.preview}" alt="${element.description}" />
</a></li> `
    )
    .join("");
}

basicBox.innerHTML = createGallery(galleryItems);

const gallery = new SimpleLightbox("ul.gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
console.log(gallery);
