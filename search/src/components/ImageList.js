import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

// When you have functional components you have to manually pass props into it
// because functional components by themselves do not have a state.
const ImageList = (props) => {
    const images = props.images.map(image => {
        return <ImageCard key={image.id} image={image}/>
    });

    return <div className="image-list">{images}</div> 
};

export default ImageList;