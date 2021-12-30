import React, { useState } from 'react';
import Container from '../components/Container';
import Image from 'next/image';
import { Lightbox } from 'react-modal-image';
import Carousel, { Modal, ModalGateway } from 'react-images';
import PhotoModal from '../components/photoModal.js';

const photos = Array.apply(null, Array(34)).map((i, index) => {
  if (index < 5) {
    return (
      <div className="gallery-item">
        <Image
          src={`/images/photography/IMG_${index}.JPEG`}
          alt={`picture_${index}`}
          layout="fill"
          className="image"
          priority
          //quality={50}
        />
      </div>
    );
  } else {
    return (
      <div className="gallery-item">
        <Image
          src={`/images/photography/IMG_${index}.JPEG`}
          alt={`picture_${index}`}
          layout="fill"
          className="image"
          //quality={50}
        />
      </div>
    );
  }
});

const photography = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  const photos2 = Array.apply(null, Array(34)).map((i, index) => {
    return (
      <>
        {/* <div className="gallery-item" onClick={() => setIsOpen(true)}>
          <img src={`/images/photography/IMG_${index}.JPEG`} />
          {isOpen && (
            <ModalGateway>
              {isOpen ? (
                <Modal onClose={() => setIsOpen(!isOpen)}>
                  <Carousel
                    views={[
                      { source: `/images/photography/IMG_${index}.JPEG` },
                    ]}
                  />
                </Modal>
              ) : null}
            </ModalGateway>
          )}
        </div> */}
        <PhotoModal imageSrc={`/images/photography/IMG_${index}.JPEG`} />
      </>
    );
  });

  return (
    <Container title="Photo">
      <div className="gallery">
        {photos2}

        {/* <div className="gallery-item">
          <img src="/images/photography/IMG_0.JPEG" />
        </div>
        <div className="gallery-item">
          <img src="/images/photography/IMG_1.JPEG" />
        </div>
        <div className="gallery-item">
          <img src="/images/photography/IMG_2.JPEG" />
        </div>
        <div className="gallery-item">
          <img src="/images/photography/IMG_3.JPEG" />
        </div>
        <div className="gallery-item">
          <img src="/images/photography/IMG_4.JPEG" />
        </div>
        <div className="gallery-item">
          <img src="/images/photography/IMG_5.JPEG" />
        </div>
        <div className="gallery-item">
          <img src="/images/photography/IMG_6.JPEG" />
        </div>
        <div className="gallery-item">
          <img src="/images/photography/IMG_7.JPEG" />
        </div>
        <div className="gallery-item">
          <img src="/images/photography/IMG_8.JPEG" />
        </div>
        <div className="gallery-item">
          <img src="/images/photography/IMG_9.JPEG" />
        </div>
        <div className="gallery-item">
          <img src="/images/photography/IMG_10.JPEG" />
        </div>
        <div className="gallery-item">
          <img src="/images/photography/IMG_11.JPEG" />
        </div>
        <div className="gallery-item">
          <img src="/images/photography/IMG_12.JPEG" />
        </div>
        <div className="gallery-item">
          <img src="/images/photography/IMG_13.JPEG" />
        </div>
        <div className="gallery-item">
          <img src="/images/photography/IMG_14.JPEG" />
        </div>
        <div className="gallery-item">
          <img src="/images/photography/IMG_15.JPEG" />
        </div>
        <div className="gallery-item">
          <img src="/images/photography/IMG_16.JPEG" />
        </div>
        <div className="gallery-item">
          <img src="/images/photography/IMG_17.JPEG" />
        </div>
        <div className="gallery-item">
          <img src="/images/photography/IMG_18.JPEG" />
        </div>
        <div className="gallery-item">
          <img src="/images/photography/IMG_19.JPEG" />
        </div>
        <div className="gallery-item">
          <img src="/images/photography/IMG_20.JPEG" />
        </div>
        <div className="gallery-item">
          <img src="/images/photography/IMG_21.JPEG" />
        </div>
        <div className="gallery-item">
          <img src="/images/photography/IMG_22.JPEG" />
        </div>
        <div className="gallery-item">
          <img src="/images/photography/IMG_23.JPEG" />
        </div>
        <div className="gallery-item">
          <img src="/images/photography/IMG_24.JPEG" />
        </div>
        <div className="gallery-item">
          <img src="/images/photography/IMG_25.JPEG" />
        </div>
        <div className="gallery-item">
          <img src="/images/photography/IMG_26.JPEG" />
        </div>
        <div className="gallery-item">
          <img src="/images/photography/IMG_27.JPEG" />
        </div>
        <div className="gallery-item">
          <img src="/images/photography/IMG_28.JPEG" />
        </div>
        <div className="gallery-item">
          <img src="/images/photography/IMG_29.JPEG" />
        </div>
        <div className="gallery-item">
          <img src="/images/photography/IMG_30.JPEG" />
        </div>
        <div className="gallery-item">
          <img src="/images/photography/IMG_31.JPEG" />
        </div>
        <div className="gallery-item">
          <img src="/images/photography/IMG_32.JPEG" />
        </div>
        <div className="gallery-item">
          <img src="/images/photography/IMG_33.JPEG" />
        </div> */}
      </div>
    </Container>
  );
};

export default photography;
