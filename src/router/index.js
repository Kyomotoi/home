import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/github',
    beforeEnter() {location.href = 'https://github.com/Kyomotoi'}
  },
  {
    path: '/blog',
    beforeEnter() {location.href = 'https://blog.kyomotoi.moe/'}
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
