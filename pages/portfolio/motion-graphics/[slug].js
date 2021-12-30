import React from 'react';
import Container from '../../../components/Container';
import { MDXRemote } from 'next-mdx-remote';
import { getFiles } from '../../../lib/mdx';
import { getFileBySlug } from '../../../lib/mdx';
import BlogLayout from '../../../layouts/blog';
//import MDXComponents from '../../components/MDXComponents';

export default function Blog({ mdxSource, frontMatter }) {
  const content = <MDXRemote {...mdxSource} />;
  return (
    <Container>
      <BlogLayout frontMatter={frontMatter}>{content}</BlogLayout>

      {/* {mdxSource} */}
    </Container>
  );
}

/* export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          slug: 'test',
        },
      },
    ],
    fallback: false,
  };
} */
export async function getStaticPaths() {
  const posts = await getFiles('posts/motion-graphics');

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ''),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  //const post = { mdxSource: 'efe' };
  const post = await getFileBySlug('posts/motion-graphics', params.slug);

  return { props: post };
}
