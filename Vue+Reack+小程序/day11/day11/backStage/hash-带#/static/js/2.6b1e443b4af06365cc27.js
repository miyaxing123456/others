webpackJsonp([2],{"4xb+":function(e,t){},Xn9v:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={data:function(){return{food:[{id:"11",name:"麻辣烫",price:29.9},{id:"22",name:"麻辣小龙虾",price:159}]}},methods:{toDetail:function(e){this.$router.push("/foodDetail/"+e)}},beforeRouteEnter:function(e,t,n){var r=localStorage.getItem("type");"0"==r||"2"==r?n():n("/login")}},o={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h3",[e._v("外卖页面")]),e._v(" "),n("go-back"),e._v(" "),n("to-search"),e._v(" "),n("ul",e._l(e.food,function(t){return n("li",{key:t.id,on:{click:function(n){return e.toDetail(t.id)}}},[n("h4",[e._v("店名："+e._s(t.name))]),e._v(" "),n("p",[e._v("价格："+e._s(e._f("filterPrice")(t.price)))])])}),0)],1)},staticRenderFns:[]};var i=n("C7Lr")(r,o,!1,function(e){n("4xb+")},"data-v-9afc6e40",null);t.default=i.exports}});
//# sourceMappingURL=2.6b1e443b4af06365cc27.js.map