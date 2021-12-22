import React from 'react';
import NextLink from 'next/link';

const Post = ({ posts }) => {
  const projects = posts.map((post) => {
    return (
      <NextLink href={`/portfolio/subpage1/${post.slug}`}>
        <a className="">{post.slug}</a>
      </NextLink>
    );
  });

  return <div>{projects}</div>;
};

export default Post;
