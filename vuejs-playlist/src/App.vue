<template>
  <div>
    <h1>{{title}}</h1>
    <h3>{{greeting()}}</h3>
  </div>
</template>

<script>
export default {
  data () {
    return {
     title:'My first Vue-CLI',
     name:'Siddharth'
    }
  },
  methods:{
    greeting:function(){
      return 'Good Moring ' + this.name 
    }
  }
}
</script>

<style>
</style>
