// pages/interface/network/request/index.js
Page({
	/**
	 * 页面的初始数据
	 */
	data: {},

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
	 * 发起请求
	 */
	request: () => {
		wx.request({
			url: 'https://api2x.caixm.cn/cxm-purchase/settlement/getBuyerPurchaseStall',
			data: '',
			header: '',
			timeout: 30000,
			method: 'POST',
			dataType: '',
			responseType: '',
			enableHttp2: '',
			enableQuic: '',
			enableCache: '',
			success: (res) => {
				console.log('当前点击的', res.tapIndex);
			},
			fail: (error) => {
				console.log('调用失败', error);
			},
			complete: () => {
				console.log('调用完成');
			},
		});
	},
});
