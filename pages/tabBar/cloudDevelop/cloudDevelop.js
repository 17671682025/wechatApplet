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
			userAuthenticationSource: MockData.cloudDevelop.cloudDevelopObj.userAuthentication,
			dataBaseSource: MockData.cloudDevelop.cloudDevelopObj.dataBase,
			storageSource: MockData.cloudDevelop.cloudDevelopObj.storage,
			cloudFunctionSource: MockData.cloudDevelop.cloudDevelopObj.cloudFunction,
		});
		// this.hideTabBar();
		// this.setTabBarStyle();
		// this.setTabBarItem({})
		this.setTabBarBadge();
		this.showTabBarRedDot();
		setTimeout(() => {
			this.removeTabBarRedDot();
			this.removeTabBarBadge();
		}, 3000);
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
	 * 显示tabBar
	 */
	showTabBar: () => {
		wx.showTabBar({
			// animation: true,
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
	 * 隐藏tabBar
	 */
	hideTabBar: () => {
		wx.hideTabBar({
			animation: false,
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
	 * 设置tabBar样式
	 */
	setTabBarStyle: () => {
		wx.setTabBarStyle({
			color: '#ccc',
			selectedColor: '#19df40',
			backgroundColor: '#ff0',
			borderStyle: 'white',
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
	 * 设置tabBarItem
	 */
	setTabBarItem: () => {
		wx.setTabBarItem({
			index: 3,
			text: '等死',
			iconPath: '/base/images/icon_component_gray.jpg',
			selectIconPath: '/base/images/icon_component_green.jpg',
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
	 * setTabBarBadge
	 */
	setTabBarBadge: () => {
		wx.setTabBarBadge({
			index: 2,
			text: '12',
		});
	},
	/**
	 * showTabBarRedDot
	 */
	showTabBarRedDot: () => {
		wx.showTabBarRedDot({
			index: 2,
		});
	},
	/**
	 * 移除badge
	 */
	removeTabBarBadge: () => {
		wx.removeTabBarBadge({
			index: 2,
		});
	},
	/**
	 * 移除红点
	 */
	removeTabBarRedDot: () => {
		wx.hideTabBarRedDot({
			index: 2,
		});
	},
});
