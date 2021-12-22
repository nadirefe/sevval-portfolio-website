import React from 'react';
import Container from '../../../components/Container';
import hydrate from 'next-mdx-remote/hydrate';
import { getFiles, getFileBySlug } from '../../../lib/mdx';
import BlogLayout from '../../../layouts/blog';
//import MDXComponents from '../../components/MDXComponents';

export default function Blog({ mdxSource, frontMatter }) {
  const content = hydrate(mdxSource /* , {
    components: MDXComponents,
  } */);

  return (
    <Container>
      <BlogLayout frontMatter={frontMatter}>{content}</BlogLayout>
    </Container>
  );
}

export async function getStaticPaths() {
  const posts = await getFiles('posts');

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
  const post = await getFileBySlug('posts', params.slug);

  return { props: post };
}
