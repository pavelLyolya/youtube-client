!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="dist/",n(n.s=6)}([function(e,t,n){"use strict";e.exports=function(e){return new Promise(function(t,n){var r=new XMLHttpRequest;r.open("GET",e,!0),r.onload=function(){if(200===r.status)t(r.response);else{var e=new Error(r.statusText);e.code=r.status,n(e)}},r.onerror=function(){n(new Error("Network Error"))},r.send()})}},function(e,t,n){"use strict";var r=n(13),o=n(0),i=function e(){var t=document.documentElement.clientWidth,n=Math.round(.75*t/e.sectionWidth);0===n&&(n+=1);var i=document.createElement("div");i.className="results_container";var a=document.createDocumentFragment(),c=r(o.resArr),s=e.currentPage*n;s>c.length&&(s=c.length);for(var u=(e.currentPage-1)*n;u<s;u+=1)a.appendChild(c[u]);return i.appendChild(a),"resize"===e.side&&(document.querySelector("div.container_for_swipe").removeChild(document.querySelector("div.results_container")),document.querySelector("div.container_for_swipe").appendChild(i)),"toright"===e.side?(i.style.marginLeft="-".concat(document.documentElement.clientWidth,"px"),document.querySelector("div.container_for_swipe").insertBefore(i,document.querySelector("div.results_container"))):document.querySelector("div.container_for_swipe").appendChild(i),[o.resArr.length,n,e.currentPage]};i.sectionWidth=400,i.currentPage=1,i.side="toleft",e.exports=i},function(e,t,n){"use strict";function r(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var o=n(1),i=n(3),a=n(4),c=n(5),s=n(0);e.exports=function e(){i.pagesNum<o.currentPage&&(o.currentPage=Math.round(i.pagesNum/o.currentPage)),o.currentPage===i.pagesNum?s("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&type=video&key=AIzaSyBJDStVf-I2z4_o0nvWEhdJo61hHDIM8w8&pageToken=".concat(s.pageToken,"&q=").concat(s.query)).then(function(t){s.pageToken=JSON.parse(t).nextPageToken;var n=JSON.parse(t).items,u=n.map(function(e){return e.id.videoId});s("https://www.googleapis.com/youtube/v3/videos?part=statistics&key=AIzaSyBJDStVf-I2z4_o0nvWEhdJo61hHDIM8w8&id=".concat(u.join(","))).then(function(t){for(var u=JSON.parse(t).items,d=0;d<n.length;d+=1)n[d].statistics=u[d].statistics;s.resArr=s.resArr.concat(n),i.apply(void 0,r(o())),document.querySelectorAll("div.page_pointer").forEach(function(t){return t.addEventListener("click",function(){o.currentPage<+t.firstElementChild.textContent?(o.currentPage=+t.firstElementChild.textContent,o.side="toleft",e(),a()):o.currentPage>+t.firstElementChild.textContent&&(o.currentPage=+t.firstElementChild.textContent,o.side="toright",e(),c())})})})}):(i.apply(void 0,r(o())),document.querySelectorAll("div.page_pointer").forEach(function(t){return t.addEventListener("click",function(){o.currentPage<+t.firstElementChild.textContent?(o.currentPage=+t.firstElementChild.textContent,o.side="toleft",e(),a()):o.currentPage>+t.firstElementChild.textContent&&(o.currentPage=+t.firstElementChild.textContent,o.side="toright",e(),c())})}))}},function(e,t,n){"use strict";e.exports=function e(t,n,r){document.querySelector("div.pagination")&&document.body.removeChild(document.querySelector("div.pagination"));var o=document.createElement("div");o.className="pagination",document.body.appendChild(o),e.pagesNum=Math.ceil(t/n);for(var i=document.createDocumentFragment(),a=0;a<e.pagesNum;a+=1){var c=document.createElement("div");c.className="page_pointer",c.innerHTML="<span>".concat(a+1,"</span>"),a+1===r&&c.classList.add("current"),i.appendChild(c)}document.querySelector("div.pagination").appendChild(i)}},function(e,t,n){"use strict";e.exports=function(){document.querySelector("div.results_container").style.marginLeft="-".concat(document.documentElement.clientWidth,"px"),setTimeout(function(){return document.querySelector("div.container_for_swipe").removeChild(document.querySelector("div.results_container"))},300)}},function(e,t,n){"use strict";e.exports=function(){var e=document.querySelector("div.results_container");setTimeout(function(){e.style.marginLeft="0px",setTimeout(function(){document.querySelector("div.container_for_swipe").removeChild(document.querySelectorAll("div.results_container")[1])},300)},0)}},function(e,t,n){"use strict";n(7);var r=n(12),o=n(0),i=n(2),a=n(1),c=n(14);r(),document.querySelector("form").addEventListener("submit",function(e){e.preventDefault();var t=document.querySelector("input");t.blur(),t.addEventListener("click",function(){t.focus(),t.value=""}),t.addEventListener("keypress",function(){window.location.reload()});var n=t.value;o.query=n,o("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&type=video&key=AIzaSyBJDStVf-I2z4_o0nvWEhdJo61hHDIM8w8&q=".concat(n)).then(function(e){o.pageToken=JSON.parse(e).nextPageToken,o.resArr=JSON.parse(e).items;var t=o.resArr.map(function(e){return e.id.videoId});o("https://www.googleapis.com/youtube/v3/videos?part=statistics&key=AIzaSyBJDStVf-I2z4_o0nvWEhdJo61hHDIM8w8&id=".concat(t.join(","))).then(function(e){for(var t=JSON.parse(e).items,n=0;n<o.resArr.length;n+=1)o.resArr[n].statistics=t[n].statistics;i(),window.addEventListener("resize",function(){a.side="resize",a.currentPage=1,i()}),c()})})})},function(e,t,n){var r=n(8);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(10)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(9)(!1)).push([e.i,"* {\n  overflow-y: hidden;\n}\n\nbody {\n  overflow-x: hidden;\n  margin: 0;\n  background-color: #7e5454;\n  min-width: 300px;\n}\n\nform {\n  display: flex;\n  align-items: center;\n  width: 60%;\n  height: 10vh;\n  margin: 0 auto;\n}\n\ninput {\n  box-sizing: border-box;\n  width: 100%;\n  height: 5vh;\n  border: none;\n  border-radius: 10px;\n  padding-left: 10%;\n  font-size: 3vh;\n  background-color: #faf0dd;\n}\n\ninput:focus {\n  outline: none;\n}\n\n.container_for_swipe {\n  position: relative;\n  width: 10000px;\n}\n\n.results_container {\n  display: inline-flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  width: 100vw;\n  height: 80vh;\n  margin-left: 0;\n  transition: margin-left 0.3s;\n}\n\nsection {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: flex-start;\n  box-sizing: border-box;\n  box-shadow: 0 0 25px #000;\n  max-width: 400px;\n  width: 100%;\n  height: 60vh;\n  margin: 0 25px;\n  padding: 2% 10px;\n  background-color: #faf0dd;\n  border-radius: 10px;\n}\n\nsection img {\n  width: 100%;\n  height: auto;\n}\n\n.title {\n  height: 15%;\n  text-decoration: none;\n  color: #000;\n  font-weight: bold;\n  font-size: 120%;\n  transition: 0.5s;\n}\n\nsection a:hover {\n  color: #8e3a3a;\n}\n\n.view_count, .date {\n  color: #8f8f8f;\n}\n\n.date {\n  font-size: 90%;\n}\n\n.channel_title {\n  color: #000;\n  font-weight: bold;\n  font-size: 90%;\n}\n\n.channel_title, .date {\n  display: block;\n}\n\n.pagination {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  width: 80%;\n  height: 10vh;\n  margin: 0 auto;\n}\n\n.page_pointer {\n  flex-shrink: 2;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 20px;\n  height: 20px;\n  margin: 0 1%;\n  border: 1px solid #5e4c00;\n  border-radius: 20%;\n  color: #5e4c00;\n  background-color: #cdcdcd;\n}\n\n.page_pointer:hover {\n  cursor: pointer;\n}\n\n.current {\n  background-color: #F1FFBC;\n  font-size: 120%;\n  font-weight: bold;\n}\n",""])},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=function(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}(r),i=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(i).concat([o]).join("\n")}return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){var r={},o=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),i=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var r=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),a=null,c=0,s=[],u=n(11);function d(e,t){for(var n=0;n<e.length;n++){var o=e[n],i=r[o.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](o.parts[a]);for(;a<o.parts.length;a++)i.parts.push(v(o.parts[a],t))}else{var c=[];for(a=0;a<o.parts.length;a++)c.push(v(o.parts[a],t));r[o.id]={id:o.id,refs:1,parts:c}}}}function l(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=t.base?i[0]+t.base:i[0],c={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(c):n.push(r[a]={id:a,parts:[c]})}return n}function f(e,t){var n=i(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=s[s.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),s.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=i(e.insertAt.before,n);n.insertBefore(t,o)}}function p(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=s.indexOf(e);t>=0&&s.splice(t,1)}function h(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0;return n.nc}();r&&(e.attrs.nonce=r)}return m(t,e.attrs),f(e,t),t}function m(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function v(e,t){var n,r,o,i;if(t.transform&&e.css){if(!(i="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=i}if(t.singleton){var s=c++;n=a||(a=h(t)),r=y.bind(null,n,s,!1),o=y.bind(null,n,s,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",m(t,e.attrs),f(e,t),t}(t),r=function(e,t,n){var r=n.css,o=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=u(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),c=e.href;e.href=URL.createObjectURL(a),c&&URL.revokeObjectURL(c)}.bind(null,n,t),o=function(){p(n),n.href&&URL.revokeObjectURL(n.href)}):(n=h(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){p(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=o()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=l(e,t);return d(n,t),function(e){for(var o=[],i=0;i<n.length;i++){var a=n[i];(c=r[a.id]).refs--,o.push(c)}e&&d(l(e,t),t);for(i=0;i<o.length;i++){var c;if(0===(c=o[i]).refs){for(var s=0;s<c.parts.length;s++)c.parts[s]();delete r[c.id]}}}};var g=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}();function y(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=g(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o,i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(e,t,n){"use strict";e.exports=function(){var e=document.createElement("form");e.setAttribute("name","form"),document.body.appendChild(e);var t=document.createElement("input");t.setAttribute("type","text"),t.setAttribute("name","searchRow"),t.setAttribute("autofocus",""),document.body.querySelector("form").appendChild(t);var n=document.createElement("div");n.className="container_for_swipe",document.body.appendChild(n)}},function(e,t,n){"use strict";e.exports=function(e){return e.map(function(e){var t=document.createElement("section"),n=document.createElement("img");n.setAttribute("src",e.snippet.thumbnails.medium.url),n.setAttribute("alt","thumbnail"),t.appendChild(n);var r=document.createElement("a");r.setAttribute("href","https://www.youtube.com/watch?v=".concat(e.id.videoId)),r.setAttribute("target","_blank"),r.textContent=e.snippet.title,r.className="title",t.appendChild(r);var o=document.createElement("span");o.textContent="".concat(e.statistics.viewCount," views"),o.className="view_count",t.appendChild(o);var i=document.createElement("div"),a=document.createElement("a");a.setAttribute("href","https://www.youtube.com/channel/".concat(e.snippet.channelId)),a.setAttribute("target","_blank"),a.textContent=e.snippet.channelTitle,a.className="channel_title",i.appendChild(a);var c=document.createElement("span");c.textContent="Published on ".concat(new Date(e.snippet.publishedAt).toDateString()),c.className="date",i.appendChild(c),t.appendChild(i);var s=document.createElement("p");return s.textContent=e.snippet.description,t.appendChild(s),t})}},function(e,t,n){"use strict";var r=n(1),o=n(3),i=n(2),a=n(4),c=n(5);e.exports=function(){var e=0;window.addEventListener("mousedown",function(t){t.preventDefault(),e=t.pageX}),window.addEventListener("touchstart",function(t){e=t.changedTouches[0].pageX}),window.addEventListener("mouseup",function(t){e>t.pageX&&Math.abs(e-t.pageX)>150?r.currentPage<o.pagesNum&&(r.currentPage+=1,r.side="toleft",i(),a()):e<t.pageX&&Math.abs(e-t.pageX)>150&&r.currentPage>1&&(r.currentPage-=1,r.side="toright",i(),c())}),window.addEventListener("touchend",function(t){e>t.changedTouches[0].pageX?r.currentPage<o.pagesNum&&(r.currentPage+=1,r.side="toleft",i(),a()):e<t.changedTouches[0].pageX&&r.currentPage>1&&(r.currentPage-=1,r.side="toright",i(),c())})}}]);