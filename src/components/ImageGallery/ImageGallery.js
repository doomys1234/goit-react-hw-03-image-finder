import React from "react";
import ImageGalleryItem from "../ImageGalleryItem /ImageGalleryItem ";
import s from "./ImageGallery.module.scss";
import PropTypes from "prop-types";
export default function ImageGallery({ images, onImageClick }) {
  return (
    <ul className={s.image_gallery}>
      {images.map((image) => (
        <ImageGalleryItem
          key={image.id}
          webformatURL={image.webformatURL}
          largeImageURL={image.largeImageURL}
          onClick={() => {
            onImageClick(image.largeImageURL);
          }}
        />
      ))}

      {/* {images.map(image{id, webformatURL, largeImageURL} => (
            <ImageGalleryItem key={id} webformatURL={webformatURL} largeImageURL={largeImageURL}/>
            ))} */}
    </ul>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.array,
  onImageClick: PropTypes.func,
};
