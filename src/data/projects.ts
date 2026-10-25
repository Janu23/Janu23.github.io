import projectData from './projects.json';

export type Language = 'en' | 'pt';

export interface LocalizedProject {
  title: string;
  category: string;
  summary: string;
  challenge: string;
  solution: string;
  highlights: string[];
  linkText: string;
}

export interface Project {
  id: string;
  year: string;
  featured: boolean;
  image: string;
  detailImage: string;
  link: string;
  technologies: string[];
  en: LocalizedProject;
  pt: LocalizedProject;
}

export const projects = (projectData as Project[]).sort((a, b) =>
  b.year.localeCompare(a.year),
);

export const getProject = (id?: string) => projects.find((project) => project.id === id);
