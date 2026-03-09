import { createRouter, createWebHistory } from "vue-router"
import Kinraidee from "../pages/Kinraidee.vue"
import NearMeRestaurant from "../pages/NearMeRestaurant.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: Kinraidee
  },
  {
    path: "/restaurants",
    name: "restaurants",
    component: NearMeRestaurant
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router