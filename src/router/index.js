import { createRouter, createWebHistory } from "vue-router"
import LandingPage from "@/pages/LandingPage.vue"
import Kinraidee from "../pages/Kinraidee.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: LandingPage
  },
   {
    path: "/kinraidee",
    name: "kinraidee",
    component: Kinraidee
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router