<template>
  <NavbarComponent />
  <div class="container mt-5">
    <HeaderComponent :user="email" :path="path" />
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
        <tr v-for="(item, index) in movies" :key="item.id">
          <MovieComponent
            :item="item"
            @edit-item="editItem"
            @remove-item="deleteItem"
            @save-item="saveItem"
          />
        </tr>
      </tbody>
    </table>
    <div class="mt-4">
      <p v-if="movies.length === 0">No films found</p>
      <p v-else>Total number of films: {{ movies.length }}</p>
      <button
        class="btn btn-primary"
        @click="showNewItemForm = !showNewItemForm"
      >
        {{ showNewItemForm ? 'Cancel' : 'Add New Film' }}
      </button>
      <div v-if="showNewItemForm" class="mt-3">
        <h4>Add New Film</h4>
        <Form
          :validation-schema="schema"
          @submit="onSubmit"
          v-slot="{ values, errors, meta }"
        >
          <div class="form-group">
            <label for="newTitle">Title</label>
            <Field
              v-model="newItem.title"
              class="form-control"
              name="title"
              type="text"
            />
            <ErrorMessage name="title" />
          </div>

          <div class="form-group">
            <label for="newDescription">Description</label>
            <Field
              v-model="newItem.description"
              class="form-control"
              name="description"
              type="text"
            />
            <ErrorMessage name="description" />
          </div>

          <button class="btn btn-success" @click="saveNewItem">Save</button>
        </Form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { Field, Form, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'
import NavbarComponent from '../components/NavbarComponent.vue'
import MovieComponent from '../components/MovieComponent.vue'
import HeaderComponent from '../components/HeaderComponent.vue'
import { fetchMovies } from '../services/movieService'

const router = useRoute()

// Fix schema: title should be string, not email
const schema = yup.object({
  title: yup.string().required(),
  description: yup.string().required(),
})

const onSubmit = (values) => {
  saveNewItem()
}

const email = ref(router.query.email || 'dahmouni.amir@gmail.com')
const nextId = ref(5)
const path = '/ListMovies'

const movies = ref([])

onMounted(async () => {
  try {
    const response = await fetchMovies()
    movies.value = response
  } catch (error) {
    console.error(error)
  }
})

const showNewItemForm = ref(false)
const newItem = ref({ title: '', description: '' })

const editItem = (item) => {
  movies.value.forEach((i) => (i.editing = false))
  item.editing = true
}

const saveItem = (item) => {
  item.editing = false
}

const deleteItem = (item) => {
  if (confirm(`Are you sure you want to delete item with ID: ${item.id}?`)) {
    movies.value = movies.value.filter((i) => i.id !== item.id)
  }
  nextId.value--
}

const saveNewItem = () => {
  // Check if both title and description are filled out
  if (newItem.value.title && newItem.value.description) {
    // Add the new movie to the movies array
    movies.value.push({
      id: nextId.value++, // Generate a new ID for the new movie
      title: newItem.value.title, // Set the title from the form
      description: newItem.value.description, // Set the description from the form
      editing: false, // Set editing to false by default
    })

    // Clear the form fields after saving
    newItem.value.title = ''
    newItem.value.description = ''

    // Hide the form after saving
    showNewItemForm.value = false
  } else {
    // If the form is incomplete, show an alert
    alert('Please fill out both the title and description.')
  }
}
</script>

<style scoped>
.container {
  margin-top: 20px;
}
</style>
