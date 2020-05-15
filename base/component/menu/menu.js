// base/component/menu.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        // 属性设置  就是props
        // 封面文字
        coverText:{
            type:String,
            // default value
            value:"",
            // 属性被改变时执行的函数（可选），也可以写成在methods段中定义的方法名字符串, 如：'_propertyChange'
            observer:function(newValue,oldValue) {
                
            }
        },
        // 封面图标
        coverIcon:{
            type:String,
            value:""
        },
        // menu数据
        menuSource:{
            type:Array,
            value:[]
        }
    },
    options:{
        //默认支持一个 启用多slot支持
        multipleSlots:true
    },

    /**
     * 组件的初始数据
     */
    data: {
        menuSource:[],
        coverText:"",
        coverIcon:"",

    },

    /**
     * 组件的方法列表
     */
    methods: {

    }
})
