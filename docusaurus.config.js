// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Ke-Han Lu',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://hanklu.tw',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'kehanlu', // Usually your GitHub org/user name.
  projectName: 'kehanlu', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/doc',
        },
        blog: {
          
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-NK3RNSFFQK',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      navbar: {
        title: 'My Site',
        logo: {
          alt: '',
          src: 'img/ninja.png',
          href: '/'
        },
        items: [
          {
            to: "https://notes.hanklu.tw",
            position: 'left',
            label: 'Notes',
          },
          {
            to: "https://blog.hanklu.tw",
            position: 'left',
            label: 'Blog',
          },
          {
            to: "https://slides.hanklu.tw",
            position: 'left',
            label: 'Slides',
          },
          {
            to: 'https://github.com/kehanlu',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'About',
            items: [
              {
                label: 'About me',
                href: '/',
              },
              {
                label: 'Notes',
                to: 'https://notes.hanklu.tw',
              },
              {
                label: 'Blog',
                to: 'https://blog.hanklu.tw',
              },
              {
                label: 'Slides',
                to: 'https://slides.hanklu.tw',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                to: 'https://github.com/kehanlu',
              },
              {
                label: 'Google scholar',
                to: 'https://scholar.google.com/citations?user=YODHqGkAAAAJ',
              },
              {
                label: 'Twitter',
                to: 'https://twitter.com/kehan_lu',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ❤️ Ke-Han Lu`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
