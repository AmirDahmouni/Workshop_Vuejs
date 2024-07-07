<template>
  <div class="container mt-5">
    <h2 class="mb-4">
      Bonjour à tous, bienvenue dans la formation donnée par
      <u>{{ societe }}</u>
    </h2>

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
    <h2 class="mb-4">Les films de moment</h2>
    <table class="table table-bordered">
      <thead class="thead-dark">
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="item.id">
          <MovieComponent
            :item="item"
            @edit-item="editItem"
            @removeItem="deleteItem"
            @saveItem="saveItem"
          />
        </tr>
      </tbody>
    </table>
    <div class="mt-4">
      <p v-if="items.length === 0">No films found</p>
      <p v-else>Total number of films: {{ items.length }}</p>
      <button
        class="btn btn-primary"
        @click="showNewItemForm = !showNewItemForm"
      >
        {{ showNewItemForm ? 'Cancel' : 'Add New Film' }}
      </button>
      <div v-if="showNewItemForm" class="mt-3">
        <h4>Add New Film</h4>
        <div class="form-group">
          <label for="newTitle">Title</label>
          <input
            type="text"
            id="newTitle"
            v-model="newItem.title"
            class="form-control"
          />
        </div>
        <div class="form-group">
          <label for="newDescription">Description</label>
          <input
            type="text"
            id="newDescription"
            v-model="newItem.description"
            class="form-control"
          />
        </div>
        <button class="btn btn-success" @click="saveNewItem">Save</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, watch } from 'vue'
import MovieComponent from '../components/MovieComponent.vue'

const societe = ref('ESN Consulting')
const nbClients = ref(234)
const Projects = [
  'Développement et maintenance',
  'Infrastructure et Devops',
  'It & data center',
]
const nextId = ref(4)
const items = ref([
  { id: 1, title: 'Item 1', description: 'Description for Item 1' },
  { id: 2, title: 'Item 2', description: 'Description for Item 2' },
  { id: 3, title: 'Item 3', description: 'Description for Item 3' },
])
const showNewItemForm = ref(false)
const newItem = ref({ title: '', description: '' })

const editItem = (item) => {
  items.value.forEach((i) => (i.editing = false))
  item.editing = true
}

const saveItem = (item) => {
  item.editing = false
}

const deleteItem = (item) => {
  console.log('====================================')
  console.log(item)
  console.log('====================================')
  if (confirm(`Are you sure you want to delete item with ID: ${item.id}?`)) {
    items.value = items.value.filter((i) => i.id !== item.id)
    console.log('====================================')
    console.log(items.value)
    console.log('====================================')
  }
  nextId.value--
}

const saveNewItem = () => {
  if (newItem.value.title.trim() && newItem.value.description.trim()) {
    items.value.push({
      id: nextId.value++,
      title: newItem.value.title,
      description: newItem.value.description,
      editing: false,
    })
    newItem.value.title = ''
    newItem.value.description = ''
    showNewItemForm.value = false
  } else {
    alert('Please fill out both the title and description.')
  }
}

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

watch(
  items,
  (newVal, oldVal) => {
    console.log(`Les valuers de Items : ${oldVal}=> ${newVal}`)
  },
  { deep: true },
)
</script>

<style scoped>
.container {
  margin-top: 20px;
}
</style>
