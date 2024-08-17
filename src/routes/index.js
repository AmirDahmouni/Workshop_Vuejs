
import { createRouter, createWebHistory } from "vue-router"
import moviesRoutes from "./movies";
import LoginPage from "../pages/LoginPage.vue"
import ContactPage from "../pages/Contact.vue"

const routes = [
  { path: "/login", name: "LoginPage", component: LoginPage },
  { path: "/contact/:support", name: "ContactPage", component: ContactPage },
  {
    path: "/movies", name: "movies",
    redirect: {
      name: "movies.ListMovies"
    },
    children: moviesRoutes
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/login',  // Redirect any undefined paths to '/home'
  },
]
const router = createRouter({ history: createWebHistory(), routes })

// global middleware
router.beforeEach((to, from, next) => {
  console.log(`Changement de route enclenché de ${from.name} vers ${to.name}`);
  if (Math.random() > 0.5) {
    console.log("Changement de route acceptée.");
    next();
  } else {
    console.log("Refusé");
  }
});
export default router