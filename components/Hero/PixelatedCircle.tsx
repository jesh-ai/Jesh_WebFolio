'use client';

import { useState, useCallback } from 'react';
import styles from './PixelatedCircle.module.css';

const GRID  = 18;
const CX    = (GRID - 1) / 2; // 8.5
const CY    = (GRID - 1) / 2;
const RADIUS = GRID / 2 - 0.8;

function inCircle(row: number, col: number): boolean {
  return Math.sqrt((col - CX) ** 2 + (row - CY) ** 2) <= RADIUS;
}

function glowTier(
  row: number,
  col: number,
  hr: number,
  hc: number,
): 0 | 1 | 2 | 3 {
  const d = Math.sqrt((row - hr) ** 2 + (col - hc) ** 2);
  if (d === 0)   return 3;
  if (d < 2.2)   return 2;
  if (d < 4.0)   return 1;
  return 0;
}

export default function PixelatedCircle() {
  const [hovered, setHovered] = useState<number | null>(null);

  const hr = hovered !== null ? Math.floor(hovered / GRID) : -1;
  const hc = hovered !== null ? hovered % GRID             : -1;

  const handleEnter = useCallback((i: number) => setHovered(i), []);
  const handleLeave = useCallback(() => setHovered(null), []);

  const tierClass = [
    '',
    styles.glow1,
    styles.glow2,
    styles.glow3,
  ] as const;

  return (
    <figure className={styles.figure} aria-label="Interactive pixel circle">
      <div className={styles.grid}>
        {Array.from({ length: GRID * GRID }, (_, i) => {
          const row = Math.floor(i / GRID);
          const col = i % GRID;
          const active = inCircle(row, col);

          if (!active) {
            return <div key={i} className={styles.empty} />;
          }

          const tier = hovered !== null ? glowTier(row, col, hr, hc) : 0;

          return (
            <div
              key={i}
              className={`${styles.pixel} ${tierClass[tier]}`}
              onMouseEnter={() => handleEnter(i)}
              onMouseLeave={handleLeave}
              aria-hidden="true"
            />
          );
        })}
      </div>

      <figcaption className={styles.caption}>
        <span>Design</span>
        <span className={styles.sep}>/</span>
        <span>Code</span>
      </figcaption>
    </figure>
  );
}
