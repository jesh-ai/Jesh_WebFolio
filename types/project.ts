export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  technologies: string[];
  features?: string[];
  github?: string;
  live?: string;
  year: number;
}
