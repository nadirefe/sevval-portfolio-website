import React from 'react';
import Container from '../../../components/Container';
import NextLink from 'next/link';

const subpage1 = () => {
  return (
    <Container title="Portfolio">
      <NextLink href="/portfolio/subpage2/test">
        <a className="">Project 1</a>
      </NextLink>
    </Container>
  );
};

export default subpage1;
