// pages/component/viewContainer/movableView/index.js
Page({
	/**
	 * 页面的初始数据
	 */
	data: {
		// movable-view移动方向  all  vertical horizontal none
		direction: 'all',
		// movable--view 移动是否具有惯性
		inertia: true,
		// 超过movable-area边界是否还可以移动
		outOfBound: false,
		// x轴偏移
		x: 15,
		// y轴偏移
		y: 15,
		// 阻尼系数
		damping: 40,
		// 摩擦系数
		friction: 3,
		// 是否禁用
		disabled: false,
		// 是否支持双指缩放
		scale: true,
		// 最新缩放倍数
		scaleMin: 0.8,
		// 最大缩放倍数
		scaleMax: 2.8,
		// 定义缩放倍数
		scaleValue: 1.5,
		// 是否使用动画
		animation: true,
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
});
