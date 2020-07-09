// base/component/basicComponent/button/index.js
Component({
	/**
	 * 组件的属性列表
	 */
	properties: {
		// 按钮文字
		text: {
			type: String,
			value: '',
		},
		onPress: {
			type: Function,
			value: () => {},
		},
	},

	/**
	 * 组件的初始数据
	 */
	data: {
		buttonText: '',
		// 点击事件
		onPressEvent: () => {},
	},

	/**
	 * 组件的方法列表
	 */
	methods: {
		// 点击事件
		buttonPress: function (e) {
			// console.log('event', e);
			this.triggerEvent('onPress', { event: e, data: '' }, {});
		},
	},
	lifetimes: {
		/**
		 * 组件加载
		 */
		attached: function () {
			const { text = '' } = this.properties;
			this.setData({
				buttonText: text,
			});
		},
	},
});
