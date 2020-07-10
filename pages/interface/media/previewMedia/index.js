// pages/interface/media/previewMedia/index.js
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
		wx.previewMedia({
			sources: [
				{
					url:
						'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594380403240&di=f17c30308b812612e74aeb64a0582212&imgtype=0&src=http%3A%2F%2Fimg.duoziwang.com%2F2016%2F12%2F16%2F01123710286.jpg',
					type: 'image',
					poster:
						'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2901877059,3116165048&fm=26&gp=0.jpg',
				},
				{
					url:
						'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3913543344,4199636285&fm=26&gp=0.jpg',
					type: 'image',
					poster:
						'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2901877059,3116165048&fm=26&gp=0.jpg',
				},
				{
					url:
						'http://ugcbsy.qq.com/uwMROfz2r57EIaQXGdGnC2ddDmY0gCKxs_YQn4ev8GMVk_hh/shg_8855299_50001_31bc0d89905344bf9a2f0d26c5c846b6.f622.mp4?sdtfrom=v1104&guid=8686852225234ac840da7e6f69e75ba8&vkey=2D7BEB0DD86CFAB8CB7FA41F98B46E2632AAF406E94C75EF39A2A6763EAB5C932E3077B13BC4CDB2E102B33B245E61AE5D82F7E9EEE1B1E5D1EF7428D6D97855AD82C2CB39139E67BCBBF4A708B306FC281FDAE867AF54C51E1AF09E472B4C87EAA076CE01D796A59B69AF2B44C3422B4BD68FFA17514869B9FF56BF0393A8B4',
					type: 'video',
					poster:
						'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2901877059,3116165048&fm=26&gp=0.jpg',
				},
				{
					url:
						'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594380403240&di=d4e71005945f664b440d962ca2fa063e&imgtype=0&src=http%3A%2F%2Fimg.ewebweb.com%2Fuploads%2F20190403%2F16%2F1554278474-naSczQoyqu.jpg',
					type: 'image',
					poster:
						'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2901877059,3116165048&fm=26&gp=0.jpg',
				},
			],
			current: 2,
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
	/**
	 * 预览视频
	 */
	previewVideo: () => {
		console.log('previewMedia', wx.canIUse('previewMedia'));
		wx.previewMedia({
			sources: [
				{
					url:
						'https://dss0.bdstatic.com/9bA1vGfa2gU2pMbfm9GUKT-w/timg?wisealaddin&sec=1594369354&di=cbaa9962b1e481713f515d0b947b5199&quality=100&size=f242_182&src=http%3A%2F%2Ft10.baidu.com%2Fit%2Fu%3D4261831281%2C2309938990%26fm%3D171%26app%3D20%26f%3DJPEG%3Fw%3D870%26h%3D488%26s%3D90A280BA4A1B4AC618A2E042030050F8',
					type: 'video',
					poster:
						'https://dss0.bdstatic.com/9bA1vGfa2gU2pMbfm9GUKT-w/timg?wisealaddin&sec=1594369402&di=e98f6430c91cf58e3f5564fbd9c4740a&quality=100&size=f242_182&src=http%3A%2F%2Ft10.baidu.com%2Fit%2Fu%3D4261831281%2C2309938990%26fm%3D171%26app%3D20%26f%3DJPEG%3Fw%3D870%26h%3D488%26s%3D90A280BA4A1B4AC618A2E042030050F8',
				},
				{
					url:
						'http://ugcbsy.qq.com/uwMROfz2r57EIaQXGdGnC2ddDmY0gCKxs_YQn4ev8GMVk_hh/shg_8855299_50001_31bc0d89905344bf9a2f0d26c5c846b6.f622.mp4?sdtfrom=v1104&guid=8686852225234ac840da7e6f69e75ba8&vkey=2D7BEB0DD86CFAB8CB7FA41F98B46E2632AAF406E94C75EF39A2A6763EAB5C932E3077B13BC4CDB2E102B33B245E61AE5D82F7E9EEE1B1E5D1EF7428D6D97855AD82C2CB39139E67BCBBF4A708B306FC281FDAE867AF54C51E1AF09E472B4C87EAA076CE01D796A59B69AF2B44C3422B4BD68FFA17514869B9FF56BF0393A8B4',
					type: 'video',
					poster:
						'https://dss0.bdstatic.com/9bA1vGfa2gU2pMbfm9GUKT-w/timg?wisealaddin&sec=1594369354&di=e35dac7ec65e421efe1d87138fba6b8b&quality=100&size=f242_182&src=http%3A%2F%2Ft11.baidu.com%2Fit%2Fu%3D77213602%2C4274201645%26fm%3D171%26app%3D20%26f%3DJPEG%3Fw%3D1920%26h%3D1077%26s%3D31230FBA500178EFB211D4C1030020F1',
				},
				{
					url:
						'http://119.96.180.157/vhot2.qqvideo.tc.qq.com/AMNqn9FG-c-LnDD_QhC4m4AeSqEpwLM-iw1yS6fSabq4/uwMROfz2r5zEIaQXGdGnC2dfDmafRkP9ujxgqKjuATzMrE-2/6bRdVQuuOM8.mp4?sdtfrom=v1104&guid=8686852225234ac840da7e6f69e75ba8&vkey=08609B13E2F5B5D16E5A4A8C975869CCC4A263DB9C8F4EE049010F2FF6EF1C3EBA2D008FC0918EBFF768207C79825C81F93C460F174D8BBA3036DE79C05426E8EF80289BF724FD2F68D8A6D3A550D49207E734BF9F934A4F2CCD1A3E9504951FF7723BB42C1C03B9C3B43A06F8D190D1837F1177E208335DDB09C4C9A5F58352',
					type: 'video',
					poster:
						'https://vdposter.bdstatic.com/f8d9452f225cf0d0001162f87588fef2.jpeg?x-bce-process=image/resize,m_fill,w_242,h_182/format,f_jpg/quality,Q_100',
				},
			],
			current: 0,
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
