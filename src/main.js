// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import '~/assets/scss/globals.scss'
//import '~/assets/css/asciinema-player.css'
import Vuex from 'vuex'
require('typeface-source-sans-pro')

export default function (Vue, { router, head, isClient, appOptions }) {
  Vue.use(Vuex)

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  // Add attributes to HTML tag
  head.htmlAttrs = { lang: 'es' }

  head.link.push({
    rel: 'manifest',
    href: '/manifest.json'
  })

  // head.script.push({ src: 'https://cdnjs.cloudflare.com/ajax/libs/asciinema-player/2.6.1/asciinema-player.min.js' })
  // head.link.push({
  //   rel: 'stylesheet',
  //   href: 'https://cdnjs.cloudflare.com/ajax/libs/asciinema-player/2.6.1/asciinema-player.css'
  // })

  head.meta.push({
    name: 'theme-color',
    content: '#10c186'
  })

  head.meta.push({
    name: 'google-site-verification',
    content: process.env.GSV_META
  })

  head.meta.push({
    name: 'apple-mobile-web-app-status-bar-style',
    content: 'default'
  })

  // State
  appOptions.store = new Vuex.Store({
    state: {
      sidebarOpen: false
    },
    mutations: {
      toggleSidebar(state) {
        state.sidebarOpen = !state.sidebarOpen
      },
      closeSidebar(state) {
        state.sidebarOpen = false
      },
      openSidebar(state) {
        state.sidebarOpen = true
      }
    }
  })
}