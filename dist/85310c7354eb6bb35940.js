/*! For license information please see 85310c7354eb6bb35940.js.LICENSE.txt */
function _typeof(t){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_typeof(t)}function _regeneratorRuntime(){"use strict";_regeneratorRuntime=function(){return t};var t={},e=Object.prototype,o=e.hasOwnProperty,r=Object.defineProperty||function(t,e,o){t[e]=o.value},n="function"==typeof Symbol?Symbol:{},i=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",l=n.toStringTag||"@@toStringTag";function c(t,e,o){return Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,o){return t[e]=o}}function u(t,e,o,n){var i=e&&e.prototype instanceof f?e:f,a=Object.create(i.prototype),l=new L(n||[]);return r(a,"_invoke",{value:G(t,o,l)}),a}function s(t,e,o){try{return{type:"normal",arg:t.call(e,o)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var d={};function f(){}function p(){}function h(){}var g={};c(g,i,(function(){return this}));var m=Object.getPrototypeOf,y=m&&m(m(B([])));y&&y!==e&&o.call(y,i)&&(g=y);var v=h.prototype=f.prototype=Object.create(g);function b(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){function n(r,i,a,l){var c=s(t[r],t,i);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"==_typeof(d)&&o.call(d,"__await")?e.resolve(d.__await).then((function(t){n("next",t,a,l)}),(function(t){n("throw",t,a,l)})):e.resolve(d).then((function(t){u.value=t,a(u)}),(function(t){return n("throw",t,a,l)}))}l(c.arg)}var i;r(this,"_invoke",{value:function(t,o){function r(){return new e((function(e,r){n(t,o,e,r)}))}return i=i?i.then(r,r):r()}})}function G(t,e,o){var r="suspendedStart";return function(n,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===n)throw i;return{value:void 0,done:!0}}for(o.method=n,o.arg=i;;){var a=o.delegate;if(a){var l=M(a,o);if(l){if(l===d)continue;return l}}if("next"===o.method)o.sent=o._sent=o.arg;else if("throw"===o.method){if("suspendedStart"===r)throw r="completed",o.arg;o.dispatchException(o.arg)}else"return"===o.method&&o.abrupt("return",o.arg);r="executing";var c=s(t,e,o);if("normal"===c.type){if(r=o.done?"completed":"suspendedYield",c.arg===d)continue;return{value:c.arg,done:o.done}}"throw"===c.type&&(r="completed",o.method="throw",o.arg=c.arg)}}}function M(t,e){var o=e.method,r=t.iterator[o];if(void 0===r)return e.delegate=null,"throw"===o&&t.iterator.return&&(e.method="return",e.arg=void 0,M(t,e),"throw"===e.method)||"return"!==o&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+o+"' method")),d;var n=s(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,d;var i=n.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function B(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:_}}function _(){return{value:void 0,done:!0}}return p.prototype=h,r(v,"constructor",{value:h,configurable:!0}),r(h,"constructor",{value:p,configurable:!0}),p.displayName=c(h,l,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,c(t,l,"GeneratorFunction")),t.prototype=Object.create(v),t},t.awrap=function(t){return{__await:t}},b(w.prototype),c(w.prototype,a,(function(){return this})),t.AsyncIterator=w,t.async=function(e,o,r,n,i){void 0===i&&(i=Promise);var a=new w(u(e,o,r,n),i);return t.isGeneratorFunction(o)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(v),c(v,l,"Generator"),c(v,i,(function(){return this})),c(v,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),o=[];for(var r in e)o.push(r);return o.reverse(),function t(){for(;o.length;){var r=o.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=B,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(o,r){return a.type="throw",a.arg=t,e.next=o,r&&(e.method="next",e.arg=void 0),!!r}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var l=o.call(i,"catchLoc"),c=o.call(i,"finallyLoc");if(l&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.finallyLoc===t)return this.complete(o.completion,o.afterLoc),E(o),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc===t){var r=o.completion;if("throw"===r.type){var n=r.arg;E(o)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,o){return this.delegate={iterator:B(t),resultName:e,nextLoc:o},"next"===this.method&&(this.arg=void 0),d}},t}function asyncGeneratorStep(t,e,o,r,n,i,a){try{var l=t[i](a),c=l.value}catch(t){return void o(t)}l.done?e(c):Promise.resolve(c).then(r,n)}function _asyncToGenerator(t){return function(){var e=this,o=arguments;return new Promise((function(r,n){var i=t.apply(e,o);function a(t){asyncGeneratorStep(i,r,n,a,l,"next",t)}function l(t){asyncGeneratorStep(i,r,n,a,l,"throw",t)}a(void 0)}))}}function action(t){t.completed()}function login(t){Office.context.ui.displayDialogAsync("https://localhost:3000/login.html",{height:62,width:45,displayInIframe:!0},(function(t){dialog=t.value,dialog.addEventHandler(Office.EventType.DialogMessageReceived,e)}));var e=function(t){console.log(t.message),localStorage.setItem("beaconToken",t.message),dialog.close(),enableAllKeys()}}function logout(){Office.context.ui.displayDialogAsync("https://localhost:3000/logout.html",{height:50,width:35,displayInIframe:!0},(function(e){dialog=e.value,dialog.addEventHandler(Office.EventType.DialogMessageReceived,t)}));var t=function(t){console.log(t.message),"logout"===t.message?(dialog.close(),disableAllButtons(),localStorage.removeItem("beaconToken")):dialog.close()}}function power(t){return _power.apply(this,arguments)}function _power(){return(_power=_asyncToGenerator(_regeneratorRuntime().mark((function t(e){var o;return _regeneratorRuntime().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:o=localStorage.getItem("beaconToken"),console.log(o,"beaconToken**********"),o?logout():login(),e.completed();case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function MaterialMasterGet(t){console.log("inside the MaterialMasterGet "),t.completed()}function MaterialMasterExport(t){console.log("inside the MaterialMasterExport "),t.completed()}function MaterialMasterUpdate(t){console.log("inside the MaterialMasterUpdate "),t.completed()}function bomGet(t){console.log("inside the bomGet "),t.completed()}function bomUpdate(t){console.log("inside the bomUpdate "),t.completed()}function bomCreate(t){console.log("inside the bomCreate "),t.completed()}function getFlatBom(t){console.log("inside the getFlatBom "),t.completed()}function getProjectBom(t){console.log("inside the getProjectBom "),t.completed()}function enableAllKeys(){Office.ribbon.requestUpdate({tabs:[{id:"BeaconDtx",groups:[{id:"MaterialMaster",controls:[{id:"MaterialMasterGet",enabled:!0},{id:"MaterialMasterExport",enabled:!0},{id:"MaterialMasterUpdate",enabled:!0}]},{id:"BomGroup",controls:[{id:"BomGroup.Get",enabled:!0},{id:"BomGroup.Update",enabled:!0},{id:"BomGroup.Create",enabled:!0},{id:"BomGroup.GetFlatBom",enabled:!0},{id:"BomGroup.GetProjectBom",enabled:!0}]},{id:"FormGroup",controls:[{id:"FormGroup.Configure",enabled:!0},{id:"FormGroup.Map",enabled:!0},{id:"FormGroup.SaveMapping",enabled:!0},{id:"FormGroup.GetForm",enabled:!0}]}]}]})}function disableAllButtons(){Office.ribbon.requestUpdate({tabs:[{id:"BeaconDtx",groups:[{id:"MaterialMaster",controls:[{id:"MaterialMasterGet",enabled:!1},{id:"MaterialMasterExport",enabled:!1},{id:"MaterialMasterUpdate",enabled:!1}]},{id:"AuthGroup",controls:[{id:"Authentication",item:[{id:"Authentication.Login",enabled:!0},{id:"Authentication.Logout",enabled:!1}]}]},{id:"BomGroup",controls:[{id:"BomGroup.Get",enabled:!1},{id:"BomGroup.Update",enabled:!1},{id:"BomGroup.Create",enabled:!1},{id:"BomGroup.GetFlatBom",enabled:!1},{id:"BomGroup.GetProjectBom",enabled:!1}]},{id:"FormGroup",controls:[{id:"FormGroup.Configure",enabled:!1},{id:"FormGroup.Map",enabled:!1},{id:"FormGroup.SaveMapping",enabled:!1},{id:"FormGroup.GetForm",enabled:!1}]}]}]})}function getGlobal(){return console.log("inside global function"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:void 0}Office.onReady((function(){console.log("inside office addin beacon dtx")}));var g=getGlobal();g.action=action,g.login=login,g.logout=logout,g.MaterialMasterGet=MaterialMasterGet,g.MaterialMasterExport=MaterialMasterExport,g.MaterialMasterUpdate=MaterialMasterUpdate,g.bomGet=bomGet,g.bomUpdate=bomUpdate,g.bomCreate=bomCreate,g.getFlatBom=getFlatBom,g.getProjectBom=getProjectBom,g.power=power;