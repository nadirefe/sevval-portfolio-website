import React from 'react';
import Container from '../../../components/Container';
//import hydrate from 'next-mdx-remote/hydrate';
//import { getFiles, getFileBySlug } from '../../../lib/mdx';
import BlogLayout from '../../../layouts/blog';
//import MDXComponents from '../../components/MDXComponents';

export default function Blog({ mdxSource, frontMatter }) {
  return (
    <Container>
      {/*  <BlogLayout frontMatter={frontMatter}>{content}</BlogLayout> */}
      hello
    </Container>
  );
}

export async function getStaticProps({ params }) {
  const post = {};
  console.log(params);
  //const post = await getFileBySlug('posts', params.slug);

  return { props: post };
}
