import Vue from 'vue'
import VueMask from 'v-mask'

Vue.use(VueMask,
  { // (!) custom placeholders support requires registration as a plugin to
    placeholders: {
      Я: /[а-яА-Яa-zA-Z]/, // cyrillic letter as a placeholder
      N: /[1-9]/,
      P: /[a-zA-Z1-9_.+-@]/
    }
  })
