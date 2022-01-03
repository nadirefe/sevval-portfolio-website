import React from 'react';
import Container from '../../../components/Container';
import { MDXRemote } from 'next-mdx-remote';
//import { getFiles } from '../../../lib/mdx';
import { getFileBySlug } from '../../../lib/mdx';
import BlogLayout from '../../../layouts/blog';


export default function Blog({ mdxSource, frontMatter }) {
  const content = <MDXRemote {...mdxSource} />;
  return (
    <Container>
      <BlogLayout frontMatter={frontMatter}>{content}</BlogLayout>
    </Container>
  );
}

export async function getStaticProps({ params }) {
  const post = await getFileBySlug('posts/art', 'sculpture-project');
  return { props: post };
}
