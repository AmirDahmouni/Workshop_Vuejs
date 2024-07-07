import { createApp } from 'vue'
import App from './App.vue'
import router from "./routes"

const APP = createApp(App).use(router);

APP.component("mgg-menu", {
  template: "#template-mgg-menu",
  props: {
    menuToday: {
      type: Array,
      required: true,
    },
    length: Number,
  },
  methods: {
    getBestMenu() {
      return this.menuToday[0]
    },
    clear() {
      this.menuToday = [];
    }
  },
})

APP.mount('#app')
