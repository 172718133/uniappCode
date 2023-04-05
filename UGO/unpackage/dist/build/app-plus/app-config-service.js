
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/search/search","pages/category/category","pages/cart/cart","pages/user/user","pages/goods_detail/main","pages/collect/collect","pages/goods_list/goods_list","pages/order/order","pages/address/address","pages/address/add_address","pages/address/choose_address","pages/pay/pay"],"window":{"navigationBarBackgroundColor":"#fff","navigationBarTextStyle":"black"},"tabBar":{"selectedColor":"#5cdedb","list":[{"text":"首页","pagePath":"pages/index/index","iconPath":"./static/imgs/home.png","selectedIconPath":"./static/imgs/home-o.png"},{"text":"分类","pagePath":"pages/category/category","iconPath":"./static/imgs/category.png","selectedIconPath":"./static/imgs/category-o.png"},{"text":"购物车","pagePath":"pages/cart/cart","iconPath":"./static/imgs/cart.png","selectedIconPath":"./static/imgs/cart-o.png"},{"text":"我的","pagePath":"pages/user/user","iconPath":"./static/imgs/my.png","selectedIconPath":"./static/imgs/my-o.png"}]},"darkmode":false,"nvueCompiler":"uni-app","nvueStyleCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"龙龙优购","compilerVersion":"3.7.3","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"首页","enablePullDownRefresh":true}},{"path":"/pages/search/search","meta":{},"window":{"navigationBarTitleText":"搜索"}},{"path":"/pages/category/category","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"商品分类"}},{"path":"/pages/cart/cart","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"购物车"}},{"path":"/pages/user/user","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"个人中心"}},{"path":"/pages/goods_detail/main","meta":{},"window":{"navigationBarTitleText":"商品详情"}},{"path":"/pages/collect/collect","meta":{},"window":{"navigationBarTitleText":"我的收藏"}},{"path":"/pages/goods_list/goods_list","meta":{},"window":{"navigationBarTitleText":"商品列表","enablePullDownRefresh":true,"onReachBottomDistance":10}},{"path":"/pages/order/order","meta":{},"window":{"navigationBarTitleText":"我的订单"}},{"path":"/pages/address/address","meta":{},"window":{"navigationBarTitleText":"收货地址"}},{"path":"/pages/address/add_address","meta":{},"window":{"navigationBarTitleText":"添加收货地址"}},{"path":"/pages/address/choose_address","meta":{},"window":{"navigationBarTitleText":"选择收货地址"}},{"path":"/pages/pay/pay","meta":{},"window":{"navigationBarTitleText":"支付"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
