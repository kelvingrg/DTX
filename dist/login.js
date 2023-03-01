/*! For license information please see login.js.LICENSE.txt */
!function(){"use strict";function t(t,e){return function(){return t.apply(e,arguments)}}const{toString:e}=Object.prototype,{getPrototypeOf:n}=Object,r=(o=Object.create(null),t=>{const n=e.call(t);return o[n]||(o[n]=n.slice(8,-1).toLowerCase())});var o;const i=t=>(t=t.toLowerCase(),e=>r(e)===t),s=t=>e=>typeof e===t,{isArray:a}=Array,c=s("undefined"),u=i("ArrayBuffer"),l=s("string"),f=s("function"),d=s("number"),h=t=>null!==t&&"object"==typeof t,p=t=>{if("object"!==r(t))return!1;const e=n(t);return!(null!==e&&e!==Object.prototype&&null!==Object.getPrototypeOf(e)||Symbol.toStringTag in t||Symbol.iterator in t)},m=i("Date"),y=i("File"),g=i("Blob"),b=i("FileList"),w=i("URLSearchParams");function v(t,e,{allOwnKeys:n=!1}={}){if(null==t)return;let r,o;if("object"!=typeof t&&(t=[t]),a(t))for(r=0,o=t.length;r<o;r++)e.call(null,t[r],r,t);else{const o=n?Object.getOwnPropertyNames(t):Object.keys(t),i=o.length;let s;for(r=0;r<i;r++)s=o[r],e.call(null,t[s],s,t)}}function E(t,e){e=e.toLowerCase();const n=Object.keys(t);let r,o=n.length;for(;o-- >0;)if(r=n[o],e===r.toLowerCase())return r;return null}const O="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:global,S=t=>!c(t)&&t!==O,R=(A="undefined"!=typeof Uint8Array&&n(Uint8Array),t=>A&&t instanceof A);var A;const x=i("HTMLFormElement"),T=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),j=i("RegExp"),N=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};v(n,((n,o)=>{!1!==e(n,o,t)&&(r[o]=n)})),Object.defineProperties(t,r)},L="abcdefghijklmnopqrstuvwxyz",P="0123456789",C={DIGIT:P,ALPHA:L,ALPHA_DIGIT:L+L.toUpperCase()+P};var _={isArray:a,isArrayBuffer:u,isBuffer:function(t){return null!==t&&!c(t)&&null!==t.constructor&&!c(t.constructor)&&f(t.constructor.isBuffer)&&t.constructor.isBuffer(t)},isFormData:t=>{const n="[object FormData]";return t&&("function"==typeof FormData&&t instanceof FormData||e.call(t)===n||f(t.toString)&&t.toString()===n)},isArrayBufferView:function(t){let e;return e="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&u(t.buffer),e},isString:l,isNumber:d,isBoolean:t=>!0===t||!1===t,isObject:h,isPlainObject:p,isUndefined:c,isDate:m,isFile:y,isBlob:g,isRegExp:j,isFunction:f,isStream:t=>h(t)&&f(t.pipe),isURLSearchParams:w,isTypedArray:R,isFileList:b,forEach:v,merge:function t(){const{caseless:e}=S(this)&&this||{},n={},r=(r,o)=>{const i=e&&E(n,o)||o;p(n[i])&&p(r)?n[i]=t(n[i],r):p(r)?n[i]=t({},r):a(r)?n[i]=r.slice():n[i]=r};for(let t=0,e=arguments.length;t<e;t++)arguments[t]&&v(arguments[t],r);return n},extend:(e,n,r,{allOwnKeys:o}={})=>(v(n,((n,o)=>{r&&f(n)?e[o]=t(n,r):e[o]=n}),{allOwnKeys:o}),e),trim:t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:t=>(65279===t.charCodeAt(0)&&(t=t.slice(1)),t),inherits:(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},toFlatObject:(t,e,r,o)=>{let i,s,a;const c={};if(e=e||{},null==t)return e;do{for(i=Object.getOwnPropertyNames(t),s=i.length;s-- >0;)a=i[s],o&&!o(a,t,e)||c[a]||(e[a]=t[a],c[a]=!0);t=!1!==r&&n(t)}while(t&&(!r||r(t,e))&&t!==Object.prototype);return e},kindOf:r,kindOfTest:i,endsWith:(t,e,n)=>{t=String(t),(void 0===n||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return-1!==r&&r===n},toArray:t=>{if(!t)return null;if(a(t))return t;let e=t.length;if(!d(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},forEachEntry:(t,e)=>{const n=(t&&t[Symbol.iterator]).call(t);let r;for(;(r=n.next())&&!r.done;){const n=r.value;e.call(t,n[0],n[1])}},matchAll:(t,e)=>{let n;const r=[];for(;null!==(n=t.exec(e));)r.push(n);return r},isHTMLForm:x,hasOwnProperty:T,hasOwnProp:T,reduceDescriptors:N,freezeMethods:t=>{N(t,((e,n)=>{if(f(t)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=t[n];f(r)&&(e.enumerable=!1,"writable"in e?e.writable=!1:e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(t,e)=>{const n={},r=t=>{t.forEach((t=>{n[t]=!0}))};return a(t)?r(t):r(String(t).split(e)),n},toCamelCase:t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(t,e,n){return e.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(t,e)=>(t=+t,Number.isFinite(t)?t:e),findKey:E,global:O,isContextDefined:S,ALPHABET:C,generateString:(t=16,e=C.ALPHA_DIGIT)=>{let n="";const{length:r}=e;for(;t--;)n+=e[Math.random()*r|0];return n},isSpecCompliantForm:function(t){return!!(t&&f(t.append)&&"FormData"===t[Symbol.toStringTag]&&t[Symbol.iterator])},toJSONObject:t=>{const e=new Array(10),n=(t,r)=>{if(h(t)){if(e.indexOf(t)>=0)return;if(!("toJSON"in t)){e[r]=t;const o=a(t)?[]:{};return v(t,((t,e)=>{const i=n(t,r+1);!c(i)&&(o[e]=i)})),e[r]=void 0,o}}return t};return n(t,0)}};function F(t,e,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}_.inherits(F,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:_.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const U=F.prototype,B={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((t=>{B[t]={value:t}})),Object.defineProperties(F,B),Object.defineProperty(U,"isAxiosError",{value:!0}),F.from=(t,e,n,r,o,i)=>{const s=Object.create(U);return _.toFlatObject(t,s,(function(t){return t!==Error.prototype}),(t=>"isAxiosError"!==t)),F.call(s,t.message,e,n,r,o),s.cause=t,s.name=t.name,i&&Object.assign(s,i),s};var D=F;function k(t){return _.isPlainObject(t)||_.isArray(t)}function I(t){return _.endsWith(t,"[]")?t.slice(0,-2):t}function q(t,e,n){return t?t.concat(e).map((function(t,e){return t=I(t),!n&&e?"["+t+"]":t})).join(n?".":""):e}const M=_.toFlatObject(_,{},null,(function(t){return/^is[A-Z]/.test(t)}));var z=function(t,e,n){if(!_.isObject(t))throw new TypeError("target must be an object");e=e||new FormData;const r=(n=_.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(t,e){return!_.isUndefined(e[t])}))).metaTokens,o=n.visitor||u,i=n.dots,s=n.indexes,a=(n.Blob||"undefined"!=typeof Blob&&Blob)&&_.isSpecCompliantForm(e);if(!_.isFunction(o))throw new TypeError("visitor must be a function");function c(t){if(null===t)return"";if(_.isDate(t))return t.toISOString();if(!a&&_.isBlob(t))throw new D("Blob is not supported. Use a Buffer instead.");return _.isArrayBuffer(t)||_.isTypedArray(t)?a&&"function"==typeof Blob?new Blob([t]):Buffer.from(t):t}function u(t,n,o){let a=t;if(t&&!o&&"object"==typeof t)if(_.endsWith(n,"{}"))n=r?n:n.slice(0,-2),t=JSON.stringify(t);else if(_.isArray(t)&&function(t){return _.isArray(t)&&!t.some(k)}(t)||(_.isFileList(t)||_.endsWith(n,"[]"))&&(a=_.toArray(t)))return n=I(n),a.forEach((function(t,r){!_.isUndefined(t)&&null!==t&&e.append(!0===s?q([n],r,i):null===s?n:n+"[]",c(t))})),!1;return!!k(t)||(e.append(q(o,n,i),c(t)),!1)}const l=[],f=Object.assign(M,{defaultVisitor:u,convertValue:c,isVisitable:k});if(!_.isObject(t))throw new TypeError("data must be an object");return function t(n,r){if(!_.isUndefined(n)){if(-1!==l.indexOf(n))throw Error("Circular reference detected in "+r.join("."));l.push(n),_.forEach(n,(function(n,i){!0===(!(_.isUndefined(n)||null===n)&&o.call(e,n,_.isString(i)?i.trim():i,r,f))&&t(n,r?r.concat(i):[i])})),l.pop()}}(t),e};function H(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,(function(t){return e[t]}))}function J(t,e){this._pairs=[],t&&z(t,this,e)}const G=J.prototype;G.append=function(t,e){this._pairs.push([t,e])},G.toString=function(t){const e=t?function(e){return t.call(this,e,H)}:H;return this._pairs.map((function(t){return e(t[0])+"="+e(t[1])}),"").join("&")};var W=J;function K(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function V(t,e,n){if(!e)return t;const r=n&&n.encode||K,o=n&&n.serialize;let i;if(i=o?o(e,n):_.isURLSearchParams(e)?e.toString():new W(e,n).toString(r),i){const e=t.indexOf("#");-1!==e&&(t=t.slice(0,e)),t+=(-1===t.indexOf("?")?"?":"&")+i}return t}var X=class{constructor(){this.handlers=[]}use(t,e,n){return this.handlers.push({fulfilled:t,rejected:e,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){_.forEach(this.handlers,(function(e){null!==e&&t(e)}))}},Q={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Y={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:W,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},isStandardBrowserEnv:(()=>{let t;return("undefined"==typeof navigator||"ReactNative"!==(t=navigator.product)&&"NativeScript"!==t&&"NS"!==t)&&"undefined"!=typeof window&&"undefined"!=typeof document})(),isStandardBrowserWebWorkerEnv:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,protocols:["http","https","file","blob","url","data"]},Z=function(t){function e(t,n,r,o){let i=t[o++];const s=Number.isFinite(+i),a=o>=t.length;return i=!i&&_.isArray(r)?r.length:i,a?(_.hasOwnProp(r,i)?r[i]=[r[i],n]:r[i]=n,!s):(r[i]&&_.isObject(r[i])||(r[i]=[]),e(t,n,r[i],o)&&_.isArray(r[i])&&(r[i]=function(t){const e={},n=Object.keys(t);let r;const o=n.length;let i;for(r=0;r<o;r++)i=n[r],e[i]=t[i];return e}(r[i])),!s)}if(_.isFormData(t)&&_.isFunction(t.entries)){const n={};return _.forEachEntry(t,((t,r)=>{e(function(t){return _.matchAll(/\w+|\[(\w*)]/g,t).map((t=>"[]"===t[0]?"":t[1]||t[0]))}(t),r,n,0)})),n}return null};const tt={"Content-Type":void 0},et={transitional:Q,adapter:["xhr","http"],transformRequest:[function(t,e){const n=e.getContentType()||"",r=n.indexOf("application/json")>-1,o=_.isObject(t);if(o&&_.isHTMLForm(t)&&(t=new FormData(t)),_.isFormData(t))return r&&r?JSON.stringify(Z(t)):t;if(_.isArrayBuffer(t)||_.isBuffer(t)||_.isStream(t)||_.isFile(t)||_.isBlob(t))return t;if(_.isArrayBufferView(t))return t.buffer;if(_.isURLSearchParams(t))return e.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let i;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return function(t,e){return z(t,new Y.classes.URLSearchParams,Object.assign({visitor:function(t,e,n,r){return Y.isNode&&_.isBuffer(t)?(this.append(e,t.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},e))}(t,this.formSerializer).toString();if((i=_.isFileList(t))||n.indexOf("multipart/form-data")>-1){const e=this.env&&this.env.FormData;return z(i?{"files[]":t}:t,e&&new e,this.formSerializer)}}return o||r?(e.setContentType("application/json",!1),function(t,e,n){if(_.isString(t))try{return(0,JSON.parse)(t),_.trim(t)}catch(t){if("SyntaxError"!==t.name)throw t}return(0,JSON.stringify)(t)}(t)):t}],transformResponse:[function(t){const e=this.transitional||et.transitional,n=e&&e.forcedJSONParsing,r="json"===this.responseType;if(t&&_.isString(t)&&(n&&!this.responseType||r)){const n=!(e&&e.silentJSONParsing)&&r;try{return JSON.parse(t)}catch(t){if(n){if("SyntaxError"===t.name)throw D.from(t,D.ERR_BAD_RESPONSE,this,null,this.response);throw t}}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Y.classes.FormData,Blob:Y.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};_.forEach(["delete","get","head"],(function(t){et.headers[t]={}})),_.forEach(["post","put","patch"],(function(t){et.headers[t]=_.merge(tt)}));var nt=et;const rt=_.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),ot=Symbol("internals");function it(t){return t&&String(t).trim().toLowerCase()}function st(t){return!1===t||null==t?t:_.isArray(t)?t.map(st):String(t)}function at(t,e,n,r,o){return _.isFunction(r)?r.call(this,e,n):(o&&(e=n),_.isString(e)?_.isString(r)?-1!==e.indexOf(r):_.isRegExp(r)?r.test(e):void 0:void 0)}class ct{constructor(t){t&&this.set(t)}set(t,e,n){const r=this;function o(t,e,n){const o=it(e);if(!o)throw new Error("header name must be a non-empty string");const i=_.findKey(r,o);(!i||void 0===r[i]||!0===n||void 0===n&&!1!==r[i])&&(r[i||e]=st(t))}const i=(t,e)=>_.forEach(t,((t,n)=>o(t,n,e)));return _.isPlainObject(t)||t instanceof this.constructor?i(t,e):_.isString(t)&&(t=t.trim())&&!/^[-_a-zA-Z]+$/.test(t.trim())?i((t=>{const e={};let n,r,o;return t&&t.split("\n").forEach((function(t){o=t.indexOf(":"),n=t.substring(0,o).trim().toLowerCase(),r=t.substring(o+1).trim(),!n||e[n]&&rt[n]||("set-cookie"===n?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)})),e})(t),e):null!=t&&o(e,t,n),this}get(t,e){if(t=it(t)){const n=_.findKey(this,t);if(n){const t=this[n];if(!e)return t;if(!0===e)return function(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}(t);if(_.isFunction(e))return e.call(this,t,n);if(_.isRegExp(e))return e.exec(t);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,e){if(t=it(t)){const n=_.findKey(this,t);return!(!n||void 0===this[n]||e&&!at(0,this[n],n,e))}return!1}delete(t,e){const n=this;let r=!1;function o(t){if(t=it(t)){const o=_.findKey(n,t);!o||e&&!at(0,n[o],o,e)||(delete n[o],r=!0)}}return _.isArray(t)?t.forEach(o):o(t),r}clear(t){const e=Object.keys(this);let n=e.length,r=!1;for(;n--;){const o=e[n];t&&!at(0,this[o],o,t,!0)||(delete this[o],r=!0)}return r}normalize(t){const e=this,n={};return _.forEach(this,((r,o)=>{const i=_.findKey(n,o);if(i)return e[i]=st(r),void delete e[o];const s=t?function(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((t,e,n)=>e.toUpperCase()+n))}(o):String(o).trim();s!==o&&delete e[o],e[s]=st(r),n[s]=!0})),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const e=Object.create(null);return _.forEach(this,((n,r)=>{null!=n&&!1!==n&&(e[r]=t&&_.isArray(n)?n.join(", "):n)})),e}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([t,e])=>t+": "+e)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...e){const n=new this(t);return e.forEach((t=>n.set(t))),n}static accessor(t){const e=(this[ot]=this[ot]={accessors:{}}).accessors,n=this.prototype;function r(t){const r=it(t);e[r]||(function(t,e){const n=_.toCamelCase(" "+e);["get","set","has"].forEach((r=>{Object.defineProperty(t,r+n,{value:function(t,n,o){return this[r].call(this,e,t,n,o)},configurable:!0})}))}(n,t),e[r]=!0)}return _.isArray(t)?t.forEach(r):r(t),this}}ct.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),_.freezeMethods(ct.prototype),_.freezeMethods(ct);var ut=ct;function lt(t,e){const n=this||nt,r=e||n,o=ut.from(r.headers);let i=r.data;return _.forEach(t,(function(t){i=t.call(n,i,o.normalize(),e?e.status:void 0)})),o.normalize(),i}function ft(t){return!(!t||!t.__CANCEL__)}function dt(t,e,n){D.call(this,null==t?"canceled":t,D.ERR_CANCELED,e,n),this.name="CanceledError"}_.inherits(dt,D,{__CANCEL__:!0});var ht=dt,pt=Y.isStandardBrowserEnv?{write:function(t,e,n,r,o,i){const s=[];s.push(t+"="+encodeURIComponent(e)),_.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),_.isString(r)&&s.push("path="+r),_.isString(o)&&s.push("domain="+o),!0===i&&s.push("secure"),document.cookie=s.join("; ")},read:function(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function mt(t,e){return t&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)?function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}(t,e):e}var yt=Y.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),e=document.createElement("a");let n;function r(n){let r=n;return t&&(e.setAttribute("href",r),r=e.href),e.setAttribute("href",r),{href:e.href,protocol:e.protocol?e.protocol.replace(/:$/,""):"",host:e.host,search:e.search?e.search.replace(/^\?/,""):"",hash:e.hash?e.hash.replace(/^#/,""):"",hostname:e.hostname,port:e.port,pathname:"/"===e.pathname.charAt(0)?e.pathname:"/"+e.pathname}}return n=r(window.location.href),function(t){const e=_.isString(t)?r(t):t;return e.protocol===n.protocol&&e.host===n.host}}():function(){return!0};function gt(t,e){let n=0;const r=function(t,e){t=t||10;const n=new Array(t),r=new Array(t);let o,i=0,s=0;return e=void 0!==e?e:1e3,function(a){const c=Date.now(),u=r[s];o||(o=c),n[i]=a,r[i]=c;let l=s,f=0;for(;l!==i;)f+=n[l++],l%=t;if(i=(i+1)%t,i===s&&(s=(s+1)%t),c-o<e)return;const d=u&&c-u;return d?Math.round(1e3*f/d):void 0}}(50,250);return o=>{const i=o.loaded,s=o.lengthComputable?o.total:void 0,a=i-n,c=r(a);n=i;const u={loaded:i,total:s,progress:s?i/s:void 0,bytes:a,rate:c||void 0,estimated:c&&s&&i<=s?(s-i)/c:void 0,event:o};u[e?"download":"upload"]=!0,t(u)}}const bt={http:null,xhr:"undefined"!=typeof XMLHttpRequest&&function(t){return new Promise((function(e,n){let r=t.data;const o=ut.from(t.headers).normalize(),i=t.responseType;let s;function a(){t.cancelToken&&t.cancelToken.unsubscribe(s),t.signal&&t.signal.removeEventListener("abort",s)}_.isFormData(r)&&(Y.isStandardBrowserEnv||Y.isStandardBrowserWebWorkerEnv)&&o.setContentType(!1);let c=new XMLHttpRequest;if(t.auth){const e=t.auth.username||"",n=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";o.set("Authorization","Basic "+btoa(e+":"+n))}const u=mt(t.baseURL,t.url);function l(){if(!c)return;const r=ut.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders());!function(t,e,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?e(new D("Request failed with status code "+n.status,[D.ERR_BAD_REQUEST,D.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):t(n)}((function(t){e(t),a()}),(function(t){n(t),a()}),{data:i&&"text"!==i&&"json"!==i?c.response:c.responseText,status:c.status,statusText:c.statusText,headers:r,config:t,request:c}),c=null}if(c.open(t.method.toUpperCase(),V(u,t.params,t.paramsSerializer),!0),c.timeout=t.timeout,"onloadend"in c?c.onloadend=l:c.onreadystatechange=function(){c&&4===c.readyState&&(0!==c.status||c.responseURL&&0===c.responseURL.indexOf("file:"))&&setTimeout(l)},c.onabort=function(){c&&(n(new D("Request aborted",D.ECONNABORTED,t,c)),c=null)},c.onerror=function(){n(new D("Network Error",D.ERR_NETWORK,t,c)),c=null},c.ontimeout=function(){let e=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const r=t.transitional||Q;t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),n(new D(e,r.clarifyTimeoutError?D.ETIMEDOUT:D.ECONNABORTED,t,c)),c=null},Y.isStandardBrowserEnv){const e=(t.withCredentials||yt(u))&&t.xsrfCookieName&&pt.read(t.xsrfCookieName);e&&o.set(t.xsrfHeaderName,e)}void 0===r&&o.setContentType(null),"setRequestHeader"in c&&_.forEach(o.toJSON(),(function(t,e){c.setRequestHeader(e,t)})),_.isUndefined(t.withCredentials)||(c.withCredentials=!!t.withCredentials),i&&"json"!==i&&(c.responseType=t.responseType),"function"==typeof t.onDownloadProgress&&c.addEventListener("progress",gt(t.onDownloadProgress,!0)),"function"==typeof t.onUploadProgress&&c.upload&&c.upload.addEventListener("progress",gt(t.onUploadProgress)),(t.cancelToken||t.signal)&&(s=e=>{c&&(n(!e||e.type?new ht(null,t,c):e),c.abort(),c=null)},t.cancelToken&&t.cancelToken.subscribe(s),t.signal&&(t.signal.aborted?s():t.signal.addEventListener("abort",s)));const f=function(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}(u);f&&-1===Y.protocols.indexOf(f)?n(new D("Unsupported protocol "+f+":",D.ERR_BAD_REQUEST,t)):c.send(r||null)}))}};_.forEach(bt,((t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch(t){}Object.defineProperty(t,"adapterName",{value:e})}}));function wt(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new ht(null,t)}function vt(t){return wt(t),t.headers=ut.from(t.headers),t.data=lt.call(t,t.transformRequest),-1!==["post","put","patch"].indexOf(t.method)&&t.headers.setContentType("application/x-www-form-urlencoded",!1),(t=>{t=_.isArray(t)?t:[t];const{length:e}=t;let n,r;for(let o=0;o<e&&(n=t[o],!(r=_.isString(n)?bt[n.toLowerCase()]:n));o++);if(!r){if(!1===r)throw new D(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT");throw new Error(_.hasOwnProp(bt,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`)}if(!_.isFunction(r))throw new TypeError("adapter is not a function");return r})(t.adapter||nt.adapter)(t).then((function(e){return wt(t),e.data=lt.call(t,t.transformResponse,e),e.headers=ut.from(e.headers),e}),(function(e){return ft(e)||(wt(t),e&&e.response&&(e.response.data=lt.call(t,t.transformResponse,e.response),e.response.headers=ut.from(e.response.headers))),Promise.reject(e)}))}const Et=t=>t instanceof ut?t.toJSON():t;function Ot(t,e){e=e||{};const n={};function r(t,e,n){return _.isPlainObject(t)&&_.isPlainObject(e)?_.merge.call({caseless:n},t,e):_.isPlainObject(e)?_.merge({},e):_.isArray(e)?e.slice():e}function o(t,e,n){return _.isUndefined(e)?_.isUndefined(t)?void 0:r(void 0,t,n):r(t,e,n)}function i(t,e){if(!_.isUndefined(e))return r(void 0,e)}function s(t,e){return _.isUndefined(e)?_.isUndefined(t)?void 0:r(void 0,t):r(void 0,e)}function a(n,o,i){return i in e?r(n,o):i in t?r(void 0,n):void 0}const c={url:i,method:i,data:i,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a,headers:(t,e)=>o(Et(t),Et(e),!0)};return _.forEach(Object.keys(t).concat(Object.keys(e)),(function(r){const i=c[r]||o,s=i(t[r],e[r],r);_.isUndefined(s)&&i!==a||(n[r]=s)})),n}const St={};["object","boolean","number","function","string","symbol"].forEach(((t,e)=>{St[t]=function(n){return typeof n===t||"a"+(e<1?"n ":" ")+t}}));const Rt={};St.transitional=function(t,e,n){function r(t,e){return"[Axios v1.3.4] Transitional option '"+t+"'"+e+(n?". "+n:"")}return(n,o,i)=>{if(!1===t)throw new D(r(o," has been removed"+(e?" in "+e:"")),D.ERR_DEPRECATED);return e&&!Rt[o]&&(Rt[o]=!0,console.warn(r(o," has been deprecated since v"+e+" and will be removed in the near future"))),!t||t(n,o,i)}};var At={assertOptions:function(t,e,n){if("object"!=typeof t)throw new D("options must be an object",D.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let o=r.length;for(;o-- >0;){const i=r[o],s=e[i];if(s){const e=t[i],n=void 0===e||s(e,i,t);if(!0!==n)throw new D("option "+i+" must be "+n,D.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new D("Unknown option "+i,D.ERR_BAD_OPTION)}},validators:St};const xt=At.validators;class Tt{constructor(t){this.defaults=t,this.interceptors={request:new X,response:new X}}request(t,e){"string"==typeof t?(e=e||{}).url=t:e=t||{},e=Ot(this.defaults,e);const{transitional:n,paramsSerializer:r,headers:o}=e;let i;void 0!==n&&At.assertOptions(n,{silentJSONParsing:xt.transitional(xt.boolean),forcedJSONParsing:xt.transitional(xt.boolean),clarifyTimeoutError:xt.transitional(xt.boolean)},!1),void 0!==r&&At.assertOptions(r,{encode:xt.function,serialize:xt.function},!0),e.method=(e.method||this.defaults.method||"get").toLowerCase(),i=o&&_.merge(o.common,o[e.method]),i&&_.forEach(["delete","get","head","post","put","patch","common"],(t=>{delete o[t]})),e.headers=ut.concat(i,o);const s=[];let a=!0;this.interceptors.request.forEach((function(t){"function"==typeof t.runWhen&&!1===t.runWhen(e)||(a=a&&t.synchronous,s.unshift(t.fulfilled,t.rejected))}));const c=[];let u;this.interceptors.response.forEach((function(t){c.push(t.fulfilled,t.rejected)}));let l,f=0;if(!a){const t=[vt.bind(this),void 0];for(t.unshift.apply(t,s),t.push.apply(t,c),l=t.length,u=Promise.resolve(e);f<l;)u=u.then(t[f++],t[f++]);return u}l=s.length;let d=e;for(f=0;f<l;){const t=s[f++],e=s[f++];try{d=t(d)}catch(t){e.call(this,t);break}}try{u=vt.call(this,d)}catch(t){return Promise.reject(t)}for(f=0,l=c.length;f<l;)u=u.then(c[f++],c[f++]);return u}getUri(t){return V(mt((t=Ot(this.defaults,t)).baseURL,t.url),t.params,t.paramsSerializer)}}_.forEach(["delete","get","head","options"],(function(t){Tt.prototype[t]=function(e,n){return this.request(Ot(n||{},{method:t,url:e,data:(n||{}).data}))}})),_.forEach(["post","put","patch"],(function(t){function e(e){return function(n,r,o){return this.request(Ot(o||{},{method:t,headers:e?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}Tt.prototype[t]=e(),Tt.prototype[t+"Form"]=e(!0)}));var jt=Tt;class Nt{constructor(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");let e;this.promise=new Promise((function(t){e=t}));const n=this;this.promise.then((t=>{if(!n._listeners)return;let e=n._listeners.length;for(;e-- >0;)n._listeners[e](t);n._listeners=null})),this.promise.then=t=>{let e;const r=new Promise((t=>{n.subscribe(t),e=t})).then(t);return r.cancel=function(){n.unsubscribe(e)},r},t((function(t,r,o){n.reason||(n.reason=new ht(t,r,o),e(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){this.reason?t(this.reason):this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const e=this._listeners.indexOf(t);-1!==e&&this._listeners.splice(e,1)}static source(){let t;return{token:new Nt((function(e){t=e})),cancel:t}}}var Lt=Nt;const Pt={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Pt).forEach((([t,e])=>{Pt[e]=t}));var Ct=Pt;const _t=function e(n){const r=new jt(n),o=t(jt.prototype.request,r);return _.extend(o,jt.prototype,r,{allOwnKeys:!0}),_.extend(o,r,null,{allOwnKeys:!0}),o.create=function(t){return e(Ot(n,t))},o}(nt);_t.Axios=jt,_t.CanceledError=ht,_t.CancelToken=Lt,_t.isCancel=ft,_t.VERSION="1.3.4",_t.toFormData=z,_t.AxiosError=D,_t.Cancel=_t.CanceledError,_t.all=function(t){return Promise.all(t)},_t.spread=function(t){return function(e){return t.apply(null,e)}},_t.isAxiosError=function(t){return _.isObject(t)&&!0===t.isAxiosError},_t.mergeConfig=Ot,_t.AxiosHeaders=ut,_t.formToJSON=t=>Z(_.isHTMLForm(t)?new FormData(t):t),_t.HttpStatusCode=Ct,_t.default=_t;var Ft,Ut=_t;function Bt(t){return Bt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Bt(t)}function Dt(){Dt=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r=Object.defineProperty||function(t,e,n){t[e]=n.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",a=o.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,n){return t[e]=n}}function u(t,e,n,o){var i=e&&e.prototype instanceof d?e:d,s=Object.create(i.prototype),a=new A(o||[]);return r(s,"_invoke",{value:E(t,n,a)}),s}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var f={};function d(){}function h(){}function p(){}var m={};c(m,i,(function(){return this}));var y=Object.getPrototypeOf,g=y&&y(y(x([])));g&&g!==e&&n.call(g,i)&&(m=g);var b=p.prototype=d.prototype=Object.create(m);function w(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function v(t,e){function o(r,i,s,a){var c=l(t[r],t,i);if("throw"!==c.type){var u=c.arg,f=u.value;return f&&"object"==Bt(f)&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,s,a)}),(function(t){o("throw",t,s,a)})):e.resolve(f).then((function(t){u.value=t,s(u)}),(function(t){return o("throw",t,s,a)}))}a(c.arg)}var i;r(this,"_invoke",{value:function(t,n){function r(){return new e((function(e,r){o(t,n,e,r)}))}return i=i?i.then(r,r):r()}})}function E(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return{value:void 0,done:!0}}for(n.method=o,n.arg=i;;){var s=n.delegate;if(s){var a=O(s,n);if(a){if(a===f)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=l(t,e,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===f)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}function O(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,O(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),f;var o=l(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function R(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function x(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:T}}function T(){return{value:void 0,done:!0}}return h.prototype=p,r(b,"constructor",{value:p,configurable:!0}),r(p,"constructor",{value:h,configurable:!0}),h.displayName=c(p,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,a,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},w(v.prototype),c(v.prototype,s,(function(){return this})),t.AsyncIterator=v,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var s=new v(u(e,n,r,o),i);return t.isGeneratorFunction(n)?s:s.next().then((function(t){return t.done?t.value:s.next()}))},w(b),c(b,a,"Generator"),c(b,i,(function(){return this})),c(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=x,A.prototype={constructor:A,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(R),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return s.type="throw",s.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],s=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var a=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(a&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(a){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var s=i?i.completion:{};return s.type=t,s.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),R(n),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;R(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:x(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}},t}function kt(t,e,n,r,o,i,s){try{var a=t[i](s),c=a.value}catch(t){return void n(t)}a.done?e(c):Promise.resolve(c).then(r,o)}(Ft=Dt().mark((function t(){return Dt().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:$("#submit").click((function(t){t.preventDefault(),console.log("reached inside login fn");var e=document.getElementById("email").value,n=document.getElementById("password").value;console.log(e,n),Ut.post("https://dev-be.beacon-dtx.com/user/login",{email:e,password:n}).then((function(t){console.log("login success full ",t.data.message),Office.context.ui.messageParent(t.data.message)})).catch((function(t){document.getElementById("message").innerHTML=t.response.data.message}))}));case 1:case"end":return t.stop()}}),t)})),function(){var t=this,e=arguments;return new Promise((function(n,r){var o=Ft.apply(t,e);function i(t){kt(o,n,r,i,s,"next",t)}function s(t){kt(o,n,r,i,s,"throw",t)}i(void 0)}))})()}();
//# sourceMappingURL=login.js.map