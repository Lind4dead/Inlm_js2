import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductDetails from '../views/ProductDetails.vue'
import LoginView from '../views/LoginView.vue'
import CartView from '../views/CartView.vue'
import MyProfileView from '../views/MyProfileView.vue'
import AboutView from '../views/AboutView.vue'
import store from '../store/index'

const requireAuth = (to, from, next) => {
  let loggedIn = store.getters.loggedIn
  if(!loggedIn) {
    next({name: 'login', query: {redirect: to.fullPath}})
  }
  else {
    next()
  }
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/product/details/:id',
    name: 'product',
    component: ProductDetails,
    props: true
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartView
  },
  {
    path: '/profile',
    name: 'profile',
    component: MyProfileView,
    beforeEnter: requireAuth
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
