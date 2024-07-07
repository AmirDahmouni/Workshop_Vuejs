<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navigation</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-link">
            <router-link to="/list">List movies</router-link>
          </a>
          <a class="nav-link">
            <router-link to="/table">Table movies</router-link>
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, watch } from 'vue'

const societe = ref('ESN Consulting')
const nbClients = ref(234)
const Projects = [
  'Développement et maintenance',
  'Infrastructure et Devops',
  'It & data center',
]

const getNbClients = () => {
  if (nbClients.value === 0) {
    return 'aucun client'
  } else if (nbClients.value === 1) {
    return `${nbClients.value} client`
  } else {
    return `${nbClients.value} clients`
  }
}

const enter = () => {
  nbClients.value++
}

const leave = () => {
  if (nbClients.value <= 0) return
  nbClients.value--
}

const displayBox = (msg) => {
  console.log(msg)
}
</script>
