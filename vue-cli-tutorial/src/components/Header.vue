<template>
  <header>
      <h1>{{title}}</h1>
      <h3>{{desc}}</h3>
      <button @click="changeDesc">CHANGE DESC</button>
      <button @click="changeDescEverywhere">CHANGE DESC Everywhere</button>
  </header>
</template>

<script>
    export default {
        props : ['desc'],
        data () {
            return {
                title:'Vue Todos'
            }
        },
        methods: {
            // desc is changed only in the header as it is a primitive type
            changeDesc : function(){
                this.desc = 'Data transfered from App.vue to Header.vue using props' 
            },

            changeDescEverywhere : function() {
                this.$emit('changeDesc','Description update in both header and footer using events')
            }
        }
    }
</script>


<style scoped>
    header {
        background: lightgreen;
        padding:10px;
    }
    h1 ,h3 {
        color: #222;
        text-align: center;
    }
</style>
