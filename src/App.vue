<template>
  <div id="app">
    <TableMovies />
  </div>
</template>

<script>
import TableMovies from './pages/TableMovies.vue'

export default {
  name: 'App',
  components: {
    TableMovies,
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
