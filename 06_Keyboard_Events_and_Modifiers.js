new Vue({
    el:'#app',
    data:{
        name:'',
        age:0
    },
    methods:{
        logName:function(event){
            console.log("you entered your name : " + event.target.value);

        },
        logAge:function(event) {
            console.log("you entered your age : " + event.target.value);
            
        }
    }
});