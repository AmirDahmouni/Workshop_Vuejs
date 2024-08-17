<template>
  <router-view></router-view>
</template>

<script>
import NavbarComponent from './components/NavbarComponent.vue'

export default {
  el: '#app',
  name: 'App',
  components: {
    NavbarComponent,
  },
  data() {
    return {
      menu: [
        'Filet de saumon - 15€',
        'Salade de fruit - 9€',
        'Salade niçoise - 120€',
      ],
    }
  },
  methods: {
    onClear(defaultValue) {
      console.log(defaultValue)
      this.menu = []
    },
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
