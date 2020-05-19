
import Routers from "../../router"

/**
 * 产生对应的数据 根据路由list
 * @param {*} routerList 路由list
 */
function createDataSource (routerList) {
  let fList = [];
  routerList.map((item, index) => {
    const { routerName = '', routerPath } = item;
    let uniqueMark = `unique_${routerName}${index}`;
    let obj = createNavigateObj(routerName, routerName, routerPath, uniqueMark);
    fList.push(obj)
  })
  return fList
}

/**
 * 生成跳转的路由对象
 * @param {*} value 显示内容
 * @param {*} routerName 路由名
 * @param {*} routerPath 路由path
 * @param {*} id 唯一标识
 * @param {*} icon 右边图标
 */
function createNavigateObj (value, routerName, routerPath, id, icon = '') {
  return {
		routerName,
		routerPath: '/' + routerPath,
		value,
		unique: id,
		icon,
  };
}

// 官方组组件
let officialComponentObj = {
  viewContainer: createDataSource(Routers.officialComponent.officialViewContainerRouter),
  basicContent: createDataSource(Routers.officialComponent.officialBasicContentRouter),
  formComponent: createDataSource(Routers.officialComponent.officialFormComponentRouter),
  navigation: createDataSource(Routers.officialComponent.officialNavigationRouter),
  media: createDataSource(Routers.officialComponent.officialMediaRouter),
  map: createDataSource(Routers.officialComponent.officialMapRouter),
  canvas: createDataSource(Routers.officialComponent.officialCanvasRouter),
  openAbility: createDataSource(Routers.officialComponent.officialOpenAbilityRouter),
};


// 扩展组件
let extendComponentObj = {
  formComponent: createDataSource(Routers.extendComponent.extendComponentFormComponentRouter),
  basicContent: createDataSource(Routers.extendComponent.extendComponentBasicContentRouter),
  operationalFeedback: createDataSource(Routers.extendComponent.extendComponentOperationalFeedbackRouter),
  navigation: createDataSource(Routers.extendComponent.extendComponentNavigationRouter),
  search: createDataSource(Routers.extendComponent.extendComponentSearchRouter),
};

// 官方接口
let interfaceObj = {
  openInterFace: createDataSource(Routers.interFace.interfaceOpenInterFaceRouter),
  page: createDataSource(Routers.interFace.interfacePageRouter),
  device: createDataSource(Routers.interFace.interfaceDeviceRouter),
  network: createDataSource(Routers.interFace.interfaceNetworkRouter),
  media: createDataSource(Routers.interFace.interfaceMediaRouter),
  position: createDataSource(Routers.interFace.interfacePositionRouter),
  data: createDataSource(Routers.interFace.interfaceDataRouter),
  multiThread: createDataSource(Routers.interFace.interfaceMultiThreadRouter),
};

// 云开发
let cloudDevelopObj = {
  userAuthentication: createDataSource(Routers.cloudDevelop.cloudDevelopUserAuthenticationRouter),
  dataBase: createDataSource(Routers.cloudDevelop.cloudDevelopDataBaseRouter),
  storage: createDataSource(Routers.cloudDevelop.cloudDevelopStorageRouter),
  cloudFunction: createDataSource(Routers.cloudDevelop.cloudDevelopCloudFunctionRouter),
};


let mockData = {
  officialComponent: {
    officialComponentObj
  },
  extendComponent: {
    extendComponentObj
  },
  interface: {
    interfaceObj
  },
  cloudDevelop: {
    cloudDevelopObj
  }
}


export default mockData