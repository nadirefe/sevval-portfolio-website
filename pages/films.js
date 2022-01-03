import React from 'react';
import Container from '../components/Container';
import Post from '../components/Post';
import { getAllFilesFrontMatter } from '../lib/mdx';

const subpage1 = ({ films }) => {

  return (
    <Container title="Portfolio">
      <div className="flex flex-col">
        <Post posts={films} type="films" />
      </div>
    </Container>
  );
};

export async function getStaticProps() {
  const films = await getAllFilesFrontMatter('films');

  return { props: { films } };
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
