<template>
  <div class="demo"></div>
  <item :menus="menus" />
</template>

<script>
import storage from '@/utils/storage'
import item from './item.vue'
export default {
  name: '',
  setup() {
    let menus = storage.getItem('menus', false)

    return { menus }
  },
  components: {
    item
  }
}
</script>

<style scoped></style>
