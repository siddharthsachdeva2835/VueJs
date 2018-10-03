<template>
  <ul>
      <li v-for="todo in todos" :key="todo">
        {{todo.name}}  
        <input type="checkbox" :value="todo.done">
     </li>
  </ul>
</template>

<script>
export default {
    data () {
        return {
           todos : [
               { name : 'meeting with mentor' , done : false},
               { name : 'angular class at 6 pm' , done : true},
               { name : 'complete vuejs tutorials' , done : false}
           ]
        }
    }
}
</script>


<style scoped>
ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
}
li{
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
}
</style>
