const siteConfig = {
  title: "EOSIO Pro Testnet Blockchain - LACChain BID Labs", // Title for your website.
  tagline: "Documentación Técnica LACChain EOSIO",
  url: "https://eosio.lacchain.net", // Your website URL
  baseUrl: "/", // Base URL for your project */
  projectName: "eosio.lacchain.net",
  organizationName: "LACChain EOSIO",
  favicon: "img/favicon.ico",
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // Docs folder path relative to website dir.
          path: './docs',
          editUrl: 'https://github.com/lacchain/eosio.lacchain.net/tree/master',
          // Equivalent to `docsUrl`.
          routeBasePath: 'docs/',
          // Sidebars file relative to website dir.
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateAuthor: false,
          showLastUpdateTime: true
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themeConfig: {
    colorMode: {
      disableSwitch: true
    },
    //Algolia integration
    algolia: {
      appId: 'PA7N6QXRJW',
      apiKey: '27bb66b90ff32b38222a70e8316484aa',
      indexName: 'lacchain_eosio_tmp',
      placeholder: 'Buscar',
      algoliaOptions: {}
    },
    //Google Analytics
    googleAnalytics: {
      trackingID: "UA-173987-71",
    }
  },
  scripts: [
    {
      src:
        'https://buttons.github.io/buttons.js',
      async: true,
    },
    'https://code.jquery.com/jquery-3.4.1.min.js',
    'https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js',
    'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js',
    'https://kit.fontawesome.com/6c84ac616f.js',
    'https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.2/min/tiny-slider.js',
  ],
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en']
  }
};

module.exports = siteConfig
