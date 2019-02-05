new Vue({
    el:"#vue-app",
    data:{
        name:"Ismael Hama",
        job:"คนส่งแก๊ส",
        age: 20,
        status : false,
        facebook: 'https://www.facebook.com/hama897'
    },
    methods:{
        getName: function(){
            return this.name
        },
        setName: function(n){
            return this.name = n
        }
    }
})