// 公共路径
// 官方组组件
let officialComponentPath = 'pages/component/';
// 扩展组件
let extendComponentPath = 'pages/extendComponent/';
// 接口
let interfacePath = 'pages/interface/';
// 云开发
let cloudDevelopPath = 'pages/cloudDevelop/';
// 官方组件的视图容器组件路由
let officialViewContainerRouter = [
	{ routerName: 'cover-image', routerPath: `${officialComponentPath}viewContainer/coverImage/index` },
	{ routerName: 'cover-view', routerPath: `${officialComponentPath}viewContainer/coverView/index` },
	{ routerName: 'movable-area', routerPath: `${officialComponentPath}viewContainer/movableArea/index` },
	{ routerName: 'movable-view', routerPath: `${officialComponentPath}viewContainer/movableView/index` },
	{ routerName: 'scroll-view', routerPath: `${officialComponentPath}viewContainer/scrollView/index` },
	{ routerName: 'swiper', routerPath: `${officialComponentPath}viewContainer/swiper/index` },
	{ routerName: 'swiper-item', routerPath: `${officialComponentPath}viewContainer/swiperItem/index` },
	{ routerName: 'view', routerPath: `${officialComponentPath}viewContainer/view/index` },
];

// 官方组件的基础内容组件路由
let officialBasicContentRouter = [
	{ routerName: 'text', routerPath: `${officialComponentPath}basicContent/text/index` },
	{ routerName: 'icon', routerPath: `${officialComponentPath}basicContent/icon/index` },
	{ routerName: 'progress', routerPath: `${officialComponentPath}basicContent/progress/index` },
	{ routerName: 'rich-text', routerPath: `${officialComponentPath}basicContent/richText/index` },
];

// 官方组件的表单组件路由
let officialFormComponentRouter = [
	{ routerName: 'button', routerPath: `${officialComponentPath}formComponent/button/index` },
	{ routerName: 'checkbox', routerPath: `${officialComponentPath}formComponent/checkbox/index` },
	{ routerName: 'checkbox-group', routerPath: `${officialComponentPath}formComponent/checkboxGroup/index` },
	{ routerName: 'editor', routerPath: `${officialComponentPath}formComponent/editor/index` },
	{ routerName: 'form', routerPath: `${officialComponentPath}formComponent/form/index` },
	{ routerName: 'input', routerPath: `${officialComponentPath}formComponent/input/index` },
	{ routerName: 'label', routerPath: `${officialComponentPath}formComponent/label/index` },
	{ routerName: 'picker', routerPath: `${officialComponentPath}formComponent/picker/index` },
	{ routerName: 'picker-view', routerPath: `${officialComponentPath}formComponent/pickerView/index` },
	{ routerName: 'picker-view-column', routerPath: `${officialComponentPath}formComponent/pickerViewColumn/index` },
	{ routerName: 'radio', routerPath: `${officialComponentPath}formComponent/radio/index` },
	{ routerName: 'radio-group', routerPath: `${officialComponentPath}formComponent/radioGroup/index` },
	{ routerName: 'slider', routerPath: `${officialComponentPath}formComponent/slider/index` },
	{ routerName: 'switch', routerPath: `${officialComponentPath}formComponent/switch/index` },
	{ routerName: 'textarea', routerPath: `${officialComponentPath}formComponent/textArea/index` },
];

// 官方组件的导航组件路由
let officialNavigationRouter = [
	{
		routerName: 'function-page-navigator',
		routerPath: `${officialComponentPath}navigation/functionPageNavigator/index`,
	},
	{ routerName: 'navigator', routerPath: `${officialComponentPath}navigation/navigator/index` },
];

// 官方组件的媒体组件路由
let officialMediaRouter = [
	{ routerName: 'audio', routerPath: `${officialComponentPath}media/audio/index` },
	{ routerName: 'camera', routerPath: `${officialComponentPath}media/camera/index` },
	{ routerName: 'image', routerPath: `${officialComponentPath}media/image/index` },
	{ routerName: 'live-player', routerPath: `${officialComponentPath}media/livePlayer/index` },
	{ routerName: 'live-pusher', routerPath: `${officialComponentPath}media/livePusher/index` },
	{ routerName: 'video', routerPath: `${officialComponentPath}media/video/index` },
];

// 官方组件的地图组件路由
let officialMapRouter = [{ routerName: 'map', routerPath: `${officialComponentPath}map/map/index` }];

// 官方组件的画布组件路由
let officialCanvasRouter = [{ routerName: 'canvas', routerPath: `${officialComponentPath}canvas/canvas/index` }];

// 官方组件的开放能力组件路由
let officialOpenAbilityRouter = [
	{ routerName: 'ad', routerPath: `${officialComponentPath}openAbility/ad/index` },
	{ routerName: 'official-account', routerPath: `${officialComponentPath}openAbility/officialAccount/index` },
	{ routerName: 'open-data', routerPath: `${officialComponentPath}openAbility/openData/index` },
	{ routerName: 'web-view', routerPath: `${officialComponentPath}openAbility/webView/index` },
];

// 扩展组件的表单组组件路由
let extendComponentFormComponentRouter = [
	{ routerName: 'cell', routerPath: `${extendComponentPath}formComponent/cell/index` },
	{ routerName: 'slideView', routerPath: `${extendComponentPath}formComponent/slideView/index` },
	{ routerName: 'form', routerPath: `${extendComponentPath}formComponent/form/index` },
	{ routerName: 'uploader', routerPath: `${extendComponentPath}formComponent/uploader/index` },
];

