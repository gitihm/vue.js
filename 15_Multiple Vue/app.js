var post = new Vue({
    el:"#post",
    data:{
        title : 'ส่งโปรเจค',
        message : 'รายละเอียดโปรเจค',
    },   
})
var commit = new Vue({
    el:"#commit",
    data:{
        text:'อากาศดีมาก'
    },
})
var like = new Vue({
    el:"#like",
    data:{
        count:0
    },
    methods:{
        add : function(){
            this.count++
        }
    }
})