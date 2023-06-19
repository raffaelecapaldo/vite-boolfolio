import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue';
import Project from '../pages/Project.vue';
import NotFound from '../pages/NotFound.vue';
import ContactUs from '../pages/ContactUs.vue'



const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '',
      name: 'home',
      component: Home
    },
    {
      path: '/project/:slug',
      name: 'Project',
      component: Project
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactUs
    },
    {
    path: '/project',
    redirect: '/',
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound
    },
  ]
})

export default router
