<template>
  <div id="app">
    <ul>
      <item v-for="item in items" :item="item" key="item"></item>
    </ul>
    <div>
      <input type="text" v-model="inputTitle">
      <button @click="ADD_TASK(inputTitle)">追加</button>
    </div>
  </div>
</template>
 
<script lang='ts'>
import { mapState, mapActions } from 'vuex'
import * as types from './store/mutation-types';
import Item from './components/Item.vue'
 
export default {
  name: 'app',
  components: {
    Item
  },
  data () {
    return {
      inputTitle: ""
    }
  },
  computed: {
    ...mapState(['items'])
  },
  methods: {
    ...mapActions([
      types.ADD_TASK
    ]),
  }
}
</script>