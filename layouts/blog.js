import React from 'react';
import Head from 'next/head';
//import { parseISO, format } from 'date-fns';
import { useRouter } from 'next/router';

export default function BlogLayout({ children, frontMatter }) {
  const router = useRouter();
  const slug = router.asPath.replace('/posts', '');
  return (
    <div>
      <Head>
        <title>{slug}</title>
      </Head>
      <p>{frontMatter.title}</p>
      {/*
      <p>{frontMatter.by}</p>
    <p>{frontMatter.readingTime.text}</p> */}
      <div>{children}</div>
    </div>
  );
}
