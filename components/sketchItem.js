import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const SketchItem = ({ imageSrc }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
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

export default SketchItem;
