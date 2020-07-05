// pages/interface/device/addPhoneContact/index.js
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
	 * 添加手机联系人
	 */
	addPhoneContact:()=>{
        wx.addPhoneContact({
			firstName: '甘小号',
			nickName: '甘甘',
			photoFilePath: '/base/images/1.jpg',
			lastName: '甘',
			middleName: '怡安',
			remark: '添加测试',
			mobilePhoneNumber: '17671682023',
			weChatNumber: '0123',
			addressCountry: '中国',
			addressState: '湖北省',
			addressCity: '武汉',
			addressStreet: '洪山区',
			addressPostalCode: '430010',
			organization: '武汉智一科技',
			title: '前端工程师',
			workFaxNumber: '0000',
			workPhoneNumber: '8610520',
			hostNumber: '027-12000',
			email: '852046302@qq.com',
			url: 'www.baidu.com',
			workAddressCountry: '中国',
			workAddressState: '湖北省',
			workAddressCity: '武汉',
			workAddressStreet: '洪山区',
			workAddressPostalCode: '430010',
			homeFaxNumber: '0000', 
			homePhoneNumber: '8610520',
			homeAddressCountry: '中国',
			homeAddressState: '湖北省',
			homeAddressCity: '武汉',
			homeAddressStreet: '洪山区',
			homeAddressPostalCode: '',
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
    }
});