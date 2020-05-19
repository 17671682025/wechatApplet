
/**
 * 跳转tabBar
 * @param {*} router 
 */
function switchTab(router) {
  return wx.switchTab()
}

/**
 * 跳转tabBar
 * @param {*} router 
 */
function switchTab(router) {
  return wx.switchTab()
}

/**
 * 跳转tabBar
 * @param {*} router 
 */
function switchTab(router) {
  return wx.switchTab()
}

/**
 * 
 * @param {*} router 
 */
function reLaunch(router) {
	return wx.reLaunch();
}

/**
 * 
 * @param {*} router 
 */
function redirectTo(router) {
  return wx.redirectTo()
}

/**
 * 
 * @param {*} router 
 */
function navigateTo(router) {
  return wx.navigateTo(router);
}

/**
 * 
 * @param {*} router 
 */
function navigateBack(router) {
  return wx.navigateBack()
}


let navigate = {
	switchTab: switchTab(),
	reLaunch: reLaunch(),
	redirectTo: redirectTo(),
	navigateTo: navigateTo(),
	navigateBack: navigateBack(),
};



export default navigate