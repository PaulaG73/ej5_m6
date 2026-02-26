import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import CatalogoView from '../views/CatalogoView.vue'
import ProductView from '../views/ProductView.vue'
import InformaciónView from '../views/InformaciónView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/about',
    name: 'about',
    alias: ['/acerca', '/sobre', '/nosotros'],
    component: AboutView
 },

 {
    path: '/catalogo',
    name: 'catalogo',
    component: CatalogoView
 },
 {
    path: '/informacion',
    name: 'informacion',
    redirect: '/',
    component: InformaciónView
  },

  {
    path: '/product/:id',
    name: 'product',
    props: true,
    component: ProductView
 }

 ]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
