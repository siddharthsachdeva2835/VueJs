new Vue({
    el:'#app',
    data:{
        name:'siddharth'
    },
    methods:{
        readRefs : function() {
            console.log(this.$refs.input.value)
            this.name = this.$refs.input.value
        }
    }
})