import React from 'react';
import Container from '../../components/Container';
import { MDXRemote } from 'next-mdx-remote';
import { getFiles, getFileBySlug } from '../../lib/mdx';
import BlogLayout from '../../layouts/blog';


export default function Blog({ mdxSource, frontMatter }) {
  const content = <MDXRemote {...mdxSource} />;

  return (
    <Container>
      <BlogLayout frontMatter={frontMatter}>{content}</BlogLayout>
    </Container>
  );
}

export async function getStaticPaths() {
  const posts = await getFiles('films');

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
  const post = await getFileBySlug('films', params.slug);

  return { props: post };
}
