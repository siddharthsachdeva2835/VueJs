<template>
  <div>
    <h1>List of cobras</h1>
    <ul>
        <li v-for="cobra in cobras" :key='cobra'>{{cobra}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
        cobras:['King Cobra','Samar Cobra','Indian Cobra']
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

