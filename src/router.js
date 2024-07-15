import Vue from 'vue';
import Router from 'vue-router';
import MainHome from './views/MainHome.vue';
import PlayerDetail from './views/PlayerDetail.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name:'MainHome',
      component: MainHome,
    },
    {
      path: '/player/:id', 
      name: 'PlayerDetail',
      component: PlayerDetail,
      props: true, 
    },
  ],
});