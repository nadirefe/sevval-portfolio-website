import React, { useState } from 'react';
import Container from '../components/Container';
import PhotoModal from '../components/photoModal.js';

const Photography = () => {
  const photos2 = Array.apply(null, Array(34)).map((i, index) => {
    return (
      <>
        <PhotoModal imageSrc={`/images/photography/IMG_${index}.JPEG`} />
      </>
    );
  });

  return (
    <Container title='Photography'>
      <div className='gallery'>{photos2}</div>
    </Container>
  );
};

export default Photography;
