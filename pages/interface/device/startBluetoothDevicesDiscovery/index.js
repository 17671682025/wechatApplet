// pages/interface/device/startBluetoothDevicesDiscovery/index.js
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
	 * 初始化蓝牙设备
	 */
	openBluetoothAdapter: () => {
		wx.openBluetoothAdapter({
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
	 * 获取本机蓝牙状态
	 */
	getBluetoothAdapterState: () => {
		wx.getBluetoothAdapterState({
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
	 * 开始搜索蓝牙
	 */
	startBluetoothDevicesDiscovery: () => {
		wx.startBluetoothDevicesDiscovery({
			allowDuplicatesKey: true,
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
	 * 发现蓝牙设备
	 */
	foundBluetoothDevice: () => {
		wx.onBluetoothDeviceFound((res) => {
			console.log('发现蓝牙设备的设备列表', res);
		});
	},
	/**
	 * 连接蓝牙设备
	 */
	createBLEConnection(e) {
		const ds = e.currentTarget.dataset;
		const deviceId = ds.deviceId;
		const name = ds.name;
		// 开始连接蓝牙设备
		wx.createBLEConnection({
			deviceId,
			success: (res) => {
				this.getBLEDeviceServices(deviceId);
			},
		});
		// 在连接蓝牙设备后，停止搜索蓝牙。
		this.stopBluetoothDevicesDiscovery();
	},
});
