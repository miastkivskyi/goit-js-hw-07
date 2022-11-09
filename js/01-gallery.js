import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const basicBox = document.querySelector(".gallery");

function createGallery(elements) {
  return elements
    .map(
      (element) =>
        `<div class="gallery__item">
        <a class="gallery__link" href="${element.original}">
          <img
            class="gallery__image"
            src="${element.preview}"
            data-source="${element.original}"
            alt="${element.description}"
          />
        </a>
      </div>`
    )
    .join("");
}

basicBox.innerHTML = createGallery(galleryItems);

basicBox.addEventListener("click", imageClick);

function imageClick(event) {
  disableLinks(event);

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);
  instance.show();

  basicBox.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  });
}

function disableLinks(event) {
  event.preventDefault();
}
