// pages/component/formComponent/textArea/index.js
Page({
	/**
	 * 页面的初始数据
	 */
	data: {
		// 按钮大小
		size: 'default',
		// 按钮样式类型
		type: 'default',
		// 按钮是否镂空 背景色透明
		plain:true,
		// 是否禁用
		disables:false,
		// 名称前是否带loading图标
		loading:false,
		// 用于form组件 点击分别触发form组件的submit和reset事件
		formType:"",
		// 微信开放能力
		openType:'',
		// 指定按钮按下去的样式
		hoverClass:"",
		// 是否阻止祖先元素出现点击态
		hoverStopPropagation:true,
		// 按住多少毫秒出现点击态
		hoverStartTime:20,
		// 手指松开后点击态保持多久
		hoverStayTime:200,
		// 
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