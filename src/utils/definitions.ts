export interface Project {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github: string;
  liveDemo: string;
  thumbnail: string;
}

export interface Experience {
  id: number;
  company: string;
  position: string;
  duration: string;
  description: string;
}
