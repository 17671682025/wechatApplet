// pages/tarBar/api.js
import MockData from '../../../base/utils/mock';
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
	console.log('MockData', MockData);
		this.setData({
			openInterFaceSource: MockData.interface.interfaceObj.openInterFace,
			pageSource: MockData.interface.interfaceObj.page,
			deviceSource: MockData.interface.interfaceObj.device,
			networkSource: MockData.interface.interfaceObj.network,
			mediaSource: MockData.interface.interfaceObj.media,
			positionSource: MockData.interface.interfaceObj.position,
			dataSource: MockData.interface.interfaceObj.data,
			multiThreadSource: MockData.interface.interfaceObj.multiThread,
		});
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})