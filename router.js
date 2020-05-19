
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
  { routerName: "view", routerPath: `${officialComponentPath}view/index` },
  { routerName: "scroll-view", routerPath: `${officialComponentPath}scrollView/index` },
  { routerName: "swiper", routerPath: `${officialComponentPath}swiper/index` },
  { routerName: "movable-view", routerPath: `${officialComponentPath}movableView/index` },
  { routerName: "cover-view", routerPath: `${officialComponentPath}coverView/index` },
];

// 官方组件的基础内容组件路由
let officialBasicContentRouter=[
  { routerName: "text", routerPath: `${officialComponentPath}text/index` },
  { routerName: "icon", routerPath: `${officialComponentPath}icon/index` },
  { routerName: "progress", routerPath: `${officialComponentPath}progress/index` },
  { routerName: "rich-text", routerPath: `${officialComponentPath}richText/index` },
];


// 官方组件的表单组件路由
let officialFormComponentRouter = [
  { routerName: "button", routerPath: `${officialComponentPath}button/index` },
  { routerName: "checkbox", routerPath: `${officialComponentPath}checkbox/index` },
  { routerName: "form", routerPath: `${officialComponentPath}form/index` },
  { routerName: "input", routerPath: `${officialComponentPath}input/index` },
  { routerName: "label", routerPath: `${officialComponentPath}label/index` },
  { routerName: "picker", routerPath: `${officialComponentPath}picker/index` },
  { routerName: "picker-view", routerPath: `${officialComponentPath}pickerView/index` },
  { routerName: "radio", routerPath: `${officialComponentPath}radio/index` },
  { routerName: "slider", routerPath: `${officialComponentPath}slider/index` },
  { routerName: "switch", routerPath: `${officialComponentPath}switch/index` },
  { routerName: "textarea", routerPath: `${officialComponentPath}textArea/index` },
  { routerName: "editor", routerPath: `${officialComponentPath}editor/index` },
];

// 官方组件的导航组件路由
let officialNavigationRouter = [
  { routerName: "navigator", routerPath: `${officialComponentPath}navigator/index` }
];

// 官方组件的媒体组件路由
let officialMediaRouter = [
  { routerName: "image", routerPath: `${officialComponentPath}image/index` },
  { routerName: "audio", routerPath: `${officialComponentPath}audio/index` },
  { routerName: "video", routerPath: `${officialComponentPath}video/index` },
  { routerName: "camera", routerPath: `${officialComponentPath}camera/index` }
];

// 官方组件的地图组件路由
let officialMapRouter = [
  { routerName: "map", routerPath: `${officialComponentPath}map/index` },
];

// 官方组件的画布组件路由
let officialCanvasRouter = [
  { routerName: "canvas", routerPath: `${officialComponentPath}canvas/index` },
];

// 官方组件的开放能力组件路由
let officialOpenAbilityRouter = [
  { routerName: "ad", routerPath: `${officialComponentPath}ad/index` },
  { routerName: "open-data", routerPath: `${officialComponentPath}openData/index` },
  { routerName: "web-view", routerPath: `${officialComponentPath}webView/index` },
];

// 扩展组件的表单组组件路由
let extendComponentFormComponentRouter=[
  { routerName: "cell", routerPath: `${extendComponentPath}cell/index` },
  { routerName: "slideView", routerPath: `${extendComponentPath}slideView/index` },
  { routerName: "form", routerPath: `${extendComponentPath}form/index` },
  { routerName: "uploader", routerPath: `${extendComponentPath}uploader/index` }
]

// 扩展组件的基础组组件路由
let extendComponentBasicContentRouter = [
  { routerName: "article", routerPath: `${extendComponentPath}article/index` },
  { routerName: "icons", routerPath: `${extendComponentPath}icons/index` },
  { routerName: "badge", routerPath: `${extendComponentPath}badge/index` },
  { routerName: "flex", routerPath: `${extendComponentPath}flex/index` },
  { routerName: "footer", routerPath: `${extendComponentPath}footer/index` },
  { routerName: "gallery", routerPath: `${extendComponentPath}gallery/index` },
  { routerName: "grid", routerPath: `${extendComponentPath}grid/index` },
  { routerName: "loadMore", routerPath: `${extendComponentPath}loadMore/index` },
  { routerName: "loading", routerPath: `${extendComponentPath}loading/index` },
  { routerName: "panel", routerPath: `${extendComponentPath}icons/index` },
  { routerName: "preView", routerPath: `${extendComponentPath}preView/index` },
]

