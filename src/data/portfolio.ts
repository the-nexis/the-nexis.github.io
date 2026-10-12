export const profile = {
  name: 'the-nexis',
  nickname: 'Nexis',
  title: 'Nexis',
  description: 'Things I’m building and experimenting with.',
  about: '',
  github: 'https://github.com/the-nexis',
};

export interface Project {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  status: string;
}

// Add projects here. An optional href links to a repository or demo.
export const projects: Project[] = [];
