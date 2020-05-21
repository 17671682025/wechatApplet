// base/component/componentTitle/index.js
Component({
	/**
	 * 组件的属性列表
	 */
	properties: {
		componentText:{
            type:String,
            value:""
        }
	},

	/**
	 * 组件的初始数据
	 */
	data: {
		componentText:""
	},

	/**
	 * 组件的方法列表
	 */
	methods: {},
	/**
	 * 生命周期
	 */
	lifetimes:{
		attached:function() {
			const { componentText } = this.properties;
			this.setData({
				componentText
			})
		}
	}
});