// 扩展组件的基础组组件路由
let extendComponentBasicContentRouter = [
	{ routerName: 'article', routerPath: `${extendComponentPath}basicContent/article/index` },
	{ routerName: 'icons', routerPath: `${extendComponentPath}basicContent/icons/index` },
	{ routerName: 'badge', routerPath: `${extendComponentPath}basicContent/badge/index` },
	{ routerName: 'flex', routerPath: `${extendComponentPath}basicContent/flex/index` },
	{ routerName: 'footer', routerPath: `${extendComponentPath}basicContent/footer/index` },
	{ routerName: 'gallery', routerPath: `${extendComponentPath}basicContent/gallery/index` },
	{ routerName: 'grid', routerPath: `${extendComponentPath}basicContent/grid/index` },
	{ routerName: 'loadMore', routerPath: `${extendComponentPath}basicContent/loadMore/index` },
	{ routerName: 'loading', routerPath: `${extendComponentPath}basicContent/loading/index` },
	{ routerName: 'panel', routerPath: `${extendComponentPath}basicContent/panel/index` },
	{ routerName: 'preView', routerPath: `${extendComponentPath}basicContent/preView/index` },
];

// 扩展组件的操作反馈组组件路由
let extendComponentOperationalFeedbackRouter = [
	{ routerName: 'dialog', routerPath: `${extendComponentPath}operationalFeedback/dialog/index` },
	{ routerName: 'msg', routerPath: `${extendComponentPath}operationalFeedback/msg/index` },
	{ routerName: 'halfScreenDialog', routerPath: `${extendComponentPath}operationalFeedback/halfScreenDialog/index` },
	{ routerName: 'actionSheet', routerPath: `${extendComponentPath}operationalFeedback/actionSheet/index` },
];

// 扩展组件的导航组件路由
let extendComponentNavigationRouter = [
	{ routerName: 'navigation', routerPath: `${extendComponentPath}navigation/navigation/index` },
	{ routerName: 'tabBar', routerPath: `${extendComponentPath}navigation/tabBar/index` },
];

// 扩展组件的搜索组组件路由
let extendComponentSearchRouter = [
	{ routerName: 'searchBar', routerPath: `${extendComponentPath}search/searchBar/index` },
];

// 接口的基本路由
let interfaceBasicRouter = [
	{ routerName: 'wx.canIUse', routerPath: `${interfacePath}basic/wxCanIUse/index` },
	{ routerName: 'wx.base64ToArrayBuffer', routerPath: `${interfacePath}basic/base64ToArrayBuffer/index` },
	{ routerName: 'wx.arrayBufferToBase64', routerPath: `${interfacePath}basic/arrayBufferToBase64/index` },
	{ routerName: 'wx.getSystemInfoSync', routerPath: `${interfacePath}basic/getSystemInfoSync/index` },
	{ routerName: 'wx.getSystemInfo', routerPath: `${interfacePath}basic/getSystemInfo/index` },
	{ routerName: 'wx.getUpdateManager', routerPath: `${interfacePath}basic/getUpdateManager/index` },
	{ routerName: 'wx.getLaunchOptionSync', routerPath: `${interfacePath}basic/getLaunchOptionSync/index` },
	{ routerName: 'wx.getEnterOptionsSync', routerPath: `${interfacePath}basic/getEnterOptionsSync/index` },
	{ routerName: 'wx.onUnhandledRejection', routerPath: `${interfacePath}basic/onUnhandledRejection/index` },
	{ routerName: 'wx.onThemeChange', routerPath: `${interfacePath}basic/onThemeChange/index` },
	{ routerName: 'wx.onPageNotFound', routerPath: `${interfacePath}basic/onPageNotFound/index` },

	{ routerName: 'wx.onError', routerPath: `${interfacePath}basic/onError/index` },
	{ routerName: 'wx.onAudioInterruptionEnd', routerPath: `${interfacePath}basic/onAudioInterruptionEnd/index` },
	{ routerName: 'wx.onAudioInterruptionBegin', routerPath: `${interfacePath}basic/onAudioInterruptionBegin/index` },
	{ routerName: 'wx.onAppShow', routerPath: `${interfacePath}basic/onAppShow/index` },
	{ routerName: 'wx.onAppHide', routerPath: `${interfacePath}basic/onAppHide/index` },
	{ routerName: 'wx.offUnhandledRejection', routerPath: `${interfacePath}basic/offUnhandledRejection/index` },
	{ routerName: 'wx.offThemeChange', routerPath: `${interfacePath}basic/offThemeChange/index` },
	{ routerName: 'wx.offPageNotFound', routerPath: `${interfacePath}basic/offPageNotFound/index` },
	
	{ routerName: 'wx.offError', routerPath: `${interfacePath}basic/offError/index` },
	{ routerName: 'wx.offAudioInterruptionEnd', routerPath: `${interfacePath}basic/offAudioInterruptionEnd/index` },
	{ routerName: 'wx.offAudioInterruptionBegin', routerPath: `${interfacePath}basic/offAudioInterruptionBegin/index` },
	{ routerName: 'wx.offAppShow', routerPath: `${interfacePath}basic/offAppShow/index` },
	{ routerName: 'wx.offAppHide', routerPath: `${interfacePath}basic/offAppHide/index` },
	{ routerName: 'wx.setEnableDebug', routerPath: `${interfacePath}basic/setEnableDebug/index` },
	{ routerName: 'wx.getRealTimeLogManager', routerPath: `${interfacePath}basic/getRealTimeLogManager/index` },
	{ routerName: 'wx.getLogManager', routerPath: `${interfacePath}basic/getLogManager/index` },
	{ routerName: 'env', routerPath: `${interfacePath}basic/env/index` },
];

// 接口的路由api对象
let interfaceRouterObj = [
	{ routerName: 'wx.switchTab', routerPath: `${interfacePath}router/switchTab/index` },
	{ routerName: 'wx.reLaunch', routerPath: `${interfacePath}router/reLaunch/index` },
	{ routerName: 'wx.redirectTo', routerPath: `${interfacePath}router/redirectTo/index` },
	{ routerName: 'wx.navigateTo', routerPath: `${interfacePath}router/navigateTo/index` },
	{ routerName: 'wx.navigateBack', routerPath: `${interfacePath}router/navigateBack/index` },
	{ routerName: 'EventChannel', routerPath: `${interfacePath}router/eventChannel/index` },
];

