import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue';
import Project from '../pages/Project.vue';
import NotFound from '../pages/NotFound.vue';



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
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})

export default router
