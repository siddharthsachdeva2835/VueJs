<template>
  <footer>
      <p>{{copyright}}</p>
      <h3>{{desc}}</h3>
  </footer>
</template>

<script>
    export default {
        props:['desc'],
        data () {
            return {
                copyright:'@copyright 2018 Vue Todos'
            }
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