// 接口的界面路由
let interfacePageRouter = [
	{ routerName: 'wx.showToast', routerPath: `${interfacePath}page/showToast/index` },
	{ routerName: 'wx.showModal', routerPath: `${interfacePath}page/showModal/index` },
	{ routerName: 'wx.showLoading', routerPath: `${interfacePath}page/showLoading/index` },
	{ routerName: 'wx.showActionSheet', routerPath: `${interfacePath}page/showActionSheet/index` },
	{ routerName: 'wx.hideToast', routerPath: `${interfacePath}page/hideToast/index` },
	{ routerName: 'wx.hideLoading', routerPath: `${interfacePath}page/hideLoading/index` },
	{ routerName: 'wx.showNavigationBarLoading', routerPath: `${interfacePath}page/showNavigationBarLoading/index` },
	{ routerName: 'wx.setNavigationBarTitle', routerPath: `${interfacePath}page/setNavigationBarTitle/index` },
	{ routerName: 'wx.setNavigationBarColor', routerPath: `${interfacePath}page/setNavigationBarColor/index` },
	{ routerName: 'wx.hideNavigationBarLoading', routerPath: `${interfacePath}page/hideNavigationBarLoading/index` },
	{ routerName: 'wx.hidHomeButton', routerPath: `${interfacePath}page/hidHomeButton/index` },
	{ routerName: 'wx.setBackgroundTextStyle', routerPath: `${interfacePath}page/setBackgroundTextStyle/index` },
	{ routerName: 'wx.setBackgroundColor', routerPath: `${interfacePath}page/setBackgroundColor/index` },
	{ routerName: 'wx.showTabBarRedDot', routerPath: `${interfacePath}page/showTabBarRedDot/index` },
	{ routerName: 'wx.showTabBar', routerPath: `${interfacePath}page/showTabBar/index` },
	{ routerName: 'wx.setTabBarStyle', routerPath: `${interfacePath}page/setTabBarStyle/index` },
	{ routerName: 'wx.setTabBarItem', routerPath: `${interfacePath}page/setTabBarItem/index` },
	{ routerName: 'wx.setTabBarBadge', routerPath: `${interfacePath}page/setTabBarBadge/index` },
	{ routerName: 'wx.removeTabBarBadge', routerPath: `${interfacePath}page/removeTabBarBadge/index` },
	{ routerName: 'wx.hideTabBarRedDot', routerPath: `${interfacePath}page/hideTabBarRedDot/index` },
	{ routerName: 'wx.hideTabBar', routerPath: `${interfacePath}page/hideTabBar/index` },
	{ routerName: 'wx.loadFontFace', routerPath: `${interfacePath}page/loadFontFace/index` },
	{ routerName: 'wx.stopPullDownRefresh', routerPath: `${interfacePath}page/stopPullDownRefresh/index` },
	{ routerName: 'wx.startPullDownRefresh', routerPath: `${interfacePath}page/startPullDownRefresh/index` },
	{ routerName: 'wx.pageScrollTo', routerPath: `${interfacePath}page/pageScrollTo/index` },
	{ routerName: 'wx.createAnimation', routerPath: `${interfacePath}page/createAnimation/index` },
	{ routerName: 'wx.setTopBarText', routerPath: `${interfacePath}page/setTopBarText/index` },
	{ routerName: 'wx.nextTick', routerPath: `${interfacePath}page/nextTick/index` },
	{
		routerName: 'wx.getMenuButtonBoundingClientRect',
		routerPath: `${interfacePath}page/getMenuButtonBoundingClientRect/index`,
	},
	{ routerName: 'wx.setWindowSize', routerPath: `${interfacePath}page/setWindowSize/index` },
	{ routerName: 'wx.onWindowResize', routerPath: `${interfacePath}page/onWindowResize/index` },
	{ routerName: 'wx.offWindowResize', routerPath: `${interfacePath}page/offWindowResize/index` },
	{
		routerName: 'wx.onKeyboardHeightChange',
		routerPath: `${interfacePath}page/onKeyboardHeightChange/index`,
	},
	{
		routerName: 'wx.offKeyboardHeightChange',
		routerPath: `${interfacePath}page/offKeyboardHeightChange/index`,
	},
	{
		routerName: 'wx.hideKeyboard',
		routerPath: `${interfacePath}page/hideKeyboard/index`,
	},
	{
		routerName: 'wx.getSelectedTextRange',
		routerPath: `${interfacePath}page/getSelectedTextRange/index`,
	},
];

// 接口的网络路由
let interfaceNetworkRouter = [
	{ routerName: 'wx.request', routerPath: `${interfacePath}network/request/index` },
	{ routerName: 'wx.downloadFile', routerPath: `${interfacePath}network/downloadFile/index` },
	{ routerName: 'wx.uploadFile', routerPath: `${interfacePath}network/uploadFile/index` },
	{ routerName: 'wx.sendSocketMessage', routerPath: `${interfacePath}network/sendSocketMessage/index` },
	{ routerName: 'wx.onSocketOpen', routerPath: `${interfacePath}network/onSocketOpen/index` },
	{ routerName: 'wx.onSocketMessage', routerPath: `${interfacePath}network/onSocketMessage/index` },
	{ routerName: 'wx.onSocketError', routerPath: `${interfacePath}network/onSocketError/index` },
	{ routerName: 'wx.onSocketClose', routerPath: `${interfacePath}network/onSocketClose/index` },
	{ routerName: 'wx.connectSocket', routerPath: `${interfacePath}network/connectSocket/index` },
	{ routerName: 'wx.closeSocket', routerPath: `${interfacePath}network/closeSocket/index` },
	{
		routerName: 'wx.stopLocalServiceDiscovery',
		routerPath: `${interfacePath}network/stopLocalServiceDiscovery/index`,
	},
	{
		routerName: 'wx.startLocalServiceDiscovery',
		routerPath: `${interfacePath}network/startLocalServiceDiscovery/index`,
	},
	{
		routerName: 'wx.onLocalServiceResolveFail',
		routerPath: `${interfacePath}network/onLocalServiceResolveFail/index`,
	},
	{ routerName: 'wx.onLocalServiceLost', routerPath: `${interfacePath}network/onLocalServiceLost/index` },
	{ routerName: 'wx.onLocalServiceFound', routerPath: `${interfacePath}network/onLocalServiceFound/index` },
	{
		routerName: 'wx.onLocalServiceDiscoveryStop',
		routerPath: `${interfacePath}network/onLocalServiceDiscoveryStop/index`,
	},
	{
		routerName: 'wx.offLocalServicesResolveFail',
		routerPath: `${interfacePath}network/offLocalServicesResolveFail/index`,
	},
	{ routerName: 'wx.offLocalServiceLost', routerPath: `${interfacePath}network/offLocalServiceLost/index` },
	{ routerName: 'wx.offLocalServiceFound', routerPath: `${interfacePath}network/offLocalServiceFound/index` },
	{
		routerName: 'wx.offLocalServicesDiscoveryStop',
		routerPath: `${interfacePath}network/offLocalServicesDiscoveryStop/index`,
	},
	{ routerName: 'wx.createUDPSocket', routerPath: `${interfacePath}network/createUDPSocket/index` },
];

