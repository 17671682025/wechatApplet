// pages/component/media/video/index.js
Page({
	/**
	 * 页面的初始数据
	 */
	data: {
		// 视频链接
		src:
			'https://vdept.bdstatic.com/375546367071755959323745334d6735/5362416d44355666/88bb2cfc41dc5731dfcc46837a4037a3ea85c1758b822a62e6ad294b57416d253b3e2d3ef3e34e5e50f6630e3c5cab65.mp4?auth_key=1590756319-0-0-6bb07e8323b95994636f6408fed60bbc',
		// 指定视频时长
		// duration: 66,
		// 是否使用默认控制器
		controls: true,
		// 弹幕列表
		danMuList: [
			{
				text: '第1条弹幕',
				color: '#ff0',
				time: 1,
			},
			{
				text: '第2条弹幕',
				color: '#f0f',
				time: 2,
			},
			{
				text: '第3条弹幕',
				color: '#f00',
				time: 3,
			},
			{
				text: '第4条弹幕',
				color: '#fca',
				time: 4,
			},
			{
				text: '第5条弹幕',
				color: '#afe',
				time: 5,
			},
			{
				text: '第6条弹幕',
				color: '#bcf',
				time: 6,
			},
			{
				text: '第7条弹幕',
				color: '#00f',
				time: 7,
			},

			{
				text: '第8条弹幕',
				color: '#fcd',
				time: 8,
			},
			{
				text: '第9条弹幕',
				color: '#da0',
				time: 9,
			},
			{
				text: '第10条弹幕',
				color: '#cca',
				time: 10,
			},

		],
		// 是否显示弹幕按钮
		danMuBtn: true,
		// 是否展示弹幕
		enableDanMu: true,
		// 是否自动播放
		autoPlay: false,
		// 是否循环播放
		loop: true,
		// 是否静音播放
		muted: false,
		// 指定视频初始播放位置
		initialTime: 60,
		// 设置全屏时视频的方向 不指定时根据宽高笔自动播放
		direction: 90,
		// 小于240是否展示进度条
		showProgress: true,
		// 是否显示全屏按钮
		showFullScreenBtn: true,
		// 是否显示视频底部控制栏的播放按钮
		showPlayBtn: true,
		// 是否显示视频中间的播放按钮
		showCenterPlayBtn: true,
		// 是否开启控进进度的手势
		enableProgressGesture: true,
		// 当video大小与video容器的大小不一致时，视频的表现形式
		objectFit: 'cover',
		// 封面
		poster: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3986520144,4246770515&fm=26&gp=0.jpg',
		// 是否显示静音按钮
		showMuteBtn: true,
		// 视频标题
		title: '怎样把mp4生成链接',
		// 播放按钮的位置
		playPositionBtn: 'center',
		// 是否开启播放/暂停手势
		enablePlayGesture: true,
		// 当跳转本小程序的其他页面，是否暂停本页面的视频播放
		autoPauseIfNavigate: true,
		// 当跳转其他微信原生页面时，是否自动暂停当前播放
		autoPauseOpenNavigate: true,
		// 当非全屏模式，是否开启音量和亮度手势调节
		vSlideGesture: true,
		// 当全屏模式，是否开启音量和亮度手势调节
		vSlideGestureFullScreen: true,
		// 视频前贴广告单元id
		adUnitId: '',
		// 用于给搜索等场景作为视频封面展示，建议使用无播放 icon 的视频封面图，只支持网络地址
		posterForCrawler: '',
		// 显示投屏按钮。只安卓且同层渲染下生效，支持 DLNA 协议
		showCastingButton: true,
		// 设置小窗模式： push, pop，空字符串或通过数组形式设置多种模式（如： ["push", "pop"]）
		pictureInPictureMode: ['pop','push'],
		// 是否在小窗模式显示进度条
		pictureInPictureShowProgress: false,
		// 是否开启手机横屏时自动全屏，当系统设置开启自动旋转时生效
		enableAutoRotation: true,
		// 是否显示锁屏按钮，仅在全屏时显示，锁屏后控制栏的操作
		showScreenLockButton: true,
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
	 * 当开始/继续播放时触发play事件
	 */
	onPlay: function (event) {
		console.log("onPlay-event",event)
	},
	/**
	 * 当暂停播放时触发 pause 事件
	 */
	onPause: function (event) {
		console.log("onPause-event",event)
	},
	/**
	 * 当播放到末尾时触发 ended 事件
	 */
	onEnd: function (event) {
		console.log("onEnd-event",event)
	},
	/**
	 * 播放进度变化时触发，event.detail = {currentTime, duration} 。触发频率 250ms 一次
	 */
	onTimeUpdate: function (event) {
		// console.log("onTimeUpdate-event",event)
	},
	/**
	 * 视频进入和退出全屏时触发，event.detail = {fullScreen, direction}，direction 有效值为 vertical 或 horizontal
	 */
	onfullScreenChange: function (event) {
		console.log("onfullScreenChange-event",event)
	},
	/**
	 * 视频出现缓冲时触发
	 */
	onWaiting: function (event) {
		console.log("onWaiting-event",event)
	},
	/**
	 * 视频播放出错时触发
	 */
	onError: function (event) {
		console.log("onError-event",event)
	},
	/**
	 * 加载进度变化时触发，只支持一段加载。event.detail = {buffered}，百分比
	 */
	onProgress: function (event) {
		// console.log("onProgress-event",event)
	},
	/**
	 * 视频元数据加载完成时触发。event.detail = {width, height, duration}
	 */
	onLoadMetaData: function (event) {
		console.log("onLoadMetaData-event",event)
	},
	/**
	 * 切换 controls 显示隐藏时触发。event.detail = {show}
	 */
	onControlsToggle: function (event) {
		console.log("onControlsToggle-event",event)
	},
	/**
	 * 播放器进入小窗
	 */
	onEntryPictureInPicture: function (event) {
		console.log("onEntryPictureInPicture-event",event)
	},
	/**
	 * 播放器退出小窗
	 */
	onLeavePictureInPicture: function (event) {
		console.log("onLeavePictureInPicture-event",event)
	},
	/**
	 * 返回上一级页面
	 */
	onGoBack: function () {
		wx.navigateBack();
	},
});