// 扩展组件的操作反馈组组件路由
let extendComponentOperationalFeedbackRouter = [
  { routerName: "dialog", routerPath: `${extendComponentPath}dialog/index` },
  { routerName: "msg", routerPath: `${extendComponentPath}msg/index` },
  { routerName: "halfScreenDialog", routerPath: `${extendComponentPath}halfScreenDialog/index` },
  { routerName: "actionSheet", routerPath: `${extendComponentPath}actionSheet/index` }
]

// 扩展组件的导航组件路由
let extendComponentNavigationRouter = [
  { routerName: "navigation", routerPath: `${extendComponentPath}navigation/index` },
  { routerName: "tabBar", routerPath: `${extendComponentPath}tabBar/index` },
]

// 扩展组件的搜索组组件路由
let extendComponentSearchRouter = [
  { routerName: "searchBar", routerPath: `${extendComponentPath}searchBar/index` },
]

// 接口的开放接口路由
let interfaceOpenInterFaceRouter=[
  { routerName: "微信登录", routerPath: `${interfacePath}wxLogin/index` },
  { routerName: "获取用户信息", routerPath: `${interfacePath}getUserInfo/index` },
  { routerName: "发起支付", routerPath: `${interfacePath}launchPay/index` },
  { routerName: "转发", routerPath: `${interfacePath}forward/index` },
  { routerName: "转发按钮", routerPath: `${interfacePath}forwardButton/index` },
  { routerName: "客户消息", routerPath: `${interfacePath}customerServiceInformation/index` },
  { routerName: "订阅消息", routerPath: `${interfacePath}subscribeInformation/index` },
  { routerName: "收货地址", routerPath: `${interfacePath}receiveAddress/index` },
  { routerName: "获取发票抬头", routerPath: `${interfacePath}getInvoiceHead/index` },
  { routerName: "生物认证", routerPath: `${interfacePath}biometricCertification/index` },
  { routerName: "设置", routerPath: `${interfacePath}setting/index` },
]

// 接口的界面路由
let interfacePageRouter = [
  { routerName: "设置界面标题", routerPath: `${interfacePath}setPageTitle/index` },
  { routerName: "标题加载在动画", routerPath: `${interfacePath}titleBarBarLoading/index` },
  { routerName: "设置TabBar", routerPath: `${interfacePath}setTabBar/index` },
  { routerName: "页面跳转", routerPath: `${interfacePath}navigation/index` },
  { routerName: "下拉刷新", routerPath: `${interfacePath}dropDownRefresh/index` },
  { routerName: "创建动画", routerPath: `${interfacePath}createAnimation/index` },
  { routerName: "创建绘画", routerPath: `${interfacePath}createPainting/index` },
  { routerName: "显示操作菜单", routerPath: `${interfacePath}showOperateMenu/index` },
  { routerName: "显示模态弹框", routerPath: `${interfacePath}showDialog/index` },
  { routerName: "页面滚动", routerPath: `${interfacePath}pageScroll/index` },
  { routerName: "显示消息提示框", routerPath: `${interfacePath}showMessageDialog/index` },
  { routerName: "获取WXML节点信息", routerPath: `${interfacePath}getWXMLNodeInfo/index` },
  { routerName: "WXML节点布局相交状态", routerPath: `${interfacePath}WXMLNodeLayoutIntersectionStatus/index` },
]