// 接口的数据缓存路由
let interfaceDataCacheRouter = [
	{ routerName: 'wx.setStorageSync', routerPath: `${interfacePath}dataCache/setStorageSync/index` },
	{ routerName: 'wx.setStorage', routerPath: `${interfacePath}dataCache/setStorage/index` },
	{ routerName: 'wx.removeStorageSync', routerPath: `${interfacePath}dataCache/removeStorageSync/index` },
	{ routerName: 'wx.removeStorage', routerPath: `${interfacePath}dataCache/removeStorage/index` },
	{ routerName: 'wx.getStorageSync', routerPath: `${interfacePath}dataCache/getStorageSync/index` },
	{ routerName: 'wx.getStorageInfoSync', routerPath: `${interfacePath}dataCache/getStorageInfoSync/index` },
	{ routerName: 'wx.getStorageInfo', routerPath: `${interfacePath}dataCache/getStorageInfo/index` },
	{ routerName: 'wx.getStorage', routerPath: `${interfacePath}dataCache/getStorage/index` },
	{ routerName: 'wx.cleanStorageSync', routerPath: `${interfacePath}dataCache/cleanStorageSync/index` },
	{ routerName: 'wx.cleanStorage', routerPath: `${interfacePath}dataCache/cleanStorage/index` },
	{ routerName: 'wx.setBackgroundFetchToken', routerPath: `${interfacePath}dataCache/setBackgroundFetchToken/index` },
	{ routerName: 'wx.onBackgroundFetchData', routerPath: `${interfacePath}dataCache/onBackgroundFetchData/index` },
	{ routerName: 'wx.getBackgroundFetchToken', routerPath: `${interfacePath}dataCache/getBackgroundFetchToken/index` },
	{ routerName: 'wx.getBackgroundFetchData', routerPath: `${interfacePath}dataCache/getBackgroundFetchData/index` },
];

// 接口的媒体路由
let interfaceMediaRouter = [
	{ routerName: 'wx.createMapContext', routerPath: `${interfacePath}media/createMapContext/index` },
	{ routerName: 'wx.saveImageToPhotoAlbum', routerPath: `${interfacePath}media/saveImageToPhotoAlbum/index` },
	{ routerName: 'wx.getImageInfo', routerPath: `${interfacePath}media/getImageInfo/index` },
	{ routerName: 'wx.compressImage', routerPath: `${interfacePath}media/compressImage/index` },
	{ routerName: 'wx.chooseMessageFile', routerPath: `${interfacePath}media/chooseMessageFile/index` },
	{ routerName: 'wx.chooseImage', routerPath: `${interfacePath}media/chooseImage/index` },
	{ routerName: 'wx.saveVideoToPhotoAlbum', routerPath: `${interfacePath}media/saveVideoToPhotoAlbum/index` },
	{ routerName: 'wx.getVideoInfo', routerPath: `${interfacePath}media/getVideoInfo/index` },
	{ routerName: 'wx.createVideoContext', routerPath: `${interfacePath}media/createVideoContext/index` },
	{ routerName: 'wx.compressVideo', routerPath: `${interfacePath}media/compressVideo/index` },
	{ routerName: 'wx.chooseVideo', routerPath: `${interfacePath}media/chooseVideo/index` },
	{ routerName: 'wx.chooseMedia', routerPath: `${interfacePath}media/chooseMedia/index` },
	{ routerName: 'wx.stopVoice', routerPath: `${interfacePath}media/stopVoice/index` },
	{ routerName: 'wx.setInnerAudioOption', routerPath: `${interfacePath}media/setInnerAudioOption/index` },
	{ routerName: 'wx.playVoice', routerPath: `${interfacePath}media/playVoice/index` },
	{ routerName: 'wx.getAvailableAudioContext', routerPath: `${interfacePath}media/getAvailableAudioContext/index` },
	{ routerName: 'wx.createAudioContext', routerPath: `${interfacePath}media/createAudioContext/index` },
	{ routerName: 'wx.stopBackgroundAudio', routerPath: `${interfacePath}media/stopBackgroundAudio/index` },
	{ routerName: 'wx.seekBackgroundAudio', routerPath: `${interfacePath}media/seekBackgroundAudio/index` },
	{ routerName: 'wx.playBackgroundAudio', routerPath: `${interfacePath}media/playBackgroundAudio/index` },
	{ routerName: 'wx.pauseBackgroundAudio', routerPath: `${interfacePath}media/pauseBackgroundAudio/index` },
	{ routerName: 'wx.onBackgroundAudioStop', routerPath: `${interfacePath}media/onBackgroundAudioStop/index` },
	{ routerName: 'wx.onBackgroundAudioPlay', routerPath: `${interfacePath}media/onBackgroundAudioPlay/index` },
	{ routerName: 'wx.onBackgroundAudioPause', routerPath: `${interfacePath}media/onBackgroundAudioPause/index` },
	{
		routerName: 'wx.getBackgroundAudioPlayerState',
		routerPath: `${interfacePath}media/getBackgroundAudioPlayerState/index`,
	},
	{ routerName: 'wx.getBackgroundManager', routerPath: `${interfacePath}media/getBackgroundManager/index` },
	{ routerName: 'wx.createLivePusherContext', routerPath: `${interfacePath}media/createLivePusherContext/index` },
	{ routerName: 'wx.createLivePlayerContext', routerPath: `${interfacePath}media/createLivePlayerContext/index` },
	{ routerName: 'wx.stopRecord', routerPath: `${interfacePath}media/stopRecord/index` },
	{ routerName: 'wx.startRecord', routerPath: `${interfacePath}media/startRecord/index` },
	{ routerName: 'wx.getRecordManager', routerPath: `${interfacePath}media/getRecordManager/index` },
	{ routerName: 'wx.createCameraContext', routerPath: `${interfacePath}media/createCameraContext/index` },
	{ routerName: 'wx.createMediaContainer', routerPath: `${interfacePath}media/createMediaContainer/index` },
	{ routerName: 'wx.createMediaRecorder', routerPath: `${interfacePath}media/createMediaRecorder/index` },
	{ routerName: 'wx.createVideoDecoder', routerPath: `${interfacePath}media/createVideoDecoder/index` },
];

