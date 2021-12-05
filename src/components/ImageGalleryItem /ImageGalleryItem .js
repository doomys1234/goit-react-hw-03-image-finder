import React from "react";
import s from "./ImageGalleryItem.module.scss";
export default function ImageGalleryItem({
  id,
  webformatURL,
  largeImageURL,
  onClick,
}) {
  return (
    <li className={s.image_gallery_item} onClick={() => onClick(largeImageURL)}>
      <img className={s.gallery_item_image} src={webformatURL} alt="#" />
    </li>
  );
}
