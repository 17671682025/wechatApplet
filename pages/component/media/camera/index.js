// pages/component/media/camera/index.js
Page({
	/**
	 * 页面的初始数据
	 */
	data: {
		// 应用模式 normal scanCode
		mode: 'scanCode',
		// 分辨率 low medium high
		resolution: 'high',
		// 摄像头朝向 front back
		devicePosition: 'back',
		// 闪光灯模式 auto on off
		flash: 'off',
		// 指定期望的相机帧数据尺寸  small medium large
		frameSize: 'large',
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
	 * 摄像头非正常终止时触发
	 */
	onStop: function () {
		console.log('摄像头非正常终止');
	},
	/**
	 * 用户不允许使用摄像头时触发
	 */
	onError: function () {
		console.log('用户拒绝相机权限');
	},
	/**
	 * 相机初始化完成时触发
	 */
	onInitDone: function () {
		console.log('相机初始化完成');
	},
	/**
	 * 在扫码识别成功时触发
	 */
	onScanCode: function () {
		console.log('识别二维码成功');
	},
	/**
	 * 更改摄像头方向时触发
	 */
	onChangeCameraPosition: function () {
		let position = '';
		if (this.data.devicePosition == 'back') {
			position = 'front';
		} else {
			position = 'back';
		}
		this.onToastShow(`更改摄像头方向为:${position}`);
		this.setData({
			devicePosition: position,
		});
	},
	/**
	 * 更改闪光灯模式时触发
	 */
	onChangeFlashMode: function () {
		let flash = '';
		if (this.data.flash == 'auto') {
			flash = 'on';
		} else if (this.data.flash == 'on') {
			flash = 'off';
		} else if (this.data.flash == 'off') {
			flash = 'torch';
		} else {
			flash = 'auto';
		}
		this.onToastShow(`更改闪光灯模式为:${flash}`);
		this.setData({
			flash,
		});
	},
	/**
	 * 更改照片质量时触发
	 */
	onChangePhotoQA: function () {
		let QA = '';
		if (this.data.frameSize == 'small') {
			QA = 'medium';
		} else if (this.data.frameSize == 'medium') {
			QA = 'large';
		} else {
			QA = 'small';
		}
		this.onToastShow(`更改照片质量为:${QA}`);
		this.setData({
			frameSize: QA,
		});
	},
	/**
	 * 消息提示
	 */
	onToastShow: function (msg = '') {
		wx.showToast({
			title: msg,
			icon: 'success',
			duration: 2000,
		});
	},
});
