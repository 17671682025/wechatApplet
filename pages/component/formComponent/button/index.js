// pages/component/formComponent/button/index.js
Page({
	/**
	 * 页面的初始数据
	 */
	data: {
		// 按钮大小
		size: 'default',
		// 样式名
		classStyle: 'blankStyle',
		// 按钮样式类型
		type: 'default',
		// 按钮是否镂空 背景色是否透明
		plain: true,
		// 是否禁用
		disabled: false,
		// 名称前是否带loading图标
		loading: false,
		// 用于form组件  点击触发submit和reset事件
		formType: '',
		// 微信开放能力
		openType: '',
		// 按钮按下去的样式
		hoverClass: '',
		// 是否组织祖先元素出现点击态
		hoverStopPropagation: true,
		// 按住多久出现点击态
		hoverStartTime: 200,
		// 手指松开点击态保留时间
		hoverStayTime: 600,
		// 指定返回用户信息的语言 zh_CN 简体中文，zh_TW 繁体中文，en 英文
		lang: '',
		// 会话来源  open-type="contact"时有效
		sessionFrom: '',
		// 会话内消息卡片标题
		sendMessageTitle: '',
		// 会话内消息卡片点击跳转的小程序路径 open-type="contact"时有效
		sendMessagePath: '',
		// 会话内消息卡片图片  open-type="contact"时有效
		sendMessageImg: '',
		// 打开app时 向app传递的参数 open-type=launchApp时有效
		appParameter: '',
		// 是否显示会话内消息卡片，设置此参数为 true，用户进入客服会话会在右下角显示"可能要发送的小程序"提示，用户点击后可以快速发送小程序消息，open-type="contact"时有效
		showMessageCard: true,
		//
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
	 * 用户点击该按钮时，会返回获取到的用户信息，回调的detail数据与wx.getUserInfo返回的一致，open-type="getUserInfo"时有效
	 */
	onGetUserInfo: function () {},
	/**
	 * 客服消息回调，open-type="contact"时有效
	 */
	onContact: function () {},
	/**
	 * 获取用户手机号回调，open-type=getPhoneNumber时有效
	 */
	onGetPhoneNumber: function () {},
	/**
	 * 当使用开放能力时，发生错误的回调，open-type=launchApp时有效
	 */
	onError: function () {},
	/**
	 * 在打开授权设置页后回调，open-type=openSetting时有效
	 */
	onOpenSetting: function () {},
	/**
	 * 打开 APP 成功的回调，open-type=launchApp时有效
	 */
	onLaunchApp: function () {},
	/**
	 * 改变按钮大小
	 */
	onChangeSize: function (res) {
        console.log("res",res)
		let size = '';
		let classStyle = '';
		if (this.data.size == 'default') {
			size = 'mini';
			classStyle = 'blankStyle';
		} else if (this.data.size == 'mini') {
			size = 'customer';
			classStyle = 'customerButtonStyle';
		} else if (this.data.size == 'customer') {
			size = 'default';
			classStyle = 'blankStyle';
		}
		this.setData({
			size,
			classStyle,
		});
	},
});
