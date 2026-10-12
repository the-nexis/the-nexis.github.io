export const profile = {
  name: 'the-nexis',
  nickname: 'Nexis',
  title: 'Nexis',
  description: 'Things I’m building and experimenting with.',
  about: 'Paranoid crypto anarchist trying to make the world a happier place. I love coffee, metal music and hiking in mountains. Currently hanging around Libertyloft in Prague',
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

export interface Contact {
  label: string;
  value: string;
  href?: string;
}

// Public contact details only. Empty entries stay hidden.
export const contacts: Contact[] = [
  {
    label: 'Discord',
    value: 'the.nexis',
    href: 'https://discord.com/users/325613564108734474',
  },
  {
    label: 'Signal',
    value: 'Nexis.96',
    href: 'https://signal.me/#eu/tAQPLlmKacJtyaZSo5MuKKbMLvH-tgeCDscHwsNMnoR8ZRwjyhJBEZ0VdkpGFl2K',
  },
  {
    label: 'Nostr',
    value: 'nexis@anarcho.capital',
    href: 'https://njump.me/npub1rjtfxleq6ujtqwtqxan9vp8ld2r8hnalcdxcn0yls3szgvrphhtqzt7q5m',
  },
];
