import type { Project } from '@/types/index';

export const projects: Project[] = [
  {
    id: 'inventory-management',
    title: 'Inventory Management System',
    description: 'A comprehensive inventory tracking system with real-time updates and reporting.',
    fullDescription:
      'Built a full-stack inventory management system featuring real-time stock tracking, automated low-stock alerts, and detailed analytics reports. The system handles multi-warehouse inventory with role-based access control and comprehensive audit logging.',
    technologies: ['React.js', 'TypeScript', 'Python', 'PostgreSQL', 'Next.js'],
    achievements: [
      'Real-time inventory tracking across multiple warehouses',
      'Automated low-stock alerts and reorder triggers',
      'Role-based access control for staff and admins',
      'Detailed analytics dashboard with export support',
      'Comprehensive audit logging for all stock movements',
    ],
    focus: 'Full-Stack Development, Real-time Systems, Analytics',
    image: '/public/images/projects/aesamonte/ss1.png',
    images: [
      '/public/images/projects/aesamonte/ss1.png',
      '/public/images/projects/aesamonte/ss2.png',
      '/public/images/projects/aesamonte/ss3.png',
    ],
    github: 'https://github.com/jesh-ai/AESamonteSystem',  
},
  {
    id: 'smart-queuing',
    title: 'Smart Queuing System',
    description: 'An intelligent queue management solution that optimizes wait times and service efficiency.',
    fullDescription:
      'Developed a real-time queuing system that intelligently distributes customers across service counters, reducing average wait times by 40%. Includes customer notifications, priority routing, and analytics for peak hour management.',
    technologies: ['React.js', 'TypeScript', 'Python', 'Flask', 'PostgreSQL'],
    achievements: [
      'Reduced average customer wait times by 40%',
      'Smart routing algorithm across multiple service counters',
      'Real-time mobile notifications for queue updates',
      'Peak hour analytics and capacity forecasting',
      'Multi-counter support with live queue visibility',
    ],
    focus: 'Queue Optimization, Real-time Systems, Analytics',
    image: '/public/images/projects/smartqueue/ss1.png',
    images: [
      '/public/images/projects/smartqueue/ss1.png',
      '/public/images/projects/smartqueue/ss2.png',
      '/public/images/projects/smartqueue/ss3.png',
    ],
    github: 'https://github.com/IJMPLM/Smart-Multi-Institute-Queuing-System',
  },
  {
    id: 'algorhythm',
    title: 'AlgoRhythm',
    description: 'A PC rhythm game that combines music, timing, and algorithm challenges.',
    fullDescription:
      'Created an engaging rhythm game where players synchronize keystrokes with dynamic music beats. Features multiple difficulty levels, custom song support, leaderboards, and integration with popular music streaming platforms.',
    technologies: ['Next.js', 'TypeScript', 'Web Audio API', 'Canvas API', 'Tailwind CSS'],
    achievements: [
      'Dynamic rhythm gameplay with adaptive difficulty',
      'Custom song import and chart editor',
      'Global leaderboard with replay support',
      'Real-time audio synchronization engine',
      'Multiple difficulty levels for all skill ranges',
    ],
    focus: 'Game Development, Web Audio, Real-time Graphics',
    image: '/public/images/projects/algorhythm/ss1.png',
    images: [
      '/public/images/projects/algorhythm/ss1.png',
      '/public/images/projects/algorhythm/ss2.png',
      '/public/images/projects/algorhythm/ss3.png',
    ],
  },
];
