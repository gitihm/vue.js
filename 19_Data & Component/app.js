Vue.component('showcomment',{
    props:['commentpost'],
    template:'<h4>{{commentpost}}</h4>'
})
new Vue({
    el:"#vue-app",
    data:{
        newComment:'',
        comments :[
            'hello','Good','GN'
        ]
    },
    methods:{
        addcomment : function(){
            this.comments.push(this.newComment)
            this.newComment = ''
        },
    }
})