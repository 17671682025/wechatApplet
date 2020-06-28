// pages/interface/device/startDeviceMotionListening/index.js
Page({
	/**
	 * 页面的初始数据
	 */
	data: {},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		wx.startDeviceMotionListening({
			interval: 'normal',
			success: (res) => {
				console.log('调用成功', res);
				wx.onDeviceMotionChange((result) => {
					console.log('设备变化信息', result);
                });
                setTimeout(()=>{
                    wx.offDeviceMotionChange((res2)=>{
                        console.log("res2",res2)
                    })
                },3000)
			},
			fail: (error) => {
				console.log('调用失败', error);
			},
			complete: (res) => {
				console.log('调用完成', res);
			},
        });
         setTimeout(() => {
				wx.stopDeviceMotionListening({
					success: (res) => {
						console.log('调用成功', res);
					},
					fail: (error) => {
						console.log('调用失败', error);
					},
					complete: (res) => {
						console.log('调用完成', res);
					},
				});
			}, 5000);
	},

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
