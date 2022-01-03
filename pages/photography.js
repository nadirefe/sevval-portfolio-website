import React, { useState } from 'react';
import Container from '../components/Container';
import Image from 'next/image';
import PhotoModal from '../components/photoModal.js';

const photography = () => {
  const photos2 = Array.apply(null, Array(34)).map((i, index) => {
    return (
      <>
        <PhotoModal imageSrc={`/images/photography/IMG_${index}.JPEG`} />
      </>
    );
  });

  return (
    <Container title="Photo">
      <div className="gallery">
        {photos2}
      </div>
    </Container>
  );
};

export default photography;
