export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  achievements: string[];
  focus: string;
  image: string;
  images?: string[];
  github?: string;
  live?: string;
}

export interface Experience {
  id: string;
  title: string;
  organization: string;
  role: string;
  date: string;
  description: string;
  achievements: string[];
}

export interface AboutContent {
  bio: string;
  education: string;
  interests: string[];
  location: string;
}
