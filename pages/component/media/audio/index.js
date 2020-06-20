// pages/component/media/audio/index.js
var eventChannel;
Page({
	/**
	 * 页面的初始数据
	 */
	data: {
		// 是否循环播放
		loop: true,
		// 是否显示默认控件
		controls: true,
		// 封面
		poster: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000002hsuVH1ihzkZ_1.jpg?max_age=2592000',
		// 歌曲名字
		name: '那个人',
		// 歌手
		author: '周延英',
		// 音乐链接
		src: 'http://up_mp4.t57.cn/2018/1/03m/13/396131232171.m4a',
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		eventChannel = this.getOpenerEventChannel();
		console.log('eventChannel', eventChannel);
		eventChannel.on('audio', function (data) {
			console.log('接受来自navigate页面的数据', data);
		});
	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () {
		// 使用 wx.createAudioContext 获取 audio 上下文 context
		this.audioCtx = wx.createAudioContext('exampleAudio');
		this.onSongLong();
	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function () {
		wx.hideHomeButton();
	},

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
	 * 播放事件
	 */
	onPlay: function () {
		this.audioCtx.play();
		console.log('eventChannel', eventChannel);
		eventChannel.emit('sendMsgFromAudio', { data: 'audio数据' });
	},
	/**
	 * 暂停事件
	 */
	onPause: function () {
		this.audioCtx.pause();
		wx.navigateBack({ delta: 2 });
	},
	/**
	 * 停止事件
	 */
	onStop: function () {
		this.audioCtx.seek(0);
	},
	/**
	 * 跳转到一分钟
	 */
	onSeek: function () {
		this.audioCtx.seek(60);
	},
});
