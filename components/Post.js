import React from 'react';
import NextLink from 'next/link';

const Post = ({ posts, type }) => {
  const projects = posts.map((post, index) => {
    if (index === 1) {
      return (
        <NextLink href={`/${type}/${post.slug}`}>
          <div className="h-40 flex items-center border-b-2 border-black cursor-pointer post">
            <a className="text-6xl font-bold pl-3 post-text">{post.title}</a>
          </div>
        </NextLink>
      );
    } else {
      return (
        <NextLink href={`/${type}/${post.slug}`}>
          <div className="h-40 flex items-center border-t-2 border-b-2 border-black cursor-pointer post">
            <a className="text-6xl font-extrabold pl-3">{post.title}</a>
          </div>
        </NextLink>
      );
    }
  });

  return <div className="">{projects}</div>;
};

export default Post;
