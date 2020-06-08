// pages/component/formComponent/picker/index.js
Page({
	/**
	 * 页面的初始数据
	 */
	data: {
		// 普通选择器的数据
		selectorArray: ['烬天玉藻前', '炼狱茨木童子', '八岐大蛇', '鬼切', '铃鹿御前'],
		// 普通选择器的数据
		objectArray: [
			{ id: 0, value: '烬天玉藻前' },
			{ id: 1, value: '炼狱茨木童子' },
			{ id: 2, value: '八岐大蛇' },
			{ id: 3, value: '鬼切' },
			{ id: 3, value: '铃鹿御前' },
		],
		// 普通选择器的选择值
		selectorValue: 0,
		// 多列选择器
		multiSelectorRange: [
			['无脊柱动物', '脊柱动物'],
			['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'],
			['猪肉绦虫', '吸血虫'],
		],
		// 多列选择器
		objectMultiArray: [
			[
				{
					id: 0,
					name: '无脊柱动物',
				},
				{
					id: 1,
					name: '脊柱动物',
				},
			],
			[
				{
					id: 0,
					name: '扁性动物',
				},
				{
					id: 1,
					name: '线形动物',
				},
				{
					id: 2,
					name: '环节动物',
				},
				{
					id: 3,
					name: '软体动物',
				},
				{
					id: 3,
					name: '节肢动物',
				},
			],
			[
				{
					id: 0,
					name: '猪肉绦虫',
				},
				{
					id: 1,
					name: '吸血虫',
				},
			],
		],
		// 多列选择器选择值
		multiSelectorValue: [0, 2, 1],
		// 开始时间
		startTime: '03:00',
		// 结束时间
		endTime: '23:55',
		// 选择时间
		selectTime: '21:09',
		// 开始date
		startDate: '2020-02-23',
		// 结束date
		endDate: '2020-06-08',
		// 选择的时间
		selectDate: '2020-05-18',
		// 选择器的级别
		fields: 'month',
		// 三级联动
		region: ['广东省', '广州市', '海珠区'],
		// 附加的自动一选项
		customItem: '全部',
		code:"",
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
	 * mode=selector 发生改变的时候触发
	 */
	onSelectorChange: function (event) {
		console.log('event', event);
		const { value } = event.detail;
		this.setData({
			selectorValue: Number(value),
		});
	},
	/**
	 * 多列选择器发生选择改变时
	 */
	onMultiSelectorChange: function (event) {
		console.log('event', event);
		const { value } = event.detail;
		this.setData({
			multiSelectorValue: value,
		});
	},
	/**
	 * 多列选择器列改变时触发
	 */
	onMultiSelectorColumnChange: function (event) {
		console.log('event', event);
		const {
			detail: { column, value },
		} = event;
		// const { value } = event.detail;
		// this.setData({
		// 	multiSelectorValue: Number(value),
		// });
	},
	/**
	 * 时间选择器的触发
	 */
	onTimeSelectorChange: function (event) {
		console.log('event', event);
		const {
			detail: { column, value },
		} = event;
		this.setData({
			selectTime: value,
		});
	},
	/**
	 * 时间选择器的触发
	 */
	onDateSelectorChange: function (event) {
		console.log('event', event);
		const {
			detail: { value },
		} = event;
		this.setData({
			selectDate: value,
		});
	},

	/**
	 * 三级联动选择器
	 */
	onRegionSelectorChange: function (event) {
		console.log('event', event);
		const {
			detail: { value, code },
		} = event;
		this.setData({
			region: value,
			code,
		});
	},
});
