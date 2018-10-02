<template>
  <div>
    <h1>List of Cobras</h1>
    <ul>
        <li v-for="cobra in cobras" :key='cobra'>{{cobra}}</li>
    </ul>
    <h1>List of Pyhtons</h1>
    <ul>
        <li v-for="python in pythons" :key='python'>{{python}}</li>
    </ul>
    {{test()}}
  </div>
</template>

<script>
export default {
  data () {
    return {
        cobras:['King Cobra','Samar Cobra','Indian Cobra']
    }
  },
  props:['pythons'],
  methods:{
    test:function(){
      // props can directly accessed like a data element
      console.log(this.pythons); 
    }
  }
}
</script>


<style>
  /* without this both the h1 tags will have a color defines in the root vue */
  /* Here the color style is overriding the color property in App.vue style */
  /* h1 {
    color: brown;
  } */
</style>

<style scoped>
  /* scoped styling */
  /* now both the h1 tags will have a different color */
  h1 {
    color:brown;
  }
</style>

