'use client';

import { useRef, useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import styles from './ProjectModal.module.css';
import type { Project } from '@/types/index';

interface Props {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const images = project.images?.length ? project.images : [project.image];
  const [activeIdx, setActiveIdx] = useState(0);

  const prev = useCallback(() =>
    setActiveIdx((i) => (i - 1 + images.length) % images.length),
    [images.length]
  );

  const next = useCallback(() =>
    setActiveIdx((i) => (i + 1) % images.length),
    [images.length]
  );

  useEffect(() => {
    const dialog = dialogRef.current;
    dialog?.showModal();
    return () => { if (dialog?.open) dialog.close(); };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [prev, next]);

  const handleBackdrop = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <dialog
      ref={dialogRef}
      className={styles.dialog}
      onClose={onClose}
      onClick={handleBackdrop}
      aria-labelledby="modal-title"
      aria-modal="true"
    >
      <article className={styles.panel}>

        {/* ── Header ── */}
        <header className={styles.header}>
          <div>
            <p className={styles.headerLabel}>{'// project details'}</p>
            <h2 id="modal-title" className={styles.headerTitle}>
              {project.title}
            </h2>
          </div>
          <button
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Close modal"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5"
              strokeLinecap="round" strokeLinejoin="round"
              aria-hidden="true">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </header>

        {/* ── Scrollable body ── */}
        <div className={styles.body}>

          {/* ── Carousel ── */}
          <div
            className={styles.carousel}
            role="region"
            aria-label={`${project.title} screenshots`}
          >
            {images.map((src, i) => (
              <div
                key={src}
                className={`${styles.slide} ${i === activeIdx ? styles.slideActive : ''}`}
                aria-hidden={i !== activeIdx}
              >
                <Image
                  src={src}
                  alt={`${project.title} screenshot ${i + 1}`}
                  fill
                  className={styles.slideImage}
                  sizes="(max-width: 768px) 100vw, 860px"
                  priority={i === 0}
                />
              </div>
            ))}

            {/* Counter */}
            <span className={styles.counter} aria-live="polite">
              {activeIdx + 1} / {images.length}
            </span>

            {/* Nav buttons — only render if more than one image */}
            {images.length > 1 && (
              <>
                <button
                  className={`${styles.navBtn} ${styles.navPrev}`}
                  onClick={prev}
                  aria-label="Previous screenshot"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2.5"
                    strokeLinecap="round" strokeLinejoin="round"
                    aria-hidden="true">
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>
                <button
                  className={`${styles.navBtn} ${styles.navNext}`}
                  onClick={next}
                  aria-label="Next screenshot"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2.5"
                    strokeLinecap="round" strokeLinejoin="round"
                    aria-hidden="true">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>

                {/* Dot indicators */}
                <div className={styles.dots} role="tablist" aria-label="Screenshot navigation">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      role="tab"
                      aria-selected={i === activeIdx}
                      aria-label={`Screenshot ${i + 1}`}
                      className={`${styles.dot} ${i === activeIdx ? styles.dotActive : ''}`}
                      onClick={() => setActiveIdx(i)}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* ── Below-carousel content ── */}
          <div className={styles.bodyContent}>

            {/* Focus callout */}
            <div className={styles.focusBlock}>
              <span className={styles.focusLabel}>Primary Focus</span>
              <p className={styles.focusText}>{project.focus}</p>
            </div>

            {/* Overview */}
            <div className={styles.overviewBlock}>
              <h3 className={styles.blockHeading}>Overview</h3>
              <p className={styles.overviewText}>{project.fullDescription}</p>
            </div>

            {/* Tech + Achievements */}
            <div className={styles.metaGrid}>
              <div className={styles.metaBlock}>
                <h4 className={styles.metaHeading}>Tech Stack</h4>
                <ul className={styles.metaList}>
                  {project.technologies.map((tech) => (
                    <li key={tech} className={styles.techItem}>{tech}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.metaBlock}>
                <h4 className={styles.metaHeading}>Key Achievements</h4>
                <ul className={styles.metaList}>
                  {project.achievements.map((a, i) => (
                    <li key={i} className={styles.achieveItem}>{a}</li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>

        {/* ── Footer links ── */}
        {(project.github || project.live) && (
          <footer className={styles.footer}>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.footerLink}
              >
                <svg width="15" height="15" viewBox="0 0 24 24"
                  fill="currentColor" aria-hidden="true">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865
                    8.18 6.839 9.504.5.092.682-.217.682-.483
                    0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343
                    -3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466
                    -.908-.62.069-.608.069-.608 1.003.07 1.531 1.032
                    1.531 1.032.892 1.53 2.341 1.088 2.91.832
                    .092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113
                    -4.555-4.951 0-1.093.39-1.988 1.029-2.688
                    -.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75
                    1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1
                    2.504.337c1.909-1.296 2.747-1.027 2.747-1.027
                    .546 1.379.202 2.398.1 2.651.64.7 1.028 1.595
                    1.028 2.688 0 3.848-2.339 4.695-4.566 4.943
                    .359.309.678.92.678 1.855 0 1.338-.012 2.419
                    -.012 2.747 0 .268.18.58.688.482A10.02 10.02 0
                    0 0 22 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                View on GitHub
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.footerLink} ${styles.footerLinkPrimary}`}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5"
                  strokeLinecap="round" strokeLinejoin="round"
                  aria-hidden="true">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                Live Demo
              </a>
            )}
          </footer>
        )}

      </article>
    </dialog>
  );
}
