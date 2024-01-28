import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

import * as cfg from '../website.config'

const config: Config = {
  // Site config
  title                 : cfg.Site.title,
  tagline               : cfg.Site.tagline,
  favicon               : cfg.Site.icon,
  url                   : cfg.Site.url.root,
  baseUrl               : cfg.Site.url.base,
  // GitHub config
  organizationName      : cfg.GitHub.org,     // Usually your GitHub org/user name.
  projectName           : cfg.GitHub.project, // Usually your repo name.
  deploymentBranch      : cfg.GitHub.branch,
  // Build behavior
  onBrokenLinks         : 'throw',
  onBrokenMarkdownLinks : 'throw',
  markdown              : { format : 'detect' },
  staticDirectories     : [ cfg.Dir.static ],
  // Configure the default plugins+theme
  presets: [
    [
      'classic',
      {
        docs: {
          path          : cfg.Dir.docs,
          routeBasePath : '/', // Serve the docs at the site's root
          sidebarPath   : require.resolve('./sidebars.ts'),
          exclude       : cfg.ExcludePatterns,
          editUrl       : cfg.Site.url.edit,  // Remove this line to remove the "edit this page" links.
        },
        pages: {  // Configuration for @docusaurus/plugin-content-pages (false to disable)
          path          : cfg.Dir.pages,
          exclude       : cfg.ExcludePatterns,
        },
        theme: {
          customCss     : cfg.Dir.css+'/custom.css',
        },
        blog: false,
      } satisfies Preset.Options,
    ],
  ],
  // Configure the site UI elements
  themeConfig: {
    // Replace with your project's social card
    image: cfg.Site.meta.img,
    navbar: {
      title: cfg.Site.title,
      logo: {
        alt: cfg.Site.title+' Logo',
        src: cfg.Site.logo,
      },
      items: [
        { label: 'Tutorial', position: 'left',  type: 'docSidebar', sidebarId: 'tutorialSidebar', },
        { label: 'GitHub',   position: 'right', href: cfg.Links.github, },
      ],
    },
    docs: {
      sidebar: {
        autoCollapseCategories : true,
        hideable               : true
      }
    },
    footer: {
      links: [
        { title: 'Docs',
          items: [
            { label: 'Tutorial', to: '/docs/intro', },
          ],
        },
        { title: 'Community',
          items: [
            { label: 'Discord', href: cfg.Links.discord, },
            { label: 'Twitter', href: cfg.Links.twitter, },
          ],
        },
        { title: 'More',
          items: [
            { label: 'GitHub', href: cfg.Links.github, },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ${cfg.Org.fullName}.`,
    },
    colorMode: {
      defaultMode               : 'dark',
      disableSwitch             : true,
      respectPrefersColorScheme : false,
    },
    prism: {
      theme     : prismThemes.github,
      darkTheme : prismThemes.dracula,
    },
  // Internationalization
  i18n: { defaultLocale: 'en', locales: ['en'] },
  } satisfies Preset.ThemeConfig,
};

export default config;
