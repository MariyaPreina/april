import pluginsConfig from './config/pluginsConfig';

const env = {
  SERVER_API_URL: process.env.SERVER_API_URL,
  DEVELOPMENT: process.env.NODE_ENV === 'development',
};

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'april-trial-assignment',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },

      // Fonts
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
        crossOrigin: true,
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: true,
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap',
      },
    ]
  },

  router: {
    base: '/april/'
  },

  // Global environments
  env: {
    ...env,
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/scss/common.scss'
  ],

  styleResources: {
    scss: [
      '@/assets/scss/shared/_mixins.scss',
      '@/assets/scss/shared/_variables.scss',
      '@/assets/scss/shared/_functions.scss',
    ],
    hoistUseStatements:  true,
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: pluginsConfig,

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/style-resources'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    progress: false,
    baseURL: env.SERVER_API_URL || '',
    credentials: 'false',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
