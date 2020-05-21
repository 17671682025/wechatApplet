
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
	{ routerName: 'function-page-navigator', routerPath: `${officialComponentPath}navigation/functionPageNavigator/index` },
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
let officialMapRouter = [
  { routerName: "map", routerPath: `${officialComponentPath}map/map/index` },
];

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
  { routerName: "searchBar", routerPath: `${extendComponentPath}search/searchBar/index` },
]

// 接口的开放接口路由
let interfaceOpenInterFaceRouter = [
	{ routerName: '微信登录', routerPath: `${interfacePath}openInterface/wxLogin/index` },
	{ routerName: '获取用户信息', routerPath: `${interfacePath}openInterface/getUserInfo/index` },
	{ routerName: '发起支付', routerPath: `${interfacePath}openInterface/launchPay/index` },
	{ routerName: '转发', routerPath: `${interfacePath}openInterface/forward/index` },
	{ routerName: '转发按钮', routerPath: `${interfacePath}openInterface/forwardButton/index` },
	{ routerName: '客户消息', routerPath: `${interfacePath}openInterface/customerServiceInformation/index` },
	{ routerName: '订阅消息', routerPath: `${interfacePath}openInterface/subscribeInformation/index` },
	{ routerName: '收货地址', routerPath: `${interfacePath}openInterface/receiveAddress/index` },
	{ routerName: '获取发票抬头', routerPath: `${interfacePath}openInterface/getInvoiceHead/index` },
	{ routerName: '生物认证', routerPath: `${interfacePath}openInterface/biometricCertification/index` },
	{ routerName: '设置', routerPath: `${interfacePath}openInterface/setting/index` },
];

// 接口的界面路由
let interfacePageRouter = [
	{ routerName: '设置界面标题', routerPath: `${interfacePath}page/setPageTitle/index` },
	{ routerName: '标题加载在动画', routerPath: `${interfacePath}page/titleBarBarLoading/index` },
	{ routerName: '设置TabBar', routerPath: `${interfacePath}page/setTabBar/index` },
	{ routerName: '页面跳转', routerPath: `${interfacePath}page/navigation/index` },
	{ routerName: '下拉刷新', routerPath: `${interfacePath}page/dropDownRefresh/index` },
	{ routerName: '创建动画', routerPath: `${interfacePath}page/createAnimation/index` },
	{ routerName: '创建绘画', routerPath: `${interfacePath}page/createPainting/index` },
	{ routerName: '显示操作菜单', routerPath: `${interfacePath}page/showOperateMenu/index` },
	{ routerName: '显示模态弹框', routerPath: `${interfacePath}page/showDialog/index` },
	{ routerName: '页面滚动', routerPath: `${interfacePath}page/pageScroll/index` },
	{ routerName: '显示消息提示框', routerPath: `${interfacePath}page/showMessageDialog/index` },
	{ routerName: '获取WXML节点信息', routerPath: `${interfacePath}page/getWXMLNodeInfo/index` },
	{ routerName: 'WXML节点布局相交状态', routerPath: `${interfacePath}page/WXMLNodeLayoutIntersectionStatus/index` },
];

// 接口的设备路由
let interfaceDeviceRouter = [
	{ routerName: '获取手机网络状态', routerPath: `${interfacePath}device/getPhoneNetworkStatus/index` },
	{ routerName: '获取手机网络变化', routerPath: `${interfacePath}device/monitorPhoneNetworkChange/index` },
	{ routerName: '获取手机系统信息', routerPath: `${interfacePath}device/getPhoneSystemInformation/index` },
	{ routerName: '监听重力感应数据', routerPath: `${interfacePath}device/monitorGravitySensingData/index` },
	{ routerName: '监听罗盘数据', routerPath: `${interfacePath}device/monitorCompassData/index` },
	{ routerName: '打电话', routerPath: `${interfacePath}device/callPhone/index` },
	{ routerName: '扫码', routerPath: `${interfacePath}device/scanningCode/index` },
	{ routerName: '剪贴板', routerPath: `${interfacePath}device/clipboard/index` },
	{ routerName: '蓝牙', routerPath: `${interfacePath}device/bluetooth/index` },
	{ routerName: 'iBeacon', routerPath: `${interfacePath}device/iBeacon/index` },
	{ routerName: '屏幕亮度', routerPath: `${interfacePath}device/screenBrightness/index` },
	{ routerName: '用户截屏事件', routerPath: `${interfacePath}device/userScreenShotEvent/index` },
	{ routerName: '振动', routerPath: `${interfacePath}device/vibration/index` },
	{ routerName: '手机联系人', routerPath: `${interfacePath}device/phoneContact/index` },
	{ routerName: 'wiFi', routerPath: `${interfacePath}device/wiFi/index` },
];

