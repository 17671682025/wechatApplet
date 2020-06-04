// pages/component/formComponent/input/index.js
Page({
	/**
	 * 页面的初始数据
	 */
	data: {
		// 输入框的值
		value: '我是输入框内容',
		// 输入框类型
		type: 'text',
		// 输入框为空的提示语
		placeholder: '输入框空了，赶紧输入',
		// 最大长度
		maxLength: 18,
		// 光标与键盘的距离
		cursorSpacing: 30,
		// 设置键盘右下角按钮
		confirmType: 'done',
		// 设置点击键盘右下角时是否收起键盘
		confirmHold: false,
		// 设置光标位置
		cursor: 10,
		// 键盘弹起时，是否上浮页面
		adjustPosition: true,
		// 获取焦点 点击页面是否收起键盘
		holdKeyBoard: true,
		// 选择文字时的光标开始位置
		selectionStart: 3,
		// 选择文字状态的光标的结束位置
		selectionEnd: 13,
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
	 * 输入框输入触发函数
	 */
	onInput: function (RES) {
		console.log('onInput', RES);
	},
	/**
	 * 输入框焦点聚焦时候触发
	 */
	onFocus: function (RES) {
		console.log('onFocus', RES);
	},
	/**
	 * 输入框失去焦点触发函数
	 */
	onBlur: function (RES) {
		console.log('onBlur', RES);
	},
	/**
	 * 点击键盘右下角按钮触发函数
	 */
	onConfirm: function (RES) {
		console.log('onConfirm', RES);
	},
	/**
	 * 挡箭盘高度发生变化时触发函数
	 */
	onKeyBoardHeightChange: function (RES) {
		console.log('onKeyBoardHeightChange', RES);
	},
	/**
	 * 修改最大长度
	 */
	onChangeMaxLength: function () {
		let maxLength = 0;
		if (this.data.maxLength === 18) {
			maxLength = 36;
		} else {
			maxLength = 18;
		}
		this.setData({
			maxLength,
		});
	},
	/**
	 * 修改type类型
	 */
	onChangeType: function () {
		let type = '';
		if (this.data.type === 'text') {
			type = 'number';
		} else if (this.data.type === 'number') {
			type = 'idcard';
		} else if (this.data.type === 'idcard') {
			type = 'digit';
		} else if (this.data.type === 'digit') {
			type = 'text';
		}
		this.setData({
			type,
		});
	},
	/**
	 * 修改键盘和输入框的距离
	 */
	onChangeCursorSpacing: function () {
		let cursorSpacing = 0;
		if (this.data.cursorSpacing === 30) {
			cursorSpacing = 500;
		} else {
			cursorSpacing = 30;
		}
		this.setData({
			cursorSpacing,
		});
	},
	/**
	 * 修改键盘按钮代表的值
	 */
	onChangeConfirmType: function () {
		let confirmType = '';
		if (this.data.confirmType === 'send') {
			confirmType = 'search';
		} else if (this.data.confirmType === 'search') {
			confirmType = 'next';
		} else if (this.data.confirmType === 'next') {
			confirmType = 'go';
		} else {
			confirmType = 'done';
		}
		this.setData({
			confirmType,
		});
	},
	/**
	 * 是否开启 focus页面自动上浮
	 */
	onAdjustPosition: function () {
		let adjustPosition = false;
		if (this.data.adjustPosition === false) {
			adjustPosition = true;
		} else {
			adjustPosition = false;
		}
		this.setData({
			adjustPosition,
		});
	},
	/**
	 * focus时 是否点击页面其他部分 失去焦点
	 */
	onHoldKeyBoard: function () {
		let holdKeyBoard = false;
		if (this.data.holdKeyBoard === false) {
			holdKeyBoard = true;
		} else {
			holdKeyBoard = false;
		}
		this.setData({
			holdKeyBoard,
		});
	},
});
