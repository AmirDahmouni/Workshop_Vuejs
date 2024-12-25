# Vue.js Formation ReadMe

Ce document regroupe les notions importantes abordées lors de la formation Vue.js, accompagnées d'exemples de code bien écrits.

---

## Importer Vue.js

Importer VueJS via CDN ou Local
Vue.js peut être utilisé de deux façons principales :

**CDN** : Inclure un fichier <script> dans votre fichier HTML en pointant vers un CDN.
**Local** : Téléchargez Vue.js et incluez-le dans votre projet.

Cela permet de démarrer rapidement ou d’intégrer Vue.js dans un projet existant.

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

L’interpolation utilise la syntaxe {{ }} pour afficher des données dynamiques dans le DOM. Cela lie des variables du modèle (data) à la vue.

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

Vue.js Devtools est une extension pour Chrome permettant de visualiser l’état des composants, des props, des données et des événements déclenchés en temps réel.

---

## Liaison du Modèle et de la Vue
La liaison entre le modèle et la vue est au cœur de Vue.js grâce à la réactivité. Cela permet de mettre à jour l’interface utilisateur automatiquement quand les données changent.

### Liaison des Propriétés
v-bind ou : permet de lier dynamiquement des attributs HTML à des données Vue.js.
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
Les méthodes permettent de définir des fonctions pour gérer des événements ou manipuler des données.

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
Les événements comme v-on:click ou @click permettent d’écouter les interactions de l’utilisateur et d’exécuter des méthodes correspondantes.

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
