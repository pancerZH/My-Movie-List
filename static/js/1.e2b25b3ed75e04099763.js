webpackJsonp([1],{"+E39":function(t,e,n){t.exports=!n("S82l")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},"+ZMJ":function(t,e,n){var r=n("lOnJ");t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}},"3Eo+":function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},"52gC":function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},"77Pl":function(t,e,n){var r=n("EqjI");t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},"7KvD":function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},"9bBU":function(t,e,n){n("mClu");var r=n("FeBl").Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},C4MV:function(t,e,n){t.exports={default:n("9bBU"),__esModule:!0}},D2L2:function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},EqjI:function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},FeBl:function(t,e){var n=t.exports={version:"2.6.5"};"number"==typeof __e&&(__e=n)},Ibhu:function(t,e,n){var r=n("D2L2"),i=n("TcQ7"),s=n("vFc/")(!1),a=n("ax3d")("IE_PROTO");t.exports=function(t,e){var n,o=i(t),u=0,c=[];for(n in o)n!=a&&r(o,n)&&c.push(n);for(;e.length>u;)r(o,n=e[u++])&&(~s(c,n)||c.push(n));return c}},MU5D:function(t,e,n){var r=n("R9M2");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},MmMw:function(t,e,n){var r=n("EqjI");t.exports=function(t,e){if(!r(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!r(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},NpIQ:function(t,e){e.f={}.propertyIsEnumerable},O4g8:function(t,e){t.exports=!0},ON07:function(t,e,n){var r=n("EqjI"),i=n("7KvD").document,s=r(i)&&r(i.createElement);t.exports=function(t){return s?i.createElement(t):{}}},QRG4:function(t,e,n){var r=n("UuGF"),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},R9M2:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},S82l:function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},SfB7:function(t,e,n){t.exports=!n("+E39")&&!n("S82l")(function(){return 7!=Object.defineProperty(n("ON07")("div"),"a",{get:function(){return 7}}).a})},TcQ7:function(t,e,n){var r=n("MU5D"),i=n("52gC");t.exports=function(t){return r(i(t))}},TmV0:function(t,e,n){n("fZOM"),t.exports=n("FeBl").Object.values},UuGF:function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},X8DO:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},Xik7:function(t,e,n){t.exports=n.p+"static/img/LostSource.41c5a11.png"},ax3d:function(t,e,n){var r=n("e8AB")("keys"),i=n("3Eo+");t.exports=function(t){return r[t]||(r[t]=i(t))}},bOdI:function(t,e,n){"use strict";e.__esModule=!0;var r,i=n("C4MV"),s=(r=i)&&r.__esModule?r:{default:r};e.default=function(t,e,n){return e in t?(0,s.default)(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},dxlo:function(t,e){},e8AB:function(t,e,n){var r=n("FeBl"),i=n("7KvD"),s=i["__core-js_shared__"]||(i["__core-js_shared__"]={});(t.exports=function(t,e){return s[t]||(s[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n("O4g8")?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},evD5:function(t,e,n){var r=n("77Pl"),i=n("SfB7"),s=n("MmMw"),a=Object.defineProperty;e.f=n("+E39")?Object.defineProperty:function(t,e,n){if(r(t),e=s(e,!0),r(n),i)try{return a(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},fZOM:function(t,e,n){var r=n("kM2E"),i=n("mbce")(!1);r(r.S,"Object",{values:function(t){return i(t)}})},fkB2:function(t,e,n){var r=n("UuGF"),i=Math.max,s=Math.min;t.exports=function(t,e){return(t=r(t))<0?i(t+e,0):s(t,e)}},gRE1:function(t,e,n){t.exports={default:n("TmV0"),__esModule:!0}},hJx8:function(t,e,n){var r=n("evD5"),i=n("X8DO");t.exports=n("+E39")?function(t,e,n){return r.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},kM2E:function(t,e,n){var r=n("7KvD"),i=n("FeBl"),s=n("+ZMJ"),a=n("hJx8"),o=n("D2L2"),u=function(t,e,n){var c,l,f,v=t&u.F,p=t&u.G,d=t&u.S,_=t&u.P,h=t&u.B,g=t&u.W,m=p?i:i[e]||(i[e]={}),x=m.prototype,b=p?r:d?r[e]:(r[e]||{}).prototype;for(c in p&&(n=e),n)(l=!v&&b&&void 0!==b[c])&&o(m,c)||(f=l?b[c]:n[c],m[c]=p&&"function"!=typeof b[c]?n[c]:h&&l?s(f,r):g&&b[c]==f?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(f):_&&"function"==typeof f?s(Function.call,f):f,_&&((m.virtual||(m.virtual={}))[c]=f,t&u.R&&x&&!x[c]&&a(x,c,f)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},lOnJ:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},lktj:function(t,e,n){var r=n("Ibhu"),i=n("xnc9");t.exports=Object.keys||function(t){return r(t,i)}},mClu:function(t,e,n){var r=n("kM2E");r(r.S+r.F*!n("+E39"),"Object",{defineProperty:n("evD5").f})},mbce:function(t,e,n){var r=n("lktj"),i=n("TcQ7"),s=n("NpIQ").f;t.exports=function(t){return function(e){for(var n,a=i(e),o=r(a),u=o.length,c=0,l=[];u>c;)s.call(a,n=o[c++])&&l.push(t?[n,a[n]]:a[n]);return l}}},"vFc/":function(t,e,n){var r=n("TcQ7"),i=n("QRG4"),s=n("fkB2");t.exports=function(t){return function(e,n,a){var o,u=r(e),c=i(u.length),l=s(a,c);if(t&&n!=n){for(;c>l;)if((o=u[l++])!=o)return!0}else for(;c>l;l++)if((t||l in u)&&u[l]===n)return t||l||0;return!t&&-1}}},wHgX:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("gRE1"),i=n.n(r),s=n("bOdI"),a=n.n(s),o={name:"Detail",data:function(){var t;return t={movies:[],detail:[],casts:[],countries:[],directors:[],duration:"",genres:[],languages:[],poster:"",pubdate:[],rating:{average:3,rating_people:0,stars:[]},summary:"",title:"",writers:[],rate:3},a()(t,"countries",[]),a()(t,"languages",[]),a()(t,"value1",1),a()(t,"value2",2),a()(t,"value3",3),a()(t,"value4",4),a()(t,"value5",5),t},mounted:function(){this.getJsonInfo()},methods:{getJsonInfo:function(){this.$http.options.emulateJSON=!0,this.$http.get("./static/films.json").then(function(t){var e=this;this.movies=t.data,this.detail=this.movies.filter(function(t){return i()(t._id).join("").toLowerCase().search(e.$route.params.id)>=0})[0],this.totalMovie=this.movies.length,this.init()}).catch(function(t){})},init:function(){this.casts=this.detail.casts,this.countries=this.detail.countries,this.directors=this.detail.directors,this.duration=this.detail.duration,this.genres=this.detail.genres,this.languages=this.detail.languages,this.poster=this.detail.poster,this.pubdate=this.detail.pubdate,this.rating=this.detail.rating,this.summary=this.detail.summary,this.title=this.detail.title,this.writers=this.detail.writers,this.countries=this.detail.countries,this.languages=this.detail.languages,this.rate=parseFloat((parseFloat(this.detail.rating.average)/2).toFixed(1)),""===this.detail.rating.average&&(this.rate=0,this.rating.average="",this.rating.rating_people=0,this.rating.stars=[0,0,0,0,0])},imgError:function(){this.poster=n("Xik7")},imgListError:function(t){t.poster=n("Xik7")},goToDetail:function(t){this.$router.push({name:"movie-detail",params:{id:t._id}})},goToList:function(){this.$router.push({name:"movie-list"})}},computed:{randomRes:function(){var t=this.movies,e=Math.floor(Math.random()*t.length+1)-1;return e>194?t.slice(194,200):t.slice(e,e+6)},getScoreColor:function(){return this.rating.average>7.9?"#FF9900":this.rating.average>4?"#F7BA2A":"#FF9900"}},watch:{$route:function(t,e){this.$router.go(0)}}},u={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-container",[n("el-header",[t._v(t._s(this.detail.title))]),t._v(" "),n("el-main",[n("div",{staticClass:"container"},[n("img",{staticClass:"poster",attrs:{src:t.poster,alt:t.title},on:{error:function(e){return t.imgError()}}}),t._v(" "),n("div",{staticStyle:{flex:"1"}},[n("div",{staticClass:"casts"},[n("div",[t._v("\n                            导演: "),t._l(t.directors,function(e,r){return n("span",{key:r+100,staticClass:"director"},[t._v("\n                              "+t._s(e.name)),e!=t.directors[t.directors.length-1]?n("a",{staticClass:"director"},[t._v(", ")]):t._e()])})],2),t._v(" "),n("div",[t._v("\n                            编剧: "),t._l(t.writers,function(e,r){return n("span",{key:r+1e3},[t._v("\n                              "+t._s(e.name)),e!=t.writers[t.writers.length-1]?n("a",{staticClass:"sep"},[t._v(", ")]):t._e()])})],2),t._v(" "),n("div",[t._v("\n                            演员: "),t._l(t.casts,function(e,r){return n("span",{key:r+1e3},[t._v("\n                              "+t._s(e.name)),e!=t.casts[t.casts.length-1]?n("a",{staticClass:"sep"},[t._v(", ")]):t._e()])})],2)]),t._v(" "),n("div",{staticClass:"check"},[t._v("\n                        上映日期: "),t._l(t.pubdate,function(e,r){return n("span",{key:r,staticClass:"date"},[t._v(t._s(e))])}),t._v(" "),n("div",{staticClass:"duration"},[t._v("片长: "+t._s(t.duration)+"min")]),t._v("\n                        类型: "),t._l(t.genres,function(e,r){return n("span",{key:r+10,staticClass:"genre"},[t._v(t._s(e))])}),t._v(" "),n("div",[t._v("制片国家/地区: "),t._l(t.countries,function(e,r){return n("span",{key:r+110,staticClass:"genre"},[t._v(t._s(e))])})],2),t._v(" "),n("div",[t._v("语言: "),t._l(t.languages,function(e,r){return n("span",{key:r+120,staticClass:"genre"},[t._v(t._s(e))])})],2)],2)]),t._v(" "),n("div",[n("div",[n("span",{staticClass:"rating"},[n("el-rate",{attrs:{disabled:"","text-color":"#ff9900",colors:["#99A9BF","#F7BA2A","#FF9900"],"score-template":"{value}"},model:{value:t.rate,callback:function(e){t.rate=e},expression:"rate"}})],1),t._v(" "),n("span",{staticClass:"score",style:{color:t.getScoreColor}},[t._v(t._s(t.rating.average))]),t._v(" "),n("span",{staticClass:"rating-people"},[t._v("("+t._s(t.rating.rating_people)+"人评分)")])]),t._v(" "),n("div",[n("span",{staticClass:"rating"},[n("el-rate",{attrs:{disabled:"","show-text":"",colors:["#99A9BF","#F7BA2A","#FF9900"],"text-color":"#ff9900","score-template":"{value}"},model:{value:t.value5,callback:function(e){t.value5=e},expression:"value5"}})],1),t._v(" "),n("span",{staticClass:"rating-people"},[t._v(t._s(t.rating.stars[0])+"%")])]),t._v(" "),n("div",[n("span",{staticClass:"rating"},[n("el-rate",{attrs:{disabled:"","show-text":"",colors:["#99A9BF","#F7BA2A","#FF9900"],"text-color":"#ff9900","score-template":"{value}"},model:{value:t.value4,callback:function(e){t.value4=e},expression:"value4"}})],1),t._v(" "),n("span",{staticClass:"rating-people"},[t._v(t._s(t.rating.stars[1])+"%")])]),t._v(" "),n("div",[n("span",{staticClass:"rating"},[n("el-rate",{attrs:{disabled:"","show-text":"",colors:["#99A9BF","#F7BA2A","#FF9900"],"text-color":"#F7BA2A","score-template":"{value}"},model:{value:t.value3,callback:function(e){t.value3=e},expression:"value3"}})],1),t._v(" "),n("span",{staticClass:"rating-people"},[t._v(t._s(t.rating.stars[2])+"%")])]),t._v(" "),n("div",[n("span",{staticClass:"rating"},[n("el-rate",{attrs:{disabled:"","show-text":"",colors:["#99A9BF","#F7BA2A","#FF9900"],"text-color":"#99A9BF","score-template":"{value}"},model:{value:t.value2,callback:function(e){t.value2=e},expression:"value2"}})],1),t._v(" "),n("span",{staticClass:"rating-people"},[t._v(t._s(t.rating.stars[3])+"%")])]),t._v(" "),n("div",[n("span",{staticClass:"rating"},[n("el-rate",{attrs:{disabled:"","show-text":"",colors:["#99A9BF","#F7BA2A","#FF9900"],"text-color":"#99A9BF","score-template":"{value}"},model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}})],1),t._v(" "),n("span",{staticClass:"rating-people"},[t._v(t._s(t.rating.stars[4])+"%")])])])]),t._v(" "),n("div",{staticClass:"intro"},[n("div",{staticClass:"intro-word"},[t._v("简介")]),n("br"),t._v(" "),n("div",[t._v(t._s(t.summary))])]),t._v(" "),n("div",{staticClass:"other-movie"},[n("div",{staticClass:"command-word"},[n("span",[t._v("推荐")]),t._v(" "),n("span",{staticClass:"back",on:{click:t.goToList}},[t._v("返回列表>>")])]),t._v(" "),t._l(t.randomRes,function(e,r){return n("el-col",{key:r+350,attrs:{span:4}},[n("img",{staticClass:"poster-list",attrs:{src:e.poster,alt:e.title},on:{error:function(n){return t.imgListError(e)},click:function(n){return t.goToDetail(e)}}}),t._v(" "),n("div",{staticClass:"title-list"},[t._v(t._s(e.title))])])})],2)])],1)],1)},staticRenderFns:[]};var c=n("VU/8")(o,u,!1,function(t){n("dxlo")},"data-v-412339ae",null);e.default=c.exports},xnc9:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")}});