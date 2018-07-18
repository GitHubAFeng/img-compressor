!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.ImgCompressor=n():t.ImgCompressor=n()}(window,function(){return function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=38)}([function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n,e){var r=e(28)("wks"),o=e(29),i=e(0).Symbol,u="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=r},function(t,n){var e=t.exports={version:"2.5.7"};"number"==typeof __e&&(__e=e)},function(t,n,e){var r=e(8);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n,e){var r=e(0),o=e(2),i=e(10),u=e(5),c=e(12),a=function(t,n,e){var s,f,l,p=t&a.F,v=t&a.G,h=t&a.S,d=t&a.P,y=t&a.B,m=t&a.W,g=v?o:o[n]||(o[n]={}),_=g.prototype,x=v?r:h?r[n]:(r[n]||{}).prototype;for(s in v&&(e=n),e)(f=!p&&x&&void 0!==x[s])&&c(g,s)||(l=f?x[s]:e[s],g[s]=v&&"function"!=typeof x[s]?e[s]:y&&f?i(l,r):m&&x[s]==l?function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n.prototype=t.prototype,n}(l):d&&"function"==typeof l?i(Function.call,l):l,d&&((g.virtual||(g.virtual={}))[s]=l,t&a.R&&_&&!_[s]&&u(_,s,l)))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},function(t,n,e){var r=e(7),o=e(24);t.exports=e(6)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){t.exports=!e(17)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n,e){var r=e(3),o=e(44),i=e(45),u=Object.defineProperty;n.f=e(6)?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n){t.exports={}},function(t,n,e){var r=e(11);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n){t.exports=!0},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n,e){var r=e(8),o=e(0).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,n,e){var r=e(26),o=e(15);t.exports=function(t){return r(o(t))}},function(t,n,e){var r=e(28)("keys"),o=e(29);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,n,e){var r=e(7).f,o=e(12),i=e(1)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},function(t,n,e){"use strict";var r=e(11);t.exports.f=function(t){return new function(t){var n,e;this.promise=new t(function(t,r){if(void 0!==n||void 0!==e)throw TypeError("Bad Promise constructor");n=t,e=r}),this.resolve=r(n),this.reject=r(e)}(t)}},function(t,n,e){"use strict";var r=e(16),o=e(4),i=e(46),u=e(5),c=e(9),a=e(47),s=e(21),f=e(53),l=e(1)("iterator"),p=!([].keys&&"next"in[].keys()),v=function(){return this};t.exports=function(t,n,e,h,d,y,m){a(e,n,h);var g,_,x,w=function(t){if(!p&&t in S)return S[t];switch(t){case"keys":case"values":return function(){return new e(this,t)}}return function(){return new e(this,t)}},b=n+" Iterator",j="values"==d,O=!1,S=t.prototype,P=S[l]||S["@@iterator"]||d&&S[d],M=P||w(d),T=d?j?w("entries"):M:void 0,L="Array"==n&&S.entries||P;if(L&&(x=f(L.call(new t)))!==Object.prototype&&x.next&&(s(x,b,!0),r||"function"==typeof x[l]||u(x,l,v)),j&&P&&"values"!==P.name&&(O=!0,M=function(){return P.call(this)}),r&&!m||!p&&!O&&S[l]||u(S,l,M),c[n]=M,c[b]=v,d)if(g={values:j?M:w("values"),keys:y?M:w("keys"),entries:T},m)for(_ in g)_ in S||i(S,_,g[_]);else o(o.P+o.F*(p||O),n,g);return g}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){var r=e(50),o=e(30);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n,e){var r=e(13);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,n,e){var r=e(14),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n,e){var r=e(2),o=e(0),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,n){return i[t]||(i[t]=void 0!==n?n:{})})("versions",[]).push({version:r.version,mode:e(16)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n,e){var r=e(0).document;t.exports=r&&r.documentElement},function(t,n,e){var r=e(15);t.exports=function(t){return Object(r(t))}},function(t,n,e){var r=e(13),o=e(1)("toStringTag"),i="Arguments"==r(function(){return arguments}());t.exports=function(t){var n,e,u;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),o))?e:i?r(n):"Object"==(u=r(n))&&"function"==typeof n.callee?"Arguments":u}},function(t,n,e){var r=e(3),o=e(11),i=e(1)("species");t.exports=function(t,n){var e,u=r(t).constructor;return void 0===u||void 0==(e=r(u)[i])?n:o(e)}},function(t,n,e){var r,o,i,u=e(10),c=e(64),a=e(31),s=e(18),f=e(0),l=f.process,p=f.setImmediate,v=f.clearImmediate,h=f.MessageChannel,d=f.Dispatch,y=0,m={},g=function(){var t=+this;if(m.hasOwnProperty(t)){var n=m[t];delete m[t],n()}},_=function(t){g.call(t.data)};p&&v||(p=function(t){for(var n=[],e=1;arguments.length>e;)n.push(arguments[e++]);return m[++y]=function(){c("function"==typeof t?t:Function(t),n)},r(y),y},v=function(t){delete m[t]},"process"==e(13)(l)?r=function(t){l.nextTick(u(g,t,1))}:d&&d.now?r=function(t){d.now(u(g,t,1))}:h?(i=(o=new h).port2,o.port1.onmessage=_,r=u(i.postMessage,i,1)):f.addEventListener&&"function"==typeof postMessage&&!f.importScripts?(r=function(t){f.postMessage(t+"","*")},f.addEventListener("message",_,!1)):r="onreadystatechange"in s("script")?function(t){a.appendChild(s("script")).onreadystatechange=function(){a.removeChild(this),g.call(t)}}:function(t){setTimeout(u(g,t,1),0)}),t.exports={set:p,clear:v}},function(t,n){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},function(t,n,e){var r=e(3),o=e(8),i=e(22);t.exports=function(t,n){if(r(t),o(n)&&n.constructor===t)return n;var e=i.f(t);return(0,e.resolve)(n),e.promise}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.Create=void 0;var r=c(e(39)),o=c(e(72)),i=c(e(78)),u=c(e(79));function c(t){return t&&t.__esModule?t:{default:t}}n.Create=function(){function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,i.default)(this,t);this.canvas=null,this.options=(0,o.default)({mimeType:"image/png",quality:1},n)}return(0,u.default)(t,[{key:"compress",value:function(t){var n=this,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(t){var r=(0,o.default)(this.options,e),i=void 0;this.compressImage(t,r).then(function(t){return i=t,n.toBlob(t,r)}).then(function(e){window.URL&&window.URL.revokeObjectURL(i.src),e.name=t.name,r.success&&r.success.call(n,e)}).catch(function(t){if(!r.error)throw t;r.error.call(n,t)})}}},{key:"compressImage",value:function(t){return new r.default(function(n,e){var r=new Image;if(r.onload=function(){return n(r)},window.URL)r.src=window.URL.createObjectURL(t);else{var o=new FileReader;o.onload=function(t){r.src=t.target.result},o.onabort=function(){e(new Error("Aborted to load the image with FileReader."))},o.onerror=function(){e(new Error("Failed to load the image with FileReader."))},o.readAsDataURL(t)}})}},{key:"toBlob",value:function(t,n){var e=this,o=this.getRect(t,n);return new r.default(function(r,i){if(e.canvas||(e.canvas=document.createElement("canvas")),e.canvas.getContext){var u=e.canvas.getContext("2d");e.canvas.width=o.width,e.canvas.height=o.height,u.drawImage(t,0,0,o.width,o.height);e.canvas.toBlob(function(t){t&&r(t)},n.mimeType,n.quality)}else i("Unsupport Canvas!")})}},{key:"getRect",value:function(t,n){var e=t.naturalWidth,r=t.naturalHeight,o=e/r,i=e,u=r;return n.width>0?(i=n.width,u=n.width/o):n.height>0&&(i=(u=n.height)*o),{width:i,height:u}}}]),t}()},function(t,n,e){t.exports={default:e(40),__esModule:!0}},function(t,n,e){e(41),e(42),e(54),e(58),e(70),e(71),t.exports=e(2).Promise},function(t,n){},function(t,n,e){"use strict";var r=e(43)(!0);e(23)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,n=this._t,e=this._i;return e>=n.length?{value:void 0,done:!0}:(t=r(n,e),this._i+=t.length,{value:t,done:!1})})},function(t,n,e){var r=e(14),o=e(15);t.exports=function(t){return function(n,e){var i,u,c=String(o(n)),a=r(e),s=c.length;return a<0||a>=s?t?"":void 0:(i=c.charCodeAt(a))<55296||i>56319||a+1===s||(u=c.charCodeAt(a+1))<56320||u>57343?t?c.charAt(a):i:t?c.slice(a,a+2):u-56320+(i-55296<<10)+65536}}},function(t,n,e){t.exports=!e(6)&&!e(17)(function(){return 7!=Object.defineProperty(e(18)("div"),"a",{get:function(){return 7}}).a})},function(t,n,e){var r=e(8);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,e){t.exports=e(5)},function(t,n,e){"use strict";var r=e(48),o=e(24),i=e(21),u={};e(5)(u,e(1)("iterator"),function(){return this}),t.exports=function(t,n,e){t.prototype=r(u,{next:o(1,e)}),i(t,n+" Iterator")}},function(t,n,e){var r=e(3),o=e(49),i=e(30),u=e(20)("IE_PROTO"),c=function(){},a=function(){var t,n=e(18)("iframe"),r=i.length;for(n.style.display="none",e(31).appendChild(n),n.src="javascript:",(t=n.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),a=t.F;r--;)delete a.prototype[i[r]];return a()};t.exports=Object.create||function(t,n){var e;return null!==t?(c.prototype=r(t),e=new c,c.prototype=null,e[u]=t):e=a(),void 0===n?e:o(e,n)}},function(t,n,e){var r=e(7),o=e(3),i=e(25);t.exports=e(6)?Object.defineProperties:function(t,n){o(t);for(var e,u=i(n),c=u.length,a=0;c>a;)r.f(t,e=u[a++],n[e]);return t}},function(t,n,e){var r=e(12),o=e(19),i=e(51)(!1),u=e(20)("IE_PROTO");t.exports=function(t,n){var e,c=o(t),a=0,s=[];for(e in c)e!=u&&r(c,e)&&s.push(e);for(;n.length>a;)r(c,e=n[a++])&&(~i(s,e)||s.push(e));return s}},function(t,n,e){var r=e(19),o=e(27),i=e(52);t.exports=function(t){return function(n,e,u){var c,a=r(n),s=o(a.length),f=i(u,s);if(t&&e!=e){for(;s>f;)if((c=a[f++])!=c)return!0}else for(;s>f;f++)if((t||f in a)&&a[f]===e)return t||f||0;return!t&&-1}}},function(t,n,e){var r=e(14),o=Math.max,i=Math.min;t.exports=function(t,n){return(t=r(t))<0?o(t+n,0):i(t,n)}},function(t,n,e){var r=e(12),o=e(32),i=e(20)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,n,e){e(55);for(var r=e(0),o=e(5),i=e(9),u=e(1)("toStringTag"),c="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),a=0;a<c.length;a++){var s=c[a],f=r[s],l=f&&f.prototype;l&&!l[u]&&o(l,u,s),i[s]=i.Array}},function(t,n,e){"use strict";var r=e(56),o=e(57),i=e(9),u=e(19);t.exports=e(23)(Array,"Array",function(t,n){this._t=u(t),this._i=0,this._k=n},function(){var t=this._t,n=this._k,e=this._i++;return!t||e>=t.length?(this._t=void 0,o(1)):o(0,"keys"==n?e:"values"==n?t[e]:[e,t[e]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,n){t.exports=function(){}},function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},function(t,n,e){"use strict";var r,o,i,u,c=e(16),a=e(0),s=e(10),f=e(33),l=e(4),p=e(8),v=e(11),h=e(59),d=e(60),y=e(34),m=e(35).set,g=e(65)(),_=e(22),x=e(36),w=e(66),b=e(37),j=a.TypeError,O=a.process,S=O&&O.versions,P=S&&S.v8||"",M=a.Promise,T="process"==f(O),L=function(){},E=o=_.f,k=!!function(){try{var t=M.resolve(1),n=(t.constructor={})[e(1)("species")]=function(t){t(L,L)};return(T||"function"==typeof PromiseRejectionEvent)&&t.then(L)instanceof n&&0!==P.indexOf("6.6")&&-1===w.indexOf("Chrome/66")}catch(t){}}(),R=function(t){var n;return!(!p(t)||"function"!=typeof(n=t.then))&&n},C=function(t,n){if(!t._n){t._n=!0;var e=t._c;g(function(){for(var r=t._v,o=1==t._s,i=0,u=function(n){var e,i,u,c=o?n.ok:n.fail,a=n.resolve,s=n.reject,f=n.domain;try{c?(o||(2==t._h&&I(t),t._h=1),!0===c?e=r:(f&&f.enter(),e=c(r),f&&(f.exit(),u=!0)),e===n.promise?s(j("Promise-chain cycle")):(i=R(e))?i.call(e,a,s):a(e)):s(r)}catch(t){f&&!u&&f.exit(),s(t)}};e.length>i;)u(e[i++]);t._c=[],t._n=!1,n&&!t._h&&A(t)})}},A=function(t){m.call(a,function(){var n,e,r,o=t._v,i=F(t);if(i&&(n=x(function(){T?O.emit("unhandledRejection",o,t):(e=a.onunhandledrejection)?e({promise:t,reason:o}):(r=a.console)&&r.error&&r.error("Unhandled promise rejection",o)}),t._h=T||F(t)?2:1),t._a=void 0,i&&n.e)throw n.v})},F=function(t){return 1!==t._h&&0===(t._a||t._c).length},I=function(t){m.call(a,function(){var n;T?O.emit("rejectionHandled",t):(n=a.onrejectionhandled)&&n({promise:t,reason:t._v})})},U=function(t){var n=this;n._d||(n._d=!0,(n=n._w||n)._v=t,n._s=2,n._a||(n._a=n._c.slice()),C(n,!0))},D=function(t){var n,e=this;if(!e._d){e._d=!0,e=e._w||e;try{if(e===t)throw j("Promise can't be resolved itself");(n=R(t))?g(function(){var r={_w:e,_d:!1};try{n.call(t,s(D,r,1),s(U,r,1))}catch(t){U.call(r,t)}}):(e._v=t,e._s=1,C(e,!1))}catch(t){U.call({_w:e,_d:!1},t)}}};k||(M=function(t){h(this,M,"Promise","_h"),v(t),r.call(this);try{t(s(D,this,1),s(U,this,1))}catch(t){U.call(this,t)}},(r=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=e(67)(M.prototype,{then:function(t,n){var e=E(y(this,M));return e.ok="function"!=typeof t||t,e.fail="function"==typeof n&&n,e.domain=T?O.domain:void 0,this._c.push(e),this._a&&this._a.push(e),this._s&&C(this,!1),e.promise},catch:function(t){return this.then(void 0,t)}}),i=function(){var t=new r;this.promise=t,this.resolve=s(D,t,1),this.reject=s(U,t,1)},_.f=E=function(t){return t===M||t===u?new i(t):o(t)}),l(l.G+l.W+l.F*!k,{Promise:M}),e(21)(M,"Promise"),e(68)("Promise"),u=e(2).Promise,l(l.S+l.F*!k,"Promise",{reject:function(t){var n=E(this);return(0,n.reject)(t),n.promise}}),l(l.S+l.F*(c||!k),"Promise",{resolve:function(t){return b(c&&this===u?M:this,t)}}),l(l.S+l.F*!(k&&e(69)(function(t){M.all(t).catch(L)})),"Promise",{all:function(t){var n=this,e=E(n),r=e.resolve,o=e.reject,i=x(function(){var e=[],i=0,u=1;d(t,!1,function(t){var c=i++,a=!1;e.push(void 0),u++,n.resolve(t).then(function(t){a||(a=!0,e[c]=t,--u||r(e))},o)}),--u||r(e)});return i.e&&o(i.v),e.promise},race:function(t){var n=this,e=E(n),r=e.reject,o=x(function(){d(t,!1,function(t){n.resolve(t).then(e.resolve,r)})});return o.e&&r(o.v),e.promise}})},function(t,n){t.exports=function(t,n,e,r){if(!(t instanceof n)||void 0!==r&&r in t)throw TypeError(e+": incorrect invocation!");return t}},function(t,n,e){var r=e(10),o=e(61),i=e(62),u=e(3),c=e(27),a=e(63),s={},f={};(n=t.exports=function(t,n,e,l,p){var v,h,d,y,m=p?function(){return t}:a(t),g=r(e,l,n?2:1),_=0;if("function"!=typeof m)throw TypeError(t+" is not iterable!");if(i(m)){for(v=c(t.length);v>_;_++)if((y=n?g(u(h=t[_])[0],h[1]):g(t[_]))===s||y===f)return y}else for(d=m.call(t);!(h=d.next()).done;)if((y=o(d,g,h.value,n))===s||y===f)return y}).BREAK=s,n.RETURN=f},function(t,n,e){var r=e(3);t.exports=function(t,n,e,o){try{return o?n(r(e)[0],e[1]):n(e)}catch(n){var i=t.return;throw void 0!==i&&r(i.call(t)),n}}},function(t,n,e){var r=e(9),o=e(1)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},function(t,n,e){var r=e(33),o=e(1)("iterator"),i=e(9);t.exports=e(2).getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[r(t)]}},function(t,n){t.exports=function(t,n,e){var r=void 0===e;switch(n.length){case 0:return r?t():t.call(e);case 1:return r?t(n[0]):t.call(e,n[0]);case 2:return r?t(n[0],n[1]):t.call(e,n[0],n[1]);case 3:return r?t(n[0],n[1],n[2]):t.call(e,n[0],n[1],n[2]);case 4:return r?t(n[0],n[1],n[2],n[3]):t.call(e,n[0],n[1],n[2],n[3])}return t.apply(e,n)}},function(t,n,e){var r=e(0),o=e(35).set,i=r.MutationObserver||r.WebKitMutationObserver,u=r.process,c=r.Promise,a="process"==e(13)(u);t.exports=function(){var t,n,e,s=function(){var r,o;for(a&&(r=u.domain)&&r.exit();t;){o=t.fn,t=t.next;try{o()}catch(r){throw t?e():n=void 0,r}}n=void 0,r&&r.enter()};if(a)e=function(){u.nextTick(s)};else if(!i||r.navigator&&r.navigator.standalone)if(c&&c.resolve){var f=c.resolve(void 0);e=function(){f.then(s)}}else e=function(){o.call(r,s)};else{var l=!0,p=document.createTextNode("");new i(s).observe(p,{characterData:!0}),e=function(){p.data=l=!l}}return function(r){var o={fn:r,next:void 0};n&&(n.next=o),t||(t=o,e()),n=o}}},function(t,n,e){var r=e(0).navigator;t.exports=r&&r.userAgent||""},function(t,n,e){var r=e(5);t.exports=function(t,n,e){for(var o in n)e&&t[o]?t[o]=n[o]:r(t,o,n[o]);return t}},function(t,n,e){"use strict";var r=e(0),o=e(2),i=e(7),u=e(6),c=e(1)("species");t.exports=function(t){var n="function"==typeof o[t]?o[t]:r[t];u&&n&&!n[c]&&i.f(n,c,{configurable:!0,get:function(){return this}})}},function(t,n,e){var r=e(1)("iterator"),o=!1;try{var i=[7][r]();i.return=function(){o=!0},Array.from(i,function(){throw 2})}catch(t){}t.exports=function(t,n){if(!n&&!o)return!1;var e=!1;try{var i=[7],u=i[r]();u.next=function(){return{done:e=!0}},i[r]=function(){return u},t(i)}catch(t){}return e}},function(t,n,e){"use strict";var r=e(4),o=e(2),i=e(0),u=e(34),c=e(37);r(r.P+r.R,"Promise",{finally:function(t){var n=u(this,o.Promise||i.Promise),e="function"==typeof t;return this.then(e?function(e){return c(n,t()).then(function(){return e})}:t,e?function(e){return c(n,t()).then(function(){throw e})}:t)}})},function(t,n,e){"use strict";var r=e(4),o=e(22),i=e(36);r(r.S,"Promise",{try:function(t){var n=o.f(this),e=i(t);return(e.e?n.reject:n.resolve)(e.v),n.promise}})},function(t,n,e){t.exports={default:e(73),__esModule:!0}},function(t,n,e){e(74),t.exports=e(2).Object.assign},function(t,n,e){var r=e(4);r(r.S+r.F,"Object",{assign:e(75)})},function(t,n,e){"use strict";var r=e(25),o=e(76),i=e(77),u=e(32),c=e(26),a=Object.assign;t.exports=!a||e(17)(function(){var t={},n={},e=Symbol(),r="abcdefghijklmnopqrst";return t[e]=7,r.split("").forEach(function(t){n[t]=t}),7!=a({},t)[e]||Object.keys(a({},n)).join("")!=r})?function(t,n){for(var e=u(t),a=arguments.length,s=1,f=o.f,l=i.f;a>s;)for(var p,v=c(arguments[s++]),h=f?r(v).concat(f(v)):r(v),d=h.length,y=0;d>y;)l.call(v,p=h[y++])&&(e[p]=v[p]);return e}:a},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n){n.f={}.propertyIsEnumerable},function(t,n,e){"use strict";n.__esModule=!0,n.default=function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}},function(t,n,e){"use strict";n.__esModule=!0;var r=function(t){return t&&t.__esModule?t:{default:t}}(e(80));n.default=function(){function t(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),(0,r.default)(t,o.key,o)}}return function(n,e,r){return e&&t(n.prototype,e),r&&t(n,r),n}}()},function(t,n,e){t.exports={default:e(81),__esModule:!0}},function(t,n,e){e(82);var r=e(2).Object;t.exports=function(t,n,e){return r.defineProperty(t,n,e)}},function(t,n,e){var r=e(4);r(r.S+r.F*!e(6),"Object",{defineProperty:e(7).f})}])});