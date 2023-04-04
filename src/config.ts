import type { Site, SocialObjects } from './types';

export const SITE: Site = {
  website: 'https://brody.com/',
  author: 'Brody MacLean',
  desc: 'Design system lead & multi-disciplinary designer from Sydney, Australia.',
  title: 'Brody MacLean',
  ogImage: 'defaultOG.jpg',
  lightAndDarkMode: true,
  postPerPage: 999,
};

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: 'Github',
    href: 'https://github.com/brody/',
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/BrodyMacLean/',
    linkTitle: `${SITE.title} on Facebook`,
    active: true,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/brody/',
    linkTitle: `${SITE.title} on Instagram`,
    active: true,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/brodymaclean/',
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: 'Mail',
    href: 'mailto:hello@brody.com',
    linkTitle: `Send an email to ${SITE.title}`,
    active: false,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/BrodyMaclean',
    linkTitle: `${SITE.title} on Twitter`,
    active: false,
  },
  {
    name: 'CodePen',
    href: 'https://codepen.io/brody',
    linkTitle: `${SITE.title} on CodePen`,
    active: false,
  },
];
