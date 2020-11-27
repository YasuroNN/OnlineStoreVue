import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Product from '@/components/product/Product'
import ProductList from '@/components/product/ProductList'
import Login from '@/components/auth/Login.vue'
import Register from '@/components/auth/Register'


Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '',
      name: 'home',
      component: Home
    },
    {
      path: '/product/:id',
      name: 'product',
      component: Product
    },
    {
      path: '/list',
      name: 'list',
      component: ProductList
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ],
  mode: 'history'
})