export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  image: string;
  date: string;
  link: string;
}

export interface Certification {
  id: number;
  title: string;
  logo: string;
  category: string;
  issuer: string;
  link: string;
  date: string;
}

export interface Experience {
  id: number;
  role: string;
  date: string;
  description: string;
  current: boolean;
}