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
      @click="editItem(item)"
    >
      Edit
    </button>
    <button v-else class="btn btn-success btn-sm mr-2" @click="saveItem(item)">
      Save
    </button>
    <button class="btn btn-danger btn-sm" @click="deleteItem(item)">
      Delete
    </button>
  </td>
</template>

<script>
export default {
  name: 'ItemComponent',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    editItem() {
      this.$emit('edit-item', this.item)
    },
    saveItem() {
      this.$emit('saveItem', this.item)
    },
    deleteItem() {
      this.$emit('removeItem', this.item)
    },
  },
}
</script>

<style scoped>
/* Add your styles here */
</style>
