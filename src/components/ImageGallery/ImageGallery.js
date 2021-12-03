import React from "react";
import ImageGalleryItem from "../ImageGalleryItem /ImageGalleryItem ";
import s from "./ImageGallery.module.scss";
export default function ImageGallery({ images }) {
  return (
    <ul className={s.gallery}>
      {images.map((image) => (
        <ImageGalleryItem
          key={image.id}
          webformatURL={image.webformatURL}
          largeImageURL={image.largeImageURL}
        />
      ))}

      {/* {images.map(image{id, webformatURL, largeImageURL} => (
            <ImageGalleryItem key={id} webformatURL={webformatURL} largeImageURL={largeImageURL}/>
            ))} */}
    </ul>
  );
}
