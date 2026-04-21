'use client';

import { useState } from 'react';
import styles from './Experience.module.css';

interface Job {
  company:  string;
  title:    string;
  date:     string;
  bullets:  string[];
}

const JOBS: Job[] = [
  {
    company: 'AWS Cloud Clubs Haribon',
    title:   'UI/UX Designer',
    date:    '2023 – 2025',
    bullets: [
      'Led visual design for 5+ major cloud education campaigns, raising member engagement by 40%.',
      'Built a reusable design system for workshop platforms used across 3 campuses.',
      'Produced end-to-end UI mockups in Figma and handed off assets to dev teams.',
      'Mentored junior designers on UX research methods and accessibility standards.',
    ],
  },
  {
    company: 'Microsoft Student Community',
    title:   'Creative Committee',
    date:    '2024 – 2025',
    bullets: [
      'Drove creative direction for Microsoft community events and digital content.',
      'Designed marketing materials for 8+ community events, growing attendance by 30%.',
      'Established brand guidelines adopted across all chapter social media channels.',
      'Coordinated cross-functional creative teams across design, copy, and video.',
    ],
  },
  {
    company: 'PLM Computer Science Society',
    title:   'Academic Relations Head',
    date:    '2023 – 2025',
    bullets: [
      'Oversaw academic programs bridging the CS community with industry partners.',
      'Coordinated curriculum discussions with faculty to align courses with industry needs.',
      'Organized 10+ technical workshops, seminars, and coding competitions.',
      'Forged internship partnerships with three tech companies benefiting 50+ students.',
    ],
  },
];

export default function Experience() {
  const [active, setActive] = useState(0);
  const job = JOBS[active];

  return (
    <section id="experience" className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.sectionTitle}>Experience</h2>

        <div className={styles.tabUI}>

          {/* ── Tab list ── */}
          <nav className={styles.tabList} aria-label="Job tabs">
            {JOBS.map((j, i) => (
              <button
                key={j.company}
                className={`${styles.tab} ${active === i ? styles.tabActive : ''}`}
                onClick={() => setActive(i)}
                aria-selected={active === i}
                role="tab"
              >
                {j.company}
              </button>
            ))}
          </nav>

          {/* ── Tab panel ── */}
          <div
            className={styles.panel}
            role="tabpanel"
            aria-label={`${job.title} at ${job.company}`}
          >
            <header className={styles.panelHeader}>
              <h3 className={styles.panelRole}>
                {job.title}{' '}
                <span className={styles.atSign}>@</span>{' '}
                <span className={styles.panelCompany}>{job.company}</span>
              </h3>
              <p className={styles.panelDate}>{job.date}</p>
            </header>

            <ul className={styles.bulletList}>
              {job.bullets.map((b, i) => (
                <li key={i} className={styles.bulletItem}>
                  <span className={styles.marker} aria-hidden="true">▹</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
