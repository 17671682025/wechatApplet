// pages/interface/media/saveImageToPhotoAlbum/index.js
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
	 * 保存图片
	 */
	saveImageToPhotosAlbum: () => {
		console.log('文件路径', wx.getFileSystemManager());

		// wx.downloadFile({
		//     url: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2746890508,1411167354&fm=26&gp=0.jpg',
		//     filePath:"",
		// 	success: (res) => {
		//         console.log('调用成功', res);
		//         wx.saveImageToPhotosAlbum({
		// 			filePath: res.tempFilePath,
		// 			success: (res) => {
		// 				console.log('调用成功', res);
		// 			},
		// 			fail: (error) => {
		// 				console.log('调用失败', error);
		// 			},
		// 			complete: (res) => {
		// 				console.log('调用完成', res);
		// 			},
		// 		});
		// 	},
		// 	fail: (error) => {
		// 		console.log('调用失败', error);
		// 	},
		// 	complete: (res) => {
		// 		console.log('调用完成', res);
		// 	},
		// });
		wx.saveImageToPhotosAlbum({
			filePath: '/pages/interface/media/saveImageToPhotoAlbum/Image/1.jpg',
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
