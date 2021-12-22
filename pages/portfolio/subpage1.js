import React from 'react';
import Container from '../../components/Container';
//import fs from 'fs';
//import path from 'path';
//import matter from 'gray-matter';
import Post from '../../components/Post';
import { getAllFilesFrontMatter } from '../../lib/mdx';

const subpage1 = ({ posts }) => {
  return (
    <Container title="Portfolio">
      <div className="flex flex-col">
        <Post posts={posts} />
      </div>
    </Container>
  );
};

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('posts');

  return { props: { posts } };
}

/* export async function getStaticProps() {
  const POSTS_PATH = path.join(process.cwd(), 'data', 'posts');
  // Get files from the posts dir
  const files = fs.readdirSync(path.join(POSTS_PATH));
  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace('.mdx', '');

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join(POSTS_PATH, filename),
      'utf-8'
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });
  return {
    props: {
      posts: posts,
    },
  };
} */

export default subpage1;
