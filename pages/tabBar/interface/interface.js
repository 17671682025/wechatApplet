// pages/tarBar/api.js
import MockData from '../../../base/utils/mock';
Page({
	/**
	 * 页面的初始数据
	 */
	data: {},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		console.log('MockData', MockData);
		this.setData({
			basicSource: MockData.interface.interfaceObj.basic,
			routerSource: MockData.interface.interfaceObj.router,
			pageSource: MockData.interface.interfaceObj.page,
			networkSource: MockData.interface.interfaceObj.network,
			dataCacheSource: MockData.interface.interfaceObj.dataCache,
			mediaSource: MockData.interface.interfaceObj.media,
			positionSource: MockData.interface.interfaceObj.position,
			forwardSource: MockData.interface.interfaceObj.forward,
			canvasSource: MockData.interface.interfaceObj.canvas,
			fileSource: MockData.interface.interfaceObj.file,
			openInterFaceSource: MockData.interface.interfaceObj.openInterFace,
			deviceSource: MockData.interface.interfaceObj.device,
			workerSource: MockData.interface.interfaceObj.worker,
			thirdSource: MockData.interface.interfaceObj.third,
			WXMLSource: MockData.interface.interfaceObj.WXML,
			adSource: MockData.interface.interfaceObj.ad,
        });
        wx.showTabBarRedDot({
			index: 1,
			success: (res) => {
				console.log('红点显示成功', res);
			},
			fail: (error) => {
				console.log('红点显示失败', error);
			},
			complete: (res) => {
				console.log('红点显示完成', res);
			},
		});
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
