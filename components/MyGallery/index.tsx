import * as React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/scss/image-gallery.scss';

const images = [
  {
    original: 'baseball.webp',
    thumbnail: 'baseball.webp',
  },
  {
    original: 'baseball.webp',
    thumbnail: 'baseball.webp',
  },
  {
    original: 'baseball.webp',
    thumbnail: 'baseball.webp',
  },
  {
    original: 'baseball.webp',
    thumbnail: 'baseball.webp',
  },
];

function MyGallery() {
  return <ImageGallery items={images} />;
}
export default MyGallery;
