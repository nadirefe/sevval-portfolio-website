import Head from 'next/head';
import Image from 'next/image';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import cn from 'classnames';
import Container from '../components/Container';

const Home = () => {
  return (
    <Container isHome={true}>
      <div className="bg-idcol w-full h-screen bg-cover bg-center bg-no-repeat bg-top"></div>
    </Container>
  );
};

export default Home;
