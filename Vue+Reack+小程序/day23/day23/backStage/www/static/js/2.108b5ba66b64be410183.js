webpackJsonp([2],{"9ekR":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("D/cR"),i={data:function(){return{detail:{}}},mounted:function(){var e=this,t=this.$route.query.id;Object(n.c)(t).then(function(t){t.data.isok?e.detail=t.data.detail:alert(t.data.info)})}},r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",[e._v("电影详情页面")]),e._v(" "),a("h3",[e._v("名称："+e._s(e.detail.name))]),e._v(" "),a("p",[e._v("导演："+e._s(e.detail.director))]),e._v(" "),a("p",[e._v("年份："+e._s(e.detail.year))])])},staticRenderFns:[]};var d=a("C7Lr")(i,r,!1,function(e){a("peHE")},"data-v-19a56478",null);t.default=d.exports},peHE:function(e,t){}});
//# sourceMappingURL=2.108b5ba66b64be410183.js.map