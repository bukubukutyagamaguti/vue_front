import { createRouter, createWebHistory,  } from "vue-router";
import NotFound from '../views/NotFound.vue'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Logout from '../views/Logout.vue'
import Post from '../views/Post.vue'

const routes = [
    { path: '/login', component: Login },
    { path: '/user/logout', component: Logout, redirect: '/login' },
    { path: '/user/home', component: Home },
    { path: '/user/post', component: Post },
    { path: '/:catchAll(.*)', component: NotFound}
  ]
const router = createRouter({
    history: createWebHistory(),
    routes
  })

export default router