import Vue from 'vue'
import Router from 'vue-router'
import goods from '../components/goods/goods.vue'
import ratings from '../components/ratings/ratings.vue'
import sellers from '../components/seller/seller.vue'
import '../common/stylus/index.styl'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'goods',
      component: goods
    },
    {
      path: '/goods',
      name: 'goods',
      component: goods
    },
    {
      path: '/ratings',
      name: 'ratings',
      component: ratings
    },
    {
      path: '/sellers',
      name: 'sellers',
      component: sellers
    }
  ]
})
