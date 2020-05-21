// base/component/pageContainer/index.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        headerTitle:{
            type:String,
            value:""
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        headerTitle:""
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
            const { headerTitle } = this.properties;
            this.setData({
                headerTitle
            })
        }
    }
})