// 接口的位置路由
let interfacePositionRouter = [
	{ routerName: 'wx.stopLocationUpdate', routerPath: `${interfacePath}position/stopLocationUpdate/index` },
	{
		routerName: 'wx.startLocationUpdateBackground',
		routerPath: `${interfacePath}position/startLocationUpdateBackground/index`,
	},
	{ routerName: 'wx.startLocationUpdate', routerPath: `${interfacePath}position/startLocationUpdate/index` },
	{ routerName: 'wx.openLocation', routerPath: `${interfacePath}position/openLocation/index` },
	{ routerName: 'wx.openLocationUpdate', routerPath: `${interfacePath}position/openLocationUpdate/index` },
	{ routerName: 'wx.offLocationUpdate', routerPath: `${interfacePath}position/offLocationUpdate/index` },
	{ routerName: 'wx.getLocation', routerPath: `${interfacePath}position/getLocation/index` },
	{ routerName: 'wx.chooseLocation', routerPath: `${interfacePath}position/chooseLocation/index` },
];

// 接口的转发路由
let interfaceForwardRouter = [
	{ routerName: 'wx.updateShareMenu', routerPath: `${interfacePath}forward/updateShareMenu/index` },
	{ routerName: 'wx.showShareMenu', routerPath: `${interfacePath}forward/showShareMenu/index` },
	{ routerName: 'wx.hideShareMenu', routerPath: `${interfacePath}forward/hideShareMenu/index` },
	{ routerName: 'wx.getShareInfo', routerPath: `${interfacePath}forward/getShareInfo/index` },
];

// 接口的画布路由
let interfaceCanvasRouter = [
	{ routerName: 'wx.createOffScreenCanvas', routerPath: `${interfacePath}canvas/createOffScreenCanvas/index` },
	{ routerName: 'wx.createCanvasContext', routerPath: `${interfacePath}canvas/createCanvasContext/index` },
	{ routerName: 'wx.canvasToTempFilePath', routerPath: `${interfacePath}canvas/canvasToTempFilePath/index` },
	{ routerName: 'wx.canvasPutImageData', routerPath: `${interfacePath}canvas/canvasPutImageData/index` },
	{ routerName: 'wx.canvasGetImageData', routerPath: `${interfacePath}canvas/canvasGetImageData/index` },
];

// 接口的文件路由
let interfaceFileRouter = [
	{ routerName: 'wx.saveFileToDisk', routerPath: `${interfacePath}file/saveFileToDisk/index` },
	{ routerName: 'wx.saveFile', routerPath: `${interfacePath}file/saveFile/index` },
	{ routerName: 'wx.removeSavedFile', routerPath: `${interfacePath}file/removeSavedFile/index` },
	{ routerName: 'wx.openDocument', routerPath: `${interfacePath}file/openDocument/index` },
	{ routerName: 'wx.getSaveFileList', routerPath: `${interfacePath}file/getSaveFileList/index` },
	{ routerName: 'wx.getSaveFileInfo', routerPath: `${interfacePath}file/getSaveFileInfo/index` },
	{ routerName: 'wx.getFileSystemManager', routerPath: `${interfacePath}file/getFileSystemManager/index` },
	{ routerName: 'wx.getFileInfo', routerPath: `${interfacePath}file/getFileInfo/index` },
];

