new Vue({
    el:'#app',
    data:{
        age : 10,
        x:0,
        y:0
    },
    methods:{
        add:function(step){
            this.age += step;
        },
        subtract:function(step) {
            this.age -= step;
        },
        updatexy:function(event){
            this.x = event.offsetX;
            this.y = event.offsetY
        }
    }
});