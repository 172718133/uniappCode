(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/Goods_bottom/goods_bottom"],{"2a87":function(n,o,t){"use strict";(function(n){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var t={data:function(){return{options:[{icon:"headphones",text:"客服"},{icon:"shop",text:"店铺",info:2,infoBackgroundColor:"#007aff",infoColor:"red"},{icon:"cart",text:"购物车",info:2}],buttonGroup:[{text:"加入购物车",backgroundColor:"#ff0000",color:"#fff"},{text:"立即购买",backgroundColor:"#ffa200",color:"#fff"}]}},methods:{onClick:function(o){0===o.index||1===o.index||2===o.index&&n.switchTab({url:"/pages/cart/cart"})},buttonClick:function(n){0===n.index&&this.$emit("addCart")}}};o.default=t}).call(this,t("543d")["default"])},"2c90":function(n,o,t){},3487:function(n,o,t){"use strict";t.r(o);var e=t("5fcf"),c=t("e57c");for(var i in c)["default"].indexOf(i)<0&&function(n){t.d(o,n,(function(){return c[n]}))}(i);t("c932");var u=t("f0c5"),f=Object(u["a"])(c["default"],e["b"],e["c"],!1,null,"00ca00e4",null,!1,e["a"],void 0);o["default"]=f.exports},"5fcf":function(n,o,t){"use strict";t.d(o,"b",(function(){return c})),t.d(o,"c",(function(){return i})),t.d(o,"a",(function(){return e}));var e={uniGoodsNav:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uni-goods-nav/components/uni-goods-nav/uni-goods-nav")]).then(t.bind(null,"1475"))}},c=function(){var n=this.$createElement;this._self._c},i=[]},c932:function(n,o,t){"use strict";var e=t("2c90"),c=t.n(e);c.a},e57c:function(n,o,t){"use strict";t.r(o);var e=t("2a87"),c=t.n(e);for(var i in e)["default"].indexOf(i)<0&&function(n){t.d(o,n,(function(){return e[n]}))}(i);o["default"]=c.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/Goods_bottom/goods_bottom-create-component',
    {
        'components/Goods_bottom/goods_bottom-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("3487"))
        })
    },
    [['components/Goods_bottom/goods_bottom-create-component']]
]);
