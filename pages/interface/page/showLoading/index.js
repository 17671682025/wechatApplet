// pages/interface/page/showLoading/index.js
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
	 * showLoading
	 */
	showLoading: function () {
		wx.showLoading({
			title: 'loading的标题',
			mask: true,
			success: () => {
				console.log('loading显示成功');
			},
			fail: (error) => {
				console.log('loading显示失败', error);
			},
			complete: () => {
				console.log('loading显示完成');
			},
        });
        setTimeout(()=>{
            wx.hideLoading()
        },3000)
	},
});
