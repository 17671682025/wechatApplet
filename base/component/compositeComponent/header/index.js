// base/component/compositeComponent/header/index.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        content: {
            type: String,
            value: ""
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        content: ""
    },

    /**
     * 组件的方法列表
     */
    methods: {

    },
    /**
     * 生命周期
     */
    lifetimes: {
        attached: function () {
            const { content } = this.properties;
            this.setData({
                content
            })
        }
    }
})
