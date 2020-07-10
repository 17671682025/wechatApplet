// pages/tarBar/component.js
import MockData from '../../../base/utils/mock';
Page({
	/**
	 * 页面的初始数据
	 */
	data: {
		// 视图容器数据
		viewContainerSource: [],
		// 基本内容数据
		basicContentSource: [],
		// 表单组件数据
		formComponentSource: [],
		// 导航组件数据
		navigationSource: [],
		// 媒体组件数据
		mediaSource: [],
		// 地图组件数据
		mapSource: [],
		// 画布组件数据
		canvasSource: [],
		// 开放能力
		openAbilitySource: [],
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		console.log('MockData', MockData);
		this.setData({
			viewContainerSource: MockData.officialComponent.officialComponentObj.viewContainer,
			basicContentSource: MockData.officialComponent.officialComponentObj.basicContent,
			formComponentSource: MockData.officialComponent.officialComponentObj.formComponent,
			navigationSource: MockData.officialComponent.officialComponentObj.navigation,
			mediaSource: MockData.officialComponent.officialComponentObj.media,
			mapSource: MockData.officialComponent.officialComponentObj.map,
			canvasSource: MockData.officialComponent.officialComponentObj.canvas,
			openAbilitySource: MockData.officialComponent.officialComponentObj.openAbility,
		});
		let menuButtonBoundingClientRect = wx.getMenuButtonBoundingClientRect();
		console.log('menuButtonBoundingClientRect', menuButtonBoundingClientRect);
		wx.onWindowResize((size) => {
			console.log('size', size);
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
	// onShareAppMessage: function () {},
});
