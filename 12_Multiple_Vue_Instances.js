var oneVue = new Vue({
    el:'#app-one',
    data:{
        title:'Vue app one'
    },
    methods:{

    },
    computed:{
        greet: () => {
            return 'hello from app one'
        }
    }
})

var twoVue = new Vue({
    el:'#app-two',
    data:{
        title : 'vue app two'
    },
    methods:{
        changeTitle:()=>{
            oneVue.title = 'Vue app one title changed from app 2'
        }
    },
    computed:{
        greet: () => {
            return 'hello from app two'
        }

    }
})

twoVue.title = 'vue app two title changed from outside!!'