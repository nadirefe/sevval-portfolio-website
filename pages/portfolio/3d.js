import React from 'react';
import Container from '../../components/Container';
import SketchItem from '../../components/sketchItem.js';

const ThreeD = () => {
  const photos = Array.apply(null, Array(4)).map((i, index) => {
    return (
      <>
        <SketchItem imageSrc={`/images/3D/IMG_${index}.png`} />
      </>
    );
  });
  return (
    <Container title="Portfolio">
      <div className="grid grid-cols-3 gap-3">{photos}
        <div className="relative w-full pt-7/12">
          <iframe width="560" height="280" src="https://www.youtube.com/embed/av-Kjtizmk4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </div>
    </Container>
  );
};

export default ThreeD;
