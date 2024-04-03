import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/loading',
    },
    {
      path: '/loading',
      name: 'Welcome',
      meta: { title: 'Welcome' },
      component: () => import('../views/LoadingView.vue')
    },
    {
      path: '/home',
      name: 'Home',
      meta: { title: 'Home' },
      component: () => import('../views/HomeView.vue')
    }
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

router.beforeEach((to, from, next) => {
  // Set document title based on route metadata
  document.title = `${import.meta.env.VITE_APP_NAME} | ${to.meta.title}` || 'Dominion';
  next();
});

export default router
