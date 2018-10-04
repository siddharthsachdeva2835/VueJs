<template>
  <header>
      <h1>{{title}}</h1>
      <h3>{{desc}}</h3>
      <button @click="changeDesc">CHANGE DESC</button>
      <button @click="changeDescEverywhere">CHANGE DESC EVERYWHERE</button>
      <button @click="changeDescUsingEventBus">CHANGE DESC USING EVNTBUS</button>
  </header>
</template>

<script>
    import { bus } from '../main.js'

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
            },

            changeDescUsingEventBus : function(){
               this.desc = "Data updated using event bus"
               bus.$emit('changeDescription','Data updated using event bus') 
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
