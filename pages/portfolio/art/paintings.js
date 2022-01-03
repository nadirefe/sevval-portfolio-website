import React, { useState } from 'react';
import Container from '../../../components/Container';
import SketchItem from '../../../components/sketchItem.js';

const Paintings = () => {
  const [isOpen, setIsOpen] = useState(false);

  const photos = Array.apply(null, Array(4)).map((i, index) => {
    return (
      <>
        <SketchItem imageSrc={`/images/art/IMG_${index}.png`} />
      </>
    );
  });
  return (
    <Container>
      <div className="grid grid-cols-4 gap-4">{photos}</div>
    </Container>
  );
};

export default Paintings;
