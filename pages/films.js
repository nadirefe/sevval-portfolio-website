import React from 'react';
import Container from '../components/Container';
import Post from '../components/Post';
import { getAllFilesFrontMatter } from '../lib/mdx';

const Film = ({ films }) => {
  return (
    <Container title='Film Readings'>
      <div className='flex flex-col'>
        <Post posts={films} type='films' />
      </div>
    </Container>
  );
};

export async function getStaticProps() {
  const films = await getAllFilesFrontMatter('films');

  return { props: { films } };
}

export default Film;
