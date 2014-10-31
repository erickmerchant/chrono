/*!
  * =============================================================
  * Ender: open module JavaScript framework (https://enderjs.com)
  * Build: ender build qwery bonzo bean kizzy --output js/ender
  * Packages: ender-core@2.0.0 ender-commonjs@1.0.7 qwery@4.0.0 bonzo@2.0.0 bean@1.0.14 kizzy@0.0.5
  * =============================================================
  */
(function(){/*!
    * Ender: open module JavaScript framework (client-lib)
    * http://enderjs.com
    * License MIT
    */
function t(t,n){var r;if(this.length=0,"string"==typeof t&&(t=e._select(this.selector=t,n)),null==t)return this;if("function"==typeof t)e._closure(t,n);else if("object"!=typeof t||t.nodeType||(r=t.length)!==+r||t==t.window)this[this.length++]=t;else for(this.length=r=r>0?~~r:0;r--;)this[r]=t[r]}function e(e,n){return new t(e,n)}function n(t){if("$"+t in n._cache)return n._cache["$"+t];if("$"+t in n._modules)return n._cache["$"+t]=n._modules["$"+t]._load();if(t in window)return window[t];throw new Error('Requested module "'+t+'" has not been defined.')}function r(t,e){return n._cache["$"+t]=e}function i(t,e){this.id=t,this.fn=e,n._modules["$"+t]=this}e.fn=e.prototype=t.prototype,e._reserved={reserved:1,ender:1,expose:1,noConflict:1,fn:1},t.prototype.$=e,t.prototype.splice=function(){throw new Error("Not implemented")},t.prototype.forEach=function(t,e){var n,r;for(n=0,r=this.length;r>n;++n)n in this&&t.call(e||this[n],this[n],n,this);return this},e.ender=function(n,r){var i=r?t.prototype:e;for(var o in n)!(o in e._reserved)&&(i[o]=n[o]);return i},e._select=function(t,e){return t?(e||document).querySelectorAll(t):[]},e._closure=function(t){t.call(document,e)},"undefined"!=typeof module&&module.exports&&(module.exports=e),e.expose=function(t,n){e.expose.old[t]=window[t],window[t]=n},e.expose.old={},e.noConflict=function(t){if(window.$=e.expose.old.$,t)for(var n in e.expose.old)window[n]=e.expose.old[n];return this},e.expose("$",e),e.expose("ender",e);/*!
    * Ender: open module JavaScript framework (module-lib)
    * http://enderjs.com
    * License MIT
    */
var o=this;n._cache={},n._modules={},i.prototype.require=function(t){var e,r;if("."==t.charAt(0)){for(e=(this.id.replace(/\/.*?$/,"/")+t.replace(/\.js$/,"")).split("/");~(r=e.indexOf("."));)e.splice(r,1);for(;(r=e.lastIndexOf(".."))>0;)e.splice(r-1,2);t=e.join("/")}return n(t)},i.prototype._load=function(){var t=this;return t._loaded||(t._loaded=!0,t.exports={},t.fn.call(o,t,t.exports,function(e){return t.require(e)},o)),t.exports},i.createPackage=function(t,e,r){var o,u;for(o in e)new i(t+"/"+o,e[o]),(u=o.match(/^(.+)\/index$/))&&new i(t+"/"+u[1],e[o]);r&&(n._modules["$"+t]=n._modules["$"+t+"/"+r])},e&&e.expose&&(e.expose("global",o),e.expose("require",n),e.expose("provide",r),e.expose("Module",i)),i.createPackage("qwery",{qwery:function(t){/*!
        * @preserve Qwery - A selector engine
        * https://github.com/ded/qwery
        * (c) Dustin Diaz 2014 | License MIT
        */
!function(e,n,r){"undefined"!=typeof t&&t.exports?t.exports=r():"function"==typeof define&&define.amd?define(r):n[e]=r()}("qwery",this,function(){function t(t){return[].slice.call(t,0)}function e(t){var e;return t&&"object"==typeof t&&(e=t.nodeType)&&(1==e||9==e)}function n(t){return"object"==typeof t&&isFinite(t.length)}function r(t){for(var e=[],r=0,i=t.length;i>r;++r)n(t[r])?e=e.concat(t[r]):e[e.length]=t[r];return e}function i(t){var e,n,r=[];t:for(e=0;e<t.length;e++){for(n=0;n<r.length;n++)if(r[n]==t[e])continue t;r[r.length]=t[e]}return r}function o(t){return t?"string"==typeof t?u(t)[0]:!t[f]&&n(t)?t[0]:t:c}function u(i,u){var l,f=o(u);return f&&i?i===a||e(i)?!u||i!==a&&e(f)&&h(i,f)?[i]:[]:i&&n(i)?r(i):c.getElementsByClassName&&"string"==i&&(l=i.match(s))?t(f.getElementsByClassName(l[1])):i&&(i.document||i.nodeType&&9==i.nodeType)?u?[]:[i]:t(f.querySelectorAll(i)):[]}var s=/^\.([\w\-]+)$/,c=document,a=window,l=c.documentElement,f="nodeType",h="compareDocumentPosition"in l?function(t,e){return 16==(16&e.compareDocumentPosition(t))}:function(t,e){return e=e==c||e==window?l:e,e!==t&&e.contains(t)};return u.uniq=i,u},this)},"src/ender":function(t,n,r){!function(t){var e=r("qwery");t._select=function(n,i){return(t._select=function(){var n;if("function"==typeof t.create)return function(n,r){return/^\s*</.test(n)?t.create(n,r):e(n,r)};try{return n=r("bonzo"),function(t,r){return/^\s*</.test(t)?n.create(t,r):e(t,r)}}catch(i){}return e}())(n,i)},t.ender({find:function(n){var r,i,o,u,s,c=[];for(r=0,i=this.length;i>r;r++)for(s=e(n,this[r]),o=0,u=s.length;u>o;o++)c.push(s[o]);return t(e.uniq(c))},and:function(e){for(var n=t(e),r=this.length,i=0,o=this.length+n.length;o>r;r++,i++)this[r]=n[i];return this.length+=n.length,this}},!0)}(e)}},"qwery"),i.createPackage("bonzo",{bonzo:function(t){/*!
        * Bonzo: DOM Utility (c) Dustin Diaz 2012
        * https://github.com/ded/bonzo
        * License MIT
        */
!function(e,n,r){"undefined"!=typeof t&&t.exports?t.exports=r():"function"==typeof define&&define.amd?define(r):n[e]=r()}("bonzo",this,function(){function t(t,e){var n=null,r=$.defaultView.getComputedStyle(t,"");return r&&(n=r[e]),t.style[e]||n}function e(t){return t&&t.nodeName&&(1==t.nodeType||11==t.nodeType)}function n(t,n,r){var i,o,u;if("string"==typeof t)return E.create(t);if(e(t)&&(t=[t]),r){for(u=[],i=0,o=t.length;o>i;i++)u[i]=y(n,t[i]);return u}return t}function r(t){return new RegExp("(^|\\s+)"+t+"(\\s+|$)")}function i(t,e,n,r){for(var i,o=0,u=t.length;u>o;o++)i=r?t.length-o-1:o,e.call(n||t[i],t[i],i,t);return t}function o(t,n,r){for(var i=0,u=t.length;u>i;i++)e(t[i])&&(o(t[i].childNodes,n,r),n.call(r||t[i],t[i],i,t));return t}function u(t){return t.replace(/-(.)/g,function(t,e){return e.toUpperCase()})}function s(t){return t?t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase():t}function c(t){t[F]("data-node-uid")||t[j]("data-node-uid",++H);var e=t[F]("data-node-uid");return M[e]||(M[e]={})}function a(t){var e=t[F]("data-node-uid");e&&delete M[e]}function l(t){var e;try{return null===t||void 0===t?void 0:"true"===t?!0:"false"===t?!1:"null"===t?null:(e=parseFloat(t))==t?e:t}catch(n){}return void 0}function f(t,e,n){for(var r=0,i=t.length;i>r;++r)if(e.call(n||null,t[r],r,t))return!0;return!1}function h(t){return"transform"==t&&(t=R.transform)||/^transform-?[Oo]rigin$/.test(t)&&(t=R.transform+"Origin"),t?u(t):null}function d(t,e,r,o){var u=0,s=e||this,c=[],a=G&&"string"==typeof t&&"<"!=t.charAt(0)?G(t):t;return i(n(a),function(t,e){i(s,function(n){r(t,c[u++]=e>0?y(s,n):n)},null,o)},this,o),s.length=u,i(c,function(t){s[--u]=t},null,!o),s}function p(t,e,n){var r=E(t),i=r.css("position"),o=r.offset(),u="relative",s=i==u,c=[parseInt(r.css("left"),10),parseInt(r.css("top"),10)];"static"==i&&(r.css("position",u),i=u),isNaN(c[0])&&(c[0]=s?0:t.offsetLeft),isNaN(c[1])&&(c[1]=s?0:t.offsetTop),null!=e&&(t.style.left=e-o.left+c[0]+Y),null!=n&&(t.style.top=n-o.top+c[1]+Y)}function g(t,e){return"function"==typeof e?e.call(t,t):e}function m(t,e,n){var r=this[0];return r?null==t&&null==e?(b(r)?w():{x:r.scrollLeft,y:r.scrollTop})[n]:(b(r)?N.scrollTo(t,e):(null!=t&&(r.scrollLeft=t),null!=e&&(r.scrollTop=e)),this):this}function v(t){if(this.length=0,t){t="string"==typeof t||t.nodeType||"undefined"==typeof t.length?[t]:t,this.length=t.length;for(var e=0;e<t.length;e++)this[e]=t[e]}}function y(t,e){var n,r,i,o=e.cloneNode(!0);if(t.$&&"function"==typeof t.cloneEvents)for(t.$(o).cloneEvents(e),n=t.$(o).find("*"),r=t.$(e).find("*"),i=0;i<r.length;i++)t.$(n[i]).cloneEvents(r[i]);return o}function b(t){return t===N||/^(?:body|html)$/i.test(t.tagName)}function w(){return{x:N.pageXOffset||C.scrollLeft,y:N.pageYOffset||C.scrollTop}}function x(t){var e=document.createElement("script"),n=t.match(z);return e.src=n[1],e}function E(t){return new v(t)}var T,_,k,N=window,$=N.document,C=$.documentElement,S="parentNode",D=/^(checked|value|selected|disabled)$/i,P=/^(select|fieldset|table|tbody|tfoot|td|tr|colgroup)$/i,z=/\s*<script +src=['"]([^'"]+)['"]>/,A=["<table>","</table>",1],L=["<table><tbody><tr>","</tr></tbody></table>",3],q=["<select>","</select>",1],B=["_","",0,1],O={thead:A,tbody:A,tfoot:A,colgroup:A,caption:A,tr:["<table><tbody>","</tbody></table>",2],th:L,td:L,col:["<table><colgroup>","</colgroup></table>",2],fieldset:["<form>","</form>",1],legend:["<form><fieldset>","</fieldset></form>",2],option:q,optgroup:q,script:B,style:B,link:B,param:B,base:B},I=/^(checked|selected|disabled)$/,M={},H=0,W=/^-?[\d\.]+$/,X=/^data-(.+)$/,Y="px",j="setAttribute",F="getAttribute",R=function(){var t=$.createElement("p");return{transform:function(){var e,n=["transform","webkitTransform","MozTransform","OTransform","msTransform"];for(e=0;e<n.length;e++)if(n[e]in t.style)return n[e]}(),classList:"classList"in t}}(),K=/\s+/,U=String.prototype.toString,Q={lineHeight:1,zoom:1,zIndex:1,opacity:1,boxFlex:1,WebkitBoxFlex:1,MozBoxFlex:1},G=$.querySelectorAll&&function(t){return $.querySelectorAll(t)};return R.classList?(T=function(t,e){return t.classList.contains(e)},_=function(t,e){t.classList.add(e)},k=function(t,e){t.classList.remove(e)}):(T=function(t,e){return r(e).test(t.className)},_=function(t,e){t.className=(t.className+" "+e).trim()},k=function(t,e){t.className=t.className.replace(r(e)," ").trim()}),v.prototype={get:function(t){return this[t]||null},each:function(t,e){return i(this,t,e)},deepEach:function(t,e){return o(this,t,e)},map:function(t,e){var n,r,i=[];for(r=0;r<this.length;r++)n=t.call(this,this[r],r),e?e(n)&&i.push(n):i.push(n);return i},html:function(t,e){var r=e?"textContent":"innerHTML",o=this,u=function(e,r){i(n(t,o,r),function(t){e.appendChild(t)})},s=function(n,i){try{if(e||"string"==typeof t&&!P.test(n.tagName))return n[r]=t}catch(o){}u(n,i)};return"undefined"!=typeof t?this.empty().each(s):this[0]?this[0][r]:""},text:function(t){return this.html(t,!0)},append:function(t){var e=this;return this.each(function(r,o){i(n(t,e,o),function(t){r.appendChild(t)})})},prepend:function(t){var e=this;return this.each(function(r,o){var u=r.firstChild;i(n(t,e,o),function(t){r.insertBefore(t,u)})})},appendTo:function(t,e){return d.call(this,t,e,function(t,e){t.appendChild(e)})},prependTo:function(t,e){return d.call(this,t,e,function(t,e){t.insertBefore(e,t.firstChild)},1)},before:function(t){var e=this;return this.each(function(r,o){i(n(t,e,o),function(t){r[S].insertBefore(t,r)})})},after:function(t){var e=this;return this.each(function(r,o){i(n(t,e,o),function(t){r[S].insertBefore(t,r.nextSibling)},null,1)})},insertBefore:function(t,e){return d.call(this,t,e,function(t,e){t[S].insertBefore(e,t)})},insertAfter:function(t,e){return d.call(this,t,e,function(t,e){var n=t.nextSibling;n?t[S].insertBefore(e,n):t[S].appendChild(e)},1)},replaceWith:function(t){var e=this;return this.each(function(r,o){i(n(t,e,o),function(t){r[S]&&r[S].replaceChild(t,r)})})},clone:function(t){var e,n,r=[];for(n=0,e=this.length;e>n;n++)r[n]=y(t||this,this[n]);return E(r)},addClass:function(t){return t=U.call(t).split(K),this.each(function(e){i(t,function(t){t&&!T(e,g(e,t))&&_(e,g(e,t))})})},removeClass:function(t){return t=U.call(t).split(K),this.each(function(e){i(t,function(t){t&&T(e,g(e,t))&&k(e,g(e,t))})})},hasClass:function(t){return t=U.call(t).split(K),f(this,function(e){return f(t,function(t){return t&&T(e,t)})})},toggleClass:function(t,e){return t=U.call(t).split(K),this.each(function(n){i(t,function(t){t&&("undefined"!=typeof e?e?!T(n,t)&&_(n,t):k(n,t):T(n,t)?k(n,t):_(n,t))})})},show:function(t){return t="string"==typeof t?t:"",this.each(function(e){e.style.display=t})},hide:function(){return this.each(function(t){t.style.display="none"})},toggle:function(t,e){return e="string"==typeof e?e:"","function"!=typeof t&&(t=null),this.each(function(n){n.style.display=n.offsetWidth||n.offsetHeight?"none":e,t&&t.call(n)})},first:function(){return E(this.length?this[0]:[])},last:function(){return E(this.length?this[this.length-1]:[])},next:function(){return this.related("nextSibling")},previous:function(){return this.related("previousSibling")},parent:function(){return this.related(S)},related:function(t){return E(this.map(function(e){for(e=e[t];e&&1!==e.nodeType;)e=e[t];return e||0},function(t){return t}))},focus:function(){return this.length&&this[0].focus(),this},blur:function(){return this.length&&this[0].blur(),this},css:function(e,n){function r(t,e,n){for(var r in o)if(o.hasOwnProperty(r)){n=o[r],(e=h(r))&&W.test(n)&&!(e in Q)&&(n+=Y);try{t.style[e]=g(t,n)}catch(i){}}}var i,o=e;return void 0===n&&"string"==typeof e?(n=this[0],n?n===$||n===N?(i=n===$?E.doc():E.viewport(),"width"==e?i.width:"height"==e?i.height:""):(e=h(e))?t(n,e):null:null):("string"==typeof e&&(o={},o[e]=n),this.each(r))},offset:function(t,e){if(t&&"object"==typeof t&&("number"==typeof t.top||"number"==typeof t.left))return this.each(function(e){p(e,t.left,t.top)});if("number"==typeof t||"number"==typeof e)return this.each(function(n){p(n,t,e)});if(!this[0])return{top:0,left:0,height:0,width:0};var n=this[0],r=n.ownerDocument.documentElement,i=n.getBoundingClientRect(),o=w(),u=n.offsetWidth,s=n.offsetHeight,c=i.top+o.y-Math.max(0,r&&r.clientTop,$.body.clientTop),a=i.left+o.x-Math.max(0,r&&r.clientLeft,$.body.clientLeft);return{top:c,left:a,height:s,width:u}},dim:function(){if(!this.length)return{height:0,width:0};var t=this[0],e=9==t.nodeType&&t.documentElement,n=e||!t.style||t.offsetWidth||t.offsetHeight?null:function(e){var n={position:t.style.position||"",visibility:t.style.visibility||"",display:t.style.display||""};return e.first().css({position:"absolute",visibility:"hidden",display:"block"}),n}(this),r=e?Math.max(t.body.scrollWidth,t.body.offsetWidth,e.scrollWidth,e.offsetWidth,e.clientWidth):t.offsetWidth,i=e?Math.max(t.body.scrollHeight,t.body.offsetHeight,e.scrollHeight,e.offsetHeight,e.clientHeight):t.offsetHeight;return n&&this.first().css(n),{height:i,width:r}},attr:function(t,e){var n,r=this[0];if("string"!=typeof t&&!(t instanceof String)){for(n in t)t.hasOwnProperty(n)&&this.attr(n,t[n]);return this}return"undefined"==typeof e?r?D.test(t)?I.test(t)&&"string"==typeof r[t]?!0:r[t]:r[F](t):null:this.each(function(n){D.test(t)?n[t]=g(n,e):n[j](t,g(n,e))})},removeAttr:function(t){return this.each(function(e){I.test(t)?e[t]=!1:e.removeAttribute(t)})},val:function(t){return"string"==typeof t||"number"==typeof t?this.attr("value",t):this.length?this[0].value:null},data:function(t,e){var n,r,o=this[0];return"undefined"==typeof e?o?(n=c(o),"undefined"==typeof t?(i(o.attributes,function(t){(r=(""+t.name).match(X))&&(n[u(r[1])]=l(t.value))}),n):("undefined"==typeof n[t]&&(n[t]=l(this.attr("data-"+s(t)))),n[t])):null:this.each(function(n){c(n)[t]=e})},remove:function(){return this.deepEach(a),this.detach()},empty:function(){return this.each(function(t){for(o(t.childNodes,a);t.firstChild;)t.removeChild(t.firstChild)})},detach:function(){return this.each(function(t){t[S]&&t[S].removeChild(t)})},scrollTop:function(t){return m.call(this,null,t,"y")},scrollLeft:function(t){return m.call(this,t,null,"x")}},E.setQueryEngine=function(t){G=t,delete E.setQueryEngine},E.aug=function(t,e){for(var n in t)t.hasOwnProperty(n)&&((e||v.prototype)[n]=t[n])},E.create=function(t){return"string"==typeof t&&""!==t?function(){if(z.test(t))return[x(t)];var e=t.match(/^\s*<([^\s>]+)/),n=$.createElement("div"),r=[],o=e?O[e[1].toLowerCase()]:null,u=o?o[2]+1:1,s=o&&o[3],c=S;for(n.innerHTML=o?o[0]+t+o[1]:t;u--;)n=n.firstChild;s&&n&&1!==n.nodeType&&(n=n.nextSibling);do e&&1!=n.nodeType||r.push(n);while(n=n.nextSibling);return i(r,function(t){t[c]&&t[c].removeChild(t)}),r}():e(t)?[t.cloneNode(!0)]:[]},E.doc=function(){var t=E.viewport();return{width:Math.max($.body.scrollWidth,C.scrollWidth,t.width),height:Math.max($.body.scrollHeight,C.scrollHeight,t.height)}},E.firstChild=function(t){for(var e,n=t.childNodes,r=0,i=n&&n.length||0;i>r;r++)1===n[r].nodeType&&(e=n[i=r]);return e},E.viewport=function(){return{width:N.innerWidth,height:N.innerHeight}},E.isAncestor="compareDocumentPosition"in C?function(t,e){return 16==(16&t.compareDocumentPosition(e))}:function(t,e){return t!==e&&t.contains(e)},E})},"src/ender":function(t,n,r){!function(t){function e(t,e){for(var n=0;n<t.length;n++)if(t[n]===e)return n;return-1}function n(t){for(var e,n,r,i=[],o=0,u=0;n=t[o];++o){for(r=!1,e=0;e<i.length;++e)if(i[e]===n){r=!0;break}r||(i[u++]=n)}return i}function i(t,e){return"undefined"==typeof e?o(this).dim()[t]:this.css(t,e)}var o=r("bonzo");o.setQueryEngine(t),t.ender(o),t.ender(o(),!0),t.ender({create:function(e){return t(o.create(e))}}),t.id=function(e){return t([document.getElementById(e)])},t.ender({parents:function(r,i){if(!this.length)return this;r||(r="*");var o,u,s,c=t(r),a=[];for(o=0,u=this.length;u>o;o++)for(s=this[o];(s=s.parentNode)&&(!~e(c,s)||(a.push(s),!i)););return t(n(a))},parent:function(){return t(n(o(this).parent()))},closest:function(t){return this.parents(t,!0)},first:function(){return t(this.length?this[0]:this)},last:function(){return t(this.length?this[this.length-1]:[])},next:function(){return t(o(this).next())},previous:function(){return t(o(this).previous())},related:function(e){return t(o(this).related(e))},appendTo:function(t){return o(this.selector).appendTo(t,this)},prependTo:function(t){return o(this.selector).prependTo(t,this)},insertAfter:function(t){return o(this.selector).insertAfter(t,this)},insertBefore:function(t){return o(this.selector).insertBefore(t,this)},clone:function(){return t(o(this).clone(this))},siblings:function(){var e,n,r,i=[];for(e=0,n=this.length;n>e;e++){for(r=this[e];r=r.previousSibling;)1==r.nodeType&&i.push(r);for(r=this[e];r=r.nextSibling;)1==r.nodeType&&i.push(r)}return t(i)},children:function(){var e,r,i,u=[];for(e=0,r=this.length;r>e;e++)if(i=o.firstChild(this[e]))for(u.push(i);i=i.nextSibling;)1==i.nodeType&&u.push(i);return t(n(u))},height:function(t){return i.call(this,"height",t)},width:function(t){return i.call(this,"width",t)}},!0)}(e)}},"bonzo"),i.createPackage("bean",{bean:function(t){/*!
        * Bean - copyright (c) Jacob Thornton 2011-2012
        * https://github.com/fat/bean
        * MIT license
        */
!function(e,n,r){"undefined"!=typeof t&&t.exports?t.exports=r():"function"==typeof define&&define.amd?define(r):n[e]=r()}("bean",this,function(t,e){t=t||"bean",e=e||this;var n,r=window,i=e[t],o=/[^\.]*(?=\..*)\.|.*/,u=/\..*/,s="addEventListener",c="removeEventListener",a=document||{},l=a.documentElement||{},f=l[s],h=f?s:"attachEvent",d={},p=Array.prototype.slice,g=function(t,e){return t.split(e||" ")},m=function(t){return"string"==typeof t},v=function(t){return"function"==typeof t},y="click dblclick mouseup mousedown contextmenu mousewheel mousemultiwheel DOMMouseScroll mouseover mouseout mousemove selectstart selectend keydown keypress keyup orientationchange focus blur change reset select submit load unload beforeunload resize move DOMContentLoaded readystatechange message error abort scroll ",b="show input invalid touchstart touchmove touchend touchcancel gesturestart gesturechange gestureend textinput readystatechange pageshow pagehide popstate hashchange offline online afterprint beforeprint dragstart dragenter dragover dragleave drag drop dragend loadstart progress suspend emptied stalled loadmetadata loadeddata canplay canplaythrough playing waiting seeking seeked ended durationchange timeupdate play pause ratechange volumechange cuechange checking noupdate downloading cached updateready obsolete ",w=function(t,e,n){for(n=0;n<e.length;n++)e[n]&&(t[e[n]]=1);return t}({},g(y+(f?b:""))),x=function(){var t="compareDocumentPosition"in l?function(t,e){return e.compareDocumentPosition&&16===(16&e.compareDocumentPosition(t))}:"contains"in l?function(t,e){return e=9===e.nodeType||e===window?l:e,e!==t&&e.contains(t)}:function(t,e){for(;t=t.parentNode;)if(t===e)return 1;return 0},e=function(e){var n=e.relatedTarget;return n?n!==this&&"xul"!==n.prefix&&!/document/.test(this.toString())&&!t(n,this):null==n};return{mouseenter:{base:"mouseover",condition:e},mouseleave:{base:"mouseout",condition:e},mousewheel:{base:/Firefox/.test(navigator.userAgent)?"DOMMouseScroll":"mousewheel"}}}(),E=function(){var t=g("altKey attrChange attrName bubbles cancelable ctrlKey currentTarget detail eventPhase getModifierState isTrusted metaKey relatedNode relatedTarget shiftKey srcElement target timeStamp type view which propertyName"),e=t.concat(g("button buttons clientX clientY dataTransfer fromElement offsetX offsetY pageX pageY screenX screenY toElement")),n=e.concat(g("wheelDelta wheelDeltaX wheelDeltaY wheelDeltaZ axis")),i=t.concat(g("char charCode key keyCode keyIdentifier keyLocation location")),o=t.concat(g("data")),u=t.concat(g("touches targetTouches changedTouches scale rotation")),s=t.concat(g("data origin source")),c=t.concat(g("state")),f=/over|out/,h=[{reg:/key/i,fix:function(t,e){return e.keyCode=t.keyCode||t.which,i}},{reg:/click|mouse(?!(.*wheel|scroll))|menu|drag|drop/i,fix:function(t,n,r){return n.rightClick=3===t.which||2===t.button,n.pos={x:0,y:0},t.pageX||t.pageY?(n.clientX=t.pageX,n.clientY=t.pageY):(t.clientX||t.clientY)&&(n.clientX=t.clientX+a.body.scrollLeft+l.scrollLeft,n.clientY=t.clientY+a.body.scrollTop+l.scrollTop),f.test(r)&&(n.relatedTarget=t.relatedTarget||t[("mouseover"==r?"from":"to")+"Element"]),e}},{reg:/mouse.*(wheel|scroll)/i,fix:function(){return n}},{reg:/^text/i,fix:function(){return o}},{reg:/^touch|^gesture/i,fix:function(){return u}},{reg:/^message$/i,fix:function(){return s}},{reg:/^popstate$/i,fix:function(){return c}},{reg:/.*/,fix:function(){return t}}],d={},p=function(t,e,n){if(arguments.length&&(t=t||((e.ownerDocument||e.document||e).parentWindow||r).event,this.originalEvent=t,this.isNative=n,this.isBean=!0,t)){var i,o,u,s,c,a=t.type,l=t.target||t.srcElement;if(this.target=l&&3===l.nodeType?l.parentNode:l,n){if(c=d[a],!c)for(i=0,o=h.length;o>i;i++)if(h[i].reg.test(a)){d[a]=c=h[i].fix;break}for(s=c(t,this,a),i=s.length;i--;)!((u=s[i])in this)&&u in t&&(this[u]=t[u])}}};return p.prototype.preventDefault=function(){this.originalEvent.preventDefault?this.originalEvent.preventDefault():this.originalEvent.returnValue=!1},p.prototype.stopPropagation=function(){this.originalEvent.stopPropagation?this.originalEvent.stopPropagation():this.originalEvent.cancelBubble=!0},p.prototype.stop=function(){this.preventDefault(),this.stopPropagation(),this.stopped=!0},p.prototype.stopImmediatePropagation=function(){this.originalEvent.stopImmediatePropagation&&this.originalEvent.stopImmediatePropagation(),this.isImmediatePropagationStopped=function(){return!0}},p.prototype.isImmediatePropagationStopped=function(){return this.originalEvent.isImmediatePropagationStopped&&this.originalEvent.isImmediatePropagationStopped()},p.prototype.clone=function(t){var e=new p(this,this.element,this.isNative);return e.currentTarget=t,e},p}(),T=function(t,e){return f||e||t!==a&&t!==r?t:l},_=function(){var t=function(t,e,n,r){var i=function(n,i){return e.apply(t,r?p.call(i,n?0:1).concat(r):i)},o=function(n,r){return e.__beanDel?e.__beanDel.ft(n.target,t):r},u=n?function(t){var e=o(t,this);return n.apply(e,arguments)?(t&&(t.currentTarget=e),i(t,arguments)):void 0}:function(t){return e.__beanDel&&(t=t.clone(o(t))),i(t,arguments)};return u.__beanDel=e.__beanDel,u},e=function(e,n,r,i,o,u,s){var c,a=x[n];"unload"==n&&(r=S(D,e,n,r,i)),a&&(a.condition&&(r=t(e,r,a.condition,u)),n=a.base||n),this.isNative=c=w[n]&&!!e[h],this.customType=!f&&!c&&n,this.element=e,this.type=n,this.original=i,this.namespaces=o,this.eventType=f||c?n:"propertychange",this.target=T(e,c),this[h]=!!this.target[h],this.root=s,this.handler=t(e,r,null,u)};return e.prototype.inNamespaces=function(t){var e,n,r=0;if(!t)return!0;if(!this.namespaces)return!1;for(e=t.length;e--;)for(n=this.namespaces.length;n--;)t[e]==this.namespaces[n]&&r++;return t.length===r},e.prototype.matches=function(t,e,n){return!(this.element!==t||e&&this.original!==e||n&&this.handler!==n)},e}(),k=function(){var t={},e=function(n,r,i,o,u,s){var c=u?"r":"$";if(r&&"*"!=r){var a,l=0,f=t[c+r],h="*"==n;if(!f)return;for(a=f.length;a>l;l++)if((h||f[l].matches(n,i,o))&&!s(f[l],f,l,r))return}else for(var d in t)d.charAt(0)==c&&e(n,d.substr(1),i,o,u,s)},n=function(e,n,r,i){var o,u=t[(i?"r":"$")+n];if(u)for(o=u.length;o--;)if(!u[o].root&&u[o].matches(e,r,null))return!0;return!1},r=function(t,n,r,i){var o=[];return e(t,n,r,null,i,function(t){return o.push(t)}),o},i=function(e){var n=!e.root&&!this.has(e.element,e.type,null,!1),r=(e.root?"r":"$")+e.type;return(t[r]||(t[r]=[])).push(e),n},o=function(n){e(n.element,n.type,null,n.handler,n.root,function(e,n,r){return n.splice(r,1),e.removed=!0,0===n.length&&delete t[(e.root?"r":"$")+e.type],!1})},u=function(){var e,n=[];for(e in t)"$"==e.charAt(0)&&(n=n.concat(t[e]));return n};return{has:n,get:r,put:i,del:o,entries:u}}(),N=function(t){n=arguments.length?t:a.querySelectorAll?function(t,e){return e.querySelectorAll(t)}:function(){throw new Error("Bean: No selector engine installed")}},$=function(t,e){if(f||!e||!t||t.propertyName=="_on"+e){var n=k.get(this,e||t.type,null,!1),r=n.length,i=0;for(t=new E(t,this,!0),e&&(t.type=e);r>i&&!t.isImmediatePropagationStopped();i++)n[i].removed||n[i].handler.call(this,t)}},C=f?function(t,e,n){t[n?s:c](e,$,!1)}:function(t,e,n,r){var i;n?(k.put(i=new _(t,r||e,function(e){$.call(t,e,r)},$,null,null,!0)),r&&null==t["_on"+r]&&(t["_on"+r]=0),i.target.attachEvent("on"+i.eventType,i.handler)):(i=k.get(t,r||e,$,!0)[0],i&&(i.target.detachEvent("on"+i.eventType,i.handler),k.del(i)))},S=function(t,e,n,r,i){return function(){r.apply(this,arguments),t(e,n,i)}},D=function(t,e,n,r){var i,o,s=e&&e.replace(u,""),c=k.get(t,s,null,!1),a={};for(i=0,o=c.length;o>i;i++)n&&c[i].original!==n||!c[i].inNamespaces(r)||(k.del(c[i]),!a[c[i].eventType]&&c[i][h]&&(a[c[i].eventType]={t:c[i].eventType,c:c[i].type}));for(i in a)k.has(t,a[i].t,null,!1)||C(t,a[i].t,!1,a[i].c)},P=function(t,e){var r=function(e,r){for(var i,o=m(t)?n(t,r):t;e&&e!==r;e=e.parentNode)for(i=o.length;i--;)if(o[i]===e)return e},i=function(t){var n=r(t.target,this);n&&e.apply(n,arguments)};return i.__beanDel={ft:r,selector:t},i},z=f?function(t,e,n){var i=a.createEvent(t?"HTMLEvents":"UIEvents");i[t?"initEvent":"initUIEvent"](e,!0,!0,r,1),n.dispatchEvent(i)}:function(t,e,n){n=T(n,t),t?n.fireEvent("on"+e,a.createEventObject()):n["_on"+e]++},A=function(t,e,n){var r,i,s,c,a=m(e);if(a&&e.indexOf(" ")>0){for(e=g(e),c=e.length;c--;)A(t,e[c],n);return t}if(i=a&&e.replace(u,""),i&&x[i]&&(i=x[i].base),!e||a)(s=a&&e.replace(o,""))&&(s=g(s,".")),D(t,i,n,s);else if(v(e))D(t,null,e);else for(r in e)e.hasOwnProperty(r)&&A(t,r,e[r]);return t},L=function(t,e,r,i){var s,c,a,l,f,m,y;if(void 0!==r||"object"!=typeof e){for(v(r)?(f=p.call(arguments,3),i=s=r):(s=i,f=p.call(arguments,4),i=P(r,s,n)),a=g(e),this===d&&(i=S(A,t,e,i,s)),l=a.length;l--;)y=k.put(m=new _(t,a[l].replace(u,""),i,s,g(a[l].replace(o,""),"."),f,!1)),m[h]&&y&&C(t,m.eventType,!0,m.customType);return t}for(c in e)e.hasOwnProperty(c)&&L.call(this,t,c,e[c])},q=function(t,e,n,r){return L.apply(null,m(n)?[t,n,e,r].concat(arguments.length>3?p.call(arguments,5):[]):p.call(arguments))},B=function(){return L.apply(d,arguments)},O=function(t,e,n){var r,i,s,c,a,l=g(e);for(r=l.length;r--;)if(e=l[r].replace(u,""),(c=l[r].replace(o,""))&&(c=g(c,".")),c||n||!t[h])for(a=k.get(t,e,null,!1),n=[!1].concat(n),i=0,s=a.length;s>i;i++)a[i].inNamespaces(c)&&a[i].handler.apply(t,n);else z(w[e],e,t);return t},I=function(t,e,n){for(var r,i,o=k.get(e,n,null,!1),u=o.length,s=0;u>s;s++)o[s].original&&(r=[t,o[s].type],(i=o[s].handler.__beanDel)&&r.push(i.selector),r.push(o[s].original),L.apply(null,r));return t},M={on:L,add:q,one:B,off:A,remove:A,clone:I,fire:O,Event:E,setSelectorEngine:N,noConflict:function(){return e[t]=i,this}};if(r.attachEvent){var H=function(){var t,e=k.entries();for(t in e)e[t].type&&"unload"!==e[t].type&&A(e[t].element,e[t].type);r.detachEvent("onunload",H),r.CollectGarbage&&r.CollectGarbage()};r.attachEvent("onunload",H)}return N(),M})},"src/ender":function(t,n,r){!function(t){for(var e=r("bean"),n=function(t,n){var r=n?[n]:[];return function(){for(var i=0,o=this.length;o>i;i++)!arguments.length&&"on"==t&&n&&(t="fire"),e[t].apply(this,[this[i]].concat(r,Array.prototype.slice.call(arguments,0)));return this}},i=n("add"),o=n("on"),u=n("one"),s=n("off"),c=n("fire"),a=n("clone"),l=function(t,n,r){for(r=this.length;r--;)e.on.call(this,this[r],"mouseenter",t),e.on.call(this,this[r],"mouseleave",n);return this},f={on:o,addListener:o,bind:o,listen:o,delegate:i,one:u,off:s,unbind:s,unlisten:s,removeListener:s,undelegate:s,emit:c,trigger:c,cloneEvents:a,hover:l},h="blur change click dblclick error focus focusin focusout keydown keypress keyup load mousedown mouseenter mouseleave mouseout mouseover mouseup mousemove resize scroll select submit unload".split(" "),d=h.length;d--;)f[h[d]]=n("on",h[d]);e.setSelectorEngine(t),t.ender(f,!0)}(e)}},"bean"),i.createPackage("kizzy",{kizzy:function(t){/*!
        * Kizzy - a cross-browser LocalStorage API
        * Copyright: Dustin Diaz 2012
        * https://github.com/ded/kizzy
        * License: MIT
        */
!function(e,n){"undefined"!=typeof t?t.exports=n():"function"==typeof define&&"object"==typeof define.amd?define(n):this[e]=n()}("kizzy",function(){function t(){}function e(){return+new Date}function n(t,n){t._[n]&&t._[n].e&&t._[n].e<e()&&t.remove(n)}function r(t){return"number"==typeof t&&isFinite(t)}function i(t){return localStorage[t]}function o(t,e){return localStorage[t]=e,e}function u(t){delete localStorage[t]}function s(){localStorage.clear()}function c(t){for(var e,n=_.childNodes,r=null,i=0,o=n.length;o>i;i++)if(e=n.item(i),e.getAttribute("key")==t){r=e;break}return r}function a(t){var e=c(t),n=null;return e&&(n=e.getAttribute("value")),n}function l(t,e){var n=c(t);return n?n.setAttribute("value",e):(n=T.createNode(1,"item",""),n.setAttribute("key",t),n.setAttribute("value",e),_.appendChild(n)),E.save(y),e}function f(t){c(t)&&_.removeChild(node),E.save(y)}function h(){for(;_.firstChild;)_.removeChild(_.firstChild);E.save(y)}function d(){this._={}}function p(t){this.ns=t,this._=JSON.parse($(t)||"{}")}function g(t){return new p(t)}var m,v=document,y=v.domain,b=0,w=function(){return 1};try{m=!!localStorage||!!globalStorage,localStorage||(localStorage=globalStorage[y]),b=1}catch(x){b=0;try{if(v.documentElement.addBehavior){b=0,m=1;var E=v.documentElement;E.addBehavior("#default#userData"),E.load(y);var T=E.xmlDocument,_=T.documentElement}}catch(k){m=!1}}var N=t,$=t,C=t,S=t;return m&&(N=b?o:l,$=b?i:a,C=b?u:f,S=b?s:h,w=function(t){try{var e=JSON.stringify(t._);return"{}"==e?C(t.ns):N(t.ns,e),1}catch(n){return 0}}),d.prototype={set:function(t,n,i){return this._[t]={value:n,e:r(i)?e()+i:0},w(this)||this.remove(t),n},get:function(t){return n(this,t),this._[t]?this._[t].value:void 0},remove:function(t){delete this._[t],w(this)},clear:function(){this._={},w(this)},clearExpireds:function(){for(var t in this._)n(this,t);w(this)}},p.prototype=d.prototype,g.remove=C,g.clear=S,g})},"src/ender":function(t,n,r){!function(t){var e=r("kizzy");t.ender({cache:e})}(e)}},"kizzy"),n("qwery"),n("qwery/src/ender"),n("bonzo"),n("bonzo/src/ender"),n("bean"),n("bean/src/ender"),n("kizzy"),n("kizzy/src/ender")}).call(window),/*! app.js */
+function(){function t(t){var e=document.createElement("canvas"),n=e.getContext("2d");return e.width=t,e.height=t,n.fillStyle=u,n.fillRect(0,0,t,t),e.toDataURL()}function e(){if(c){var t,o,u,d=(s-Date.now())/1e3;d>0?(t=r(parseInt(d%60)),o=r(parseInt(d/60)),u=o+":"+t,f.val(u),h.text(u),l=setTimeout(e,500)):(i(a),n())}}function n(){c=0,f.val("00:00"),h.text("00:00"),l&&clearTimeout(l)}function r(t){return t=String(t),t>=10?t:"0"+t}function i(e){if(p&&"granted"===Notification.permission){var n=new Notification(e,{icon:t(200)});n.onclick=function(){window.focus()}}}var o=$.cache("chrono"),u=o.get("color"),s=0,c=0,a="",l=null,f=$("output"),h=$("title"),d=$("body"),p="Notification"in window&&"permission"in window.Notification&&"requestPermission"in window.Notification;$(document).on("click","button",function(){var t=$(this);n(),c=1,s=Date.now()+6e4*t.data("interval"),a=t.data("message"),e()}),$(document).on("click",'[type="radio"]',function(){var e=$(this).val();o.set("color",e),u=e,d.css("background",e);var n=$("#favicon"),r='<link href="'+t(16)+'" rel="shortcut icon" type="image/x-icon" id="favicon">';n.length&&n.replaceWith(r),this.checked=!0}),!p||Notification.permission&&"denied"===Notification.permission||Notification.requestPermission(function(t){"permission"in Notification||(Notification.permission=t)}),u&&$('[value="'+u+'"]').trigger("click")}();