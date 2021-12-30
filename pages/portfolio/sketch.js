import React, { useState } from 'react';
import Container from '../../components/Container';
import Image from 'next/image';
import SketchItem from '../../components/sketchItem.js';

const Sketch = () => {
  const [isOpen, setIsOpen] = useState(false);

  const photos = Array.apply(null, Array(9)).map((i, index) => {
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
        <SketchItem imageSrc={`/images/sketch/IMG_${index}.png`} />
      </>
    );
  });
  return (
    <Container title="Portfolio">
      <div className="grid grid-cols-4 gap-4">{photos}</div>
    </Container>
  );
};

export default Sketch;
