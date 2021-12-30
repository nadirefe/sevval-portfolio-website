import React from 'react';
import Container from '../../components/Container';
import Post from '../../components/Post';

const ThreeD = () => {
  return (
    <Container title="Portfolio">
      <div className="flex flex-col">
        <Post
          posts={[
            { title: 'Paintings', slug: 'paintings' },
            { title: 'Installations', slug: 'installations' },
          ]}
          type="portfolio/art"
        />
      </div>
    </Container>
  );
};

export default ThreeD;
