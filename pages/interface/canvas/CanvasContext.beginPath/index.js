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
    if(ctx){
        this.drawCanvas(ctx);
    }
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
   * beginPath
   */
  drawCanvas: function(ctx) {
    // begin path
    ctx.rect(10, 10, 100, 30);
    ctx.setFillStyle("purple");
    // begin another path
    ctx.beginPath();
    ctx.rect(10, 40, 100, 30);

    // only fill this rect, not in current path
    ctx.setFillStyle("blue");
    ctx.fillRect(10, 70, 100, 30);

    // it will fill current path
    ctx.setFillStyle("yellow");
    ctx.fillRect(10, 100, 100, 30);
    ctx.fill();
    ctx.draw();
  }
});