// 接口的开放接口路由
let interfaceOpenInterFaceRouter = [
	{ routerName: 'wx.login', routerPath: `${interfacePath}openInterface/login/index` },
	{ routerName: 'wx.checkSession', routerPath: `${interfacePath}openInterface/checkSession/index` },
	{ routerName: 'wx.navigateToMiniProgram', routerPath: `${interfacePath}openInterface/navigateToMiniProgram/index` },
	{
		routerName: 'wx.navigateBackMiniProgram',
		routerPath: `${interfacePath}openInterface/navigateBackMiniProgram/index`,
	},
	{ routerName: 'wx.getAccountInfoSync', routerPath: `${interfacePath}openInterface/getAccountInfoSync/index` },
	{ routerName: 'wx.getUserInfo', routerPath: `${interfacePath}openInterface/getUserInfo/index` },
	{ routerName: 'wx.reportMonitor', routerPath: `${interfacePath}openInterface/reportMonitor/index` },
	{ routerName: 'wx.reportAnalytics', routerPath: `${interfacePath}openInterface/reportAnalytics/index` },
	{ routerName: 'wx.requestPayment', routerPath: `${interfacePath}openInterface/requestPayment/index` },
	{ routerName: 'wx.authorize', routerPath: `${interfacePath}openInterface/authorize/index` },
	{ routerName: 'wx.openSetting', routerPath: `${interfacePath}openInterface/openSetting/index` },
	{ routerName: 'wx.getSetting', routerPath: `${interfacePath}openInterface/getSetting/index` },
	{ routerName: 'wx.chooseAddress', routerPath: `${interfacePath}openInterface/chooseAddress/index` },
	{ routerName: 'wx.openCard', routerPath: `${interfacePath}openInterface/openCard/index` },
	{ routerName: 'wx.addCard', routerPath: `${interfacePath}openInterface/addCard/index` },
	{ routerName: 'wx.chooseInvoiceTitle', routerPath: `${interfacePath}openInterface/chooseInvoiceTitle/index` },
	{
		routerName: 'wx.startSoterAuthentication',
		routerPath: `${interfacePath}openInterface/startSoterAuthentication/index`,
	},
	{
		routerName: 'wx.checkIsSupportSoterAuthentication',
		routerPath: `${interfacePath}openInterface/checkIsSupportSoterAuthentication/index`,
	},
	{
		routerName: 'wx.checkIsSoterEnrolledInDevice',
		routerPath: `${interfacePath}openInterface/checkIsSoterEnrolledInDevice/index`,
	},
	{ routerName: 'wx.getWeRunData', routerPath: `${interfacePath}openInterface/getWeRunData/index` },
	{ routerName: 'wx.reportPerformance', routerPath: `${interfacePath}openInterface/reportPerformance/index` },
	{ routerName: 'wx.getPerformance', routerPath: `${interfacePath}openInterface/getPerformance/index` },
	{
		routerName: 'wx.requestSubscribeMessage',
		routerPath: `${interfacePath}openInterface/requestSubscribeMessage/index`,
	},
	{ routerName: 'wx.showRedPackage', routerPath: `${interfacePath}openInterface/showRedPackage/index` },
];

