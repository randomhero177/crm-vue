import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: {
        layout: 'main-layout',
    },
  },
  {
      path: '/login',
      name: 'Login',
      meta: {
          layout: 'empty',
      },
      component: () => import('../views/Login.vue'),
  },
  {
      path: '/categories',
      name: 'Categories',
      meta: {
          layout: 'main-layout',
      },
      component: () => import('../views/Categories.vue'),
  },
  {
      path: '/profile',
      name: 'Profile',
      meta: {
          layout: 'main-layout',
      },
      component: () => import('../views/Profile.vue'),
  },
  {
      path: '/record',
      name: 'Record',
      meta: {
          layout: 'main-layout',
      },
      component: () => import('../views/Record.vue'),
  },
  {
      path: '/history',
      name: 'History',
      meta: {
          layout: 'main-layout',
      },
      component: () => import('../views/History.vue'),
  },
  {
      path: '/planning',
      name: 'Planning',
      meta: {
          layout: 'main-layout',
      },
      component: () => import('../views/Planning.vue'),
  },
  {
      path: '/register',
      name: 'Register',
      meta: {
          layout: 'empty',
      },
      component: () => import('../views/Register.vue'),
  },
];

const router = new VueRouter({
    mode: 'history',
    routes,
});

export default router;
