new Vue({
    el:"#vue-app",
    data:{
        newData : {
            empName : '',
            salary : 0,
        },
        empGroup :[
            {
                empName: "jack",
                salary : 5000
            },
            {
                empName: "air",
                salary : 5000
            }
        ]
    },
    methods:{
        addEmp : function(){
            this.empGroup.push({
                empName : this.newData.empName,
                salary : this.newData.salary
            })

            this.newData.empName =''
            this.newData.salary=0
        },
        showMessage : function(){
            alert("Complete")
        }
    },
    computed:{
        summation: function(){
            var sum = this.empGroup.reduce(function(value,data){
                return value + Number(data.salary)
            },0)
            return sum
        },
        avg: function(){
            var sum = this.empGroup.reduce(function(value,data){
                return value + Number(data.salary)
            },0)
            return sum/this.empGroup.length
        }
    },
    watch:{
        summation: function(){
            this.showMessage()
        }
    }
    
})