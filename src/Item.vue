<template>
    <li v-bind:class="{ 'is-do': item.is_do }" @click="DONE_TASK(item)">{{ item.title }}</li>
</template>
 
<script lang='ts'>
import { mapActions } from 'vuex'
import * as types from './store/mutation-types.ts';
 
export default {
    props: ['item'],
    methods: {
        ...mapActions([
            types.DONE_TASK
        ])
    }
}
</script>