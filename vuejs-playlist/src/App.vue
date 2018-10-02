<template>
  <div>
    <h1>{{title}}</h1>
    <cobras v-bind:pythons="pythons"></cobras>
  </div>
</template>

<script>
//Locally registering a component 
import Cobras from './Cobras.vue'

export default {
  components:{
    'cobras':Cobras
  },
  data () {
    return {
     title:'Cobra App',
     pythons:['Ball Python','Carpet Python','Woma python']
    }
  }
}
</script>

<style>
h1{
  color:blueviolet;
}
</style>
