import Vue from 'vue';
import VueRouter from 'vue-router';
import Cookies from 'js-cookie';
import routes from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  exact: true,
});

function isLoggedIn () {
  const token = Cookies.get('XSRF-TOKEN');
  const auth = Cookies.get('AUTH');
  return token && auth;
}

router.beforeEach((to, from, next) => {
  if (to.meta.authOnly) {
    if (isLoggedIn()) {
      next();
    } else {
      next({ path: '/login' });
    }
  } else if (to.meta.guestOnly) {
    if (!isLoggedIn()) {
      next();
    } else {
      next({ path: '/' });
    }
  } else {
    next();
  }
});

export default router;
