export const profile = {
  name: 'the-nexis',
  title: 'Projects, experiments & things I build.',
  description: 'A home for my work, ideas, and what comes next.',
  about: 'This is the beginning of my project portfolio. I’ll use this space to share the things I’m building, what I’m learning, and the ideas I want to explore.',
  github: 'https://github.com/the-nexis',
};

export interface Project {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  status: string;
}

// Replace these clearly labeled placeholders with your real projects.
// Add an optional href for a repository or live demo.
export const projects: Project[] = [
  {
    title: 'Your next project',
    description: 'A space for something useful. Add the problem you solved, what you built, and a link to explore it.',
    tags: ['Web', 'Tool'],
    status: 'Placeholder',
  },
  {
    title: 'An experiment',
    description: 'Small ideas deserve a home too. Share a prototype, a creative coding sketch, or something you learned.',
    tags: ['Exploration'],
    status: 'Placeholder',
  },
  {
    title: 'Something open source',
    description: 'Showcase a library, contribution, or side project that others can try and build on.',
    tags: ['Open source'],
    status: 'Placeholder',
  },
];
