(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{1248:function(t,e,r){var content=r(1250);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(63).default)("11aa2c8e",content,!0,{sourceMap:!1})},1249:function(t,e,r){"use strict";r(1248)},1250:function(t,e,r){var n=r(62)(!1);n.push([t.i,".blog-container{width:100%;height:100%}.blog-list{width:100%;padding-bottom:80px}.separator{background:#18191b;width:50px;height:1px;border-radius:10px}.blog-title{width:100%;color:#18191b;font-size:20px;margin:20px 0}.blog-description{width:100%;margin:20px 0;display:-webkit-box;overflow:hidden;white-space:normal!important;text-overflow:ellipsis;word-wrap:break-word;-webkit-line-clamp:3;-webkit-box-orient:vertical}.blog-read-all{color:#e94328;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}",""]),t.exports=n},1264:function(t,e,r){"use strict";r.r(e);var n=r(23),o=(r(94),{asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,e.next=3,r("/").only(["title","description","path"]).fetch();case 3:return n=e.sent,e.abrupt("return",{articles:n});case 5:case"end":return e.stop()}}),e)})))()}}),l=(r(1249),r(33)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"blog-container"},t._l(t.articles,(function(e,n){return r("div",{key:n,staticClass:"blog-list"},[r("div",{staticClass:"separator"}),t._v(" "),r("div",{staticClass:"blog-title"},[t._v(t._s(e.title))]),t._v(" "),r("div",{staticClass:"blog-description"},[t._v(t._s(e.description))]),t._v(" "),r("nuxt-link",{staticClass:"blog-read-all",attrs:{to:"/blog"+e.path}},[t._v("阅读全文")])],1)})),0)}),[],!1,null,null,null);e.default=component.exports}}]);