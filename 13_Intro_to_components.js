// if vueData is returned in the component data, the same name variable will
// be used in all the instances of the component
// that is why we define data as a function in the vue component
var vueData = {
    name:'siddharth'
}

Vue.component('greeting',{
    template: '<div><h2>Hey {{name}}, This is a Vue component</h2><button v-on:click="changeName()">Change Name</button></div>',
    data () {
        return {
            name : 'siddharth'
        }
        // return vueData;
    },
    methods:{
        changeName:function(){
            this.name = 'sachdeva'
        }
    }
})

new Vue({
    el:'#app-one'
})

new Vue({
    el:'#app-two',
    
})