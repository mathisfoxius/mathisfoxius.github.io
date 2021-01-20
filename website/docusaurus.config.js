module.exports = {
  title: 'Mathis Foxius',
  tagline: 'The tagline',
  url: 'https://mathisfoxius.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'mathisfoxius', // Usually your GitHub org/user name.
  projectName: 'mathisfoxius.github.io', // Usually your repo name.
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true, // Don't show manual switch
      respectPrefersColorScheme: true, // But respect user preference!
    },
    navbar: {
      title: 'Mathis Foxius',
      logo: {
        alt: 'Mathis Foxius Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
      ],
    },
    footer: {
      style: 'dark',
      copyright: `© ${new Date().getFullYear()} Mathis Foxius, Built with docusaurus`,
    },
  },
  themes: ['@docusaurus/theme-live-codeblock'],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};