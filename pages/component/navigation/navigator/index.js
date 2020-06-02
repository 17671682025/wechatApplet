// pages/component/navigation/navigator/index.js
Page({
	/**
	 * 页面的初始数据
	 */
	data: {
		// 路由地址
		url: '../../../test/index',
		// 目标
		target1: 'self',
		// 跳转方式
		openType: 'navigate',
		// 是否阻止父级出现点击态
		hoverStopPropagation: true,
		target2: 'miniProgram',
		// 其他小程序的appId
		appId: 'wx0eb99eb7813d5b2f',
		// 其他小程序的某个路由
		path: '',
		// 需要传到其他小程序的数据
		extraData: { data: '我是来自其他小程序的数据' },
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
	 * 跳转成功
	 */
	onSuccess: function () {
		console.log('跳转其他app成功');
	},
	/**
	 * 跳转失败
	 */
	onFail: function () {
		console.log('跳转其他app失败');
	},
	/**
	 * 跳转app完成
	 */
	onComplete: function () {
		console.log('跳转其他app完成');
	},
	/**
	 * 跳转小程序
	 */
	navigateMiniProgram: function () {
		wx.navigateToMiniProgram({
			appId: this.data.appId,
			path: this.data.appId, //例如  pages/home/main?id=123
			extraData: this.data.extraData,
			envVersion: 'develop',
			success(res) {
                // 打开成功
                console.log("res",res)
			},
		});
	},
});
