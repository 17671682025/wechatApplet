// pages/interface/device/startWifi/index.js
Page({
	/**
	 * 页面的初始数据
	 */
	data: {},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		wx.onWifiConnected(function (res) {
			console.log('已经连接上wifi了', res);
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
	/**
	 * 初始化蓝牙
	 */
	startWifi: () => {
		wx.startWifi({
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
	},
	/**
	 * 获取wifi列表
	 */
	getWifiList: () => {
		wx.getWifiList({
			success: (res) => {
				console.log('调用成功', res);
				wx.onGetWifiList(function (res) {
					console.log('wifi列表', res);
				});
				wx.offGetWifiList(function (res) {
					console.log('取消监听wifi获取事件', res);
				});
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
	 * 连接wifi
	 */
	connectWifi: () => {
		wx.connectWifi({
			SSID: 'caixm-5g',
			BSSID: '78:2c:29:00:4e:30',
			password: 'caixm123',
			maunal:true,
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
	},
	/**
	 * 获取已连接wifi信息
	 */
	getConnectedWifi: () => {
		wx.getConnectedWifi({
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
	},
	/**
	 * 停止wifi
	 */
	stopWifi:()=>{
		wx.stopWifi({
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
	}
});
