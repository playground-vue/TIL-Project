import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '@/views/LoginView.vue';
import DashboardViewport from '@/views/DashboardViewport.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: LoginView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/dashboard',
      component: DashboardViewport,
      children: [
        {
          path: '/analyticsView',
          name: 'analyticsView',
          component: () => import('@/views/AnalyticsView.vue'),
        },
        {
          path: '/eCommerceView',
          name: 'eCommerceView',
          component: () => import('@/views/ECommerceView.vue'),
        },
        {
          path: '/crmView',
          name: 'crmView',
          component: () => import('@/views/CrmView.vue'),
        },
        {
          path: '/todoView',
          name: 'todoView',
          component: () => import('@/views/TodoView.vue'),
        },
      ],
    },
  ],
});

export default router;
