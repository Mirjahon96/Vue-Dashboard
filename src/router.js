import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Team from './views/Team.vue';
import SignIn from './views/Auth/SignIn.vue';
import Request from './views/Auth/Request.vue';
import Recover from './views/Auth/Recover.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/team',
      name: 'team',
      component: Team
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignIn
    },
    {
      path: '/request',
      name: 'request',
      component: Request
    },
    {
      path: '/reciver',
      name: 'recover',
      component: Recover
    }
  ]
});
