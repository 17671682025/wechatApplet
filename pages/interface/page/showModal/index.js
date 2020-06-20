// pages/interface/page/showModal/index.js
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
	 * showModal
	 */
	showModal: function () {
		wx.showModal({
			title: 'modal的标题',
			content: 'modal显示的主要内容',
			cancelColor: '#00f',
			cancelText: '取消',
			confirmColor: '#19df40',
			confirmText: '确定',
			showCancel: false,
			success: (res) => {
				const { confirm, cancel, errMsg } = res;
				console.log('modal显示成功', res);
				/**
				 * confirm和cancel都是布尔值 点击确定按钮 confirm为true 反之cancel为true
				 */
			},
			fail: (error) => {
				console.log('modal显示失败', error);
			},
			complete: () => {
				console.log('modal显示完成');
			},
		});
	},
});
