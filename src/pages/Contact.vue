<template>
  <NavbarComponent />
  <div class="container mt-5">
    <HeaderComponent :user="email" :path="path" />
    <h2 class="mb-4">Contact page: {{ kindContact }}</h2>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { watch } from 'vue'
import NavbarComponent from '../components/NavbarComponent.vue'
import HeaderComponent from '../components/HeaderComponent.vue'

const router = useRoute()
const kindContact = ''
const path = ''
const email = 'dahmouni.amir@gmail.com'

watch(
  () => router.name,
  (newName) => {
    path = newName
  },
)
</script>

<style scoped>
.container {
  margin-top: 100px;
}
</style>