// 接口的设备路由
let interfaceDeviceRouter = [
	{
		routerName: 'wx.onBLEPeripheralConnectionStateChanged',
		routerPath: `${interfacePath}device/onBLEPeripheralConnectionStateChanged/index`,
	},
	{
		routerName: 'wx.offBLEPeripheralConnectionStateChanged',
		routerPath: `${interfacePath}device/offBLEPeripheralConnectionStateChanged/index`,
	},
	{
		routerName: 'wx.createBLEPeripheralServer',
		routerPath: `${interfacePath}device/createBLEPeripheralServer/index`,
	},
	{ routerName: 'wx.stopBeaconDiscovery', routerPath: `${interfacePath}device/stopBeaconDiscovery/index` },
	{ routerName: 'wx.startBeaconDiscovery', routerPath: `${interfacePath}device/startBeaconDiscovery/index` },
	{ routerName: 'wx.onBeaconUpdate', routerPath: `${interfacePath}device/onBeaconUpdate/index` },
	{ routerName: 'wx.onBeaconServiceChange', routerPath: `${interfacePath}device/onBeaconServiceChange/index` },
	{ routerName: 'wx.offBeaconUpdate', routerPath: `${interfacePath}device/offBeaconUpdate/index` },
	{ routerName: 'wx.offBeaconServiceChange', routerPath: `${interfacePath}device/offBeaconServiceChange/index` },
	{ routerName: 'wx.getBeacons', routerPath: `${interfacePath}device/getBeacons/index` },
	{ routerName: 'wx.stopHCE', routerPath: `${interfacePath}device/stopHCE/index` },
	{ routerName: 'wx.startHCE', routerPath: `${interfacePath}device/startHCE/index` },
	{ routerName: 'wx.sendHCEMessage', routerPath: `${interfacePath}device/sendHCEMessage/index` },
	{ routerName: 'wx.onHCEMessage', routerPath: `${interfacePath}device/onHCEMessage/index` },
	{ routerName: 'wx.offHCEMessage', routerPath: `${interfacePath}device/offHCEMessage/index` },
	{ routerName: 'wx.getNFCAdapter', routerPath: `${interfacePath}device/getNFCAdapter/index` },
	{ routerName: 'wx.getHCEState', routerPath: `${interfacePath}device/getHCEState/index` },
	{ routerName: 'wx.stopWifi', routerPath: `${interfacePath}device/stopWifi/index` },
	{ routerName: 'wx.startWifi', routerPath: `${interfacePath}device/startWifi/index` },
	{ routerName: 'wx.setWifiList', routerPath: `${interfacePath}device/setWifiList/index` },
	{ routerName: 'wx.onWifiConnected', routerPath: `${interfacePath}device/onWifiConnected/index` },
	{ routerName: 'wx.onGetWifiList', routerPath: `${interfacePath}device/onGetWifiList/index` },
	{ routerName: 'wx.offWifiConnected', routerPath: `${interfacePath}device/offWifiConnected/index` },
	{ routerName: 'wx.offGetWifiList', routerPath: `${interfacePath}device/offGetWifiList/index` },
	{ routerName: 'wx.getWifiList', routerPath: `${interfacePath}device/getWifiList/index` },
	{ routerName: 'wx.getConnectedWifi', routerPath: `${interfacePath}device/getConnectedWifi/index` },
	{ routerName: 'wx.connectWifi', routerPath: `${interfacePath}device/connectWifi/index` },
	{ routerName: 'wx.setBLEMTU', routerPath: `${interfacePath}device/setBLEMTU/index` },
	{
		routerName: 'wx.readBLECharacteristicValue',
		routerPath: `${interfacePath}device/readBLECharacteristicValue/index`,
	},
	{
		routerName: 'wx.onBLEConnectionStateChange',
		routerPath: `${interfacePath}device/onBLEConnectionStateChange/index`,
	},
	{
		routerName: 'wx.onBLECharacteristicValueChange',
		routerPath: `${interfacePath}device/onBLECharacteristicValueChange/index`,
	},
	{
		routerName: 'wx.offBLEConnectionStateChange',
		routerPath: `${interfacePath}device/offBLEConnectionStateChange/index`,
	},
	{
		routerName: 'wx.offBLECharacteristicValueChange',
		routerPath: `${interfacePath}device/offBLECharacteristicValueChange/index`,
	},
	{
		routerName: 'wx.notifyBLECharacteristicValueChange',
		routerPath: `${interfacePath}device/notifyBLECharacteristicValueChange/index`,
	},
	{ routerName: 'wx.getBLEDeviceServices', routerPath: `${interfacePath}device/getBLEDeviceServices/index` },
	{ routerName: 'wx.getBLEDeviceRSSI', routerPath: `${interfacePath}device/getBLEDeviceRSSI/index` },
	{
		routerName: 'wx.getBLEDeviceCharacteristics',
		routerPath: `${interfacePath}device/getBLEDeviceCharacteristics/index`,
	},
	{ routerName: 'wx.createBLEConnection', routerPath: `${interfacePath}device/createBLEConnection/index` },
	{ routerName: 'wx.closeBLEConnection', routerPath: `${interfacePath}device/closeBLEConnection/index` },
	{
		routerName: 'wx.writeBLECharacteristicValue',
		routerPath: `${interfacePath}device/writeBLECharacteristicValue/index`,
	},
	{ routerName: 'wx.addPhoneContact', routerPath: `${interfacePath}device/addPhoneContact/index` },
	{
		routerName: 'wx.stopBluetoothDevicesDiscovery',
		routerPath: `${interfacePath}device/stopBluetoothDevicesDiscovery/index`,
	},
	{
		routerName: 'wx.startBluetoothDevicesDiscovery',
		routerPath: `${interfacePath}device/startBluetoothDevicesDiscovery/index`,
	},
	{ routerName: 'wx.openBluetoothAdapter', routerPath: `${interfacePath}device/openBluetoothAdapter/index` },
	{ routerName: 'wx.onBluetoothDeviceFound', routerPath: `${interfacePath}device/onBluetoothDeviceFound/index` },
	{
		routerName: 'wx.onBluetoothAdapterStateChange',
		routerPath: `${interfacePath}device/onBluetoothAdapterStateChange/index`,
	},
	{ routerName: 'wx.offBluetoothDeviceFound', routerPath: `${interfacePath}device/offBluetoothDeviceFound/index` },
	{
		routerName: 'wx.offBluetoothAdapterStateChange',
		routerPath: `${interfacePath}device/offBluetoothAdapterStateChange/index`,
	},
	{
		routerName: 'wx.getConnectedBluetoothDevices',
		routerPath: `${interfacePath}device/getConnectedBluetoothDevices/index`,
	},
	{ routerName: 'wx.getBluetoothDevices', routerPath: `${interfacePath}device/getBluetoothDevices/index` },
	{ routerName: 'wx.getBluetoothAdapterState', routerPath: `${interfacePath}device/getBluetoothAdapterState/index` },
	{ routerName: 'wx.closeBluetoothAdapter', routerPath: `${interfacePath}device/closeBluetoothAdapter/index` },
	{ routerName: 'wx.getBatteryInfoSync', routerPath: `${interfacePath}device/getBatteryInfoSync/index` },
	{ routerName: 'wx.getBatteryInfo', routerPath: `${interfacePath}device/getBatteryInfo/index` },
	{ routerName: 'wx.setClipboardData', routerPath: `${interfacePath}device/setClipboardData/index` },
	{ routerName: 'wx.getClipboardData', routerPath: `${interfacePath}device/getClipboardData/index` },
	{ routerName: 'wx.onNetworkStatusChange', routerPath: `${interfacePath}device/onNetworkStatusChange/index` },
	{ routerName: 'wx.offNetworkStatusChange', routerPath: `${interfacePath}device/offNetworkStatusChange/index` },
	{ routerName: 'wx.getNetworkType', routerPath: `${interfacePath}device/getNetworkType/index` },
	{ routerName: 'wx.setScreenBrightness', routerPath: `${interfacePath}device/setScreenBrightness/index` },
	{ routerName: 'wx.setKeepScreenOn', routerPath: `${interfacePath}device/setKeepScreenOn/index` },
	{ routerName: 'wx.onUserCaptureScreen', routerPath: `${interfacePath}device/onUserCaptureScreen/index` },
	{ routerName: 'wx.offUserCaptureScreen', routerPath: `${interfacePath}device/offUserCaptureScreen/index` },
	{ routerName: 'wx.getScreenBrightness', routerPath: `${interfacePath}device/getScreenBrightness/index` },
	{ routerName: 'wx.makePhoneCall', routerPath: `${interfacePath}device/makePhoneCall/index` },
	{ routerName: 'wx.stopAccelerometer', routerPath: `${interfacePath}device/stopAccelerometer/index` },
	{ routerName: 'wx.startAccelerometer', routerPath: `${interfacePath}device/startAccelerometer/index` },
	{ routerName: 'wx.onAccelerometerChange', routerPath: `${interfacePath}device/onAccelerometerChange/index` },
	{ routerName: 'wx.offAccelerometerChange', routerPath: `${interfacePath}device/offAccelerometerChange/index` },
	{ routerName: 'wx.stopCompass', routerPath: `${interfacePath}device/stopCompass/index` },
	{ routerName: 'wx.startCompass', routerPath: `${interfacePath}device/startCompass/index` },
	{ routerName: 'wx.onCompassChange', routerPath: `${interfacePath}device/onCompassChange/index` },
	{ routerName: 'wx.offCompassChange', routerPath: `${interfacePath}device/offCompassChange/index` },
	{
		routerName: 'wx.stopDeviceMotionListening',
		routerPath: `${interfacePath}device/stopDeviceMotionListening/index`,
	},
	{
		routerName: 'wx.startDeviceMotionListening',
		routerPath: `${interfacePath}device/startDeviceMotionListening/index`,
	},
	{
		routerName: 'wx.onDeviceMotionChange',
		routerPath: `${interfacePath}device/onDeviceMotionChange/index`,
	},
	{ routerName: 'wx.offDeviceMotionChange', routerPath: `${interfacePath}device/offDeviceMotionChange/index` },
	{ routerName: 'wx.stopGyroscope', routerPath: `${interfacePath}device/stopGyroscope/index` },
	{ routerName: 'wx.startGyroscope', routerPath: `${interfacePath}device/startGyroscope/index` },
	{ routerName: 'wx.onGyroscopeChange', routerPath: `${interfacePath}device/onGyroscopeChange/index` },
	{ routerName: 'wx.offGyroscopeChange', routerPath: `${interfacePath}device/offGyroscopeChange/index` },
	{ routerName: 'wx.onMemoryWarning', routerPath: `${interfacePath}device/onMemoryWarning/index` },
	{ routerName: 'wx.offMemoryWarning', routerPath: `${interfacePath}device/offMemoryWarning/index` },
	{ routerName: 'wx.scanCode', routerPath: `${interfacePath}device/scanCode/index` },
	{ routerName: 'wx.vibrateShort', routerPath: `${interfacePath}device/vibrateShort/index` },
	{ routerName: 'wx.vibrateLong', routerPath: `${interfacePath}device/vibrateLong/index` },
];

