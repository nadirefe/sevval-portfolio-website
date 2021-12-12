import Head from 'next/head';
import Image from 'next/image';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import cn from 'classnames';
import MobileMenu from '../components/MobileMenu';

function NavItem({ href, text }) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <NextLink href={href}>
      <a
        className={cn(
          isActive
            ? 'font-semibold text-gray-800'
            : 'font-normal text-gray-600',
          'hidden md:inline-block sm:px-12 sm:py-2 rounded-lg hover:bg-orange-200 transition-all'
        )}
      >
        <span className="capsize">{text}</span>
      </a>
    </NextLink>
  );
}

const Home = ({ title, children }) => {
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>{title}}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col justify-center px-8">
        <div className="mx-auto">
          <nav className="flex items-center w-full relative justify-between mx-auto pt-8 pb-8 sm:pb-16 border-gray-200 text-gray-900">
            <div className="ml-[-0.60rem] text-lg">
              <MobileMenu />
              <NavItem href="/" text="Home" />
              <NavItem href="/about" text="About" />
              <NavItem href="/portfolio" text="Portfolio" />
              <NavItem href="/photography" text="Photography" />
            </div>
          </nav>
        </div>
        <main className="my-0 ">{children}</main>
      </div>
    </div>
  );
};

export default Home;