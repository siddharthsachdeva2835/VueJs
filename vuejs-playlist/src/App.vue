<template>
  <div>
    <h1>{{title}}</h1>
    <cobras></cobras>
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
    }
  }
}
</script>

<style>
h1{
  color:blueviolet;
}
</style>
