import React from "react";
export default function ImageGalleryItem({ id, webformatURL, largeImageURL }) {
  return (
    <li>
      <img src={webformatURL} />
    </li>
  );
}
