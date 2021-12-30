import React from 'react';
import Container from '../../components/Container';
import Post from '../../components/Post';
import { getAllFilesFrontMatter } from '../../lib/mdx';

const MotionGraphics = ({ posts }) => {
  return (
    <Container title="Portfolio">
      <div className="flex flex-col">
        <Post posts={posts} type="portfolio/motion-graphics" />
      </div>
    </Container>
  );
};

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('posts/motion-graphics');

  return { props: { posts } };
}

export default MotionGraphics;
