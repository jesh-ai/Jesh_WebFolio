import Navigation from '@/components/Navigation/Navigation';
import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import Experience from '@/components/Experience/Experience';
import Projects from '@/components/Projects/Projects';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
      </main>

      <footer className={styles.footer}>
        <p>Built and designed by Jeshaiah Mulleno.</p>
        <p>All rights reserved. ©</p>
      </footer>
    </>
  );
}
