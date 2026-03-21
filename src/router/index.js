import { createRouter, createWebHistory } from "vue-router"
import LandingPage from "@/pages/LandingPage.vue"
import Kinraidee from "../pages/Kinraidee.vue"
import NearMeRestaurant from "../pages/NearMeRestaurant.vue"
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
    path: "/restaurants",
    name: "restaurants",
    component: NearMeRestaurant
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