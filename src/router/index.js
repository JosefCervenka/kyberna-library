import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Adder from '../views/Adder.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Adder',
    name: 'Adder',
    component: Adder
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
