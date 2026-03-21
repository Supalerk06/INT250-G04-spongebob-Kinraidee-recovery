import { createRouter, createWebHistory } from "vue-router"
import LandingPage from "@/pages/LandingPage.vue"
import Kinraidee from "../pages/Kinraidee.vue"
import MyFridge from "../pages/MyFridge.vue"
import Tumraidee from "@/pages/Tumraidee.vue"

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
  },
  {
    path: "/tumraidee",
    name: "tumraidee",
    component: Tumraidee
  },
  {
    path: "/myfridge",
    name: "myfridge",
    component: MyFridge
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router