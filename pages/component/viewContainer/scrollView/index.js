// pages/component/viewContainer/scrollView/index.js
Page({
	/**
	 * 页面的初始数据
	 */
	data: {
		// 橫向滚动
		scrollX: false,
		// 纵向滚动
		scrollY: true,
		// 下拉刷新的阈值
		upperThreshold: 50,
		// 上拉加载的阈值
		lowerThreshold: 50,
		// 设置竖直滚动条的位置
		scrollTop: 30,
		// 设置横向滚动条的位置
		scrollLeft: 50,
		// 滚动到某个特定的子元素 值为某元素的id
		scrollIntoView: 'item_5',
		// 在设置滚动条位置的动画是否使用
		scrollWithAnimation: true,
		// ios点击状态栏 安卓双击标题栏时，滚动条回到顶部
		enableBackToTop: true,
		// 开启flex布局
		enableFlex: false,
		// 是否开启内容变化位置防抖动  ios有效  android参考overflow-anchor
		scrollAnchoring: false,
		// 是否开启自定义下拉刷新
		refresherEnabled: false,
		// 设置自定义下拉刷新的阈值
		refresherThreshold: 45,
		// 设置自定义下拉刷新的默认样式
		refresherDefaultStyle: 'black',
		// 设置自定义下拉刷新的背景色
		refresherBackground: '#FFF',
		// 设置当前下拉刷新状态 true表示下拉刷新被触发 false表示下拉刷新未触发
		refresherTriggered: false,
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
	 * 下拉刷新
	 */
	bindscrolltoupper: function () {
		console.log('下拉刷新函数执行');
	},
	/**
	 * 上拉加载
	 */
	bindscrolltolower: function () {
		console.log('上拉加载函数执行');
    },
    /**
     * scroll-view正在滚动中
     */
    bindscroll:function(event) {
        console.log("scroll-view滚动中",event.detail)
    }
});