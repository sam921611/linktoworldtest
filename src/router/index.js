import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import product from '../views/product.vue'
import signup from '../views/signup.vue'
import login from '../views/login.vue'
import bitcoin from '../views/bitcoin.vue'
import contact from '../views/contact.vue'
import chat from '../views/chat.vue'
import chatbox from '../views/chatbox.vue'
import profile from '../views/profile.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/product',
    name: 'product',
    component: product
  },
  {
    path: '/signup',
    name: 'signup',
    component: signup
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/bitcoin',
    name: 'bicoin',
    component: bitcoin
  },
  {
    path: '/contact',
    name: 'contact',
    component: contact
  },
   {
    path: '/chat',
    name: 'chat',
    component: chat
  },
  {
    path: '/chatbox',
    name: 'chatbox',
    component: chatbox
  },
  {
    path: '/profile',
    name: 'profile',
    component: profile,
    meta: { requiresAuth: true }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
