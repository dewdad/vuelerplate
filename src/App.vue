<template>
  <div id="app">
      <ul>
          <item v-for="item in items" :item="item" key="item"></item>
      </ul>
      <div>
          <input type="text" v-model="inputTitle">
          <button @click="addItem">追加</button>
      </div>
  </div>
</template>

<script>
import Item from './Item.vue'
 
export default {
    name: 'app',
    components: {
        Item
    },
    data () {
        return {
            items: this.$store.state.items,
            inputTitle: ""
        }
    }
}
</script>