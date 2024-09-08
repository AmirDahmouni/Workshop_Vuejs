<template>
  <div class="container mt-5">
    <h2 class="mb-4">
      Bonjour {{ user }}, bienvenue dans la formation donnée par
      <u>{{ societe }}</u>
    </h2>
    <h2 class="mb-4">Composant utilisé : {{ path }}</h2>

    <p class="text-start">Count {{ count }}</p>
    <p class="text-start">Double Count {{ doubleCount }}</p>

    <button class="btn btn-success btn-sm mr-2" @click="increment">
      Increment
    </button>
    <button class="btn btn-success btn-sm mr-2" @click="randomizeCounter">
      randomize
    </button>

    <p class="text-start" v-if="nbClients > 0">
      Nous avons + {{ getNbClients() }}
    </p>
    <p class="text-start" v-else>nous sommes désolé</p>

    <div class="actions">
      <button class="btn btn-success btn-sm mr-2" @click="leave">
        -
      </button>
      <button class="btn btn-success btn-sm mr-2" @click="enter">
        +
      </button>

      <button
        class="btn btn-danger btn-sm mr-2"
        @click.once="displayBox('Bonjour !')"
      >
        Une fois
      </button>
    </div>
    <div class="input-group mb-3">
      <span class="input-group-text" id="basic-addon1">Remark</span>
    </div>
    <ul>
      <li v-for="(food, index) of Projects" :key="index">
        {{ food }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useCounterStore } from '../stores/store'
import { storeToRefs } from 'pinia'
import { ref, defineProps } from 'vue'

const props = defineProps({
  user: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
})

const counterStore = useCounterStore()
const { count, doubleCount } = storeToRefs(counterStore)
const { increment, randomizeCounter } = counterStore

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
