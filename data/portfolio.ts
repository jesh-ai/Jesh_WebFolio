import type { Project, Experience, AboutContent } from '@/types/index';

export const about: AboutContent = {
  bio: 'A Computer Science student at Pamantasan ng Lungsod ng Maynila with a passion for building elegant, thoughtful digital experiences.',
  education: 'BS Computer Science, Pamantasan ng Lungsod ng Maynila',
  interests: [
    'Figure skating & rhythm games',
    'AU writing & creative storytelling',
    'Volleyball',
    'Cats (and their chaotic energy)',
  ],
  location: 'Manila, Philippines',
};

export const experience: Experience[] = [
  {
    id: 'aws-cloud-clubs',
    title: 'UI/UX Designer',
    organization: 'AWS Cloud Clubs PLM',
    role: 'Designer',
    date: '2024 – Present',
    description: 'Designing engaging educational experiences for cloud computing workshops and community events.',
    achievements: [
      'Led visual design for 5+ major cloud education campaigns',
      'Created design system for workshop platforms',
      'Mentored junior designers on UX principles',
    ],
  },
  {
    id: 'ms-community',
    title: 'Creative Committee Member',
    organization: 'Microsoft Student Community',
    role: 'Creative Lead',
    date: '2024 – Present',
    description: 'Driving creative direction for Microsoft community events and content.',
    achievements: [
      'Designed marketing materials for 8+ community events',
      'Built brand guidelines for MS Student Community',
      'Coordinated cross-functional creative teams',
    ],
  },
  {
    id: 'plm-cs-society',
    title: 'Academic Relations Head',
    organization: 'PLM CS Society',
    role: 'Leadership',
    date: '2024 – 2025',
    description: 'Overseeing academic programs, student development, and fostering connections with industry partners.',
    achievements: [
      'Coordinated curriculum discussions with faculty',
      'Organized 10+ technical workshops and seminars',
      'Built partnerships with tech companies for student internships',
    ],
  },
];

export const projects: Project[] = [
  {
    id: 'aesamonte',
    title: 'AE Samonte Merchandise System',
    description: 'Enterprise merchandise management platform for internal operations.',
    fullDescription:
      'A sophisticated backend-focused merchandise management system designed for internal operations at AE Samonte. This system handles inventory tracking, order processing, and fulfillment workflows without a customer-facing storefront. The architecture emphasizes data integrity, real-time synchronization, and scalability for high-volume operations.',
    technologies: ['Python', 'PostgreSQL', 'FastAPI', 'Redis', 'Docker'],
    achievements: [
      'Designed microservices architecture for inventory synchronization',
      'Implemented advanced querying system for order analytics',
      'Reduced processing time by 60% through database optimization',
      'Built real-time notification system for fulfillment teams',
    ],
    focus: 'Backend Architecture, Database Design, Systems Optimization',
    image: '/images/projects/aesamonte/ss1.png',
    images: [
      '/images/projects/aesamonte/ss1.png',
      '/images/projects/aesamonte/ss2.png',
      '/images/projects/aesamonte/ss3.png',
    ],
    github: 'https://github.com/jesh-ai/ae-samonte',
  },
  {
    id: 'smartqueue',
    title: 'Smart Multi-Institute Queuing System',
    description: 'AI-driven queue management serving multiple institutions in real time.',
    fullDescription:
      'Led a frontend team of 10 engineers to build an intelligent queuing system serving multiple institutes. The system uses AI-driven routing algorithms to optimize wait times and customer satisfaction. Managed technical decision-making, code reviews, and integration with backend ML services.',
    technologies: ['React.js', 'TypeScript', 'Next.js', 'WebSockets', 'TensorFlow.js', 'Node.js'],
    achievements: [
      'Managed a team of 10 frontend engineers across 3 institutes',
      'Integrated custom AI prediction models for queue optimization',
      'Reduced average wait times by 45% across all locations',
      'Implemented real-time dashboard with 500+ concurrent users',
      'Built mobile-responsive interfaces for customer kiosks',
    ],
    focus: 'Team Leadership, AI Integration, Real-time Systems',
    image: '/images/projects/smartqueue/ss1.png',
    images: [
      '/images/projects/smartqueue/ss1.png',
      '/images/projects/smartqueue/ss2.png',
      '/images/projects/smartqueue/ss3.png',
    ],
    github: 'https://github.com/jesh-ai/smart-queuing',
    live: 'https://smart-queuing-demo.vercel.app',
  },
  {
    id: 'algorhythm',
    title: 'AlgoRhythm',
    description: 'Neon-punk rhythm game with a dynamic real-time grading engine.',
    fullDescription:
      'A rhythm game developed in C# featuring a neon-punk aesthetic and innovative dynamic grading algorithms. The game synchronizes player input with dynamic music beats, adjusting difficulty in real-time based on performance. Custom rendering engine and physics-based note mechanics create an immersive audio-visual experience.',
    technologies: ['C#', 'Unity', 'WebGL', 'Custom Shaders', 'Web Audio API'],
    achievements: [
      'Built custom dynamic difficulty algorithm that adapts to player skill',
      'Implemented neon-punk visual system with custom GLSL shaders',
      'Achieved 60 FPS performance on mid-range hardware',
      'Designed an in-game rhythm chart editor for custom songs',
      'Created global leaderboard system with replay support',
    ],
    focus: 'Game Development, Algorithm Design, Real-time Graphics',
    image: '/images/projects/algorhythm/ss1.png',
    images: [
      '/images/projects/algorhythm/ss1.png',
      '/images/projects/algorhythm/ss2.png',
      '/images/projects/algorhythm/ss3.png',
    ],
    github: 'https://github.com/jesh-ai/algorhythm',
    live: 'https://algorhythm.itch.io',
  },
];
