# Vue.js Formation ReadMe

Ce document regroupe les notions importantes abordées lors de la formation Vue.js, accompagnées d'exemples de code bien écrits.

---

## Importer Vue.js

### Via CDN
```html
<script src="https://cdn.jsdelivr.net/npm/vue@3"></script>
```

### Via Local
```html
<script src="/path/to/vue.global.js"></script>
```

---

## Text Interpolation
Permet d'afficher des données dans le DOM.
```html
<div id="app">
  <p>{{ message }}</p>
</div>

<script>
const app = Vue.createApp({
  data() {
    return {
      message: 'Bonjour Vue.js!'
    };
  }
}).mount('#app');
</script>
```

---

## Débugger avec Vue.js Devtools
Téléchargez [Vue.js Devtools](https://devtools.vuejs.org/) pour Chrome ou Firefox pour visualiser les données et composants.

---

## Liaison du Modèle et de la Vue

### Liaison des Propriétés
```html
<div id="app">
  <input v-bind:placeholder="placeholderText">
</div>

<script>
const app = Vue.createApp({
  data() {
    return {
      placeholderText: 'Entrez votre texte ici'
    };
  }
}).mount('#app');
</script>
```

### Two-way Binding avec `v-model`
```html
<div id="app">
  <input v-model="message">
  <p>{{ message }}</p>
</div>

<script>
const app = Vue.createApp({
  data() {
    return {
      message: ''
    };
  }
}).mount('#app');
</script>
```

---

## Événements

### Ajouter un Gestionnaire d'Événements
```html
<div id="app">
  <button @click="sayHello">Cliquez-moi</button>
</div>

<script>
const app = Vue.createApp({
  methods: {
    sayHello() {
      alert('Bonjour!');
    }
  }
}).mount('#app');
</script>
```

### Modificateurs d'Événements
```html
<div id="app">
  <input @keyup.enter="submit">
</div>

<script>
const app = Vue.createApp({
  methods: {
    submit() {
      alert('Entrée détectée!');
    }
  }
}).mount('#app');
</script>
```

---

## Directives Structurelles

### `v-if` et `v-else`
```html
<div id="app">
  <p v-if="isLoggedIn">Bienvenue!</p>
  <p v-else>Veuillez vous connecter.</p>
</div>

<script>
const app = Vue.createApp({
  data() {
    return {
      isLoggedIn: false
    };
  }
}).mount('#app');
</script>
```

### `v-for`
```html
<div id="app">
  <ul>
    <li v-for="item in items" :key="item.id">{{ item.name }}</li>
  </ul>
</div>

<script>
const app = Vue.createApp({
  data() {
    return {
      items: [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' }
      ]
    };
  }
}).mount('#app');
</script>
```

### `v-show`
```html
<div id="app">
  <p v-show="isVisible">Ce texte est visible.</p>
</div>

<script>
const app = Vue.createApp({
  data() {
    return {
      isVisible: true
    };
  }
}).mount('#app');
</script>
```

---

## Composants et Templates

### Définir un Composant avec un Template
```html
<div id="app">
  <my-component></my-component>
</div>

<script>
const app = Vue.createApp({});

app.component('my-component', {
  template: '<p>Ceci est un composant!</p>'
});

app.mount('#app');
</script>
```

### Passage de Propriétés
```html
<div id="app">
  <greeting-message v-bind:message="customMessage"></greeting-message>
</div>

<script>
const app = Vue.createApp({
  data() {
    return {
      customMessage: 'Salut Vue.js!'
    };
  }
});

app.component('greeting-message', {
  props: ['message'],
  template: '<p>{{ message }}</p>'
});

app.mount('#app');
</script>
```

---

## Propriétés Calculées et Watchers

### Propriétés Calculées
```html
<div id="app">
  <p>{{ reversedMessage }}</p>
</div>

<script>
const app = Vue.createApp({
  data() {
    return {
      message: 'Vue.js'
    };
  },
  computed: {
    reversedMessage() {
      return this.message.split('').reverse().join('');
    }
  }
}).mount('#app');
</script>
```

### Watchers
```html
<div id="app">
  <input v-model="name">
</div>

<script>
const app = Vue.createApp({
  data() {
    return {
      name: ''
    };
  },
  watch: {
    name(newValue) {
      console.log('Nouveau nom:', newValue);
    }
  }
}).mount('#app');
</script>
```

---

## Router et Navigation

### Définir des Routes avec Vue Router
```html
<div id="app">
  <router-link to="/home">Accueil</router-link>
  <router-view></router-view>
</div>

<script>
import { createRouter, createWebHistory } from 'vue-router';

const Home = { template: '<h1>Accueil</h1>' };
const About = { template: '<h1>À propos</h1>' };

const routes = [
  { path: '/home', component: Home },
  { path: '/about', component: About }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

const app = Vue.createApp({});
app.use(router);
app.mount('#app');
</script>
```

---

## Validation des Formulaires avec VeeValidate

```html
<template>
  <form @submit.prevent="handleSubmit">
    <input v-model="formData.name" type="text" placeholder="Nom">
    <span>{{ errors.name }}</span>
    <button type="submit">Soumettre</button>
  </form>
</template>

<script>
import { useForm, useField } from 'vee-validate';
import * as yup from 'yup';

export default {
  setup() {
    const schema = yup.object({
      name: yup.string().required('Le nom est requis')
    });

    const { errors, handleSubmit } = useForm({ schema });
    const { value: name } = useField('name');

    return { name, errors, handleSubmit };
  }
};
</script>
