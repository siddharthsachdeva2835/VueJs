<template>
  <header>
      <h1>{{title}}</h1>
      <h3>{{desc}}</h3>
  </header>
</template>

<script>
export default {
    props : ['desc'],
    data () {
        return {
            title:'Vue Todos'
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
