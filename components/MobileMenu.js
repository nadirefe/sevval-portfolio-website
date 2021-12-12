import React from 'react';
import cn from 'classnames';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import useDelayedRender from 'use-delayed-render';
import styles from '../styles/mobile-menu.module.css';

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { mounted: isMenuMounted, rendered: isMenuRendered } = useDelayedRender(
    isMenuOpen,
    {
      enterDelay: 20,
      exitDelay: 300,
    }
  );

  function toggleMenu() {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    } else {
      setIsMenuOpen(true);
      document.body.style.overflow = 'hidden';
    }
  }

  useEffect(() => {
    return function cleanup() {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <>
      <button
        className={cn(styles.burger, 'visible md:hidden')}
        aria-label="Toggle menu"
        type="button"
        onClick={toggleMenu}
      >
        <MenuIcon
          //className={`${isMenuOpen ? styles.test : ''}`}
          test="true"
        />
        <CrossIcon
          test="true"
          //className={`${!isMenuOpen ? styles.test : ''}`}
        />
      </button>

      {isMenuMounted && (
        <ul
          className={cn(
            styles.menu,
            'flex flex-col absolute bg-beige dark:bg-gray-900',
            isMenuRendered && styles.menuRendered
          )}
        >
          <li
            className="border-b border-gray-300 text-gray-900 text-sm font-semibold"
            style={{ transitionDelay: '150ms' }}
          >
            <Link href="/">
              <a className="flex w-auto pb-4">Home</a>
            </Link>
          </li>
          <li
            className="border-b border-gray-300 text-gray-900 text-sm font-semibold"
            style={{ transitionDelay: '175ms' }}
          >
            <Link href="/guestbook">
              <a className="flex w-auto pb-4">About</a>
            </Link>
          </li>
          <li
            className="border-b border-gray-300 text-gray-900 text-sm font-semibold"
            style={{ transitionDelay: '200ms' }}
          >
            <Link href="/dashboard">
              <a className="flex w-auto pb-4">Portolio</a>
            </Link>
          </li>
          <li
            className="border-b border-gray-300 text-gray-900 text-sm font-semibold"
            style={{ transitionDelay: '250ms' }}
          >
            <Link href="/blog">
              <a className="flex w-auto pb-4">Photography</a>
            </Link>
          </li>
        </ul>
      )}
    </>
  );
};

function MenuIcon() {
  return (
    <svg
      //className={cn(styles.test, 'h-5 w-5 absolute text-gray-900 ')}
      className="h-5 w-5 absolute text-gray-900"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M2.5 7.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 12.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg
      //className={cn(styles.test, 'h-5 w-5 absolute text-gray-900')}
      className="h-5 w-5 absolute text-gray-900"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      shapeRendering="geometricPrecision"
    >
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  );
}

export default MobileMenu;
