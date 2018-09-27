new Vue({
    el:'#app',
    data:{
        age:20,
        a:0,
        b:0,
        c:0
    },
    methods:{
        addToA:function(){
            console.log("Methods : Added to A");
            
            return this.a + this.age;
        },
        addToB:function(){
            console.log("Methods : Added to B");
            
            return this.b + this.age;
        }
    },
    computed:{
        addToAComputed:function(){
            console.log("Computed : Added to A");
            
            return this.a + this.age;
        },
        addToBComputed:function(){
            console.log("Computed : Added to B");
            
            return this.b + this.age;
        }
    }

});