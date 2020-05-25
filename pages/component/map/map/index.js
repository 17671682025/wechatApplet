// pages/component/map/map/index.js
Page({
	/**
	 * 页面的初始数据
	 */
	data: {
		latitude: 30.4843,
		longitude: 114.42231,
		// 放大级别
		scale: 14,
		// 标记点信息
		markers: [
			{
				id: 1,
				latitude: 30.50773,
				longitude: 114.42651,
				tile: '标记点1',
				zIndex: 9000,
				iconPath: './images/icon_mark.png',
				rotate: 0,
				alpha: 1,
				width: 40,
				height: 40,
			},
			{
				id: 2,
				latitude: 30.48439,
				longitude: 114.42225,
				tile: '标记点2',
				zIndex: 9001,
				iconPath: './images/icon_mark2.png',
				rotate: 30,
				alpha: 1,
				width: 40,
				height: 40,
			},
		],
		// 路线信息
		polyline: [
			{
				points: [
					{ latitude: 30.50773, longitude: 114.42651 },
					{ latitude: 30.48439, longitude: 114.42225 },
				],
				// 线条颜色
				color: '#1D9E60',
				// 线宽
				width: 2,
				// 是否虚线
				dottedLine: false,
				// 带箭头的线
				arrowLine: false,
				// 线的边框颜色
				borderColor: '#CCCCCC',
				// 边框线的宽度
				borderWidth: 1,
			},
		],
		// 显是带有方向的当前定位点
		showLocation: true,
		// 绘制多边形
		polygons: [
			{
				points: [
					{ latitude: 30.487581, longitude: 114.41107 },
					{ latitude: 30.482609, longitude: 114.41056 },
					{ latitude: 30.481377, longitude: 114.420784 },
					{ latitude: 30.486588, longitude: 114.42134 },
				],
				// 描边宽度
				strokeWidth: 2,
				// 描边颜色
				strokeColor: '#1D9E60',
				// 填充色
				fillColor: '#ffffffaf',
				zIndex: 9005,
			},
		],
		// 绘制圆
		circles: [
			{
				latitude: 30.51972,
				longitude: 114.44653,
				// 描边颜色
				color: '#0fe0fe',
				// 填充色
				fillColor: '#000000aa',
				// 描边宽度
				strokeWidth: 2,
				// 半径
				radius: 1500,
			},
		],
		// 旋转角度
		rotate: 0,
		skew: 25,
		// 3d
		enable3D: true,
		// 是否显示指南针
		showCompass: true,
		// 显示比例尺
		showScale: true,
		// 开启俯视
		enableOverlooking:true,
		// 是否支持缩放
		enableZoom:true, 
		// 是否支持拖动
		enableScroll: true,
		// 是否支持双指旋转
		enableRotate:true,
		// 开启卫星图
		enableSatellite:false,
		// 实时路况
		enableTraffic:true,
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
	 * bindmarkertap
	 */
	onBindMarkerTap: function () {},
});
