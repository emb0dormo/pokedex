import { createRouter, createWebHistory } from 'vue-router'
import PokemonDetailsView from '@/views/PokemonDetailsView.vue'
import PokemonListView from '@/views/PokemonListView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PokemonListView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/Pokemon/:id',
      name: 'Pokemon-details',
      props: true,
      component: PokemonDetailsView
    }
    
  ]
})

export default router
