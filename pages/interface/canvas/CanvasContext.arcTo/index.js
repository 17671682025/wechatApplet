Page({
  /**
   * 页面的初始数据
   */
  data: {
    // canvas-id
    canvasId: "starrySky1",
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
      this.renderRoundAngle(ctx);
    }
    // this.getNodersRef();
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
  onShareAppMessage: function() {},
  /**
   * 渲染圆弧
   */
  renderRoundAngle: function(context) {
    context.beginPath();
    context.setFillStyle("red");
    context.moveTo(20,20);           // 创建开始点
    context.lineTo(100,20);          // 创建水平线
    context.arcTo(150,20,150,70,50); // 创建弧
    context.lineTo(150,120);         // 创建垂直线
    context.fill();
    // context.closePath();
    // context.strokeStyle = "red";
    context.draw(true);
    // context.arc(100, 100, 50, 0, 1.75 * Math.PI, false);
    // context.setFillStyle("#EEEEEE");
    // // context.stroke();
    // context.fill();
    // context.draw();
  }
});
