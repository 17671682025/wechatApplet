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
      this.drawCreateLinearGradient(ctx);
    }
  },

  /**
   * 绘制线性渐变颜色
   * @param {*} cav
   */
  drawCreateLinearGradient: function(cav) {
    cav.beginPath();
    let gradientContext = cav.createLinearGradient(10,10,250,250);
    gradientContext.addColorStop(0, "red");
    gradientContext.addColorStop(0.16, "orange");
    gradientContext.addColorStop(0.33, "yellow");
    gradientContext.addColorStop(0.5, "green");
    gradientContext.addColorStop(0.66, "cyan");
    gradientContext.addColorStop(0.83, "blue");
    gradientContext.addColorStop(1, "purple");

    // cav.arc(150, 150, 120, 0, 2 * Math.PI, false);
    cav.rect(10,10,250,250)
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
