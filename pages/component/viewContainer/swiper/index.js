// pages/component/viewContainer/swiper/index.js
Page({
	/**
	 * 页面的初始数据
	 */
	data: {
		swiperList: [
			{
				itemId: 'swiper_item1',
				src: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2192316936,131704123&fm=26&gp=0.jpg',
			},
			{
				itemId: 'swiper_item2',
				src: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2213244297,14939061&fm=26&gp=0.jpg',
			},
			{
				itemId: 'swiper_item3',
				src:
					'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590518390564&di=9d941b7366c99fcaa5a610854ae87cdc&imgtype=0&src=http%3A%2F%2Fwww.cnarts.net%2Fuploadimages%2Fcweb%2Fservice%2Fysbz%2Fwallpaper%2F2013-10-29%2F20131029154057.jpg',
			},
			{
				itemId: 'swiper_item4',
				src:
					'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590518390564&di=d3a3e9c64a9c4ac95a3e763fc72b0792&imgtype=0&src=http%3A%2F%2Fimage3.cnpp.cn%2Fupload%2Fimages%2F20180515%2F11494176405_1200x800.jpg',
			},
		],
		// 是否自动播放
		autoplay: true,
		// 是否显示指示面板
		indicatorDots: true,
		// 未激活指示点颜色
		indicatorColor: 'rgba(255,0,255,1)',
		// 激活指示点颜色
		indicatorActiveColor: 'rgba(50,205,50,1)',
		// 当前激活滑块的index
		current: 1,
		// 滑块自动切换的时间
		interval: 1500,
		// 滑动动画时长
		duration: 1000,
		// 是否使用衔接动画
		circular: true,
		// 滑动方向是否为竖向
		vertical: true,
		// 前边距
		previousMargin: '20rpx',
		// 后边距
		nextMargin: '20rpx',
		// 同时展示滑块的数目
		displayMultipleItems: 3,
		// 是否跳过未显示的滑块布局，设为 true 可优化复杂情况下的滑动性能，但会丢失隐藏状态滑块的布局信息
		skipHiddenItemLayout: false,
		// 动画
		easingFunction: 'linear',
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () {},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function () {},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function () {},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function () {},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function () {},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function () {},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {},
	/**
	 * swiper的current发生改变
	 */
	bindchange: function (event) {
		console.log('current发生改变了', event.detail);
	},
	/**
	 * swiper的swiper-item 的位置发生改变
	 */
	bindtransition: function (event) {
		console.log('swiper-item 的位置发生改变了', event.detail);
	},
	/**
	 * swiper的动画结束时会触发
	 */
	bindanimationfinish: function (event) {
		console.log('动画结束了', event.detail);
	},
});