// 接口的worker路由
let interfaceWorkerRouter = [
	{ routerName: 'wx.createWorker', routerPath: `${interfacePath}worker/createWorker/index` },
];

// 接口的第三方平台路由
let interfaceThirdPartyPlatformRouter = [
	{ routerName: 'wx.getExtConfigSync', routerPath: `${interfacePath}thirdPartyPlatform/getExtConfigSync/index` },
	{ routerName: 'wx.getExtConfig', routerPath: `${interfacePath}thirdPartyPlatform/getExtConfig/index` },
];

// 接口的WXML路由
let interfaceWXMLRouter = [
	{ routerName: 'wx.createSelectorQuery', routerPath: `${interfacePath}WXML/createSelectorQuery/index` },
	{
		routerName: 'wx.createIntersectionObserver',
		routerPath: `${interfacePath}WXML/createIntersectionObserver/index`,
	},
];

// 接口的广告路由
let interfaceAdRouter = [
	{ routerName: 'wx.createRewardedVideoAd', routerPath: `${interfacePath}ad/createRewardedVideoAd/index` },
	{
		routerName: 'wx.createInterstitialAd',
		routerPath: `${interfacePath}ad/createInterstitialAd/index`,
	},
];

// 云开发的用户鉴权路由
let cloudDevelopUserAuthenticationRouter = [
	{ routerName: '获取OpenID', routerPath: `${cloudDevelopPath}userAuthentication/getOpenID/index` },
];

// 云开发的数据库路由
let cloudDevelopDataBaseRouter = [
	{ routerName: '基本操作', routerPath: `${cloudDevelopPath}dataBase/basicOperate/index` },
	{ routerName: '权限管理', routerPath: `${cloudDevelopPath}dataBase/authorizationManagement/index` },
	{ routerName: '服务端时间', routerPath: `${cloudDevelopPath}dataBase/severTime/index` },
];

// 云开发的储存路由
let cloudDevelopStorageRouter = [
	{ routerName: '上传文件', routerPath: `${cloudDevelopPath}storage/uploadFile/index` },
	{ routerName: '下载文件', routerPath: `${cloudDevelopPath}storage/downloadFile/index` },
	{ routerName: '删除文件', routerPath: `${cloudDevelopPath}storage/removeFile/index` },
	{ routerName: '换区临时链接', routerPath: `${cloudDevelopPath}storage/getTempLinking/index` },
	{ routerName: '组件支持', routerPath: `${cloudDevelopPath}storage/componentSupport/index` },
];

// 云开发的云函数路由
let cloudDevelopCloudFunctionRouter = [
	{ routerName: 'WXContext', routerPath: `${cloudDevelopPath}cloudFunction/WXContext/index` },
	{ routerName: '数据库', routerPath: `${cloudDevelopPath}cloudFunction/dataBase/index` },
	{ routerName: '存储', routerPath: `${cloudDevelopPath}cloudFunction/storage/index` },
	{ routerName: '云调用', routerPath: `${cloudDevelopPath}cloudFunction/cloudCall/index` },
];

let routers = {
	officialComponent: {
		officialViewContainerRouter,
		officialBasicContentRouter,
		officialFormComponentRouter,
		officialNavigationRouter,
		officialMediaRouter,
		officialMapRouter,
		officialCanvasRouter,
		officialOpenAbilityRouter,
	},
	extendComponent: {
		extendComponentFormComponentRouter,
		extendComponentBasicContentRouter,
		extendComponentOperationalFeedbackRouter,
		extendComponentNavigationRouter,
		extendComponentSearchRouter,
	},
	interFace: {
		interfaceBasicRouter,
		interfaceRouterObj,
		interfacePageRouter,
		interfaceNetworkRouter,
		interfaceDataCacheRouter,
		interfaceMediaRouter,
		interfacePositionRouter,
		interfaceForwardRouter,
		interfaceCanvasRouter,
		interfaceFileRouter,
		interfaceOpenInterFaceRouter,
		interfaceDeviceRouter,
		interfaceWorkerRouter,
		interfaceThirdPartyPlatformRouter,
		interfaceWXMLRouter,
		interfaceAdRouter,
	},
	cloudDevelop: {
		cloudDevelopUserAuthenticationRouter,
		cloudDevelopDataBaseRouter,
		cloudDevelopStorageRouter,
		cloudDevelopCloudFunctionRouter,
	},
};

// let routers = [
//   { content: '', icon: '', routerName: "component", routerPath: 'pages/tabBar/component/component' },
//   { routerName: "extendComponent", routerPath: 'pages/tabBar/extendComponent/extendComponent' },
//   { content: '', icon: '', routerName: "cloudDevelop", routerPath: 'pages/tabBar/interface/interface' },
//   { routerName: "interface", routerPath: 'pages/tabBar/cloudDevelop/cloudDevelop' },
// ]

export default routers;
