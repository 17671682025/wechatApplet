// pages/component/formComponent/button/index.js
Page({
	/**
	 * 页面的初始数据
	 */
	data: {
		// 按钮大小
		size: 'default',
		// 样式名
		classStyle: 'blankStyle bg',
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
		// 微信开放能力 会话
		openType: 'contact',
		// 微信开放能力 重启app
		openType2: 'launchApp',
		// 微信开放能力 分享
		openType3: 'share',
		// 微信开放能力 获取用户手机号
		openType4: 'getPhoneNumber',
		// 微信开放能力 获取用户信息
		openType5: 'getUserInfo',
		// 微信开放能力 打开设置页
		openType6: 'openSetting',
		// 微信开放能力 意见反馈
		openType7: 'feedback',
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
		sendMessageTitle: '测试会话',
		// 会话内消息卡片点击跳转的小程序路径 open-type="contact"时有效
		sendMessagePath: '/pages/component/media/audio/index',
		// 会话内消息卡片图片  open-type="contact"时有效
		sendMessageImg:
			'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1987603662,1659526328&fm=26&gp=0.jpg',
		// 打开app时 向app传递的参数 open-type=launchApp时有效
		appParameter: { data: '123' },
		// 是否显示会话内消息卡片，设置此参数为 true，用户进入客服会话会在右下角显示"可能要发送的小程序"提示，用户点击后可以快速发送小程序消息，open-type="contact"时有效
		showMessageCard: true,
		// 分享标题
		title: '我是分享内容的标题',
		// 分享描述
		desc: '分享描述',
		// 分享转发路径
		path: '/pages/test/index',
		// 分享转发的自定义图片路径
		imageUrl: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3065184290,1253717822&fm=26&gp=0.jpg',
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
	onShareAppMessage: function () {
		return {
			title: this.data.title,

			imageUrl: this.data.imageUrl,

			path: this.data.path, // 路径，传递参数到指定页面。
		};
	},
	/**
	 * 用户点击该按钮时，会返回获取到的用户信息，回调的detail数据与wx.getUserInfo返回的一致，open-type="getUserInfo"时有效
	 */
	onGetUserInfo: function (RES) {
		// 可以获取 昵称 头像这种东西  button能重复授权
		console.log('onGetUserInfo-RES', RES);
	},
	/**
	 * 客服消息回调，open-type="contact"时有效
	 */
	onContact: function () {},
	/**
	 * 获取用户手机号回调，open-type=getPhoneNumber时有效
	 */
	onGetPhoneNumber: function (RES) {
		// 手机号 信息 太过关键 需要后台配合wx.login接口 获取手机号
		console.log('RES', RES);
	},
	/**
	 * 当使用开放能力时，发生错误的回调，open-type=launchApp时有效
	 */
	onError: function () {},
	/**
	 * 在打开授权设置页后回调，open-type=openSetting时有效
	 */
	onOpenSetting: function (RES) {
		console.log('onOpenSetting-RES', RES);
	},
	/**
	 * 打开 APP 成功的回调，open-type=launchApp时有效
	 */
	onLaunchApp: function () {},
	/**
	 * 改变按钮大小
	 */
	onChangeSize: function (res) {
		console.log('res', res);
		// 背景色样式无法生效
		let size = '';
		let classStyle = '';
		if (this.data.size === 'default') {
			size = 'mini';
			classStyle = 'blankStyle bg';
		} else if (this.data.size === 'mini') {
			size = 'customer';
			classStyle = 'customerButtonStyle bg';
		} else if (this.data.size === 'customer') {
			size = 'default';
			classStyle = 'blankStyle bg';
		}
		this.setData({
			size,
			classStyle,
		});
	},
	/**
	 * 改变按钮类型
	 */
	onChangeType: function () {
		let type = '';
		if (this.data.type == 'default') {
			type = 'primary';
		} else if (this.data.type == 'primary') {
			type = 'warn';
		} else if (this.data.type == 'warn') {
			type = 'default';
		}
		this.setData({
			type,
		});
	},
	/**
	 * 改变按钮背景是否透明 是否镂空
	 */
	onChangePlain: function () {
		let plain = '';
		if (this.data.plain === false) {
			plain = true;
		} else {
			plain = false;
		}
		this.setData({
			plain,
		});
	},
	/**
	 * 是否禁用按钮
	 */
	onChangeDisabled: function () {
		let disabled = '';
		if (this.data.disabled === false) {
			disabled = true;
		} else {
			disabled = false;
		}
		this.setData({
			disabled,
		});
	},
	/**
	 * 是否显示loading
	 */
	onChangeLoading: function () {
		let loading = '';
		if (this.data.loading === false) {
			loading = true;
		} else {
			loading = false;
		}
		this.setData({
			loading,
		});
	},
	/**
	 * 会话成功回调
	 */
	onContact: function (event) {
		// 有个问题
		console.log('onContact', event);
		wx.redirectTo({
			url: this.data.sendMessagePath,
		});
	},
	/**
	 * 重新加载app
	 */
	onLaunchApp: function () {
		console.log('relaunch成功');
	},
});
