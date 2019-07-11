import Vue from 'vue'
import Router from 'vue-router'
import window from '@/components/window'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'window',
      component: window,
    }
  ]
})
