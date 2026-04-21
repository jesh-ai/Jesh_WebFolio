'use client';

import { useState, useEffect } from 'react';
import PixelatedCircle from './PixelatedCircle';
import styles from './Hero.module.css';

const STACK = ['TypeScript.', 'Next.js.', 'Python.', 'C#.'];

const TYPING_MS   = 80;
const DELETING_MS = 45;
const PAUSE_TYPED = 1800;
const PAUSE_EMPTY = 400;

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting,  setDeleting]  = useState(false);

  useEffect(() => {
    const word = STACK[wordIndex];

    if (!deleting) {
      if (displayed.length < word.length) {
        const id = setTimeout(
          () => setDisplayed(word.slice(0, displayed.length + 1)),
          TYPING_MS,
        );
        return () => clearTimeout(id);
      }
      // Fully typed — pause then start deleting
      const id = setTimeout(() => setDeleting(true), PAUSE_TYPED);
      return () => clearTimeout(id);
    }

    // Deleting
    if (displayed.length > 0) {
      const id = setTimeout(
        () => setDisplayed(displayed.slice(0, -1)),
        DELETING_MS,
      );
      return () => clearTimeout(id);
    }
    // Fully deleted — advance word after brief pause
    const id = setTimeout(() => {
      setWordIndex((i) => (i + 1) % STACK.length);
      setDeleting(false);
    }, PAUSE_EMPTY);
    return () => clearTimeout(id);
  }, [displayed, deleting, wordIndex]);

  return (
    <section id="home" className={styles.hero}>

      <PixelatedCircle />

      <h1 className={styles.title}>
        hi, <span className={styles.accent}>jeshie</span> here.
      </h1>

      <p className={styles.subtitle}>
        I design and code with passion using{' '}
        <span className={styles.typewriter} aria-live="polite" aria-atomic="true">
          {displayed}
          <span className={styles.cursor} aria-hidden="true" />
        </span>
      </p>

      <p className={styles.desc}>
        I am a passionate computer science student, honing graphic design
        skills, aiming to become a software engineer and create impactful
        digital experiences.
      </p>

      <a href="mailto:jeshaiahmamulleno@gmail.com" className={styles.cta}>
        <svg
          width="16" height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
        Say hi!
      </a>

    </section>
  );
}
