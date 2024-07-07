
import { createRouter, createWebHistory } from "vue-router"
import ListMovies from "../pages/ListMovies.vue"
import TableMovies from "../pages/TableMovies.vue"
import LoginPage from "../pages/LoginPage.vue"

const routes = [
  { path: "/list", name: "ListMovies", component: ListMovies },
  { path: "/table", name: "TableMovies", component: TableMovies },
  { path: "/login", name: "LoginPage", component: LoginPage }
]
const router = createRouter({ history: createWebHistory(), routes })
export default router