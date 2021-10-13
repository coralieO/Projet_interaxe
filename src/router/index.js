import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '../views/Accueil.vue'
import LadyGaga from '../views/LadyGaga.vue'
import Tayc from '../views/Tayc.vue'
import EdSheeran from '../views/EdSheeran.vue'
import LilNasX from '../views/LilNasX.vue'
import Maroon5 from '../views/Maroon5.vue'
import NotesDemusique from '../views/NotesDemusique.vue'

const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: Accueil
  },
  {
    path: '/LadyGaga',
    name: 'Lady Gaga',
    component: LadyGaga
  },
  {
    path: '/Tayc',
    name: 'Tayc',
    component: Tayc
  },
  {
    path: '/EdSheeran',
    name: 'EdSheeran',
    component: EdSheeran
  },
  {
    path: '/LilNasX',
    name: 'LilNasX',
    component: LilNasX
  },
  {
    path: '/Maroon5',
    name: 'Maroon5',
    component: Maroon5
  },
  {
    path: '/NotesDemusique',
    name: 'Notes De musique',
    component: NotesDemusique
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
