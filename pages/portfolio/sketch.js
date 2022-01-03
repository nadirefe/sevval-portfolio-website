import React, { useState } from 'react';
import Container from '../../components/Container';
import SketchItem from '../../components/sketchItem.js';

const Sketch = () => {

  const photos = Array.apply(null, Array(9)).map((i, index) => {
    return (
      <>
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
