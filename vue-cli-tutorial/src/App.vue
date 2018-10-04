<template>
  <div id="app">
   <app-header :desc="desc" v-on:changeDesc="updateDesc($event)"></app-header>
   <todo-list></todo-list>
   <app-footer :desc="desc"></app-footer>
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
      desc:'Data transfered from parent to child using props' 
    }
  },
  methods:{
    updateDesc: function(e){
      this.desc = e;
    }
  }
}
</script>


<style>

</style>
