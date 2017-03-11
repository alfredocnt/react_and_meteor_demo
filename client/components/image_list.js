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
const ImageList = () => {
  const RenderedImages = IMAGES.map(function(image){
    // console.log(image);
    return <ImageDetail image = {image} />
  });
  return (
    <ul>
      {RenderedImages}
    </ul>
  );
};
//Export our component
export default ImageList;
