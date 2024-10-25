import { createRouter, createWebHistory } from 'vue-router'
import index from '../views/IndexView.vue'
import SobreNosotros from '../views/SobreNosotros.vue'
import ProyectosView from '@/views/ProyectosView.vue'

const routes = [
  {
    path: '/',
    name: 'index',
    component: index
  },
  {
    path: '/SobreNosotros',
    name: 'SobreNosotros',
    component: SobreNosotros
  },
  {
    path: '/ProyectosView',
    name: 'ProyectosView',
    component: ProyectosView
  }
  
  
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
