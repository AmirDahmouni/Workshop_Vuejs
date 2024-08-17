import ListMovies from "../pages/ListMovies.vue"
import TableMovies from "../pages/TableMovies.vue"

export default [
  { path: "/list", name: "movies.ListMovies", component: ListMovies, props: true },
  {
    path: "/table", name: "movies.TableMovies",
    component: TableMovies, props: true,
    beforeEnter: (to, from, next) => {
      console.log(`Redirection ${to.name}`);
      next()
    }
  },
]

