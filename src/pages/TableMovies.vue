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
      <button v-on:click="enter()">Entrer</button>
      <button @click="leave">Sortir</button>
      <button @click.once="displayBox('Bonjour !')">Une fois</button>
    </div>
    <input
      v-model="nom"
      placeholder="Nom du restaurant"
      name="restaurant_name"
    />
    <ul>
      <li v-for="(food, index) of Projects" :key="index">
        {{ index }} -{{ food }}
      </li>
    </ul>
    <h2 class="mb-4">Vue.js Table with Bootstrap</h2>
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
          <td>{{ item.id }}</td>
          <td>
            <span v-if="!item.editing">{{ item.title }}</span>
            <input
              v-else
              type="text"
              v-model="item.title"
              class="form-control"
            />
          </td>
          <td>
            <span v-if="!item.editing">{{ item.description }}</span>
            <input
              v-else
              type="text"
              v-model="item.description"
              class="form-control"
            />
          </td>
          <td>
            <button
              v-if="!item.editing"
              class="btn btn-primary btn-sm mr-2"
              @click="editItem(item)"
            >
              Edit
            </button>
            <button
              v-else
              class="btn btn-success btn-sm mr-2"
              @click="saveItem(item)"
            >
              Save
            </button>
            <button class="btn btn-danger btn-sm" @click="deleteItem(item)">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="mt-4">
      {{ nb }}
      <p>Total number of films: {{ items.length }}</p>
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

<script>
export default {
  data() {
    return {
      societe: 'ESN Consulting',
      nom: 'We involve',
      nbClients: 234,
      Projects: [
        'Développement et maintenance',
        'Infrastructure et Devops',
        'It & data center',
      ],
      items: [
        { id: 1, title: 'Item 1', description: 'Description for Item 1' },
        { id: 2, title: 'Item 2', description: 'Description for Item 2' },
        { id: 3, title: 'Item 3', description: 'Description for Item 3' },
      ],
      nextId: 4,
      showNewItemForm: false,
      newItem: {
        title: '',
        description: '',
      },
    }
  },
  methods: {
    editItem(item) {
      this.items.forEach((i) => (i.editing = false)) // Disable editing for all items
      item.editing = true
    },
    saveItem(item) {
      item.editing = false
    },
    deleteItem(item) {
      if (
        confirm(`Are you sure you want to delete item with ID: ${item.id}?`)
      ) {
        this.items = this.items.filter((i) => i.id !== item.id)
      }
      this.nextId--
    },
    saveNewItem() {
      if (this.newItem.title.trim() && this.newItem.description.trim()) {
        this.items.push({
          id: this.nextId++,
          title: this.newItem.title,
          description: this.newItem.description,
          editing: false,
        })
        this.newItem.title = ''
        this.newItem.description = ''
        this.showNewItemForm = false
      } else {
        alert('Please fill out both the title and description.')
      }
    },
    getNbClients() {
      if (this.nbClients === 0) {
        return `aucun client`
      } else if (this.nbClients === 1) {
        return `${this.nbClients} client`
      } else {
        return `${this.nbClients} clients`
      }
    },
    enter() {
      this.nbClients++
    },
    leave() {
      if (this.nbClients <= 0) return
      this.nbClients--
    },
    displayBox(msg) {
      console.log(msg)
    },
  },
}
</script>

<style scoped>
.container {
  margin-top: 20px;
}
</style>
