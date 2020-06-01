// pages/component/basicContent/progress/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // 百分比
        percent:10,
        // 是否显示进度条右侧的百分比
        showInfo:true,
        // 圆角大小
        borderRadius:16,
        // 右侧百分比文字大小
        fontSize:'24rpx',
        // 进度条线宽
        strokeWidth:8,
        // 进度条颜色 废弃
        color:"gray",

        // 已选择的进度条颜色
        activeColor:"#19df00",
        // 未选择进度条
        backgroundColor:"#ccc",
        // 进度条从左到右的动画
        active:true,
        // 动画延续播放方式
        activeMode:'forwards',
        // 进度条增加1%需要的毫秒数
        duration:30,
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

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

    },
    /**
     * 动画完成事件
     */
    onAnimatedFinish:function(){
        
    }
})