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
        }
    }
})