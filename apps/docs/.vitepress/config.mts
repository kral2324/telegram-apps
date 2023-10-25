import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Telegram Mini Apps',
  description: 'Documentation covering all aspects of Telegram platform - Telegram Mini Apps.',

  // Rewire source directory in order not to clog up the root folder.
  // https://vitepress.dev/guide/routing#source-directory
  srcDir: 'src',

  // Internationalization.
  // https://vitepress.dev/guide/i18n
  locales: {
    root: {
      label: 'English',
      lang: 'en',
    },
    ru: {
      label: 'Русский',
      lang: 'ru',
      description: 'Документация, покрывающая все аспекты платформы Telegram - Telegram Mini Apps.',
      themeConfig: {
        editLink: {
          text: 'Редактировать эту страницу на GitHub',
          pattern: 'https://github.com/telegram-mini-apps/tma.js/edit/master/apps/docs/src/:path',
        },
      },
    },
  },

  // Show when each page content was last updated.
  // https://vitepress.dev/reference/default-theme-last-updated#last-updated
  lastUpdated: true,

  // We don't want .html to be in the end of each route.
  // https://vitepress.dev/guide/routing#generating-clean-url
  cleanUrls: true,

  // Enable sitemap generation.
  // https://vitepress.dev/guide/sitemap-generation#sitemap-generation
  sitemap: {
    hostname: 'https://docs.telegram-mini-apps.com',
  },

  // Configure <head/>.
  // https://vitepress.dev/reference/site-config#head
  head: [
    // Add favicon.
    // https://vitepress.dev/reference/site-config#example-adding-a-favicon
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],

  themeConfig: {
    logo: '/logo.png',

    editLink: {
      text: 'Edit this page on GitHub',
      pattern: 'https://github.com/telegram-mini-apps/tma.js/edit/master/apps/docs/src/:path',
    },

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
    ],

    // https://vitepress.dev/reference/default-theme-sidebar
    sidebar: [
      {
        text: 'Common information',
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Supported applications', link: '/supported-applications' },
        ],
      },
      {
        text: 'Apps communication',
        items: [
          { text: 'Definition', link: '/apps-communication/definition' },
          { text: 'Methods', link: '/apps-communication/methods' },
          { text: 'Events', link: '/apps-communication/events' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/telegram-mini-apps' },
    ],

    search: {
      // TODO: Probably replace with Algolia.
      provider: 'local',
      options: {
        locales: {
          ru: {
            translations: {
              button: {
                buttonText: 'Поиск',
                buttonAriaLabel: 'Поиск',
              },
              modal: {
                noResultsText: 'Не удалось ничего найти по запросу',
                backButtonTitle: 'закрыть',
                displayDetails: 'Отобразить подробные данные',
                resetButtonTitle: 'Сбросить',
                footer: {
                  selectText: 'выбрать',
                  navigateText: 'для навигации',
                  closeText: 'закрыть',
                },
              },
            },
          },
        },
      },
    },
  },
});
