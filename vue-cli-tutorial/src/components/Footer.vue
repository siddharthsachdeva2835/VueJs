<template>
  <footer>
      <p>{{copyright}}</p>
      <h3>{{desc}}</h3>
  </footer>
</template>

<script>
    import { bus } from '../main.js'

    export default {
        props:['desc'],
        data () {
            return {
                copyright:'@copyright 2018 Vue Todos'
            }
        },
        created () {
            bus.$on('changeDescription',(data) => {
                this.desc = data
            })
        }
    }
</script>


<style scoped>
    footer {
        background: lightgreen;
        padding:10px;
    }
    p {
        color: #222;
        text-align: center;
    }
    h1 ,h3 {
        color: #222;
        text-align: center;
    }
</style>
