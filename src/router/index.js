import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Details from '../views/Details.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {path: '/',component: Index},
  {path: '/index',component:Index},
  {path:'/details/:lid',component:Details,props:true},
  {path:'*',component:NotFound}
]

const router = new VueRouter({
  routes
})

export default router
