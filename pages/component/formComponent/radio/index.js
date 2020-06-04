// pages/component/formComponent/radio/index.js
Page({
	/**
	 * 页面的初始数据
	 */
	data: {
		// radio标识
		value: '{checked:true,index:0}',
		// 当前是否选中
		checked: false,
		// 是否禁用
		disabled: false,
		// 选中颜色
		color: '#19df40',
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
	 * radio改变事件
	 */
	onChange: function (RES) {
		console.log('radio情况', RES);
	},
});
