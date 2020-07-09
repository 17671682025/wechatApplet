// pages/interface/dataCache/setStorage/index.js
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
	 * 设置数据到storage同步
	 */
	setStorageSync: () => {
		let res = wx.setStorageSync('login', { isLogin: true });
		console.log('res', res);
	},
	/**
	 * 设置数据到storage异步
	 */
	setStorage: () => {
		wx.setStorage({
			key: 'loginOut',
			data: {
				isLoginOut: true,
			},
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
	 * 移除storage中某个key的数据同步
	 */
	removeStorageSync: () => {
		let res = wx.removeStorageSync('login');
		console.log('res', res);
	},
	/**
	 * 移除storage中某个key的数据异步
	 */
	removeStorage: () => {
		wx.removeStorage({
			key: 'loginOut',
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
	 * 根据某个key获取storage中的数据,以同步方式
	 */
	getStorageSync: () => {
		let isLogin = wx.getStorageSync('login');
		console.log('isLogin', isLogin);
	},
	/**
	 * 根据某个key获取storage中的数据,以异步方式
	 */
	getStorage: () => {
		wx.getStorage({
			key: 'loginOut',
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
	 * 获取storage中的所有数据，以同步方式
	 */
	getStorageInfoSync: () => {
		let totalStorage = wx.getStorageInfoSync();
		console.log('totalStorage', totalStorage);
	},
	/**
	 * 获取storage中的所有数据，以异步方式
	 */
	getStorageInfo: () => {
		wx.getStorageInfo({
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
	 * 清除storage中的全部数据，以同步方式
	 */
	clearStorageSync: () => {
		let res = wx.clearStorageSync();
		console.log('res', res);
	},
	/**
	 * 清除storage中的全部数据，以异步方式
	 */
	clearStorage: () => {
		wx.clearStorage({
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
});
