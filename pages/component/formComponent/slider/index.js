// pages/component/formComponent/slider/index.js
Page({
	/**
	 * 页面的初始数据
	 */
	data: {
		// 最小值
		min: 10,
		// 最大值
		max: 150,
		// 步长
		step: 10,
		// 当前值
		value: 30,
		// 是否禁用
		disabled: false,
		// 激活色
		activeColor: '#19df40',
		// 未激活的颜色
		backgroundColor: 'rgba(57,119,57,0.3)',
		// 滑块大小
		blockSize: 18,
		// 是否显示当前的value
		showValue: true,
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
	 * 滑块拖动一次完成的触发事件
	 */
	onBlockChange: function (RES) {
        console.log("slider滑动完成",RES)
    },
	/**
	 * 滑块滑动过程触发的事件
	 */
	onBlockChanging:function(RES){
  console.log('slider滑动正在滑动', RES);
    }
});