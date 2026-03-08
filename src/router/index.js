import { createRouter, createWebHistory } from "vue-router"
import Kinraidee from "../pages/Kinraidee.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: Kinraidee
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router