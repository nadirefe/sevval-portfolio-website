import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const PhotoModal = ({ imageSrc }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="gallery-item cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
      <img src={imageSrc} />

      {isOpen && (
        <Lightbox
          mainSrc={imageSrc}
          onCloseRequest={() => setIsOpen(!isOpen)}
        />
      )}
    </div>
  );
};

export default PhotoModal;
