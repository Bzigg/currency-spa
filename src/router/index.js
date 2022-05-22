import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/index.vue'
import ExchangeRates from '../views/exchange-rates.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Index
  },
  {
    path: '/exchange-rates',
    name: 'exchange-rates',
    component: ExchangeRates
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
