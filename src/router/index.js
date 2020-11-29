import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Product from '@/components/product/Product'
import ProductList from '@/components/product/ProductList'
import Login from '@/components/auth/Login.vue'
import Register from '@/components/auth/Register'
import AuthGuard from './auth-guard'
import NewProduct from '@/components/product/NewProduct'


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
      props: true,
      name: 'product',
      component: Product
    },
    {
      path: '/list',
      name: 'list',
      component: ProductList,
      beforeEnter: AuthGuard
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
    },
    {
      path: '/new',
      name: 'newProduct',
      component: NewProduct
    }
  ],
  mode: 'history'
})