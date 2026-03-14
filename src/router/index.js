import { createRouter, createWebHistory } from "vue-router"
import Kinraidee from "../pages/Kinraidee.vue"
import Tumraidee from "@/pages/Tumraidee.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: Kinraidee
  },
  {
    path: "/tumraidee",
    name: "tumraidee",
    component: Tumraidee
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router