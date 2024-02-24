import { createRouter, createWebHistory } from 'vue-router'
import MovieList from '../components/MovieList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'MovieList',
      component: MovieList
    },
  ]
})

export default router
