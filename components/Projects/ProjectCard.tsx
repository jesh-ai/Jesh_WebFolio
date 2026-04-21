'use client';

import Image from 'next/image';
import styles from './ProjectCard.module.css';
import type { Project } from '@/types/index';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <article
      className={styles.card}
      onClick={onClick}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onClick()}
      tabIndex={0}
      role="button"
      aria-label={`View ${project.title} details`}
    >
      <div className={styles.tab}>
        <span className={styles.tabDot} />
        <span className={styles.tabDot} />
      </div>

      <div className={styles.body}>
        <div className={styles.imageWrapper}>
          <Image
            src={project.images?.[0] ?? project.image}
            alt=""
            fill
            className={styles.bgImage}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            aria-hidden="true"
          />
          <div className={styles.overlay} />
          <div className={styles.vignette} />
        </div>

        <div className={styles.content}>
          <div className={styles.bodyMain}>
            <h3 className={styles.cardTitle}>{project.title}</h3>
            <p className={styles.cardDesc}>{project.description}</p>
          </div>

          <div className={styles.techRow}>
            {project.technologies.map((tech) => (
              <span key={tech} className={styles.techTag}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
