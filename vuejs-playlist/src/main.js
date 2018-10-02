import Vue from 'vue'
import App from './App.vue'
// import Cobras from './Cobras.vue' 

// registering a component globally

// Vue.component('cobras',Cobras)

new Vue({
  el: '#app',
  render: h => h(App)
})
