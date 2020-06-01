// pages/component/basicContent/icon/index.js
Page({
	/**
	 * 页面的初始数据
	 */
	data: {
		// icon的类型
		type: 'success',
		// icon的大小
		size: 24,
		// icon的颜色
		color: '#FFFF00',
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
	 * 改变type
	 */
	onChangeType: function () {
		let type = '';
		if (this.data.type == 'success') {
			type = 'success_no_circle';
		} else if (this.data.type == 'success_no_circle') {
			type = 'info';
		} else if (this.data.type == 'info') {
			type = 'warn';
		} else if (this.data.type == 'warn') {
			type = 'waiting';
		} else if (this.data.type == 'waiting') {
			type = 'cancel';
		} else if (this.data.type == 'cancel') {
			type = 'download';
		} else if (this.data.type == 'download') {
			type = 'search';
		} else if (this.data.type == 'search') {
			type = 'clear';
		} else {
			type = 'success';
		}
		this.setData({
			type,
		});
	},
	/**
	 * 改变size
	 */
	onChangeSize: function () {
		let size = 24;
		if (this.data.size == 24) {
			size = 28;
		} else if (this.data.size == 28) {
			size = 32;
		} else {
			size = 24;
		}
		this.setData({
			size,
		});
	},
	/**
	 * 改变颜色
	 */
	onChangeColor: function () {
		let color = '';
		if (this.data.color == '#FFFF00') {
			color = '#1E90FF';
		} else if (this.data.color == '#1E90FF') {
			color = '#DC143C';
		} else if (this.data.color == '#DC143C') {
			color = '#FFFF00';
		}
		this.setData({
			color,
		});
	},
});
