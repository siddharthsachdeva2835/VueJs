<template>
  <div id="app">
   <app-header></app-header>
   <todo-list></todo-list>
   <app-footer></app-footer>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import TodoList from "./components/TodoList.vue";

export default {
  components:{
      'app-header' : Header,
      'app-footer' : Footer,
      'todo-list' : TodoList 
  },
  data () {
    return {

    }
  }
}
</script>


<style>

</style>
