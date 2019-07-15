import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '@/view/login'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [{
    name: 'login',
    path: '/login',
    component: login
  }]
})

export default router