// 接口的设备路由
let interfaceDeviceRouter = [
  { routerName: "获取手机网络状态", routerPath: `${interfacePath}getPhoneNetworkStatus/index` },
  { routerName: "获取手机网络变化", routerPath: `${interfacePath}monitorPhoneNetworkChange/index` },
  { routerName: "获取手机系统信息", routerPath: `${interfacePath}getPhoneSystemInformation/index` }, 
  { routerName: "监听重力感应数据", routerPath: `${interfacePath}monitorGravitySensingData/index` },
  { routerName: "监听罗盘数据", routerPath: `${interfacePath}monitorCompassData/index` },
  { routerName: "打电话", routerPath: `${interfacePath}callPhone/index` },
  { routerName: "扫码", routerPath: `${interfacePath}scanningCode/index` },
  { routerName: "剪贴板", routerPath: `${interfacePath}clipboard/index` },
  { routerName: "蓝牙", routerPath: `${interfacePath}bluetooth/index` },
  { routerName: "iBeacon", routerPath: `${interfacePath}iBeacon/index` },
  { routerName: "屏幕亮度", routerPath: `${interfacePath}screenBrightness/index` },
  { routerName: "用户截屏事件", routerPath: `${interfacePath}userScreenShotEvent/index` },
  { routerName: "振动", routerPath: `${interfacePath}vibration/index` },
  { routerName: "手机联系人", routerPath: `${interfacePath}phoneContact/index` },
  { routerName: "wiFi", routerPath: `${interfacePath}wiFi/index` },
]

// 接口的网络路由
let interfaceNetworkRouter = [
  { routerName: "发起请求", routerPath: `${interfacePath}launchRequest/index` },
  { routerName: "webSocket", routerPath: `${interfacePath}webSocket/index` },
  { routerName: "上传文件", routerPath: `${interfacePath}uploadFile/index` },
  { routerName: "下载文件", routerPath: `${interfacePath}downloadFile/index` },
]

// 接口的媒体路由
let interfaceMediaRouter = [
  { routerName: "图片", routerPath: `${interfacePath}image/index` },
  { routerName: "录音", routerPath: `${interfacePath}recorded/index` },
  { routerName: "背景音频", routerPath: `${interfacePath}backgroundAudio/index` },
  { routerName: "文件", routerPath: `${interfacePath}file/index` },
  { routerName: "视频", routerPath: `${interfacePath}video/index` },
  { routerName: "动态加载字体", routerPath: `${interfacePath}dynamicallyLoadFonts/index` },
]

// 接口的位置路由
let interfacePositionRouter = [
  { routerName: "获取当前位置", routerPath: `${interfacePath}getCurrentPosition/index` },
  { routerName: "使用原生地图查看位置", routerPath: `${interfacePath}viewPositionByNativeMap/index` },
  { routerName: "使用原生地图选择位置", routerPath: `${interfacePath}selectPositionByNativeMap/index` },
]

// 接口的数据路由
let interfaceDataRouter = [
  { routerName: "数据", routerPath: `${interfacePath}data/index` },
]

// 接口的多进程路由
let interfaceMultiThreadRouter = [
  { routerName: "多线程", routerPath: `${interfacePath}multiThread/index` },
]

// 云开发的用户鉴权路由
let cloudDevelopUserAuthenticationRouter = [
  { routerName: "获取OpenID", routerPath: `${cloudDevelopPath}getOpenID/index` },
]


// 云开发的数据库路由
let cloudDevelopDataBaseRouter = [
  { routerName: "基本操作", routerPath: `${cloudDevelopPath}basicOperate/index` },
  { routerName: "权限管理", routerPath: `${cloudDevelopPath}authorizationManagement/index` },
  { routerName: "服务端时间", routerPath: `${cloudDevelopPath}severTime/index` },
]


// 云开发的储存路由
let cloudDevelopStorageRouter = [
  { routerName: "上传文件", routerPath: `${cloudDevelopPath}uploadFile/index` },
  { routerName: "下载文件", routerPath: `${cloudDevelopPath}downloadFile/index` },
  { routerName: "删除文件", routerPath: `${cloudDevelopPath}removeFile/index` },
  { routerName: "换区临时链接", routerPath: `${cloudDevelopPath}getTempLinking/index` },
  { routerName: "组件支持", routerPath: `${cloudDevelopPath}componentSupport/index` },
]

// 云开发的云函数路由
let cloudDevelopCloudFunctionRouter = [
  { routerName: "WXContext", routerPath: `${cloudDevelopPath}WXContext/index` },
  { routerName: "数据库", routerPath: `${cloudDevelopPath}dataBase/index` },
  { routerName: "存储", routerPath: `${cloudDevelopPath}storage/index` },
  { routerName: "云调用", routerPath: `${cloudDevelopPath}cloudCall/index` },
]




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