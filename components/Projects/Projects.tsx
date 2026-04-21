'use client';

import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { projects } from '@/data/projects';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import styles from './Projects.module.css';
import type { Project } from '@/types/index';

/* Flatten all screenshots from every project into one showcase reel */
const showcaseSlides = projects.flatMap((p) =>
  (p.images ?? [p.image]).map((src) => ({ src, label: p.title }))
);

export default function Projects() {
  const [slideIdx, setSlideIdx] = useState(0);
  const [selected, setSelected] = useState<Project | null>(null);

  const prev = useCallback(
    () => setSlideIdx((i) => (i - 1 + showcaseSlides.length) % showcaseSlides.length),
    []
  );
  const next = useCallback(
    () => setSlideIdx((i) => (i + 1) % showcaseSlides.length),
    []
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (document.querySelector('dialog[open]')) return;
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [prev, next]);

  return (
    <>
      <section id="projects" className={styles.section}>
        <div className={styles.inner}>

          <h2 className={styles.title}>Projects</h2>

          {/* ════════════════════════════════════
              ENTITY 1 — Screenshot Showcase Carousel
              Cycles through all ss1-ss3 of every project.
              Completely independent of the folder grid.
          ════════════════════════════════════ */}
          <div className={styles.showcaseWrap}>

            <div className={styles.carousel}>
              <button
                className={`${styles.navBtn} ${styles.navPrev}`}
                onClick={prev}
                aria-label="Previous screenshot"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5"
                  strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>

              <div className={styles.frame}>
                {showcaseSlides.map((slide, i) => (
                  <div
                    key={`${slide.src}-${i}`}
                    className={`${styles.slide} ${i === slideIdx ? styles.slideActive : ''}`}
                    aria-hidden={i !== slideIdx}
                  >
                    <Image
                      src={slide.src}
                      alt={slide.label}
                      fill
                      className={styles.slideImage}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 860px"
                      priority={i === 0}
                    />
                  </div>
                ))}

                {/* Project label overlay */}
                <span className={styles.slideLabel} aria-live="polite">
                  {showcaseSlides[slideIdx].label}
                </span>

                {/* Slide counter */}
                <span className={styles.counter}>
                  {slideIdx + 1} / {showcaseSlides.length}
                </span>
              </div>

              <button
                className={`${styles.navBtn} ${styles.navNext}`}
                onClick={next}
                aria-label="Next screenshot"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5"
                  strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>

            {/* Dots */}
            <div className={styles.dots} role="tablist" aria-label="Screenshot navigation">
              {showcaseSlides.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === slideIdx}
                  aria-label={`Screenshot ${i + 1}`}
                  className={`${styles.dot} ${i === slideIdx ? styles.dotActive : ''}`}
                  onClick={() => setSlideIdx(i)}
                />
              ))}
            </div>

          </div>

          {/* ════════════════════════════════════
              ENTITY 2 — Folder Card Grid
              All projects always visible.
              Each card is independent — click opens its own modal.
          ════════════════════════════════════ */}
          <div className={styles.grid}>
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => {
                  if (project.github) {
                    window.open(project.github, '_blank', 'noopener,noreferrer');
                  } else {
                    setSelected(project);
                  }
                }}
              />
            ))}
          </div>

        </div>
      </section>

      {selected && (
        <ProjectModal
          project={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </>
  );
}
