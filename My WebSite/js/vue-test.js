var app = new Vue({
    el: "#app",
    data:{
        m: "hallo word"
    }
})
var app1 = new Vue({
    el: "#app1",
    data: {
        massage: "页面加载于" + new Date().toLocaleString()
    }
})
var app2 = new Vue({
    el:"#app2",
    data:{
        seen:true
    }
})
app2.seen = false;
var app3 = new Vue({
    el:"#app3",
    data:{
        arr:[
            {text:"学习Java"},
            {text:"学习js"},
            {text:"学习bootstrap"},
        ]
    }
})
var app4 = new Vue({
    el:"#app4",
    data:{
        text:"hallo word"
    },
    methods:{
        change:function(){
            this.text = this.text.split("").reverse().join("");
        }
    }
})
var app5 = new Vue({
    el:"#app5",
    data:{
        ms:"this is v model"
    }
})

Vue.component("zj-item",{
    props:["send"],
    template:"<li>{{send.text}}</li>"
})
var app6 = new Vue({
    el:"#app6",
    data:{
        testlist:[
            {id:0,text:"蔬菜"},
            {id:1,text:"水果"},
            {id:2,text:"其他"}
        ]
    }
})
Vue.component("button-c",{
    data:function(){
        return{
            count:0
        }
    },
    template:'<button v-on:click="count++"> you click me {{count}} times </button>'
})
var app7 = new Vue({
    el:"#app7"
})

var app8 = new Vue({
    el:"#app8",
    data:{
        massage:"this is hallo word"
    },
    computed:{
        change1:function(){
            return this.massage.split("").reverse().join("");
        }
    }
})
//计算属性和监听属性
var app9 = new Vue({
    el:"#app9",
    data:{
        firstname:"huang",
        lastname:"xian",
        fullname:"huang xian"
    },
 //监听
    watch:{
        firstname:function(val){
            this.fullname = val + " " +this.lastname;
        },
        lastname:function(val){
            this.fullname = this.firstname + " " + val;
        }
    }
})

var vm = new Vue({
    el:"#vm",
    data:{
        first: "li",
        last:"si"
    },
    computed:{
        fulln:function(){
            return this.first + " " + this.last
        }
    }
});

//v-for把数组对应为一个元素  还可以访问父作用域的属性 以及当前项的索引
var app10 = new Vue({
 el:"#app10",
    data:{
     parentM:"perant",
      items:[
          {text:"boy"},
          {text:"19"},
          {text:"huang"}
      ]
    }
});
//v-for 遍历对象属性 可以获取三个参数键名 索引 值
 var  app11 = new Vue({
     el:"#app11",
     data:{
         object:{
             title:"1111111111",
             content:"abcdefghijklmnopqrstuvwsyz",
             footer:"zzzzzzzzzz",
             date:"2019-7-5"
         }
     }
 })
//组件中使用v-for
Vue.component("todo-item",{
template:  `<li>{{text}}<button v-on:click='$emit("remove")'>Remove</button></li>`,
    props:['text']
})
var vf = new Vue({
    el:"#bm",
    data:{
        NewText:" ",
        todos:[
            {
                id:1,
                title: "abcdfg",
            },
            {
                id: 2,
                title:"qwerty" ,
            },
            {
                id:3,
                title:"yuiopn",
            }
        ],
        nextid:4,
    },
    methods:{
        addNewTodo:function(){
            this.todos.push({
                id: this.nextid++,
                title: this.NewText
            });
            this.NewText=" ";
        }
    }
})
//表单输入绑定
var bd = new Vue({
    el:"#bdan",
    data:{
        massage:"",
        massage1:"",
        check:"",
        checknames:[],
        pick:"",
        selected:"",
        select:[],
        selectedf:"banana",
        options:[
            {text:"three",value:"banana"},
            {text:"four",value:"grade"},
            {text:"five",value:"pear"}
        ]
    }
})
//组件 //组件传值
   Vue.component("bt-count",{
       data:function(){
           return {
            count:0,
           }
       },
       template:'<button v-on:click="count++">你点击了我{{count}}次</button>'
   })

  Vue.component("z-value",{
        props:['text'],
        template:`<div>
                  <h3>{{text.value}}</h3>
                  <button v-on:click="$emit('font-change')">改变字体</button>
                  <div v-html="text.content"></div>
                  </div>`
      })
var zujian = new Vue({
    el:"#zj",
    data:{
        contents:[
            {id:1,value:"hi this is first word",content:"sdfsf"},
            {id:2,value:"hi this is second word"},
            {id:3,value:"hi this is third word"}
        ],
        fontcge:1
    },

})


