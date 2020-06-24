// pages/interface/page/createAnimation/index.js
Page({
	/**
	 * 页面的初始数据
	 */
	data: {
		lAnimate: '',
		rAnimate: '',
		imgAnimation: '',
		start: '北京',
		end: '深圳',
	},

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
     * 点击图片切换事件
     */
    trigger() {
    let that = this;
    let option = {
      duration: 100, // 动画执行时间
      timingFunction: 'ease-in' // 动画执行效果
    };
    let lanimation = wx.createAnimation(option); // 创建动画
    let ranimation = wx.createAnimation(option);
    let imgAnimation = wx.createAnimation({
      duration: 200,
      timingFunction: 'linear'
    });
    // 起点
    lanimation.translateX(100);
    lanimation.opacity(0.1).step();
    // 终点
    ranimation.translateX(-100);
    ranimation.opacity(0.1).step();
    //中间图标
    imgAnimation.rotate(180).step();
    that.setData({
      lAnimate: lanimation.export(),// 开始执行动画
      rAnimate: ranimation.export(), // 开始执行动画
      imgAnimation: imgAnimation.export()
    })
    setTimeout(() => {
      // 起点
      lanimation.translateX(0);
      lanimation.opacity(1).step();
      // 终点
      ranimation.translateX(0);
      ranimation.opacity(1).step();
      //图片 在100ms后执行一个在0s时间完成新的动画让它复位至0度
      imgAnimation.rotate(0).step({ duration: 0, transformOrigin: "50%,50%", timingFunction: 'linear' })
      that.setData({
        imgAnimation: imgAnimation.export(),
        lAnimate: lanimation.export(),// 开始执行动画
        rAnimate: ranimation.export(),// 开始执行动画
        end: that.data.start,
        start: that.data.end
      })
    }, 100);
  }
});