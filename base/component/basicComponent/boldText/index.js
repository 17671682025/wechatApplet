// base/component/basicComponent/title/index.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        title:{
            type:String,
            value:""
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        title:""
    },

    /**
     * 组件的方法列表
     */
    methods: {

    },
    lifetimes:{
        attached:function() {
            const { title='' } = this.properties;
            this.setData({
                title
            })
        }
        
    }
})
