import ListMovies from "../pages/ListMovies.vue"
import TableMovies from "../pages/TableMovies.vue"
import { createRouter, createWebHistory } from "vue-router"
const routes = [
  { path: "/list", component: ListMovies },
  { path: "/table", component: TableMovies },
]
const router = createRouter({ history: createWebHistory(), routes })
export default router