//Create our image list Component
//Import React
import React from 'react';
import ImageDetail from './image_detail'
//Create our Component

const IMAGES = [
  {title: 'Pen', link: 'https://dummyimage.com/600X400'},
  {title: 'Pine Tree', link: 'https://dummyimage.com/600X400'},
  {title: 'Mug', link: 'https://dummyimage.com/600X400'}
];
const ImageList = (props) => {
  const validImages = props.images.filter (image => !image.is_album)
  const RenderedImages = validImages.map(image =>
    //console.log(image);
    <ImageDetail key={image.title} image = {image} />
  );
  return (
    <ul className = "media-list list-group">
      {RenderedImages}
    </ul>
  );
};
//Export our component
export default ImageList;
