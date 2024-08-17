
import { createRouter, createWebHistory } from "vue-router"
import ListMovies from "../pages/ListMovies.vue"
import TableMovies from "../pages/TableMovies.vue"
import LoginPage from "../pages/LoginPage.vue"
import ContactPage from "../pages/Contact.vue"

const routes = [
  { path: "/list", name: "ListMovies", component: ListMovies },
  { path: "/table", name: "TableMovies", component: TableMovies },
  { path: "/login", name: "LoginPage", component: LoginPage },
  { path: "/contact/:support", name: "ContactPage", component: ContactPage }
]
const router = createRouter({ history: createWebHistory(), routes })
export default router