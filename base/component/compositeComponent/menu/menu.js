
Component({
	// 组件数据监听器
	observers: {},
	/**
	 * 组件的属性列表
	 */
	properties: {
		// // 属性设置  就是props
		// 封面文字
		coverText: {
			type: String,
			// default value
			value: '',
		},
		// 封面图标
		coverIcon: {
			type: String,
			value: '',
		},
		// menu数据
		menuSource: {
			type: Array,
			value: [],
		},
	},
	options: {
		//默认支持一个 启用多slot支持
		// multipleSlots: true
	},

	/**
	 * 组件的初始数据
	 */
	data: {
		menuSource: [],
		coverText: '',
		coverIcon: '',
		isOpen: false,
	},

	/**
	 * 组件的方法列表
	 */
	methods: {
		handleClick() {
			if (!this.data.isOpen) {
				console.log('数据', this.data);
				this.setData({
					isOpen: true,
				});
			} else {
				this.setData({
					isOpen: false,
				});
			}
		},
		// 跳转对应的页面
		navigatePage(event) {
			console.log('事件对象', event);
			let routerPath = event.currentTarget.dataset['routerpath'] || '';
			console.log('路由', routerPath);
			// navigate.redirectTo({ url: routerPath });
			wx.navigateTo({ url: routerPath });
		},
	},
	lifetimes: {
		attached: function () {
			console.log('props', this.properties);
			const { menuSource, coverText, coverIcon } = this.properties;
			console.log('传入参数-menuSource', menuSource);
			console.log('传入参数-coverText', coverText);
			console.log('传入参数-coverIcon', coverIcon);
			this.setData({
				menuSource,
				coverText,
				coverIcon,
			});
		},
		detached: function () {
			// 在组件实例被从页面节点树移除时执行
		},
		ready: function () {},
	},
});
