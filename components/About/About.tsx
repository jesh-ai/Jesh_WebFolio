import Image from 'next/image';
import styles from './About.module.css';

const TECH: string[] = [
  'Python',
  'HTML',
  'CSS',
  'JavaScript',
  'Java',
  'C++',
  'React',
  'Next.js',
  'Git',
  'Figma',
  'Vue.js',
  'Tailwind CSS',
];

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.inner}>

        {/* ── Left column — text ── */}
        <div className={styles.textCol}>
          <h2 className={styles.sectionTitle}>About Me</h2>

          <div className={styles.prose}>
            <p>
              I am currently a{' '}
              <strong className={styles.bold}>Computer Science Student</strong>{' '}
              at{' '}
              <span className={styles.highlight}>Pamantasan ng Lungsod ng Maynila</span>{' '}
              where maintain a high GWA of 1.38 and a strong focus on full-stack development and algorithmic research.
            </p>

            <p>Here are some technologies I have been working with:</p>
          </div>

          <ul className={styles.techGrid}>
            {TECH.map((t) => (
              <li key={t} className={styles.techItem}>
                <span className={styles.bullet} aria-hidden="true">▹</span>
                {t}
              </li>
            ))}
          </ul>

          <div className={styles.prose}>
            <p>
              Outside of the technical field, I find balance through the arts. For physical activity,
              I am a passionate dancer. My creative outlets are primarily literary and visual; 
              I enjoy writing novels, alternative universes (AU), and poems, as well as drawing 
              on Procreate to bring my visual ideas to life. I am also an avid reader of 
              non-fiction and a dedicated cat owner, which keeps me grounded between coding 
              sessions.
            </p>
          </div>
        </div>

        {/* ── Right column — image ── */}
        <div className={styles.imageCol}>
          <div className={styles.imageWrapper}>
            <Image
              src="/public/images/profile/mulleno_profile.jpg"
              alt="Jeshaiah Mae Mulleno"
              width={340}
              height={340}
              className={styles.photo}
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}
