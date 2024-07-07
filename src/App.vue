<template>
  <div id="app">
    <ListMovies />
  </div>
</template>

<script>
import TableMovies from './pages/TableMovies.vue'
import ListMovies from './pages/ListMovies.vue'

export default {
  name: 'App',
  components: {
    TableMovies,
    ListMovies,
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
  margin-top: 60px;
}
</style>
