// pages/component/formComponent/editor/index.js
Page({
	/**
	 * 页面的初始数据
	 */
	data: {
		// 是否只读
		readOnly: false,
		// 提示
		placeholder: '请输入......',
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
	 * 编辑器初始化完成时触发
	 */
	onReady: function () {
		console.log('编辑器初始化完成');
	},
	/**
	 * 编辑器获取焦点时触发
	 */
	onFocus: function () {
		console.log('编辑器获取焦点');
	},
	/**
	 * 编辑器失去焦点时触发
	 */
	onBlur: function () {
		console.log('编辑器失去焦点');
	},
	/**
	 * 编辑器内容改变时触发
	 */
	onInput: function () {
		console.log('编辑器内容改变');
	},
	/**
	 * 通过 Context 方法改变编辑器内样式时触发，返回选区已设置的样式
	 */
    onStatusChange:function(){
        console.log('通过 Context 方法改变编辑器内样式');
        
    }
});