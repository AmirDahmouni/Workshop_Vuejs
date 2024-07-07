<template>
  <div id="app">
    <NavbarComponent />
    <router-view></router-view>
  </div>
</template>

<script>
import NavbarComponent from './components/NavbarComponent.vue'
import TableMovies from './pages/TableMovies.vue'
import ListMovies from './pages/ListMovies.vue'

export default {
  name: 'App',
  components: {
    TableMovies,
    ListMovies,
    NavbarComponent,
  },
}
</script>

<style>
@import 'bootstrap/dist/css/bootstrap.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
