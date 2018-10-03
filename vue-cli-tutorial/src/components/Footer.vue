<template>
  <footer>
      <p>{{copyright}}</p>
  </footer>
</template>

<script>
export default {
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
</style>
