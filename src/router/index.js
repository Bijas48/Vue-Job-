import { createWebHistory, createRouter } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import JobsView from '@/views/JobsView.vue'
import JobView from '@/views/JobView.vue'
import NotFoundPageView from '@/views/NotFoundPageView.vue'
import AddJobView from '@/views/AddJobView.vue'
import EditJobView from '@/views/EditJobView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: JobsView
    },
    {
      path: '/jobs/:id',
      name: 'job',
      component: JobView
    },
    {
      path: '/jobs/edit/:id',
      name: 'editJob',
      component: EditJobView
    },
    {
      path: '/jobs/add',
      name: 'addJob',
      component: AddJobView
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFoundPageView
    }
  ]
})

export default router
