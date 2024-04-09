import { createRouter, createWebHistory } from 'vue-router';
import { useMainStore } from '@/stores/index';
import DefaultLayout from '@/components/layouts/DefaultLayout.vue';
import GuestLayout from '@/components/layouts/GuestLayout.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/app',
      component: DefaultLayout,
      children: [
        {
          path: 'map',
          name: 'Map',
          meta: { title: 'Map' },
          component: () => import('../views/MapView.vue')
        }
      ],
    },
    {
      path: '/',
      component: GuestLayout,
      children: [
        {
          path: 'login',
          name: 'Login',
          meta: { title: 'Login' },
          component: () => import('../views/LoginView.vue'),
        }
      ],
    }
  ],
})

router.beforeEach((to, from, next) => {
  const { data } = useMainStore();
  // Set document title based on route metadata
  document.title = `${import.meta.env.VITE_APP_NAME} | ${to.meta.title}` || 'Dominion';
  if(data.accessToken === null && to.path.match(/^\/app\/*/)) {
    next('/login');
  } else if(data.accessToken !== null && to.path.match(/^\/login/)) {
    next('/app/map');
  } else {
    next();
  }
});

export default router
