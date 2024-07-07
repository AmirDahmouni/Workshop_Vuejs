<template>
  <td>{{ item.id }}</td>
  <td>
    <span v-if="!item.editing">{{ item.title }}</span>
    <input v-else type="text" v-model="item.title" class="form-control" />
  </td>
  <td>
    <span v-if="!item.editing">{{ item.description }}</span>
    <input v-else type="text" v-model="item.description" class="form-control" />
  </td>
  <td>
    <button
      v-if="!item.editing"
      class="btn btn-primary btn-sm mr-2"
      @click="editItem"
    >
      Edit
    </button>
    <button v-else class="btn btn-success btn-sm mr-2" @click="saveItem">
      Save
    </button>
    <button class="btn btn-danger btn-sm" @click="deleteItem">
      Delete
    </button>
  </td>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['edit-item', 'saveItem', 'removeItem'])

const editItem = () => {
  emit('edit-item', props.item)
}

const saveItem = () => {
  emit('saveItem', props.item)
}

const deleteItem = () => {
  emit('removeItem', props.item)
}
</script>

<style scoped>
/* Add your styles here */
</style>
