import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import { createPinia } from 'pinia';

const pinia = createPinia();

const APP = createApp(App).use(router);
APP.use(pinia);

APP.component('mgg-menu', {
  props: {
    menuToday: {
      type: Array,
      required: true,
    },
    length: Number,
  },
  emits: ['clear'],
  methods: {
    emitClear() {
      this.$emit('clear', "All");
    },
    getBestMenu() {
      return this.menuToday[0]
    }
  },
  template: `#template-mgg-menu`,
});

APP.component('mgg-panel', {
  data() {
    return {};
  },
  template: `#template-mgg-panel`,
});

APP.mount('#app');
