// base/component/basicComponent/desc/index.js
Component({
	/**
	 * 组件的属性列表
	 */
	properties: {
		text: {
			type: String,
			value: '',
			observer: function (newVal, oldVal) {
                console.log('observer-newVal', newVal);
                 console.log('observer-oldVal', oldVal);
                this.setData({
					content: newVal,
				});
            },
		},
	},

	/**
	 * 组件的初始数据
	 */
	data: {
		content: '',
	},

	/**
	 * 组件的方法列表
	 */
	methods: {},
	lifetimes: {
		attached: function () {
			const { text = '' } = this.properties;
			console.log('desc-properties', text);
			this.setData({
				content: text,
			});
		},
	},
});
