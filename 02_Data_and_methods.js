// instance of vue

new Vue({
    el: '#app',
    data:{
        name : "Siddharth",
        job : "Developer" 
    },
    methods:{
        greet : function(time){
            // return 'good Morning'
            return 'good ' + time + ' ' +this.name;
        }
    }

});