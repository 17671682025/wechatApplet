
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // canvas-id
        canvasId:"starrySky",
        // canvas对象
        ctx:null,
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let ctx = wx.createCanvasContext(this.data.canvasId);
        console.log('ctx',ctx);
        this.setData({
            ctx
        })
        if(ctx){
            this.drawStrokeText(ctx)
        }
    },

    /**
     * 绘制描边文字
     * @param {*} params 
     */
    drawStrokeText:function(cav) {
          // cav.setFontSize(20);
          cav.font = 'italic bold 32px cursive'
          cav.strokeText('你好呀,我日了够了,我日了够了,我日了够了',20,20);
          cav.setTextBaseline("bottom")
          cav.draw();
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