import React, { useState } from 'react';
import Carousel, { Modal, ModalGateway } from 'react-images';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const sketchItem = ({ imageSrc }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
      <img src={imageSrc} />
      {/* {isOpen && (
        <ModalGateway>
          {isOpen ? (
            <Modal onClose={() => setIsOpen(!isOpen)}>
              <Carousel views={[{ source: imageSrc }]} />
            </Modal>
          ) : null}
        </ModalGateway>
      )} */}
      {isOpen && (
        <Lightbox
          mainSrc={imageSrc}
          /* nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]} */
          onCloseRequest={() => setIsOpen(!isOpen)}
          /* onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            } */
        />
      )}
    </div>
  );
};

export default sketchItem;
