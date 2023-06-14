import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue';
import Project from '../pages/Project.vue';


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '',
      name: 'home',
      component: Home
    },
    {
      path: '/:slug',
      name: 'Project',
      component: Project
    }
  ]
})

export default router
