// base/component/nestingText.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        labelText:{
            type:String,
            value:""
        },
        content:{
            type:String,
            value:""
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        labelText:"",
        content:""
    },

    /**
     * 组件的方法列表
     */
    methods: {

    },
    /**
     * 生命周期
     */
    lifetimes:{
        attached:function() {
            const { labelText,content } = this.properties;
            this.setData({
                labelText,
                content
            })
        }
    }
})
