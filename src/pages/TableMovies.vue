<template>
  <div class="container mt-5">
    <HeaderComponent />
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
          <ItemComponent
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

<script>
import ItemComponent from '../components/ItemComponent.vue'
import HeaderComponent from '../components/HeaderComponent.vue'
import { watch } from 'vue'

export default {
  name: 'TableMovies',
  components: {
    HeaderComponent,
    ItemComponent,
  },
  data() {
    return {
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
  watch: {
    items: {
      handler(old, newList) {
        alert('Movie list updated with success', newList)
      },
      deep: true,
    },
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
  },
}
</script>

<style scoped>
.container {
  margin-top: 20px;
}
</style>
