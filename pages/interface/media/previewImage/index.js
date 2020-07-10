// pages/interface/media/previewImage/index.js
Page({
	/**
	 * 页面的初始数据
	 */
	data: {},

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
	 * 预览图片
	 */
	previewImage: () => {
		wx.previewImage({
			urls: [
				'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594380403240&di=f17c30308b812612e74aeb64a0582212&imgtype=0&src=http%3A%2F%2Fimg.duoziwang.com%2F2016%2F12%2F16%2F01123710286.jpg',
				'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594380507513&di=caafe456a95039bc57aeb17d688cd9b1&imgtype=0&src=http%3A%2F%2Fwww.bkill.com%2Fu%2Fupload%2F2017%2F04%2F21%2F212157125379.jpg'
			],
			current:
				'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594380507513&di=caafe456a95039bc57aeb17d688cd9b1&imgtype=0&src=http%3A%2F%2Fwww.bkill.com%2Fu%2Fupload%2F2017%2F04%2F21%2F212157125379.jpg',
			success: (res) => {
				console.log('调用成功', res);
			},
			fail: (error) => {
				console.log('调用失败', error);
			},
			complete: (res) => {
				console.log('调用完成', res);
			},
		});
	},
});
