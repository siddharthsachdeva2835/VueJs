new Vue({
    el:'#app',
    data:{
        age : 10
    },
    methods:{
        add:function(step){
            this.age += step;
            console.log(step + " added to age");
        },
        subtract:function(step) {
            this.age -= step;
            console.log(step + " subtracted from age");
        }
    }
});