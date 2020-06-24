// pages/interface/page/getSelectedTextRange/index.js
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
	 * 输入框输入事件
	 */
	onInput: (event) => {
		const { value } = event.detail;
        console.log('value', value);
        // this.getSelectedTextRange();
        // this.getSelectedTextRange();
        wx.getSelectedTextRange({
			success: (res) => {
				const { confirm, cancel, errMsg } = res;
				console.log('调用成功', res);
				/**
				 * confirm和cancel都是布尔值 点击确定按钮 confirm为true 反之cancel为true
				 */
			},
			fail: (error) => {
				console.log('调用失败', error);
			},
			complete: (res) => {
				console.log('调用完成', res);
			},
		});
    },
    /**
     * 获取光标信息
     */
    getSelectedTextRange:()=>{
        console.log(wx.canIUse('getSelectedTextRange'));
        wx.getSelectedTextRange({
			success: (res) => {
				const { confirm, cancel, errMsg } = res;
				console.log('调用成功', res);
				/**
				 * confirm和cancel都是布尔值 点击确定按钮 confirm为true 反之cancel为true
				 */
			},
			fail: (error) => {
				console.log('调用失败', error);
			},
			complete: (res) => {
				console.log('调用完成', res);
			},
		});
    }
});