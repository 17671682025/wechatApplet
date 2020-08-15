Page({
  /**
   * 页面的初始数据
   */
  data: {
    // canvas-id
    canvasId: "starrySky",
    // canvas对象
    ctx: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let ctx = wx.createCanvasContext(this.data.canvasId);
    console.log("ctx", ctx);
    this.setData({
      ctx
    });
    if (ctx) {
      this.drawCreateCircularGradient(ctx);
    }
  },

  /**
   * 绘制渐变圆
   * @param {*} cav
   */
  drawCreateCircularGradient: function(cav) {
    cav.beginPath();
    let gradientContext = cav.createCircularGradient(150, 150, 120);
    gradientContext.addColorStop(0, "red");
    gradientContext.addColorStop(0.26, "orange");
    gradientContext.addColorStop(0.46, "yellow");
    gradientContext.addColorStop(0.64, "green");
    gradientContext.addColorStop(0.8, "cyan");
    gradientContext.addColorStop(0.92, "blue");
    gradientContext.addColorStop(1, "white");
    cav.arc(150, 150, 120, 0, 2 * Math.PI, false);
    cav.setFillStyle(gradientContext);
    cav.fill();
    cav.draw();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {}
});
