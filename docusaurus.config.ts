import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'New Gaia Collective',
  tagline: 'We aim is to empower human creativity and use it as the means to foster the evolution of human civilization.',
  favicon: '../favicon.png',

  // Set the production url of your site here
  url: 'https://newgaia.earth',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/docs',

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'ignore',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          path: "docs",
          sidebarPath: './sidebars.ts',
        },
        blog: false,
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    docs: {
      sidebar: {
        autoCollapseCategories: true,
      },
    },
    navbar: {
      title: 'New Gaia Collective',
      logo: {
        alt: 'New Gaia Logo',
        src: '../logo.png',
        href: "../",
        target: "_top",
      },
      items: [
          // {
          //   type: 'doc',
          //   docId: 'index',
          //   position: 'left',
          //   label: 'Home',
          // },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
  scripts: [
    {
      src: 'https://plausible.8bitlabs.dev/js/script.js',
      defer: true,
      "data-domain": "newgaia.earth"
    },
  ]
};

export default config;
