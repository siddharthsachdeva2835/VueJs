new Vue({
    el:'#app',
    data:{
        red:false,
        green:false,
    },
    computed:{
        compColor:function(){
            return {
                red:this.red,
                green:this.green
            }
        }
    }
});