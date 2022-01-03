import React from 'react';

export default function BlogLayout({ children, frontMatter }) {

  return (
    <div>
      <div>{children}</div>
    </div>
  );
}