// 接口的网络路由
let interfaceNetworkRouter = [
	{ routerName: '发起请求', routerPath: `${interfacePath}network/launchRequest/index` },
	{ routerName: 'webSocket', routerPath: `${interfacePath}network/webSocket/index` },
	{ routerName: '上传文件', routerPath: `${interfacePath}network/uploadFile/index` },
	{ routerName: '下载文件', routerPath: `${interfacePath}network/downloadFile/index` },
];

// 接口的媒体路由
let interfaceMediaRouter = [
	{ routerName: '图片', routerPath: `${interfacePath}media/image/index` },
	{ routerName: '录音', routerPath: `${interfacePath}media/recorded/index` },
	{ routerName: '背景音频', routerPath: `${interfacePath}media/backgroundAudio/index` },
	{ routerName: '文件', routerPath: `${interfacePath}media/file/index` },
	{ routerName: '视频', routerPath: `${interfacePath}media/video/index` },
	{ routerName: '动态加载字体', routerPath: `${interfacePath}media/dynamicallyLoadFonts/index` },
];

// 接口的位置路由
let interfacePositionRouter = [
	{ routerName: '获取当前位置', routerPath: `${interfacePath}position/getCurrentPosition/index` },
	{ routerName: '使用原生地图查看位置', routerPath: `${interfacePath}position/viewPositionByNativeMap/index` },
	{ routerName: '使用原生地图选择位置', routerPath: `${interfacePath}position/selectPositionByNativeMap/index` },
];

// 接口的数据路由
let interfaceDataRouter = [
  { routerName: "数据", routerPath: `${interfacePath}data/data/index` },
]

// 接口的多进程路由
let interfaceMultiThreadRouter = [
	{ routerName: '多线程', routerPath: `${interfacePath}multiThread/multiThread/index` },
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




let routers={
  officialComponent:{
    officialViewContainerRouter,
    officialBasicContentRouter,
    officialFormComponentRouter,
    officialNavigationRouter,
    officialMediaRouter,
    officialMapRouter,
    officialCanvasRouter,
    officialOpenAbilityRouter, 
  },
  extendComponent:{
    extendComponentFormComponentRouter,
    extendComponentBasicContentRouter,
    extendComponentOperationalFeedbackRouter,
    extendComponentNavigationRouter,
    extendComponentSearchRouter, 
  },
  interFace:{
    interfaceOpenInterFaceRouter,
    interfacePageRouter,
    interfaceDeviceRouter,
    interfaceNetworkRouter,
    interfaceMediaRouter,
    interfacePositionRouter,
    interfaceDataRouter,
    interfaceMultiThreadRouter
  },
  cloudDevelop:{
    cloudDevelopUserAuthenticationRouter,
    cloudDevelopDataBaseRouter,
    cloudDevelopStorageRouter,
    cloudDevelopCloudFunctionRouter,
  }
}



// let routers = [
//   { content: '', icon: '', routerName: "component", routerPath: 'pages/tabBar/component/component' },
//   { routerName: "extendComponent", routerPath: 'pages/tabBar/extendComponent/extendComponent' },
//   { content: '', icon: '', routerName: "cloudDevelop", routerPath: 'pages/tabBar/interface/interface' },
//   { routerName: "interface", routerPath: 'pages/tabBar/cloudDevelop/cloudDevelop' },
// ]



export default routers;