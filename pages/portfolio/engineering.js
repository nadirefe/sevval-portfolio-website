import React from 'react';
import Container from '../../components/Container';
import Post from '../../components/Post';
import { getAllFilesFrontMatter } from '../../lib/mdx';

const Engineering = ({ posts }) => {
  return (
    <Container title="Portfolio">
      <div className="flex flex-col">
        <Post posts={posts} type="portfolio/engineering" />
      </div>
    </Container>
  );
};

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('posts/engineering');
  return { props: { posts } };
}

export default Engineering;
