import Vue from 'vue';
import Router from 'vue-router';
import Index from './pages/Index.vue';
import Landing from './pages/Landing.vue';


import MainNavbar from './layout/MainNavbar.vue';
import MainFooter from './layout/MainFooter.vue';
import English from './pages/English.vue';
import NavbarEng from './layout/NavbarEng.vue';
import FooterEng from './layout/FooterEng.vue'

Vue.use(Router);

export default new Router({
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/es',
      name: 'landing',
      components: { default: Landing , header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/',
      name: 'index',
      components: { default: Landing, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/en',
      name: 'english',
      components: { default: () => import('./pages/English.vue'), header: NavbarEng, footer: FooterEng },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
