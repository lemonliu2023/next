function fy(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(t,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Fp(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var dy={exports:{}},Vu={},hy={exports:{}},pt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _l=Symbol.for("react.element"),YM=Symbol.for("react.portal"),qM=Symbol.for("react.fragment"),KM=Symbol.for("react.strict_mode"),ZM=Symbol.for("react.profiler"),QM=Symbol.for("react.provider"),JM=Symbol.for("react.context"),e1=Symbol.for("react.forward_ref"),t1=Symbol.for("react.suspense"),n1=Symbol.for("react.memo"),r1=Symbol.for("react.lazy"),dg=Symbol.iterator;function i1(t){return t===null||typeof t!="object"?null:(t=dg&&t[dg]||t["@@iterator"],typeof t=="function"?t:null)}var py={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},my=Object.assign,gy={};function Qa(t,e,n){this.props=t,this.context=e,this.refs=gy,this.updater=n||py}Qa.prototype.isReactComponent={};Qa.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Qa.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function vy(){}vy.prototype=Qa.prototype;function kp(t,e,n){this.props=t,this.context=e,this.refs=gy,this.updater=n||py}var zp=kp.prototype=new vy;zp.constructor=kp;my(zp,Qa.prototype);zp.isPureReactComponent=!0;var hg=Array.isArray,_y=Object.prototype.hasOwnProperty,Bp={current:null},yy={key:!0,ref:!0,__self:!0,__source:!0};function xy(t,e,n){var r,i={},o=null,a=null;if(e!=null)for(r in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(o=""+e.key),e)_y.call(e,r)&&!yy.hasOwnProperty(r)&&(i[r]=e[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var l=Array(s),c=0;c<s;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(r in s=t.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:_l,type:t,key:o,ref:a,props:i,_owner:Bp.current}}function o1(t,e){return{$$typeof:_l,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Hp(t){return typeof t=="object"&&t!==null&&t.$$typeof===_l}function a1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var pg=/\/+/g;function Of(t,e){return typeof t=="object"&&t!==null&&t.key!=null?a1(""+t.key):e.toString(36)}function Lc(t,e,n,r,i){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case _l:case YM:a=!0}}if(a)return a=t,i=i(a),t=r===""?"."+Of(a,0):r,hg(i)?(n="",t!=null&&(n=t.replace(pg,"$&/")+"/"),Lc(i,e,n,"",function(c){return c})):i!=null&&(Hp(i)&&(i=o1(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(pg,"$&/")+"/")+t)),e.push(i)),1;if(a=0,r=r===""?".":r+":",hg(t))for(var s=0;s<t.length;s++){o=t[s];var l=r+Of(o,s);a+=Lc(o,e,n,l,i)}else if(l=i1(t),typeof l=="function")for(t=l.call(t),s=0;!(o=t.next()).done;)o=o.value,l=r+Of(o,s++),a+=Lc(o,e,n,l,i);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Dl(t,e,n){if(t==null)return t;var r=[],i=0;return Lc(t,r,"","",function(o){return e.call(n,o,i++)}),r}function s1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var En={current:null},Dc={transition:null},l1={ReactCurrentDispatcher:En,ReactCurrentBatchConfig:Dc,ReactCurrentOwner:Bp};function Sy(){throw Error("act(...) is not supported in production builds of React.")}pt.Children={map:Dl,forEach:function(t,e,n){Dl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Dl(t,function(){e++}),e},toArray:function(t){return Dl(t,function(e){return e})||[]},only:function(t){if(!Hp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};pt.Component=Qa;pt.Fragment=qM;pt.Profiler=ZM;pt.PureComponent=kp;pt.StrictMode=KM;pt.Suspense=t1;pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=l1;pt.act=Sy;pt.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=my({},t.props),i=t.key,o=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,a=Bp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var s=t.type.defaultProps;for(l in e)_y.call(e,l)&&!yy.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&s!==void 0?s[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var c=0;c<l;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:_l,type:t.type,key:i,ref:o,props:r,_owner:a}};pt.createContext=function(t){return t={$$typeof:JM,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:QM,_context:t},t.Consumer=t};pt.createElement=xy;pt.createFactory=function(t){var e=xy.bind(null,t);return e.type=t,e};pt.createRef=function(){return{current:null}};pt.forwardRef=function(t){return{$$typeof:e1,render:t}};pt.isValidElement=Hp;pt.lazy=function(t){return{$$typeof:r1,_payload:{_status:-1,_result:t},_init:s1}};pt.memo=function(t,e){return{$$typeof:n1,type:t,compare:e===void 0?null:e}};pt.startTransition=function(t){var e=Dc.transition;Dc.transition={};try{t()}finally{Dc.transition=e}};pt.unstable_act=Sy;pt.useCallback=function(t,e){return En.current.useCallback(t,e)};pt.useContext=function(t){return En.current.useContext(t)};pt.useDebugValue=function(){};pt.useDeferredValue=function(t){return En.current.useDeferredValue(t)};pt.useEffect=function(t,e){return En.current.useEffect(t,e)};pt.useId=function(){return En.current.useId()};pt.useImperativeHandle=function(t,e,n){return En.current.useImperativeHandle(t,e,n)};pt.useInsertionEffect=function(t,e){return En.current.useInsertionEffect(t,e)};pt.useLayoutEffect=function(t,e){return En.current.useLayoutEffect(t,e)};pt.useMemo=function(t,e){return En.current.useMemo(t,e)};pt.useReducer=function(t,e,n){return En.current.useReducer(t,e,n)};pt.useRef=function(t){return En.current.useRef(t)};pt.useState=function(t){return En.current.useState(t)};pt.useSyncExternalStore=function(t,e,n){return En.current.useSyncExternalStore(t,e,n)};pt.useTransition=function(){return En.current.useTransition()};pt.version="18.3.1";hy.exports=pt;var I=hy.exports;const st=Fp(I),Gu=fy({__proto__:null,default:st},[I]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c1=I,u1=Symbol.for("react.element"),f1=Symbol.for("react.fragment"),d1=Object.prototype.hasOwnProperty,h1=c1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p1={key:!0,ref:!0,__self:!0,__source:!0};function Ey(t,e,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(a=e.ref);for(r in e)d1.call(e,r)&&!p1.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:u1,type:t,key:o,ref:a,props:i,_owner:h1.current}}Vu.Fragment=f1;Vu.jsx=Ey;Vu.jsxs=Ey;dy.exports=Vu;var nn=dy.exports,sh={},My={exports:{}},jn={},wy={exports:{}},Ty={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(R,z){var X=R.length;R.push(z);e:for(;0<X;){var Y=X-1>>>1,oe=R[Y];if(0<i(oe,z))R[Y]=z,R[X]=oe,X=Y;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var z=R[0],X=R.pop();if(X!==z){R[0]=X;e:for(var Y=0,oe=R.length,xe=oe>>>1;Y<xe;){var q=2*(Y+1)-1,ae=R[q],de=q+1,fe=R[de];if(0>i(ae,X))de<oe&&0>i(fe,ae)?(R[Y]=fe,R[de]=X,Y=de):(R[Y]=ae,R[q]=X,Y=q);else if(de<oe&&0>i(fe,X))R[Y]=fe,R[de]=X,Y=de;else break e}}return z}function i(R,z){var X=R.sortIndex-z.sortIndex;return X!==0?X:R.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var a=Date,s=a.now();t.unstable_now=function(){return a.now()-s}}var l=[],c=[],u=1,f=null,d=3,p=!1,_=!1,v=!1,m=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(R){for(var z=n(c);z!==null;){if(z.callback===null)r(c);else if(z.startTime<=R)r(c),z.sortIndex=z.expirationTime,e(l,z);else break;z=n(c)}}function E(R){if(v=!1,y(R),!_)if(n(l)!==null)_=!0,U(A);else{var z=n(c);z!==null&&N(E,z.startTime-R)}}function A(R,z){_=!1,v&&(v=!1,h(P),P=-1),p=!0;var X=d;try{for(y(z),f=n(l);f!==null&&(!(f.expirationTime>z)||R&&!L());){var Y=f.callback;if(typeof Y=="function"){f.callback=null,d=f.priorityLevel;var oe=Y(f.expirationTime<=z);z=t.unstable_now(),typeof oe=="function"?f.callback=oe:f===n(l)&&r(l),y(z)}else r(l);f=n(l)}if(f!==null)var xe=!0;else{var q=n(c);q!==null&&N(E,q.startTime-z),xe=!1}return xe}finally{f=null,d=X,p=!1}}var x=!1,M=null,P=-1,T=5,w=-1;function L(){return!(t.unstable_now()-w<T)}function V(){if(M!==null){var R=t.unstable_now();w=R;var z=!0;try{z=M(!0,R)}finally{z?F():(x=!1,M=null)}}else x=!1}var F;if(typeof g=="function")F=function(){g(V)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,ee=W.port2;W.port1.onmessage=V,F=function(){ee.postMessage(null)}}else F=function(){m(V,0)};function U(R){M=R,x||(x=!0,F())}function N(R,z){P=m(function(){R(t.unstable_now())},z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(R){R.callback=null},t.unstable_continueExecution=function(){_||p||(_=!0,U(A))},t.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<R?Math.floor(1e3/R):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(R){switch(d){case 1:case 2:case 3:var z=3;break;default:z=d}var X=d;d=z;try{return R()}finally{d=X}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(R,z){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var X=d;d=R;try{return z()}finally{d=X}},t.unstable_scheduleCallback=function(R,z,X){var Y=t.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?Y+X:Y):X=Y,R){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=X+oe,R={id:u++,callback:z,priorityLevel:R,startTime:X,expirationTime:oe,sortIndex:-1},X>Y?(R.sortIndex=X,e(c,R),n(l)===null&&R===n(c)&&(v?(h(P),P=-1):v=!0,N(E,X-Y))):(R.sortIndex=oe,e(l,R),_||p||(_=!0,U(A))),R},t.unstable_shouldYield=L,t.unstable_wrapCallback=function(R){var z=d;return function(){var X=d;d=z;try{return R.apply(this,arguments)}finally{d=X}}}})(Ty);wy.exports=Ty;var m1=wy.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g1=I,Gn=m1;function he(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var by=new Set,Ws={};function Fo(t,e){Ua(t,e),Ua(t+"Capture",e)}function Ua(t,e){for(Ws[t]=e,t=0;t<e.length;t++)by.add(e[t])}var qr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),lh=Object.prototype.hasOwnProperty,v1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,mg={},gg={};function _1(t){return lh.call(gg,t)?!0:lh.call(mg,t)?!1:v1.test(t)?gg[t]=!0:(mg[t]=!0,!1)}function y1(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function x1(t,e,n,r){if(e===null||typeof e>"u"||y1(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Mn(t,e,n,r,i,o,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=a}var sn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){sn[t]=new Mn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];sn[e]=new Mn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){sn[t]=new Mn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){sn[t]=new Mn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){sn[t]=new Mn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){sn[t]=new Mn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){sn[t]=new Mn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){sn[t]=new Mn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){sn[t]=new Mn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Vp=/[\-:]([a-z])/g;function Gp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Vp,Gp);sn[e]=new Mn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Vp,Gp);sn[e]=new Mn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Vp,Gp);sn[e]=new Mn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){sn[t]=new Mn(t,1,!1,t.toLowerCase(),null,!1,!1)});sn.xlinkHref=new Mn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){sn[t]=new Mn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Wp(t,e,n,r){var i=sn.hasOwnProperty(e)?sn[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(x1(e,n,i,r)&&(n=null),r||i===null?_1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var ni=g1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Il=Symbol.for("react.element"),fa=Symbol.for("react.portal"),da=Symbol.for("react.fragment"),jp=Symbol.for("react.strict_mode"),ch=Symbol.for("react.profiler"),Cy=Symbol.for("react.provider"),Ay=Symbol.for("react.context"),$p=Symbol.for("react.forward_ref"),uh=Symbol.for("react.suspense"),fh=Symbol.for("react.suspense_list"),Xp=Symbol.for("react.memo"),vi=Symbol.for("react.lazy"),Ry=Symbol.for("react.offscreen"),vg=Symbol.iterator;function as(t){return t===null||typeof t!="object"?null:(t=vg&&t[vg]||t["@@iterator"],typeof t=="function"?t:null)}var zt=Object.assign,Ff;function Ms(t){if(Ff===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ff=e&&e[1]||""}return`
`+Ff+t}var kf=!1;function zf(t,e){if(!t||kf)return"";kf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,s=o.length-1;1<=a&&0<=s&&i[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(i[a]!==o[s]){if(a!==1||s!==1)do if(a--,s--,0>s||i[a]!==o[s]){var l=`
`+i[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=s);break}}}finally{kf=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ms(t):""}function S1(t){switch(t.tag){case 5:return Ms(t.type);case 16:return Ms("Lazy");case 13:return Ms("Suspense");case 19:return Ms("SuspenseList");case 0:case 2:case 15:return t=zf(t.type,!1),t;case 11:return t=zf(t.type.render,!1),t;case 1:return t=zf(t.type,!0),t;default:return""}}function dh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case da:return"Fragment";case fa:return"Portal";case ch:return"Profiler";case jp:return"StrictMode";case uh:return"Suspense";case fh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Ay:return(t.displayName||"Context")+".Consumer";case Cy:return(t._context.displayName||"Context")+".Provider";case $p:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Xp:return e=t.displayName||null,e!==null?e:dh(t.type)||"Memo";case vi:e=t._payload,t=t._init;try{return dh(t(e))}catch{}}return null}function E1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return dh(e);case 8:return e===jp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function zi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Py(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function M1(t){var e=Py(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Nl(t){t._valueTracker||(t._valueTracker=M1(t))}function Ly(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Py(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Jc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function hh(t,e){var n=e.checked;return zt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function _g(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=zi(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Dy(t,e){e=e.checked,e!=null&&Wp(t,"checked",e,!1)}function ph(t,e){Dy(t,e);var n=zi(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?mh(t,e.type,n):e.hasOwnProperty("defaultValue")&&mh(t,e.type,zi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function yg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function mh(t,e,n){(e!=="number"||Jc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ws=Array.isArray;function ba(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+zi(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function gh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(he(91));return zt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function xg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(he(92));if(ws(n)){if(1<n.length)throw Error(he(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:zi(n)}}function Iy(t,e){var n=zi(e.value),r=zi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Sg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Ny(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function vh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Ny(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ul,Uy=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ul=Ul||document.createElement("div"),Ul.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ul.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function js(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Rs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},w1=["Webkit","ms","Moz","O"];Object.keys(Rs).forEach(function(t){w1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Rs[e]=Rs[t]})});function Oy(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Rs.hasOwnProperty(t)&&Rs[t]?(""+e).trim():e+"px"}function Fy(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Oy(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var T1=zt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _h(t,e){if(e){if(T1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(he(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(he(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(he(61))}if(e.style!=null&&typeof e.style!="object")throw Error(he(62))}}function yh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xh=null;function Yp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Sh=null,Ca=null,Aa=null;function Eg(t){if(t=Sl(t)){if(typeof Sh!="function")throw Error(he(280));var e=t.stateNode;e&&(e=Yu(e),Sh(t.stateNode,t.type,e))}}function ky(t){Ca?Aa?Aa.push(t):Aa=[t]:Ca=t}function zy(){if(Ca){var t=Ca,e=Aa;if(Aa=Ca=null,Eg(t),e)for(t=0;t<e.length;t++)Eg(e[t])}}function By(t,e){return t(e)}function Hy(){}var Bf=!1;function Vy(t,e,n){if(Bf)return t(e,n);Bf=!0;try{return By(t,e,n)}finally{Bf=!1,(Ca!==null||Aa!==null)&&(Hy(),zy())}}function $s(t,e){var n=t.stateNode;if(n===null)return null;var r=Yu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(he(231,e,typeof n));return n}var Eh=!1;if(qr)try{var ss={};Object.defineProperty(ss,"passive",{get:function(){Eh=!0}}),window.addEventListener("test",ss,ss),window.removeEventListener("test",ss,ss)}catch{Eh=!1}function b1(t,e,n,r,i,o,a,s,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var Ps=!1,eu=null,tu=!1,Mh=null,C1={onError:function(t){Ps=!0,eu=t}};function A1(t,e,n,r,i,o,a,s,l){Ps=!1,eu=null,b1.apply(C1,arguments)}function R1(t,e,n,r,i,o,a,s,l){if(A1.apply(this,arguments),Ps){if(Ps){var c=eu;Ps=!1,eu=null}else throw Error(he(198));tu||(tu=!0,Mh=c)}}function ko(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Gy(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Mg(t){if(ko(t)!==t)throw Error(he(188))}function P1(t){var e=t.alternate;if(!e){if(e=ko(t),e===null)throw Error(he(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Mg(i),t;if(o===r)return Mg(i),e;o=o.sibling}throw Error(he(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a){for(s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a)throw Error(he(189))}}if(n.alternate!==r)throw Error(he(190))}if(n.tag!==3)throw Error(he(188));return n.stateNode.current===n?t:e}function Wy(t){return t=P1(t),t!==null?jy(t):null}function jy(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=jy(t);if(e!==null)return e;t=t.sibling}return null}var $y=Gn.unstable_scheduleCallback,wg=Gn.unstable_cancelCallback,L1=Gn.unstable_shouldYield,D1=Gn.unstable_requestPaint,Ht=Gn.unstable_now,I1=Gn.unstable_getCurrentPriorityLevel,qp=Gn.unstable_ImmediatePriority,Xy=Gn.unstable_UserBlockingPriority,nu=Gn.unstable_NormalPriority,N1=Gn.unstable_LowPriority,Yy=Gn.unstable_IdlePriority,Wu=null,Pr=null;function U1(t){if(Pr&&typeof Pr.onCommitFiberRoot=="function")try{Pr.onCommitFiberRoot(Wu,t,void 0,(t.current.flags&128)===128)}catch{}}var vr=Math.clz32?Math.clz32:k1,O1=Math.log,F1=Math.LN2;function k1(t){return t>>>=0,t===0?32:31-(O1(t)/F1|0)|0}var Ol=64,Fl=4194304;function Ts(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ru(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,o=t.pingedLanes,a=n&268435455;if(a!==0){var s=a&~i;s!==0?r=Ts(s):(o&=a,o!==0&&(r=Ts(o)))}else a=n&~i,a!==0?r=Ts(a):o!==0&&(r=Ts(o));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,o=e&-e,i>=o||i===16&&(o&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-vr(e),i=1<<n,r|=t[n],e&=~i;return r}function z1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function B1(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,o=t.pendingLanes;0<o;){var a=31-vr(o),s=1<<a,l=i[a];l===-1?(!(s&n)||s&r)&&(i[a]=z1(s,e)):l<=e&&(t.expiredLanes|=s),o&=~s}}function wh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function qy(){var t=Ol;return Ol<<=1,!(Ol&4194240)&&(Ol=64),t}function Hf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function yl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-vr(e),t[e]=n}function H1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-vr(n),o=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~o}}function Kp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-vr(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Et=0;function Ky(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Zy,Zp,Qy,Jy,ex,Th=!1,kl=[],Ai=null,Ri=null,Pi=null,Xs=new Map,Ys=new Map,xi=[],V1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Tg(t,e){switch(t){case"focusin":case"focusout":Ai=null;break;case"dragenter":case"dragleave":Ri=null;break;case"mouseover":case"mouseout":Pi=null;break;case"pointerover":case"pointerout":Xs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ys.delete(e.pointerId)}}function ls(t,e,n,r,i,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},e!==null&&(e=Sl(e),e!==null&&Zp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function G1(t,e,n,r,i){switch(e){case"focusin":return Ai=ls(Ai,t,e,n,r,i),!0;case"dragenter":return Ri=ls(Ri,t,e,n,r,i),!0;case"mouseover":return Pi=ls(Pi,t,e,n,r,i),!0;case"pointerover":var o=i.pointerId;return Xs.set(o,ls(Xs.get(o)||null,t,e,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Ys.set(o,ls(Ys.get(o)||null,t,e,n,r,i)),!0}return!1}function tx(t){var e=ho(t.target);if(e!==null){var n=ko(e);if(n!==null){if(e=n.tag,e===13){if(e=Gy(n),e!==null){t.blockedOn=e,ex(t.priority,function(){Qy(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ic(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=bh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);xh=r,n.target.dispatchEvent(r),xh=null}else return e=Sl(n),e!==null&&Zp(e),t.blockedOn=n,!1;e.shift()}return!0}function bg(t,e,n){Ic(t)&&n.delete(e)}function W1(){Th=!1,Ai!==null&&Ic(Ai)&&(Ai=null),Ri!==null&&Ic(Ri)&&(Ri=null),Pi!==null&&Ic(Pi)&&(Pi=null),Xs.forEach(bg),Ys.forEach(bg)}function cs(t,e){t.blockedOn===e&&(t.blockedOn=null,Th||(Th=!0,Gn.unstable_scheduleCallback(Gn.unstable_NormalPriority,W1)))}function qs(t){function e(i){return cs(i,t)}if(0<kl.length){cs(kl[0],t);for(var n=1;n<kl.length;n++){var r=kl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Ai!==null&&cs(Ai,t),Ri!==null&&cs(Ri,t),Pi!==null&&cs(Pi,t),Xs.forEach(e),Ys.forEach(e),n=0;n<xi.length;n++)r=xi[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<xi.length&&(n=xi[0],n.blockedOn===null);)tx(n),n.blockedOn===null&&xi.shift()}var Ra=ni.ReactCurrentBatchConfig,iu=!0;function j1(t,e,n,r){var i=Et,o=Ra.transition;Ra.transition=null;try{Et=1,Qp(t,e,n,r)}finally{Et=i,Ra.transition=o}}function $1(t,e,n,r){var i=Et,o=Ra.transition;Ra.transition=null;try{Et=4,Qp(t,e,n,r)}finally{Et=i,Ra.transition=o}}function Qp(t,e,n,r){if(iu){var i=bh(t,e,n,r);if(i===null)Zf(t,e,r,ou,n),Tg(t,r);else if(G1(i,t,e,n,r))r.stopPropagation();else if(Tg(t,r),e&4&&-1<V1.indexOf(t)){for(;i!==null;){var o=Sl(i);if(o!==null&&Zy(o),o=bh(t,e,n,r),o===null&&Zf(t,e,r,ou,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Zf(t,e,r,null,n)}}var ou=null;function bh(t,e,n,r){if(ou=null,t=Yp(r),t=ho(t),t!==null)if(e=ko(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Gy(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ou=t,null}function nx(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(I1()){case qp:return 1;case Xy:return 4;case nu:case N1:return 16;case Yy:return 536870912;default:return 16}default:return 16}}var Mi=null,Jp=null,Nc=null;function rx(){if(Nc)return Nc;var t,e=Jp,n=e.length,r,i="value"in Mi?Mi.value:Mi.textContent,o=i.length;for(t=0;t<n&&e[t]===i[t];t++);var a=n-t;for(r=1;r<=a&&e[n-r]===i[o-r];r++);return Nc=i.slice(t,1<r?1-r:void 0)}function Uc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function zl(){return!0}function Cg(){return!1}function $n(t){function e(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var s in t)t.hasOwnProperty(s)&&(n=t[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?zl:Cg,this.isPropagationStopped=Cg,this}return zt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=zl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=zl)},persist:function(){},isPersistent:zl}),e}var Ja={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},em=$n(Ja),xl=zt({},Ja,{view:0,detail:0}),X1=$n(xl),Vf,Gf,us,ju=zt({},xl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==us&&(us&&t.type==="mousemove"?(Vf=t.screenX-us.screenX,Gf=t.screenY-us.screenY):Gf=Vf=0,us=t),Vf)},movementY:function(t){return"movementY"in t?t.movementY:Gf}}),Ag=$n(ju),Y1=zt({},ju,{dataTransfer:0}),q1=$n(Y1),K1=zt({},xl,{relatedTarget:0}),Wf=$n(K1),Z1=zt({},Ja,{animationName:0,elapsedTime:0,pseudoElement:0}),Q1=$n(Z1),J1=zt({},Ja,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ew=$n(J1),tw=zt({},Ja,{data:0}),Rg=$n(tw),nw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},iw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ow(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=iw[t])?!!e[t]:!1}function tm(){return ow}var aw=zt({},xl,{key:function(t){if(t.key){var e=nw[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Uc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?rw[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tm,charCode:function(t){return t.type==="keypress"?Uc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Uc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),sw=$n(aw),lw=zt({},ju,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pg=$n(lw),cw=zt({},xl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tm}),uw=$n(cw),fw=zt({},Ja,{propertyName:0,elapsedTime:0,pseudoElement:0}),dw=$n(fw),hw=zt({},ju,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),pw=$n(hw),mw=[9,13,27,32],nm=qr&&"CompositionEvent"in window,Ls=null;qr&&"documentMode"in document&&(Ls=document.documentMode);var gw=qr&&"TextEvent"in window&&!Ls,ix=qr&&(!nm||Ls&&8<Ls&&11>=Ls),Lg=" ",Dg=!1;function ox(t,e){switch(t){case"keyup":return mw.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ax(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ha=!1;function vw(t,e){switch(t){case"compositionend":return ax(e);case"keypress":return e.which!==32?null:(Dg=!0,Lg);case"textInput":return t=e.data,t===Lg&&Dg?null:t;default:return null}}function _w(t,e){if(ha)return t==="compositionend"||!nm&&ox(t,e)?(t=rx(),Nc=Jp=Mi=null,ha=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ix&&e.locale!=="ko"?null:e.data;default:return null}}var yw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ig(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!yw[t.type]:e==="textarea"}function sx(t,e,n,r){ky(r),e=au(e,"onChange"),0<e.length&&(n=new em("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ds=null,Ks=null;function xw(t){_x(t,0)}function $u(t){var e=ga(t);if(Ly(e))return t}function Sw(t,e){if(t==="change")return e}var lx=!1;if(qr){var jf;if(qr){var $f="oninput"in document;if(!$f){var Ng=document.createElement("div");Ng.setAttribute("oninput","return;"),$f=typeof Ng.oninput=="function"}jf=$f}else jf=!1;lx=jf&&(!document.documentMode||9<document.documentMode)}function Ug(){Ds&&(Ds.detachEvent("onpropertychange",cx),Ks=Ds=null)}function cx(t){if(t.propertyName==="value"&&$u(Ks)){var e=[];sx(e,Ks,t,Yp(t)),Vy(xw,e)}}function Ew(t,e,n){t==="focusin"?(Ug(),Ds=e,Ks=n,Ds.attachEvent("onpropertychange",cx)):t==="focusout"&&Ug()}function Mw(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return $u(Ks)}function ww(t,e){if(t==="click")return $u(e)}function Tw(t,e){if(t==="input"||t==="change")return $u(e)}function bw(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Sr=typeof Object.is=="function"?Object.is:bw;function Zs(t,e){if(Sr(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!lh.call(e,i)||!Sr(t[i],e[i]))return!1}return!0}function Og(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Fg(t,e){var n=Og(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Og(n)}}function ux(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?ux(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function fx(){for(var t=window,e=Jc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Jc(t.document)}return e}function rm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Cw(t){var e=fx(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&ux(n.ownerDocument.documentElement,n)){if(r!==null&&rm(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!t.extend&&o>r&&(i=r,r=o,o=i),i=Fg(n,o);var a=Fg(n,r);i&&a&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),o>r?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Aw=qr&&"documentMode"in document&&11>=document.documentMode,pa=null,Ch=null,Is=null,Ah=!1;function kg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ah||pa==null||pa!==Jc(r)||(r=pa,"selectionStart"in r&&rm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Is&&Zs(Is,r)||(Is=r,r=au(Ch,"onSelect"),0<r.length&&(e=new em("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=pa)))}function Bl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ma={animationend:Bl("Animation","AnimationEnd"),animationiteration:Bl("Animation","AnimationIteration"),animationstart:Bl("Animation","AnimationStart"),transitionend:Bl("Transition","TransitionEnd")},Xf={},dx={};qr&&(dx=document.createElement("div").style,"AnimationEvent"in window||(delete ma.animationend.animation,delete ma.animationiteration.animation,delete ma.animationstart.animation),"TransitionEvent"in window||delete ma.transitionend.transition);function Xu(t){if(Xf[t])return Xf[t];if(!ma[t])return t;var e=ma[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in dx)return Xf[t]=e[n];return t}var hx=Xu("animationend"),px=Xu("animationiteration"),mx=Xu("animationstart"),gx=Xu("transitionend"),vx=new Map,zg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Wi(t,e){vx.set(t,e),Fo(e,[t])}for(var Yf=0;Yf<zg.length;Yf++){var qf=zg[Yf],Rw=qf.toLowerCase(),Pw=qf[0].toUpperCase()+qf.slice(1);Wi(Rw,"on"+Pw)}Wi(hx,"onAnimationEnd");Wi(px,"onAnimationIteration");Wi(mx,"onAnimationStart");Wi("dblclick","onDoubleClick");Wi("focusin","onFocus");Wi("focusout","onBlur");Wi(gx,"onTransitionEnd");Ua("onMouseEnter",["mouseout","mouseover"]);Ua("onMouseLeave",["mouseout","mouseover"]);Ua("onPointerEnter",["pointerout","pointerover"]);Ua("onPointerLeave",["pointerout","pointerover"]);Fo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Fo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Fo("onBeforeInput",["compositionend","keypress","textInput","paste"]);Fo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Fo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Fo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Lw=new Set("cancel close invalid load scroll toggle".split(" ").concat(bs));function Bg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,R1(r,e,void 0,t),t.currentTarget=null}function _x(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var o=void 0;if(e)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,c=s.currentTarget;if(s=s.listener,l!==o&&i.isPropagationStopped())break e;Bg(i,s,c),o=l}else for(a=0;a<r.length;a++){if(s=r[a],l=s.instance,c=s.currentTarget,s=s.listener,l!==o&&i.isPropagationStopped())break e;Bg(i,s,c),o=l}}}if(tu)throw t=Mh,tu=!1,Mh=null,t}function Lt(t,e){var n=e[Ih];n===void 0&&(n=e[Ih]=new Set);var r=t+"__bubble";n.has(r)||(yx(e,t,2,!1),n.add(r))}function Kf(t,e,n){var r=0;e&&(r|=4),yx(n,t,r,e)}var Hl="_reactListening"+Math.random().toString(36).slice(2);function Qs(t){if(!t[Hl]){t[Hl]=!0,by.forEach(function(n){n!=="selectionchange"&&(Lw.has(n)||Kf(n,!1,t),Kf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Hl]||(e[Hl]=!0,Kf("selectionchange",!1,e))}}function yx(t,e,n,r){switch(nx(e)){case 1:var i=j1;break;case 4:i=$1;break;default:i=Qp}n=i.bind(null,e,n,t),i=void 0,!Eh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Zf(t,e,n,r,i){var o=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;a=a.return}for(;s!==null;){if(a=ho(s),a===null)return;if(l=a.tag,l===5||l===6){r=o=a;continue e}s=s.parentNode}}r=r.return}Vy(function(){var c=o,u=Yp(n),f=[];e:{var d=vx.get(t);if(d!==void 0){var p=em,_=t;switch(t){case"keypress":if(Uc(n)===0)break e;case"keydown":case"keyup":p=sw;break;case"focusin":_="focus",p=Wf;break;case"focusout":_="blur",p=Wf;break;case"beforeblur":case"afterblur":p=Wf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Ag;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=q1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=uw;break;case hx:case px:case mx:p=Q1;break;case gx:p=dw;break;case"scroll":p=X1;break;case"wheel":p=pw;break;case"copy":case"cut":case"paste":p=ew;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Pg}var v=(e&4)!==0,m=!v&&t==="scroll",h=v?d!==null?d+"Capture":null:d;v=[];for(var g=c,y;g!==null;){y=g;var E=y.stateNode;if(y.tag===5&&E!==null&&(y=E,h!==null&&(E=$s(g,h),E!=null&&v.push(Js(g,E,y)))),m)break;g=g.return}0<v.length&&(d=new p(d,_,null,n,u),f.push({event:d,listeners:v}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==xh&&(_=n.relatedTarget||n.fromElement)&&(ho(_)||_[Kr]))break e;if((p||d)&&(d=u.window===u?u:(d=u.ownerDocument)?d.defaultView||d.parentWindow:window,p?(_=n.relatedTarget||n.toElement,p=c,_=_?ho(_):null,_!==null&&(m=ko(_),_!==m||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=c),p!==_)){if(v=Ag,E="onMouseLeave",h="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(v=Pg,E="onPointerLeave",h="onPointerEnter",g="pointer"),m=p==null?d:ga(p),y=_==null?d:ga(_),d=new v(E,g+"leave",p,n,u),d.target=m,d.relatedTarget=y,E=null,ho(u)===c&&(v=new v(h,g+"enter",_,n,u),v.target=y,v.relatedTarget=m,E=v),m=E,p&&_)t:{for(v=p,h=_,g=0,y=v;y;y=Ho(y))g++;for(y=0,E=h;E;E=Ho(E))y++;for(;0<g-y;)v=Ho(v),g--;for(;0<y-g;)h=Ho(h),y--;for(;g--;){if(v===h||h!==null&&v===h.alternate)break t;v=Ho(v),h=Ho(h)}v=null}else v=null;p!==null&&Hg(f,d,p,v,!1),_!==null&&m!==null&&Hg(f,m,_,v,!0)}}e:{if(d=c?ga(c):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var A=Sw;else if(Ig(d))if(lx)A=Tw;else{A=Mw;var x=Ew}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(A=ww);if(A&&(A=A(t,c))){sx(f,A,n,u);break e}x&&x(t,d,c),t==="focusout"&&(x=d._wrapperState)&&x.controlled&&d.type==="number"&&mh(d,"number",d.value)}switch(x=c?ga(c):window,t){case"focusin":(Ig(x)||x.contentEditable==="true")&&(pa=x,Ch=c,Is=null);break;case"focusout":Is=Ch=pa=null;break;case"mousedown":Ah=!0;break;case"contextmenu":case"mouseup":case"dragend":Ah=!1,kg(f,n,u);break;case"selectionchange":if(Aw)break;case"keydown":case"keyup":kg(f,n,u)}var M;if(nm)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else ha?ox(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(ix&&n.locale!=="ko"&&(ha||P!=="onCompositionStart"?P==="onCompositionEnd"&&ha&&(M=rx()):(Mi=u,Jp="value"in Mi?Mi.value:Mi.textContent,ha=!0)),x=au(c,P),0<x.length&&(P=new Rg(P,t,null,n,u),f.push({event:P,listeners:x}),M?P.data=M:(M=ax(n),M!==null&&(P.data=M)))),(M=gw?vw(t,n):_w(t,n))&&(c=au(c,"onBeforeInput"),0<c.length&&(u=new Rg("onBeforeInput","beforeinput",null,n,u),f.push({event:u,listeners:c}),u.data=M))}_x(f,e)})}function Js(t,e,n){return{instance:t,listener:e,currentTarget:n}}function au(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=$s(t,n),o!=null&&r.unshift(Js(t,o,i)),o=$s(t,e),o!=null&&r.push(Js(t,o,i))),t=t.return}return r}function Ho(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Hg(t,e,n,r,i){for(var o=e._reactName,a=[];n!==null&&n!==r;){var s=n,l=s.alternate,c=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&c!==null&&(s=c,i?(l=$s(n,o),l!=null&&a.unshift(Js(n,l,s))):i||(l=$s(n,o),l!=null&&a.push(Js(n,l,s)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var Dw=/\r\n?/g,Iw=/\u0000|\uFFFD/g;function Vg(t){return(typeof t=="string"?t:""+t).replace(Dw,`
`).replace(Iw,"")}function Vl(t,e,n){if(e=Vg(e),Vg(t)!==e&&n)throw Error(he(425))}function su(){}var Rh=null,Ph=null;function Lh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Dh=typeof setTimeout=="function"?setTimeout:void 0,Nw=typeof clearTimeout=="function"?clearTimeout:void 0,Gg=typeof Promise=="function"?Promise:void 0,Uw=typeof queueMicrotask=="function"?queueMicrotask:typeof Gg<"u"?function(t){return Gg.resolve(null).then(t).catch(Ow)}:Dh;function Ow(t){setTimeout(function(){throw t})}function Qf(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),qs(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);qs(e)}function Li(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Wg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var es=Math.random().toString(36).slice(2),Cr="__reactFiber$"+es,el="__reactProps$"+es,Kr="__reactContainer$"+es,Ih="__reactEvents$"+es,Fw="__reactListeners$"+es,kw="__reactHandles$"+es;function ho(t){var e=t[Cr];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Kr]||n[Cr]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Wg(t);t!==null;){if(n=t[Cr])return n;t=Wg(t)}return e}t=n,n=t.parentNode}return null}function Sl(t){return t=t[Cr]||t[Kr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ga(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(he(33))}function Yu(t){return t[el]||null}var Nh=[],va=-1;function ji(t){return{current:t}}function It(t){0>va||(t.current=Nh[va],Nh[va]=null,va--)}function Rt(t,e){va++,Nh[va]=t.current,t.current=e}var Bi={},pn=ji(Bi),bn=ji(!1),Co=Bi;function Oa(t,e){var n=t.type.contextTypes;if(!n)return Bi;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=e[o];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Cn(t){return t=t.childContextTypes,t!=null}function lu(){It(bn),It(pn)}function jg(t,e,n){if(pn.current!==Bi)throw Error(he(168));Rt(pn,e),Rt(bn,n)}function xx(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(he(108,E1(t)||"Unknown",i));return zt({},n,r)}function cu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Bi,Co=pn.current,Rt(pn,t),Rt(bn,bn.current),!0}function $g(t,e,n){var r=t.stateNode;if(!r)throw Error(he(169));n?(t=xx(t,e,Co),r.__reactInternalMemoizedMergedChildContext=t,It(bn),It(pn),Rt(pn,t)):It(bn),Rt(bn,n)}var Gr=null,qu=!1,Jf=!1;function Sx(t){Gr===null?Gr=[t]:Gr.push(t)}function zw(t){qu=!0,Sx(t)}function $i(){if(!Jf&&Gr!==null){Jf=!0;var t=0,e=Et;try{var n=Gr;for(Et=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Gr=null,qu=!1}catch(i){throw Gr!==null&&(Gr=Gr.slice(t+1)),$y(qp,$i),i}finally{Et=e,Jf=!1}}return null}var _a=[],ya=0,uu=null,fu=0,Kn=[],Zn=0,Ao=null,jr=1,$r="";function oo(t,e){_a[ya++]=fu,_a[ya++]=uu,uu=t,fu=e}function Ex(t,e,n){Kn[Zn++]=jr,Kn[Zn++]=$r,Kn[Zn++]=Ao,Ao=t;var r=jr;t=$r;var i=32-vr(r)-1;r&=~(1<<i),n+=1;var o=32-vr(e)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,jr=1<<32-vr(e)+i|n<<i|r,$r=o+t}else jr=1<<o|n<<i|r,$r=t}function im(t){t.return!==null&&(oo(t,1),Ex(t,1,0))}function om(t){for(;t===uu;)uu=_a[--ya],_a[ya]=null,fu=_a[--ya],_a[ya]=null;for(;t===Ao;)Ao=Kn[--Zn],Kn[Zn]=null,$r=Kn[--Zn],Kn[Zn]=null,jr=Kn[--Zn],Kn[Zn]=null}var Vn=null,Bn=null,Ut=!1,mr=null;function Mx(t,e){var n=Jn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Xg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Vn=t,Bn=Li(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Vn=t,Bn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ao!==null?{id:jr,overflow:$r}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Jn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Vn=t,Bn=null,!0):!1;default:return!1}}function Uh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Oh(t){if(Ut){var e=Bn;if(e){var n=e;if(!Xg(t,e)){if(Uh(t))throw Error(he(418));e=Li(n.nextSibling);var r=Vn;e&&Xg(t,e)?Mx(r,n):(t.flags=t.flags&-4097|2,Ut=!1,Vn=t)}}else{if(Uh(t))throw Error(he(418));t.flags=t.flags&-4097|2,Ut=!1,Vn=t}}}function Yg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Vn=t}function Gl(t){if(t!==Vn)return!1;if(!Ut)return Yg(t),Ut=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Lh(t.type,t.memoizedProps)),e&&(e=Bn)){if(Uh(t))throw wx(),Error(he(418));for(;e;)Mx(t,e),e=Li(e.nextSibling)}if(Yg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(he(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Bn=Li(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Bn=null}}else Bn=Vn?Li(t.stateNode.nextSibling):null;return!0}function wx(){for(var t=Bn;t;)t=Li(t.nextSibling)}function Fa(){Bn=Vn=null,Ut=!1}function am(t){mr===null?mr=[t]:mr.push(t)}var Bw=ni.ReactCurrentBatchConfig;function fs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(he(309));var r=n.stateNode}if(!r)throw Error(he(147,t));var i=r,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(a){var s=i.refs;a===null?delete s[o]:s[o]=a},e._stringRef=o,e)}if(typeof t!="string")throw Error(he(284));if(!n._owner)throw Error(he(290,t))}return t}function Wl(t,e){throw t=Object.prototype.toString.call(e),Error(he(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function qg(t){var e=t._init;return e(t._payload)}function Tx(t){function e(h,g){if(t){var y=h.deletions;y===null?(h.deletions=[g],h.flags|=16):y.push(g)}}function n(h,g){if(!t)return null;for(;g!==null;)e(h,g),g=g.sibling;return null}function r(h,g){for(h=new Map;g!==null;)g.key!==null?h.set(g.key,g):h.set(g.index,g),g=g.sibling;return h}function i(h,g){return h=Ui(h,g),h.index=0,h.sibling=null,h}function o(h,g,y){return h.index=y,t?(y=h.alternate,y!==null?(y=y.index,y<g?(h.flags|=2,g):y):(h.flags|=2,g)):(h.flags|=1048576,g)}function a(h){return t&&h.alternate===null&&(h.flags|=2),h}function s(h,g,y,E){return g===null||g.tag!==6?(g=ad(y,h.mode,E),g.return=h,g):(g=i(g,y),g.return=h,g)}function l(h,g,y,E){var A=y.type;return A===da?u(h,g,y.props.children,E,y.key):g!==null&&(g.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===vi&&qg(A)===g.type)?(E=i(g,y.props),E.ref=fs(h,g,y),E.return=h,E):(E=Vc(y.type,y.key,y.props,null,h.mode,E),E.ref=fs(h,g,y),E.return=h,E)}function c(h,g,y,E){return g===null||g.tag!==4||g.stateNode.containerInfo!==y.containerInfo||g.stateNode.implementation!==y.implementation?(g=sd(y,h.mode,E),g.return=h,g):(g=i(g,y.children||[]),g.return=h,g)}function u(h,g,y,E,A){return g===null||g.tag!==7?(g=Eo(y,h.mode,E,A),g.return=h,g):(g=i(g,y),g.return=h,g)}function f(h,g,y){if(typeof g=="string"&&g!==""||typeof g=="number")return g=ad(""+g,h.mode,y),g.return=h,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Il:return y=Vc(g.type,g.key,g.props,null,h.mode,y),y.ref=fs(h,null,g),y.return=h,y;case fa:return g=sd(g,h.mode,y),g.return=h,g;case vi:var E=g._init;return f(h,E(g._payload),y)}if(ws(g)||as(g))return g=Eo(g,h.mode,y,null),g.return=h,g;Wl(h,g)}return null}function d(h,g,y,E){var A=g!==null?g.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return A!==null?null:s(h,g,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Il:return y.key===A?l(h,g,y,E):null;case fa:return y.key===A?c(h,g,y,E):null;case vi:return A=y._init,d(h,g,A(y._payload),E)}if(ws(y)||as(y))return A!==null?null:u(h,g,y,E,null);Wl(h,y)}return null}function p(h,g,y,E,A){if(typeof E=="string"&&E!==""||typeof E=="number")return h=h.get(y)||null,s(g,h,""+E,A);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Il:return h=h.get(E.key===null?y:E.key)||null,l(g,h,E,A);case fa:return h=h.get(E.key===null?y:E.key)||null,c(g,h,E,A);case vi:var x=E._init;return p(h,g,y,x(E._payload),A)}if(ws(E)||as(E))return h=h.get(y)||null,u(g,h,E,A,null);Wl(g,E)}return null}function _(h,g,y,E){for(var A=null,x=null,M=g,P=g=0,T=null;M!==null&&P<y.length;P++){M.index>P?(T=M,M=null):T=M.sibling;var w=d(h,M,y[P],E);if(w===null){M===null&&(M=T);break}t&&M&&w.alternate===null&&e(h,M),g=o(w,g,P),x===null?A=w:x.sibling=w,x=w,M=T}if(P===y.length)return n(h,M),Ut&&oo(h,P),A;if(M===null){for(;P<y.length;P++)M=f(h,y[P],E),M!==null&&(g=o(M,g,P),x===null?A=M:x.sibling=M,x=M);return Ut&&oo(h,P),A}for(M=r(h,M);P<y.length;P++)T=p(M,h,P,y[P],E),T!==null&&(t&&T.alternate!==null&&M.delete(T.key===null?P:T.key),g=o(T,g,P),x===null?A=T:x.sibling=T,x=T);return t&&M.forEach(function(L){return e(h,L)}),Ut&&oo(h,P),A}function v(h,g,y,E){var A=as(y);if(typeof A!="function")throw Error(he(150));if(y=A.call(y),y==null)throw Error(he(151));for(var x=A=null,M=g,P=g=0,T=null,w=y.next();M!==null&&!w.done;P++,w=y.next()){M.index>P?(T=M,M=null):T=M.sibling;var L=d(h,M,w.value,E);if(L===null){M===null&&(M=T);break}t&&M&&L.alternate===null&&e(h,M),g=o(L,g,P),x===null?A=L:x.sibling=L,x=L,M=T}if(w.done)return n(h,M),Ut&&oo(h,P),A;if(M===null){for(;!w.done;P++,w=y.next())w=f(h,w.value,E),w!==null&&(g=o(w,g,P),x===null?A=w:x.sibling=w,x=w);return Ut&&oo(h,P),A}for(M=r(h,M);!w.done;P++,w=y.next())w=p(M,h,P,w.value,E),w!==null&&(t&&w.alternate!==null&&M.delete(w.key===null?P:w.key),g=o(w,g,P),x===null?A=w:x.sibling=w,x=w);return t&&M.forEach(function(V){return e(h,V)}),Ut&&oo(h,P),A}function m(h,g,y,E){if(typeof y=="object"&&y!==null&&y.type===da&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Il:e:{for(var A=y.key,x=g;x!==null;){if(x.key===A){if(A=y.type,A===da){if(x.tag===7){n(h,x.sibling),g=i(x,y.props.children),g.return=h,h=g;break e}}else if(x.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===vi&&qg(A)===x.type){n(h,x.sibling),g=i(x,y.props),g.ref=fs(h,x,y),g.return=h,h=g;break e}n(h,x);break}else e(h,x);x=x.sibling}y.type===da?(g=Eo(y.props.children,h.mode,E,y.key),g.return=h,h=g):(E=Vc(y.type,y.key,y.props,null,h.mode,E),E.ref=fs(h,g,y),E.return=h,h=E)}return a(h);case fa:e:{for(x=y.key;g!==null;){if(g.key===x)if(g.tag===4&&g.stateNode.containerInfo===y.containerInfo&&g.stateNode.implementation===y.implementation){n(h,g.sibling),g=i(g,y.children||[]),g.return=h,h=g;break e}else{n(h,g);break}else e(h,g);g=g.sibling}g=sd(y,h.mode,E),g.return=h,h=g}return a(h);case vi:return x=y._init,m(h,g,x(y._payload),E)}if(ws(y))return _(h,g,y,E);if(as(y))return v(h,g,y,E);Wl(h,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,g!==null&&g.tag===6?(n(h,g.sibling),g=i(g,y),g.return=h,h=g):(n(h,g),g=ad(y,h.mode,E),g.return=h,h=g),a(h)):n(h,g)}return m}var ka=Tx(!0),bx=Tx(!1),du=ji(null),hu=null,xa=null,sm=null;function lm(){sm=xa=hu=null}function cm(t){var e=du.current;It(du),t._currentValue=e}function Fh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Pa(t,e){hu=t,sm=xa=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Tn=!0),t.firstContext=null)}function nr(t){var e=t._currentValue;if(sm!==t)if(t={context:t,memoizedValue:e,next:null},xa===null){if(hu===null)throw Error(he(308));xa=t,hu.dependencies={lanes:0,firstContext:t}}else xa=xa.next=t;return e}var po=null;function um(t){po===null?po=[t]:po.push(t)}function Cx(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,um(e)):(n.next=i.next,i.next=n),e.interleaved=n,Zr(t,r)}function Zr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var _i=!1;function fm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ax(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Yr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Di(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,xt&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Zr(t,n)}return i=r.interleaved,i===null?(e.next=e,um(r)):(e.next=i.next,i.next=e),r.interleaved=e,Zr(t,n)}function Oc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Kp(t,n)}}function Kg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=e:o=o.next=e}else i=o=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function pu(t,e,n,r){var i=t.updateQueue;_i=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var l=s,c=l.next;l.next=null,a===null?o=c:a.next=c,a=l;var u=t.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==a&&(s===null?u.firstBaseUpdate=c:s.next=c,u.lastBaseUpdate=l))}if(o!==null){var f=i.baseState;a=0,u=c=l=null,s=o;do{var d=s.lane,p=s.eventTime;if((r&d)===d){u!==null&&(u=u.next={eventTime:p,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var _=t,v=s;switch(d=e,p=n,v.tag){case 1:if(_=v.payload,typeof _=="function"){f=_.call(p,f,d);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=v.payload,d=typeof _=="function"?_.call(p,f,d):_,d==null)break e;f=zt({},f,d);break e;case 2:_i=!0}}s.callback!==null&&s.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[s]:d.push(s))}else p={eventTime:p,lane:d,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(c=u=p,l=f):u=u.next=p,a|=d;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;d=s,s=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(!0);if(u===null&&(l=f),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=u,e=i.shared.interleaved,e!==null){i=e;do a|=i.lane,i=i.next;while(i!==e)}else o===null&&(i.shared.lanes=0);Po|=a,t.lanes=a,t.memoizedState=f}}function Zg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(he(191,i));i.call(r)}}}var El={},Lr=ji(El),tl=ji(El),nl=ji(El);function mo(t){if(t===El)throw Error(he(174));return t}function dm(t,e){switch(Rt(nl,e),Rt(tl,t),Rt(Lr,El),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:vh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=vh(e,t)}It(Lr),Rt(Lr,e)}function za(){It(Lr),It(tl),It(nl)}function Rx(t){mo(nl.current);var e=mo(Lr.current),n=vh(e,t.type);e!==n&&(Rt(tl,t),Rt(Lr,n))}function hm(t){tl.current===t&&(It(Lr),It(tl))}var Ft=ji(0);function mu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ed=[];function pm(){for(var t=0;t<ed.length;t++)ed[t]._workInProgressVersionPrimary=null;ed.length=0}var Fc=ni.ReactCurrentDispatcher,td=ni.ReactCurrentBatchConfig,Ro=0,kt=null,Xt=null,Jt=null,gu=!1,Ns=!1,rl=0,Hw=0;function ln(){throw Error(he(321))}function mm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Sr(t[n],e[n]))return!1;return!0}function gm(t,e,n,r,i,o){if(Ro=o,kt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Fc.current=t===null||t.memoizedState===null?jw:$w,t=n(r,i),Ns){o=0;do{if(Ns=!1,rl=0,25<=o)throw Error(he(301));o+=1,Jt=Xt=null,e.updateQueue=null,Fc.current=Xw,t=n(r,i)}while(Ns)}if(Fc.current=vu,e=Xt!==null&&Xt.next!==null,Ro=0,Jt=Xt=kt=null,gu=!1,e)throw Error(he(300));return t}function vm(){var t=rl!==0;return rl=0,t}function wr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Jt===null?kt.memoizedState=Jt=t:Jt=Jt.next=t,Jt}function rr(){if(Xt===null){var t=kt.alternate;t=t!==null?t.memoizedState:null}else t=Xt.next;var e=Jt===null?kt.memoizedState:Jt.next;if(e!==null)Jt=e,Xt=t;else{if(t===null)throw Error(he(310));Xt=t,t={memoizedState:Xt.memoizedState,baseState:Xt.baseState,baseQueue:Xt.baseQueue,queue:Xt.queue,next:null},Jt===null?kt.memoizedState=Jt=t:Jt=Jt.next=t}return Jt}function il(t,e){return typeof e=="function"?e(t):e}function nd(t){var e=rr(),n=e.queue;if(n===null)throw Error(he(311));n.lastRenderedReducer=t;var r=Xt,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=a=null,l=null,c=o;do{var u=c.lane;if((Ro&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(s=l=f,a=r):l=l.next=f,kt.lanes|=u,Po|=u}c=c.next}while(c!==null&&c!==o);l===null?a=r:l.next=s,Sr(r,e.memoizedState)||(Tn=!0),e.memoizedState=r,e.baseState=a,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do o=i.lane,kt.lanes|=o,Po|=o,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function rd(t){var e=rr(),n=e.queue;if(n===null)throw Error(he(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,o=e.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=t(o,a.action),a=a.next;while(a!==i);Sr(o,e.memoizedState)||(Tn=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,r]}function Px(){}function Lx(t,e){var n=kt,r=rr(),i=e(),o=!Sr(r.memoizedState,i);if(o&&(r.memoizedState=i,Tn=!0),r=r.queue,_m(Nx.bind(null,n,r,t),[t]),r.getSnapshot!==e||o||Jt!==null&&Jt.memoizedState.tag&1){if(n.flags|=2048,ol(9,Ix.bind(null,n,r,i,e),void 0,null),en===null)throw Error(he(349));Ro&30||Dx(n,e,i)}return i}function Dx(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=kt.updateQueue,e===null?(e={lastEffect:null,stores:null},kt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Ix(t,e,n,r){e.value=n,e.getSnapshot=r,Ux(e)&&Ox(t)}function Nx(t,e,n){return n(function(){Ux(e)&&Ox(t)})}function Ux(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Sr(t,n)}catch{return!0}}function Ox(t){var e=Zr(t,1);e!==null&&_r(e,t,1,-1)}function Qg(t){var e=wr();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:il,lastRenderedState:t},e.queue=t,t=t.dispatch=Ww.bind(null,kt,t),[e.memoizedState,t]}function ol(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=kt.updateQueue,e===null?(e={lastEffect:null,stores:null},kt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Fx(){return rr().memoizedState}function kc(t,e,n,r){var i=wr();kt.flags|=t,i.memoizedState=ol(1|e,n,void 0,r===void 0?null:r)}function Ku(t,e,n,r){var i=rr();r=r===void 0?null:r;var o=void 0;if(Xt!==null){var a=Xt.memoizedState;if(o=a.destroy,r!==null&&mm(r,a.deps)){i.memoizedState=ol(e,n,o,r);return}}kt.flags|=t,i.memoizedState=ol(1|e,n,o,r)}function Jg(t,e){return kc(8390656,8,t,e)}function _m(t,e){return Ku(2048,8,t,e)}function kx(t,e){return Ku(4,2,t,e)}function zx(t,e){return Ku(4,4,t,e)}function Bx(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Hx(t,e,n){return n=n!=null?n.concat([t]):null,Ku(4,4,Bx.bind(null,e,t),n)}function ym(){}function Vx(t,e){var n=rr();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&mm(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Gx(t,e){var n=rr();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&mm(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Wx(t,e,n){return Ro&21?(Sr(n,e)||(n=qy(),kt.lanes|=n,Po|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Tn=!0),t.memoizedState=n)}function Vw(t,e){var n=Et;Et=n!==0&&4>n?n:4,t(!0);var r=td.transition;td.transition={};try{t(!1),e()}finally{Et=n,td.transition=r}}function jx(){return rr().memoizedState}function Gw(t,e,n){var r=Ni(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},$x(t))Xx(e,n);else if(n=Cx(t,e,n,r),n!==null){var i=xn();_r(n,t,r,i),Yx(n,e,r)}}function Ww(t,e,n){var r=Ni(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if($x(t))Xx(e,i);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var a=e.lastRenderedState,s=o(a,n);if(i.hasEagerState=!0,i.eagerState=s,Sr(s,a)){var l=e.interleaved;l===null?(i.next=i,um(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=Cx(t,e,i,r),n!==null&&(i=xn(),_r(n,t,r,i),Yx(n,e,r))}}function $x(t){var e=t.alternate;return t===kt||e!==null&&e===kt}function Xx(t,e){Ns=gu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Yx(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Kp(t,n)}}var vu={readContext:nr,useCallback:ln,useContext:ln,useEffect:ln,useImperativeHandle:ln,useInsertionEffect:ln,useLayoutEffect:ln,useMemo:ln,useReducer:ln,useRef:ln,useState:ln,useDebugValue:ln,useDeferredValue:ln,useTransition:ln,useMutableSource:ln,useSyncExternalStore:ln,useId:ln,unstable_isNewReconciler:!1},jw={readContext:nr,useCallback:function(t,e){return wr().memoizedState=[t,e===void 0?null:e],t},useContext:nr,useEffect:Jg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,kc(4194308,4,Bx.bind(null,e,t),n)},useLayoutEffect:function(t,e){return kc(4194308,4,t,e)},useInsertionEffect:function(t,e){return kc(4,2,t,e)},useMemo:function(t,e){var n=wr();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=wr();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Gw.bind(null,kt,t),[r.memoizedState,t]},useRef:function(t){var e=wr();return t={current:t},e.memoizedState=t},useState:Qg,useDebugValue:ym,useDeferredValue:function(t){return wr().memoizedState=t},useTransition:function(){var t=Qg(!1),e=t[0];return t=Vw.bind(null,t[1]),wr().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=kt,i=wr();if(Ut){if(n===void 0)throw Error(he(407));n=n()}else{if(n=e(),en===null)throw Error(he(349));Ro&30||Dx(r,e,n)}i.memoizedState=n;var o={value:n,getSnapshot:e};return i.queue=o,Jg(Nx.bind(null,r,o,t),[t]),r.flags|=2048,ol(9,Ix.bind(null,r,o,n,e),void 0,null),n},useId:function(){var t=wr(),e=en.identifierPrefix;if(Ut){var n=$r,r=jr;n=(r&~(1<<32-vr(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=rl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Hw++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},$w={readContext:nr,useCallback:Vx,useContext:nr,useEffect:_m,useImperativeHandle:Hx,useInsertionEffect:kx,useLayoutEffect:zx,useMemo:Gx,useReducer:nd,useRef:Fx,useState:function(){return nd(il)},useDebugValue:ym,useDeferredValue:function(t){var e=rr();return Wx(e,Xt.memoizedState,t)},useTransition:function(){var t=nd(il)[0],e=rr().memoizedState;return[t,e]},useMutableSource:Px,useSyncExternalStore:Lx,useId:jx,unstable_isNewReconciler:!1},Xw={readContext:nr,useCallback:Vx,useContext:nr,useEffect:_m,useImperativeHandle:Hx,useInsertionEffect:kx,useLayoutEffect:zx,useMemo:Gx,useReducer:rd,useRef:Fx,useState:function(){return rd(il)},useDebugValue:ym,useDeferredValue:function(t){var e=rr();return Xt===null?e.memoizedState=t:Wx(e,Xt.memoizedState,t)},useTransition:function(){var t=rd(il)[0],e=rr().memoizedState;return[t,e]},useMutableSource:Px,useSyncExternalStore:Lx,useId:jx,unstable_isNewReconciler:!1};function fr(t,e){if(t&&t.defaultProps){e=zt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function kh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:zt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Zu={isMounted:function(t){return(t=t._reactInternals)?ko(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=xn(),i=Ni(t),o=Yr(r,i);o.payload=e,n!=null&&(o.callback=n),e=Di(t,o,i),e!==null&&(_r(e,t,i,r),Oc(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=xn(),i=Ni(t),o=Yr(r,i);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=Di(t,o,i),e!==null&&(_r(e,t,i,r),Oc(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=xn(),r=Ni(t),i=Yr(n,r);i.tag=2,e!=null&&(i.callback=e),e=Di(t,i,r),e!==null&&(_r(e,t,r,n),Oc(e,t,r))}};function ev(t,e,n,r,i,o,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,o,a):e.prototype&&e.prototype.isPureReactComponent?!Zs(n,r)||!Zs(i,o):!0}function qx(t,e,n){var r=!1,i=Bi,o=e.contextType;return typeof o=="object"&&o!==null?o=nr(o):(i=Cn(e)?Co:pn.current,r=e.contextTypes,o=(r=r!=null)?Oa(t,i):Bi),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Zu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=o),e}function tv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Zu.enqueueReplaceState(e,e.state,null)}function zh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},fm(t);var o=e.contextType;typeof o=="object"&&o!==null?i.context=nr(o):(o=Cn(e)?Co:pn.current,i.context=Oa(t,o)),i.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(kh(t,e,o,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Zu.enqueueReplaceState(i,i.state,null),pu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ba(t,e){try{var n="",r=e;do n+=S1(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:i,digest:null}}function id(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Bh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Yw=typeof WeakMap=="function"?WeakMap:Map;function Kx(t,e,n){n=Yr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){yu||(yu=!0,Kh=r),Bh(t,e)},n}function Zx(t,e,n){n=Yr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Bh(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Bh(t,e),typeof r!="function"&&(Ii===null?Ii=new Set([this]):Ii.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function nv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Yw;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=lT.bind(null,t,e,n),e.then(t,t))}function rv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function iv(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Yr(-1,1),e.tag=2,Di(n,e,1))),n.lanes|=1),t)}var qw=ni.ReactCurrentOwner,Tn=!1;function _n(t,e,n,r){e.child=t===null?bx(e,null,n,r):ka(e,t.child,n,r)}function ov(t,e,n,r,i){n=n.render;var o=e.ref;return Pa(e,i),r=gm(t,e,n,r,o,i),n=vm(),t!==null&&!Tn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Qr(t,e,i)):(Ut&&n&&im(e),e.flags|=1,_n(t,e,r,i),e.child)}function av(t,e,n,r,i){if(t===null){var o=n.type;return typeof o=="function"&&!Cm(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,Qx(t,e,o,r,i)):(t=Vc(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:Zs,n(a,r)&&t.ref===e.ref)return Qr(t,e,i)}return e.flags|=1,t=Ui(o,r),t.ref=e.ref,t.return=e,e.child=t}function Qx(t,e,n,r,i){if(t!==null){var o=t.memoizedProps;if(Zs(o,r)&&t.ref===e.ref)if(Tn=!1,e.pendingProps=r=o,(t.lanes&i)!==0)t.flags&131072&&(Tn=!0);else return e.lanes=t.lanes,Qr(t,e,i)}return Hh(t,e,n,r,i)}function Jx(t,e,n){var r=e.pendingProps,i=r.children,o=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Rt(Ea,Fn),Fn|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Rt(Ea,Fn),Fn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Rt(Ea,Fn),Fn|=r}else o!==null?(r=o.baseLanes|n,e.memoizedState=null):r=n,Rt(Ea,Fn),Fn|=r;return _n(t,e,i,n),e.child}function eS(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Hh(t,e,n,r,i){var o=Cn(n)?Co:pn.current;return o=Oa(e,o),Pa(e,i),n=gm(t,e,n,r,o,i),r=vm(),t!==null&&!Tn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Qr(t,e,i)):(Ut&&r&&im(e),e.flags|=1,_n(t,e,n,i),e.child)}function sv(t,e,n,r,i){if(Cn(n)){var o=!0;cu(e)}else o=!1;if(Pa(e,i),e.stateNode===null)zc(t,e),qx(e,n,r),zh(e,n,r,i),r=!0;else if(t===null){var a=e.stateNode,s=e.memoizedProps;a.props=s;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=nr(c):(c=Cn(n)?Co:pn.current,c=Oa(e,c));var u=n.getDerivedStateFromProps,f=typeof u=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||l!==c)&&tv(e,a,r,c),_i=!1;var d=e.memoizedState;a.state=d,pu(e,r,a,i),l=e.memoizedState,s!==r||d!==l||bn.current||_i?(typeof u=="function"&&(kh(e,n,u,r),l=e.memoizedState),(s=_i||ev(e,n,s,r,d,l,c))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),a.props=r,a.state=l,a.context=c,r=s):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{a=e.stateNode,Ax(t,e),s=e.memoizedProps,c=e.type===e.elementType?s:fr(e.type,s),a.props=c,f=e.pendingProps,d=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=nr(l):(l=Cn(n)?Co:pn.current,l=Oa(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==f||d!==l)&&tv(e,a,r,l),_i=!1,d=e.memoizedState,a.state=d,pu(e,r,a,i);var _=e.memoizedState;s!==f||d!==_||bn.current||_i?(typeof p=="function"&&(kh(e,n,p,r),_=e.memoizedState),(c=_i||ev(e,n,c,r,d,_,l)||!1)?(u||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,_,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,_,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),a.props=r,a.state=_,a.context=l,r=c):(typeof a.componentDidUpdate!="function"||s===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return Vh(t,e,n,r,o,i)}function Vh(t,e,n,r,i,o){eS(t,e);var a=(e.flags&128)!==0;if(!r&&!a)return i&&$g(e,n,!1),Qr(t,e,o);r=e.stateNode,qw.current=e;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&a?(e.child=ka(e,t.child,null,o),e.child=ka(e,null,s,o)):_n(t,e,s,o),e.memoizedState=r.state,i&&$g(e,n,!0),e.child}function tS(t){var e=t.stateNode;e.pendingContext?jg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&jg(t,e.context,!1),dm(t,e.containerInfo)}function lv(t,e,n,r,i){return Fa(),am(i),e.flags|=256,_n(t,e,n,r),e.child}var Gh={dehydrated:null,treeContext:null,retryLane:0};function Wh(t){return{baseLanes:t,cachePool:null,transitions:null}}function nS(t,e,n){var r=e.pendingProps,i=Ft.current,o=!1,a=(e.flags&128)!==0,s;if((s=a)||(s=t!==null&&t.memoizedState===null?!1:(i&2)!==0),s?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Rt(Ft,i&1),t===null)return Oh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=r.children,t=r.fallback,o?(r=e.mode,o=e.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=ef(a,r,0,null),t=Eo(t,r,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=Wh(n),e.memoizedState=Gh,t):xm(e,a));if(i=t.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return Kw(t,e,a,r,s,i,n);if(o){o=r.fallback,a=e.mode,i=t.child,s=i.sibling;var l={mode:"hidden",children:r.children};return!(a&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Ui(i,l),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=Ui(s,o):(o=Eo(o,a,n,null),o.flags|=2),o.return=e,r.return=e,r.sibling=o,e.child=r,r=o,o=e.child,a=t.child.memoizedState,a=a===null?Wh(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=t.childLanes&~n,e.memoizedState=Gh,r}return o=t.child,t=o.sibling,r=Ui(o,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function xm(t,e){return e=ef({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function jl(t,e,n,r){return r!==null&&am(r),ka(e,t.child,null,n),t=xm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Kw(t,e,n,r,i,o,a){if(n)return e.flags&256?(e.flags&=-257,r=id(Error(he(422))),jl(t,e,a,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=r.fallback,i=e.mode,r=ef({mode:"visible",children:r.children},i,0,null),o=Eo(o,i,a,null),o.flags|=2,r.return=e,o.return=e,r.sibling=o,e.child=r,e.mode&1&&ka(e,t.child,null,a),e.child.memoizedState=Wh(a),e.memoizedState=Gh,o);if(!(e.mode&1))return jl(t,e,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(he(419)),r=id(o,r,void 0),jl(t,e,a,r)}if(s=(a&t.childLanes)!==0,Tn||s){if(r=en,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Zr(t,i),_r(r,t,i,-1))}return bm(),r=id(Error(he(421))),jl(t,e,a,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=cT.bind(null,t),i._reactRetry=e,null):(t=o.treeContext,Bn=Li(i.nextSibling),Vn=e,Ut=!0,mr=null,t!==null&&(Kn[Zn++]=jr,Kn[Zn++]=$r,Kn[Zn++]=Ao,jr=t.id,$r=t.overflow,Ao=e),e=xm(e,r.children),e.flags|=4096,e)}function cv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Fh(t.return,e,n)}function od(t,e,n,r,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function rS(t,e,n){var r=e.pendingProps,i=r.revealOrder,o=r.tail;if(_n(t,e,r.children,n),r=Ft.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&cv(t,n,e);else if(t.tag===19)cv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Rt(Ft,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&mu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),od(e,!1,i,n,o);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&mu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}od(e,!0,n,null,o);break;case"together":od(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function zc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Qr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Po|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(he(153));if(e.child!==null){for(t=e.child,n=Ui(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ui(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Zw(t,e,n){switch(e.tag){case 3:tS(e),Fa();break;case 5:Rx(e);break;case 1:Cn(e.type)&&cu(e);break;case 4:dm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Rt(du,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Rt(Ft,Ft.current&1),e.flags|=128,null):n&e.child.childLanes?nS(t,e,n):(Rt(Ft,Ft.current&1),t=Qr(t,e,n),t!==null?t.sibling:null);Rt(Ft,Ft.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return rS(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Rt(Ft,Ft.current),r)break;return null;case 22:case 23:return e.lanes=0,Jx(t,e,n)}return Qr(t,e,n)}var iS,jh,oS,aS;iS=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};jh=function(){};oS=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,mo(Lr.current);var o=null;switch(n){case"input":i=hh(t,i),r=hh(t,r),o=[];break;case"select":i=zt({},i,{value:void 0}),r=zt({},r,{value:void 0}),o=[];break;case"textarea":i=gh(t,i),r=gh(t,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=su)}_h(n,r);var a;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var s=i[c];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ws.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var l=r[c];if(s=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==s&&(l!=null||s!=null))if(c==="style")if(s){for(a in s)!s.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&s[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(o||(o=[]),o.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(o=o||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ws.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Lt("scroll",t),o||s===l||(o=[])):(o=o||[]).push(c,l))}n&&(o=o||[]).push("style",n);var c=o;(e.updateQueue=c)&&(e.flags|=4)}};aS=function(t,e,n,r){n!==r&&(e.flags|=4)};function ds(t,e){if(!Ut)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function cn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Qw(t,e,n){var r=e.pendingProps;switch(om(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return cn(e),null;case 1:return Cn(e.type)&&lu(),cn(e),null;case 3:return r=e.stateNode,za(),It(bn),It(pn),pm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Gl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,mr!==null&&(Jh(mr),mr=null))),jh(t,e),cn(e),null;case 5:hm(e);var i=mo(nl.current);if(n=e.type,t!==null&&e.stateNode!=null)oS(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(he(166));return cn(e),null}if(t=mo(Lr.current),Gl(e)){r=e.stateNode,n=e.type;var o=e.memoizedProps;switch(r[Cr]=e,r[el]=o,t=(e.mode&1)!==0,n){case"dialog":Lt("cancel",r),Lt("close",r);break;case"iframe":case"object":case"embed":Lt("load",r);break;case"video":case"audio":for(i=0;i<bs.length;i++)Lt(bs[i],r);break;case"source":Lt("error",r);break;case"img":case"image":case"link":Lt("error",r),Lt("load",r);break;case"details":Lt("toggle",r);break;case"input":_g(r,o),Lt("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Lt("invalid",r);break;case"textarea":xg(r,o),Lt("invalid",r)}_h(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var s=o[a];a==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&Vl(r.textContent,s,t),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&Vl(r.textContent,s,t),i=["children",""+s]):Ws.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&Lt("scroll",r)}switch(n){case"input":Nl(r),yg(r,o,!0);break;case"textarea":Nl(r),Sg(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=su)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Ny(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=a.createElement(n,{is:r.is}):(t=a.createElement(n),n==="select"&&(a=t,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):t=a.createElementNS(t,n),t[Cr]=e,t[el]=r,iS(t,e,!1,!1),e.stateNode=t;e:{switch(a=yh(n,r),n){case"dialog":Lt("cancel",t),Lt("close",t),i=r;break;case"iframe":case"object":case"embed":Lt("load",t),i=r;break;case"video":case"audio":for(i=0;i<bs.length;i++)Lt(bs[i],t);i=r;break;case"source":Lt("error",t),i=r;break;case"img":case"image":case"link":Lt("error",t),Lt("load",t),i=r;break;case"details":Lt("toggle",t),i=r;break;case"input":_g(t,r),i=hh(t,r),Lt("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=zt({},r,{value:void 0}),Lt("invalid",t);break;case"textarea":xg(t,r),i=gh(t,r),Lt("invalid",t);break;default:i=r}_h(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="style"?Fy(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Uy(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&js(t,l):typeof l=="number"&&js(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ws.hasOwnProperty(o)?l!=null&&o==="onScroll"&&Lt("scroll",t):l!=null&&Wp(t,o,l,a))}switch(n){case"input":Nl(t),yg(t,r,!1);break;case"textarea":Nl(t),Sg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+zi(r.value));break;case"select":t.multiple=!!r.multiple,o=r.value,o!=null?ba(t,!!r.multiple,o,!1):r.defaultValue!=null&&ba(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=su)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return cn(e),null;case 6:if(t&&e.stateNode!=null)aS(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(he(166));if(n=mo(nl.current),mo(Lr.current),Gl(e)){if(r=e.stateNode,n=e.memoizedProps,r[Cr]=e,(o=r.nodeValue!==n)&&(t=Vn,t!==null))switch(t.tag){case 3:Vl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Vl(r.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Cr]=e,e.stateNode=r}return cn(e),null;case 13:if(It(Ft),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ut&&Bn!==null&&e.mode&1&&!(e.flags&128))wx(),Fa(),e.flags|=98560,o=!1;else if(o=Gl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!o)throw Error(he(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(he(317));o[Cr]=e}else Fa(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;cn(e),o=!1}else mr!==null&&(Jh(mr),mr=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ft.current&1?Yt===0&&(Yt=3):bm())),e.updateQueue!==null&&(e.flags|=4),cn(e),null);case 4:return za(),jh(t,e),t===null&&Qs(e.stateNode.containerInfo),cn(e),null;case 10:return cm(e.type._context),cn(e),null;case 17:return Cn(e.type)&&lu(),cn(e),null;case 19:if(It(Ft),o=e.memoizedState,o===null)return cn(e),null;if(r=(e.flags&128)!==0,a=o.rendering,a===null)if(r)ds(o,!1);else{if(Yt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=mu(t),a!==null){for(e.flags|=128,ds(o,!1),r=a.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)o=n,t=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,t=a.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Rt(Ft,Ft.current&1|2),e.child}t=t.sibling}o.tail!==null&&Ht()>Ha&&(e.flags|=128,r=!0,ds(o,!1),e.lanes=4194304)}else{if(!r)if(t=mu(a),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ds(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!Ut)return cn(e),null}else 2*Ht()-o.renderingStartTime>Ha&&n!==1073741824&&(e.flags|=128,r=!0,ds(o,!1),e.lanes=4194304);o.isBackwards?(a.sibling=e.child,e.child=a):(n=o.last,n!==null?n.sibling=a:e.child=a,o.last=a)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Ht(),e.sibling=null,n=Ft.current,Rt(Ft,r?n&1|2:n&1),e):(cn(e),null);case 22:case 23:return Tm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Fn&1073741824&&(cn(e),e.subtreeFlags&6&&(e.flags|=8192)):cn(e),null;case 24:return null;case 25:return null}throw Error(he(156,e.tag))}function Jw(t,e){switch(om(e),e.tag){case 1:return Cn(e.type)&&lu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return za(),It(bn),It(pn),pm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return hm(e),null;case 13:if(It(Ft),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(he(340));Fa()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return It(Ft),null;case 4:return za(),null;case 10:return cm(e.type._context),null;case 22:case 23:return Tm(),null;case 24:return null;default:return null}}var $l=!1,dn=!1,eT=typeof WeakSet=="function"?WeakSet:Set,Ae=null;function Sa(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Bt(t,e,r)}else n.current=null}function $h(t,e,n){try{n()}catch(r){Bt(t,e,r)}}var uv=!1;function tT(t,e){if(Rh=iu,t=fx(),rm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,s=-1,l=-1,c=0,u=0,f=t,d=null;t:for(;;){for(var p;f!==n||i!==0&&f.nodeType!==3||(s=a+i),f!==o||r!==0&&f.nodeType!==3||(l=a+r),f.nodeType===3&&(a+=f.nodeValue.length),(p=f.firstChild)!==null;)d=f,f=p;for(;;){if(f===t)break t;if(d===n&&++c===i&&(s=a),d===o&&++u===r&&(l=a),(p=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=p}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ph={focusedElem:t,selectionRange:n},iu=!1,Ae=e;Ae!==null;)if(e=Ae,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ae=t;else for(;Ae!==null;){e=Ae;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var v=_.memoizedProps,m=_.memoizedState,h=e.stateNode,g=h.getSnapshotBeforeUpdate(e.elementType===e.type?v:fr(e.type,v),m);h.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(he(163))}}catch(E){Bt(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,Ae=t;break}Ae=e.return}return _=uv,uv=!1,_}function Us(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var o=i.destroy;i.destroy=void 0,o!==void 0&&$h(e,n,o)}i=i.next}while(i!==r)}}function Qu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Xh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function sS(t){var e=t.alternate;e!==null&&(t.alternate=null,sS(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Cr],delete e[el],delete e[Ih],delete e[Fw],delete e[kw])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function lS(t){return t.tag===5||t.tag===3||t.tag===4}function fv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||lS(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Yh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=su));else if(r!==4&&(t=t.child,t!==null))for(Yh(t,e,n),t=t.sibling;t!==null;)Yh(t,e,n),t=t.sibling}function qh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(qh(t,e,n),t=t.sibling;t!==null;)qh(t,e,n),t=t.sibling}var tn=null,dr=!1;function li(t,e,n){for(n=n.child;n!==null;)cS(t,e,n),n=n.sibling}function cS(t,e,n){if(Pr&&typeof Pr.onCommitFiberUnmount=="function")try{Pr.onCommitFiberUnmount(Wu,n)}catch{}switch(n.tag){case 5:dn||Sa(n,e);case 6:var r=tn,i=dr;tn=null,li(t,e,n),tn=r,dr=i,tn!==null&&(dr?(t=tn,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):tn.removeChild(n.stateNode));break;case 18:tn!==null&&(dr?(t=tn,n=n.stateNode,t.nodeType===8?Qf(t.parentNode,n):t.nodeType===1&&Qf(t,n),qs(t)):Qf(tn,n.stateNode));break;case 4:r=tn,i=dr,tn=n.stateNode.containerInfo,dr=!0,li(t,e,n),tn=r,dr=i;break;case 0:case 11:case 14:case 15:if(!dn&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&$h(n,e,a),i=i.next}while(i!==r)}li(t,e,n);break;case 1:if(!dn&&(Sa(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){Bt(n,e,s)}li(t,e,n);break;case 21:li(t,e,n);break;case 22:n.mode&1?(dn=(r=dn)||n.memoizedState!==null,li(t,e,n),dn=r):li(t,e,n);break;default:li(t,e,n)}}function dv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new eT),e.forEach(function(r){var i=uT.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ar(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=t,a=e,s=a;e:for(;s!==null;){switch(s.tag){case 5:tn=s.stateNode,dr=!1;break e;case 3:tn=s.stateNode.containerInfo,dr=!0;break e;case 4:tn=s.stateNode.containerInfo,dr=!0;break e}s=s.return}if(tn===null)throw Error(he(160));cS(o,a,i),tn=null,dr=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){Bt(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)uS(e,t),e=e.sibling}function uS(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ar(e,t),Mr(t),r&4){try{Us(3,t,t.return),Qu(3,t)}catch(v){Bt(t,t.return,v)}try{Us(5,t,t.return)}catch(v){Bt(t,t.return,v)}}break;case 1:ar(e,t),Mr(t),r&512&&n!==null&&Sa(n,n.return);break;case 5:if(ar(e,t),Mr(t),r&512&&n!==null&&Sa(n,n.return),t.flags&32){var i=t.stateNode;try{js(i,"")}catch(v){Bt(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var o=t.memoizedProps,a=n!==null?n.memoizedProps:o,s=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&Dy(i,o),yh(s,a);var c=yh(s,o);for(a=0;a<l.length;a+=2){var u=l[a],f=l[a+1];u==="style"?Fy(i,f):u==="dangerouslySetInnerHTML"?Uy(i,f):u==="children"?js(i,f):Wp(i,u,f,c)}switch(s){case"input":ph(i,o);break;case"textarea":Iy(i,o);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var p=o.value;p!=null?ba(i,!!o.multiple,p,!1):d!==!!o.multiple&&(o.defaultValue!=null?ba(i,!!o.multiple,o.defaultValue,!0):ba(i,!!o.multiple,o.multiple?[]:"",!1))}i[el]=o}catch(v){Bt(t,t.return,v)}}break;case 6:if(ar(e,t),Mr(t),r&4){if(t.stateNode===null)throw Error(he(162));i=t.stateNode,o=t.memoizedProps;try{i.nodeValue=o}catch(v){Bt(t,t.return,v)}}break;case 3:if(ar(e,t),Mr(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{qs(e.containerInfo)}catch(v){Bt(t,t.return,v)}break;case 4:ar(e,t),Mr(t);break;case 13:ar(e,t),Mr(t),i=t.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Mm=Ht())),r&4&&dv(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(dn=(c=dn)||u,ar(e,t),dn=c):ar(e,t),Mr(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(Ae=t,u=t.child;u!==null;){for(f=Ae=u;Ae!==null;){switch(d=Ae,p=d.child,d.tag){case 0:case 11:case 14:case 15:Us(4,d,d.return);break;case 1:Sa(d,d.return);var _=d.stateNode;if(typeof _.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(v){Bt(r,n,v)}}break;case 5:Sa(d,d.return);break;case 22:if(d.memoizedState!==null){pv(f);continue}}p!==null?(p.return=d,Ae=p):pv(f)}u=u.sibling}e:for(u=null,f=t;;){if(f.tag===5){if(u===null){u=f;try{i=f.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=f.stateNode,l=f.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=Oy("display",a))}catch(v){Bt(t,t.return,v)}}}else if(f.tag===6){if(u===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(v){Bt(t,t.return,v)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;u===f&&(u=null),f=f.return}u===f&&(u=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:ar(e,t),Mr(t),r&4&&dv(t);break;case 21:break;default:ar(e,t),Mr(t)}}function Mr(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(lS(n)){var r=n;break e}n=n.return}throw Error(he(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(js(i,""),r.flags&=-33);var o=fv(t);qh(t,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,s=fv(t);Yh(t,s,a);break;default:throw Error(he(161))}}catch(l){Bt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function nT(t,e,n){Ae=t,fS(t)}function fS(t,e,n){for(var r=(t.mode&1)!==0;Ae!==null;){var i=Ae,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||$l;if(!a){var s=i.alternate,l=s!==null&&s.memoizedState!==null||dn;s=$l;var c=dn;if($l=a,(dn=l)&&!c)for(Ae=i;Ae!==null;)a=Ae,l=a.child,a.tag===22&&a.memoizedState!==null?mv(i):l!==null?(l.return=a,Ae=l):mv(i);for(;o!==null;)Ae=o,fS(o),o=o.sibling;Ae=i,$l=s,dn=c}hv(t)}else i.subtreeFlags&8772&&o!==null?(o.return=i,Ae=o):hv(t)}}function hv(t){for(;Ae!==null;){var e=Ae;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:dn||Qu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!dn)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:fr(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&Zg(e,o,r);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Zg(e,a,n)}break;case 5:var s=e.stateNode;if(n===null&&e.flags&4){n=s;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var f=u.dehydrated;f!==null&&qs(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(he(163))}dn||e.flags&512&&Xh(e)}catch(d){Bt(e,e.return,d)}}if(e===t){Ae=null;break}if(n=e.sibling,n!==null){n.return=e.return,Ae=n;break}Ae=e.return}}function pv(t){for(;Ae!==null;){var e=Ae;if(e===t){Ae=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Ae=n;break}Ae=e.return}}function mv(t){for(;Ae!==null;){var e=Ae;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Qu(4,e)}catch(l){Bt(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Bt(e,i,l)}}var o=e.return;try{Xh(e)}catch(l){Bt(e,o,l)}break;case 5:var a=e.return;try{Xh(e)}catch(l){Bt(e,a,l)}}}catch(l){Bt(e,e.return,l)}if(e===t){Ae=null;break}var s=e.sibling;if(s!==null){s.return=e.return,Ae=s;break}Ae=e.return}}var rT=Math.ceil,_u=ni.ReactCurrentDispatcher,Sm=ni.ReactCurrentOwner,tr=ni.ReactCurrentBatchConfig,xt=0,en=null,jt=null,on=0,Fn=0,Ea=ji(0),Yt=0,al=null,Po=0,Ju=0,Em=0,Os=null,wn=null,Mm=0,Ha=1/0,Vr=null,yu=!1,Kh=null,Ii=null,Xl=!1,wi=null,xu=0,Fs=0,Zh=null,Bc=-1,Hc=0;function xn(){return xt&6?Ht():Bc!==-1?Bc:Bc=Ht()}function Ni(t){return t.mode&1?xt&2&&on!==0?on&-on:Bw.transition!==null?(Hc===0&&(Hc=qy()),Hc):(t=Et,t!==0||(t=window.event,t=t===void 0?16:nx(t.type)),t):1}function _r(t,e,n,r){if(50<Fs)throw Fs=0,Zh=null,Error(he(185));yl(t,n,r),(!(xt&2)||t!==en)&&(t===en&&(!(xt&2)&&(Ju|=n),Yt===4&&Si(t,on)),An(t,r),n===1&&xt===0&&!(e.mode&1)&&(Ha=Ht()+500,qu&&$i()))}function An(t,e){var n=t.callbackNode;B1(t,e);var r=ru(t,t===en?on:0);if(r===0)n!==null&&wg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&wg(n),e===1)t.tag===0?zw(gv.bind(null,t)):Sx(gv.bind(null,t)),Uw(function(){!(xt&6)&&$i()}),n=null;else{switch(Ky(r)){case 1:n=qp;break;case 4:n=Xy;break;case 16:n=nu;break;case 536870912:n=Yy;break;default:n=nu}n=yS(n,dS.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function dS(t,e){if(Bc=-1,Hc=0,xt&6)throw Error(he(327));var n=t.callbackNode;if(La()&&t.callbackNode!==n)return null;var r=ru(t,t===en?on:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Su(t,r);else{e=r;var i=xt;xt|=2;var o=pS();(en!==t||on!==e)&&(Vr=null,Ha=Ht()+500,So(t,e));do try{aT();break}catch(s){hS(t,s)}while(!0);lm(),_u.current=o,xt=i,jt!==null?e=0:(en=null,on=0,e=Yt)}if(e!==0){if(e===2&&(i=wh(t),i!==0&&(r=i,e=Qh(t,i))),e===1)throw n=al,So(t,0),Si(t,r),An(t,Ht()),n;if(e===6)Si(t,r);else{if(i=t.current.alternate,!(r&30)&&!iT(i)&&(e=Su(t,r),e===2&&(o=wh(t),o!==0&&(r=o,e=Qh(t,o))),e===1))throw n=al,So(t,0),Si(t,r),An(t,Ht()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(he(345));case 2:ao(t,wn,Vr);break;case 3:if(Si(t,r),(r&130023424)===r&&(e=Mm+500-Ht(),10<e)){if(ru(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){xn(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Dh(ao.bind(null,t,wn,Vr),e);break}ao(t,wn,Vr);break;case 4:if(Si(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var a=31-vr(r);o=1<<a,a=e[a],a>i&&(i=a),r&=~o}if(r=i,r=Ht()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*rT(r/1960))-r,10<r){t.timeoutHandle=Dh(ao.bind(null,t,wn,Vr),r);break}ao(t,wn,Vr);break;case 5:ao(t,wn,Vr);break;default:throw Error(he(329))}}}return An(t,Ht()),t.callbackNode===n?dS.bind(null,t):null}function Qh(t,e){var n=Os;return t.current.memoizedState.isDehydrated&&(So(t,e).flags|=256),t=Su(t,e),t!==2&&(e=wn,wn=n,e!==null&&Jh(e)),t}function Jh(t){wn===null?wn=t:wn.push.apply(wn,t)}function iT(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Sr(o(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Si(t,e){for(e&=~Em,e&=~Ju,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-vr(e),r=1<<n;t[n]=-1,e&=~r}}function gv(t){if(xt&6)throw Error(he(327));La();var e=ru(t,0);if(!(e&1))return An(t,Ht()),null;var n=Su(t,e);if(t.tag!==0&&n===2){var r=wh(t);r!==0&&(e=r,n=Qh(t,r))}if(n===1)throw n=al,So(t,0),Si(t,e),An(t,Ht()),n;if(n===6)throw Error(he(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ao(t,wn,Vr),An(t,Ht()),null}function wm(t,e){var n=xt;xt|=1;try{return t(e)}finally{xt=n,xt===0&&(Ha=Ht()+500,qu&&$i())}}function Lo(t){wi!==null&&wi.tag===0&&!(xt&6)&&La();var e=xt;xt|=1;var n=tr.transition,r=Et;try{if(tr.transition=null,Et=1,t)return t()}finally{Et=r,tr.transition=n,xt=e,!(xt&6)&&$i()}}function Tm(){Fn=Ea.current,It(Ea)}function So(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Nw(n)),jt!==null)for(n=jt.return;n!==null;){var r=n;switch(om(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&lu();break;case 3:za(),It(bn),It(pn),pm();break;case 5:hm(r);break;case 4:za();break;case 13:It(Ft);break;case 19:It(Ft);break;case 10:cm(r.type._context);break;case 22:case 23:Tm()}n=n.return}if(en=t,jt=t=Ui(t.current,null),on=Fn=e,Yt=0,al=null,Em=Ju=Po=0,wn=Os=null,po!==null){for(e=0;e<po.length;e++)if(n=po[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}po=null}return t}function hS(t,e){do{var n=jt;try{if(lm(),Fc.current=vu,gu){for(var r=kt.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}gu=!1}if(Ro=0,Jt=Xt=kt=null,Ns=!1,rl=0,Sm.current=null,n===null||n.return===null){Yt=1,al=e,jt=null;break}e:{var o=t,a=n.return,s=n,l=e;if(e=on,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=s,f=u.tag;if(!(u.mode&1)&&(f===0||f===11||f===15)){var d=u.alternate;d?(u.updateQueue=d.updateQueue,u.memoizedState=d.memoizedState,u.lanes=d.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=rv(a);if(p!==null){p.flags&=-257,iv(p,a,s,o,e),p.mode&1&&nv(o,c,e),e=p,l=c;var _=e.updateQueue;if(_===null){var v=new Set;v.add(l),e.updateQueue=v}else _.add(l);break e}else{if(!(e&1)){nv(o,c,e),bm();break e}l=Error(he(426))}}else if(Ut&&s.mode&1){var m=rv(a);if(m!==null){!(m.flags&65536)&&(m.flags|=256),iv(m,a,s,o,e),am(Ba(l,s));break e}}o=l=Ba(l,s),Yt!==4&&(Yt=2),Os===null?Os=[o]:Os.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var h=Kx(o,l,e);Kg(o,h);break e;case 1:s=l;var g=o.type,y=o.stateNode;if(!(o.flags&128)&&(typeof g.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Ii===null||!Ii.has(y)))){o.flags|=65536,e&=-e,o.lanes|=e;var E=Zx(o,s,e);Kg(o,E);break e}}o=o.return}while(o!==null)}gS(n)}catch(A){e=A,jt===n&&n!==null&&(jt=n=n.return);continue}break}while(!0)}function pS(){var t=_u.current;return _u.current=vu,t===null?vu:t}function bm(){(Yt===0||Yt===3||Yt===2)&&(Yt=4),en===null||!(Po&268435455)&&!(Ju&268435455)||Si(en,on)}function Su(t,e){var n=xt;xt|=2;var r=pS();(en!==t||on!==e)&&(Vr=null,So(t,e));do try{oT();break}catch(i){hS(t,i)}while(!0);if(lm(),xt=n,_u.current=r,jt!==null)throw Error(he(261));return en=null,on=0,Yt}function oT(){for(;jt!==null;)mS(jt)}function aT(){for(;jt!==null&&!L1();)mS(jt)}function mS(t){var e=_S(t.alternate,t,Fn);t.memoizedProps=t.pendingProps,e===null?gS(t):jt=e,Sm.current=null}function gS(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Jw(n,e),n!==null){n.flags&=32767,jt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Yt=6,jt=null;return}}else if(n=Qw(n,e,Fn),n!==null){jt=n;return}if(e=e.sibling,e!==null){jt=e;return}jt=e=t}while(e!==null);Yt===0&&(Yt=5)}function ao(t,e,n){var r=Et,i=tr.transition;try{tr.transition=null,Et=1,sT(t,e,n,r)}finally{tr.transition=i,Et=r}return null}function sT(t,e,n,r){do La();while(wi!==null);if(xt&6)throw Error(he(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(he(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(H1(t,o),t===en&&(jt=en=null,on=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Xl||(Xl=!0,yS(nu,function(){return La(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=tr.transition,tr.transition=null;var a=Et;Et=1;var s=xt;xt|=4,Sm.current=null,tT(t,n),uS(n,t),Cw(Ph),iu=!!Rh,Ph=Rh=null,t.current=n,nT(n),D1(),xt=s,Et=a,tr.transition=o}else t.current=n;if(Xl&&(Xl=!1,wi=t,xu=i),o=t.pendingLanes,o===0&&(Ii=null),U1(n.stateNode),An(t,Ht()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(yu)throw yu=!1,t=Kh,Kh=null,t;return xu&1&&t.tag!==0&&La(),o=t.pendingLanes,o&1?t===Zh?Fs++:(Fs=0,Zh=t):Fs=0,$i(),null}function La(){if(wi!==null){var t=Ky(xu),e=tr.transition,n=Et;try{if(tr.transition=null,Et=16>t?16:t,wi===null)var r=!1;else{if(t=wi,wi=null,xu=0,xt&6)throw Error(he(331));var i=xt;for(xt|=4,Ae=t.current;Ae!==null;){var o=Ae,a=o.child;if(Ae.flags&16){var s=o.deletions;if(s!==null){for(var l=0;l<s.length;l++){var c=s[l];for(Ae=c;Ae!==null;){var u=Ae;switch(u.tag){case 0:case 11:case 15:Us(8,u,o)}var f=u.child;if(f!==null)f.return=u,Ae=f;else for(;Ae!==null;){u=Ae;var d=u.sibling,p=u.return;if(sS(u),u===c){Ae=null;break}if(d!==null){d.return=p,Ae=d;break}Ae=p}}}var _=o.alternate;if(_!==null){var v=_.child;if(v!==null){_.child=null;do{var m=v.sibling;v.sibling=null,v=m}while(v!==null)}}Ae=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,Ae=a;else e:for(;Ae!==null;){if(o=Ae,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Us(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,Ae=h;break e}Ae=o.return}}var g=t.current;for(Ae=g;Ae!==null;){a=Ae;var y=a.child;if(a.subtreeFlags&2064&&y!==null)y.return=a,Ae=y;else e:for(a=g;Ae!==null;){if(s=Ae,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Qu(9,s)}}catch(A){Bt(s,s.return,A)}if(s===a){Ae=null;break e}var E=s.sibling;if(E!==null){E.return=s.return,Ae=E;break e}Ae=s.return}}if(xt=i,$i(),Pr&&typeof Pr.onPostCommitFiberRoot=="function")try{Pr.onPostCommitFiberRoot(Wu,t)}catch{}r=!0}return r}finally{Et=n,tr.transition=e}}return!1}function vv(t,e,n){e=Ba(n,e),e=Kx(t,e,1),t=Di(t,e,1),e=xn(),t!==null&&(yl(t,1,e),An(t,e))}function Bt(t,e,n){if(t.tag===3)vv(t,t,n);else for(;e!==null;){if(e.tag===3){vv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ii===null||!Ii.has(r))){t=Ba(n,t),t=Zx(e,t,1),e=Di(e,t,1),t=xn(),e!==null&&(yl(e,1,t),An(e,t));break}}e=e.return}}function lT(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=xn(),t.pingedLanes|=t.suspendedLanes&n,en===t&&(on&n)===n&&(Yt===4||Yt===3&&(on&130023424)===on&&500>Ht()-Mm?So(t,0):Em|=n),An(t,e)}function vS(t,e){e===0&&(t.mode&1?(e=Fl,Fl<<=1,!(Fl&130023424)&&(Fl=4194304)):e=1);var n=xn();t=Zr(t,e),t!==null&&(yl(t,e,n),An(t,n))}function cT(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),vS(t,n)}function uT(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(he(314))}r!==null&&r.delete(e),vS(t,n)}var _S;_S=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||bn.current)Tn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Tn=!1,Zw(t,e,n);Tn=!!(t.flags&131072)}else Tn=!1,Ut&&e.flags&1048576&&Ex(e,fu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;zc(t,e),t=e.pendingProps;var i=Oa(e,pn.current);Pa(e,n),i=gm(null,e,r,t,i,n);var o=vm();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Cn(r)?(o=!0,cu(e)):o=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,fm(e),i.updater=Zu,e.stateNode=i,i._reactInternals=e,zh(e,r,t,n),e=Vh(null,e,r,!0,o,n)):(e.tag=0,Ut&&o&&im(e),_n(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(zc(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=dT(r),t=fr(r,t),i){case 0:e=Hh(null,e,r,t,n);break e;case 1:e=sv(null,e,r,t,n);break e;case 11:e=ov(null,e,r,t,n);break e;case 14:e=av(null,e,r,fr(r.type,t),n);break e}throw Error(he(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:fr(r,i),Hh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:fr(r,i),sv(t,e,r,i,n);case 3:e:{if(tS(e),t===null)throw Error(he(387));r=e.pendingProps,o=e.memoizedState,i=o.element,Ax(t,e),pu(e,r,null,n);var a=e.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){i=Ba(Error(he(423)),e),e=lv(t,e,r,n,i);break e}else if(r!==i){i=Ba(Error(he(424)),e),e=lv(t,e,r,n,i);break e}else for(Bn=Li(e.stateNode.containerInfo.firstChild),Vn=e,Ut=!0,mr=null,n=bx(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Fa(),r===i){e=Qr(t,e,n);break e}_n(t,e,r,n)}e=e.child}return e;case 5:return Rx(e),t===null&&Oh(e),r=e.type,i=e.pendingProps,o=t!==null?t.memoizedProps:null,a=i.children,Lh(r,i)?a=null:o!==null&&Lh(r,o)&&(e.flags|=32),eS(t,e),_n(t,e,a,n),e.child;case 6:return t===null&&Oh(e),null;case 13:return nS(t,e,n);case 4:return dm(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ka(e,null,r,n):_n(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:fr(r,i),ov(t,e,r,i,n);case 7:return _n(t,e,e.pendingProps,n),e.child;case 8:return _n(t,e,e.pendingProps.children,n),e.child;case 12:return _n(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,o=e.memoizedProps,a=i.value,Rt(du,r._currentValue),r._currentValue=a,o!==null)if(Sr(o.value,a)){if(o.children===i.children&&!bn.current){e=Qr(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var s=o.dependencies;if(s!==null){a=o.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Yr(-1,n&-n),l.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Fh(o.return,n,e),s.lanes|=n;break}l=l.next}}else if(o.tag===10)a=o.type===e.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(he(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Fh(a,n,e),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===e){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}_n(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Pa(e,n),i=nr(i),r=r(i),e.flags|=1,_n(t,e,r,n),e.child;case 14:return r=e.type,i=fr(r,e.pendingProps),i=fr(r.type,i),av(t,e,r,i,n);case 15:return Qx(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:fr(r,i),zc(t,e),e.tag=1,Cn(r)?(t=!0,cu(e)):t=!1,Pa(e,n),qx(e,r,i),zh(e,r,i,n),Vh(null,e,r,!0,t,n);case 19:return rS(t,e,n);case 22:return Jx(t,e,n)}throw Error(he(156,e.tag))};function yS(t,e){return $y(t,e)}function fT(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jn(t,e,n,r){return new fT(t,e,n,r)}function Cm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function dT(t){if(typeof t=="function")return Cm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===$p)return 11;if(t===Xp)return 14}return 2}function Ui(t,e){var n=t.alternate;return n===null?(n=Jn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Vc(t,e,n,r,i,o){var a=2;if(r=t,typeof t=="function")Cm(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case da:return Eo(n.children,i,o,e);case jp:a=8,i|=8;break;case ch:return t=Jn(12,n,e,i|2),t.elementType=ch,t.lanes=o,t;case uh:return t=Jn(13,n,e,i),t.elementType=uh,t.lanes=o,t;case fh:return t=Jn(19,n,e,i),t.elementType=fh,t.lanes=o,t;case Ry:return ef(n,i,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Cy:a=10;break e;case Ay:a=9;break e;case $p:a=11;break e;case Xp:a=14;break e;case vi:a=16,r=null;break e}throw Error(he(130,t==null?t:typeof t,""))}return e=Jn(a,n,e,i),e.elementType=t,e.type=r,e.lanes=o,e}function Eo(t,e,n,r){return t=Jn(7,t,r,e),t.lanes=n,t}function ef(t,e,n,r){return t=Jn(22,t,r,e),t.elementType=Ry,t.lanes=n,t.stateNode={isHidden:!1},t}function ad(t,e,n){return t=Jn(6,t,null,e),t.lanes=n,t}function sd(t,e,n){return e=Jn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function hT(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Hf(0),this.expirationTimes=Hf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Hf(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Am(t,e,n,r,i,o,a,s,l){return t=new hT(t,e,n,s,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=Jn(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},fm(o),t}function pT(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:fa,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function xS(t){if(!t)return Bi;t=t._reactInternals;e:{if(ko(t)!==t||t.tag!==1)throw Error(he(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Cn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(he(171))}if(t.tag===1){var n=t.type;if(Cn(n))return xx(t,n,e)}return e}function SS(t,e,n,r,i,o,a,s,l){return t=Am(n,r,!0,t,i,o,a,s,l),t.context=xS(null),n=t.current,r=xn(),i=Ni(n),o=Yr(r,i),o.callback=e??null,Di(n,o,i),t.current.lanes=i,yl(t,i,r),An(t,r),t}function tf(t,e,n,r){var i=e.current,o=xn(),a=Ni(i);return n=xS(n),e.context===null?e.context=n:e.pendingContext=n,e=Yr(o,a),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Di(i,e,a),t!==null&&(_r(t,i,a,o),Oc(t,i,a)),a}function Eu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function _v(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Rm(t,e){_v(t,e),(t=t.alternate)&&_v(t,e)}function mT(){return null}var ES=typeof reportError=="function"?reportError:function(t){console.error(t)};function Pm(t){this._internalRoot=t}nf.prototype.render=Pm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(he(409));tf(t,e,null,null)};nf.prototype.unmount=Pm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Lo(function(){tf(null,t,null,null)}),e[Kr]=null}};function nf(t){this._internalRoot=t}nf.prototype.unstable_scheduleHydration=function(t){if(t){var e=Jy();t={blockedOn:null,target:t,priority:e};for(var n=0;n<xi.length&&e!==0&&e<xi[n].priority;n++);xi.splice(n,0,t),n===0&&tx(t)}};function Lm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function rf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function yv(){}function gT(t,e,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=Eu(a);o.call(c)}}var a=SS(e,r,t,0,null,!1,!1,"",yv);return t._reactRootContainer=a,t[Kr]=a.current,Qs(t.nodeType===8?t.parentNode:t),Lo(),a}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var c=Eu(l);s.call(c)}}var l=Am(t,0,!1,null,null,!1,!1,"",yv);return t._reactRootContainer=l,t[Kr]=l.current,Qs(t.nodeType===8?t.parentNode:t),Lo(function(){tf(e,l,n,r)}),l}function of(t,e,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var s=i;i=function(){var l=Eu(a);s.call(l)}}tf(e,a,t,i)}else a=gT(n,e,t,i,r);return Eu(a)}Zy=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ts(e.pendingLanes);n!==0&&(Kp(e,n|1),An(e,Ht()),!(xt&6)&&(Ha=Ht()+500,$i()))}break;case 13:Lo(function(){var r=Zr(t,1);if(r!==null){var i=xn();_r(r,t,1,i)}}),Rm(t,1)}};Zp=function(t){if(t.tag===13){var e=Zr(t,134217728);if(e!==null){var n=xn();_r(e,t,134217728,n)}Rm(t,134217728)}};Qy=function(t){if(t.tag===13){var e=Ni(t),n=Zr(t,e);if(n!==null){var r=xn();_r(n,t,e,r)}Rm(t,e)}};Jy=function(){return Et};ex=function(t,e){var n=Et;try{return Et=t,e()}finally{Et=n}};Sh=function(t,e,n){switch(e){case"input":if(ph(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Yu(r);if(!i)throw Error(he(90));Ly(r),ph(r,i)}}}break;case"textarea":Iy(t,n);break;case"select":e=n.value,e!=null&&ba(t,!!n.multiple,e,!1)}};By=wm;Hy=Lo;var vT={usingClientEntryPoint:!1,Events:[Sl,ga,Yu,ky,zy,wm]},hs={findFiberByHostInstance:ho,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},_T={bundleType:hs.bundleType,version:hs.version,rendererPackageName:hs.rendererPackageName,rendererConfig:hs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ni.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Wy(t),t===null?null:t.stateNode},findFiberByHostInstance:hs.findFiberByHostInstance||mT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yl.isDisabled&&Yl.supportsFiber)try{Wu=Yl.inject(_T),Pr=Yl}catch{}}jn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vT;jn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Lm(e))throw Error(he(200));return pT(t,e,null,n)};jn.createRoot=function(t,e){if(!Lm(t))throw Error(he(299));var n=!1,r="",i=ES;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Am(t,1,!1,null,null,n,!1,r,i),t[Kr]=e.current,Qs(t.nodeType===8?t.parentNode:t),new Pm(e)};jn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(he(188)):(t=Object.keys(t).join(","),Error(he(268,t)));return t=Wy(e),t=t===null?null:t.stateNode,t};jn.flushSync=function(t){return Lo(t)};jn.hydrate=function(t,e,n){if(!rf(e))throw Error(he(200));return of(null,t,e,!0,n)};jn.hydrateRoot=function(t,e,n){if(!Lm(t))throw Error(he(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=ES;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=SS(e,null,t,1,n??null,i,!1,o,a),t[Kr]=e.current,Qs(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new nf(e)};jn.render=function(t,e,n){if(!rf(e))throw Error(he(200));return of(null,t,e,!1,n)};jn.unmountComponentAtNode=function(t){if(!rf(t))throw Error(he(40));return t._reactRootContainer?(Lo(function(){of(null,null,t,!1,function(){t._reactRootContainer=null,t[Kr]=null})}),!0):!1};jn.unstable_batchedUpdates=wm;jn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!rf(n))throw Error(he(200));if(t==null||t._reactInternals===void 0)throw Error(he(38));return of(t,e,n,!1,r)};jn.version="18.3.1-next-f1338f8080-20240426";function MS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(MS)}catch(t){console.error(t)}}MS(),My.exports=jn;var Dm=My.exports;const ep=Fp(Dm),wS=fy({__proto__:null,default:ep},[Dm]);var xv=Dm;sh.createRoot=xv.createRoot,sh.hydrateRoot=xv.hydrateRoot;/**
 * @remix-run/router v1.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ot(){return Ot=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ot.apply(this,arguments)}var Gt;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Gt||(Gt={}));const Sv="popstate";function yT(t){t===void 0&&(t={});function e(i,o){let{pathname:a="/",search:s="",hash:l=""}=ri(i.location.hash.substr(1));return!a.startsWith("/")&&!a.startsWith(".")&&(a="/"+a),sl("",{pathname:a,search:s,hash:l},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(i,o){let a=i.document.querySelector("base"),s="";if(a&&a.getAttribute("href")){let l=i.location.href,c=l.indexOf("#");s=c===-1?l:l.slice(0,c)}return s+"#"+(typeof o=="string"?o:Ml(o))}function r(i,o){Do(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(o)+")")}return ST(e,n,r,t)}function ft(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Do(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function xT(){return Math.random().toString(36).substr(2,8)}function Ev(t,e){return{usr:t.state,key:t.key,idx:e}}function sl(t,e,n,r){return n===void 0&&(n=null),Ot({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ri(e):e,{state:n,key:e&&e.key||r||xT()})}function Ml(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function ri(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function ST(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,s=Gt.Pop,l=null,c=u();c==null&&(c=0,a.replaceState(Ot({},a.state,{idx:c}),""));function u(){return(a.state||{idx:null}).idx}function f(){s=Gt.Pop;let m=u(),h=m==null?null:m-c;c=m,l&&l({action:s,location:v.location,delta:h})}function d(m,h){s=Gt.Push;let g=sl(v.location,m,h);n&&n(g,m),c=u()+1;let y=Ev(g,c),E=v.createHref(g);try{a.pushState(y,"",E)}catch(A){if(A instanceof DOMException&&A.name==="DataCloneError")throw A;i.location.assign(E)}o&&l&&l({action:s,location:v.location,delta:1})}function p(m,h){s=Gt.Replace;let g=sl(v.location,m,h);n&&n(g,m),c=u();let y=Ev(g,c),E=v.createHref(g);a.replaceState(y,"",E),o&&l&&l({action:s,location:v.location,delta:0})}function _(m){let h=i.location.origin!=="null"?i.location.origin:i.location.href,g=typeof m=="string"?m:Ml(m);return g=g.replace(/ $/,"%20"),ft(h,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,h)}let v={get action(){return s},get location(){return t(i,a)},listen(m){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Sv,f),l=m,()=>{i.removeEventListener(Sv,f),l=null}},createHref(m){return e(i,m)},createURL:_,encodeLocation(m){let h=_(m);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:d,replace:p,go(m){return a.go(m)}};return v}var At;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(At||(At={}));const ET=new Set(["lazy","caseSensitive","path","id","index","children"]);function MT(t){return t.index===!0}function ll(t,e,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),t.map((i,o)=>{let a=[...n,String(o)],s=typeof i.id=="string"?i.id:a.join("-");if(ft(i.index!==!0||!i.children,"Cannot specify children on an index route"),ft(!r[s],'Found a route id collision on id "'+s+`".  Route id's must be globally unique within Data Router usages`),MT(i)){let l=Ot({},i,e(i),{id:s});return r[s]=l,l}else{let l=Ot({},i,e(i),{id:s,children:void 0});return r[s]=l,i.children&&(l.children=ll(i.children,e,a,r)),l}})}function lo(t,e,n){return n===void 0&&(n="/"),Gc(t,e,n,!1)}function Gc(t,e,n,r){let i=typeof e=="string"?ri(e):e,o=wl(i.pathname||"/",n);if(o==null)return null;let a=TS(t);TT(a);let s=null;for(let l=0;s==null&&l<a.length;++l){let c=OT(o);s=NT(a[l],c,r)}return s}function wT(t,e){let{route:n,pathname:r,params:i}=t;return{id:n.id,pathname:r,params:i,data:e[n.id],handle:n.handle}}function TS(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,s)=>{let l={relativePath:s===void 0?o.path||"":s,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};l.relativePath.startsWith("/")&&(ft(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=Oi([r,l.relativePath]),u=n.concat(l);o.children&&o.children.length>0&&(ft(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),TS(o.children,e,u,c)),!(o.path==null&&!o.index)&&e.push({path:c,score:DT(c,o.index),routesMeta:u})};return t.forEach((o,a)=>{var s;if(o.path===""||!((s=o.path)!=null&&s.includes("?")))i(o,a);else for(let l of bS(o.path))i(o,a,l)}),e}function bS(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=bS(r.join("/")),s=[];return s.push(...a.map(l=>l===""?o:[o,l].join("/"))),i&&s.push(...a),s.map(l=>t.startsWith("/")&&l===""?"/":l)}function TT(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:IT(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const bT=/^:[\w-]+$/,CT=3,AT=2,RT=1,PT=10,LT=-2,Mv=t=>t==="*";function DT(t,e){let n=t.split("/"),r=n.length;return n.some(Mv)&&(r+=LT),e&&(r+=AT),n.filter(i=>!Mv(i)).reduce((i,o)=>i+(bT.test(o)?CT:o===""?RT:PT),r)}function IT(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function NT(t,e,n){n===void 0&&(n=!1);let{routesMeta:r}=t,i={},o="/",a=[];for(let s=0;s<r.length;++s){let l=r[s],c=s===r.length-1,u=o==="/"?e:e.slice(o.length)||"/",f=wv({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},u),d=l.route;if(!f&&c&&n&&!r[r.length-1].route.index&&(f=wv({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},u)),!f)return null;Object.assign(i,f.params),a.push({params:i,pathname:Oi([o,f.pathname]),pathnameBase:zT(Oi([o,f.pathnameBase])),route:d}),f.pathnameBase!=="/"&&(o=Oi([o,f.pathnameBase]))}return a}function wv(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=UT(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((c,u,f)=>{let{paramName:d,isOptional:p}=u;if(d==="*"){let v=s[f]||"";a=o.slice(0,o.length-v.length).replace(/(.)\/+$/,"$1")}const _=s[f];return p&&!_?c[d]=void 0:c[d]=(_||"").replace(/%2F/g,"/"),c},{}),pathname:o,pathnameBase:a,pattern:t}}function UT(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Do(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,s,l)=>(r.push({paramName:s,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function OT(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Do(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function wl(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function FT(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?ri(t):t;return{pathname:n?n.startsWith("/")?n:kT(n,e):e,search:BT(r),hash:HT(i)}}function kT(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ld(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function CS(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Im(t,e){let n=CS(t);return e?n.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Nm(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=ri(t):(i=Ot({},t),ft(!i.pathname||!i.pathname.includes("?"),ld("?","pathname","search",i)),ft(!i.pathname||!i.pathname.includes("#"),ld("#","pathname","hash",i)),ft(!i.search||!i.search.includes("#"),ld("#","search","hash",i)));let o=t===""||i.pathname==="",a=o?"/":i.pathname,s;if(a==null)s=n;else{let f=e.length-1;if(!r&&a.startsWith("..")){let d=a.split("/");for(;d[0]==="..";)d.shift(),f-=1;i.pathname=d.join("/")}s=f>=0?e[f]:"/"}let l=FT(i,s),c=a&&a!=="/"&&a.endsWith("/"),u=(o||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||u)&&(l.pathname+="/"),l}const Oi=t=>t.join("/").replace(/\/\/+/g,"/"),zT=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),BT=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,HT=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class Um{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function af(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const AS=["post","put","patch","delete"],VT=new Set(AS),GT=["get",...AS],WT=new Set(GT),jT=new Set([301,302,303,307,308]),$T=new Set([307,308]),cd={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},XT={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},ps={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Om=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,YT=t=>({hasErrorBoundary:!!t.hasErrorBoundary}),RS="remix-router-transitions";function qT(t){const e=t.window?t.window:typeof window<"u"?window:void 0,n=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u",r=!n;ft(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(t.mapRouteProperties)i=t.mapRouteProperties;else if(t.detectErrorBoundary){let O=t.detectErrorBoundary;i=H=>({hasErrorBoundary:O(H)})}else i=YT;let o={},a=ll(t.routes,i,void 0,o),s,l=t.basename||"/",c=t.unstable_dataStrategy||eb,u=t.unstable_patchRoutesOnMiss,f=Ot({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1,unstable_skipActionErrorRevalidation:!1},t.future),d=null,p=new Set,_=null,v=null,m=null,h=t.hydrationData!=null,g=lo(a,t.history.location,l),y=null;if(g==null&&!u){let O=vn(404,{pathname:t.history.location.pathname}),{matches:H,route:J}=Nv(a);g=H,y={[J.id]:O}}let E;if(!g)E=!1,g=[];else if(g.some(O=>O.route.lazy))E=!1;else if(!g.some(O=>O.route.loader))E=!0;else if(f.v7_partialHydration){let O=t.hydrationData?t.hydrationData.loaderData:null,H=t.hydrationData?t.hydrationData.errors:null,J=re=>re.route.loader?typeof re.route.loader=="function"&&re.route.loader.hydrate===!0?!1:O&&O[re.route.id]!==void 0||H&&H[re.route.id]!==void 0:!0;if(H){let re=g.findIndex(_e=>H[_e.route.id]!==void 0);E=g.slice(0,re+1).every(J)}else E=g.every(J)}else E=t.hydrationData!=null;let A,x={historyAction:t.history.action,location:t.history.location,matches:g,initialized:E,navigation:cd,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||y,fetchers:new Map,blockers:new Map},M=Gt.Pop,P=!1,T,w=!1,L=new Map,V=null,F=!1,W=!1,ee=[],U=[],N=new Map,R=0,z=-1,X=new Map,Y=new Set,oe=new Map,xe=new Map,q=new Set,ae=new Map,de=new Map,fe=new Map,$e=!1;function We(){if(d=t.history.listen(O=>{let{action:H,location:J,delta:re}=O;if($e){$e=!1;return}Do(de.size===0||re!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let _e=Z({currentLocation:x.location,nextLocation:J,historyAction:H});if(_e&&re!=null){$e=!0,t.history.go(re*-1),te(_e,{state:"blocked",location:J,proceed(){te(_e,{state:"proceeding",proceed:void 0,reset:void 0,location:J}),t.history.go(re)},reset(){let Ce=new Map(x.blockers);Ce.set(_e,ps),De({blockers:Ce})}});return}return Oe(H,J)}),n){hb(e,L);let O=()=>pb(e,L);e.addEventListener("pagehide",O),V=()=>e.removeEventListener("pagehide",O)}return x.initialized||Oe(Gt.Pop,x.location,{initialHydration:!0}),A}function et(){d&&d(),V&&V(),p.clear(),T&&T.abort(),x.fetchers.forEach((O,H)=>be(H)),x.blockers.forEach((O,H)=>S(H))}function B(O){return p.add(O),()=>p.delete(O)}function De(O,H){H===void 0&&(H={}),x=Ot({},x,O);let J=[],re=[];f.v7_fetcherPersist&&x.fetchers.forEach((_e,Ce)=>{_e.state==="idle"&&(q.has(Ce)?re.push(Ce):J.push(Ce))}),[...p].forEach(_e=>_e(x,{deletedFetchers:re,unstable_viewTransitionOpts:H.viewTransitionOpts,unstable_flushSync:H.flushSync===!0})),f.v7_fetcherPersist&&(J.forEach(_e=>x.fetchers.delete(_e)),re.forEach(_e=>be(_e)))}function je(O,H,J){var re,_e;let{flushSync:Ce}=J===void 0?{}:J,Fe=x.actionData!=null&&x.navigation.formMethod!=null&&hr(x.navigation.formMethod)&&x.navigation.state==="loading"&&((re=O.state)==null?void 0:re._isRedirect)!==!0,ve;H.actionData?Object.keys(H.actionData).length>0?ve=H.actionData:ve=null:Fe?ve=x.actionData:ve=null;let Qe=H.loaderData?Dv(x.loaderData,H.loaderData,H.matches||[],H.errors):x.loaderData,Me=x.blockers;Me.size>0&&(Me=new Map(Me),Me.forEach((k,j)=>Me.set(j,ps)));let it=P===!0||x.navigation.formMethod!=null&&hr(x.navigation.formMethod)&&((_e=O.state)==null?void 0:_e._isRedirect)!==!0;s&&(a=s,s=void 0),F||M===Gt.Pop||(M===Gt.Push?t.history.push(O,O.state):M===Gt.Replace&&t.history.replace(O,O.state));let C;if(M===Gt.Pop){let k=L.get(x.location.pathname);k&&k.has(O.pathname)?C={currentLocation:x.location,nextLocation:O}:L.has(O.pathname)&&(C={currentLocation:O,nextLocation:x.location})}else if(w){let k=L.get(x.location.pathname);k?k.add(O.pathname):(k=new Set([O.pathname]),L.set(x.location.pathname,k)),C={currentLocation:x.location,nextLocation:O}}De(Ot({},H,{actionData:ve,loaderData:Qe,historyAction:M,location:O,initialized:!0,navigation:cd,revalidation:"idle",restoreScrollPosition:mt(O,H.matches||x.matches),preventScrollReset:it,blockers:Me}),{viewTransitionOpts:C,flushSync:Ce===!0}),M=Gt.Pop,P=!1,w=!1,F=!1,W=!1,ee=[],U=[]}async function dt(O,H){if(typeof O=="number"){t.history.go(O);return}let J=tp(x.location,x.matches,l,f.v7_prependBasename,O,f.v7_relativeSplatPath,H==null?void 0:H.fromRouteId,H==null?void 0:H.relative),{path:re,submission:_e,error:Ce}=Tv(f.v7_normalizeFormMethod,!1,J,H),Fe=x.location,ve=sl(x.location,re,H&&H.state);ve=Ot({},ve,t.history.encodeLocation(ve));let Qe=H&&H.replace!=null?H.replace:void 0,Me=Gt.Push;Qe===!0?Me=Gt.Replace:Qe===!1||_e!=null&&hr(_e.formMethod)&&_e.formAction===x.location.pathname+x.location.search&&(Me=Gt.Replace);let it=H&&"preventScrollReset"in H?H.preventScrollReset===!0:void 0,C=(H&&H.unstable_flushSync)===!0,k=Z({currentLocation:Fe,nextLocation:ve,historyAction:Me});if(k){te(k,{state:"blocked",location:ve,proceed(){te(k,{state:"proceeding",proceed:void 0,reset:void 0,location:ve}),dt(O,H)},reset(){let j=new Map(x.blockers);j.set(k,ps),De({blockers:j})}});return}return await Oe(Me,ve,{submission:_e,pendingError:Ce,preventScrollReset:it,replace:H&&H.replace,enableViewTransition:H&&H.unstable_viewTransition,flushSync:C})}function Ne(){if(ge(),De({revalidation:"loading"}),x.navigation.state!=="submitting"){if(x.navigation.state==="idle"){Oe(x.historyAction,x.location,{startUninterruptedRevalidation:!0});return}Oe(M||x.historyAction,x.navigation.location,{overrideNavigation:x.navigation})}}async function Oe(O,H,J){T&&T.abort(),T=null,M=O,F=(J&&J.startUninterruptedRevalidation)===!0,Pt(x.location,x.matches),P=(J&&J.preventScrollReset)===!0,w=(J&&J.enableViewTransition)===!0;let re=s||a,_e=J&&J.overrideNavigation,Ce=lo(re,H,l),Fe=(J&&J.flushSync)===!0,ve=nt(Ce,re,H.pathname);if(ve.active&&ve.matches&&(Ce=ve.matches),!Ce){let{error:$,notFoundMatches:G,route:ue}=ne(H.pathname);je(H,{matches:G,loaderData:{},errors:{[ue.id]:$}},{flushSync:Fe});return}if(x.initialized&&!W&&ab(x.location,H)&&!(J&&J.submission&&hr(J.submission.formMethod))){je(H,{matches:Ce},{flushSync:Fe});return}T=new AbortController;let Qe=Vo(t.history,H,T.signal,J&&J.submission),Me;if(J&&J.pendingError)Me=[ks(Ce).route.id,{type:At.error,error:J.pendingError}];else if(J&&J.submission&&hr(J.submission.formMethod)){let $=await Xe(Qe,H,J.submission,Ce,ve.active,{replace:J.replace,flushSync:Fe});if($.shortCircuited)return;if($.pendingActionResult){let[G,ue]=$.pendingActionResult;if(kn(ue)&&af(ue.error)&&ue.error.status===404){T=null,je(H,{matches:$.matches,loaderData:{},errors:{[G]:ue.error}});return}}Ce=$.matches||Ce,Me=$.pendingActionResult,_e=ud(H,J.submission),Fe=!1,ve.active=!1,Qe=Vo(t.history,Qe.url,Qe.signal)}let{shortCircuited:it,matches:C,loaderData:k,errors:j}=await Be(Qe,H,Ce,ve.active,_e,J&&J.submission,J&&J.fetcherSubmission,J&&J.replace,J&&J.initialHydration===!0,Fe,Me);it||(T=null,je(H,Ot({matches:C||Ce},Iv(Me),{loaderData:k,errors:j})))}async function Xe(O,H,J,re,_e,Ce){Ce===void 0&&(Ce={}),ge();let Fe=fb(H,J);if(De({navigation:Fe},{flushSync:Ce.flushSync===!0}),_e){let Me=await rt(re,H.pathname,O.signal);if(Me.type==="aborted")return{shortCircuited:!0};if(Me.type==="error"){let{error:it,notFoundMatches:C,route:k}=ce(H.pathname,Me);return{matches:C,pendingActionResult:[k.id,{type:At.error,error:it}]}}else if(Me.matches)re=Me.matches;else{let{notFoundMatches:it,error:C,route:k}=ne(H.pathname);return{matches:it,pendingActionResult:[k.id,{type:At.error,error:C}]}}}let ve,Qe=Cs(re,H);if(!Qe.route.action&&!Qe.route.lazy)ve={type:At.error,error:vn(405,{method:O.method,pathname:H.pathname,routeId:Qe.route.id})};else if(ve=(await le("action",O,[Qe],re))[0],O.signal.aborted)return{shortCircuited:!0};if(vo(ve)){let Me;return Ce&&Ce.replace!=null?Me=Ce.replace:Me=Rv(ve.response.headers.get("Location"),new URL(O.url),l)===x.location.pathname+x.location.search,await ie(O,ve,{submission:J,replace:Me}),{shortCircuited:!0}}if(go(ve))throw vn(400,{type:"defer-action"});if(kn(ve)){let Me=ks(re,Qe.route.id);return(Ce&&Ce.replace)!==!0&&(M=Gt.Push),{matches:re,pendingActionResult:[Me.route.id,ve]}}return{matches:re,pendingActionResult:[Qe.route.id,ve]}}async function Be(O,H,J,re,_e,Ce,Fe,ve,Qe,Me,it){let C=_e||ud(H,Ce),k=Ce||Fe||Fv(C),j=!F&&(!f.v7_partialHydration||!Qe);if(re){if(j){let Ge=yt(it);De(Ot({navigation:C},Ge!==void 0?{actionData:Ge}:{}),{flushSync:Me})}let Ve=await rt(J,H.pathname,O.signal);if(Ve.type==="aborted")return{shortCircuited:!0};if(Ve.type==="error"){let{error:Ge,notFoundMatches:Te,route:at}=ce(H.pathname,Ve);return{matches:Te,loaderData:{},errors:{[at.id]:Ge}}}else if(Ve.matches)J=Ve.matches;else{let{error:Ge,notFoundMatches:Te,route:at}=ne(H.pathname);return{matches:Te,loaderData:{},errors:{[at.id]:Ge}}}}let $=s||a,[G,ue]=bv(t.history,x,J,k,H,f.v7_partialHydration&&Qe===!0,f.unstable_skipActionErrorRevalidation,W,ee,U,q,oe,Y,$,l,it);if(Re(Ve=>!(J&&J.some(Ge=>Ge.route.id===Ve))||G&&G.some(Ge=>Ge.route.id===Ve)),z=++R,G.length===0&&ue.length===0){let Ve=qe();return je(H,Ot({matches:J,loaderData:{},errors:it&&kn(it[1])?{[it[0]]:it[1].error}:null},Iv(it),Ve?{fetchers:new Map(x.fetchers)}:{}),{flushSync:Me}),{shortCircuited:!0}}if(j){let Ve={};if(!re){Ve.navigation=C;let Ge=yt(it);Ge!==void 0&&(Ve.actionData=Ge)}ue.length>0&&(Ve.fetchers=D(ue)),De(Ve,{flushSync:Me})}ue.forEach(Ve=>{N.has(Ve.key)&&Ue(Ve.key),Ve.controller&&N.set(Ve.key,Ve.controller)});let Ee=()=>ue.forEach(Ve=>Ue(Ve.key));T&&T.signal.addEventListener("abort",Ee);let{loaderResults:we,fetcherResults:Pe}=await Le(x.matches,J,G,ue,O);if(O.signal.aborted)return{shortCircuited:!0};T&&T.signal.removeEventListener("abort",Ee),ue.forEach(Ve=>N.delete(Ve.key));let ze=Uv([...we,...Pe]);if(ze){if(ze.idx>=G.length){let Ve=ue[ze.idx-G.length].key;Y.add(Ve)}return await ie(O,ze.result,{replace:ve}),{shortCircuited:!0}}let{loaderData:He,errors:Ie}=Lv(x,J,G,we,it,ue,Pe,ae);ae.forEach((Ve,Ge)=>{Ve.subscribe(Te=>{(Te||Ve.done)&&ae.delete(Ge)})}),f.v7_partialHydration&&Qe&&x.errors&&Object.entries(x.errors).filter(Ve=>{let[Ge]=Ve;return!G.some(Te=>Te.route.id===Ge)}).forEach(Ve=>{let[Ge,Te]=Ve;Ie=Object.assign(Ie||{},{[Ge]:Te})});let gt=qe(),Tt=Ke(z),bt=gt||Tt||ue.length>0;return Ot({matches:J,loaderData:He,errors:Ie},bt?{fetchers:new Map(x.fetchers)}:{})}function yt(O){if(O&&!kn(O[1]))return{[O[0]]:O[1].data};if(x.actionData)return Object.keys(x.actionData).length===0?null:x.actionData}function D(O){return O.forEach(H=>{let J=x.fetchers.get(H.key),re=ms(void 0,J?J.data:void 0);x.fetchers.set(H.key,re)}),new Map(x.fetchers)}function b(O,H,J,re){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");N.has(O)&&Ue(O);let _e=(re&&re.unstable_flushSync)===!0,Ce=s||a,Fe=tp(x.location,x.matches,l,f.v7_prependBasename,J,f.v7_relativeSplatPath,H,re==null?void 0:re.relative),ve=lo(Ce,Fe,l),Qe=nt(ve,Ce,Fe);if(Qe.active&&Qe.matches&&(ve=Qe.matches),!ve){ke(O,H,vn(404,{pathname:Fe}),{flushSync:_e});return}let{path:Me,submission:it,error:C}=Tv(f.v7_normalizeFormMethod,!0,Fe,re);if(C){ke(O,H,C,{flushSync:_e});return}let k=Cs(ve,Me);if(P=(re&&re.preventScrollReset)===!0,it&&hr(it.formMethod)){Q(O,H,Me,k,ve,Qe.active,_e,it);return}oe.set(O,{routeId:H,path:Me}),se(O,H,Me,k,ve,Qe.active,_e,it)}async function Q(O,H,J,re,_e,Ce,Fe,ve){ge(),oe.delete(O);function Qe(at){if(!at.route.action&&!at.route.lazy){let ut=vn(405,{method:ve.formMethod,pathname:J,routeId:H});return ke(O,H,ut,{flushSync:Fe}),!0}return!1}if(!Ce&&Qe(re))return;let Me=x.fetchers.get(O);me(O,db(ve,Me),{flushSync:Fe});let it=new AbortController,C=Vo(t.history,J,it.signal,ve);if(Ce){let at=await rt(_e,J,C.signal);if(at.type==="aborted")return;if(at.type==="error"){let{error:ut}=ce(J,at);ke(O,H,ut,{flushSync:Fe});return}else if(at.matches){if(_e=at.matches,re=Cs(_e,J),Qe(re))return}else{ke(O,H,vn(404,{pathname:J}),{flushSync:Fe});return}}N.set(O,it);let k=R,$=(await le("action",C,[re],_e))[0];if(C.signal.aborted){N.get(O)===it&&N.delete(O);return}if(f.v7_fetcherPersist&&q.has(O)){if(vo($)||kn($)){me(O,mi(void 0));return}}else{if(vo($))if(N.delete(O),z>k){me(O,mi(void 0));return}else return Y.add(O),me(O,ms(ve)),ie(C,$,{fetcherSubmission:ve});if(kn($)){ke(O,H,$.error);return}}if(go($))throw vn(400,{type:"defer-action"});let G=x.navigation.location||x.location,ue=Vo(t.history,G,it.signal),Ee=s||a,we=x.navigation.state!=="idle"?lo(Ee,x.navigation.location,l):x.matches;ft(we,"Didn't find any matches after fetcher action");let Pe=++R;X.set(O,Pe);let ze=ms(ve,$.data);x.fetchers.set(O,ze);let[He,Ie]=bv(t.history,x,we,ve,G,!1,f.unstable_skipActionErrorRevalidation,W,ee,U,q,oe,Y,Ee,l,[re.route.id,$]);Ie.filter(at=>at.key!==O).forEach(at=>{let ut=at.key,Xn=x.fetchers.get(ut),Bo=ms(void 0,Xn?Xn.data:void 0);x.fetchers.set(ut,Bo),N.has(ut)&&Ue(ut),at.controller&&N.set(ut,at.controller)}),De({fetchers:new Map(x.fetchers)});let gt=()=>Ie.forEach(at=>Ue(at.key));it.signal.addEventListener("abort",gt);let{loaderResults:Tt,fetcherResults:bt}=await Le(x.matches,we,He,Ie,ue);if(it.signal.aborted)return;it.signal.removeEventListener("abort",gt),X.delete(O),N.delete(O),Ie.forEach(at=>N.delete(at.key));let Ve=Uv([...Tt,...bt]);if(Ve){if(Ve.idx>=He.length){let at=Ie[Ve.idx-He.length].key;Y.add(at)}return ie(ue,Ve.result)}let{loaderData:Ge,errors:Te}=Lv(x,x.matches,He,Tt,void 0,Ie,bt,ae);if(x.fetchers.has(O)){let at=mi($.data);x.fetchers.set(O,at)}Ke(Pe),x.navigation.state==="loading"&&Pe>z?(ft(M,"Expected pending action"),T&&T.abort(),je(x.navigation.location,{matches:we,loaderData:Ge,errors:Te,fetchers:new Map(x.fetchers)})):(De({errors:Te,loaderData:Dv(x.loaderData,Ge,we,Te),fetchers:new Map(x.fetchers)}),W=!1)}async function se(O,H,J,re,_e,Ce,Fe,ve){let Qe=x.fetchers.get(O);me(O,ms(ve,Qe?Qe.data:void 0),{flushSync:Fe});let Me=new AbortController,it=Vo(t.history,J,Me.signal);if(Ce){let $=await rt(_e,J,it.signal);if($.type==="aborted")return;if($.type==="error"){let{error:G}=ce(J,$);ke(O,H,G,{flushSync:Fe});return}else if($.matches)_e=$.matches,re=Cs(_e,J);else{ke(O,H,vn(404,{pathname:J}),{flushSync:Fe});return}}N.set(O,Me);let C=R,j=(await le("loader",it,[re],_e))[0];if(go(j)&&(j=await NS(j,it.signal,!0)||j),N.get(O)===Me&&N.delete(O),!it.signal.aborted){if(q.has(O)){me(O,mi(void 0));return}if(vo(j))if(z>C){me(O,mi(void 0));return}else{Y.add(O),await ie(it,j);return}if(kn(j)){ke(O,H,j.error);return}ft(!go(j),"Unhandled fetcher deferred data"),me(O,mi(j.data))}}async function ie(O,H,J){let{submission:re,fetcherSubmission:_e,replace:Ce}=J===void 0?{}:J;H.response.headers.has("X-Remix-Revalidate")&&(W=!0);let Fe=H.response.headers.get("Location");ft(Fe,"Expected a Location header on the redirect Response"),Fe=Rv(Fe,new URL(O.url),l);let ve=sl(x.location,Fe,{_isRedirect:!0});if(n){let j=!1;if(H.response.headers.has("X-Remix-Reload-Document"))j=!0;else if(Om.test(Fe)){const $=t.history.createURL(Fe);j=$.origin!==e.location.origin||wl($.pathname,l)==null}if(j){Ce?e.location.replace(Fe):e.location.assign(Fe);return}}T=null;let Qe=Ce===!0?Gt.Replace:Gt.Push,{formMethod:Me,formAction:it,formEncType:C}=x.navigation;!re&&!_e&&Me&&it&&C&&(re=Fv(x.navigation));let k=re||_e;if($T.has(H.response.status)&&k&&hr(k.formMethod))await Oe(Qe,ve,{submission:Ot({},k,{formAction:Fe}),preventScrollReset:P});else{let j=ud(ve,re);await Oe(Qe,ve,{overrideNavigation:j,fetcherSubmission:_e,preventScrollReset:P})}}async function le(O,H,J,re){try{let _e=await tb(c,O,H,J,re,o,i);return await Promise.all(_e.map((Ce,Fe)=>{if(lb(Ce)){let ve=Ce.result;return{type:At.redirect,response:ib(ve,H,J[Fe].route.id,re,l,f.v7_relativeSplatPath)}}return rb(Ce)}))}catch(_e){return J.map(()=>({type:At.error,error:_e}))}}async function Le(O,H,J,re,_e){let[Ce,...Fe]=await Promise.all([J.length?le("loader",_e,J,H):[],...re.map(ve=>{if(ve.matches&&ve.match&&ve.controller){let Qe=Vo(t.history,ve.path,ve.controller.signal);return le("loader",Qe,[ve.match],ve.matches).then(Me=>Me[0])}else return Promise.resolve({type:At.error,error:vn(404,{pathname:ve.path})})})]);return await Promise.all([Ov(O,J,Ce,Ce.map(()=>_e.signal),!1,x.loaderData),Ov(O,re.map(ve=>ve.match),Fe,re.map(ve=>ve.controller?ve.controller.signal:null),!0)]),{loaderResults:Ce,fetcherResults:Fe}}function ge(){W=!0,ee.push(...Re()),oe.forEach((O,H)=>{N.has(H)&&(U.push(H),Ue(H))})}function me(O,H,J){J===void 0&&(J={}),x.fetchers.set(O,H),De({fetchers:new Map(x.fetchers)},{flushSync:(J&&J.flushSync)===!0})}function ke(O,H,J,re){re===void 0&&(re={});let _e=ks(x.matches,H);be(O),De({errors:{[_e.route.id]:J},fetchers:new Map(x.fetchers)},{flushSync:(re&&re.flushSync)===!0})}function pe(O){return f.v7_fetcherPersist&&(xe.set(O,(xe.get(O)||0)+1),q.has(O)&&q.delete(O)),x.fetchers.get(O)||XT}function be(O){let H=x.fetchers.get(O);N.has(O)&&!(H&&H.state==="loading"&&X.has(O))&&Ue(O),oe.delete(O),X.delete(O),Y.delete(O),q.delete(O),x.fetchers.delete(O)}function ot(O){if(f.v7_fetcherPersist){let H=(xe.get(O)||0)-1;H<=0?(xe.delete(O),q.add(O)):xe.set(O,H)}else be(O);De({fetchers:new Map(x.fetchers)})}function Ue(O){let H=N.get(O);ft(H,"Expected fetch controller: "+O),H.abort(),N.delete(O)}function ye(O){for(let H of O){let J=pe(H),re=mi(J.data);x.fetchers.set(H,re)}}function qe(){let O=[],H=!1;for(let J of Y){let re=x.fetchers.get(J);ft(re,"Expected fetcher: "+J),re.state==="loading"&&(Y.delete(J),O.push(J),H=!0)}return ye(O),H}function Ke(O){let H=[];for(let[J,re]of X)if(re<O){let _e=x.fetchers.get(J);ft(_e,"Expected fetcher: "+J),_e.state==="loading"&&(Ue(J),X.delete(J),H.push(J))}return ye(H),H.length>0}function wt(O,H){let J=x.blockers.get(O)||ps;return de.get(O)!==H&&de.set(O,H),J}function S(O){x.blockers.delete(O),de.delete(O)}function te(O,H){let J=x.blockers.get(O)||ps;ft(J.state==="unblocked"&&H.state==="blocked"||J.state==="blocked"&&H.state==="blocked"||J.state==="blocked"&&H.state==="proceeding"||J.state==="blocked"&&H.state==="unblocked"||J.state==="proceeding"&&H.state==="unblocked","Invalid blocker state transition: "+J.state+" -> "+H.state);let re=new Map(x.blockers);re.set(O,H),De({blockers:re})}function Z(O){let{currentLocation:H,nextLocation:J,historyAction:re}=O;if(de.size===0)return;de.size>1&&Do(!1,"A router only supports one blocker at a time");let _e=Array.from(de.entries()),[Ce,Fe]=_e[_e.length-1],ve=x.blockers.get(Ce);if(!(ve&&ve.state==="proceeding")&&Fe({currentLocation:H,nextLocation:J,historyAction:re}))return Ce}function ne(O){let H=vn(404,{pathname:O}),J=s||a,{matches:re,route:_e}=Nv(J);return Re(),{notFoundMatches:re,route:_e,error:H}}function ce(O,H){let J=H.partialMatches,re=J[J.length-1].route,_e=vn(400,{type:"route-discovery",routeId:re.id,pathname:O,message:H.error!=null&&"message"in H.error?H.error:String(H.error)});return{notFoundMatches:J,route:re,error:_e}}function Re(O){let H=[];return ae.forEach((J,re)=>{(!O||O(re))&&(J.cancel(),H.push(re),ae.delete(re))}),H}function Ye(O,H,J){if(_=O,m=H,v=J||null,!h&&x.navigation===cd){h=!0;let re=mt(x.location,x.matches);re!=null&&De({restoreScrollPosition:re})}return()=>{_=null,m=null,v=null}}function tt(O,H){return v&&v(O,H.map(re=>wT(re,x.loaderData)))||O.key}function Pt(O,H){if(_&&m){let J=tt(O,H);_[J]=m()}}function mt(O,H){if(_){let J=tt(O,H),re=_[J];if(typeof re=="number")return re}return null}function nt(O,H,J){if(u)if(O){if(O[O.length-1].route.path==="*")return{active:!0,matches:Gc(H,J,l,!0)}}else return{active:!0,matches:Gc(H,J,l,!0)||[]};return{active:!1,matches:null}}async function rt(O,H,J){let re=O,_e=re.length>0?re[re.length-1].route:null;for(;;){try{await JT(u,H,re,a||s,o,i,fe,J)}catch(Me){return{type:"error",error:Me,partialMatches:re}}if(J.aborted)return{type:"aborted"};let Ce=s||a,Fe=lo(Ce,H,l),ve=!1;if(Fe){let Me=Fe[Fe.length-1].route;if(Me.index)return{type:"success",matches:Fe};if(Me.path&&Me.path.length>0)if(Me.path==="*")ve=!0;else return{type:"success",matches:Fe}}let Qe=Gc(Ce,H,l,!0);if(!Qe||re.map(Me=>Me.route.id).join("-")===Qe.map(Me=>Me.route.id).join("-"))return{type:"success",matches:ve?Fe:null};if(re=Qe,_e=re[re.length-1].route,_e.path==="*")return{type:"success",matches:re}}}function Ct(O){o={},s=ll(O,i,void 0,o)}return A={get basename(){return l},get future(){return f},get state(){return x},get routes(){return a},get window(){return e},initialize:We,subscribe:B,enableScrollRestoration:Ye,navigate:dt,fetch:b,revalidate:Ne,createHref:O=>t.history.createHref(O),encodeLocation:O=>t.history.encodeLocation(O),getFetcher:pe,deleteFetcher:ot,dispose:et,getBlocker:wt,deleteBlocker:S,patchRoutes(O,H){return LS(O,H,a||s,o,i)},_internalFetchControllers:N,_internalActiveDeferreds:ae,_internalSetRoutes:Ct},A}function KT(t){return t!=null&&("formData"in t&&t.formData!=null||"body"in t&&t.body!==void 0)}function tp(t,e,n,r,i,o,a,s){let l,c;if(a){l=[];for(let f of e)if(l.push(f),f.route.id===a){c=f;break}}else l=e,c=e[e.length-1];let u=Nm(i||".",Im(l,o),wl(t.pathname,n)||t.pathname,s==="path");return i==null&&(u.search=t.search,u.hash=t.hash),(i==null||i===""||i===".")&&c&&c.route.index&&!Fm(u.search)&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(u.pathname=u.pathname==="/"?n:Oi([n,u.pathname])),Ml(u)}function Tv(t,e,n,r){if(!r||!KT(r))return{path:n};if(r.formMethod&&!ub(r.formMethod))return{path:n,error:vn(405,{method:r.formMethod})};let i=()=>({path:n,error:vn(400,{type:"invalid-body"})}),o=r.formMethod||"get",a=t?o.toUpperCase():o.toLowerCase(),s=DS(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!hr(a))return i();let d=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((p,_)=>{let[v,m]=_;return""+p+v+"="+m+`
`},""):String(r.body);return{path:n,submission:{formMethod:a,formAction:s,formEncType:r.formEncType,formData:void 0,json:void 0,text:d}}}else if(r.formEncType==="application/json"){if(!hr(a))return i();try{let d=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:a,formAction:s,formEncType:r.formEncType,formData:void 0,json:d,text:void 0}}}catch{return i()}}}ft(typeof FormData=="function","FormData is not available in this environment");let l,c;if(r.formData)l=np(r.formData),c=r.formData;else if(r.body instanceof FormData)l=np(r.body),c=r.body;else if(r.body instanceof URLSearchParams)l=r.body,c=Pv(l);else if(r.body==null)l=new URLSearchParams,c=new FormData;else try{l=new URLSearchParams(r.body),c=Pv(l)}catch{return i()}let u={formMethod:a,formAction:s,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:c,json:void 0,text:void 0};if(hr(u.formMethod))return{path:n,submission:u};let f=ri(n);return e&&f.search&&Fm(f.search)&&l.append("index",""),f.search="?"+l,{path:Ml(f),submission:u}}function ZT(t,e){let n=t;if(e){let r=t.findIndex(i=>i.route.id===e);r>=0&&(n=t.slice(0,r))}return n}function bv(t,e,n,r,i,o,a,s,l,c,u,f,d,p,_,v){let m=v?kn(v[1])?v[1].error:v[1].data:void 0,h=t.createURL(e.location),g=t.createURL(i),y=v&&kn(v[1])?v[0]:void 0,E=y?ZT(n,y):n,A=v?v[1].statusCode:void 0,x=a&&A&&A>=400,M=E.filter((T,w)=>{let{route:L}=T;if(L.lazy)return!0;if(L.loader==null)return!1;if(o)return typeof L.loader!="function"||L.loader.hydrate?!0:e.loaderData[L.id]===void 0&&(!e.errors||e.errors[L.id]===void 0);if(QT(e.loaderData,e.matches[w],T)||l.some(W=>W===T.route.id))return!0;let V=e.matches[w],F=T;return Cv(T,Ot({currentUrl:h,currentParams:V.params,nextUrl:g,nextParams:F.params},r,{actionResult:m,unstable_actionStatus:A,defaultShouldRevalidate:x?!1:s||h.pathname+h.search===g.pathname+g.search||h.search!==g.search||PS(V,F)}))}),P=[];return f.forEach((T,w)=>{if(o||!n.some(ee=>ee.route.id===T.routeId)||u.has(w))return;let L=lo(p,T.path,_);if(!L){P.push({key:w,routeId:T.routeId,path:T.path,matches:null,match:null,controller:null});return}let V=e.fetchers.get(w),F=Cs(L,T.path),W=!1;d.has(w)?W=!1:c.includes(w)?W=!0:V&&V.state!=="idle"&&V.data===void 0?W=s:W=Cv(F,Ot({currentUrl:h,currentParams:e.matches[e.matches.length-1].params,nextUrl:g,nextParams:n[n.length-1].params},r,{actionResult:m,unstable_actionStatus:A,defaultShouldRevalidate:x?!1:s})),W&&P.push({key:w,routeId:T.routeId,path:T.path,matches:L,match:F,controller:new AbortController})}),[M,P]}function QT(t,e,n){let r=!e||n.route.id!==e.route.id,i=t[n.route.id]===void 0;return r||i}function PS(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function Cv(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}async function JT(t,e,n,r,i,o,a,s){let l=[e,...n.map(c=>c.route.id)].join("-");try{let c=a.get(l);c||(c=t({path:e,matches:n,patch:(u,f)=>{s.aborted||LS(u,f,r,i,o)}}),a.set(l,c)),c&&sb(c)&&await c}finally{a.delete(l)}}function LS(t,e,n,r,i){if(t){var o;let a=r[t];ft(a,"No route found to patch children into: routeId = "+t);let s=ll(e,i,[t,"patch",String(((o=a.children)==null?void 0:o.length)||"0")],r);a.children?a.children.push(...s):a.children=s}else{let a=ll(e,i,["patch",String(n.length||"0")],r);n.push(...a)}}async function Av(t,e,n){if(!t.lazy)return;let r=await t.lazy();if(!t.lazy)return;let i=n[t.id];ft(i,"No route found in manifest");let o={};for(let a in r){let l=i[a]!==void 0&&a!=="hasErrorBoundary";Do(!l,'Route "'+i.id+'" has a static property "'+a+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+a+'" will be ignored.')),!l&&!ET.has(a)&&(o[a]=r[a])}Object.assign(i,o),Object.assign(i,Ot({},e(i),{lazy:void 0}))}function eb(t){return Promise.all(t.matches.map(e=>e.resolve()))}async function tb(t,e,n,r,i,o,a,s){let l=r.reduce((f,d)=>f.add(d.route.id),new Set),c=new Set,u=await t({matches:i.map(f=>{let d=l.has(f.route.id);return Ot({},f,{shouldLoad:d,resolve:_=>(c.add(f.route.id),d?nb(e,n,f,o,a,_,s):Promise.resolve({type:At.data,result:void 0}))})}),request:n,params:i[0].params,context:s});return i.forEach(f=>ft(c.has(f.route.id),'`match.resolve()` was not called for route id "'+f.route.id+'". You must call `match.resolve()` on every match passed to `dataStrategy` to ensure all routes are properly loaded.')),u.filter((f,d)=>l.has(i[d].route.id))}async function nb(t,e,n,r,i,o,a){let s,l,c=u=>{let f,d=new Promise((v,m)=>f=m);l=()=>f(),e.signal.addEventListener("abort",l);let p=v=>typeof u!="function"?Promise.reject(new Error("You cannot call the handler for a route which defines a boolean "+('"'+t+'" [routeId: '+n.route.id+"]"))):u({request:e,params:n.params,context:a},...v!==void 0?[v]:[]),_;return o?_=o(v=>p(v)):_=(async()=>{try{return{type:"data",result:await p()}}catch(v){return{type:"error",result:v}}})(),Promise.race([_,d])};try{let u=n.route[t];if(n.route.lazy)if(u){let f,[d]=await Promise.all([c(u).catch(p=>{f=p}),Av(n.route,i,r)]);if(f!==void 0)throw f;s=d}else if(await Av(n.route,i,r),u=n.route[t],u)s=await c(u);else if(t==="action"){let f=new URL(e.url),d=f.pathname+f.search;throw vn(405,{method:e.method,pathname:d,routeId:n.route.id})}else return{type:At.data,result:void 0};else if(u)s=await c(u);else{let f=new URL(e.url),d=f.pathname+f.search;throw vn(404,{pathname:d})}ft(s.result!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(u){return{type:At.error,result:u}}finally{l&&e.signal.removeEventListener("abort",l)}return s}async function rb(t){let{result:e,type:n,status:r}=t;if(IS(e)){let a;try{let s=e.headers.get("Content-Type");s&&/\bapplication\/json\b/.test(s)?e.body==null?a=null:a=await e.json():a=await e.text()}catch(s){return{type:At.error,error:s}}return n===At.error?{type:At.error,error:new Um(e.status,e.statusText,a),statusCode:e.status,headers:e.headers}:{type:At.data,data:a,statusCode:e.status,headers:e.headers}}if(n===At.error)return{type:At.error,error:e,statusCode:af(e)?e.status:r};if(cb(e)){var i,o;return{type:At.deferred,deferredData:e,statusCode:(i=e.init)==null?void 0:i.status,headers:((o=e.init)==null?void 0:o.headers)&&new Headers(e.init.headers)}}return{type:At.data,data:e,statusCode:r}}function ib(t,e,n,r,i,o){let a=t.headers.get("Location");if(ft(a,"Redirects returned/thrown from loaders/actions must have a Location header"),!Om.test(a)){let s=r.slice(0,r.findIndex(l=>l.route.id===n)+1);a=tp(new URL(e.url),s,i,!0,a,o),t.headers.set("Location",a)}return t}function Rv(t,e,n){if(Om.test(t)){let r=t,i=r.startsWith("//")?new URL(e.protocol+r):new URL(r),o=wl(i.pathname,n)!=null;if(i.origin===e.origin&&o)return i.pathname+i.search+i.hash}return t}function Vo(t,e,n,r){let i=t.createURL(DS(e)).toString(),o={signal:n};if(r&&hr(r.formMethod)){let{formMethod:a,formEncType:s}=r;o.method=a.toUpperCase(),s==="application/json"?(o.headers=new Headers({"Content-Type":s}),o.body=JSON.stringify(r.json)):s==="text/plain"?o.body=r.text:s==="application/x-www-form-urlencoded"&&r.formData?o.body=np(r.formData):o.body=r.formData}return new Request(i,o)}function np(t){let e=new URLSearchParams;for(let[n,r]of t.entries())e.append(n,typeof r=="string"?r:r.name);return e}function Pv(t){let e=new FormData;for(let[n,r]of t.entries())e.append(n,r);return e}function ob(t,e,n,r,i,o){let a={},s=null,l,c=!1,u={},f=r&&kn(r[1])?r[1].error:void 0;return n.forEach((d,p)=>{let _=e[p].route.id;if(ft(!vo(d),"Cannot handle redirect results in processLoaderData"),kn(d)){let v=d.error;f!==void 0&&(v=f,f=void 0),s=s||{};{let m=ks(t,_);s[m.route.id]==null&&(s[m.route.id]=v)}a[_]=void 0,c||(c=!0,l=af(d.error)?d.error.status:500),d.headers&&(u[_]=d.headers)}else go(d)?(i.set(_,d.deferredData),a[_]=d.deferredData.data,d.statusCode!=null&&d.statusCode!==200&&!c&&(l=d.statusCode),d.headers&&(u[_]=d.headers)):(a[_]=d.data,d.statusCode&&d.statusCode!==200&&!c&&(l=d.statusCode),d.headers&&(u[_]=d.headers))}),f!==void 0&&r&&(s={[r[0]]:f},a[r[0]]=void 0),{loaderData:a,errors:s,statusCode:l||200,loaderHeaders:u}}function Lv(t,e,n,r,i,o,a,s){let{loaderData:l,errors:c}=ob(e,n,r,i,s);for(let u=0;u<o.length;u++){let{key:f,match:d,controller:p}=o[u];ft(a!==void 0&&a[u]!==void 0,"Did not find corresponding fetcher result");let _=a[u];if(!(p&&p.signal.aborted))if(kn(_)){let v=ks(t.matches,d==null?void 0:d.route.id);c&&c[v.route.id]||(c=Ot({},c,{[v.route.id]:_.error})),t.fetchers.delete(f)}else if(vo(_))ft(!1,"Unhandled fetcher revalidation redirect");else if(go(_))ft(!1,"Unhandled fetcher deferred data");else{let v=mi(_.data);t.fetchers.set(f,v)}}return{loaderData:l,errors:c}}function Dv(t,e,n,r){let i=Ot({},e);for(let o of n){let a=o.route.id;if(e.hasOwnProperty(a)?e[a]!==void 0&&(i[a]=e[a]):t[a]!==void 0&&o.route.loader&&(i[a]=t[a]),r&&r.hasOwnProperty(a))break}return i}function Iv(t){return t?kn(t[1])?{actionData:{}}:{actionData:{[t[0]]:t[1].data}}:{}}function ks(t,e){return(e?t.slice(0,t.findIndex(r=>r.route.id===e)+1):[...t]).reverse().find(r=>r.route.hasErrorBoundary===!0)||t[0]}function Nv(t){let e=t.length===1?t[0]:t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function vn(t,e){let{pathname:n,routeId:r,method:i,type:o,message:a}=e===void 0?{}:e,s="Unknown Server Error",l="Unknown @remix-run/router error";return t===400?(s="Bad Request",o==="route-discovery"?l='Unable to match URL "'+n+'" - the `children()` function for '+("route `"+r+"` threw the following error:\n"+a):i&&n&&r?l="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":o==="defer-action"?l="defer() is not supported in actions":o==="invalid-body"&&(l="Unable to encode submission body")):t===403?(s="Forbidden",l='Route "'+r+'" does not match URL "'+n+'"'):t===404?(s="Not Found",l='No route matches URL "'+n+'"'):t===405&&(s="Method Not Allowed",i&&n&&r?l="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(l='Invalid request method "'+i.toUpperCase()+'"')),new Um(t||500,s,new Error(l),!0)}function Uv(t){for(let e=t.length-1;e>=0;e--){let n=t[e];if(vo(n))return{result:n,idx:e}}}function DS(t){let e=typeof t=="string"?ri(t):t;return Ml(Ot({},e,{hash:""}))}function ab(t,e){return t.pathname!==e.pathname||t.search!==e.search?!1:t.hash===""?e.hash!=="":t.hash===e.hash?!0:e.hash!==""}function sb(t){return typeof t=="object"&&t!=null&&"then"in t}function lb(t){return IS(t.result)&&jT.has(t.result.status)}function go(t){return t.type===At.deferred}function kn(t){return t.type===At.error}function vo(t){return(t&&t.type)===At.redirect}function cb(t){let e=t;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function IS(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function ub(t){return WT.has(t.toLowerCase())}function hr(t){return VT.has(t.toLowerCase())}async function Ov(t,e,n,r,i,o){for(let a=0;a<n.length;a++){let s=n[a],l=e[a];if(!l)continue;let c=t.find(f=>f.route.id===l.route.id),u=c!=null&&!PS(c,l)&&(o&&o[l.route.id])!==void 0;if(go(s)&&(i||u)){let f=r[a];ft(f,"Expected an AbortSignal for revalidating fetcher deferred result"),await NS(s,f,i).then(d=>{d&&(n[a]=d||n[a])})}}}async function NS(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:At.data,data:t.deferredData.unwrappedData}}catch(i){return{type:At.error,error:i}}return{type:At.data,data:t.deferredData.data}}}function Fm(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function Cs(t,e){let n=typeof e=="string"?ri(e).search:e.search;if(t[t.length-1].route.index&&Fm(n||""))return t[t.length-1];let r=CS(t);return r[r.length-1]}function Fv(t){let{formMethod:e,formAction:n,formEncType:r,text:i,formData:o,json:a}=t;if(!(!e||!n||!r)){if(i!=null)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(o!=null)return{formMethod:e,formAction:n,formEncType:r,formData:o,json:void 0,text:void 0};if(a!==void 0)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:a,text:void 0}}}function ud(t,e){return e?{state:"loading",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:t,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function fb(t,e){return{state:"submitting",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function ms(t,e){return t?{state:"loading",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function db(t,e){return{state:"submitting",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e?e.data:void 0}}function mi(t){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function hb(t,e){try{let n=t.sessionStorage.getItem(RS);if(n){let r=JSON.parse(n);for(let[i,o]of Object.entries(r||{}))o&&Array.isArray(o)&&e.set(i,new Set(o||[]))}}catch{}}function pb(t,e){if(e.size>0){let n={};for(let[r,i]of e)n[r]=[...i];try{t.sessionStorage.setItem(RS,JSON.stringify(n))}catch(r){Do(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.24.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Mu(){return Mu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Mu.apply(this,arguments)}const sf=I.createContext(null),US=I.createContext(null),Tl=I.createContext(null),km=I.createContext(null),Xi=I.createContext({outlet:null,matches:[],isDataRoute:!1}),OS=I.createContext(null);function bl(){return I.useContext(km)!=null}function zm(){return bl()||ft(!1),I.useContext(km).location}function FS(t){I.useContext(Tl).static||I.useLayoutEffect(t)}function mb(){let{isDataRoute:t}=I.useContext(Xi);return t?Rb():gb()}function gb(){bl()||ft(!1);let t=I.useContext(sf),{basename:e,future:n,navigator:r}=I.useContext(Tl),{matches:i}=I.useContext(Xi),{pathname:o}=zm(),a=JSON.stringify(Im(i,n.v7_relativeSplatPath)),s=I.useRef(!1);return FS(()=>{s.current=!0}),I.useCallback(function(c,u){if(u===void 0&&(u={}),!s.current)return;if(typeof c=="number"){r.go(c);return}let f=Nm(c,JSON.parse(a),o,u.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:Oi([e,f.pathname])),(u.replace?r.replace:r.push)(f,u.state,u)},[e,r,a,o,t])}const vb=I.createContext(null);function _b(t){let e=I.useContext(Xi).outlet;return e&&I.createElement(vb.Provider,{value:t},e)}function yb(t,e,n,r){bl()||ft(!1);let{navigator:i}=I.useContext(Tl),{matches:o}=I.useContext(Xi),a=o[o.length-1],s=a?a.params:{};a&&a.pathname;let l=a?a.pathnameBase:"/";a&&a.route;let c=zm(),u;u=c;let f=u.pathname||"/",d=f;if(l!=="/"){let v=l.replace(/^\//,"").split("/");d="/"+f.replace(/^\//,"").split("/").slice(v.length).join("/")}let p=lo(t,{pathname:d});return wb(p&&p.map(v=>Object.assign({},v,{params:Object.assign({},s,v.params),pathname:Oi([l,i.encodeLocation?i.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?l:Oi([l,i.encodeLocation?i.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),o,n,r)}function xb(){let t=Ab(),e=af(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return I.createElement(I.Fragment,null,I.createElement("h2",null,"Unexpected Application Error!"),I.createElement("h3",{style:{fontStyle:"italic"}},e),n?I.createElement("pre",{style:i},n):null,null)}const Sb=I.createElement(xb,null);class Eb extends I.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?I.createElement(Xi.Provider,{value:this.props.routeContext},I.createElement(OS.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Mb(t){let{routeContext:e,match:n,children:r}=t,i=I.useContext(sf);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),I.createElement(Xi.Provider,{value:e},r)}function wb(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var o;if((o=n)!=null&&o.errors)t=n.matches;else return null}let a=t,s=(i=n)==null?void 0:i.errors;if(s!=null){let u=a.findIndex(f=>f.route.id&&(s==null?void 0:s[f.route.id])!==void 0);u>=0||ft(!1),a=a.slice(0,Math.min(a.length,u+1))}let l=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let u=0;u<a.length;u++){let f=a[u];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=u),f.route.id){let{loaderData:d,errors:p}=n,_=f.route.loader&&d[f.route.id]===void 0&&(!p||p[f.route.id]===void 0);if(f.route.lazy||_){l=!0,c>=0?a=a.slice(0,c+1):a=[a[0]];break}}}return a.reduceRight((u,f,d)=>{let p,_=!1,v=null,m=null;n&&(p=s&&f.route.id?s[f.route.id]:void 0,v=f.route.errorElement||Sb,l&&(c<0&&d===0?(Pb("route-fallback"),_=!0,m=null):c===d&&(_=!0,m=f.route.hydrateFallbackElement||null)));let h=e.concat(a.slice(0,d+1)),g=()=>{let y;return p?y=v:_?y=m:f.route.Component?y=I.createElement(f.route.Component,null):f.route.element?y=f.route.element:y=u,I.createElement(Mb,{match:f,routeContext:{outlet:u,matches:h,isDataRoute:n!=null},children:y})};return n&&(f.route.ErrorBoundary||f.route.errorElement||d===0)?I.createElement(Eb,{location:n.location,revalidation:n.revalidation,component:v,error:p,children:g(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):g()},null)}var kS=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(kS||{}),wu=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(wu||{});function Tb(t){let e=I.useContext(sf);return e||ft(!1),e}function bb(t){let e=I.useContext(US);return e||ft(!1),e}function Cb(t){let e=I.useContext(Xi);return e||ft(!1),e}function zS(t){let e=Cb(),n=e.matches[e.matches.length-1];return n.route.id||ft(!1),n.route.id}function Ab(){var t;let e=I.useContext(OS),n=bb(wu.UseRouteError),r=zS(wu.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function Rb(){let{router:t}=Tb(kS.UseNavigateStable),e=zS(wu.UseNavigateStable),n=I.useRef(!1);return FS(()=>{n.current=!0}),I.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Mu({fromRouteId:e},o)))},[t,e])}const kv={};function Pb(t,e,n){kv[t]||(kv[t]=!0)}function Lb(t){let{to:e,replace:n,state:r,relative:i}=t;bl()||ft(!1);let{future:o,static:a}=I.useContext(Tl),{matches:s}=I.useContext(Xi),{pathname:l}=zm(),c=mb(),u=Nm(e,Im(s,o.v7_relativeSplatPath),l,i==="path"),f=JSON.stringify(u);return I.useEffect(()=>c(JSON.parse(f),{replace:n,state:r,relative:i}),[c,f,i,n,r]),null}function Db(t){return _b(t.context)}function Ib(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Gt.Pop,navigator:o,static:a=!1,future:s}=t;bl()&&ft(!1);let l=e.replace(/^\/*/,"/"),c=I.useMemo(()=>({basename:l,navigator:o,static:a,future:Mu({v7_relativeSplatPath:!1},s)}),[l,s,o,a]);typeof r=="string"&&(r=ri(r));let{pathname:u="/",search:f="",hash:d="",state:p=null,key:_="default"}=r,v=I.useMemo(()=>{let m=wl(u,l);return m==null?null:{location:{pathname:m,search:f,hash:d,state:p,key:_},navigationType:i}},[l,u,f,d,p,_,i]);return v==null?null:I.createElement(Tl.Provider,{value:c},I.createElement(km.Provider,{children:n,value:v}))}new Promise(()=>{});function Nb(t){let e={hasErrorBoundary:t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&Object.assign(e,{element:I.createElement(t.Component),Component:void 0}),t.HydrateFallback&&Object.assign(e,{hydrateFallbackElement:I.createElement(t.HydrateFallback),HydrateFallback:void 0}),t.ErrorBoundary&&Object.assign(e,{errorElement:I.createElement(t.ErrorBoundary),ErrorBoundary:void 0}),e}/**
 * React Router DOM v6.24.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Tu(){return Tu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Tu.apply(this,arguments)}const Ub="6";try{window.__reactRouterVersion=Ub}catch{}function Ob(t,e){return qT({basename:void 0,future:Tu({},void 0,{v7_prependBasename:!0}),history:yT({window:void 0}),hydrationData:Fb(),routes:t,mapRouteProperties:Nb,unstable_dataStrategy:void 0,unstable_patchRoutesOnMiss:void 0,window:void 0}).initialize()}function Fb(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=Tu({},e,{errors:kb(e.errors)})),e}function kb(t){if(!t)return null;let e=Object.entries(t),n={};for(let[r,i]of e)if(i&&i.__type==="RouteErrorResponse")n[r]=new Um(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let o=window[i.__subType];if(typeof o=="function")try{let a=new o(i.message);a.stack="",n[r]=a}catch{}}if(n[r]==null){let o=new Error(i.message);o.stack="",n[r]=o}}else n[r]=i;return n}const zb=I.createContext({isTransitioning:!1}),Bb=I.createContext(new Map),Hb="startTransition",zv=Gu[Hb],Vb="flushSync",Bv=wS[Vb];function Gb(t){zv?zv(t):t()}function gs(t){Bv?Bv(t):t()}class Wb{constructor(){this.status="pending",this.promise=new Promise((e,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",e(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}}function jb(t){let{fallbackElement:e,router:n,future:r}=t,[i,o]=I.useState(n.state),[a,s]=I.useState(),[l,c]=I.useState({isTransitioning:!1}),[u,f]=I.useState(),[d,p]=I.useState(),[_,v]=I.useState(),m=I.useRef(new Map),{v7_startTransition:h}=r||{},g=I.useCallback(M=>{h?Gb(M):M()},[h]),y=I.useCallback((M,P)=>{let{deletedFetchers:T,unstable_flushSync:w,unstable_viewTransitionOpts:L}=P;T.forEach(F=>m.current.delete(F)),M.fetchers.forEach((F,W)=>{F.data!==void 0&&m.current.set(W,F.data)});let V=n.window==null||n.window.document==null||typeof n.window.document.startViewTransition!="function";if(!L||V){w?gs(()=>o(M)):g(()=>o(M));return}if(w){gs(()=>{d&&(u&&u.resolve(),d.skipTransition()),c({isTransitioning:!0,flushSync:!0,currentLocation:L.currentLocation,nextLocation:L.nextLocation})});let F=n.window.document.startViewTransition(()=>{gs(()=>o(M))});F.finished.finally(()=>{gs(()=>{f(void 0),p(void 0),s(void 0),c({isTransitioning:!1})})}),gs(()=>p(F));return}d?(u&&u.resolve(),d.skipTransition(),v({state:M,currentLocation:L.currentLocation,nextLocation:L.nextLocation})):(s(M),c({isTransitioning:!0,flushSync:!1,currentLocation:L.currentLocation,nextLocation:L.nextLocation}))},[n.window,d,u,m,g]);I.useLayoutEffect(()=>n.subscribe(y),[n,y]),I.useEffect(()=>{l.isTransitioning&&!l.flushSync&&f(new Wb)},[l]),I.useEffect(()=>{if(u&&a&&n.window){let M=a,P=u.promise,T=n.window.document.startViewTransition(async()=>{g(()=>o(M)),await P});T.finished.finally(()=>{f(void 0),p(void 0),s(void 0),c({isTransitioning:!1})}),p(T)}},[g,a,u,n.window]),I.useEffect(()=>{u&&a&&i.location.key===a.location.key&&u.resolve()},[u,d,i.location,a]),I.useEffect(()=>{!l.isTransitioning&&_&&(s(_.state),c({isTransitioning:!0,flushSync:!1,currentLocation:_.currentLocation,nextLocation:_.nextLocation}),v(void 0))},[l.isTransitioning,_]),I.useEffect(()=>{},[]);let E=I.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:M=>n.navigate(M),push:(M,P,T)=>n.navigate(M,{state:P,preventScrollReset:T==null?void 0:T.preventScrollReset}),replace:(M,P,T)=>n.navigate(M,{replace:!0,state:P,preventScrollReset:T==null?void 0:T.preventScrollReset})}),[n]),A=n.basename||"/",x=I.useMemo(()=>({router:n,navigator:E,static:!1,basename:A}),[n,E,A]);return I.createElement(I.Fragment,null,I.createElement(sf.Provider,{value:x},I.createElement(US.Provider,{value:i},I.createElement(Bb.Provider,{value:m.current},I.createElement(zb.Provider,{value:l},I.createElement(Ib,{basename:A,location:i.location,navigationType:i.historyAction,navigator:E,future:{v7_relativeSplatPath:n.future.v7_relativeSplatPath}},i.initialized||n.future.v7_partialHydration?I.createElement($b,{routes:n.routes,future:n.future,state:i}):e))))),null)}function $b(t){let{routes:e,future:n,state:r}=t;return yb(e,void 0,r,n)}var Hv;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Hv||(Hv={}));var Vv;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Vv||(Vv={}));function Xb(){return nn.jsx("div",{className:"app",children:nn.jsx(Db,{})})}function Yb(){return"test"}var BS={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var e={}.hasOwnProperty;function n(){for(var o="",a=0;a<arguments.length;a++){var s=arguments[a];s&&(o=i(o,r(s)))}return o}function r(o){if(typeof o=="string"||typeof o=="number")return o;if(typeof o!="object")return"";if(Array.isArray(o))return n.apply(null,o);if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]"))return o.toString();var a="";for(var s in o)e.call(o,s)&&o[s]&&(a=i(a,s));return a}function i(o,a){return a?o?o+" "+a:o+a:o}t.exports?(n.default=n,t.exports=n):window.classNames=n})()})(BS);var qb=BS.exports;const Sn=Fp(qb);function Va(){return Va=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Va.apply(null,arguments)}var HS={exports:{}},Mt={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bm=Symbol.for("react.element"),Hm=Symbol.for("react.portal"),lf=Symbol.for("react.fragment"),cf=Symbol.for("react.strict_mode"),uf=Symbol.for("react.profiler"),ff=Symbol.for("react.provider"),df=Symbol.for("react.context"),Kb=Symbol.for("react.server_context"),hf=Symbol.for("react.forward_ref"),pf=Symbol.for("react.suspense"),mf=Symbol.for("react.suspense_list"),gf=Symbol.for("react.memo"),vf=Symbol.for("react.lazy"),Zb=Symbol.for("react.offscreen"),VS;VS=Symbol.for("react.module.reference");function or(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Bm:switch(t=t.type,t){case lf:case uf:case cf:case pf:case mf:return t;default:switch(t=t&&t.$$typeof,t){case Kb:case df:case hf:case vf:case gf:case ff:return t;default:return e}}case Hm:return e}}}Mt.ContextConsumer=df;Mt.ContextProvider=ff;Mt.Element=Bm;Mt.ForwardRef=hf;Mt.Fragment=lf;Mt.Lazy=vf;Mt.Memo=gf;Mt.Portal=Hm;Mt.Profiler=uf;Mt.StrictMode=cf;Mt.Suspense=pf;Mt.SuspenseList=mf;Mt.isAsyncMode=function(){return!1};Mt.isConcurrentMode=function(){return!1};Mt.isContextConsumer=function(t){return or(t)===df};Mt.isContextProvider=function(t){return or(t)===ff};Mt.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Bm};Mt.isForwardRef=function(t){return or(t)===hf};Mt.isFragment=function(t){return or(t)===lf};Mt.isLazy=function(t){return or(t)===vf};Mt.isMemo=function(t){return or(t)===gf};Mt.isPortal=function(t){return or(t)===Hm};Mt.isProfiler=function(t){return or(t)===uf};Mt.isStrictMode=function(t){return or(t)===cf};Mt.isSuspense=function(t){return or(t)===pf};Mt.isSuspenseList=function(t){return or(t)===mf};Mt.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===lf||t===uf||t===cf||t===pf||t===mf||t===Zb||typeof t=="object"&&t!==null&&(t.$$typeof===vf||t.$$typeof===gf||t.$$typeof===ff||t.$$typeof===df||t.$$typeof===hf||t.$$typeof===VS||t.getModuleId!==void 0)};Mt.typeOf=or;HS.exports=Mt;var zs=HS.exports;function bu(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=[];return st.Children.forEach(t,function(r){r==null&&!e.keepEmpty||(Array.isArray(r)?n=n.concat(bu(r)):zs.isFragment(r)&&r.props?n=n.concat(bu(r.props.children,e)):n.push(r))}),n}var rp={},Qb=function(e){};function Jb(t,e){}function eC(t,e){}function tC(){rp={}}function GS(t,e,n){!e&&!rp[n]&&(t(!1,n),rp[n]=!0)}function Cl(t,e){GS(Jb,t,e)}function nC(t,e){GS(eC,t,e)}Cl.preMessage=Qb;Cl.resetWarned=tC;Cl.noteOnce=nC;function Nt(t){"@babel/helpers - typeof";return Nt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Nt(t)}function rC(t,e){if(Nt(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(Nt(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function WS(t){var e=rC(t,"string");return Nt(e)=="symbol"?e:e+""}function ht(t,e,n){return(e=WS(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Gv(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Ze(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Gv(Object(n),!0).forEach(function(r){ht(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Gv(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Wv(t){return t instanceof HTMLElement||t instanceof SVGElement}function iC(t){return t&&Nt(t)==="object"&&Wv(t.nativeElement)?t.nativeElement:Wv(t)?t:null}function oC(t){var e=iC(t);if(e)return e;if(t instanceof st.Component){var n;return(n=ep.findDOMNode)===null||n===void 0?void 0:n.call(ep,t)}return null}function jS(t,e,n){var r=I.useRef({});return(!("value"in r.current)||n(r.current.condition,e))&&(r.current.value=t(),r.current.condition=e),r.current.value}var $S=function(e,n){typeof e=="function"?e(n):Nt(e)==="object"&&e&&"current"in e&&(e.current=n)},Vm=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];var i=n.filter(Boolean);return i.length<=1?i[0]:function(o){n.forEach(function(a){$S(a,o)})}},XS=function(e){var n,r,i=zs.isMemo(e)?e.type.type:e.type;return!(typeof i=="function"&&!((n=i.prototype)!==null&&n!==void 0&&n.render)&&i.$$typeof!==zs.ForwardRef||typeof e=="function"&&!((r=e.prototype)!==null&&r!==void 0&&r.render)&&e.$$typeof!==zs.ForwardRef)};function jv(t){return I.isValidElement(t)&&!zs.isFragment(t)}Number(I.version.split(".")[0])>=19;function ii(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function $v(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,WS(r.key),r)}}function oi(t,e,n){return e&&$v(t.prototype,e),n&&$v(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function ip(t,e){return ip=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,r){return n.__proto__=r,n},ip(t,e)}function _f(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&ip(t,e)}function Cu(t){return Cu=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},Cu(t)}function YS(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(YS=function(){return!!t})()}function Mo(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function aC(t,e){if(e&&(Nt(e)=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Mo(t)}function yf(t){var e=YS();return function(){var n,r=Cu(t);if(e){var i=Cu(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return aC(this,n)}}function sC(t,e){var n=Object.assign({},t);return Array.isArray(e)&&e.forEach(function(r){delete n[r]}),n}function op(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function lC(t){if(Array.isArray(t))return op(t)}function qS(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Gm(t,e){if(t){if(typeof t=="string")return op(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?op(t,e):void 0}}function cC(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Yi(t){return lC(t)||qS(t)||Gm(t)||cC()}var KS=function(e){return+setTimeout(e,16)},ZS=function(e){return clearTimeout(e)};typeof window<"u"&&"requestAnimationFrame"in window&&(KS=function(e){return window.requestAnimationFrame(e)},ZS=function(e){return window.cancelAnimationFrame(e)});var Xv=0,Wm=new Map;function QS(t){Wm.delete(t)}var Io=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;Xv+=1;var r=Xv;function i(o){if(o===0)QS(r),e();else{var a=KS(function(){i(o-1)});Wm.set(r,a)}}return i(n),r};Io.cancel=function(t){var e=Wm.get(t);return QS(t),ZS(e)};function JS(t){if(Array.isArray(t))return t}function uC(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r,i,o,a,s=[],l=!0,c=!1;try{if(o=(n=n.call(t)).next,e===0){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=o.call(n)).done)&&(s.push(r.value),s.length!==e);l=!0);}catch(u){c=!0,i=u}finally{try{if(!l&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(c)throw i}}return s}}function eE(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _t(t,e){return JS(t)||uC(t,e)||Gm(t,e)||eE()}function cl(t){for(var e=0,n,r=0,i=t.length;i>=4;++r,i-=4)n=t.charCodeAt(r)&255|(t.charCodeAt(++r)&255)<<8|(t.charCodeAt(++r)&255)<<16|(t.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,e=(n&65535)*1540483477+((n>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(i){case 3:e^=(t.charCodeAt(r+2)&255)<<16;case 2:e^=(t.charCodeAt(r+1)&255)<<8;case 1:e^=t.charCodeAt(r)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}function ai(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function fC(t,e){if(!t)return!1;if(t.contains)return t.contains(e);for(var n=e;n;){if(n===t)return!0;n=n.parentNode}return!1}var Yv="data-rc-order",qv="data-rc-priority",dC="rc-util-key",ap=new Map;function tE(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=t.mark;return e?e.startsWith("data-")?e:"data-".concat(e):dC}function xf(t){if(t.attachTo)return t.attachTo;var e=document.querySelector("head");return e||document.body}function hC(t){return t==="queue"?"prependQueue":t?"prepend":"append"}function jm(t){return Array.from((ap.get(t)||t).children).filter(function(e){return e.tagName==="STYLE"})}function nE(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!ai())return null;var n=e.csp,r=e.prepend,i=e.priority,o=i===void 0?0:i,a=hC(r),s=a==="prependQueue",l=document.createElement("style");l.setAttribute(Yv,a),s&&o&&l.setAttribute(qv,"".concat(o)),n!=null&&n.nonce&&(l.nonce=n==null?void 0:n.nonce),l.innerHTML=t;var c=xf(e),u=c.firstChild;if(r){if(s){var f=(e.styles||jm(c)).filter(function(d){if(!["prepend","prependQueue"].includes(d.getAttribute(Yv)))return!1;var p=Number(d.getAttribute(qv)||0);return o>=p});if(f.length)return c.insertBefore(l,f[f.length-1].nextSibling),l}c.insertBefore(l,u)}else c.appendChild(l);return l}function rE(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=xf(e);return(e.styles||jm(n)).find(function(r){return r.getAttribute(tE(e))===t})}function iE(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=rE(t,e);if(n){var r=xf(e);r.removeChild(n)}}function pC(t,e){var n=ap.get(t);if(!n||!fC(document,n)){var r=nE("",e),i=r.parentNode;ap.set(t,i),t.removeChild(r)}}function wo(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=xf(n),i=jm(r),o=Ze(Ze({},n),{},{styles:i});pC(r,o);var a=rE(e,o);if(a){var s,l;if((s=o.csp)!==null&&s!==void 0&&s.nonce&&a.nonce!==((l=o.csp)===null||l===void 0?void 0:l.nonce)){var c;a.nonce=(c=o.csp)===null||c===void 0?void 0:c.nonce}return a.innerHTML!==t&&(a.innerHTML=t),a}var u=nE(t,o);return u.setAttribute(tE(o),e),u}function mC(t,e){if(t==null)return{};var n={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function ul(t,e){if(t==null)return{};var n,r,i=mC(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||{}.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}function gC(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,r=new Set;function i(o,a){var s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,l=r.has(o);if(Cl(!l,"Warning: There may be circular references"),l)return!1;if(o===a)return!0;if(n&&s>1)return!1;r.add(o);var c=s+1;if(Array.isArray(o)){if(!Array.isArray(a)||o.length!==a.length)return!1;for(var u=0;u<o.length;u++)if(!i(o[u],a[u],c))return!1;return!0}if(o&&a&&Nt(o)==="object"&&Nt(a)==="object"){var f=Object.keys(o);return f.length!==Object.keys(a).length?!1:f.every(function(d){return i(o[d],a[d],c)})}return!1}return i(t,e)}var vC="%";function sp(t){return t.join(vC)}var _C=function(){function t(e){ii(this,t),ht(this,"instanceId",void 0),ht(this,"cache",new Map),this.instanceId=e}return oi(t,[{key:"get",value:function(n){return this.opGet(sp(n))}},{key:"opGet",value:function(n){return this.cache.get(n)||null}},{key:"update",value:function(n,r){return this.opUpdate(sp(n),r)}},{key:"opUpdate",value:function(n,r){var i=this.cache.get(n),o=r(i);o===null?this.cache.delete(n):this.cache.set(n,o)}}]),t}(),Ga="data-token-hash",yr="data-css-hash",Ti="__cssinjs_instance__";function yC(){var t=Math.random().toString(12).slice(2);if(typeof document<"u"&&document.head&&document.body){var e=document.body.querySelectorAll("style[".concat(yr,"]"))||[],n=document.head.firstChild;Array.from(e).forEach(function(i){i[Ti]=i[Ti]||t,i[Ti]===t&&document.head.insertBefore(i,n)});var r={};Array.from(document.querySelectorAll("style[".concat(yr,"]"))).forEach(function(i){var o=i.getAttribute(yr);if(r[o]){if(i[Ti]===t){var a;(a=i.parentNode)===null||a===void 0||a.removeChild(i)}}else r[o]=!0})}return new _C(t)}var xC=I.createContext({hashPriority:"low",cache:yC(),defaultCache:!0});const Sf=xC;var oE=oi(function t(){ii(this,t)}),aE="CALC_UNIT",SC=new RegExp(aE,"g");function fd(t){return typeof t=="number"?"".concat(t).concat(aE):t}var EC=function(t){_f(n,t);var e=yf(n);function n(r,i){var o;ii(this,n),o=e.call(this),ht(Mo(o),"result",""),ht(Mo(o),"unitlessCssVar",void 0),ht(Mo(o),"lowPriority",void 0);var a=Nt(r);return o.unitlessCssVar=i,r instanceof n?o.result="(".concat(r.result,")"):a==="number"?o.result=fd(r):a==="string"&&(o.result=r),o}return oi(n,[{key:"add",value:function(i){return i instanceof n?this.result="".concat(this.result," + ").concat(i.getResult()):(typeof i=="number"||typeof i=="string")&&(this.result="".concat(this.result," + ").concat(fd(i))),this.lowPriority=!0,this}},{key:"sub",value:function(i){return i instanceof n?this.result="".concat(this.result," - ").concat(i.getResult()):(typeof i=="number"||typeof i=="string")&&(this.result="".concat(this.result," - ").concat(fd(i))),this.lowPriority=!0,this}},{key:"mul",value:function(i){return this.lowPriority&&(this.result="(".concat(this.result,")")),i instanceof n?this.result="".concat(this.result," * ").concat(i.getResult(!0)):(typeof i=="number"||typeof i=="string")&&(this.result="".concat(this.result," * ").concat(i)),this.lowPriority=!1,this}},{key:"div",value:function(i){return this.lowPriority&&(this.result="(".concat(this.result,")")),i instanceof n?this.result="".concat(this.result," / ").concat(i.getResult(!0)):(typeof i=="number"||typeof i=="string")&&(this.result="".concat(this.result," / ").concat(i)),this.lowPriority=!1,this}},{key:"getResult",value:function(i){return this.lowPriority||i?"(".concat(this.result,")"):this.result}},{key:"equal",value:function(i){var o=this,a=i||{},s=a.unit,l=!0;return typeof s=="boolean"?l=s:Array.from(this.unitlessCssVar).some(function(c){return o.result.includes(c)})&&(l=!1),this.result=this.result.replace(SC,l?"px":""),typeof this.lowPriority<"u"?"calc(".concat(this.result,")"):this.result}}]),n}(oE),MC=function(t){_f(n,t);var e=yf(n);function n(r){var i;return ii(this,n),i=e.call(this),ht(Mo(i),"result",0),r instanceof n?i.result=r.result:typeof r=="number"&&(i.result=r),i}return oi(n,[{key:"add",value:function(i){return i instanceof n?this.result+=i.result:typeof i=="number"&&(this.result+=i),this}},{key:"sub",value:function(i){return i instanceof n?this.result-=i.result:typeof i=="number"&&(this.result-=i),this}},{key:"mul",value:function(i){return i instanceof n?this.result*=i.result:typeof i=="number"&&(this.result*=i),this}},{key:"div",value:function(i){return i instanceof n?this.result/=i.result:typeof i=="number"&&(this.result/=i),this}},{key:"equal",value:function(){return this.result}}]),n}(oE),wC=function(e,n){var r=e==="css"?EC:MC;return function(i){return new r(i,n)}};function TC(t,e){if(t.length!==e.length)return!1;for(var n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}var $m=function(){function t(){ii(this,t),ht(this,"cache",void 0),ht(this,"keys",void 0),ht(this,"cacheCallTimes",void 0),this.cache=new Map,this.keys=[],this.cacheCallTimes=0}return oi(t,[{key:"size",value:function(){return this.keys.length}},{key:"internalGet",value:function(n){var r,i,o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a={map:this.cache};return n.forEach(function(s){if(!a)a=void 0;else{var l;a=(l=a)===null||l===void 0||(l=l.map)===null||l===void 0?void 0:l.get(s)}}),(r=a)!==null&&r!==void 0&&r.value&&o&&(a.value[1]=this.cacheCallTimes++),(i=a)===null||i===void 0?void 0:i.value}},{key:"get",value:function(n){var r;return(r=this.internalGet(n,!0))===null||r===void 0?void 0:r[0]}},{key:"has",value:function(n){return!!this.internalGet(n)}},{key:"set",value:function(n,r){var i=this;if(!this.has(n)){if(this.size()+1>t.MAX_CACHE_SIZE+t.MAX_CACHE_OFFSET){var o=this.keys.reduce(function(c,u){var f=_t(c,2),d=f[1];return i.internalGet(u)[1]<d?[u,i.internalGet(u)[1]]:c},[this.keys[0],this.cacheCallTimes]),a=_t(o,1),s=a[0];this.delete(s)}this.keys.push(n)}var l=this.cache;n.forEach(function(c,u){if(u===n.length-1)l.set(c,{value:[r,i.cacheCallTimes++]});else{var f=l.get(c);f?f.map||(f.map=new Map):l.set(c,{map:new Map}),l=l.get(c).map}})}},{key:"deleteByPath",value:function(n,r){var i=n.get(r[0]);if(r.length===1){var o;return i.map?n.set(r[0],{map:i.map}):n.delete(r[0]),(o=i.value)===null||o===void 0?void 0:o[0]}var a=this.deleteByPath(i.map,r.slice(1));return(!i.map||i.map.size===0)&&!i.value&&n.delete(r[0]),a}},{key:"delete",value:function(n){if(this.has(n))return this.keys=this.keys.filter(function(r){return!TC(r,n)}),this.deleteByPath(this.cache,n)}}]),t}();ht($m,"MAX_CACHE_SIZE",20);ht($m,"MAX_CACHE_OFFSET",5);var Kv=0,sE=function(){function t(e){ii(this,t),ht(this,"derivatives",void 0),ht(this,"id",void 0),this.derivatives=Array.isArray(e)?e:[e],this.id=Kv,e.length===0&&(e.length>0,void 0),Kv+=1}return oi(t,[{key:"getDerivativeToken",value:function(n){return this.derivatives.reduce(function(r,i){return i(n,r)},void 0)}}]),t}(),dd=new $m;function lp(t){var e=Array.isArray(t)?t:[t];return dd.has(e)||dd.set(e,new sE(e)),dd.get(e)}var bC=new WeakMap,hd={};function CC(t,e){for(var n=bC,r=0;r<e.length;r+=1){var i=e[r];n.has(i)||n.set(i,new WeakMap),n=n.get(i)}return n.has(hd)||n.set(hd,t()),n.get(hd)}var Zv=new WeakMap;function Bs(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=Zv.get(t)||"";return n||(Object.keys(t).forEach(function(r){var i=t[r];n+=r,i instanceof sE?n+=i.id:i&&Nt(i)==="object"?n+=Bs(i,e):n+=i}),e&&(n=cl(n)),Zv.set(t,n)),n}function Qv(t,e){return cl("".concat(e,"_").concat(Bs(t,!0)))}var cp=ai();function Jr(t){return typeof t=="number"?"".concat(t,"px"):t}function Au(t,e,n){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!1;if(i)return t;var o=Ze(Ze({},r),{},ht(ht({},Ga,e),yr,n)),a=Object.keys(o).map(function(s){var l=o[s];return l?"".concat(s,'="').concat(l,'"'):null}).filter(function(s){return s}).join(" ");return"<style ".concat(a,">").concat(t,"</style>")}var Wc=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return"--".concat(n?"".concat(n,"-"):"").concat(e).replace(/([a-z0-9])([A-Z])/g,"$1-$2").replace(/([A-Z]+)([A-Z][a-z0-9]+)/g,"$1-$2").replace(/([a-z])([A-Z0-9])/g,"$1-$2").toLowerCase()},AC=function(e,n,r){return Object.keys(e).length?".".concat(n).concat(r!=null&&r.scope?".".concat(r.scope):"","{").concat(Object.entries(e).map(function(i){var o=_t(i,2),a=o[0],s=o[1];return"".concat(a,":").concat(s,";")}).join(""),"}"):""},lE=function(e,n,r){var i={},o={};return Object.entries(e).forEach(function(a){var s,l,c=_t(a,2),u=c[0],f=c[1];if(r!=null&&(s=r.preserve)!==null&&s!==void 0&&s[u])o[u]=f;else if((typeof f=="string"||typeof f=="number")&&!(r!=null&&(l=r.ignore)!==null&&l!==void 0&&l[u])){var d,p=Wc(u,r==null?void 0:r.prefix);i[p]=typeof f=="number"&&!(r!=null&&(d=r.unitless)!==null&&d!==void 0&&d[u])?"".concat(f,"px"):String(f),o[u]="var(".concat(p,")")}}),[o,AC(i,n,{scope:r==null?void 0:r.scope})]},Jv=ai()?I.useLayoutEffect:I.useEffect,RC=function(e,n){var r=I.useRef(!0);Jv(function(){return e(r.current)},n),Jv(function(){return r.current=!1,function(){r.current=!0}},[])},PC=Ze({},Gu),e0=PC.useInsertionEffect,LC=function(e,n,r){I.useMemo(e,r),RC(function(){return n(!0)},r)},DC=e0?function(t,e,n){return e0(function(){return t(),e()},n)}:LC;const IC=DC;var NC=Ze({},Gu),UC=NC.useInsertionEffect,OC=function(e){var n=[],r=!1;function i(o){r||n.push(o)}return I.useEffect(function(){return r=!1,function(){r=!0,n.length&&n.forEach(function(o){return o()})}},e),i},FC=function(){return function(e){e()}},kC=typeof UC<"u"?OC:FC;const zC=kC;function Xm(t,e,n,r,i){var o=I.useContext(Sf),a=o.cache,s=[t].concat(Yi(e)),l=sp(s),c=zC([l]),u=function(_){a.opUpdate(l,function(v){var m=v||[void 0,void 0],h=_t(m,2),g=h[0],y=g===void 0?0:g,E=h[1],A=E,x=A||n(),M=[y,x];return _?_(M):M})};I.useMemo(function(){u()},[l]);var f=a.opGet(l),d=f[1];return IC(function(){i==null||i(d)},function(p){return u(function(_){var v=_t(_,2),m=v[0],h=v[1];return p&&m===0&&(i==null||i(d)),[m+1,h]}),function(){a.opUpdate(l,function(_){var v=_||[],m=_t(v,2),h=m[0],g=h===void 0?0:h,y=m[1],E=g-1;return E===0?(c(function(){(p||!a.opGet(l))&&(r==null||r(y,!1))}),null):[g-1,y]})}},[l]),d}var BC={},HC="css",co=new Map;function VC(t){co.set(t,(co.get(t)||0)+1)}function GC(t,e){if(typeof document<"u"){var n=document.querySelectorAll("style[".concat(Ga,'="').concat(t,'"]'));n.forEach(function(r){if(r[Ti]===e){var i;(i=r.parentNode)===null||i===void 0||i.removeChild(r)}})}}var WC=0;function jC(t,e){co.set(t,(co.get(t)||0)-1);var n=Array.from(co.keys()),r=n.filter(function(i){var o=co.get(i)||0;return o<=0});n.length-r.length>WC&&r.forEach(function(i){GC(i,e),co.delete(i)})}var $C=function(e,n,r,i){var o=r.getDerivativeToken(e),a=Ze(Ze({},o),n);return i&&(a=i(a)),a},cE="token";function XC(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=I.useContext(Sf),i=r.cache.instanceId,o=r.container,a=n.salt,s=a===void 0?"":a,l=n.override,c=l===void 0?BC:l,u=n.formatToken,f=n.getComputedToken,d=n.cssVar,p=CC(function(){return Object.assign.apply(Object,[{}].concat(Yi(e)))},e),_=Bs(p),v=Bs(c),m=d?Bs(d):"",h=Xm(cE,[s,t.id,_,v,m],function(){var g,y=f?f(p,c,t):$C(p,c,t,u),E=Ze({},y),A="";if(d){var x=lE(y,d.key,{prefix:d.prefix,ignore:d.ignore,unitless:d.unitless,preserve:d.preserve}),M=_t(x,2);y=M[0],A=M[1]}var P=Qv(y,s);y._tokenKey=P,E._tokenKey=Qv(E,s);var T=(g=d==null?void 0:d.key)!==null&&g!==void 0?g:P;y._themeKey=T,VC(T);var w="".concat(HC,"-").concat(cl(P));return y._hashId=w,[y,w,E,A,(d==null?void 0:d.key)||""]},function(g){jC(g[0]._themeKey,i)},function(g){var y=_t(g,4),E=y[0],A=y[3];if(d&&A){var x=wo(A,cl("css-variables-".concat(E._themeKey)),{mark:yr,prepend:"queue",attachTo:o,priority:-999});x[Ti]=i,x.setAttribute(Ga,E._themeKey)}});return h}var YC=function(e,n,r){var i=_t(e,5),o=i[2],a=i[3],s=i[4],l=r||{},c=l.plain;if(!a)return null;var u=o._tokenKey,f=-999,d={"data-rc-order":"prependQueue","data-rc-priority":"".concat(f)},p=Au(a,s,u,d,c);return[f,u,p]},qC={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},uE="comm",fE="rule",dE="decl",KC="@import",ZC="@keyframes",QC="@layer",hE=Math.abs,Ym=String.fromCharCode;function pE(t){return t.trim()}function jc(t,e,n){return t.replace(e,n)}function JC(t,e,n){return t.indexOf(e,n)}function fl(t,e){return t.charCodeAt(e)|0}function dl(t,e,n){return t.slice(e,n)}function Wr(t){return t.length}function eA(t){return t.length}function ql(t,e){return e.push(t),t}var Ef=1,Wa=1,mE=0,ir=0,Wt=0,ts="";function qm(t,e,n,r,i,o,a,s){return{value:t,root:e,parent:n,type:r,props:i,children:o,line:Ef,column:Wa,length:a,return:"",siblings:s}}function tA(){return Wt}function nA(){return Wt=ir>0?fl(ts,--ir):0,Wa--,Wt===10&&(Wa=1,Ef--),Wt}function xr(){return Wt=ir<mE?fl(ts,ir++):0,Wa++,Wt===10&&(Wa=1,Ef++),Wt}function To(){return fl(ts,ir)}function $c(){return ir}function Mf(t,e){return dl(ts,t,e)}function up(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function rA(t){return Ef=Wa=1,mE=Wr(ts=t),ir=0,[]}function iA(t){return ts="",t}function pd(t){return pE(Mf(ir-1,fp(t===91?t+2:t===40?t+1:t)))}function oA(t){for(;(Wt=To())&&Wt<33;)xr();return up(t)>2||up(Wt)>3?"":" "}function aA(t,e){for(;--e&&xr()&&!(Wt<48||Wt>102||Wt>57&&Wt<65||Wt>70&&Wt<97););return Mf(t,$c()+(e<6&&To()==32&&xr()==32))}function fp(t){for(;xr();)switch(Wt){case t:return ir;case 34:case 39:t!==34&&t!==39&&fp(Wt);break;case 40:t===41&&fp(t);break;case 92:xr();break}return ir}function sA(t,e){for(;xr()&&t+Wt!==57;)if(t+Wt===84&&To()===47)break;return"/*"+Mf(e,ir-1)+"*"+Ym(t===47?t:xr())}function lA(t){for(;!up(To());)xr();return Mf(t,ir)}function cA(t){return iA(Xc("",null,null,null,[""],t=rA(t),0,[0],t))}function Xc(t,e,n,r,i,o,a,s,l){for(var c=0,u=0,f=a,d=0,p=0,_=0,v=1,m=1,h=1,g=0,y="",E=i,A=o,x=r,M=y;m;)switch(_=g,g=xr()){case 40:if(_!=108&&fl(M,f-1)==58){JC(M+=jc(pd(g),"&","&\f"),"&\f",hE(c?s[c-1]:0))!=-1&&(h=-1);break}case 34:case 39:case 91:M+=pd(g);break;case 9:case 10:case 13:case 32:M+=oA(_);break;case 92:M+=aA($c()-1,7);continue;case 47:switch(To()){case 42:case 47:ql(uA(sA(xr(),$c()),e,n,l),l);break;default:M+="/"}break;case 123*v:s[c++]=Wr(M)*h;case 125*v:case 59:case 0:switch(g){case 0:case 125:m=0;case 59+u:h==-1&&(M=jc(M,/\f/g,"")),p>0&&Wr(M)-f&&ql(p>32?n0(M+";",r,n,f-1,l):n0(jc(M," ","")+";",r,n,f-2,l),l);break;case 59:M+=";";default:if(ql(x=t0(M,e,n,c,u,i,s,y,E=[],A=[],f,o),o),g===123)if(u===0)Xc(M,e,x,x,E,o,f,s,A);else switch(d===99&&fl(M,3)===110?100:d){case 100:case 108:case 109:case 115:Xc(t,x,x,r&&ql(t0(t,x,x,0,0,i,s,y,i,E=[],f,A),A),i,A,f,s,r?E:A);break;default:Xc(M,x,x,x,[""],A,0,s,A)}}c=u=p=0,v=h=1,y=M="",f=a;break;case 58:f=1+Wr(M),p=_;default:if(v<1){if(g==123)--v;else if(g==125&&v++==0&&nA()==125)continue}switch(M+=Ym(g),g*v){case 38:h=u>0?1:(M+="\f",-1);break;case 44:s[c++]=(Wr(M)-1)*h,h=1;break;case 64:To()===45&&(M+=pd(xr())),d=To(),u=f=Wr(y=M+=lA($c())),g++;break;case 45:_===45&&Wr(M)==2&&(v=0)}}return o}function t0(t,e,n,r,i,o,a,s,l,c,u,f){for(var d=i-1,p=i===0?o:[""],_=eA(p),v=0,m=0,h=0;v<r;++v)for(var g=0,y=dl(t,d+1,d=hE(m=a[v])),E=t;g<_;++g)(E=pE(m>0?p[g]+" "+y:jc(y,/&\f/g,p[g])))&&(l[h++]=E);return qm(t,e,n,i===0?fE:s,l,c,u,f)}function uA(t,e,n,r){return qm(t,e,n,uE,Ym(tA()),dl(t,2,-2),0,r)}function n0(t,e,n,r,i){return qm(t,e,n,dE,dl(t,0,r),dl(t,r+1,-1),r,i)}function dp(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function fA(t,e,n,r){switch(t.type){case QC:if(t.children.length)break;case KC:case dE:return t.return=t.return||t.value;case uE:return"";case ZC:return t.return=t.value+"{"+dp(t.children,r)+"}";case fE:if(!Wr(t.value=t.props.join(",")))return""}return Wr(n=dp(t.children,r))?t.return=t.value+"{"+n+"}":""}var r0="data-ant-cssinjs-cache-path",gE="_FILE_STYLE__",bo,vE=!0;function dA(){if(!bo&&(bo={},ai())){var t=document.createElement("div");t.className=r0,t.style.position="fixed",t.style.visibility="hidden",t.style.top="-9999px",document.body.appendChild(t);var e=getComputedStyle(t).content||"";e=e.replace(/^"/,"").replace(/"$/,""),e.split(";").forEach(function(i){var o=i.split(":"),a=_t(o,2),s=a[0],l=a[1];bo[s]=l});var n=document.querySelector("style[".concat(r0,"]"));if(n){var r;vE=!1,(r=n.parentNode)===null||r===void 0||r.removeChild(n)}document.body.removeChild(t)}}function hA(t){return dA(),!!bo[t]}function pA(t){var e=bo[t],n=null;if(e&&ai())if(vE)n=gE;else{var r=document.querySelector("style[".concat(yr,'="').concat(bo[t],'"]'));r?n=r.innerHTML:delete bo[t]}return[n,e]}var mA="_skip_check_",_E="_multi_value_";function Yc(t){var e=dp(cA(t),fA);return e.replace(/\{%%%\:[^;];}/g,";")}function gA(t){return Nt(t)==="object"&&t&&(mA in t||_E in t)}function vA(t,e,n){if(!e)return t;var r=".".concat(e),i=n==="low"?":where(".concat(r,")"):r,o=t.split(",").map(function(a){var s,l=a.trim().split(/\s+/),c=l[0]||"",u=((s=c.match(/^\w+/))===null||s===void 0?void 0:s[0])||"";return c="".concat(u).concat(i).concat(c.slice(u.length)),[c].concat(Yi(l.slice(1))).join(" ")});return o.join(",")}var _A=function t(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{root:!0,parentSelectors:[]},i=r.root,o=r.injectHash,a=r.parentSelectors,s=n.hashId,l=n.layer;n.path;var c=n.hashPriority,u=n.transformers,f=u===void 0?[]:u;n.linters;var d="",p={};function _(h){var g=h.getName(s);if(!p[g]){var y=t(h.style,n,{root:!1,parentSelectors:a}),E=_t(y,1),A=E[0];p[g]="@keyframes ".concat(h.getName(s)).concat(A)}}function v(h){var g=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return h.forEach(function(y){Array.isArray(y)?v(y,g):y&&g.push(y)}),g}var m=v(Array.isArray(e)?e:[e]);return m.forEach(function(h){var g=typeof h=="string"&&!i?{}:h;if(typeof g=="string")d+="".concat(g,`
`);else if(g._keyframe)_(g);else{var y=f.reduce(function(E,A){var x;return(A==null||(x=A.visit)===null||x===void 0?void 0:x.call(A,E))||E},g);Object.keys(y).forEach(function(E){var A=y[E];if(Nt(A)==="object"&&A&&(E!=="animationName"||!A._keyframe)&&!gA(A)){var x=!1,M=E.trim(),P=!1;(i||o)&&s?M.startsWith("@")?x=!0:M=vA(E,s,c):i&&!s&&(M==="&"||M==="")&&(M="",P=!0);var T=t(A,n,{root:P,injectHash:x,parentSelectors:[].concat(Yi(a),[M])}),w=_t(T,2),L=w[0],V=w[1];p=Ze(Ze({},p),V),d+="".concat(M).concat(L)}else{let ee=function(U,N){var R=U.replace(/[A-Z]/g,function(X){return"-".concat(X.toLowerCase())}),z=N;!qC[U]&&typeof z=="number"&&z!==0&&(z="".concat(z,"px")),U==="animationName"&&N!==null&&N!==void 0&&N._keyframe&&(_(N),z=N.getName(s)),d+="".concat(R,":").concat(z,";")};var F,W=(F=A==null?void 0:A.value)!==null&&F!==void 0?F:A;Nt(A)==="object"&&A!==null&&A!==void 0&&A[_E]&&Array.isArray(W)?W.forEach(function(U){ee(E,U)}):ee(E,W)}})}}),i?l&&(d="@layer ".concat(l.name," {").concat(d,"}"),l.dependencies&&(p["@layer ".concat(l.name)]=l.dependencies.map(function(h){return"@layer ".concat(h,", ").concat(l.name,";")}).join(`
`))):d="{".concat(d,"}"),[d,p]};function yE(t,e){return cl("".concat(t.join("%")).concat(e))}function yA(){return null}var xE="style";function hp(t,e){var n=t.token,r=t.path,i=t.hashId,o=t.layer,a=t.nonce,s=t.clientOnly,l=t.order,c=l===void 0?0:l,u=I.useContext(Sf),f=u.autoClear;u.mock;var d=u.defaultCache,p=u.hashPriority,_=u.container,v=u.ssrInline,m=u.transformers,h=u.linters,g=u.cache,y=u.layer,E=n._tokenKey,A=[E];y&&A.push("layer"),A.push.apply(A,Yi(r));var x=cp,M=Xm(xE,A,function(){var V=A.join("|");if(hA(V)){var F=pA(V),W=_t(F,2),ee=W[0],U=W[1];if(ee)return[ee,E,U,{},s,c]}var N=e(),R=_A(N,{hashId:i,hashPriority:p,layer:y?o:void 0,path:r.join("-"),transformers:m,linters:h}),z=_t(R,2),X=z[0],Y=z[1],oe=Yc(X),xe=yE(A,oe);return[oe,E,xe,Y,s,c]},function(V,F){var W=_t(V,3),ee=W[2];(F||f)&&cp&&iE(ee,{mark:yr})},function(V){var F=_t(V,4),W=F[0];F[1];var ee=F[2],U=F[3];if(x&&W!==gE){var N={mark:yr,prepend:y?!1:"queue",attachTo:_,priority:c},R=typeof a=="function"?a():a;R&&(N.csp={nonce:R});var z=[],X=[];Object.keys(U).forEach(function(oe){oe.startsWith("@layer")?z.push(oe):X.push(oe)}),z.forEach(function(oe){wo(Yc(U[oe]),"_layer-".concat(oe),Ze(Ze({},N),{},{prepend:!0}))});var Y=wo(W,ee,N);Y[Ti]=g.instanceId,Y.setAttribute(Ga,E),X.forEach(function(oe){wo(Yc(U[oe]),"_effect-".concat(oe),N)})}}),P=_t(M,3),T=P[0],w=P[1],L=P[2];return function(V){var F;return!v||x||!d?F=I.createElement(yA,null):F=I.createElement("style",Va({},ht(ht({},Ga,w),yr,L),{dangerouslySetInnerHTML:{__html:T}})),I.createElement(I.Fragment,null,F,V)}}var xA=function(e,n,r){var i=_t(e,6),o=i[0],a=i[1],s=i[2],l=i[3],c=i[4],u=i[5],f=r||{},d=f.plain;if(c)return null;var p=o,_={"data-rc-order":"prependQueue","data-rc-priority":"".concat(u)};return p=Au(o,a,s,_,d),l&&Object.keys(l).forEach(function(v){if(!n[v]){n[v]=!0;var m=Yc(l[v]),h=Au(m,a,"_effect-".concat(v),_,d);v.startsWith("@layer")?p=h+p:p+=h}}),[u,s,p]},SE="cssVar",SA=function(e,n){var r=e.key,i=e.prefix,o=e.unitless,a=e.ignore,s=e.token,l=e.scope,c=l===void 0?"":l,u=I.useContext(Sf),f=u.cache.instanceId,d=u.container,p=s._tokenKey,_=[].concat(Yi(e.path),[r,c,p]),v=Xm(SE,_,function(){var m=n(),h=lE(m,r,{prefix:i,unitless:o,ignore:a,scope:c}),g=_t(h,2),y=g[0],E=g[1],A=yE(_,E);return[y,E,A,r]},function(m){var h=_t(m,3),g=h[2];cp&&iE(g,{mark:yr})},function(m){var h=_t(m,3),g=h[1],y=h[2];if(g){var E=wo(g,y,{mark:yr,prepend:"queue",attachTo:d,priority:-999});E[Ti]=f,E.setAttribute(Ga,r)}});return v},EA=function(e,n,r){var i=_t(e,4),o=i[1],a=i[2],s=i[3],l=r||{},c=l.plain;if(!o)return null;var u=-999,f={"data-rc-order":"prependQueue","data-rc-priority":"".concat(u)},d=Au(o,s,a,f,c);return[u,a,d]};ht(ht(ht({},xE,xA),cE,YC),SE,EA);function Go(t){return t.notSplit=!0,t}Go(["borderTop","borderBottom"]),Go(["borderTop"]),Go(["borderBottom"]),Go(["borderLeft","borderRight"]),Go(["borderLeft"]),Go(["borderRight"]);var Km=I.createContext({});function MA(t){return JS(t)||qS(t)||Gm(t)||eE()}function pp(t,e){for(var n=t,r=0;r<e.length;r+=1){if(n==null)return;n=n[e[r]]}return n}function EE(t,e,n,r){if(!e.length)return n;var i=MA(e),o=i[0],a=i.slice(1),s;return!t&&typeof o=="number"?s=[]:Array.isArray(t)?s=Yi(t):s=Ze({},t),r&&n===void 0&&a.length===1?delete s[o][a[0]]:s[o]=EE(s[o],a,n,r),s}function md(t,e,n){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;return e.length&&r&&n===void 0&&!pp(t,e.slice(0,-1))?t:EE(t,e,n,r)}function wA(t){return Nt(t)==="object"&&t!==null&&Object.getPrototypeOf(t)===Object.prototype}function i0(t){return Array.isArray(t)?[]:{}}var TA=typeof Reflect>"u"?Object.keys:Reflect.ownKeys;function bA(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var r=i0(e[0]);return e.forEach(function(i){function o(a,s){var l=new Set(s),c=pp(i,a),u=Array.isArray(c);if(u||wA(c)){if(!l.has(c)){l.add(c);var f=pp(r,a);u?r=md(r,a,[]):(!f||Nt(f)!=="object")&&(r=md(r,a,i0(c))),TA(c).forEach(function(d){o([].concat(Yi(a),[d]),l)})}}else r=md(r,a,c)}o([])}),r}const CA=I.createContext({}),AA=I.createContext(void 0);var RA={items_per_page:"/ page",jump_to:"Go to",jump_to_confirm:"confirm",page:"Page",prev_page:"Previous Page",next_page:"Next Page",prev_5:"Previous 5 Pages",next_5:"Next 5 Pages",prev_3:"Previous 3 Pages",next_3:"Next 3 Pages",page_size:"Page Size"},PA={locale:"en_US",today:"Today",now:"Now",backToToday:"Back to today",ok:"OK",clear:"Clear",month:"Month",year:"Year",timeSelect:"select time",dateSelect:"select date",weekSelect:"Choose a week",monthSelect:"Choose a month",yearSelect:"Choose a year",decadeSelect:"Choose a decade",yearFormat:"YYYY",dateFormat:"M/D/YYYY",dayFormat:"D",dateTimeFormat:"M/D/YYYY HH:mm:ss",monthBeforeYear:!0,previousMonth:"Previous month (PageUp)",nextMonth:"Next month (PageDown)",previousYear:"Last year (Control + left)",nextYear:"Next year (Control + right)",previousDecade:"Last decade",nextDecade:"Next decade",previousCentury:"Last century",nextCentury:"Next century"};const ME={placeholder:"Select time",rangePlaceholder:["Start time","End time"]},o0={lang:Object.assign({placeholder:"Select date",yearPlaceholder:"Select year",quarterPlaceholder:"Select quarter",monthPlaceholder:"Select month",weekPlaceholder:"Select week",rangePlaceholder:["Start date","End date"],rangeYearPlaceholder:["Start year","End year"],rangeQuarterPlaceholder:["Start quarter","End quarter"],rangeMonthPlaceholder:["Start month","End month"],rangeWeekPlaceholder:["Start week","End week"]},PA),timePickerLocale:Object.assign({},ME)},In="${label} is not a valid ${type}",wf={locale:"en",Pagination:RA,DatePicker:o0,TimePicker:ME,Calendar:o0,global:{placeholder:"Please select"},Table:{filterTitle:"Filter menu",filterConfirm:"OK",filterReset:"Reset",filterEmptyText:"No filters",filterCheckall:"Select all items",filterSearchPlaceholder:"Search in filters",emptyText:"No data",selectAll:"Select current page",selectInvert:"Invert current page",selectNone:"Clear all data",selectionAll:"Select all data",sortTitle:"Sort",expand:"Expand row",collapse:"Collapse row",triggerDesc:"Click to sort descending",triggerAsc:"Click to sort ascending",cancelSort:"Click to cancel sorting"},Tour:{Next:"Next",Previous:"Previous",Finish:"Finish"},Modal:{okText:"OK",cancelText:"Cancel",justOkText:"OK"},Popconfirm:{okText:"OK",cancelText:"Cancel"},Transfer:{titles:["",""],searchPlaceholder:"Search here",itemUnit:"item",itemsUnit:"items",remove:"Remove",selectCurrent:"Select current page",removeCurrent:"Remove current page",selectAll:"Select all data",deselectAll:"Deselect all data",removeAll:"Remove all data",selectInvert:"Invert current page"},Upload:{uploading:"Uploading...",removeFile:"Remove file",uploadError:"Upload error",previewFile:"Preview file",downloadFile:"Download file"},Empty:{description:"No data"},Icon:{icon:"icon"},Text:{edit:"Edit",copy:"Copy",copied:"Copied",expand:"Expand",collapse:"Collapse"},Form:{optional:"(optional)",defaultValidateMessages:{default:"Field validation error for ${label}",required:"Please enter ${label}",enum:"${label} must be one of [${enum}]",whitespace:"${label} cannot be a blank character",date:{format:"${label} date format is invalid",parse:"${label} cannot be converted to a date",invalid:"${label} is an invalid date"},types:{string:In,method:In,array:In,object:In,number:In,date:In,boolean:In,integer:In,float:In,regexp:In,email:In,url:In,hex:In},string:{len:"${label} must be ${len} characters",min:"${label} must be at least ${min} characters",max:"${label} must be up to ${max} characters",range:"${label} must be between ${min}-${max} characters"},number:{len:"${label} must be equal to ${len}",min:"${label} must be minimum ${min}",max:"${label} must be maximum ${max}",range:"${label} must be between ${min}-${max}"},array:{len:"Must be ${len} ${label}",min:"At least ${min} ${label}",max:"At most ${max} ${label}",range:"The amount of ${label} must be between ${min}-${max}"},pattern:{mismatch:"${label} does not match the pattern ${pattern}"}}},Image:{preview:"Preview"},QRCode:{expired:"QR code expired",refresh:"Refresh",scanned:"Scanned"},ColorPicker:{presetEmpty:"Empty"}};Object.assign({},wf.Modal);let qc=[];const a0=()=>qc.reduce((t,e)=>Object.assign(Object.assign({},t),e),wf.Modal);function LA(t){if(t){const e=Object.assign({},t);return qc.push(e),a0(),()=>{qc=qc.filter(n=>n!==e),a0()}}Object.assign({},wf.Modal)}const wE=I.createContext(void 0),DA="internalMark",IA=t=>{const{locale:e={},children:n,_ANT_MARK__:r}=t;I.useEffect(()=>LA(e&&e.Modal),[e]);const i=I.useMemo(()=>Object.assign(Object.assign({},e),{exist:!0}),[e]);return I.createElement(wE.Provider,{value:i},n)};function an(t,e){NA(t)&&(t="100%");var n=UA(t);return t=e===360?t:Math.min(e,Math.max(0,parseFloat(t))),n&&(t=parseInt(String(t*e),10)/100),Math.abs(t-e)<1e-6?1:(e===360?t=(t<0?t%e+e:t%e)/parseFloat(String(e)):t=t%e/parseFloat(String(e)),t)}function Kl(t){return Math.min(1,Math.max(0,t))}function NA(t){return typeof t=="string"&&t.indexOf(".")!==-1&&parseFloat(t)===1}function UA(t){return typeof t=="string"&&t.indexOf("%")!==-1}function TE(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function Zl(t){return t<=1?"".concat(Number(t)*100,"%"):t}function _o(t){return t.length===1?"0"+t:String(t)}function OA(t,e,n){return{r:an(t,255)*255,g:an(e,255)*255,b:an(n,255)*255}}function s0(t,e,n){t=an(t,255),e=an(e,255),n=an(n,255);var r=Math.max(t,e,n),i=Math.min(t,e,n),o=0,a=0,s=(r+i)/2;if(r===i)a=0,o=0;else{var l=r-i;switch(a=s>.5?l/(2-r-i):l/(r+i),r){case t:o=(e-n)/l+(e<n?6:0);break;case e:o=(n-t)/l+2;break;case n:o=(t-e)/l+4;break}o/=6}return{h:o,s:a,l:s}}function gd(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*(6*n):n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function FA(t,e,n){var r,i,o;if(t=an(t,360),e=an(e,100),n=an(n,100),e===0)i=n,o=n,r=n;else{var a=n<.5?n*(1+e):n+e-n*e,s=2*n-a;r=gd(s,a,t+1/3),i=gd(s,a,t),o=gd(s,a,t-1/3)}return{r:r*255,g:i*255,b:o*255}}function mp(t,e,n){t=an(t,255),e=an(e,255),n=an(n,255);var r=Math.max(t,e,n),i=Math.min(t,e,n),o=0,a=r,s=r-i,l=r===0?0:s/r;if(r===i)o=0;else{switch(r){case t:o=(e-n)/s+(e<n?6:0);break;case e:o=(n-t)/s+2;break;case n:o=(t-e)/s+4;break}o/=6}return{h:o,s:l,v:a}}function kA(t,e,n){t=an(t,360)*6,e=an(e,100),n=an(n,100);var r=Math.floor(t),i=t-r,o=n*(1-e),a=n*(1-i*e),s=n*(1-(1-i)*e),l=r%6,c=[n,a,o,o,s,n][l],u=[s,n,n,a,o,o][l],f=[o,o,s,n,n,a][l];return{r:c*255,g:u*255,b:f*255}}function gp(t,e,n,r){var i=[_o(Math.round(t).toString(16)),_o(Math.round(e).toString(16)),_o(Math.round(n).toString(16))];return r&&i[0].startsWith(i[0].charAt(1))&&i[1].startsWith(i[1].charAt(1))&&i[2].startsWith(i[2].charAt(1))?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0):i.join("")}function zA(t,e,n,r,i){var o=[_o(Math.round(t).toString(16)),_o(Math.round(e).toString(16)),_o(Math.round(n).toString(16)),_o(BA(r))];return i&&o[0].startsWith(o[0].charAt(1))&&o[1].startsWith(o[1].charAt(1))&&o[2].startsWith(o[2].charAt(1))&&o[3].startsWith(o[3].charAt(1))?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0)+o[3].charAt(0):o.join("")}function BA(t){return Math.round(parseFloat(t)*255).toString(16)}function l0(t){return On(t)/255}function On(t){return parseInt(t,16)}function HA(t){return{r:t>>16,g:(t&65280)>>8,b:t&255}}var vp={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function ca(t){var e={r:0,g:0,b:0},n=1,r=null,i=null,o=null,a=!1,s=!1;return typeof t=="string"&&(t=WA(t)),typeof t=="object"&&(Nr(t.r)&&Nr(t.g)&&Nr(t.b)?(e=OA(t.r,t.g,t.b),a=!0,s=String(t.r).substr(-1)==="%"?"prgb":"rgb"):Nr(t.h)&&Nr(t.s)&&Nr(t.v)?(r=Zl(t.s),i=Zl(t.v),e=kA(t.h,r,i),a=!0,s="hsv"):Nr(t.h)&&Nr(t.s)&&Nr(t.l)&&(r=Zl(t.s),o=Zl(t.l),e=FA(t.h,r,o),a=!0,s="hsl"),Object.prototype.hasOwnProperty.call(t,"a")&&(n=t.a)),n=TE(n),{ok:a,format:t.format||s,r:Math.min(255,Math.max(e.r,0)),g:Math.min(255,Math.max(e.g,0)),b:Math.min(255,Math.max(e.b,0)),a:n}}var VA="[-\\+]?\\d+%?",GA="[-\\+]?\\d*\\.\\d+%?",bi="(?:".concat(GA,")|(?:").concat(VA,")"),vd="[\\s|\\(]+(".concat(bi,")[,|\\s]+(").concat(bi,")[,|\\s]+(").concat(bi,")\\s*\\)?"),_d="[\\s|\\(]+(".concat(bi,")[,|\\s]+(").concat(bi,")[,|\\s]+(").concat(bi,")[,|\\s]+(").concat(bi,")\\s*\\)?"),ur={CSS_UNIT:new RegExp(bi),rgb:new RegExp("rgb"+vd),rgba:new RegExp("rgba"+_d),hsl:new RegExp("hsl"+vd),hsla:new RegExp("hsla"+_d),hsv:new RegExp("hsv"+vd),hsva:new RegExp("hsva"+_d),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function WA(t){if(t=t.trim().toLowerCase(),t.length===0)return!1;var e=!1;if(vp[t])t=vp[t],e=!0;else if(t==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var n=ur.rgb.exec(t);return n?{r:n[1],g:n[2],b:n[3]}:(n=ur.rgba.exec(t),n?{r:n[1],g:n[2],b:n[3],a:n[4]}:(n=ur.hsl.exec(t),n?{h:n[1],s:n[2],l:n[3]}:(n=ur.hsla.exec(t),n?{h:n[1],s:n[2],l:n[3],a:n[4]}:(n=ur.hsv.exec(t),n?{h:n[1],s:n[2],v:n[3]}:(n=ur.hsva.exec(t),n?{h:n[1],s:n[2],v:n[3],a:n[4]}:(n=ur.hex8.exec(t),n?{r:On(n[1]),g:On(n[2]),b:On(n[3]),a:l0(n[4]),format:e?"name":"hex8"}:(n=ur.hex6.exec(t),n?{r:On(n[1]),g:On(n[2]),b:On(n[3]),format:e?"name":"hex"}:(n=ur.hex4.exec(t),n?{r:On(n[1]+n[1]),g:On(n[2]+n[2]),b:On(n[3]+n[3]),a:l0(n[4]+n[4]),format:e?"name":"hex8"}:(n=ur.hex3.exec(t),n?{r:On(n[1]+n[1]),g:On(n[2]+n[2]),b:On(n[3]+n[3]),format:e?"name":"hex"}:!1)))))))))}function Nr(t){return!!ur.CSS_UNIT.exec(String(t))}var Hn=function(){function t(e,n){e===void 0&&(e=""),n===void 0&&(n={});var r;if(e instanceof t)return e;typeof e=="number"&&(e=HA(e)),this.originalInput=e;var i=ca(e);this.originalInput=e,this.r=i.r,this.g=i.g,this.b=i.b,this.a=i.a,this.roundA=Math.round(100*this.a)/100,this.format=(r=n.format)!==null&&r!==void 0?r:i.format,this.gradientType=n.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=i.ok}return t.prototype.isDark=function(){return this.getBrightness()<128},t.prototype.isLight=function(){return!this.isDark()},t.prototype.getBrightness=function(){var e=this.toRgb();return(e.r*299+e.g*587+e.b*114)/1e3},t.prototype.getLuminance=function(){var e=this.toRgb(),n,r,i,o=e.r/255,a=e.g/255,s=e.b/255;return o<=.03928?n=o/12.92:n=Math.pow((o+.055)/1.055,2.4),a<=.03928?r=a/12.92:r=Math.pow((a+.055)/1.055,2.4),s<=.03928?i=s/12.92:i=Math.pow((s+.055)/1.055,2.4),.2126*n+.7152*r+.0722*i},t.prototype.getAlpha=function(){return this.a},t.prototype.setAlpha=function(e){return this.a=TE(e),this.roundA=Math.round(100*this.a)/100,this},t.prototype.isMonochrome=function(){var e=this.toHsl().s;return e===0},t.prototype.toHsv=function(){var e=mp(this.r,this.g,this.b);return{h:e.h*360,s:e.s,v:e.v,a:this.a}},t.prototype.toHsvString=function(){var e=mp(this.r,this.g,this.b),n=Math.round(e.h*360),r=Math.round(e.s*100),i=Math.round(e.v*100);return this.a===1?"hsv(".concat(n,", ").concat(r,"%, ").concat(i,"%)"):"hsva(".concat(n,", ").concat(r,"%, ").concat(i,"%, ").concat(this.roundA,")")},t.prototype.toHsl=function(){var e=s0(this.r,this.g,this.b);return{h:e.h*360,s:e.s,l:e.l,a:this.a}},t.prototype.toHslString=function(){var e=s0(this.r,this.g,this.b),n=Math.round(e.h*360),r=Math.round(e.s*100),i=Math.round(e.l*100);return this.a===1?"hsl(".concat(n,", ").concat(r,"%, ").concat(i,"%)"):"hsla(".concat(n,", ").concat(r,"%, ").concat(i,"%, ").concat(this.roundA,")")},t.prototype.toHex=function(e){return e===void 0&&(e=!1),gp(this.r,this.g,this.b,e)},t.prototype.toHexString=function(e){return e===void 0&&(e=!1),"#"+this.toHex(e)},t.prototype.toHex8=function(e){return e===void 0&&(e=!1),zA(this.r,this.g,this.b,this.a,e)},t.prototype.toHex8String=function(e){return e===void 0&&(e=!1),"#"+this.toHex8(e)},t.prototype.toHexShortString=function(e){return e===void 0&&(e=!1),this.a===1?this.toHexString(e):this.toHex8String(e)},t.prototype.toRgb=function(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}},t.prototype.toRgbString=function(){var e=Math.round(this.r),n=Math.round(this.g),r=Math.round(this.b);return this.a===1?"rgb(".concat(e,", ").concat(n,", ").concat(r,")"):"rgba(".concat(e,", ").concat(n,", ").concat(r,", ").concat(this.roundA,")")},t.prototype.toPercentageRgb=function(){var e=function(n){return"".concat(Math.round(an(n,255)*100),"%")};return{r:e(this.r),g:e(this.g),b:e(this.b),a:this.a}},t.prototype.toPercentageRgbString=function(){var e=function(n){return Math.round(an(n,255)*100)};return this.a===1?"rgb(".concat(e(this.r),"%, ").concat(e(this.g),"%, ").concat(e(this.b),"%)"):"rgba(".concat(e(this.r),"%, ").concat(e(this.g),"%, ").concat(e(this.b),"%, ").concat(this.roundA,")")},t.prototype.toName=function(){if(this.a===0)return"transparent";if(this.a<1)return!1;for(var e="#"+gp(this.r,this.g,this.b,!1),n=0,r=Object.entries(vp);n<r.length;n++){var i=r[n],o=i[0],a=i[1];if(e===a)return o}return!1},t.prototype.toString=function(e){var n=!!e;e=e??this.format;var r=!1,i=this.a<1&&this.a>=0,o=!n&&i&&(e.startsWith("hex")||e==="name");return o?e==="name"&&this.a===0?this.toName():this.toRgbString():(e==="rgb"&&(r=this.toRgbString()),e==="prgb"&&(r=this.toPercentageRgbString()),(e==="hex"||e==="hex6")&&(r=this.toHexString()),e==="hex3"&&(r=this.toHexString(!0)),e==="hex4"&&(r=this.toHex8String(!0)),e==="hex8"&&(r=this.toHex8String()),e==="name"&&(r=this.toName()),e==="hsl"&&(r=this.toHslString()),e==="hsv"&&(r=this.toHsvString()),r||this.toHexString())},t.prototype.toNumber=function(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)},t.prototype.clone=function(){return new t(this.toString())},t.prototype.lighten=function(e){e===void 0&&(e=10);var n=this.toHsl();return n.l+=e/100,n.l=Kl(n.l),new t(n)},t.prototype.brighten=function(e){e===void 0&&(e=10);var n=this.toRgb();return n.r=Math.max(0,Math.min(255,n.r-Math.round(255*-(e/100)))),n.g=Math.max(0,Math.min(255,n.g-Math.round(255*-(e/100)))),n.b=Math.max(0,Math.min(255,n.b-Math.round(255*-(e/100)))),new t(n)},t.prototype.darken=function(e){e===void 0&&(e=10);var n=this.toHsl();return n.l-=e/100,n.l=Kl(n.l),new t(n)},t.prototype.tint=function(e){return e===void 0&&(e=10),this.mix("white",e)},t.prototype.shade=function(e){return e===void 0&&(e=10),this.mix("black",e)},t.prototype.desaturate=function(e){e===void 0&&(e=10);var n=this.toHsl();return n.s-=e/100,n.s=Kl(n.s),new t(n)},t.prototype.saturate=function(e){e===void 0&&(e=10);var n=this.toHsl();return n.s+=e/100,n.s=Kl(n.s),new t(n)},t.prototype.greyscale=function(){return this.desaturate(100)},t.prototype.spin=function(e){var n=this.toHsl(),r=(n.h+e)%360;return n.h=r<0?360+r:r,new t(n)},t.prototype.mix=function(e,n){n===void 0&&(n=50);var r=this.toRgb(),i=new t(e).toRgb(),o=n/100,a={r:(i.r-r.r)*o+r.r,g:(i.g-r.g)*o+r.g,b:(i.b-r.b)*o+r.b,a:(i.a-r.a)*o+r.a};return new t(a)},t.prototype.analogous=function(e,n){e===void 0&&(e=6),n===void 0&&(n=30);var r=this.toHsl(),i=360/n,o=[this];for(r.h=(r.h-(i*e>>1)+720)%360;--e;)r.h=(r.h+i)%360,o.push(new t(r));return o},t.prototype.complement=function(){var e=this.toHsl();return e.h=(e.h+180)%360,new t(e)},t.prototype.monochromatic=function(e){e===void 0&&(e=6);for(var n=this.toHsv(),r=n.h,i=n.s,o=n.v,a=[],s=1/e;e--;)a.push(new t({h:r,s:i,v:o})),o=(o+s)%1;return a},t.prototype.splitcomplement=function(){var e=this.toHsl(),n=e.h;return[this,new t({h:(n+72)%360,s:e.s,l:e.l}),new t({h:(n+216)%360,s:e.s,l:e.l})]},t.prototype.onBackground=function(e){var n=this.toRgb(),r=new t(e).toRgb(),i=n.a+r.a*(1-n.a);return new t({r:(n.r*n.a+r.r*r.a*(1-n.a))/i,g:(n.g*n.a+r.g*r.a*(1-n.a))/i,b:(n.b*n.a+r.b*r.a*(1-n.a))/i,a:i})},t.prototype.triad=function(){return this.polyad(3)},t.prototype.tetrad=function(){return this.polyad(4)},t.prototype.polyad=function(e){for(var n=this.toHsl(),r=n.h,i=[this],o=360/e,a=1;a<e;a++)i.push(new t({h:(r+a*o)%360,s:n.s,l:n.l}));return i},t.prototype.equals=function(e){return this.toRgbString()===new t(e).toRgbString()},t}(),Ql=2,c0=.16,jA=.05,$A=.05,XA=.15,bE=5,CE=4,YA=[{index:7,opacity:.15},{index:6,opacity:.25},{index:5,opacity:.3},{index:5,opacity:.45},{index:5,opacity:.65},{index:5,opacity:.85},{index:4,opacity:.9},{index:3,opacity:.95},{index:2,opacity:.97},{index:1,opacity:.98}];function u0(t){var e=t.r,n=t.g,r=t.b,i=mp(e,n,r);return{h:i.h*360,s:i.s,v:i.v}}function Jl(t){var e=t.r,n=t.g,r=t.b;return"#".concat(gp(e,n,r,!1))}function qA(t,e,n){var r=n/100,i={r:(e.r-t.r)*r+t.r,g:(e.g-t.g)*r+t.g,b:(e.b-t.b)*r+t.b};return i}function f0(t,e,n){var r;return Math.round(t.h)>=60&&Math.round(t.h)<=240?r=n?Math.round(t.h)-Ql*e:Math.round(t.h)+Ql*e:r=n?Math.round(t.h)+Ql*e:Math.round(t.h)-Ql*e,r<0?r+=360:r>=360&&(r-=360),r}function d0(t,e,n){if(t.h===0&&t.s===0)return t.s;var r;return n?r=t.s-c0*e:e===CE?r=t.s+c0:r=t.s+jA*e,r>1&&(r=1),n&&e===bE&&r>.1&&(r=.1),r<.06&&(r=.06),Number(r.toFixed(2))}function h0(t,e,n){var r;return n?r=t.v+$A*e:r=t.v-XA*e,r>1&&(r=1),Number(r.toFixed(2))}function No(t){for(var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=[],r=ca(t),i=bE;i>0;i-=1){var o=u0(r),a=Jl(ca({h:f0(o,i,!0),s:d0(o,i,!0),v:h0(o,i,!0)}));n.push(a)}n.push(Jl(r));for(var s=1;s<=CE;s+=1){var l=u0(r),c=Jl(ca({h:f0(l,s),s:d0(l,s),v:h0(l,s)}));n.push(c)}return e.theme==="dark"?YA.map(function(u){var f=u.index,d=u.opacity,p=Jl(qA(ca(e.backgroundColor||"#141414"),ca(n[f]),d*100));return p}):n}var yd={red:"#F5222D",volcano:"#FA541C",orange:"#FA8C16",gold:"#FAAD14",yellow:"#FADB14",lime:"#A0D911",green:"#52C41A",cyan:"#13C2C2",blue:"#1677FF",geekblue:"#2F54EB",purple:"#722ED1",magenta:"#EB2F96",grey:"#666666"},Kc={},xd={};Object.keys(yd).forEach(function(t){Kc[t]=No(yd[t]),Kc[t].primary=Kc[t][5],xd[t]=No(yd[t],{theme:"dark",backgroundColor:"#141414"}),xd[t].primary=xd[t][5]});var KA=Kc.blue;const AE={blue:"#1677ff",purple:"#722ED1",cyan:"#13C2C2",green:"#52C41A",magenta:"#EB2F96",pink:"#eb2f96",red:"#F5222D",orange:"#FA8C16",yellow:"#FADB14",volcano:"#FA541C",geekblue:"#2F54EB",gold:"#FAAD14",lime:"#A0D911"},hl=Object.assign(Object.assign({},AE),{colorPrimary:"#1677ff",colorSuccess:"#52c41a",colorWarning:"#faad14",colorError:"#ff4d4f",colorInfo:"#1677ff",colorLink:"",colorTextBase:"",colorBgBase:"",fontFamily:`-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,fontFamilyCode:"'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",fontSize:14,lineWidth:1,lineType:"solid",motionUnit:.1,motionBase:0,motionEaseOutCirc:"cubic-bezier(0.08, 0.82, 0.17, 1)",motionEaseInOutCirc:"cubic-bezier(0.78, 0.14, 0.15, 0.86)",motionEaseOut:"cubic-bezier(0.215, 0.61, 0.355, 1)",motionEaseInOut:"cubic-bezier(0.645, 0.045, 0.355, 1)",motionEaseOutBack:"cubic-bezier(0.12, 0.4, 0.29, 1.46)",motionEaseInBack:"cubic-bezier(0.71, -0.46, 0.88, 0.6)",motionEaseInQuint:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",motionEaseOutQuint:"cubic-bezier(0.23, 1, 0.32, 1)",borderRadius:6,sizeUnit:4,sizeStep:4,sizePopupArrow:16,controlHeight:32,zIndexBase:0,zIndexPopupBase:1e3,opacityImage:1,wireframe:!1,motion:!0});function ZA(t,e){let{generateColorPalettes:n,generateNeutralColorPalettes:r}=e;const{colorSuccess:i,colorWarning:o,colorError:a,colorInfo:s,colorPrimary:l,colorBgBase:c,colorTextBase:u}=t,f=n(l),d=n(i),p=n(o),_=n(a),v=n(s),m=r(c,u),h=t.colorLink||t.colorInfo,g=n(h);return Object.assign(Object.assign({},m),{colorPrimaryBg:f[1],colorPrimaryBgHover:f[2],colorPrimaryBorder:f[3],colorPrimaryBorderHover:f[4],colorPrimaryHover:f[5],colorPrimary:f[6],colorPrimaryActive:f[7],colorPrimaryTextHover:f[8],colorPrimaryText:f[9],colorPrimaryTextActive:f[10],colorSuccessBg:d[1],colorSuccessBgHover:d[2],colorSuccessBorder:d[3],colorSuccessBorderHover:d[4],colorSuccessHover:d[4],colorSuccess:d[6],colorSuccessActive:d[7],colorSuccessTextHover:d[8],colorSuccessText:d[9],colorSuccessTextActive:d[10],colorErrorBg:_[1],colorErrorBgHover:_[2],colorErrorBgActive:_[3],colorErrorBorder:_[3],colorErrorBorderHover:_[4],colorErrorHover:_[5],colorError:_[6],colorErrorActive:_[7],colorErrorTextHover:_[8],colorErrorText:_[9],colorErrorTextActive:_[10],colorWarningBg:p[1],colorWarningBgHover:p[2],colorWarningBorder:p[3],colorWarningBorderHover:p[4],colorWarningHover:p[4],colorWarning:p[6],colorWarningActive:p[7],colorWarningTextHover:p[8],colorWarningText:p[9],colorWarningTextActive:p[10],colorInfoBg:v[1],colorInfoBgHover:v[2],colorInfoBorder:v[3],colorInfoBorderHover:v[4],colorInfoHover:v[4],colorInfo:v[6],colorInfoActive:v[7],colorInfoTextHover:v[8],colorInfoText:v[9],colorInfoTextActive:v[10],colorLinkHover:g[4],colorLink:g[6],colorLinkActive:g[7],colorBgMask:new Hn("#000").setAlpha(.45).toRgbString(),colorWhite:"#fff"})}const QA=t=>{let e=t,n=t,r=t,i=t;return t<6&&t>=5?e=t+1:t<16&&t>=6?e=t+2:t>=16&&(e=16),t<7&&t>=5?n=4:t<8&&t>=7?n=5:t<14&&t>=8?n=6:t<16&&t>=14?n=7:t>=16&&(n=8),t<6&&t>=2?r=1:t>=6&&(r=2),t>4&&t<8?i=4:t>=8&&(i=6),{borderRadius:t,borderRadiusXS:r,borderRadiusSM:n,borderRadiusLG:e,borderRadiusOuter:i}};function JA(t){const{motionUnit:e,motionBase:n,borderRadius:r,lineWidth:i}=t;return Object.assign({motionDurationFast:`${(n+e).toFixed(1)}s`,motionDurationMid:`${(n+e*2).toFixed(1)}s`,motionDurationSlow:`${(n+e*3).toFixed(1)}s`,lineWidthBold:i+1},QA(r))}const eR=t=>{const{controlHeight:e}=t;return{controlHeightSM:e*.75,controlHeightXS:e*.5,controlHeightLG:e*1.25}};function Zc(t){return(t+8)/t}function tR(t){const e=new Array(10).fill(null).map((n,r)=>{const i=r-1,o=t*Math.pow(2.71828,i/5),a=r>1?Math.floor(o):Math.ceil(o);return Math.floor(a/2)*2});return e[1]=t,e.map(n=>({size:n,lineHeight:Zc(n)}))}const nR=t=>{const e=tR(t),n=e.map(u=>u.size),r=e.map(u=>u.lineHeight),i=n[1],o=n[0],a=n[2],s=r[1],l=r[0],c=r[2];return{fontSizeSM:o,fontSize:i,fontSizeLG:a,fontSizeXL:n[3],fontSizeHeading1:n[6],fontSizeHeading2:n[5],fontSizeHeading3:n[4],fontSizeHeading4:n[3],fontSizeHeading5:n[2],lineHeight:s,lineHeightLG:c,lineHeightSM:l,fontHeight:Math.round(s*i),fontHeightLG:Math.round(c*a),fontHeightSM:Math.round(l*o),lineHeightHeading1:r[6],lineHeightHeading2:r[5],lineHeightHeading3:r[4],lineHeightHeading4:r[3],lineHeightHeading5:r[2]}};function rR(t){const{sizeUnit:e,sizeStep:n}=t;return{sizeXXL:e*(n+8),sizeXL:e*(n+4),sizeLG:e*(n+2),sizeMD:e*(n+1),sizeMS:e*n,size:e*n,sizeSM:e*(n-1),sizeXS:e*(n-2),sizeXXS:e*(n-3)}}const Ur=(t,e)=>new Hn(t).setAlpha(e).toRgbString(),vs=(t,e)=>new Hn(t).darken(e).toHexString(),iR=t=>{const e=No(t);return{1:e[0],2:e[1],3:e[2],4:e[3],5:e[4],6:e[5],7:e[6],8:e[4],9:e[5],10:e[6]}},oR=(t,e)=>{const n=t||"#fff",r=e||"#000";return{colorBgBase:n,colorTextBase:r,colorText:Ur(r,.88),colorTextSecondary:Ur(r,.65),colorTextTertiary:Ur(r,.45),colorTextQuaternary:Ur(r,.25),colorFill:Ur(r,.15),colorFillSecondary:Ur(r,.06),colorFillTertiary:Ur(r,.04),colorFillQuaternary:Ur(r,.02),colorBgLayout:vs(n,4),colorBgContainer:vs(n,0),colorBgElevated:vs(n,0),colorBgSpotlight:Ur(r,.85),colorBgBlur:"transparent",colorBorder:vs(n,15),colorBorderSecondary:vs(n,6)}};function aR(t){const e=Object.keys(AE).map(n=>{const r=No(t[n]);return new Array(10).fill(1).reduce((i,o,a)=>(i[`${n}-${a+1}`]=r[a],i[`${n}${a+1}`]=r[a],i),{})}).reduce((n,r)=>(n=Object.assign(Object.assign({},n),r),n),{});return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},t),e),ZA(t,{generateColorPalettes:iR,generateNeutralColorPalettes:oR})),nR(t.fontSize)),rR(t)),eR(t)),JA(t))}const RE=lp(aR),_p={token:hl,override:{override:hl},hashed:!0},PE=st.createContext(_p),LE="anticon",sR=(t,e)=>e||(t?`ant-${t}`:"ant"),Er=I.createContext({getPrefixCls:sR,iconPrefixCls:LE}),lR=`-ant-${Date.now()}-${Math.random()}`;function cR(t,e){const n={},r=(a,s)=>{let l=a.clone();return l=(s==null?void 0:s(l))||l,l.toRgbString()},i=(a,s)=>{const l=new Hn(a),c=No(l.toRgbString());n[`${s}-color`]=r(l),n[`${s}-color-disabled`]=c[1],n[`${s}-color-hover`]=c[4],n[`${s}-color-active`]=c[6],n[`${s}-color-outline`]=l.clone().setAlpha(.2).toRgbString(),n[`${s}-color-deprecated-bg`]=c[0],n[`${s}-color-deprecated-border`]=c[2]};if(e.primaryColor){i(e.primaryColor,"primary");const a=new Hn(e.primaryColor),s=No(a.toRgbString());s.forEach((c,u)=>{n[`primary-${u+1}`]=c}),n["primary-color-deprecated-l-35"]=r(a,c=>c.lighten(35)),n["primary-color-deprecated-l-20"]=r(a,c=>c.lighten(20)),n["primary-color-deprecated-t-20"]=r(a,c=>c.tint(20)),n["primary-color-deprecated-t-50"]=r(a,c=>c.tint(50)),n["primary-color-deprecated-f-12"]=r(a,c=>c.setAlpha(c.getAlpha()*.12));const l=new Hn(s[0]);n["primary-color-active-deprecated-f-30"]=r(l,c=>c.setAlpha(c.getAlpha()*.3)),n["primary-color-active-deprecated-d-02"]=r(l,c=>c.darken(2))}return e.successColor&&i(e.successColor,"success"),e.warningColor&&i(e.warningColor,"warning"),e.errorColor&&i(e.errorColor,"error"),e.infoColor&&i(e.infoColor,"info"),`
  :root {
    ${Object.keys(n).map(a=>`--${t}-${a}: ${n[a]};`).join(`
`)}
  }
  `.trim()}function uR(t,e){const n=cR(t,e);ai()&&wo(n,`${lR}-dynamic-theme`)}const Ru=I.createContext(!1),fR=t=>{let{children:e,disabled:n}=t;const r=I.useContext(Ru);return I.createElement(Ru.Provider,{value:n??r},e)},ja=I.createContext(void 0),dR=t=>{let{children:e,size:n}=t;const r=I.useContext(ja);return I.createElement(ja.Provider,{value:n||r},e)};function hR(){const t=I.useContext(Ru),e=I.useContext(ja);return{componentDisabled:t,componentSize:e}}const pR="5.18.3";function Sd(t){return t>=0&&t<=255}function ec(t,e){const{r:n,g:r,b:i,a:o}=new Hn(t).toRgb();if(o<1)return t;const{r:a,g:s,b:l}=new Hn(e).toRgb();for(let c=.01;c<=1;c+=.01){const u=Math.round((n-a*(1-c))/c),f=Math.round((r-s*(1-c))/c),d=Math.round((i-l*(1-c))/c);if(Sd(u)&&Sd(f)&&Sd(d))return new Hn({r:u,g:f,b:d,a:Math.round(c*100)/100}).toRgbString()}return new Hn({r:n,g:r,b:i,a:1}).toRgbString()}var mR=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n};function DE(t){const{override:e}=t,n=mR(t,["override"]),r=Object.assign({},e);Object.keys(hl).forEach(d=>{delete r[d]});const i=Object.assign(Object.assign({},n),r),o=480,a=576,s=768,l=992,c=1200,u=1600;if(i.motion===!1){const d="0s";i.motionDurationFast=d,i.motionDurationMid=d,i.motionDurationSlow=d}return Object.assign(Object.assign(Object.assign({},i),{colorFillContent:i.colorFillSecondary,colorFillContentHover:i.colorFill,colorFillAlter:i.colorFillQuaternary,colorBgContainerDisabled:i.colorFillTertiary,colorBorderBg:i.colorBgContainer,colorSplit:ec(i.colorBorderSecondary,i.colorBgContainer),colorTextPlaceholder:i.colorTextQuaternary,colorTextDisabled:i.colorTextQuaternary,colorTextHeading:i.colorText,colorTextLabel:i.colorTextSecondary,colorTextDescription:i.colorTextTertiary,colorTextLightSolid:i.colorWhite,colorHighlight:i.colorError,colorBgTextHover:i.colorFillSecondary,colorBgTextActive:i.colorFill,colorIcon:i.colorTextTertiary,colorIconHover:i.colorText,colorErrorOutline:ec(i.colorErrorBg,i.colorBgContainer),colorWarningOutline:ec(i.colorWarningBg,i.colorBgContainer),fontSizeIcon:i.fontSizeSM,lineWidthFocus:i.lineWidth*4,lineWidth:i.lineWidth,controlOutlineWidth:i.lineWidth*2,controlInteractiveSize:i.controlHeight/2,controlItemBgHover:i.colorFillTertiary,controlItemBgActive:i.colorPrimaryBg,controlItemBgActiveHover:i.colorPrimaryBgHover,controlItemBgActiveDisabled:i.colorFill,controlTmpOutline:i.colorFillQuaternary,controlOutline:ec(i.colorPrimaryBg,i.colorBgContainer),lineType:i.lineType,borderRadius:i.borderRadius,borderRadiusXS:i.borderRadiusXS,borderRadiusSM:i.borderRadiusSM,borderRadiusLG:i.borderRadiusLG,fontWeightStrong:600,opacityLoading:.65,linkDecoration:"none",linkHoverDecoration:"none",linkFocusDecoration:"none",controlPaddingHorizontal:12,controlPaddingHorizontalSM:8,paddingXXS:i.sizeXXS,paddingXS:i.sizeXS,paddingSM:i.sizeSM,padding:i.size,paddingMD:i.sizeMD,paddingLG:i.sizeLG,paddingXL:i.sizeXL,paddingContentHorizontalLG:i.sizeLG,paddingContentVerticalLG:i.sizeMS,paddingContentHorizontal:i.sizeMS,paddingContentVertical:i.sizeSM,paddingContentHorizontalSM:i.size,paddingContentVerticalSM:i.sizeXS,marginXXS:i.sizeXXS,marginXS:i.sizeXS,marginSM:i.sizeSM,margin:i.size,marginMD:i.sizeMD,marginLG:i.sizeLG,marginXL:i.sizeXL,marginXXL:i.sizeXXL,boxShadow:`
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,boxShadowSecondary:`
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,boxShadowTertiary:`
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,screenXS:o,screenXSMin:o,screenXSMax:a-1,screenSM:a,screenSMMin:a,screenSMMax:s-1,screenMD:s,screenMDMin:s,screenMDMax:l-1,screenLG:l,screenLGMin:l,screenLGMax:c-1,screenXL:c,screenXLMin:c,screenXLMax:u-1,screenXXL:u,screenXXLMin:u,boxShadowPopoverArrow:"2px 2px 5px rgba(0, 0, 0, 0.05)",boxShadowCard:`
      0 1px 2px -2px ${new Hn("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new Hn("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new Hn("rgba(0, 0, 0, 0.09)").toRgbString()}
    `,boxShadowDrawerRight:`
      -6px 0 16px 0 rgba(0, 0, 0, 0.08),
      -3px 0 6px -4px rgba(0, 0, 0, 0.12),
      -9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,boxShadowDrawerLeft:`
      6px 0 16px 0 rgba(0, 0, 0, 0.08),
      3px 0 6px -4px rgba(0, 0, 0, 0.12),
      9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,boxShadowDrawerUp:`
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,boxShadowDrawerDown:`
      0 -6px 16px 0 rgba(0, 0, 0, 0.08),
      0 -3px 6px -4px rgba(0, 0, 0, 0.12),
      0 -9px 28px 8px rgba(0, 0, 0, 0.05)
    `,boxShadowTabsOverflowLeft:"inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)",boxShadowTabsOverflowRight:"inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)",boxShadowTabsOverflowTop:"inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)",boxShadowTabsOverflowBottom:"inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)"}),r)}var p0=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n};const IE={lineHeight:!0,lineHeightSM:!0,lineHeightLG:!0,lineHeightHeading1:!0,lineHeightHeading2:!0,lineHeightHeading3:!0,lineHeightHeading4:!0,lineHeightHeading5:!0,opacityLoading:!0,fontWeightStrong:!0,zIndexPopupBase:!0,zIndexBase:!0},NE={size:!0,sizeSM:!0,sizeLG:!0,sizeMD:!0,sizeXS:!0,sizeXXS:!0,sizeMS:!0,sizeXL:!0,sizeXXL:!0,sizeUnit:!0,sizeStep:!0,motionBase:!0,motionUnit:!0},gR={screenXS:!0,screenXSMin:!0,screenXSMax:!0,screenSM:!0,screenSMMin:!0,screenSMMax:!0,screenMD:!0,screenMDMin:!0,screenMDMax:!0,screenLG:!0,screenLGMin:!0,screenLGMax:!0,screenXL:!0,screenXLMin:!0,screenXLMax:!0,screenXXL:!0,screenXXLMin:!0},UE=(t,e,n)=>{const r=n.getDerivativeToken(t),{override:i}=e,o=p0(e,["override"]);let a=Object.assign(Object.assign({},r),{override:i});return a=DE(a),o&&Object.entries(o).forEach(s=>{let[l,c]=s;const{theme:u}=c,f=p0(c,["theme"]);let d=f;u&&(d=UE(Object.assign(Object.assign({},a),f),{override:f},u)),a[l]=d}),a};function Hi(){const{token:t,hashed:e,theme:n,override:r,cssVar:i}=st.useContext(PE),o=`${pR}-${e||""}`,a=n||RE,[s,l,c]=XC(a,[hl,t],{salt:o,override:r,getComputedToken:UE,formatToken:DE,cssVar:i&&{prefix:i.prefix,key:i.key,unitless:IE,ignore:NE,preserve:gR}});return[a,c,e?l:"",s,i]}const vR=1e3*60*10;let _R=function(){function t(){ii(this,t),this.map=new Map,this.objectIDMap=new WeakMap,this.nextID=0,this.lastAccessBeat=new Map,this.accessBeat=0}return oi(t,[{key:"set",value:function(n,r){this.clear();const i=this.getCompositeKey(n);this.map.set(i,r),this.lastAccessBeat.set(i,Date.now())}},{key:"get",value:function(n){const r=this.getCompositeKey(n),i=this.map.get(r);return this.lastAccessBeat.set(r,Date.now()),this.accessBeat+=1,i}},{key:"getCompositeKey",value:function(n){return n.map(i=>i&&typeof i=="object"?`obj_${this.getObjectID(i)}`:`${typeof i}_${i}`).join("|")}},{key:"getObjectID",value:function(n){if(this.objectIDMap.has(n))return this.objectIDMap.get(n);const r=this.nextID;return this.objectIDMap.set(n,r),this.nextID+=1,r}},{key:"clear",value:function(){if(this.accessBeat>1e4){const n=Date.now();this.lastAccessBeat.forEach((r,i)=>{n-r>vR&&(this.map.delete(i),this.lastAccessBeat.delete(i))}),this.accessBeat=0}}}])}();const m0=new _R;function yR(t,e){return st.useMemo(()=>{const n=m0.get(e);if(n)return n;const r=t();return m0.set(e,r),r},e)}function Pu(t){var e=I.useRef();e.current=t;var n=I.useCallback(function(){for(var r,i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return(r=e.current)===null||r===void 0?void 0:r.call.apply(r,[e].concat(o))},[]);return n}function yp(t){var e=I.useRef(!1),n=I.useState(t),r=_t(n,2),i=r[0],o=r[1];I.useEffect(function(){return e.current=!1,function(){e.current=!0}},[]);function a(s,l){l&&e.current||o(s)}return[i,a]}const xR=()=>({display:"inline-flex",alignItems:"center",color:"inherit",fontStyle:"normal",lineHeight:0,textAlign:"center",textTransform:"none",verticalAlign:"-0.125em",textRendering:"optimizeLegibility","-webkit-font-smoothing":"antialiased","-moz-osx-font-smoothing":"grayscale","> *":{lineHeight:1},svg:{display:"inline-block"}}),SR=t=>({a:{color:t.colorLink,textDecoration:t.linkDecoration,backgroundColor:"transparent",outline:"none",cursor:"pointer",transition:`color ${t.motionDurationSlow}`,"-webkit-text-decoration-skip":"objects","&:hover":{color:t.colorLinkHover},"&:active":{color:t.colorLinkActive},"&:active,\n  &:hover":{textDecoration:t.linkHoverDecoration,outline:0},"&:focus":{textDecoration:t.linkFocusDecoration,outline:0},"&[disabled]":{color:t.colorTextDisabled,cursor:"not-allowed"}}}),ER=(t,e,n,r)=>{const i=`[class^="${e}"], [class*=" ${e}"]`,o=n?`.${n}`:i,a={boxSizing:"border-box","&::before, &::after":{boxSizing:"border-box"}};let s={};return r!==!1&&(s={fontFamily:t.fontFamily,fontSize:t.fontSize}),{[o]:Object.assign(Object.assign(Object.assign({},s),a),{[i]:a})}},MR=t=>({outline:`${Jr(t.lineWidthFocus)} solid ${t.colorPrimaryBorder}`,outlineOffset:1,transition:"outline-offset 0s, outline 0s"}),wR=t=>({"&:focus-visible":Object.assign({},MR(t))});function TR(t){return t==="js"?{max:Math.max,min:Math.min}:{max:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return`max(${n.map(i=>Jr(i)).join(",")})`},min:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return`min(${n.map(i=>Jr(i)).join(",")})`}}}const OE=typeof CSSINJS_STATISTIC<"u";let xp=!0;function qi(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];if(!OE)return Object.assign.apply(Object,[{}].concat(e));xp=!1;const r={};return e.forEach(i=>{Object.keys(i).forEach(a=>{Object.defineProperty(r,a,{configurable:!0,enumerable:!0,get:()=>i[a]})})}),xp=!0,r}const g0={};function bR(){}const CR=t=>{let e,n=t,r=bR;return OE&&typeof Proxy<"u"&&(e=new Set,n=new Proxy(t,{get(i,o){return xp&&e.add(o),i[o]}}),r=(i,o)=>{var a;g0[i]={global:Array.from(e),component:Object.assign(Object.assign({},(a=g0[i])===null||a===void 0?void 0:a.component),o)}}),{token:n,keys:e,flush:r}},FE=(t,e)=>{const[n,r]=Hi();return hp({theme:n,token:r,hashId:"",path:["ant-design-icons",t],nonce:()=>e==null?void 0:e.nonce,layer:{name:"antd"}},()=>[{[`.${t}`]:Object.assign(Object.assign({},xR()),{[`.${t} .${t}-icon`]:{display:"block"}})}])},kE=(t,e,n)=>{var r;return typeof n=="function"?n(qi(e,(r=e[t])!==null&&r!==void 0?r:{})):n??{}},zE=(t,e,n,r)=>{const i=Object.assign({},e[t]);if(r!=null&&r.deprecatedTokens){const{deprecatedTokens:a}=r;a.forEach(s=>{let[l,c]=s;var u;(i!=null&&i[l]||i!=null&&i[c])&&((u=i[c])!==null&&u!==void 0||(i[c]=i==null?void 0:i[l]))})}const o=Object.assign(Object.assign({},n),i);return Object.keys(o).forEach(a=>{o[a]===e[a]&&delete o[a]}),o},v0=(t,e)=>`${[e,t.replace(/([A-Z]+)([A-Z][a-z]+)/g,"$1-$2").replace(/([a-z])([A-Z])/g,"$1-$2")].filter(Boolean).join("-")}`;function Zm(t,e,n){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const i=Array.isArray(t)?t:[t,t],[o]=i,a=i.join("-");return function(s){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:s;const[c,u,f,d,p]=Hi(),{getPrefixCls:_,iconPrefixCls:v,csp:m}=I.useContext(Er),h=_(),g=p?"css":"js",y=yR(()=>{const P=new Set;return p&&Object.keys(r.unitless||{}).forEach(T=>{P.add(Wc(T,p.prefix)),P.add(Wc(T,v0(o,p.prefix)))}),wC(g,P)},[g,o,p&&p.prefix]),{max:E,min:A}=TR(g),x={theme:c,token:d,hashId:f,nonce:()=>m==null?void 0:m.nonce,clientOnly:r.clientOnly,layer:{name:"antd"},order:r.order||-999};return hp(Object.assign(Object.assign({},x),{clientOnly:!1,path:["Shared",h]}),()=>[{"&":SR(d)}]),FE(v,m),[hp(Object.assign(Object.assign({},x),{path:[a,s,v]}),()=>{if(r.injectStyle===!1)return[];const{token:P,flush:T}=CR(d),w=kE(o,u,n),L=`.${s}`,V=zE(o,u,w,{deprecatedTokens:r.deprecatedTokens});p&&Object.keys(w).forEach(ee=>{w[ee]=`var(${Wc(ee,v0(o,p.prefix))})`});const F=qi(P,{componentCls:L,prefixCls:s,iconCls:`.${v}`,antCls:`.${h}`,calc:y,max:E,min:A},p?w:V),W=e(F,{hashId:f,prefixCls:s,rootPrefixCls:h,iconPrefixCls:v});return T(o,V),[r.resetStyle===!1?null:ER(F,s,l,r.resetFont),W]}),f]}}const AR=(t,e,n,r)=>{const i=Zm(t,e,n,Object.assign({resetStyle:!1,order:-998},r));return a=>{let{prefixCls:s,rootCls:l=s}=a;return i(s,l),null}},RR=(t,e,n)=>{const{unitless:r,injectStyle:i=!0,prefixToken:o}=n,a=l=>{let{rootCls:c,cssVar:u}=l;const[,f]=Hi();return SA({path:[t],prefix:u.prefix,key:u==null?void 0:u.key,unitless:r,ignore:NE,token:f,scope:c},()=>{const d=kE(t,f,e),p=zE(t,f,d,{deprecatedTokens:n==null?void 0:n.deprecatedTokens});return Object.keys(d).forEach(_=>{p[o(_)]=p[_],delete p[_]}),p}),null};return l=>{const[,,,,c]=Hi();return[u=>i&&c?st.createElement(st.Fragment,null,st.createElement(a,{rootCls:l,cssVar:c,component:t}),u):u,c==null?void 0:c.key]}},Tf=(t,e,n,r)=>{const i=Array.isArray(t)?t[0]:t;function o(f){return`${i}${f.slice(0,1).toUpperCase()}${f.slice(1)}`}const a=r&&r.unitless||{},s=Object.assign(Object.assign({},IE),{[o("zIndexPopup")]:!0});Object.keys(a).forEach(f=>{s[o(f)]=a[f]});const l=Object.assign(Object.assign({},r),{unitless:s,prefixToken:o}),c=Zm(t,e,n,l),u=RR(i,n,l);return function(f){let d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:f;const[,p]=c(f,d),[_,v]=u(d);return[_,p,v]}},PR=Object.assign({},Gu),{useId:_0}=PR,LR=()=>"",DR=typeof _0>"u"?LR:_0;function IR(t,e,n){var r;const i=t||{},o=i.inherit===!1||!e?Object.assign(Object.assign({},_p),{hashed:(r=e==null?void 0:e.hashed)!==null&&r!==void 0?r:_p.hashed,cssVar:e==null?void 0:e.cssVar}):e,a=DR();return jS(()=>{var s,l;if(!t)return e;const c=Object.assign({},o.components);Object.keys(t.components||{}).forEach(d=>{c[d]=Object.assign(Object.assign({},c[d]),t.components[d])});const u=`css-var-${a.replace(/:/g,"")}`,f=((s=i.cssVar)!==null&&s!==void 0?s:o.cssVar)&&Object.assign(Object.assign(Object.assign({prefix:n==null?void 0:n.prefixCls},typeof o.cssVar=="object"?o.cssVar:{}),typeof i.cssVar=="object"?i.cssVar:{}),{key:typeof i.cssVar=="object"&&((l=i.cssVar)===null||l===void 0?void 0:l.key)||u});return Object.assign(Object.assign(Object.assign({},o),i),{token:Object.assign(Object.assign({},o.token),i.token),components:c,cssVar:f})},[i,o],(s,l)=>s.some((c,u)=>{const f=l[u];return!gC(c,f,!0)}))}var NR=["children"],BE=I.createContext({});function UR(t){var e=t.children,n=ul(t,NR);return I.createElement(BE.Provider,{value:n},e)}var OR=function(t){_f(n,t);var e=yf(n);function n(){return ii(this,n),e.apply(this,arguments)}return oi(n,[{key:"render",value:function(){return this.props.children}}]),n}(I.Component);function FR(t){var e=I.useReducer(function(s){return s+1},0),n=_t(e,2),r=n[1],i=I.useRef(t),o=Pu(function(){return i.current}),a=Pu(function(s){i.current=typeof s=="function"?s(i.current):s,r()});return[o,a]}var gi="none",tc="appear",nc="enter",rc="leave",y0="none",pr="prepare",Ma="start",wa="active",Qm="end",HE="prepared";function x0(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit".concat(t)]="webkit".concat(e),n["Moz".concat(t)]="moz".concat(e),n["ms".concat(t)]="MS".concat(e),n["O".concat(t)]="o".concat(e.toLowerCase()),n}function kR(t,e){var n={animationend:x0("Animation","AnimationEnd"),transitionend:x0("Transition","TransitionEnd")};return t&&("AnimationEvent"in e||delete n.animationend.animation,"TransitionEvent"in e||delete n.transitionend.transition),n}var zR=kR(ai(),typeof window<"u"?window:{}),VE={};if(ai()){var BR=document.createElement("div");VE=BR.style}var ic={};function GE(t){if(ic[t])return ic[t];var e=zR[t];if(e)for(var n=Object.keys(e),r=n.length,i=0;i<r;i+=1){var o=n[i];if(Object.prototype.hasOwnProperty.call(e,o)&&o in VE)return ic[t]=e[o],ic[t]}return""}var WE=GE("animationend"),jE=GE("transitionend"),$E=!!(WE&&jE),S0=WE||"animationend",E0=jE||"transitionend";function M0(t,e){if(!t)return null;if(Nt(t)==="object"){var n=e.replace(/-\w/g,function(r){return r[1].toUpperCase()});return t[n]}return"".concat(t,"-").concat(e)}const HR=function(t){var e=I.useRef();function n(i){i&&(i.removeEventListener(E0,t),i.removeEventListener(S0,t))}function r(i){e.current&&e.current!==i&&n(e.current),i&&i!==e.current&&(i.addEventListener(E0,t),i.addEventListener(S0,t),e.current=i)}return I.useEffect(function(){return function(){n(e.current)}},[]),[r,n]};var XE=ai()?I.useLayoutEffect:I.useEffect;const VR=function(){var t=I.useRef(null);function e(){Io.cancel(t.current)}function n(r){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2;e();var o=Io(function(){i<=1?r({isCanceled:function(){return o!==t.current}}):n(r,i-1)});t.current=o}return I.useEffect(function(){return function(){e()}},[]),[n,e]};var GR=[pr,Ma,wa,Qm],WR=[pr,HE],YE=!1,jR=!0;function qE(t){return t===wa||t===Qm}const $R=function(t,e,n){var r=yp(y0),i=_t(r,2),o=i[0],a=i[1],s=VR(),l=_t(s,2),c=l[0],u=l[1];function f(){a(pr,!0)}var d=e?WR:GR;return XE(function(){if(o!==y0&&o!==Qm){var p=d.indexOf(o),_=d[p+1],v=n(o);v===YE?a(_,!0):_&&c(function(m){function h(){m.isCanceled()||a(_,!0)}v===!0?h():Promise.resolve(v).then(h)})}},[t,o]),I.useEffect(function(){return function(){u()}},[]),[f,o]};function XR(t,e,n,r){var i=r.motionEnter,o=i===void 0?!0:i,a=r.motionAppear,s=a===void 0?!0:a,l=r.motionLeave,c=l===void 0?!0:l,u=r.motionDeadline,f=r.motionLeaveImmediately,d=r.onAppearPrepare,p=r.onEnterPrepare,_=r.onLeavePrepare,v=r.onAppearStart,m=r.onEnterStart,h=r.onLeaveStart,g=r.onAppearActive,y=r.onEnterActive,E=r.onLeaveActive,A=r.onAppearEnd,x=r.onEnterEnd,M=r.onLeaveEnd,P=r.onVisibleChanged,T=yp(),w=_t(T,2),L=w[0],V=w[1],F=FR(gi),W=_t(F,2),ee=W[0],U=W[1],N=yp(null),R=_t(N,2),z=R[0],X=R[1],Y=ee(),oe=I.useRef(!1),xe=I.useRef(null);function q(){return n()}var ae=I.useRef(!1);function de(){U(gi),X(null,!0)}var fe=Pu(function(D){var b=ee();if(b!==gi){var Q=q();if(!(D&&!D.deadline&&D.target!==Q)){var se=ae.current,ie;b===tc&&se?ie=A==null?void 0:A(Q,D):b===nc&&se?ie=x==null?void 0:x(Q,D):b===rc&&se&&(ie=M==null?void 0:M(Q,D)),se&&ie!==!1&&de()}}}),$e=HR(fe),We=_t($e,1),et=We[0],B=function(b){switch(b){case tc:return ht(ht(ht({},pr,d),Ma,v),wa,g);case nc:return ht(ht(ht({},pr,p),Ma,m),wa,y);case rc:return ht(ht(ht({},pr,_),Ma,h),wa,E);default:return{}}},De=I.useMemo(function(){return B(Y)},[Y]),je=$R(Y,!t,function(D){if(D===pr){var b=De[pr];return b?b(q()):YE}if(Oe in De){var Q;X(((Q=De[Oe])===null||Q===void 0?void 0:Q.call(De,q(),null))||null)}return Oe===wa&&Y!==gi&&(et(q()),u>0&&(clearTimeout(xe.current),xe.current=setTimeout(function(){fe({deadline:!0})},u))),Oe===HE&&de(),jR}),dt=_t(je,2),Ne=dt[0],Oe=dt[1],Xe=qE(Oe);ae.current=Xe,XE(function(){V(e);var D=oe.current;oe.current=!0;var b;!D&&e&&s&&(b=tc),D&&e&&o&&(b=nc),(D&&!e&&c||!D&&f&&!e&&c)&&(b=rc);var Q=B(b);b&&(t||Q[pr])?(U(b),Ne()):U(gi)},[e]),I.useEffect(function(){(Y===tc&&!s||Y===nc&&!o||Y===rc&&!c)&&U(gi)},[s,o,c]),I.useEffect(function(){return function(){oe.current=!1,clearTimeout(xe.current)}},[]);var Be=I.useRef(!1);I.useEffect(function(){L&&(Be.current=!0),L!==void 0&&Y===gi&&((Be.current||L)&&(P==null||P(L)),Be.current=!0)},[L,Y]);var yt=z;return De[pr]&&Oe===Ma&&(yt=Ze({transition:"none"},yt)),[Y,Oe,yt,L??e]}function YR(t){var e=t;Nt(t)==="object"&&(e=t.transitionSupport);function n(i,o){return!!(i.motionName&&e&&o!==!1)}var r=I.forwardRef(function(i,o){var a=i.visible,s=a===void 0?!0:a,l=i.removeOnLeave,c=l===void 0?!0:l,u=i.forceRender,f=i.children,d=i.motionName,p=i.leavedClassName,_=i.eventProps,v=I.useContext(BE),m=v.motion,h=n(i,m),g=I.useRef(),y=I.useRef();function E(){try{return g.current instanceof HTMLElement?g.current:oC(y.current)}catch{return null}}var A=XR(h,s,E,i),x=_t(A,4),M=x[0],P=x[1],T=x[2],w=x[3],L=I.useRef(w);w&&(L.current=!0);var V=I.useCallback(function(z){g.current=z,$S(o,z)},[o]),F,W=Ze(Ze({},_),{},{visible:s});if(!f)F=null;else if(M===gi)w?F=f(Ze({},W),V):!c&&L.current&&p?F=f(Ze(Ze({},W),{},{className:p}),V):u||!c&&!p?F=f(Ze(Ze({},W),{},{style:{display:"none"}}),V):F=null;else{var ee;P===pr?ee="prepare":qE(P)?ee="active":P===Ma&&(ee="start");var U=M0(d,"".concat(M,"-").concat(ee));F=f(Ze(Ze({},W),{},{className:Sn(M0(d,M),ht(ht({},U,U&&ee),d,typeof d=="string")),style:T}),V)}if(I.isValidElement(F)&&XS(F)){var N=F,R=N.ref;R||(F=I.cloneElement(F,{ref:V}))}return I.createElement(OR,{ref:y},F)});return r.displayName="CSSMotion",r}const Jm=YR($E);var Sp="add",Ep="keep",Mp="remove",Ed="removed";function qR(t){var e;return t&&Nt(t)==="object"&&"key"in t?e=t:e={key:t},Ze(Ze({},e),{},{key:String(e.key)})}function wp(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return t.map(qR)}function KR(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],n=[],r=0,i=e.length,o=wp(t),a=wp(e);o.forEach(function(c){for(var u=!1,f=r;f<i;f+=1){var d=a[f];if(d.key===c.key){r<f&&(n=n.concat(a.slice(r,f).map(function(p){return Ze(Ze({},p),{},{status:Sp})})),r=f),n.push(Ze(Ze({},d),{},{status:Ep})),r+=1,u=!0;break}}u||n.push(Ze(Ze({},c),{},{status:Mp}))}),r<i&&(n=n.concat(a.slice(r).map(function(c){return Ze(Ze({},c),{},{status:Sp})})));var s={};n.forEach(function(c){var u=c.key;s[u]=(s[u]||0)+1});var l=Object.keys(s).filter(function(c){return s[c]>1});return l.forEach(function(c){n=n.filter(function(u){var f=u.key,d=u.status;return f!==c||d!==Mp}),n.forEach(function(u){u.key===c&&(u.status=Ep)})}),n}var ZR=["component","children","onVisibleChanged","onAllRemoved"],QR=["status"],JR=["eventProps","visible","children","motionName","motionAppear","motionEnter","motionLeave","motionLeaveImmediately","motionDeadline","removeOnLeave","leavedClassName","onAppearPrepare","onAppearStart","onAppearActive","onAppearEnd","onEnterStart","onEnterActive","onEnterEnd","onLeaveStart","onLeaveActive","onLeaveEnd"];function eP(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Jm,n=function(r){_f(o,r);var i=yf(o);function o(){var a;ii(this,o);for(var s=arguments.length,l=new Array(s),c=0;c<s;c++)l[c]=arguments[c];return a=i.call.apply(i,[this].concat(l)),ht(Mo(a),"state",{keyEntities:[]}),ht(Mo(a),"removeKey",function(u){var f=a.state.keyEntities,d=f.map(function(p){return p.key!==u?p:Ze(Ze({},p),{},{status:Ed})});return a.setState({keyEntities:d}),d.filter(function(p){var _=p.status;return _!==Ed}).length}),a}return oi(o,[{key:"render",value:function(){var s=this,l=this.state.keyEntities,c=this.props,u=c.component,f=c.children,d=c.onVisibleChanged,p=c.onAllRemoved,_=ul(c,ZR),v=u||I.Fragment,m={};return JR.forEach(function(h){m[h]=_[h],delete _[h]}),delete _.keys,I.createElement(v,_,l.map(function(h,g){var y=h.status,E=ul(h,QR),A=y===Sp||y===Ep;return I.createElement(e,Va({},m,{key:E.key,visible:A,eventProps:E,onVisibleChanged:function(M){if(d==null||d(M,{key:E.key}),!M){var P=s.removeKey(E.key);P===0&&p&&p()}}}),function(x,M){return f(Ze(Ze({},x),{},{index:g}),M)})}))}}],[{key:"getDerivedStateFromProps",value:function(s,l){var c=s.keys,u=l.keyEntities,f=wp(c),d=KR(u,f);return{keyEntities:d.filter(function(p){var _=u.find(function(v){var m=v.key;return p.key===m});return!(_&&_.status===Ed&&p.status===Mp)})}}}]),o}(I.Component);return ht(n,"defaultProps",{component:"div"}),n}eP($E);function tP(t){const{children:e}=t,[,n]=Hi(),{motion:r}=n,i=I.useRef(!1);return i.current=i.current||r===!1,i.current?I.createElement(UR,{motion:r},e):e}const nP=()=>null;var rP=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n};const iP=["getTargetContainer","getPopupContainer","renderEmpty","input","pagination","form","select","button"],KE="ant";let ZE;function oP(){return ZE||KE}function aP(t){return Object.keys(t).some(e=>e.endsWith("Color"))}const sP=t=>{const{prefixCls:e,iconPrefixCls:n,theme:r,holderRender:i}=t;e!==void 0&&(ZE=e),r&&aP(r)&&uR(oP(),r)},lP=t=>{const{children:e,csp:n,autoInsertSpaceInButton:r,alert:i,anchor:o,form:a,locale:s,componentSize:l,direction:c,space:u,virtual:f,dropdownMatchSelectWidth:d,popupMatchSelectWidth:p,popupOverflow:_,legacyLocale:v,parentContext:m,iconPrefixCls:h,theme:g,componentDisabled:y,segmented:E,statistic:A,spin:x,calendar:M,carousel:P,cascader:T,collapse:w,typography:L,checkbox:V,descriptions:F,divider:W,drawer:ee,skeleton:U,steps:N,image:R,layout:z,list:X,mentions:Y,modal:oe,progress:xe,result:q,slider:ae,breadcrumb:de,menu:fe,pagination:$e,input:We,textArea:et,empty:B,badge:De,radio:je,rate:dt,switch:Ne,transfer:Oe,avatar:Xe,message:Be,tag:yt,table:D,card:b,tabs:Q,timeline:se,timePicker:ie,upload:le,notification:Le,tree:ge,colorPicker:me,datePicker:ke,rangePicker:pe,flex:be,wave:ot,dropdown:Ue,warning:ye,tour:qe,floatButtonGroup:Ke}=t,wt=I.useCallback((nt,rt)=>{const{prefixCls:Ct}=t;if(rt)return rt;const O=Ct||m.getPrefixCls("");return nt?`${O}-${nt}`:O},[m.getPrefixCls,t.prefixCls]),S=h||m.iconPrefixCls||LE,te=n||m.csp;FE(S,te);const Z=IR(g,m.theme,{prefixCls:wt("")}),ne={csp:te,autoInsertSpaceInButton:r,alert:i,anchor:o,locale:s||v,direction:c,space:u,virtual:f,popupMatchSelectWidth:p??d,popupOverflow:_,getPrefixCls:wt,iconPrefixCls:S,theme:Z,segmented:E,statistic:A,spin:x,calendar:M,carousel:P,cascader:T,collapse:w,typography:L,checkbox:V,descriptions:F,divider:W,drawer:ee,skeleton:U,steps:N,image:R,input:We,textArea:et,layout:z,list:X,mentions:Y,modal:oe,progress:xe,result:q,slider:ae,breadcrumb:de,menu:fe,pagination:$e,empty:B,badge:De,radio:je,rate:dt,switch:Ne,transfer:Oe,avatar:Xe,message:Be,tag:yt,table:D,card:b,tabs:Q,timeline:se,timePicker:ie,upload:le,notification:Le,tree:ge,colorPicker:me,datePicker:ke,rangePicker:pe,flex:be,wave:ot,dropdown:Ue,warning:ye,tour:qe,floatButtonGroup:Ke},ce=Object.assign({},m);Object.keys(ne).forEach(nt=>{ne[nt]!==void 0&&(ce[nt]=ne[nt])}),iP.forEach(nt=>{const rt=t[nt];rt&&(ce[nt]=rt)}),typeof r<"u"&&(ce.button=Object.assign({autoInsertSpace:r},ce.button));const Re=jS(()=>ce,ce,(nt,rt)=>{const Ct=Object.keys(nt),O=Object.keys(rt);return Ct.length!==O.length||Ct.some(H=>nt[H]!==rt[H])}),Ye=I.useMemo(()=>({prefixCls:S,csp:te}),[S,te]);let tt=I.createElement(I.Fragment,null,I.createElement(nP,{dropdownMatchSelectWidth:d}),e);const Pt=I.useMemo(()=>{var nt,rt,Ct,O;return bA(((nt=wf.Form)===null||nt===void 0?void 0:nt.defaultValidateMessages)||{},((Ct=(rt=Re.locale)===null||rt===void 0?void 0:rt.Form)===null||Ct===void 0?void 0:Ct.defaultValidateMessages)||{},((O=Re.form)===null||O===void 0?void 0:O.validateMessages)||{},(a==null?void 0:a.validateMessages)||{})},[Re,a==null?void 0:a.validateMessages]);Object.keys(Pt).length>0&&(tt=I.createElement(AA.Provider,{value:Pt},tt)),s&&(tt=I.createElement(IA,{locale:s,_ANT_MARK__:DA},tt)),(S||te)&&(tt=I.createElement(Km.Provider,{value:Ye},tt)),l&&(tt=I.createElement(dR,{size:l},tt)),tt=I.createElement(tP,null,tt);const mt=I.useMemo(()=>{const nt=Z||{},{algorithm:rt,token:Ct,components:O,cssVar:H}=nt,J=rP(nt,["algorithm","token","components","cssVar"]),re=rt&&(!Array.isArray(rt)||rt.length>0)?lp(rt):RE,_e={};Object.entries(O||{}).forEach(Fe=>{let[ve,Qe]=Fe;const Me=Object.assign({},Qe);"algorithm"in Me&&(Me.algorithm===!0?Me.theme=re:(Array.isArray(Me.algorithm)||typeof Me.algorithm=="function")&&(Me.theme=lp(Me.algorithm)),delete Me.algorithm),_e[ve]=Me});const Ce=Object.assign(Object.assign({},hl),Ct);return Object.assign(Object.assign({},J),{theme:re,token:Ce,components:_e,override:Object.assign({override:Ce},_e),cssVar:H})},[Z]);return g&&(tt=I.createElement(PE.Provider,{value:mt},tt)),Re.warning&&(tt=I.createElement(CA.Provider,{value:Re.warning},tt)),y!==void 0&&(tt=I.createElement(fR,{disabled:y},tt)),I.createElement(Er.Provider,{value:Re},tt)},Al=t=>{const e=I.useContext(Er),n=I.useContext(wE);return I.createElement(lP,Object.assign({parentContext:e,legacyLocale:n},t))};Al.ConfigContext=Er;Al.SizeContext=ja;Al.config=sP;Al.useConfig=hR;Object.defineProperty(Al,"SizeContext",{get:()=>ja});function QE(t){var e;return t==null||(e=t.getRootNode)===null||e===void 0?void 0:e.call(t)}function cP(t){return QE(t)instanceof ShadowRoot}function uP(t){return cP(t)?QE(t):null}function fP(t){return t.replace(/-(.)/g,function(e,n){return n.toUpperCase()})}function dP(t,e){Cl(t,"[@ant-design/icons] ".concat(e))}function w0(t){return Nt(t)==="object"&&typeof t.name=="string"&&typeof t.theme=="string"&&(Nt(t.icon)==="object"||typeof t.icon=="function")}function T0(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Object.keys(t).reduce(function(e,n){var r=t[n];switch(n){case"class":e.className=r,delete e.class;break;default:delete e[n],e[fP(n)]=r}return e},{})}function Tp(t,e,n){return n?st.createElement(t.tag,Ze(Ze({key:e},T0(t.attrs)),n),(t.children||[]).map(function(r,i){return Tp(r,"".concat(e,"-").concat(t.tag,"-").concat(i))})):st.createElement(t.tag,Ze({key:e},T0(t.attrs)),(t.children||[]).map(function(r,i){return Tp(r,"".concat(e,"-").concat(t.tag,"-").concat(i))}))}function JE(t){return No(t)[0]}function eM(t){return t?Array.isArray(t)?t:[t]:[]}var hP=`
.anticon {
  display: inline-flex;
  align-items: center;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`,pP=function(e){var n=I.useContext(Km),r=n.csp,i=n.prefixCls,o=hP;i&&(o=o.replace(/anticon/g,i)),I.useEffect(function(){var a=e.current,s=uP(a);wo(o,"@ant-design-icons",{prepend:!0,csp:r,attachTo:s})},[])},mP=["icon","className","onClick","style","primaryColor","secondaryColor"],Hs={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1};function gP(t){var e=t.primaryColor,n=t.secondaryColor;Hs.primaryColor=e,Hs.secondaryColor=n||JE(e),Hs.calculated=!!n}function vP(){return Ze({},Hs)}var ns=function(e){var n=e.icon,r=e.className,i=e.onClick,o=e.style,a=e.primaryColor,s=e.secondaryColor,l=ul(e,mP),c=I.useRef(),u=Hs;if(a&&(u={primaryColor:a,secondaryColor:s||JE(a)}),pP(c),dP(w0(n),"icon should be icon definiton, but got ".concat(n)),!w0(n))return null;var f=n;return f&&typeof f.icon=="function"&&(f=Ze(Ze({},f),{},{icon:f.icon(u.primaryColor,u.secondaryColor)})),Tp(f.icon,"svg-".concat(f.name),Ze(Ze({className:r,onClick:i,style:o,"data-icon":f.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},l),{},{ref:c}))};ns.displayName="IconReact";ns.getTwoToneColors=vP;ns.setTwoToneColors=gP;function tM(t){var e=eM(t),n=_t(e,2),r=n[0],i=n[1];return ns.setTwoToneColors({primaryColor:r,secondaryColor:i})}function _P(){var t=ns.getTwoToneColors();return t.calculated?[t.primaryColor,t.secondaryColor]:t.primaryColor}var yP=["className","icon","spin","rotate","tabIndex","onClick","twoToneColor"];tM(KA.primary);var bf=I.forwardRef(function(t,e){var n=t.className,r=t.icon,i=t.spin,o=t.rotate,a=t.tabIndex,s=t.onClick,l=t.twoToneColor,c=ul(t,yP),u=I.useContext(Km),f=u.prefixCls,d=f===void 0?"anticon":f,p=u.rootClassName,_=Sn(p,d,ht(ht({},"".concat(d,"-").concat(r.name),!!r.name),"".concat(d,"-spin"),!!i||r.name==="loading"),n),v=a;v===void 0&&s&&(v=-1);var m=o?{msTransform:"rotate(".concat(o,"deg)"),transform:"rotate(".concat(o,"deg)")}:void 0,h=eM(l),g=_t(h,2),y=g[0],E=g[1];return I.createElement("span",Va({role:"img","aria-label":r.name},c,{ref:e,tabIndex:v,onClick:s,className:_}),I.createElement(ns,{icon:r,primaryColor:y,secondaryColor:E,style:m}))});bf.displayName="AntdIcon";bf.getTwoToneColor=_P;bf.setTwoToneColor=tM;function xP(t){return t&&st.isValidElement(t)&&t.type===st.Fragment}const SP=(t,e,n)=>st.isValidElement(t)?st.cloneElement(t,typeof n=="function"?n(t.props||{}):n):e;function nM(t,e){return SP(t,t,e)}var EP={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"}}]},name:"loading",theme:"outlined"},MP=function(e,n){return I.createElement(bf,Va({},e,{ref:n,icon:EP}))},wP=I.forwardRef(MP);function pl(){pl=function(){return e};var t,e={},n=Object.prototype,r=n.hasOwnProperty,i=Object.defineProperty||function(U,N,R){U[N]=R.value},o=typeof Symbol=="function"?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function c(U,N,R){return Object.defineProperty(U,N,{value:R,enumerable:!0,configurable:!0,writable:!0}),U[N]}try{c({},"")}catch{c=function(R,z,X){return R[z]=X}}function u(U,N,R,z){var X=N&&N.prototype instanceof h?N:h,Y=Object.create(X.prototype),oe=new W(z||[]);return i(Y,"_invoke",{value:w(U,R,oe)}),Y}function f(U,N,R){try{return{type:"normal",arg:U.call(N,R)}}catch(z){return{type:"throw",arg:z}}}e.wrap=u;var d="suspendedStart",p="suspendedYield",_="executing",v="completed",m={};function h(){}function g(){}function y(){}var E={};c(E,a,function(){return this});var A=Object.getPrototypeOf,x=A&&A(A(ee([])));x&&x!==n&&r.call(x,a)&&(E=x);var M=y.prototype=h.prototype=Object.create(E);function P(U){["next","throw","return"].forEach(function(N){c(U,N,function(R){return this._invoke(N,R)})})}function T(U,N){function R(X,Y,oe,xe){var q=f(U[X],U,Y);if(q.type!=="throw"){var ae=q.arg,de=ae.value;return de&&Nt(de)=="object"&&r.call(de,"__await")?N.resolve(de.__await).then(function(fe){R("next",fe,oe,xe)},function(fe){R("throw",fe,oe,xe)}):N.resolve(de).then(function(fe){ae.value=fe,oe(ae)},function(fe){return R("throw",fe,oe,xe)})}xe(q.arg)}var z;i(this,"_invoke",{value:function(Y,oe){function xe(){return new N(function(q,ae){R(Y,oe,q,ae)})}return z=z?z.then(xe,xe):xe()}})}function w(U,N,R){var z=d;return function(X,Y){if(z===_)throw Error("Generator is already running");if(z===v){if(X==="throw")throw Y;return{value:t,done:!0}}for(R.method=X,R.arg=Y;;){var oe=R.delegate;if(oe){var xe=L(oe,R);if(xe){if(xe===m)continue;return xe}}if(R.method==="next")R.sent=R._sent=R.arg;else if(R.method==="throw"){if(z===d)throw z=v,R.arg;R.dispatchException(R.arg)}else R.method==="return"&&R.abrupt("return",R.arg);z=_;var q=f(U,N,R);if(q.type==="normal"){if(z=R.done?v:p,q.arg===m)continue;return{value:q.arg,done:R.done}}q.type==="throw"&&(z=v,R.method="throw",R.arg=q.arg)}}}function L(U,N){var R=N.method,z=U.iterator[R];if(z===t)return N.delegate=null,R==="throw"&&U.iterator.return&&(N.method="return",N.arg=t,L(U,N),N.method==="throw")||R!=="return"&&(N.method="throw",N.arg=new TypeError("The iterator does not provide a '"+R+"' method")),m;var X=f(z,U.iterator,N.arg);if(X.type==="throw")return N.method="throw",N.arg=X.arg,N.delegate=null,m;var Y=X.arg;return Y?Y.done?(N[U.resultName]=Y.value,N.next=U.nextLoc,N.method!=="return"&&(N.method="next",N.arg=t),N.delegate=null,m):Y:(N.method="throw",N.arg=new TypeError("iterator result is not an object"),N.delegate=null,m)}function V(U){var N={tryLoc:U[0]};1 in U&&(N.catchLoc=U[1]),2 in U&&(N.finallyLoc=U[2],N.afterLoc=U[3]),this.tryEntries.push(N)}function F(U){var N=U.completion||{};N.type="normal",delete N.arg,U.completion=N}function W(U){this.tryEntries=[{tryLoc:"root"}],U.forEach(V,this),this.reset(!0)}function ee(U){if(U||U===""){var N=U[a];if(N)return N.call(U);if(typeof U.next=="function")return U;if(!isNaN(U.length)){var R=-1,z=function X(){for(;++R<U.length;)if(r.call(U,R))return X.value=U[R],X.done=!1,X;return X.value=t,X.done=!0,X};return z.next=z}}throw new TypeError(Nt(U)+" is not iterable")}return g.prototype=y,i(M,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:g,configurable:!0}),g.displayName=c(y,l,"GeneratorFunction"),e.isGeneratorFunction=function(U){var N=typeof U=="function"&&U.constructor;return!!N&&(N===g||(N.displayName||N.name)==="GeneratorFunction")},e.mark=function(U){return Object.setPrototypeOf?Object.setPrototypeOf(U,y):(U.__proto__=y,c(U,l,"GeneratorFunction")),U.prototype=Object.create(M),U},e.awrap=function(U){return{__await:U}},P(T.prototype),c(T.prototype,s,function(){return this}),e.AsyncIterator=T,e.async=function(U,N,R,z,X){X===void 0&&(X=Promise);var Y=new T(u(U,N,R,z),X);return e.isGeneratorFunction(N)?Y:Y.next().then(function(oe){return oe.done?oe.value:Y.next()})},P(M),c(M,l,"Generator"),c(M,a,function(){return this}),c(M,"toString",function(){return"[object Generator]"}),e.keys=function(U){var N=Object(U),R=[];for(var z in N)R.push(z);return R.reverse(),function X(){for(;R.length;){var Y=R.pop();if(Y in N)return X.value=Y,X.done=!1,X}return X.done=!0,X}},e.values=ee,W.prototype={constructor:W,reset:function(N){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(F),!N)for(var R in this)R.charAt(0)==="t"&&r.call(this,R)&&!isNaN(+R.slice(1))&&(this[R]=t)},stop:function(){this.done=!0;var N=this.tryEntries[0].completion;if(N.type==="throw")throw N.arg;return this.rval},dispatchException:function(N){if(this.done)throw N;var R=this;function z(ae,de){return oe.type="throw",oe.arg=N,R.next=ae,de&&(R.method="next",R.arg=t),!!de}for(var X=this.tryEntries.length-1;X>=0;--X){var Y=this.tryEntries[X],oe=Y.completion;if(Y.tryLoc==="root")return z("end");if(Y.tryLoc<=this.prev){var xe=r.call(Y,"catchLoc"),q=r.call(Y,"finallyLoc");if(xe&&q){if(this.prev<Y.catchLoc)return z(Y.catchLoc,!0);if(this.prev<Y.finallyLoc)return z(Y.finallyLoc)}else if(xe){if(this.prev<Y.catchLoc)return z(Y.catchLoc,!0)}else{if(!q)throw Error("try statement without catch or finally");if(this.prev<Y.finallyLoc)return z(Y.finallyLoc)}}}},abrupt:function(N,R){for(var z=this.tryEntries.length-1;z>=0;--z){var X=this.tryEntries[z];if(X.tryLoc<=this.prev&&r.call(X,"finallyLoc")&&this.prev<X.finallyLoc){var Y=X;break}}Y&&(N==="break"||N==="continue")&&Y.tryLoc<=R&&R<=Y.finallyLoc&&(Y=null);var oe=Y?Y.completion:{};return oe.type=N,oe.arg=R,Y?(this.method="next",this.next=Y.finallyLoc,m):this.complete(oe)},complete:function(N,R){if(N.type==="throw")throw N.arg;return N.type==="break"||N.type==="continue"?this.next=N.arg:N.type==="return"?(this.rval=this.arg=N.arg,this.method="return",this.next="end"):N.type==="normal"&&R&&(this.next=R),m},finish:function(N){for(var R=this.tryEntries.length-1;R>=0;--R){var z=this.tryEntries[R];if(z.finallyLoc===N)return this.complete(z.completion,z.afterLoc),F(z),m}},catch:function(N){for(var R=this.tryEntries.length-1;R>=0;--R){var z=this.tryEntries[R];if(z.tryLoc===N){var X=z.completion;if(X.type==="throw"){var Y=X.arg;F(z)}return Y}}throw Error("illegal catch attempt")},delegateYield:function(N,R,z){return this.delegate={iterator:ee(N),resultName:R,nextLoc:z},this.method==="next"&&(this.arg=t),m}},e}function b0(t,e,n,r,i,o,a){try{var s=t[o](a),l=s.value}catch(c){return void n(c)}s.done?e(l):Promise.resolve(l).then(r,i)}function rM(t){return function(){var e=this,n=arguments;return new Promise(function(r,i){var o=t.apply(e,n);function a(l){b0(o,r,i,a,s,"next",l)}function s(l){b0(o,r,i,a,s,"throw",l)}a(void 0)})}}var Rl=Ze({},wS),TP=Rl.version,bP=Rl.render,CP=Rl.unmountComponentAtNode,Cf;try{var AP=Number((TP||"").split(".")[0]);AP>=18&&(Cf=Rl.createRoot)}catch{}function C0(t){var e=Rl.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;e&&Nt(e)==="object"&&(e.usingClientEntryPoint=t)}var Lu="__rc_react_root__";function RP(t,e){C0(!0);var n=e[Lu]||Cf(e);C0(!1),n.render(t),e[Lu]=n}function PP(t,e){bP(t,e)}function LP(t,e){if(Cf){RP(t,e);return}PP(t,e)}function DP(t){return bp.apply(this,arguments)}function bp(){return bp=rM(pl().mark(function t(e){return pl().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",Promise.resolve().then(function(){var i;(i=e[Lu])===null||i===void 0||i.unmount(),delete e[Lu]}));case 1:case"end":return r.stop()}},t)})),bp.apply(this,arguments)}function IP(t){CP(t)}function NP(t){return Cp.apply(this,arguments)}function Cp(){return Cp=rM(pl().mark(function t(e){return pl().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(Cf===void 0){r.next=2;break}return r.abrupt("return",DP(e));case 2:IP(e);case 3:case"end":return r.stop()}},t)})),Cp.apply(this,arguments)}const UP=function(t){if(!t)return!1;if(t instanceof Element){if(t.offsetParent)return!0;if(t.getBBox){var e=t.getBBox(),n=e.width,r=e.height;if(n||r)return!0}if(t.getBoundingClientRect){var i=t.getBoundingClientRect(),o=i.width,a=i.height;if(o||a)return!0}}return!1},OP=t=>{const{componentCls:e,colorPrimary:n}=t;return{[e]:{position:"absolute",background:"transparent",pointerEvents:"none",boxSizing:"border-box",color:`var(--wave-color, ${n})`,boxShadow:"0 0 0 0 currentcolor",opacity:.2,"&.wave-motion-appear":{transition:[`box-shadow 0.4s ${t.motionEaseOutCirc}`,`opacity 2s ${t.motionEaseOutCirc}`].join(","),"&-active":{boxShadow:"0 0 0 6px currentcolor",opacity:0},"&.wave-quick":{transition:[`box-shadow ${t.motionDurationSlow} ${t.motionEaseInOut}`,`opacity ${t.motionDurationSlow} ${t.motionEaseInOut}`].join(",")}}}}},FP=Zm("Wave",t=>[OP(t)]),iM=`${KE}-wave-target`;function kP(t){const e=(t||"").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);return e&&e[1]&&e[2]&&e[3]?!(e[1]===e[2]&&e[2]===e[3]):!0}function Md(t){return t&&t!=="#fff"&&t!=="#ffffff"&&t!=="rgb(255, 255, 255)"&&t!=="rgba(255, 255, 255, 1)"&&kP(t)&&!/rgba\((?:\d*, ){3}0\)/.test(t)&&t!=="transparent"}function zP(t){const{borderTopColor:e,borderColor:n,backgroundColor:r}=getComputedStyle(t);return Md(e)?e:Md(n)?n:Md(r)?r:null}function wd(t){return Number.isNaN(t)?0:t}const BP=t=>{const{className:e,target:n,component:r}=t,i=I.useRef(null),[o,a]=I.useState(null),[s,l]=I.useState([]),[c,u]=I.useState(0),[f,d]=I.useState(0),[p,_]=I.useState(0),[v,m]=I.useState(0),[h,g]=I.useState(!1),y={left:c,top:f,width:p,height:v,borderRadius:s.map(x=>`${x}px`).join(" ")};o&&(y["--wave-color"]=o);function E(){const x=getComputedStyle(n);a(zP(n));const M=x.position==="static",{borderLeftWidth:P,borderTopWidth:T}=x;u(M?n.offsetLeft:wd(-parseFloat(P))),d(M?n.offsetTop:wd(-parseFloat(T))),_(n.offsetWidth),m(n.offsetHeight);const{borderTopLeftRadius:w,borderTopRightRadius:L,borderBottomLeftRadius:V,borderBottomRightRadius:F}=x;l([w,L,F,V].map(W=>wd(parseFloat(W))))}if(I.useEffect(()=>{if(n){const x=Io(()=>{E(),g(!0)});let M;return typeof ResizeObserver<"u"&&(M=new ResizeObserver(E),M.observe(n)),()=>{Io.cancel(x),M==null||M.disconnect()}}},[]),!h)return null;const A=(r==="Checkbox"||r==="Radio")&&(n==null?void 0:n.classList.contains(iM));return I.createElement(Jm,{visible:!0,motionAppear:!0,motionName:"wave-motion",motionDeadline:5e3,onAppearEnd:(x,M)=>{var P;if(M.deadline||M.propertyName==="opacity"){const T=(P=i.current)===null||P===void 0?void 0:P.parentElement;NP(T).then(()=>{T==null||T.remove()})}return!1}},(x,M)=>{let{className:P}=x;return I.createElement("div",{ref:Vm(i,M),className:Sn(e,P,{"wave-quick":A}),style:y})})},HP=(t,e)=>{var n;const{component:r}=e;if(r==="Checkbox"&&!(!((n=t.querySelector("input"))===null||n===void 0)&&n.checked))return;const i=document.createElement("div");i.style.position="absolute",i.style.left="0px",i.style.top="0px",t==null||t.insertBefore(i,t==null?void 0:t.firstChild),LP(I.createElement(BP,Object.assign({},e,{target:t})),i)},VP=(t,e,n)=>{const{wave:r}=I.useContext(Er),[,i,o]=Hi(),a=Pu(c=>{const u=t.current;if(r!=null&&r.disabled||!u)return;const f=u.querySelector(`.${iM}`)||u,{showEffect:d}=r||{};(d||HP)(f,{className:e,token:i,component:n,event:c,hashId:o})}),s=I.useRef();return c=>{Io.cancel(s.current),s.current=Io(()=>{a(c)})}},GP=t=>{const{children:e,disabled:n,component:r}=t,{getPrefixCls:i}=I.useContext(Er),o=I.useRef(null),a=i("wave"),[,s]=FP(a),l=VP(o,Sn(a,s),r);if(st.useEffect(()=>{const u=o.current;if(!u||u.nodeType!==1||n)return;const f=d=>{!UP(d.target)||!u.getAttribute||u.getAttribute("disabled")||u.disabled||u.className.includes("disabled")||u.className.includes("-leave")||l(d)};return u.addEventListener("click",f,!0),()=>{u.removeEventListener("click",f,!0)}},[n]),!st.isValidElement(e))return e??null;const c=XS(e)?Vm(e.ref,o):o;return nM(e,{ref:c})},oM=t=>{const e=st.useContext(ja);return st.useMemo(()=>t?typeof t=="string"?t??e:t instanceof Function?t(e):e:e,[t,e])},WP=t=>{const{componentCls:e}=t;return{[e]:{"&-block":{display:"flex",width:"100%"},"&-vertical":{flexDirection:"column"}}}},jP=t=>{const{componentCls:e,antCls:n}=t;return{[e]:{display:"inline-flex","&-rtl":{direction:"rtl"},"&-vertical":{flexDirection:"column"},"&-align":{flexDirection:"column","&-center":{alignItems:"center"},"&-start":{alignItems:"flex-start"},"&-end":{alignItems:"flex-end"},"&-baseline":{alignItems:"baseline"}},[`${e}-item:empty`]:{display:"none"},[`${e}-item > ${n}-badge-not-a-wrapper:only-child`]:{display:"block"}}}},$P=t=>{const{componentCls:e}=t;return{[e]:{"&-gap-row-small":{rowGap:t.spaceGapSmallSize},"&-gap-row-middle":{rowGap:t.spaceGapMiddleSize},"&-gap-row-large":{rowGap:t.spaceGapLargeSize},"&-gap-col-small":{columnGap:t.spaceGapSmallSize},"&-gap-col-middle":{columnGap:t.spaceGapMiddleSize},"&-gap-col-large":{columnGap:t.spaceGapLargeSize}}}},aM=Tf("Space",t=>{const e=qi(t,{spaceGapSmallSize:t.paddingXS,spaceGapMiddleSize:t.padding,spaceGapLargeSize:t.paddingLG});return[jP(e),$P(e),WP(e)]},()=>({}),{resetStyle:!1});var sM=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n};const eg=I.createContext(null),XP=(t,e)=>{const n=I.useContext(eg),r=I.useMemo(()=>{if(!n)return"";const{compactDirection:i,isFirstItem:o,isLastItem:a}=n,s=i==="vertical"?"-vertical-":"-";return Sn(`${t}-compact${s}item`,{[`${t}-compact${s}first-item`]:o,[`${t}-compact${s}last-item`]:a,[`${t}-compact${s}item-rtl`]:e==="rtl"})},[t,e,n]);return{compactSize:n==null?void 0:n.compactSize,compactDirection:n==null?void 0:n.compactDirection,compactItemClassnames:r}},YP=t=>{var{children:e}=t,n=sM(t,["children"]);return I.createElement(eg.Provider,{value:n},e)},qP=t=>{const{getPrefixCls:e,direction:n}=I.useContext(Er),{size:r,direction:i,block:o,prefixCls:a,className:s,rootClassName:l,children:c}=t,u=sM(t,["size","direction","block","prefixCls","className","rootClassName","children"]),f=oM(y=>r??y),d=e("space-compact",a),[p,_]=aM(d),v=Sn(d,_,{[`${d}-rtl`]:n==="rtl",[`${d}-block`]:o,[`${d}-vertical`]:i==="vertical"},s,l),m=I.useContext(eg),h=bu(c),g=I.useMemo(()=>h.map((y,E)=>{const A=y&&y.key||`${d}-item-${E}`;return I.createElement(YP,{key:A,compactSize:f,compactDirection:i,isFirstItem:E===0&&(!m||(m==null?void 0:m.isFirstItem)),isLastItem:E===h.length-1&&(!m||(m==null?void 0:m.isLastItem))},y)}),[r,h,m]);return h.length===0?null:p(I.createElement("div",Object.assign({className:v},u),g))};var KP=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n};const lM=I.createContext(void 0),ZP=t=>{const{getPrefixCls:e,direction:n}=I.useContext(Er),{prefixCls:r,size:i,className:o}=t,a=KP(t,["prefixCls","size","className"]),s=e("btn-group",r),[,,l]=Hi();let c="";switch(i){case"large":c="lg";break;case"small":c="sm";break}const u=Sn(s,{[`${s}-${c}`]:c,[`${s}-rtl`]:n==="rtl"},o,l);return I.createElement(lM.Provider,{value:i},I.createElement("div",Object.assign({},a,{className:u})))},A0=/^[\u4e00-\u9fa5]{2}$/,Ap=A0.test.bind(A0);function R0(t){return typeof t=="string"}function Td(t){return t==="text"||t==="link"}function QP(t,e){if(t==null)return;const n=e?" ":"";return typeof t!="string"&&typeof t!="number"&&R0(t.type)&&Ap(t.props.children)?nM(t,{children:t.props.children.split("").join(n)}):R0(t)?Ap(t)?st.createElement("span",null,t.split("").join(n)):st.createElement("span",null,t):xP(t)?st.createElement("span",null,t):t}function JP(t,e){let n=!1;const r=[];return st.Children.forEach(t,i=>{const o=typeof i,a=o==="string"||o==="number";if(n&&a){const s=r.length-1,l=r[s];r[s]=`${l}${i}`}else r.push(i);n=a}),st.Children.map(r,i=>QP(i,e))}const cM=I.forwardRef((t,e)=>{const{className:n,style:r,children:i,prefixCls:o}=t,a=Sn(`${o}-icon`,n);return st.createElement("span",{ref:e,className:a,style:r},i)}),P0=I.forwardRef((t,e)=>{const{prefixCls:n,className:r,style:i,iconClassName:o}=t,a=Sn(`${n}-loading-icon`,r);return st.createElement(cM,{prefixCls:n,className:a,style:i,ref:e},st.createElement(wP,{className:o}))}),bd=()=>({width:0,opacity:0,transform:"scale(0)"}),Cd=t=>({width:t.scrollWidth,opacity:1,transform:"scale(1)"}),e2=t=>{const{prefixCls:e,loading:n,existIcon:r,className:i,style:o}=t,a=!!n;return r?st.createElement(P0,{prefixCls:e,className:i,style:o}):st.createElement(Jm,{visible:a,motionName:`${e}-loading-icon-motion`,motionLeave:a,removeOnLeave:!0,onAppearStart:bd,onAppearActive:Cd,onEnterStart:bd,onEnterActive:Cd,onLeaveStart:Cd,onLeaveActive:bd},(s,l)=>{let{className:c,style:u}=s;return st.createElement(P0,{prefixCls:e,className:i,style:Object.assign(Object.assign({},o),u),ref:l,iconClassName:c})})},L0=(t,e)=>({[`> span, > ${t}`]:{"&:not(:last-child)":{[`&, & > ${t}`]:{"&:not(:disabled)":{borderInlineEndColor:e}}},"&:not(:first-child)":{[`&, & > ${t}`]:{"&:not(:disabled)":{borderInlineStartColor:e}}}}}),t2=t=>{const{componentCls:e,fontSize:n,lineWidth:r,groupBorderColor:i,colorErrorHover:o}=t;return{[`${e}-group`]:[{position:"relative",display:"inline-flex",[`> span, > ${e}`]:{"&:not(:last-child)":{[`&, & > ${e}`]:{borderStartEndRadius:0,borderEndEndRadius:0}},"&:not(:first-child)":{marginInlineStart:t.calc(r).mul(-1).equal(),[`&, & > ${e}`]:{borderStartStartRadius:0,borderEndStartRadius:0}}},[e]:{position:"relative",zIndex:1,"&:hover,\n          &:focus,\n          &:active":{zIndex:2},"&[disabled]":{zIndex:0}},[`${e}-icon-only`]:{fontSize:n}},L0(`${e}-primary`,i),L0(`${e}-danger`,o)]}},uM=t=>{const{paddingInline:e,onlyIconSize:n,paddingBlock:r}=t;return qi(t,{buttonPaddingHorizontal:e,buttonPaddingVertical:r,buttonIconOnlyFontSize:n})},fM=t=>{var e,n,r,i,o,a;const s=(e=t.contentFontSize)!==null&&e!==void 0?e:t.fontSize,l=(n=t.contentFontSizeSM)!==null&&n!==void 0?n:t.fontSize,c=(r=t.contentFontSizeLG)!==null&&r!==void 0?r:t.fontSizeLG,u=(i=t.contentLineHeight)!==null&&i!==void 0?i:Zc(s),f=(o=t.contentLineHeightSM)!==null&&o!==void 0?o:Zc(l),d=(a=t.contentLineHeightLG)!==null&&a!==void 0?a:Zc(c);return{fontWeight:400,defaultShadow:`0 ${t.controlOutlineWidth}px 0 ${t.controlTmpOutline}`,primaryShadow:`0 ${t.controlOutlineWidth}px 0 ${t.controlOutline}`,dangerShadow:`0 ${t.controlOutlineWidth}px 0 ${t.colorErrorOutline}`,primaryColor:t.colorTextLightSolid,dangerColor:t.colorTextLightSolid,borderColorDisabled:t.colorBorder,defaultGhostColor:t.colorBgContainer,ghostBg:"transparent",defaultGhostBorderColor:t.colorBgContainer,paddingInline:t.paddingContentHorizontal-t.lineWidth,paddingInlineLG:t.paddingContentHorizontal-t.lineWidth,paddingInlineSM:8-t.lineWidth,onlyIconSize:t.fontSizeLG,onlyIconSizeSM:t.fontSizeLG-2,onlyIconSizeLG:t.fontSizeLG+2,groupBorderColor:t.colorPrimaryHover,linkHoverBg:"transparent",textHoverBg:t.colorBgTextHover,defaultColor:t.colorText,defaultBg:t.colorBgContainer,defaultBorderColor:t.colorBorder,defaultBorderColorDisabled:t.colorBorder,defaultHoverBg:t.colorBgContainer,defaultHoverColor:t.colorPrimaryHover,defaultHoverBorderColor:t.colorPrimaryHover,defaultActiveBg:t.colorBgContainer,defaultActiveColor:t.colorPrimaryActive,defaultActiveBorderColor:t.colorPrimaryActive,contentFontSize:s,contentFontSizeSM:l,contentFontSizeLG:c,contentLineHeight:u,contentLineHeightSM:f,contentLineHeightLG:d,paddingBlock:Math.max((t.controlHeight-s*u)/2-t.lineWidth,0),paddingBlockSM:Math.max((t.controlHeightSM-l*f)/2-t.lineWidth,0),paddingBlockLG:Math.max((t.controlHeightLG-c*d)/2-t.lineWidth,0)}},n2=t=>{const{componentCls:e,iconCls:n,fontWeight:r}=t;return{[e]:{outline:"none",position:"relative",display:"inline-flex",gap:t.marginXS,alignItems:"center",justifyContent:"center",fontWeight:r,whiteSpace:"nowrap",textAlign:"center",backgroundImage:"none",background:"transparent",border:`${Jr(t.lineWidth)} ${t.lineType} transparent`,cursor:"pointer",transition:`all ${t.motionDurationMid} ${t.motionEaseInOut}`,userSelect:"none",touchAction:"manipulation",color:t.colorText,"&:disabled > *":{pointerEvents:"none"},"> span":{display:"inline-block"},[`${e}-icon`]:{lineHeight:1},"> a":{color:"currentColor"},"&:not(:disabled)":Object.assign({},wR(t)),[`&${e}-two-chinese-chars::first-letter`]:{letterSpacing:"0.34em"},[`&${e}-two-chinese-chars > *:not(${n})`]:{marginInlineEnd:"-0.34em",letterSpacing:"0.34em"},"&-icon-end":{flexDirection:"row-reverse"}}}},ei=(t,e,n)=>({[`&:not(:disabled):not(${t}-disabled)`]:{"&:hover":e,"&:active":n}}),r2=t=>({minWidth:t.controlHeight,paddingInlineStart:0,paddingInlineEnd:0,borderRadius:"50%"}),i2=t=>({borderRadius:t.controlHeight,paddingInlineStart:t.calc(t.controlHeight).div(2).equal(),paddingInlineEnd:t.calc(t.controlHeight).div(2).equal()}),o2=t=>({cursor:"not-allowed",borderColor:t.borderColorDisabled,color:t.colorTextDisabled,background:t.colorBgContainerDisabled,boxShadow:"none"}),ml=(t,e,n,r,i,o,a,s)=>({[`&${t}-background-ghost`]:Object.assign(Object.assign({color:n||void 0,background:e,borderColor:r||void 0,boxShadow:"none"},ei(t,Object.assign({background:e},a),Object.assign({background:e},s))),{"&:disabled":{cursor:"not-allowed",color:i||void 0,borderColor:o||void 0}})}),tg=t=>({[`&:disabled, &${t.componentCls}-disabled`]:Object.assign({},o2(t))}),dM=t=>Object.assign({},tg(t)),Du=t=>({[`&:disabled, &${t.componentCls}-disabled`]:{cursor:"not-allowed",color:t.colorTextDisabled}}),hM=t=>Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},dM(t)),{background:t.defaultBg,borderColor:t.defaultBorderColor,color:t.defaultColor,boxShadow:t.defaultShadow}),ei(t.componentCls,{color:t.defaultHoverColor,borderColor:t.defaultHoverBorderColor,background:t.defaultHoverBg},{color:t.defaultActiveColor,borderColor:t.defaultActiveBorderColor,background:t.defaultActiveBg})),ml(t.componentCls,t.ghostBg,t.defaultGhostColor,t.defaultGhostBorderColor,t.colorTextDisabled,t.colorBorder)),{[`&${t.componentCls}-dangerous`]:Object.assign(Object.assign(Object.assign({color:t.colorError,borderColor:t.colorError},ei(t.componentCls,{color:t.colorErrorHover,borderColor:t.colorErrorBorderHover},{color:t.colorErrorActive,borderColor:t.colorErrorActive})),ml(t.componentCls,t.ghostBg,t.colorError,t.colorError,t.colorTextDisabled,t.colorBorder)),tg(t))}),a2=t=>Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},dM(t)),{color:t.primaryColor,background:t.colorPrimary,boxShadow:t.primaryShadow}),ei(t.componentCls,{color:t.colorTextLightSolid,background:t.colorPrimaryHover},{color:t.colorTextLightSolid,background:t.colorPrimaryActive})),ml(t.componentCls,t.ghostBg,t.colorPrimary,t.colorPrimary,t.colorTextDisabled,t.colorBorder,{color:t.colorPrimaryHover,borderColor:t.colorPrimaryHover},{color:t.colorPrimaryActive,borderColor:t.colorPrimaryActive})),{[`&${t.componentCls}-dangerous`]:Object.assign(Object.assign(Object.assign({background:t.colorError,boxShadow:t.dangerShadow,color:t.dangerColor},ei(t.componentCls,{background:t.colorErrorHover},{background:t.colorErrorActive})),ml(t.componentCls,t.ghostBg,t.colorError,t.colorError,t.colorTextDisabled,t.colorBorder,{color:t.colorErrorHover,borderColor:t.colorErrorHover},{color:t.colorErrorActive,borderColor:t.colorErrorActive})),tg(t))}),s2=t=>Object.assign(Object.assign({},hM(t)),{borderStyle:"dashed"}),l2=t=>Object.assign(Object.assign(Object.assign({color:t.colorLink},ei(t.componentCls,{color:t.colorLinkHover,background:t.linkHoverBg},{color:t.colorLinkActive})),Du(t)),{[`&${t.componentCls}-dangerous`]:Object.assign(Object.assign({color:t.colorError},ei(t.componentCls,{color:t.colorErrorHover},{color:t.colorErrorActive})),Du(t))}),c2=t=>Object.assign(Object.assign(Object.assign({},ei(t.componentCls,{color:t.colorText,background:t.textHoverBg},{color:t.colorText,background:t.colorBgTextActive})),Du(t)),{[`&${t.componentCls}-dangerous`]:Object.assign(Object.assign({color:t.colorError},Du(t)),ei(t.componentCls,{color:t.colorErrorHover,background:t.colorErrorBg},{color:t.colorErrorHover,background:t.colorErrorBgActive}))}),u2=t=>{const{componentCls:e}=t;return{[`${e}-default`]:hM(t),[`${e}-primary`]:a2(t),[`${e}-dashed`]:s2(t),[`${e}-link`]:l2(t),[`${e}-text`]:c2(t),[`${e}-ghost`]:ml(t.componentCls,t.ghostBg,t.colorBgContainer,t.colorBgContainer,t.colorTextDisabled,t.colorBorder)}},ng=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const{componentCls:n,controlHeight:r,fontSize:i,lineHeight:o,borderRadius:a,buttonPaddingHorizontal:s,iconCls:l,buttonPaddingVertical:c}=t,u=`${n}-icon-only`;return[{[`${e}`]:{fontSize:i,lineHeight:o,height:r,padding:`${Jr(c)} ${Jr(s)}`,borderRadius:a,[`&${u}`]:{width:r,paddingInline:0,[`&${n}-compact-item`]:{flex:"none"},[`&${n}-round`]:{width:"auto"},[l]:{fontSize:t.buttonIconOnlyFontSize}},[`&${n}-loading`]:{opacity:t.opacityLoading,cursor:"default"},[`${n}-loading-icon`]:{transition:`width ${t.motionDurationSlow} ${t.motionEaseInOut}, opacity ${t.motionDurationSlow} ${t.motionEaseInOut}`}}},{[`${n}${n}-circle${e}`]:r2(t)},{[`${n}${n}-round${e}`]:i2(t)}]},f2=t=>{const e=qi(t,{fontSize:t.contentFontSize,lineHeight:t.contentLineHeight});return ng(e,t.componentCls)},d2=t=>{const e=qi(t,{controlHeight:t.controlHeightSM,fontSize:t.contentFontSizeSM,lineHeight:t.contentLineHeightSM,padding:t.paddingXS,buttonPaddingHorizontal:t.paddingInlineSM,buttonPaddingVertical:t.paddingBlockSM,borderRadius:t.borderRadiusSM,buttonIconOnlyFontSize:t.onlyIconSizeSM});return ng(e,`${t.componentCls}-sm`)},h2=t=>{const e=qi(t,{controlHeight:t.controlHeightLG,fontSize:t.contentFontSizeLG,lineHeight:t.contentLineHeightLG,buttonPaddingHorizontal:t.paddingInlineLG,buttonPaddingVertical:t.paddingBlockLG,borderRadius:t.borderRadiusLG,buttonIconOnlyFontSize:t.onlyIconSizeLG});return ng(e,`${t.componentCls}-lg`)},p2=t=>{const{componentCls:e}=t;return{[e]:{[`&${e}-block`]:{width:"100%"}}}},m2=Tf("Button",t=>{const e=uM(t);return[n2(e),f2(e),d2(e),h2(e),p2(e),u2(e),t2(e)]},fM,{unitless:{fontWeight:!0,contentLineHeight:!0,contentLineHeightSM:!0,contentLineHeightLG:!0}});function g2(t,e,n){const{focusElCls:r,focus:i,borderElCls:o}=n,a=o?"> *":"",s=["hover",i?"focus":null,"active"].filter(Boolean).map(l=>`&:${l} ${a}`).join(",");return{[`&-item:not(${e}-last-item)`]:{marginInlineEnd:t.calc(t.lineWidth).mul(-1).equal()},"&-item":Object.assign(Object.assign({[s]:{zIndex:2}},r?{[`&${r}`]:{zIndex:2}}:{}),{[`&[disabled] ${a}`]:{zIndex:0}})}}function v2(t,e,n){const{borderElCls:r}=n,i=r?`> ${r}`:"";return{[`&-item:not(${e}-first-item):not(${e}-last-item) ${i}`]:{borderRadius:0},[`&-item:not(${e}-last-item)${e}-first-item`]:{[`& ${i}, &${t}-sm ${i}, &${t}-lg ${i}`]:{borderStartEndRadius:0,borderEndEndRadius:0}},[`&-item:not(${e}-first-item)${e}-last-item`]:{[`& ${i}, &${t}-sm ${i}, &${t}-lg ${i}`]:{borderStartStartRadius:0,borderEndStartRadius:0}}}}function _2(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{focus:!0};const{componentCls:n}=t,r=`${n}-compact`;return{[r]:Object.assign(Object.assign({},g2(t,r,e)),v2(n,r,e))}}function y2(t,e){return{[`&-item:not(${e}-last-item)`]:{marginBottom:t.calc(t.lineWidth).mul(-1).equal()},"&-item":{"&:hover,&:focus,&:active":{zIndex:2},"&[disabled]":{zIndex:0}}}}function x2(t,e){return{[`&-item:not(${e}-first-item):not(${e}-last-item)`]:{borderRadius:0},[`&-item${e}-first-item:not(${e}-last-item)`]:{[`&, &${t}-sm, &${t}-lg`]:{borderEndEndRadius:0,borderEndStartRadius:0}},[`&-item${e}-last-item:not(${e}-first-item)`]:{[`&, &${t}-sm, &${t}-lg`]:{borderStartStartRadius:0,borderStartEndRadius:0}}}}function S2(t){const e=`${t.componentCls}-compact-vertical`;return{[e]:Object.assign(Object.assign({},y2(t,e)),x2(t.componentCls,e))}}const E2=t=>{const{componentCls:e,calc:n}=t;return{[e]:{[`&-compact-item${e}-primary`]:{[`&:not([disabled]) + ${e}-compact-item${e}-primary:not([disabled])`]:{position:"relative","&:before":{position:"absolute",top:n(t.lineWidth).mul(-1).equal(),insetInlineStart:n(t.lineWidth).mul(-1).equal(),display:"inline-block",width:t.lineWidth,height:`calc(100% + ${Jr(t.lineWidth)} * 2)`,backgroundColor:t.colorPrimaryHover,content:'""'}}},"&-compact-vertical-item":{[`&${e}-primary`]:{[`&:not([disabled]) + ${e}-compact-vertical-item${e}-primary:not([disabled])`]:{position:"relative","&:before":{position:"absolute",top:n(t.lineWidth).mul(-1).equal(),insetInlineStart:n(t.lineWidth).mul(-1).equal(),display:"inline-block",width:`calc(100% + ${Jr(t.lineWidth)} * 2)`,height:t.lineWidth,backgroundColor:t.colorPrimaryHover,content:'""'}}}}}}},M2=AR(["Button","compact"],t=>{const e=uM(t);return[_2(e),S2(e),E2(e)]},fM);var w2=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n};function T2(t){if(typeof t=="object"&&t){let e=t==null?void 0:t.delay;return e=!Number.isNaN(e)&&typeof e=="number"?e:0,{loading:e<=0,delay:e}}return{loading:!!t,delay:0}}const b2=st.forwardRef((t,e)=>{var n,r,i;const{loading:o=!1,prefixCls:a,type:s,danger:l=!1,shape:c="default",size:u,styles:f,disabled:d,className:p,rootClassName:_,children:v,icon:m,iconPosition:h="start",ghost:g=!1,block:y=!1,htmlType:E="button",classNames:A,style:x={},autoInsertSpace:M}=t,P=w2(t,["loading","prefixCls","type","danger","shape","size","styles","disabled","className","rootClassName","children","icon","iconPosition","ghost","block","htmlType","classNames","style","autoInsertSpace"]),T=s||"default",{getPrefixCls:w,direction:L,button:V}=I.useContext(Er),F=(n=M??(V==null?void 0:V.autoInsertSpace))!==null&&n!==void 0?n:!0,W=w("btn",a),[ee,U,N]=m2(W),R=I.useContext(Ru),z=d??R,X=I.useContext(lM),Y=I.useMemo(()=>T2(o),[o]),[oe,xe]=I.useState(Y.loading),[q,ae]=I.useState(!1),fe=Vm(e,I.createRef()),$e=I.Children.count(v)===1&&!m&&!Td(T);I.useEffect(()=>{let ie=null;Y.delay>0?ie=setTimeout(()=>{ie=null,xe(!0)},Y.delay):xe(Y.loading);function le(){ie&&(clearTimeout(ie),ie=null)}return le},[Y]),I.useEffect(()=>{if(!fe||!fe.current||!F)return;const ie=fe.current.textContent;$e&&Ap(ie)?q||ae(!0):q&&ae(!1)},[fe]);const We=ie=>{const{onClick:le}=t;if(oe||z){ie.preventDefault();return}le==null||le(ie)},{compactSize:et,compactItemClassnames:B}=XP(W,L),De={large:"lg",small:"sm",middle:void 0},je=oM(ie=>{var le,Le;return(Le=(le=u??et)!==null&&le!==void 0?le:X)!==null&&Le!==void 0?Le:ie}),dt=je&&De[je]||"",Ne=oe?"loading":m,Oe=sC(P,["navigate"]),Xe=Sn(W,U,N,{[`${W}-${c}`]:c!=="default"&&c,[`${W}-${T}`]:T,[`${W}-${dt}`]:dt,[`${W}-icon-only`]:!v&&v!==0&&!!Ne,[`${W}-background-ghost`]:g&&!Td(T),[`${W}-loading`]:oe,[`${W}-two-chinese-chars`]:q&&F&&!oe,[`${W}-block`]:y,[`${W}-dangerous`]:l,[`${W}-rtl`]:L==="rtl",[`${W}-icon-end`]:h==="end"},B,p,_,V==null?void 0:V.className),Be=Object.assign(Object.assign({},V==null?void 0:V.style),x),yt=Sn(A==null?void 0:A.icon,(r=V==null?void 0:V.classNames)===null||r===void 0?void 0:r.icon),D=Object.assign(Object.assign({},(f==null?void 0:f.icon)||{}),((i=V==null?void 0:V.styles)===null||i===void 0?void 0:i.icon)||{}),b=m&&!oe?st.createElement(cM,{prefixCls:W,className:yt,style:D},m):st.createElement(e2,{existIcon:!!m,prefixCls:W,loading:oe}),Q=v||v===0?JP(v,$e&&F):null;if(Oe.href!==void 0)return ee(st.createElement("a",Object.assign({},Oe,{className:Sn(Xe,{[`${W}-disabled`]:z}),href:z?void 0:Oe.href,style:Be,onClick:We,ref:fe,tabIndex:z?-1:0}),b,Q));let se=st.createElement("button",Object.assign({},P,{type:E,className:Xe,style:Be,onClick:We,disabled:z,ref:fe}),b,Q,!!B&&st.createElement(M2,{key:"compact",prefixCls:W}));return Td(T)||(se=st.createElement(GP,{component:"Button",disabled:oe},se)),ee(se)}),rg=b2;rg.Group=ZP;rg.__ANT_BUTTON=!0;const gl=["xxl","xl","lg","md","sm","xs"],C2=t=>({xs:`(max-width: ${t.screenXSMax}px)`,sm:`(min-width: ${t.screenSM}px)`,md:`(min-width: ${t.screenMD}px)`,lg:`(min-width: ${t.screenLG}px)`,xl:`(min-width: ${t.screenXL}px)`,xxl:`(min-width: ${t.screenXXL}px)`}),A2=t=>{const e=t,n=[].concat(gl).reverse();return n.forEach((r,i)=>{const o=r.toUpperCase(),a=`screen${o}Min`,s=`screen${o}`;if(!(e[a]<=e[s]))throw new Error(`${a}<=${s} fails : !(${e[a]}<=${e[s]})`);if(i<n.length-1){const l=`screen${o}Max`;if(!(e[s]<=e[l]))throw new Error(`${s}<=${l} fails : !(${e[s]}<=${e[l]})`);const u=`screen${n[i+1].toUpperCase()}Min`;if(!(e[l]<=e[u]))throw new Error(`${l}<=${u} fails : !(${e[l]}<=${e[u]})`)}}),t};function R2(){const[,t]=Hi(),e=C2(A2(t));return st.useMemo(()=>{const n=new Map;let r=-1,i={};return{matchHandlers:{},dispatch(o){return i=o,n.forEach(a=>a(i)),n.size>=1},subscribe(o){return n.size||this.register(),r+=1,n.set(r,o),o(i),r},unsubscribe(o){n.delete(o),n.size||this.unregister()},unregister(){Object.keys(e).forEach(o=>{const a=e[o],s=this.matchHandlers[a];s==null||s.mql.removeListener(s==null?void 0:s.listener)}),n.clear()},register(){Object.keys(e).forEach(o=>{const a=e[o],s=c=>{let{matches:u}=c;this.dispatch(Object.assign(Object.assign({},i),{[o]:u}))},l=window.matchMedia(a);l.addListener(s),this.matchHandlers[a]={mql:l,listener:s},s(l)})},responsiveMap:e}},[t])}const P2=I.createContext({}),L2=t=>{const{componentCls:e}=t;return{[e]:{display:"flex",flexFlow:"row wrap",minWidth:0,"&::before, &::after":{display:"flex"},"&-no-wrap":{flexWrap:"nowrap"},"&-start":{justifyContent:"flex-start"},"&-center":{justifyContent:"center"},"&-end":{justifyContent:"flex-end"},"&-space-between":{justifyContent:"space-between"},"&-space-around":{justifyContent:"space-around"},"&-space-evenly":{justifyContent:"space-evenly"},"&-top":{alignItems:"flex-start"},"&-middle":{alignItems:"center"},"&-bottom":{alignItems:"flex-end"}}}},D2=t=>{const{componentCls:e}=t;return{[e]:{position:"relative",maxWidth:"100%",minHeight:1}}},I2=(t,e)=>{const{prefixCls:n,componentCls:r,gridColumns:i}=t,o={};for(let a=i;a>=0;a--)a===0?(o[`${r}${e}-${a}`]={display:"none"},o[`${r}-push-${a}`]={insetInlineStart:"auto"},o[`${r}-pull-${a}`]={insetInlineEnd:"auto"},o[`${r}${e}-push-${a}`]={insetInlineStart:"auto"},o[`${r}${e}-pull-${a}`]={insetInlineEnd:"auto"},o[`${r}${e}-offset-${a}`]={marginInlineStart:0},o[`${r}${e}-order-${a}`]={order:0}):(o[`${r}${e}-${a}`]=[{"--ant-display":"block",display:"block"},{display:"var(--ant-display)",flex:`0 0 ${a/i*100}%`,maxWidth:`${a/i*100}%`}],o[`${r}${e}-push-${a}`]={insetInlineStart:`${a/i*100}%`},o[`${r}${e}-pull-${a}`]={insetInlineEnd:`${a/i*100}%`},o[`${r}${e}-offset-${a}`]={marginInlineStart:`${a/i*100}%`},o[`${r}${e}-order-${a}`]={order:a});return o[`${r}${e}-flex`]={flex:`var(--${n}${e}-flex)`},o},Rp=(t,e)=>I2(t,e),N2=(t,e,n)=>({[`@media (min-width: ${Jr(e)})`]:Object.assign({},Rp(t,n))}),U2=()=>({}),O2=()=>({}),F2=Tf("Grid",L2,U2);Tf("Grid",t=>{const e=qi(t,{gridColumns:24}),n={"-sm":e.screenSMMin,"-md":e.screenMDMin,"-lg":e.screenLGMin,"-xl":e.screenXLMin,"-xxl":e.screenXXLMin};return[D2(e),Rp(e,""),Rp(e,"-xs"),Object.keys(n).map(r=>N2(e,n[r],r)).reduce((r,i)=>Object.assign(Object.assign({},r),i),{})]},O2);var k2=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n};function D0(t,e){const[n,r]=I.useState(typeof t=="string"?t:""),i=()=>{if(typeof t=="string"&&r(t),typeof t=="object")for(let o=0;o<gl.length;o++){const a=gl[o];if(!e[a])continue;const s=t[a];if(s!==void 0){r(s);return}}};return I.useEffect(()=>{i()},[JSON.stringify(t),e]),n}const z2=I.forwardRef((t,e)=>{const{prefixCls:n,justify:r,align:i,className:o,style:a,children:s,gutter:l=0,wrap:c}=t,u=k2(t,["prefixCls","justify","align","className","style","children","gutter","wrap"]),{getPrefixCls:f,direction:d}=I.useContext(Er),[p,_]=I.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),[v,m]=I.useState({xs:!1,sm:!1,md:!1,lg:!1,xl:!1,xxl:!1}),h=D0(i,v),g=D0(r,v),y=I.useRef(l),E=R2();I.useEffect(()=>{const N=E.subscribe(R=>{m(R);const z=y.current||0;(!Array.isArray(z)&&typeof z=="object"||Array.isArray(z)&&(typeof z[0]=="object"||typeof z[1]=="object"))&&_(R)});return()=>E.unsubscribe(N)},[]);const A=()=>{const N=[void 0,void 0];return(Array.isArray(l)?l:[l,void 0]).forEach((z,X)=>{if(typeof z=="object")for(let Y=0;Y<gl.length;Y++){const oe=gl[Y];if(p[oe]&&z[oe]!==void 0){N[X]=z[oe];break}}else N[X]=z}),N},x=f("row",n),[M,P,T]=F2(x),w=A(),L=Sn(x,{[`${x}-no-wrap`]:c===!1,[`${x}-${g}`]:g,[`${x}-${h}`]:h,[`${x}-rtl`]:d==="rtl"},o,P,T),V={},F=w[0]!=null&&w[0]>0?w[0]/-2:void 0;F&&(V.marginLeft=F,V.marginRight=F);const[W,ee]=w;V.rowGap=ee;const U=I.useMemo(()=>({gutter:[W,ee],wrap:c}),[W,ee,c]);return M(I.createElement(P2.Provider,{value:U},I.createElement("div",Object.assign({},u,{className:L,style:Object.assign(Object.assign({},V),a),ref:e}),s)))});function I0(t){return["small","middle","large"].includes(t)}function N0(t){return t?typeof t=="number"&&!Number.isNaN(t):!1}const pM=st.createContext({latestIndex:0}),B2=pM.Provider,H2=t=>{let{className:e,index:n,children:r,split:i,style:o}=t;const{latestIndex:a}=I.useContext(pM);return r==null?null:I.createElement(I.Fragment,null,I.createElement("div",{className:e,style:o},r),n<a&&i&&I.createElement("span",{className:`${e}-split`},i))};var V2=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n};const G2=I.forwardRef((t,e)=>{var n,r,i;const{getPrefixCls:o,space:a,direction:s}=I.useContext(Er),{size:l=(n=a==null?void 0:a.size)!==null&&n!==void 0?n:"small",align:c,className:u,rootClassName:f,children:d,direction:p="horizontal",prefixCls:_,split:v,style:m,wrap:h=!1,classNames:g,styles:y}=t,E=V2(t,["size","align","className","rootClassName","children","direction","prefixCls","split","style","wrap","classNames","styles"]),[A,x]=Array.isArray(l)?l:[l,l],M=I0(x),P=I0(A),T=N0(x),w=N0(A),L=bu(d,{keepEmpty:!0}),V=c===void 0&&p==="horizontal"?"center":c,F=o("space",_),[W,ee,U]=aM(F),N=Sn(F,a==null?void 0:a.className,ee,`${F}-${p}`,{[`${F}-rtl`]:s==="rtl",[`${F}-align-${V}`]:V,[`${F}-gap-row-${x}`]:M,[`${F}-gap-col-${A}`]:P},u,f,U),R=Sn(`${F}-item`,(r=g==null?void 0:g.item)!==null&&r!==void 0?r:(i=a==null?void 0:a.classNames)===null||i===void 0?void 0:i.item);let z=0;const X=L.map((xe,q)=>{var ae,de;xe!=null&&(z=q);const fe=xe&&xe.key||`${R}-${q}`;return I.createElement(H2,{className:R,key:fe,index:q,split:v,style:(ae=y==null?void 0:y.item)!==null&&ae!==void 0?ae:(de=a==null?void 0:a.styles)===null||de===void 0?void 0:de.item},xe)}),Y=I.useMemo(()=>({latestIndex:z}),[z]);if(L.length===0)return null;const oe={};return h&&(oe.flexWrap="wrap"),!P&&w&&(oe.columnGap=A),!M&&T&&(oe.rowGap=x),W(I.createElement("div",Object.assign({ref:e,className:N,style:Object.assign(Object.assign(Object.assign({},oe),a==null?void 0:a.style),m)},E),I.createElement(B2,{value:Y},X)))}),mM=G2;mM.Compact=qP;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ig="165",Wo={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},jo={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},W2=0,U0=1,j2=2,gM=1,vM=2,Hr=3,Vi=0,Rn=1,zn=2,Fi=0,Da=1,O0=2,F0=3,k0=4,$2=5,uo=100,X2=101,Y2=102,q2=103,K2=104,Z2=200,Q2=201,J2=202,eL=203,Pp=204,Lp=205,tL=206,nL=207,rL=208,iL=209,oL=210,aL=211,sL=212,lL=213,cL=214,uL=0,fL=1,dL=2,Iu=3,hL=4,pL=5,mL=6,gL=7,_M=0,vL=1,_L=2,ki=0,yL=1,xL=2,SL=3,EL=4,ML=5,wL=6,TL=7,yM=300,$a=301,Xa=302,Dp=303,Ip=304,Af=306,Np=1e3,yo=1001,Up=1002,er=1003,bL=1004,oc=1005,gr=1006,Ad=1007,xo=1008,Gi=1009,CL=1010,AL=1011,Nu=1012,xM=1013,Ya=1014,Ci=1015,Rf=1016,SM=1017,EM=1018,qa=1020,RL=35902,PL=1021,LL=1022,Rr=1023,DL=1024,IL=1025,Ia=1026,Ka=1027,NL=1028,MM=1029,UL=1030,wM=1031,TM=1033,Rd=33776,Pd=33777,Ld=33778,Dd=33779,z0=35840,B0=35841,H0=35842,V0=35843,G0=36196,W0=37492,j0=37496,$0=37808,X0=37809,Y0=37810,q0=37811,K0=37812,Z0=37813,Q0=37814,J0=37815,e_=37816,t_=37817,n_=37818,r_=37819,i_=37820,o_=37821,Id=36492,a_=36494,s_=36495,OL=36283,l_=36284,c_=36285,u_=36286,FL=3200,kL=3201,zL=0,BL=1,Ei="",Tr="srgb",Ki="srgb-linear",og="display-p3",Pf="display-p3-linear",Uu="linear",Dt="srgb",Ou="rec709",Fu="p3",$o=7680,f_=519,HL=512,VL=513,GL=514,bM=515,WL=516,jL=517,$L=518,XL=519,d_=35044,h_="300 es",Xr=2e3,ku=2001;class zo{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const o=i.indexOf(n);o!==-1&&i.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const i=r.slice(0);for(let o=0,a=i.length;o<a;o++)i[o].call(this,e);e.target=null}}}const un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let p_=1234567;const Vs=Math.PI/180,vl=180/Math.PI;function rs(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(un[t&255]+un[t>>8&255]+un[t>>16&255]+un[t>>24&255]+"-"+un[e&255]+un[e>>8&255]+"-"+un[e>>16&15|64]+un[e>>24&255]+"-"+un[n&63|128]+un[n>>8&255]+"-"+un[n>>16&255]+un[n>>24&255]+un[r&255]+un[r>>8&255]+un[r>>16&255]+un[r>>24&255]).toLowerCase()}function hn(t,e,n){return Math.max(e,Math.min(n,t))}function ag(t,e){return(t%e+e)%e}function YL(t,e,n,r,i){return r+(t-e)*(i-r)/(n-e)}function qL(t,e,n){return t!==e?(n-t)/(e-t):0}function Gs(t,e,n){return(1-n)*t+n*e}function KL(t,e,n,r){return Gs(t,e,1-Math.exp(-n*r))}function ZL(t,e=1){return e-Math.abs(ag(t,e*2)-e)}function QL(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function JL(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function eD(t,e){return t+Math.floor(Math.random()*(e-t+1))}function tD(t,e){return t+Math.random()*(e-t)}function nD(t){return t*(.5-Math.random())}function rD(t){t!==void 0&&(p_=t);let e=p_+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function iD(t){return t*Vs}function oD(t){return t*vl}function aD(t){return(t&t-1)===0&&t!==0}function sD(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function lD(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function cD(t,e,n,r,i){const o=Math.cos,a=Math.sin,s=o(n/2),l=a(n/2),c=o((e+r)/2),u=a((e+r)/2),f=o((e-r)/2),d=a((e-r)/2),p=o((r-e)/2),_=a((r-e)/2);switch(i){case"XYX":t.set(s*u,l*f,l*d,s*c);break;case"YZY":t.set(l*d,s*u,l*f,s*c);break;case"ZXZ":t.set(l*f,l*d,s*u,s*c);break;case"XZX":t.set(s*u,l*_,l*p,s*c);break;case"YXY":t.set(l*p,s*u,l*_,s*c);break;case"ZYZ":t.set(l*_,l*p,s*u,s*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ua(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function mn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const uD={DEG2RAD:Vs,RAD2DEG:vl,generateUUID:rs,clamp:hn,euclideanModulo:ag,mapLinear:YL,inverseLerp:qL,lerp:Gs,damp:KL,pingpong:ZL,smoothstep:QL,smootherstep:JL,randInt:eD,randFloat:tD,randFloatSpread:nD,seededRandom:rD,degToRad:iD,radToDeg:oD,isPowerOfTwo:aD,ceilPowerOfTwo:sD,floorPowerOfTwo:lD,setQuaternionFromProperEuler:cD,normalize:mn,denormalize:ua};class Je{constructor(e=0,n=0){Je.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,i=e.elements;return this.x=i[0]*n+i[3]*r+i[6],this.y=i[1]*n+i[4]*r+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(hn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),i=Math.sin(n),o=this.x-e.x,a=this.y-e.y;return this.x=o*r-a*i+e.x,this.y=o*i+a*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ct{constructor(e,n,r,i,o,a,s,l,c){ct.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,i,o,a,s,l,c)}set(e,n,r,i,o,a,s,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=s,u[3]=n,u[4]=o,u[5]=l,u[6]=r,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,i=n.elements,o=this.elements,a=r[0],s=r[3],l=r[6],c=r[1],u=r[4],f=r[7],d=r[2],p=r[5],_=r[8],v=i[0],m=i[3],h=i[6],g=i[1],y=i[4],E=i[7],A=i[2],x=i[5],M=i[8];return o[0]=a*v+s*g+l*A,o[3]=a*m+s*y+l*x,o[6]=a*h+s*E+l*M,o[1]=c*v+u*g+f*A,o[4]=c*m+u*y+f*x,o[7]=c*h+u*E+f*M,o[2]=d*v+p*g+_*A,o[5]=d*m+p*y+_*x,o[8]=d*h+p*E+_*M,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],i=e[2],o=e[3],a=e[4],s=e[5],l=e[6],c=e[7],u=e[8];return n*a*u-n*s*c-r*o*u+r*s*l+i*o*c-i*a*l}invert(){const e=this.elements,n=e[0],r=e[1],i=e[2],o=e[3],a=e[4],s=e[5],l=e[6],c=e[7],u=e[8],f=u*a-s*c,d=s*l-u*o,p=c*o-a*l,_=n*f+r*d+i*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=f*v,e[1]=(i*c-u*r)*v,e[2]=(s*r-i*a)*v,e[3]=d*v,e[4]=(u*n-i*l)*v,e[5]=(i*o-s*n)*v,e[6]=p*v,e[7]=(r*l-c*n)*v,e[8]=(a*n-r*o)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,i,o,a,s){const l=Math.cos(o),c=Math.sin(o);return this.set(r*l,r*c,-r*(l*a+c*s)+a+e,-i*c,i*l,-i*(-c*a+l*s)+s+n,0,0,1),this}scale(e,n){return this.premultiply(Nd.makeScale(e,n)),this}rotate(e){return this.premultiply(Nd.makeRotation(-e)),this}translate(e,n){return this.premultiply(Nd.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let i=0;i<9;i++)if(n[i]!==r[i])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Nd=new ct;function CM(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function zu(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function fD(){const t=zu("canvas");return t.style.display="block",t}const m_={};function AM(t){t in m_||(m_[t]=!0,console.warn(t))}function dD(t,e,n){return new Promise(function(r,i){function o(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:i();break;case t.TIMEOUT_EXPIRED:setTimeout(o,n);break;default:r()}}setTimeout(o,n)})}const g_=new ct().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),v_=new ct().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ac={[Ki]:{transfer:Uu,primaries:Ou,toReference:t=>t,fromReference:t=>t},[Tr]:{transfer:Dt,primaries:Ou,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Pf]:{transfer:Uu,primaries:Fu,toReference:t=>t.applyMatrix3(v_),fromReference:t=>t.applyMatrix3(g_)},[og]:{transfer:Dt,primaries:Fu,toReference:t=>t.convertSRGBToLinear().applyMatrix3(v_),fromReference:t=>t.applyMatrix3(g_).convertLinearToSRGB()}},hD=new Set([Ki,Pf]),St={enabled:!0,_workingColorSpace:Ki,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!hD.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const r=ac[e].toReference,i=ac[n].fromReference;return i(r(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return ac[t].primaries},getTransfer:function(t){return t===Ei?Uu:ac[t].transfer}};function Na(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Ud(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Xo;class pD{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Xo===void 0&&(Xo=zu("canvas")),Xo.width=e.width,Xo.height=e.height;const r=Xo.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Xo}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=zu("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const i=r.getImageData(0,0,e.width,e.height),o=i.data;for(let a=0;a<o.length;a++)o[a]=Na(o[a]/255)*255;return r.putImageData(i,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Na(n[r]/255)*255):n[r]=Na(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let mD=0;class RM{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mD++}),this.uuid=rs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},i=this.data;if(i!==null){let o;if(Array.isArray(i)){o=[];for(let a=0,s=i.length;a<s;a++)i[a].isDataTexture?o.push(Od(i[a].image)):o.push(Od(i[a]))}else o=Od(i);r.url=o}return n||(e.images[this.uuid]=r),r}}function Od(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?pD.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let gD=0;class Pn extends zo{constructor(e=Pn.DEFAULT_IMAGE,n=Pn.DEFAULT_MAPPING,r=yo,i=yo,o=gr,a=xo,s=Rr,l=Gi,c=Pn.DEFAULT_ANISOTROPY,u=Ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gD++}),this.uuid=rs(),this.name="",this.source=new RM(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=o,this.minFilter=a,this.anisotropy=c,this.format=s,this.internalFormat=null,this.type=l,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==yM)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Np:e.x=e.x-Math.floor(e.x);break;case yo:e.x=e.x<0?0:1;break;case Up:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Np:e.y=e.y-Math.floor(e.y);break;case yo:e.y=e.y<0?0:1;break;case Up:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=yM;Pn.DEFAULT_ANISOTROPY=1;class rn{constructor(e=0,n=0,r=0,i=1){rn.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,i){return this.x=e,this.y=n,this.z=r,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,i=this.z,o=this.w,a=e.elements;return this.x=a[0]*n+a[4]*r+a[8]*i+a[12]*o,this.y=a[1]*n+a[5]*r+a[9]*i+a[13]*o,this.z=a[2]*n+a[6]*r+a[10]*i+a[14]*o,this.w=a[3]*n+a[7]*r+a[11]*i+a[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,i,o;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],p=l[5],_=l[9],v=l[2],m=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-v)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+v)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(c+1)/2,E=(p+1)/2,A=(h+1)/2,x=(u+d)/4,M=(f+v)/4,P=(_+m)/4;return y>E&&y>A?y<.01?(r=0,i=.707106781,o=.707106781):(r=Math.sqrt(y),i=x/r,o=M/r):E>A?E<.01?(r=.707106781,i=0,o=.707106781):(i=Math.sqrt(E),r=x/i,o=P/i):A<.01?(r=.707106781,i=.707106781,o=0):(o=Math.sqrt(A),r=M/o,i=P/o),this.set(r,i,o,n),this}let g=Math.sqrt((m-_)*(m-_)+(f-v)*(f-v)+(d-u)*(d-u));return Math.abs(g)<.001&&(g=1),this.x=(m-_)/g,this.y=(f-v)/g,this.z=(d-u)/g,this.w=Math.acos((c+p+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vD extends zo{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new rn(0,0,e,n),this.scissorTest=!1,this.viewport=new rn(0,0,e,n);const i={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gr,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const o=new Pn(i,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);o.flipY=!1,o.generateMipmaps=r.generateMipmaps,o.internalFormat=r.internalFormat,this.textures=[];const a=r.count;for(let s=0;s<a;s++)this.textures[s]=o.clone(),this.textures[s].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let i=0,o=this.textures.length;i<o;i++)this.textures[i].image.width=e,this.textures[i].image.height=n,this.textures[i].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,i=e.textures.length;r<i;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new RM(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Uo extends vD{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class PM extends Pn{constructor(e=null,n=1,r=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:i},this.magFilter=er,this.minFilter=er,this.wrapR=yo,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class _D extends Pn{constructor(e=null,n=1,r=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:i},this.magFilter=er,this.minFilter=er,this.wrapR=yo,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Oo{constructor(e=0,n=0,r=0,i=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=i}static slerpFlat(e,n,r,i,o,a,s){let l=r[i+0],c=r[i+1],u=r[i+2],f=r[i+3];const d=o[a+0],p=o[a+1],_=o[a+2],v=o[a+3];if(s===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(s===1){e[n+0]=d,e[n+1]=p,e[n+2]=_,e[n+3]=v;return}if(f!==v||l!==d||c!==p||u!==_){let m=1-s;const h=l*d+c*p+u*_+f*v,g=h>=0?1:-1,y=1-h*h;if(y>Number.EPSILON){const A=Math.sqrt(y),x=Math.atan2(A,h*g);m=Math.sin(m*x)/A,s=Math.sin(s*x)/A}const E=s*g;if(l=l*m+d*E,c=c*m+p*E,u=u*m+_*E,f=f*m+v*E,m===1-s){const A=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=A,c*=A,u*=A,f*=A}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,r,i,o,a){const s=r[i],l=r[i+1],c=r[i+2],u=r[i+3],f=o[a],d=o[a+1],p=o[a+2],_=o[a+3];return e[n]=s*_+u*f+l*p-c*d,e[n+1]=l*_+u*d+c*f-s*p,e[n+2]=c*_+u*p+s*d-l*f,e[n+3]=u*_-s*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,i){return this._x=e,this._y=n,this._z=r,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,i=e._y,o=e._z,a=e._order,s=Math.cos,l=Math.sin,c=s(r/2),u=s(i/2),f=s(o/2),d=l(r/2),p=l(i/2),_=l(o/2);switch(a){case"XYZ":this._x=d*u*f+c*p*_,this._y=c*p*f-d*u*_,this._z=c*u*_+d*p*f,this._w=c*u*f-d*p*_;break;case"YXZ":this._x=d*u*f+c*p*_,this._y=c*p*f-d*u*_,this._z=c*u*_-d*p*f,this._w=c*u*f+d*p*_;break;case"ZXY":this._x=d*u*f-c*p*_,this._y=c*p*f+d*u*_,this._z=c*u*_+d*p*f,this._w=c*u*f-d*p*_;break;case"ZYX":this._x=d*u*f-c*p*_,this._y=c*p*f+d*u*_,this._z=c*u*_-d*p*f,this._w=c*u*f+d*p*_;break;case"YZX":this._x=d*u*f+c*p*_,this._y=c*p*f+d*u*_,this._z=c*u*_-d*p*f,this._w=c*u*f-d*p*_;break;case"XZY":this._x=d*u*f-c*p*_,this._y=c*p*f-d*u*_,this._z=c*u*_+d*p*f,this._w=c*u*f+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,i=Math.sin(r);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],i=n[4],o=n[8],a=n[1],s=n[5],l=n[9],c=n[2],u=n[6],f=n[10],d=r+s+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(o-c)*p,this._z=(a-i)*p}else if(r>s&&r>f){const p=2*Math.sqrt(1+r-s-f);this._w=(u-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(o+c)/p}else if(s>f){const p=2*Math.sqrt(1+s-r-f);this._w=(o-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-r-s);this._w=(a-i)/p,this._x=(o+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(hn(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const i=Math.min(1,n/r);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,i=e._y,o=e._z,a=e._w,s=n._x,l=n._y,c=n._z,u=n._w;return this._x=r*u+a*s+i*c-o*l,this._y=i*u+a*l+o*s-r*c,this._z=o*u+a*c+r*l-i*s,this._w=a*u-r*s-i*l-o*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,i=this._y,o=this._z,a=this._w;let s=a*e._w+r*e._x+i*e._y+o*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=a,this._x=r,this._y=i,this._z=o,this;const l=1-s*s;if(l<=Number.EPSILON){const p=1-n;return this._w=p*a+n*this._w,this._x=p*r+n*this._x,this._y=p*i+n*this._y,this._z=p*o+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,s),f=Math.sin((1-n)*u)/c,d=Math.sin(n*u)/c;return this._w=a*f+this._w*d,this._x=r*f+this._x*d,this._y=i*f+this._y*d,this._z=o*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),i=Math.sqrt(1-r),o=Math.sqrt(r);return this.set(i*Math.sin(e),i*Math.cos(e),o*Math.sin(n),o*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(e=0,n=0,r=0){K.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(__.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(__.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,i=this.z,o=e.elements;return this.x=o[0]*n+o[3]*r+o[6]*i,this.y=o[1]*n+o[4]*r+o[7]*i,this.z=o[2]*n+o[5]*r+o[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,i=this.z,o=e.elements,a=1/(o[3]*n+o[7]*r+o[11]*i+o[15]);return this.x=(o[0]*n+o[4]*r+o[8]*i+o[12])*a,this.y=(o[1]*n+o[5]*r+o[9]*i+o[13])*a,this.z=(o[2]*n+o[6]*r+o[10]*i+o[14])*a,this}applyQuaternion(e){const n=this.x,r=this.y,i=this.z,o=e.x,a=e.y,s=e.z,l=e.w,c=2*(a*i-s*r),u=2*(s*n-o*i),f=2*(o*r-a*n);return this.x=n+l*c+a*f-s*u,this.y=r+l*u+s*c-o*f,this.z=i+l*f+o*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,i=this.z,o=e.elements;return this.x=o[0]*n+o[4]*r+o[8]*i,this.y=o[1]*n+o[5]*r+o[9]*i,this.z=o[2]*n+o[6]*r+o[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,i=e.y,o=e.z,a=n.x,s=n.y,l=n.z;return this.x=i*l-o*s,this.y=o*a-r*l,this.z=r*s-i*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Fd.copy(this).projectOnVector(e),this.sub(Fd)}reflect(e){return this.sub(Fd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(hn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,i=this.z-e.z;return n*n+r*r+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const i=Math.sin(n)*e;return this.x=i*Math.sin(r),this.y=Math.cos(n)*e,this.z=i*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=i,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fd=new K,__=new Oo;class Pl{constructor(e=new K(1/0,1/0,1/0),n=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(sr.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(sr.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=sr.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const o=r.getAttribute("position");if(n===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let a=0,s=o.count;a<s;a++)e.isMesh===!0?e.getVertexPosition(a,sr):sr.fromBufferAttribute(o,a),sr.applyMatrix4(e.matrixWorld),this.expandByPoint(sr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),sc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),sc.copy(r.boundingBox)),sc.applyMatrix4(e.matrixWorld),this.union(sc)}const i=e.children;for(let o=0,a=i.length;o<a;o++)this.expandByObject(i[o],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,sr),sr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_s),lc.subVectors(this.max,_s),Yo.subVectors(e.a,_s),qo.subVectors(e.b,_s),Ko.subVectors(e.c,_s),ci.subVectors(qo,Yo),ui.subVectors(Ko,qo),Ji.subVectors(Yo,Ko);let n=[0,-ci.z,ci.y,0,-ui.z,ui.y,0,-Ji.z,Ji.y,ci.z,0,-ci.x,ui.z,0,-ui.x,Ji.z,0,-Ji.x,-ci.y,ci.x,0,-ui.y,ui.x,0,-Ji.y,Ji.x,0];return!kd(n,Yo,qo,Ko,lc)||(n=[1,0,0,0,1,0,0,0,1],!kd(n,Yo,qo,Ko,lc))?!1:(cc.crossVectors(ci,ui),n=[cc.x,cc.y,cc.z],kd(n,Yo,qo,Ko,lc))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,sr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(sr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Or[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Or[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Or[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Or[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Or[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Or[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Or[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Or[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Or),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Or=[new K,new K,new K,new K,new K,new K,new K,new K],sr=new K,sc=new Pl,Yo=new K,qo=new K,Ko=new K,ci=new K,ui=new K,Ji=new K,_s=new K,lc=new K,cc=new K,eo=new K;function kd(t,e,n,r,i){for(let o=0,a=t.length-3;o<=a;o+=3){eo.fromArray(t,o);const s=i.x*Math.abs(eo.x)+i.y*Math.abs(eo.y)+i.z*Math.abs(eo.z),l=e.dot(eo),c=n.dot(eo),u=r.dot(eo);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>s)return!1}return!0}const yD=new Pl,ys=new K,zd=new K;class Lf{constructor(e=new K,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):yD.setFromPoints(e).getCenter(r);let i=0;for(let o=0,a=e.length;o<a;o++)i=Math.max(i,r.distanceToSquared(e[o]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ys.subVectors(e,this.center);const n=ys.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),i=(r-this.radius)*.5;this.center.addScaledVector(ys,i/r),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ys.copy(e.center).add(zd)),this.expandByPoint(ys.copy(e.center).sub(zd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Fr=new K,Bd=new K,uc=new K,fi=new K,Hd=new K,fc=new K,Vd=new K;class sg{constructor(e=new K,n=new K(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fr)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Fr.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Fr.copy(this.origin).addScaledVector(this.direction,n),Fr.distanceToSquared(e))}distanceSqToSegment(e,n,r,i){Bd.copy(e).add(n).multiplyScalar(.5),uc.copy(n).sub(e).normalize(),fi.copy(this.origin).sub(Bd);const o=e.distanceTo(n)*.5,a=-this.direction.dot(uc),s=fi.dot(this.direction),l=-fi.dot(uc),c=fi.lengthSq(),u=Math.abs(1-a*a);let f,d,p,_;if(u>0)if(f=a*l-s,d=a*s-l,_=o*u,f>=0)if(d>=-_)if(d<=_){const v=1/u;f*=v,d*=v,p=f*(f+a*d+2*s)+d*(a*f+d+2*l)+c}else d=o,f=Math.max(0,-(a*d+s)),p=-f*f+d*(d+2*l)+c;else d=-o,f=Math.max(0,-(a*d+s)),p=-f*f+d*(d+2*l)+c;else d<=-_?(f=Math.max(0,-(-a*o+s)),d=f>0?-o:Math.min(Math.max(-o,-l),o),p=-f*f+d*(d+2*l)+c):d<=_?(f=0,d=Math.min(Math.max(-o,-l),o),p=d*(d+2*l)+c):(f=Math.max(0,-(a*o+s)),d=f>0?o:Math.min(Math.max(-o,-l),o),p=-f*f+d*(d+2*l)+c);else d=a>0?-o:o,f=Math.max(0,-(a*d+s)),p=-f*f+d*(d+2*l)+c;return r&&r.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(Bd).addScaledVector(uc,d),p}intersectSphere(e,n){Fr.subVectors(e.center,this.origin);const r=Fr.dot(this.direction),i=Fr.dot(Fr)-r*r,o=e.radius*e.radius;if(i>o)return null;const a=Math.sqrt(o-i),s=r-a,l=r+a;return l<0?null:s<0?this.at(l,n):this.at(s,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,i,o,a,s,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(r=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(r=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(o=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(o=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),r>a||o>i||((o>r||isNaN(r))&&(r=o),(a<i||isNaN(i))&&(i=a),f>=0?(s=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(s=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),r>l||s>i)||((s>r||r!==r)&&(r=s),(l<i||i!==i)&&(i=l),i<0)?null:this.at(r>=0?r:i,n)}intersectsBox(e){return this.intersectBox(e,Fr)!==null}intersectTriangle(e,n,r,i,o){Hd.subVectors(n,e),fc.subVectors(r,e),Vd.crossVectors(Hd,fc);let a=this.direction.dot(Vd),s;if(a>0){if(i)return null;s=1}else if(a<0)s=-1,a=-a;else return null;fi.subVectors(this.origin,e);const l=s*this.direction.dot(fc.crossVectors(fi,fc));if(l<0)return null;const c=s*this.direction.dot(Hd.cross(fi));if(c<0||l+c>a)return null;const u=-s*fi.dot(Vd);return u<0?null:this.at(u/a,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $t{constructor(e,n,r,i,o,a,s,l,c,u,f,d,p,_,v,m){$t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,i,o,a,s,l,c,u,f,d,p,_,v,m)}set(e,n,r,i,o,a,s,l,c,u,f,d,p,_,v,m){const h=this.elements;return h[0]=e,h[4]=n,h[8]=r,h[12]=i,h[1]=o,h[5]=a,h[9]=s,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=p,h[7]=_,h[11]=v,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $t().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,i=1/Zo.setFromMatrixColumn(e,0).length(),o=1/Zo.setFromMatrixColumn(e,1).length(),a=1/Zo.setFromMatrixColumn(e,2).length();return n[0]=r[0]*i,n[1]=r[1]*i,n[2]=r[2]*i,n[3]=0,n[4]=r[4]*o,n[5]=r[5]*o,n[6]=r[6]*o,n[7]=0,n[8]=r[8]*a,n[9]=r[9]*a,n[10]=r[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,i=e.y,o=e.z,a=Math.cos(r),s=Math.sin(r),l=Math.cos(i),c=Math.sin(i),u=Math.cos(o),f=Math.sin(o);if(e.order==="XYZ"){const d=a*u,p=a*f,_=s*u,v=s*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=p+_*c,n[5]=d-v*c,n[9]=-s*l,n[2]=v-d*c,n[6]=_+p*c,n[10]=a*l}else if(e.order==="YXZ"){const d=l*u,p=l*f,_=c*u,v=c*f;n[0]=d+v*s,n[4]=_*s-p,n[8]=a*c,n[1]=a*f,n[5]=a*u,n[9]=-s,n[2]=p*s-_,n[6]=v+d*s,n[10]=a*l}else if(e.order==="ZXY"){const d=l*u,p=l*f,_=c*u,v=c*f;n[0]=d-v*s,n[4]=-a*f,n[8]=_+p*s,n[1]=p+_*s,n[5]=a*u,n[9]=v-d*s,n[2]=-a*c,n[6]=s,n[10]=a*l}else if(e.order==="ZYX"){const d=a*u,p=a*f,_=s*u,v=s*f;n[0]=l*u,n[4]=_*c-p,n[8]=d*c+v,n[1]=l*f,n[5]=v*c+d,n[9]=p*c-_,n[2]=-c,n[6]=s*l,n[10]=a*l}else if(e.order==="YZX"){const d=a*l,p=a*c,_=s*l,v=s*c;n[0]=l*u,n[4]=v-d*f,n[8]=_*f+p,n[1]=f,n[5]=a*u,n[9]=-s*u,n[2]=-c*u,n[6]=p*f+_,n[10]=d-v*f}else if(e.order==="XZY"){const d=a*l,p=a*c,_=s*l,v=s*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=d*f+v,n[5]=a*u,n[9]=p*f-_,n[2]=_*f-p,n[6]=s*u,n[10]=v*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xD,e,SD)}lookAt(e,n,r){const i=this.elements;return Nn.subVectors(e,n),Nn.lengthSq()===0&&(Nn.z=1),Nn.normalize(),di.crossVectors(r,Nn),di.lengthSq()===0&&(Math.abs(r.z)===1?Nn.x+=1e-4:Nn.z+=1e-4,Nn.normalize(),di.crossVectors(r,Nn)),di.normalize(),dc.crossVectors(Nn,di),i[0]=di.x,i[4]=dc.x,i[8]=Nn.x,i[1]=di.y,i[5]=dc.y,i[9]=Nn.y,i[2]=di.z,i[6]=dc.z,i[10]=Nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,i=n.elements,o=this.elements,a=r[0],s=r[4],l=r[8],c=r[12],u=r[1],f=r[5],d=r[9],p=r[13],_=r[2],v=r[6],m=r[10],h=r[14],g=r[3],y=r[7],E=r[11],A=r[15],x=i[0],M=i[4],P=i[8],T=i[12],w=i[1],L=i[5],V=i[9],F=i[13],W=i[2],ee=i[6],U=i[10],N=i[14],R=i[3],z=i[7],X=i[11],Y=i[15];return o[0]=a*x+s*w+l*W+c*R,o[4]=a*M+s*L+l*ee+c*z,o[8]=a*P+s*V+l*U+c*X,o[12]=a*T+s*F+l*N+c*Y,o[1]=u*x+f*w+d*W+p*R,o[5]=u*M+f*L+d*ee+p*z,o[9]=u*P+f*V+d*U+p*X,o[13]=u*T+f*F+d*N+p*Y,o[2]=_*x+v*w+m*W+h*R,o[6]=_*M+v*L+m*ee+h*z,o[10]=_*P+v*V+m*U+h*X,o[14]=_*T+v*F+m*N+h*Y,o[3]=g*x+y*w+E*W+A*R,o[7]=g*M+y*L+E*ee+A*z,o[11]=g*P+y*V+E*U+A*X,o[15]=g*T+y*F+E*N+A*Y,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],i=e[8],o=e[12],a=e[1],s=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],p=e[14],_=e[3],v=e[7],m=e[11],h=e[15];return _*(+o*l*f-i*c*f-o*s*d+r*c*d+i*s*p-r*l*p)+v*(+n*l*p-n*c*d+o*a*d-i*a*p+i*c*u-o*l*u)+m*(+n*c*f-n*s*p-o*a*f+r*a*p+o*s*u-r*c*u)+h*(-i*s*u-n*l*f+n*s*d+i*a*f-r*a*d+r*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=n,i[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],i=e[2],o=e[3],a=e[4],s=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],p=e[11],_=e[12],v=e[13],m=e[14],h=e[15],g=f*m*c-v*d*c+v*l*p-s*m*p-f*l*h+s*d*h,y=_*d*c-u*m*c-_*l*p+a*m*p+u*l*h-a*d*h,E=u*v*c-_*f*c+_*s*p-a*v*p-u*s*h+a*f*h,A=_*f*l-u*v*l-_*s*d+a*v*d+u*s*m-a*f*m,x=n*g+r*y+i*E+o*A;if(x===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/x;return e[0]=g*M,e[1]=(v*d*o-f*m*o-v*i*p+r*m*p+f*i*h-r*d*h)*M,e[2]=(s*m*o-v*l*o+v*i*c-r*m*c-s*i*h+r*l*h)*M,e[3]=(f*l*o-s*d*o-f*i*c+r*d*c+s*i*p-r*l*p)*M,e[4]=y*M,e[5]=(u*m*o-_*d*o+_*i*p-n*m*p-u*i*h+n*d*h)*M,e[6]=(_*l*o-a*m*o-_*i*c+n*m*c+a*i*h-n*l*h)*M,e[7]=(a*d*o-u*l*o+u*i*c-n*d*c-a*i*p+n*l*p)*M,e[8]=E*M,e[9]=(_*f*o-u*v*o-_*r*p+n*v*p+u*r*h-n*f*h)*M,e[10]=(a*v*o-_*s*o+_*r*c-n*v*c-a*r*h+n*s*h)*M,e[11]=(u*s*o-a*f*o-u*r*c+n*f*c+a*r*p-n*s*p)*M,e[12]=A*M,e[13]=(u*v*i-_*f*i+_*r*d-n*v*d-u*r*m+n*f*m)*M,e[14]=(_*s*i-a*v*i-_*r*l+n*v*l+a*r*m-n*s*m)*M,e[15]=(a*f*i-u*s*i+u*r*l-n*f*l-a*r*d+n*s*d)*M,this}scale(e){const n=this.elements,r=e.x,i=e.y,o=e.z;return n[0]*=r,n[4]*=i,n[8]*=o,n[1]*=r,n[5]*=i,n[9]*=o,n[2]*=r,n[6]*=i,n[10]*=o,n[3]*=r,n[7]*=i,n[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,i))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),i=Math.sin(n),o=1-r,a=e.x,s=e.y,l=e.z,c=o*a,u=o*s;return this.set(c*a+r,c*s-i*l,c*l+i*s,0,c*s+i*l,u*s+r,u*l-i*a,0,c*l-i*s,u*l+i*a,o*l*l+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,i,o,a){return this.set(1,r,o,0,e,1,a,0,n,i,1,0,0,0,0,1),this}compose(e,n,r){const i=this.elements,o=n._x,a=n._y,s=n._z,l=n._w,c=o+o,u=a+a,f=s+s,d=o*c,p=o*u,_=o*f,v=a*u,m=a*f,h=s*f,g=l*c,y=l*u,E=l*f,A=r.x,x=r.y,M=r.z;return i[0]=(1-(v+h))*A,i[1]=(p+E)*A,i[2]=(_-y)*A,i[3]=0,i[4]=(p-E)*x,i[5]=(1-(d+h))*x,i[6]=(m+g)*x,i[7]=0,i[8]=(_+y)*M,i[9]=(m-g)*M,i[10]=(1-(d+v))*M,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,n,r){const i=this.elements;let o=Zo.set(i[0],i[1],i[2]).length();const a=Zo.set(i[4],i[5],i[6]).length(),s=Zo.set(i[8],i[9],i[10]).length();this.determinant()<0&&(o=-o),e.x=i[12],e.y=i[13],e.z=i[14],lr.copy(this);const c=1/o,u=1/a,f=1/s;return lr.elements[0]*=c,lr.elements[1]*=c,lr.elements[2]*=c,lr.elements[4]*=u,lr.elements[5]*=u,lr.elements[6]*=u,lr.elements[8]*=f,lr.elements[9]*=f,lr.elements[10]*=f,n.setFromRotationMatrix(lr),r.x=o,r.y=a,r.z=s,this}makePerspective(e,n,r,i,o,a,s=Xr){const l=this.elements,c=2*o/(n-e),u=2*o/(r-i),f=(n+e)/(n-e),d=(r+i)/(r-i);let p,_;if(s===Xr)p=-(a+o)/(a-o),_=-2*a*o/(a-o);else if(s===ku)p=-a/(a-o),_=-a*o/(a-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,r,i,o,a,s=Xr){const l=this.elements,c=1/(n-e),u=1/(r-i),f=1/(a-o),d=(n+e)*c,p=(r+i)*u;let _,v;if(s===Xr)_=(a+o)*f,v=-2*f;else if(s===ku)_=o*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let i=0;i<16;i++)if(n[i]!==r[i])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Zo=new K,lr=new $t,xD=new K(0,0,0),SD=new K(1,1,1),di=new K,dc=new K,Nn=new K,y_=new $t,x_=new Oo;class ti{constructor(e=0,n=0,r=0,i=ti.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,i=this._order){return this._x=e,this._y=n,this._z=r,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const i=e.elements,o=i[0],a=i[4],s=i[8],l=i[1],c=i[5],u=i[9],f=i[2],d=i[6],p=i[10];switch(n){case"XYZ":this._y=Math.asin(hn(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-hn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(s,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(hn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-hn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(hn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(s,p));break;case"XZY":this._z=Math.asin(-hn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(s,o)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return y_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(y_,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return x_.setFromEuler(this),this.setFromQuaternion(x_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ti.DEFAULT_ORDER="XYZ";class LM{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ED=0;const S_=new K,Qo=new Oo,kr=new $t,hc=new K,xs=new K,MD=new K,wD=new Oo,E_=new K(1,0,0),M_=new K(0,1,0),w_=new K(0,0,1),T_={type:"added"},TD={type:"removed"},Jo={type:"childadded",child:null},Gd={type:"childremoved",child:null};class Ln extends zo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ED++}),this.uuid=rs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ln.DEFAULT_UP.clone();const e=new K,n=new ti,r=new Oo,i=new K(1,1,1);function o(){r.setFromEuler(n,!1)}function a(){n.setFromQuaternion(r,void 0,!1)}n._onChange(o),r._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new $t},normalMatrix:{value:new ct}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=Ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new LM,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Qo.setFromAxisAngle(e,n),this.quaternion.multiply(Qo),this}rotateOnWorldAxis(e,n){return Qo.setFromAxisAngle(e,n),this.quaternion.premultiply(Qo),this}rotateX(e){return this.rotateOnAxis(E_,e)}rotateY(e){return this.rotateOnAxis(M_,e)}rotateZ(e){return this.rotateOnAxis(w_,e)}translateOnAxis(e,n){return S_.copy(e).applyQuaternion(this.quaternion),this.position.add(S_.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(E_,e)}translateY(e){return this.translateOnAxis(M_,e)}translateZ(e){return this.translateOnAxis(w_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(kr.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?hc.copy(e):hc.set(e,n,r);const i=this.parent;this.updateWorldMatrix(!0,!1),xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kr.lookAt(xs,hc,this.up):kr.lookAt(hc,xs,this.up),this.quaternion.setFromRotationMatrix(kr),i&&(kr.extractRotation(i.matrixWorld),Qo.setFromRotationMatrix(kr),this.quaternion.premultiply(Qo.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(T_),Jo.child=e,this.dispatchEvent(Jo),Jo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(TD),Gd.child=e,this.dispatchEvent(Gd),Gd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),kr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),kr.multiply(e.parent.matrixWorld)),e.applyMatrix4(kr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(T_),Jo.child=e,this.dispatchEvent(Jo),Jo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,i=this.children.length;r<i;r++){const a=this.children[r].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const i=this.children;for(let o=0,a=i.length;o<a;o++)i[o].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,e,MD),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,wD,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,i=n.length;r<i;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,i=n.length;r<i;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,i=n.length;r<i;r++){const o=n[r];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const i=this.children;for(let o=0,a=i.length;o<a;o++){const s=i[o];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(s=>({boxInitialized:s.boxInitialized,boxMin:s.box.min.toArray(),boxMax:s.box.max.toArray(),sphereInitialized:s.sphereInitialized,sphereRadius:s.sphere.radius,sphereCenter:s.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function o(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=o(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];o(e.shapes,f)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,c=this.material.length;l<c;l++)s.push(o(e.materials,this.material[l]));i.material=s}else i.material=o(e.materials,this.material);if(this.children.length>0){i.children=[];for(let s=0;s<this.children.length;s++)i.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];i.animations.push(o(e.animations,l))}}if(n){const s=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),d=a(e.skeletons),p=a(e.animations),_=a(e.nodes);s.length>0&&(r.geometries=s),l.length>0&&(r.materials=l),c.length>0&&(r.textures=c),u.length>0&&(r.images=u),f.length>0&&(r.shapes=f),d.length>0&&(r.skeletons=d),p.length>0&&(r.animations=p),_.length>0&&(r.nodes=_)}return r.object=i,r;function a(s){const l=[];for(const c in s){const u=s[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const i=e.children[r];this.add(i.clone())}return this}}Ln.DEFAULT_UP=new K(0,1,0);Ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const cr=new K,zr=new K,Wd=new K,Br=new K,ea=new K,ta=new K,b_=new K,jd=new K,$d=new K,Xd=new K;class Ar{constructor(e=new K,n=new K,r=new K){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,i){i.subVectors(r,n),cr.subVectors(e,n),i.cross(cr);const o=i.lengthSq();return o>0?i.multiplyScalar(1/Math.sqrt(o)):i.set(0,0,0)}static getBarycoord(e,n,r,i,o){cr.subVectors(i,n),zr.subVectors(r,n),Wd.subVectors(e,n);const a=cr.dot(cr),s=cr.dot(zr),l=cr.dot(Wd),c=zr.dot(zr),u=zr.dot(Wd),f=a*c-s*s;if(f===0)return o.set(0,0,0),null;const d=1/f,p=(c*l-s*u)*d,_=(a*u-s*l)*d;return o.set(1-p-_,_,p)}static containsPoint(e,n,r,i){return this.getBarycoord(e,n,r,i,Br)===null?!1:Br.x>=0&&Br.y>=0&&Br.x+Br.y<=1}static getInterpolation(e,n,r,i,o,a,s,l){return this.getBarycoord(e,n,r,i,Br)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,Br.x),l.addScaledVector(a,Br.y),l.addScaledVector(s,Br.z),l)}static isFrontFacing(e,n,r,i){return cr.subVectors(r,n),zr.subVectors(e,n),cr.cross(zr).dot(i)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,i){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,n,r,i){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return cr.subVectors(this.c,this.b),zr.subVectors(this.a,this.b),cr.cross(zr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ar.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Ar.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,i,o){return Ar.getInterpolation(e,this.a,this.b,this.c,n,r,i,o)}containsPoint(e){return Ar.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ar.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,i=this.b,o=this.c;let a,s;ea.subVectors(i,r),ta.subVectors(o,r),jd.subVectors(e,r);const l=ea.dot(jd),c=ta.dot(jd);if(l<=0&&c<=0)return n.copy(r);$d.subVectors(e,i);const u=ea.dot($d),f=ta.dot($d);if(u>=0&&f<=u)return n.copy(i);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),n.copy(r).addScaledVector(ea,a);Xd.subVectors(e,o);const p=ea.dot(Xd),_=ta.dot(Xd);if(_>=0&&p<=_)return n.copy(o);const v=p*c-l*_;if(v<=0&&c>=0&&_<=0)return s=c/(c-_),n.copy(r).addScaledVector(ta,s);const m=u*_-p*f;if(m<=0&&f-u>=0&&p-_>=0)return b_.subVectors(o,i),s=(f-u)/(f-u+(p-_)),n.copy(i).addScaledVector(b_,s);const h=1/(m+v+d);return a=v*h,s=d*h,n.copy(r).addScaledVector(ea,a).addScaledVector(ta,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const DM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hi={h:0,s:0,l:0},pc={h:0,s:0,l:0};function Yd(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class vt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Tr){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,St.toWorkingColorSpace(this,n),this}setRGB(e,n,r,i=St.workingColorSpace){return this.r=e,this.g=n,this.b=r,St.toWorkingColorSpace(this,i),this}setHSL(e,n,r,i=St.workingColorSpace){if(e=ag(e,1),n=hn(n,0,1),r=hn(r,0,1),n===0)this.r=this.g=this.b=r;else{const o=r<=.5?r*(1+n):r+n-r*n,a=2*r-o;this.r=Yd(a,o,e+1/3),this.g=Yd(a,o,e),this.b=Yd(a,o,e-1/3)}return St.toWorkingColorSpace(this,i),this}setStyle(e,n=Tr){function r(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const a=i[1],s=i[2];switch(a){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return r(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,n);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return r(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,n);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return r(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=i[1],a=o.length;if(a===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(o,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Tr){const r=DM[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Na(e.r),this.g=Na(e.g),this.b=Na(e.b),this}copyLinearToSRGB(e){return this.r=Ud(e.r),this.g=Ud(e.g),this.b=Ud(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tr){return St.fromWorkingColorSpace(fn.copy(this),e),Math.round(hn(fn.r*255,0,255))*65536+Math.round(hn(fn.g*255,0,255))*256+Math.round(hn(fn.b*255,0,255))}getHexString(e=Tr){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=St.workingColorSpace){St.fromWorkingColorSpace(fn.copy(this),n);const r=fn.r,i=fn.g,o=fn.b,a=Math.max(r,i,o),s=Math.min(r,i,o);let l,c;const u=(s+a)/2;if(s===a)l=0,c=0;else{const f=a-s;switch(c=u<=.5?f/(a+s):f/(2-a-s),a){case r:l=(i-o)/f+(i<o?6:0);break;case i:l=(o-r)/f+2;break;case o:l=(r-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=St.workingColorSpace){return St.fromWorkingColorSpace(fn.copy(this),n),e.r=fn.r,e.g=fn.g,e.b=fn.b,e}getStyle(e=Tr){St.fromWorkingColorSpace(fn.copy(this),e);const n=fn.r,r=fn.g,i=fn.b;return e!==Tr?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(i*255)})`}offsetHSL(e,n,r){return this.getHSL(hi),this.setHSL(hi.h+e,hi.s+n,hi.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(hi),e.getHSL(pc);const r=Gs(hi.h,pc.h,n),i=Gs(hi.s,pc.s,n),o=Gs(hi.l,pc.l,n);return this.setHSL(r,i,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,i=this.b,o=e.elements;return this.r=o[0]*n+o[3]*r+o[6]*i,this.g=o[1]*n+o[4]*r+o[7]*i,this.b=o[2]*n+o[5]*r+o[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const fn=new vt;vt.NAMES=DM;let bD=0;class Ll extends zo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bD++}),this.uuid=rs(),this.name="",this.type="Material",this.blending=Da,this.side=Vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pp,this.blendDst=Lp,this.blendEquation=uo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new vt(0,0,0),this.blendAlpha=0,this.depthFunc=Iu,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=f_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$o,this.stencilZFail=$o,this.stencilZPass=$o,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const i=this[n];if(i===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(r):i&&i.isVector3&&r&&r.isVector3?i.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Da&&(r.blending=this.blending),this.side!==Vi&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Pp&&(r.blendSrc=this.blendSrc),this.blendDst!==Lp&&(r.blendDst=this.blendDst),this.blendEquation!==uo&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Iu&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==f_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$o&&(r.stencilFail=this.stencilFail),this.stencilZFail!==$o&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==$o&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function i(o){const a=[];for(const s in o){const l=o[s];delete l.metadata,a.push(l)}return a}if(n){const o=i(e.textures),a=i(e.images);o.length>0&&(r.textures=o),a.length>0&&(r.images=a)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const i=n.length;r=new Array(i);for(let o=0;o!==i;++o)r[o]=n[o].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class lg extends Ll{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.combine=_M,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Vt=new K,mc=new Je;class Dr{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=d_,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return AM("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let i=0,o=this.itemSize;i<o;i++)this.array[e+i]=n.array[r+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)mc.fromBufferAttribute(this,n),mc.applyMatrix3(e),this.setXY(n,mc.x,mc.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Vt.fromBufferAttribute(this,n),Vt.applyMatrix3(e),this.setXYZ(n,Vt.x,Vt.y,Vt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Vt.fromBufferAttribute(this,n),Vt.applyMatrix4(e),this.setXYZ(n,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Vt.fromBufferAttribute(this,n),Vt.applyNormalMatrix(e),this.setXYZ(n,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Vt.fromBufferAttribute(this,n),Vt.transformDirection(e),this.setXYZ(n,Vt.x,Vt.y,Vt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=ua(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=mn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ua(n,this.array)),n}setX(e,n){return this.normalized&&(n=mn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ua(n,this.array)),n}setY(e,n){return this.normalized&&(n=mn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ua(n,this.array)),n}setZ(e,n){return this.normalized&&(n=mn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ua(n,this.array)),n}setW(e,n){return this.normalized&&(n=mn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=mn(n,this.array),r=mn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,i){return e*=this.itemSize,this.normalized&&(n=mn(n,this.array),r=mn(r,this.array),i=mn(i,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=i,this}setXYZW(e,n,r,i,o){return e*=this.itemSize,this.normalized&&(n=mn(n,this.array),r=mn(r,this.array),i=mn(i,this.array),o=mn(o,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=i,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==d_&&(e.usage=this.usage),e}}class IM extends Dr{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class NM extends Dr{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class Dn extends Dr{constructor(e,n,r){super(new Float32Array(e),n,r)}}let CD=0;const qn=new $t,qd=new Ln,na=new K,Un=new Pl,Ss=new Pl,Qt=new K;class Ir extends zo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:CD++}),this.uuid=rs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(CM(e)?NM:IM)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const o=new ct().getNormalMatrix(e);r.applyNormalMatrix(o),r.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qn.makeRotationFromQuaternion(e),this.applyMatrix4(qn),this}rotateX(e){return qn.makeRotationX(e),this.applyMatrix4(qn),this}rotateY(e){return qn.makeRotationY(e),this.applyMatrix4(qn),this}rotateZ(e){return qn.makeRotationZ(e),this.applyMatrix4(qn),this}translate(e,n,r){return qn.makeTranslation(e,n,r),this.applyMatrix4(qn),this}scale(e,n,r){return qn.makeScale(e,n,r),this.applyMatrix4(qn),this}lookAt(e){return qd.lookAt(e),qd.updateMatrix(),this.applyMatrix4(qd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(na).negate(),this.translate(na.x,na.y,na.z),this}setFromPoints(e){const n=[];for(let r=0,i=e.length;r<i;r++){const o=e[r];n.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new Dn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,i=n.length;r<i;r++){const o=n[r];Un.setFromBufferAttribute(o),this.morphTargetsRelative?(Qt.addVectors(this.boundingBox.min,Un.min),this.boundingBox.expandByPoint(Qt),Qt.addVectors(this.boundingBox.max,Un.max),this.boundingBox.expandByPoint(Qt)):(this.boundingBox.expandByPoint(Un.min),this.boundingBox.expandByPoint(Un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Lf);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){const r=this.boundingSphere.center;if(Un.setFromBufferAttribute(e),n)for(let o=0,a=n.length;o<a;o++){const s=n[o];Ss.setFromBufferAttribute(s),this.morphTargetsRelative?(Qt.addVectors(Un.min,Ss.min),Un.expandByPoint(Qt),Qt.addVectors(Un.max,Ss.max),Un.expandByPoint(Qt)):(Un.expandByPoint(Ss.min),Un.expandByPoint(Ss.max))}Un.getCenter(r);let i=0;for(let o=0,a=e.count;o<a;o++)Qt.fromBufferAttribute(e,o),i=Math.max(i,r.distanceToSquared(Qt));if(n)for(let o=0,a=n.length;o<a;o++){const s=n[o],l=this.morphTargetsRelative;for(let c=0,u=s.count;c<u;c++)Qt.fromBufferAttribute(s,c),l&&(na.fromBufferAttribute(e,c),Qt.add(na)),i=Math.max(i,r.distanceToSquared(Qt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,i=n.normal,o=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Dr(new Float32Array(4*r.count),4));const a=this.getAttribute("tangent"),s=[],l=[];for(let P=0;P<r.count;P++)s[P]=new K,l[P]=new K;const c=new K,u=new K,f=new K,d=new Je,p=new Je,_=new Je,v=new K,m=new K;function h(P,T,w){c.fromBufferAttribute(r,P),u.fromBufferAttribute(r,T),f.fromBufferAttribute(r,w),d.fromBufferAttribute(o,P),p.fromBufferAttribute(o,T),_.fromBufferAttribute(o,w),u.sub(c),f.sub(c),p.sub(d),_.sub(d);const L=1/(p.x*_.y-_.x*p.y);isFinite(L)&&(v.copy(u).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(L),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(L),s[P].add(v),s[T].add(v),s[w].add(v),l[P].add(m),l[T].add(m),l[w].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let P=0,T=g.length;P<T;++P){const w=g[P],L=w.start,V=w.count;for(let F=L,W=L+V;F<W;F+=3)h(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const y=new K,E=new K,A=new K,x=new K;function M(P){A.fromBufferAttribute(i,P),x.copy(A);const T=s[P];y.copy(T),y.sub(A.multiplyScalar(A.dot(T))).normalize(),E.crossVectors(x,T);const L=E.dot(l[P])<0?-1:1;a.setXYZW(P,y.x,y.y,y.z,L)}for(let P=0,T=g.length;P<T;++P){const w=g[P],L=w.start,V=w.count;for(let F=L,W=L+V;F<W;F+=3)M(e.getX(F+0)),M(e.getX(F+1)),M(e.getX(F+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Dr(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let d=0,p=r.count;d<p;d++)r.setXYZ(d,0,0,0);const i=new K,o=new K,a=new K,s=new K,l=new K,c=new K,u=new K,f=new K;if(e)for(let d=0,p=e.count;d<p;d+=3){const _=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(n,_),o.fromBufferAttribute(n,v),a.fromBufferAttribute(n,m),u.subVectors(a,o),f.subVectors(i,o),u.cross(f),s.fromBufferAttribute(r,_),l.fromBufferAttribute(r,v),c.fromBufferAttribute(r,m),s.add(u),l.add(u),c.add(u),r.setXYZ(_,s.x,s.y,s.z),r.setXYZ(v,l.x,l.y,l.z),r.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=n.count;d<p;d+=3)i.fromBufferAttribute(n,d+0),o.fromBufferAttribute(n,d+1),a.fromBufferAttribute(n,d+2),u.subVectors(a,o),f.subVectors(i,o),u.cross(f),r.setXYZ(d+0,u.x,u.y,u.z),r.setXYZ(d+1,u.x,u.y,u.z),r.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)Qt.fromBufferAttribute(e,n),Qt.normalize(),e.setXYZ(n,Qt.x,Qt.y,Qt.z)}toNonIndexed(){function e(s,l){const c=s.array,u=s.itemSize,f=s.normalized,d=new c.constructor(l.length*u);let p=0,_=0;for(let v=0,m=l.length;v<m;v++){s.isInterleavedBufferAttribute?p=l[v]*s.data.stride+s.offset:p=l[v]*u;for(let h=0;h<u;h++)d[_++]=c[p++]}return new Dr(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ir,r=this.index.array,i=this.attributes;for(const s in i){const l=i[s],c=e(l,r);n.setAttribute(s,c)}const o=this.morphAttributes;for(const s in o){const l=[],c=o[s];for(let u=0,f=c.length;u<f;u++){const d=c[u],p=e(d,r);l.push(p)}n.morphAttributes[s]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let s=0,l=a.length;s<l;s++){const c=a[s];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const l in r){const c=r[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(i[l]=u,o=!0)}o&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(n))}const o=e.morphAttributes;for(const c in o){const u=[],f=o[c];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const C_=new $t,to=new sg,gc=new Lf,A_=new K,ra=new K,ia=new K,oa=new K,Kd=new K,vc=new K,_c=new Je,yc=new Je,xc=new Je,R_=new K,P_=new K,L_=new K,Sc=new K,Ec=new K;class yn extends Ln{constructor(e=new Ir,n=new lg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const i=n[r[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=i.length;o<a;o++){const s=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=o}}}}getVertexPosition(e,n){const r=this.geometry,i=r.attributes.position,o=r.morphAttributes.position,a=r.morphTargetsRelative;n.fromBufferAttribute(i,e);const s=this.morphTargetInfluences;if(o&&s){vc.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const u=s[l],f=o[l];u!==0&&(Kd.fromBufferAttribute(f,e),a?vc.addScaledVector(Kd,u):vc.addScaledVector(Kd.sub(n),u))}n.add(vc)}return n}raycast(e,n){const r=this.geometry,i=this.material,o=this.matrixWorld;i!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),gc.copy(r.boundingSphere),gc.applyMatrix4(o),to.copy(e.ray).recast(e.near),!(gc.containsPoint(to.origin)===!1&&(to.intersectSphere(gc,A_)===null||to.origin.distanceToSquared(A_)>(e.far-e.near)**2))&&(C_.copy(o).invert(),to.copy(e.ray).applyMatrix4(C_),!(r.boundingBox!==null&&to.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,to)))}_computeIntersections(e,n,r){let i;const o=this.geometry,a=this.material,s=o.index,l=o.attributes.position,c=o.attributes.uv,u=o.attributes.uv1,f=o.attributes.normal,d=o.groups,p=o.drawRange;if(s!==null)if(Array.isArray(a))for(let _=0,v=d.length;_<v;_++){const m=d[_],h=a[m.materialIndex],g=Math.max(m.start,p.start),y=Math.min(s.count,Math.min(m.start+m.count,p.start+p.count));for(let E=g,A=y;E<A;E+=3){const x=s.getX(E),M=s.getX(E+1),P=s.getX(E+2);i=Mc(this,h,e,r,c,u,f,x,M,P),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=m.materialIndex,n.push(i))}}else{const _=Math.max(0,p.start),v=Math.min(s.count,p.start+p.count);for(let m=_,h=v;m<h;m+=3){const g=s.getX(m),y=s.getX(m+1),E=s.getX(m+2);i=Mc(this,a,e,r,c,u,f,g,y,E),i&&(i.faceIndex=Math.floor(m/3),n.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,v=d.length;_<v;_++){const m=d[_],h=a[m.materialIndex],g=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let E=g,A=y;E<A;E+=3){const x=E,M=E+1,P=E+2;i=Mc(this,h,e,r,c,u,f,x,M,P),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=m.materialIndex,n.push(i))}}else{const _=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=_,h=v;m<h;m+=3){const g=m,y=m+1,E=m+2;i=Mc(this,a,e,r,c,u,f,g,y,E),i&&(i.faceIndex=Math.floor(m/3),n.push(i))}}}}function AD(t,e,n,r,i,o,a,s){let l;if(e.side===Rn?l=r.intersectTriangle(a,o,i,!0,s):l=r.intersectTriangle(i,o,a,e.side===Vi,s),l===null)return null;Ec.copy(s),Ec.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Ec);return c<n.near||c>n.far?null:{distance:c,point:Ec.clone(),object:t}}function Mc(t,e,n,r,i,o,a,s,l,c){t.getVertexPosition(s,ra),t.getVertexPosition(l,ia),t.getVertexPosition(c,oa);const u=AD(t,e,n,r,ra,ia,oa,Sc);if(u){i&&(_c.fromBufferAttribute(i,s),yc.fromBufferAttribute(i,l),xc.fromBufferAttribute(i,c),u.uv=Ar.getInterpolation(Sc,ra,ia,oa,_c,yc,xc,new Je)),o&&(_c.fromBufferAttribute(o,s),yc.fromBufferAttribute(o,l),xc.fromBufferAttribute(o,c),u.uv1=Ar.getInterpolation(Sc,ra,ia,oa,_c,yc,xc,new Je)),a&&(R_.fromBufferAttribute(a,s),P_.fromBufferAttribute(a,l),L_.fromBufferAttribute(a,c),u.normal=Ar.getInterpolation(Sc,ra,ia,oa,R_,P_,L_,new K),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));const f={a:s,b:l,c,normal:new K,materialIndex:0};Ar.getNormal(ra,ia,oa,f.normal),u.face=f}return u}class is extends Ir{constructor(e=1,n=1,r=1,i=1,o=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:i,heightSegments:o,depthSegments:a};const s=this;i=Math.floor(i),o=Math.floor(o),a=Math.floor(a);const l=[],c=[],u=[],f=[];let d=0,p=0;_("z","y","x",-1,-1,r,n,e,a,o,0),_("z","y","x",1,-1,r,n,-e,a,o,1),_("x","z","y",1,1,e,r,n,i,a,2),_("x","z","y",1,-1,e,r,-n,i,a,3),_("x","y","z",1,-1,e,n,r,i,o,4),_("x","y","z",-1,-1,e,n,-r,i,o,5),this.setIndex(l),this.setAttribute("position",new Dn(c,3)),this.setAttribute("normal",new Dn(u,3)),this.setAttribute("uv",new Dn(f,2));function _(v,m,h,g,y,E,A,x,M,P,T){const w=E/M,L=A/P,V=E/2,F=A/2,W=x/2,ee=M+1,U=P+1;let N=0,R=0;const z=new K;for(let X=0;X<U;X++){const Y=X*L-F;for(let oe=0;oe<ee;oe++){const xe=oe*w-V;z[v]=xe*g,z[m]=Y*y,z[h]=W,c.push(z.x,z.y,z.z),z[v]=0,z[m]=0,z[h]=x>0?1:-1,u.push(z.x,z.y,z.z),f.push(oe/M),f.push(1-X/P),N+=1}}for(let X=0;X<P;X++)for(let Y=0;Y<M;Y++){const oe=d+Y+ee*X,xe=d+Y+ee*(X+1),q=d+(Y+1)+ee*(X+1),ae=d+(Y+1)+ee*X;l.push(oe,xe,ae),l.push(xe,q,ae),R+=6}s.addGroup(p,R,T),p+=R,d+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new is(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Za(t){const e={};for(const n in t){e[n]={};for(const r in t[n]){const i=t[n][r];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=i.clone():Array.isArray(i)?e[n][r]=i.slice():e[n][r]=i}}return e}function gn(t){const e={};for(let n=0;n<t.length;n++){const r=Za(t[n]);for(const i in r)e[i]=r[i]}return e}function RD(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function UM(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:St.workingColorSpace}const PD={clone:Za,merge:gn};var LD=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,DD=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wn extends Ll{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=LD,this.fragmentShader=DD,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Za(e.uniforms),this.uniformsGroups=RD(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?n.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[i]={type:"m4",value:a.toArray()}:n.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const i in this.extensions)this.extensions[i]===!0&&(r[i]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class OM extends Ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t,this.coordinateSystem=Xr}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const pi=new K,D_=new Je,I_=new Je;class Qn extends OM{constructor(e=50,n=1,r=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=i,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=vl*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Vs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vl*2*Math.atan(Math.tan(Vs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(pi.x,pi.y).multiplyScalar(-e/pi.z),pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(pi.x,pi.y).multiplyScalar(-e/pi.z)}getViewSize(e,n){return this.getViewBounds(e,D_,I_),n.subVectors(I_,D_)}setViewOffset(e,n,r,i,o,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=i,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Vs*.5*this.fov)/this.zoom,r=2*n,i=this.aspect*r,o=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;o+=a.offsetX*i/l,n-=a.offsetY*r/c,i*=a.width/l,r*=a.height/c}const s=this.filmOffset;s!==0&&(o+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+i,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const aa=-90,sa=1;class ID extends Ln{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Qn(aa,sa,e,n);i.layers=this.layers,this.add(i);const o=new Qn(aa,sa,e,n);o.layers=this.layers,this.add(o);const a=new Qn(aa,sa,e,n);a.layers=this.layers,this.add(a);const s=new Qn(aa,sa,e,n);s.layers=this.layers,this.add(s);const l=new Qn(aa,sa,e,n);l.layers=this.layers,this.add(l);const c=new Qn(aa,sa,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,i,o,a,s,l]=n;for(const c of n)this.remove(c);if(e===Xr)r.up.set(0,1,0),r.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ku)r.up.set(0,-1,0),r.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,a,s,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,i),e.render(n,o),e.setRenderTarget(r,1,i),e.render(n,a),e.setRenderTarget(r,2,i),e.render(n,s),e.setRenderTarget(r,3,i),e.render(n,l),e.setRenderTarget(r,4,i),e.render(n,c),r.texture.generateMipmaps=v,e.setRenderTarget(r,5,i),e.render(n,u),e.setRenderTarget(f,d,p),e.xr.enabled=_,r.texture.needsPMREMUpdate=!0}}class FM extends Pn{constructor(e,n,r,i,o,a,s,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:$a,super(e,n,r,i,o,a,s,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ND extends Uo{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},i=[r,r,r,r,r,r];this.texture=new FM(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:gr}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new is(5,5,5),o=new Wn({name:"CubemapFromEquirect",uniforms:Za(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Rn,blending:Fi});o.uniforms.tEquirect.value=n;const a=new yn(i,o),s=n.minFilter;return n.minFilter===xo&&(n.minFilter=gr),new ID(1,10,this).update(e,a),n.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,r,i){const o=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,r,i);e.setRenderTarget(o)}}const Zd=new K,UD=new K,OD=new ct;class yi{constructor(e=new K(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,i){return this.normal.set(e,n,r),this.constant=i,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const i=Zd.subVectors(r,n).cross(UD.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Zd),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/i;return o<0||o>1?null:n.copy(e.start).addScaledVector(r,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||OD.getNormalMatrix(e),i=this.coplanarPoint(Zd).applyMatrix4(e),o=this.normal.applyMatrix3(r).normalize();return this.constant=-i.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const no=new Lf,wc=new K;class kM{constructor(e=new yi,n=new yi,r=new yi,i=new yi,o=new yi,a=new yi){this.planes=[e,n,r,i,o,a]}set(e,n,r,i,o,a){const s=this.planes;return s[0].copy(e),s[1].copy(n),s[2].copy(r),s[3].copy(i),s[4].copy(o),s[5].copy(a),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Xr){const r=this.planes,i=e.elements,o=i[0],a=i[1],s=i[2],l=i[3],c=i[4],u=i[5],f=i[6],d=i[7],p=i[8],_=i[9],v=i[10],m=i[11],h=i[12],g=i[13],y=i[14],E=i[15];if(r[0].setComponents(l-o,d-c,m-p,E-h).normalize(),r[1].setComponents(l+o,d+c,m+p,E+h).normalize(),r[2].setComponents(l+a,d+u,m+_,E+g).normalize(),r[3].setComponents(l-a,d-u,m-_,E-g).normalize(),r[4].setComponents(l-s,d-f,m-v,E-y).normalize(),n===Xr)r[5].setComponents(l+s,d+f,m+v,E+y).normalize();else if(n===ku)r[5].setComponents(s,f,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),no.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),no.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(no)}intersectsSprite(e){return no.center.set(0,0,0),no.radius=.7071067811865476,no.applyMatrix4(e.matrixWorld),this.intersectsSphere(no)}intersectsSphere(e){const n=this.planes,r=e.center,i=-e.radius;for(let o=0;o<6;o++)if(n[o].distanceToPoint(r)<i)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const i=n[r];if(wc.x=i.normal.x>0?e.max.x:e.min.x,wc.y=i.normal.y>0?e.max.y:e.min.y,wc.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(wc)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function zM(){let t=null,e=!1,n=null,r=null;function i(o,a){n(o,a),r=t.requestAnimationFrame(i)}return{start:function(){e!==!0&&n!==null&&(r=t.requestAnimationFrame(i),e=!0)},stop:function(){t.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(o){n=o},setContext:function(o){t=o}}}function FD(t){const e=new WeakMap;function n(s,l){const c=s.array,u=s.usage,f=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,u),s.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)s.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:s.version,size:f}}function r(s,l,c){const u=l.array,f=l._updateRange,d=l.updateRanges;if(t.bindBuffer(c,s),f.count===-1&&d.length===0&&t.bufferSubData(c,0,u),d.length!==0){for(let p=0,_=d.length;p<_;p++){const v=d[p];t.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}f.count!==-1&&(t.bufferSubData(c,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count),f.count=-1),l.onUploadCallback()}function i(s){return s.isInterleavedBufferAttribute&&(s=s.data),e.get(s)}function o(s){s.isInterleavedBufferAttribute&&(s=s.data);const l=e.get(s);l&&(t.deleteBuffer(l.buffer),e.delete(s))}function a(s,l){if(s.isGLBufferAttribute){const u=e.get(s);(!u||u.version<s.version)&&e.set(s,{buffer:s.buffer,type:s.type,bytesPerElement:s.elementSize,version:s.version});return}s.isInterleavedBufferAttribute&&(s=s.data);const c=e.get(s);if(c===void 0)e.set(s,n(s,l));else if(c.version<s.version){if(c.size!==s.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(c.buffer,s,l),c.version=s.version}}return{get:i,remove:o,update:a}}class Zi extends Ir{constructor(e=1,n=1,r=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:i};const o=e/2,a=n/2,s=Math.floor(r),l=Math.floor(i),c=s+1,u=l+1,f=e/s,d=n/l,p=[],_=[],v=[],m=[];for(let h=0;h<u;h++){const g=h*d-a;for(let y=0;y<c;y++){const E=y*f-o;_.push(E,-g,0),v.push(0,0,1),m.push(y/s),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let g=0;g<s;g++){const y=g+c*h,E=g+c*(h+1),A=g+1+c*(h+1),x=g+1+c*h;p.push(y,E,x),p.push(E,A,x)}this.setIndex(p),this.setAttribute("position",new Dn(_,3)),this.setAttribute("normal",new Dn(v,3)),this.setAttribute("uv",new Dn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zi(e.width,e.height,e.widthSegments,e.heightSegments)}}var kD=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zD=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,BD=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,HD=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,VD=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,GD=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,WD=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,jD=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$D=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,XD=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,YD=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qD=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,KD=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ZD=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,QD=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,JD=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,eI=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tI=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nI=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rI=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,iI=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,oI=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,aI=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( batchId );
	vColor.xyz *= batchingColor.xyz;
#endif`,sI=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,lI=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,cI=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,uI=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fI=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dI=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hI=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pI="gl_FragColor = linearToOutputTexel( gl_FragColor );",mI=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,gI=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,vI=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_I=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,yI=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xI=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,SI=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,EI=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,MI=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wI=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,TI=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,bI=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,CI=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,AI=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,RI=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,PI=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,LI=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,DI=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,II=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,NI=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,UI=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,OI=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,FI=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,kI=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,zI=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,BI=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,HI=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,VI=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,GI=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,WI=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jI=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$I=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,XI=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,YI=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qI=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,KI=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ZI=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,QI=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,JI=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,e3=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,t3=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,n3=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,r3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,i3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,o3=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,a3=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,s3=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,l3=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,c3=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,u3=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,f3=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,d3=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,h3=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,p3=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,m3=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,g3=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,v3=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_3=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,y3=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,x3=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,S3=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,E3=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,M3=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,w3=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,T3=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,b3=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,C3=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,A3=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,R3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,P3=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,L3=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,D3=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,I3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,N3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,U3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,O3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const F3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,k3=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,B3=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,H3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,V3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,G3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,W3=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,j3=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,$3=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,X3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Y3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q3=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,K3=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Z3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Q3=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,J3=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eN=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tN=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,nN=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rN=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,iN=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,oN=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,aN=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sN=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,lN=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cN=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uN=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fN=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,dN=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hN=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pN=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,mN=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gN=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,lt={alphahash_fragment:kD,alphahash_pars_fragment:zD,alphamap_fragment:BD,alphamap_pars_fragment:HD,alphatest_fragment:VD,alphatest_pars_fragment:GD,aomap_fragment:WD,aomap_pars_fragment:jD,batching_pars_vertex:$D,batching_vertex:XD,begin_vertex:YD,beginnormal_vertex:qD,bsdfs:KD,iridescence_fragment:ZD,bumpmap_pars_fragment:QD,clipping_planes_fragment:JD,clipping_planes_pars_fragment:eI,clipping_planes_pars_vertex:tI,clipping_planes_vertex:nI,color_fragment:rI,color_pars_fragment:iI,color_pars_vertex:oI,color_vertex:aI,common:sI,cube_uv_reflection_fragment:lI,defaultnormal_vertex:cI,displacementmap_pars_vertex:uI,displacementmap_vertex:fI,emissivemap_fragment:dI,emissivemap_pars_fragment:hI,colorspace_fragment:pI,colorspace_pars_fragment:mI,envmap_fragment:gI,envmap_common_pars_fragment:vI,envmap_pars_fragment:_I,envmap_pars_vertex:yI,envmap_physical_pars_fragment:PI,envmap_vertex:xI,fog_vertex:SI,fog_pars_vertex:EI,fog_fragment:MI,fog_pars_fragment:wI,gradientmap_pars_fragment:TI,lightmap_pars_fragment:bI,lights_lambert_fragment:CI,lights_lambert_pars_fragment:AI,lights_pars_begin:RI,lights_toon_fragment:LI,lights_toon_pars_fragment:DI,lights_phong_fragment:II,lights_phong_pars_fragment:NI,lights_physical_fragment:UI,lights_physical_pars_fragment:OI,lights_fragment_begin:FI,lights_fragment_maps:kI,lights_fragment_end:zI,logdepthbuf_fragment:BI,logdepthbuf_pars_fragment:HI,logdepthbuf_pars_vertex:VI,logdepthbuf_vertex:GI,map_fragment:WI,map_pars_fragment:jI,map_particle_fragment:$I,map_particle_pars_fragment:XI,metalnessmap_fragment:YI,metalnessmap_pars_fragment:qI,morphinstance_vertex:KI,morphcolor_vertex:ZI,morphnormal_vertex:QI,morphtarget_pars_vertex:JI,morphtarget_vertex:e3,normal_fragment_begin:t3,normal_fragment_maps:n3,normal_pars_fragment:r3,normal_pars_vertex:i3,normal_vertex:o3,normalmap_pars_fragment:a3,clearcoat_normal_fragment_begin:s3,clearcoat_normal_fragment_maps:l3,clearcoat_pars_fragment:c3,iridescence_pars_fragment:u3,opaque_fragment:f3,packing:d3,premultiplied_alpha_fragment:h3,project_vertex:p3,dithering_fragment:m3,dithering_pars_fragment:g3,roughnessmap_fragment:v3,roughnessmap_pars_fragment:_3,shadowmap_pars_fragment:y3,shadowmap_pars_vertex:x3,shadowmap_vertex:S3,shadowmask_pars_fragment:E3,skinbase_vertex:M3,skinning_pars_vertex:w3,skinning_vertex:T3,skinnormal_vertex:b3,specularmap_fragment:C3,specularmap_pars_fragment:A3,tonemapping_fragment:R3,tonemapping_pars_fragment:P3,transmission_fragment:L3,transmission_pars_fragment:D3,uv_pars_fragment:I3,uv_pars_vertex:N3,uv_vertex:U3,worldpos_vertex:O3,background_vert:F3,background_frag:k3,backgroundCube_vert:z3,backgroundCube_frag:B3,cube_vert:H3,cube_frag:V3,depth_vert:G3,depth_frag:W3,distanceRGBA_vert:j3,distanceRGBA_frag:$3,equirect_vert:X3,equirect_frag:Y3,linedashed_vert:q3,linedashed_frag:K3,meshbasic_vert:Z3,meshbasic_frag:Q3,meshlambert_vert:J3,meshlambert_frag:eN,meshmatcap_vert:tN,meshmatcap_frag:nN,meshnormal_vert:rN,meshnormal_frag:iN,meshphong_vert:oN,meshphong_frag:aN,meshphysical_vert:sN,meshphysical_frag:lN,meshtoon_vert:cN,meshtoon_frag:uN,points_vert:fN,points_frag:dN,shadow_vert:hN,shadow_frag:pN,sprite_vert:mN,sprite_frag:gN},Se={common:{diffuse:{value:new vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new vt(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},br={basic:{uniforms:gn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:lt.meshbasic_vert,fragmentShader:lt.meshbasic_frag},lambert:{uniforms:gn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new vt(0)}}]),vertexShader:lt.meshlambert_vert,fragmentShader:lt.meshlambert_frag},phong:{uniforms:gn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new vt(0)},specular:{value:new vt(1118481)},shininess:{value:30}}]),vertexShader:lt.meshphong_vert,fragmentShader:lt.meshphong_frag},standard:{uniforms:gn([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag},toon:{uniforms:gn([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new vt(0)}}]),vertexShader:lt.meshtoon_vert,fragmentShader:lt.meshtoon_frag},matcap:{uniforms:gn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:lt.meshmatcap_vert,fragmentShader:lt.meshmatcap_frag},points:{uniforms:gn([Se.points,Se.fog]),vertexShader:lt.points_vert,fragmentShader:lt.points_frag},dashed:{uniforms:gn([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lt.linedashed_vert,fragmentShader:lt.linedashed_frag},depth:{uniforms:gn([Se.common,Se.displacementmap]),vertexShader:lt.depth_vert,fragmentShader:lt.depth_frag},normal:{uniforms:gn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:lt.meshnormal_vert,fragmentShader:lt.meshnormal_frag},sprite:{uniforms:gn([Se.sprite,Se.fog]),vertexShader:lt.sprite_vert,fragmentShader:lt.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:lt.background_vert,fragmentShader:lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:lt.backgroundCube_vert,fragmentShader:lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:lt.cube_vert,fragmentShader:lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lt.equirect_vert,fragmentShader:lt.equirect_frag},distanceRGBA:{uniforms:gn([Se.common,Se.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:lt.distanceRGBA_vert,fragmentShader:lt.distanceRGBA_frag},shadow:{uniforms:gn([Se.lights,Se.fog,{color:{value:new vt(0)},opacity:{value:1}}]),vertexShader:lt.shadow_vert,fragmentShader:lt.shadow_frag}};br.physical={uniforms:gn([br.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new vt(0)},specularColor:{value:new vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag};const Tc={r:0,b:0,g:0},ro=new ti,vN=new $t;function _N(t,e,n,r,i,o,a){const s=new vt(0);let l=o===!0?0:1,c,u,f=null,d=0,p=null;function _(g){let y=g.isScene===!0?g.background:null;return y&&y.isTexture&&(y=(g.backgroundBlurriness>0?n:e).get(y)),y}function v(g){let y=!1;const E=_(g);E===null?h(s,l):E&&E.isColor&&(h(E,1),y=!0);const A=t.xr.getEnvironmentBlendMode();A==="additive"?r.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,a),(t.autoClear||y)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(g,y){const E=_(y);E&&(E.isCubeTexture||E.mapping===Af)?(u===void 0&&(u=new yn(new is(1,1,1),new Wn({name:"BackgroundCubeMaterial",uniforms:Za(br.backgroundCube.uniforms),vertexShader:br.backgroundCube.vertexShader,fragmentShader:br.backgroundCube.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,x,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),ro.copy(y.backgroundRotation),ro.x*=-1,ro.y*=-1,ro.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(ro.y*=-1,ro.z*=-1),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(vN.makeRotationFromEuler(ro)),u.material.toneMapped=St.getTransfer(E.colorSpace)!==Dt,(f!==E||d!==E.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,f=E,d=E.version,p=t.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new yn(new Zi(2,2),new Wn({name:"BackgroundMaterial",uniforms:Za(br.background.uniforms),vertexShader:br.background.vertexShader,fragmentShader:br.background.fragmentShader,side:Vi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=St.getTransfer(E.colorSpace)!==Dt,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(f!==E||d!==E.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=E,d=E.version,p=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function h(g,y){g.getRGB(Tc,UM(t)),r.buffers.color.setClear(Tc.r,Tc.g,Tc.b,y,a)}return{getClearColor:function(){return s},setClearColor:function(g,y=1){s.set(g),l=y,h(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,h(s,l)},render:v,addToRenderList:m}}function yN(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),r={},i=d(null);let o=i,a=!1;function s(w,L,V,F,W){let ee=!1;const U=f(F,V,L);o!==U&&(o=U,c(o.object)),ee=p(w,F,V,W),ee&&_(w,F,V,W),W!==null&&e.update(W,t.ELEMENT_ARRAY_BUFFER),(ee||a)&&(a=!1,E(w,L,V,F),W!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return t.createVertexArray()}function c(w){return t.bindVertexArray(w)}function u(w){return t.deleteVertexArray(w)}function f(w,L,V){const F=V.wireframe===!0;let W=r[w.id];W===void 0&&(W={},r[w.id]=W);let ee=W[L.id];ee===void 0&&(ee={},W[L.id]=ee);let U=ee[F];return U===void 0&&(U=d(l()),ee[F]=U),U}function d(w){const L=[],V=[],F=[];for(let W=0;W<n;W++)L[W]=0,V[W]=0,F[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:V,attributeDivisors:F,object:w,attributes:{},index:null}}function p(w,L,V,F){const W=o.attributes,ee=L.attributes;let U=0;const N=V.getAttributes();for(const R in N)if(N[R].location>=0){const X=W[R];let Y=ee[R];if(Y===void 0&&(R==="instanceMatrix"&&w.instanceMatrix&&(Y=w.instanceMatrix),R==="instanceColor"&&w.instanceColor&&(Y=w.instanceColor)),X===void 0||X.attribute!==Y||Y&&X.data!==Y.data)return!0;U++}return o.attributesNum!==U||o.index!==F}function _(w,L,V,F){const W={},ee=L.attributes;let U=0;const N=V.getAttributes();for(const R in N)if(N[R].location>=0){let X=ee[R];X===void 0&&(R==="instanceMatrix"&&w.instanceMatrix&&(X=w.instanceMatrix),R==="instanceColor"&&w.instanceColor&&(X=w.instanceColor));const Y={};Y.attribute=X,X&&X.data&&(Y.data=X.data),W[R]=Y,U++}o.attributes=W,o.attributesNum=U,o.index=F}function v(){const w=o.newAttributes;for(let L=0,V=w.length;L<V;L++)w[L]=0}function m(w){h(w,0)}function h(w,L){const V=o.newAttributes,F=o.enabledAttributes,W=o.attributeDivisors;V[w]=1,F[w]===0&&(t.enableVertexAttribArray(w),F[w]=1),W[w]!==L&&(t.vertexAttribDivisor(w,L),W[w]=L)}function g(){const w=o.newAttributes,L=o.enabledAttributes;for(let V=0,F=L.length;V<F;V++)L[V]!==w[V]&&(t.disableVertexAttribArray(V),L[V]=0)}function y(w,L,V,F,W,ee,U){U===!0?t.vertexAttribIPointer(w,L,V,W,ee):t.vertexAttribPointer(w,L,V,F,W,ee)}function E(w,L,V,F){v();const W=F.attributes,ee=V.getAttributes(),U=L.defaultAttributeValues;for(const N in ee){const R=ee[N];if(R.location>=0){let z=W[N];if(z===void 0&&(N==="instanceMatrix"&&w.instanceMatrix&&(z=w.instanceMatrix),N==="instanceColor"&&w.instanceColor&&(z=w.instanceColor)),z!==void 0){const X=z.normalized,Y=z.itemSize,oe=e.get(z);if(oe===void 0)continue;const xe=oe.buffer,q=oe.type,ae=oe.bytesPerElement,de=q===t.INT||q===t.UNSIGNED_INT||z.gpuType===xM;if(z.isInterleavedBufferAttribute){const fe=z.data,$e=fe.stride,We=z.offset;if(fe.isInstancedInterleavedBuffer){for(let et=0;et<R.locationSize;et++)h(R.location+et,fe.meshPerAttribute);w.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let et=0;et<R.locationSize;et++)m(R.location+et);t.bindBuffer(t.ARRAY_BUFFER,xe);for(let et=0;et<R.locationSize;et++)y(R.location+et,Y/R.locationSize,q,X,$e*ae,(We+Y/R.locationSize*et)*ae,de)}else{if(z.isInstancedBufferAttribute){for(let fe=0;fe<R.locationSize;fe++)h(R.location+fe,z.meshPerAttribute);w.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let fe=0;fe<R.locationSize;fe++)m(R.location+fe);t.bindBuffer(t.ARRAY_BUFFER,xe);for(let fe=0;fe<R.locationSize;fe++)y(R.location+fe,Y/R.locationSize,q,X,Y*ae,Y/R.locationSize*fe*ae,de)}}else if(U!==void 0){const X=U[N];if(X!==void 0)switch(X.length){case 2:t.vertexAttrib2fv(R.location,X);break;case 3:t.vertexAttrib3fv(R.location,X);break;case 4:t.vertexAttrib4fv(R.location,X);break;default:t.vertexAttrib1fv(R.location,X)}}}}g()}function A(){P();for(const w in r){const L=r[w];for(const V in L){const F=L[V];for(const W in F)u(F[W].object),delete F[W];delete L[V]}delete r[w]}}function x(w){if(r[w.id]===void 0)return;const L=r[w.id];for(const V in L){const F=L[V];for(const W in F)u(F[W].object),delete F[W];delete L[V]}delete r[w.id]}function M(w){for(const L in r){const V=r[L];if(V[w.id]===void 0)continue;const F=V[w.id];for(const W in F)u(F[W].object),delete F[W];delete V[w.id]}}function P(){T(),a=!0,o!==i&&(o=i,c(o.object))}function T(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:P,resetDefaultState:T,dispose:A,releaseStatesOfGeometry:x,releaseStatesOfProgram:M,initAttributes:v,enableAttribute:m,disableUnusedAttributes:g}}function xN(t,e,n){let r;function i(c){r=c}function o(c,u){t.drawArrays(r,c,u),n.update(u,r,1)}function a(c,u,f){f!==0&&(t.drawArraysInstanced(r,c,u,f),n.update(u,r,f))}function s(c,u,f){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<f;p++)this.render(c[p],u[p]);else{d.multiDrawArraysWEBGL(r,c,0,u,0,f);let p=0;for(let _=0;_<f;_++)p+=u[_];n.update(p,r,1)}}function l(c,u,f,d){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)a(c[_],u[_],d[_]);else{p.multiDrawArraysInstancedWEBGL(r,c,0,u,0,d,0,f);let _=0;for(let v=0;v<f;v++)_+=u[v];for(let v=0;v<d.length;v++)n.update(_,r,d[v])}}this.setMode=i,this.render=o,this.renderInstances=a,this.renderMultiDraw=s,this.renderMultiDrawInstances=l}function SN(t,e,n,r){let i;function o(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const x=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(x){return!(x!==Rr&&r.convert(x)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function s(x){const M=x===Rf&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==Gi&&r.convert(x)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&x!==Ci&&!M)}function l(x){if(x==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),v=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),h=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),g=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),E=p>0,A=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:s,precision:c,logarithmicDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:v,maxAttributes:m,maxVertexUniforms:h,maxVaryings:g,maxFragmentUniforms:y,vertexTextures:E,maxSamples:A}}function EN(t){const e=this;let n=null,r=0,i=!1,o=!1;const a=new yi,s=new ct,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||r!==0||i;return i=d,r=f.length,p},this.beginShadows=function(){o=!0,u(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(f,d){n=u(f,d,0)},this.setState=function(f,d,p){const _=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,h=t.get(f);if(!i||_===null||_.length===0||o&&!m)o?u(null):c();else{const g=o?0:r,y=g*4;let E=h.clippingState||null;l.value=E,E=u(_,d,y,p);for(let A=0;A!==y;++A)E[A]=n[A];h.clippingState=E,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function u(f,d,p,_){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=l.value,_!==!0||m===null){const h=p+v*4,g=d.matrixWorldInverse;s.getNormalMatrix(g),(m===null||m.length<h)&&(m=new Float32Array(h));for(let y=0,E=p;y!==v;++y,E+=4)a.copy(f[y]).applyMatrix4(g,s),a.normal.toArray(m,E),m[E+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function MN(t){let e=new WeakMap;function n(a,s){return s===Dp?a.mapping=$a:s===Ip&&(a.mapping=Xa),a}function r(a){if(a&&a.isTexture){const s=a.mapping;if(s===Dp||s===Ip)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new ND(l.height);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",i),n(c.texture,a.mapping)}else return null}}return a}function i(a){const s=a.target;s.removeEventListener("dispose",i);const l=e.get(s);l!==void 0&&(e.delete(s),l.dispose())}function o(){e=new WeakMap}return{get:r,dispose:o}}class wN extends OM{constructor(e=-1,n=1,r=1,i=-1,o=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=i,this.near=o,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,i,o,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=i,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let o=r-e,a=r+e,s=i+n,l=i-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,a=o+c*this.view.width,s-=u*this.view.offsetY,l=s-u*this.view.height}this.projectionMatrix.makeOrthographic(o,a,s,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ta=4,N_=[.125,.215,.35,.446,.526,.582],fo=20,Qd=new wN,U_=new vt;let Jd=null,eh=0,th=0,nh=!1;const so=(1+Math.sqrt(5))/2,la=1/so,O_=[new K(-so,la,0),new K(so,la,0),new K(-la,0,so),new K(la,0,so),new K(0,so,-la),new K(0,so,la),new K(-1,1,-1),new K(1,1,-1),new K(-1,1,1),new K(1,1,1)];class F_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,i=100){Jd=this._renderer.getRenderTarget(),eh=this._renderer.getActiveCubeFace(),th=this._renderer.getActiveMipmapLevel(),nh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,r,i,o),n>0&&this._blur(o,0,0,n),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=B_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=z_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Jd,eh,th),this._renderer.xr.enabled=nh,e.scissorTest=!1,bc(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===$a||e.mapping===Xa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Jd=this._renderer.getRenderTarget(),eh=this._renderer.getActiveCubeFace(),th=this._renderer.getActiveMipmapLevel(),nh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:gr,minFilter:gr,generateMipmaps:!1,type:Rf,format:Rr,colorSpace:Ki,depthBuffer:!1},i=k_(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=k_(e,n,r);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=TN(o)),this._blurMaterial=bN(o,e,n)}return i}_compileMaterial(e){const n=new yn(this._lodPlanes[0],e);this._renderer.compile(n,Qd)}_sceneToCubeUV(e,n,r,i){const s=new Qn(90,1,n,r),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(U_),u.toneMapping=ki,u.autoClear=!1;const p=new lg({name:"PMREM.Background",side:Rn,depthWrite:!1,depthTest:!1}),_=new yn(new is,p);let v=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy(U_),v=!0);for(let h=0;h<6;h++){const g=h%3;g===0?(s.up.set(0,l[h],0),s.lookAt(c[h],0,0)):g===1?(s.up.set(0,0,l[h]),s.lookAt(0,c[h],0)):(s.up.set(0,l[h],0),s.lookAt(0,0,c[h]));const y=this._cubeSize;bc(i,g*y,h>2?y:0,y,y),u.setRenderTarget(i),v&&u.render(_,s),u.render(e,s)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=m}_textureToCubeUV(e,n){const r=this._renderer,i=e.mapping===$a||e.mapping===Xa;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=B_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=z_());const o=i?this._cubemapMaterial:this._equirectMaterial,a=new yn(this._lodPlanes[0],o),s=o.uniforms;s.envMap.value=e;const l=this._cubeSize;bc(n,0,0,3*l,2*l),r.setRenderTarget(n),r.render(a,Qd)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const i=this._lodPlanes.length;for(let o=1;o<i;o++){const a=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),s=O_[(i-o-1)%O_.length];this._blur(e,o-1,o,a,s)}n.autoClear=r}_blur(e,n,r,i,o){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,r,i,"latitudinal",o),this._halfBlur(a,e,r,r,i,"longitudinal",o)}_halfBlur(e,n,r,i,o,a,s){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new yn(this._lodPlanes[i],c),d=c.uniforms,p=this._sizeLods[r]-1,_=isFinite(o)?Math.PI/(2*p):2*Math.PI/(2*fo-1),v=o/_,m=isFinite(o)?1+Math.floor(u*v):fo;m>fo&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${fo}`);const h=[];let g=0;for(let M=0;M<fo;++M){const P=M/v,T=Math.exp(-P*P/2);h.push(T),M===0?g+=T:M<m&&(g+=2*T)}for(let M=0;M<h.length;M++)h[M]=h[M]/g;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=a==="latitudinal",s&&(d.poleAxis.value=s);const{_lodMax:y}=this;d.dTheta.value=_,d.mipInt.value=y-r;const E=this._sizeLods[i],A=3*E*(i>y-Ta?i-y+Ta:0),x=4*(this._cubeSize-E);bc(n,A,x,3*E,2*E),l.setRenderTarget(n),l.render(f,Qd)}}function TN(t){const e=[],n=[],r=[];let i=t;const o=t-Ta+1+N_.length;for(let a=0;a<o;a++){const s=Math.pow(2,i);n.push(s);let l=1/s;a>t-Ta?l=N_[a-t+Ta-1]:a===0&&(l=0),r.push(l);const c=1/(s-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,_=6,v=3,m=2,h=1,g=new Float32Array(v*_*p),y=new Float32Array(m*_*p),E=new Float32Array(h*_*p);for(let x=0;x<p;x++){const M=x%3*2/3-1,P=x>2?0:-1,T=[M,P,0,M+2/3,P,0,M+2/3,P+1,0,M,P,0,M+2/3,P+1,0,M,P+1,0];g.set(T,v*_*x),y.set(d,m*_*x);const w=[x,x,x,x,x,x];E.set(w,h*_*x)}const A=new Ir;A.setAttribute("position",new Dr(g,v)),A.setAttribute("uv",new Dr(y,m)),A.setAttribute("faceIndex",new Dr(E,h)),e.push(A),i>Ta&&i--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function k_(t,e,n){const r=new Uo(t,e,n);return r.texture.mapping=Af,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function bc(t,e,n,r,i){t.viewport.set(e,n,r,i),t.scissor.set(e,n,r,i)}function bN(t,e,n){const r=new Float32Array(fo),i=new K(0,1,0);return new Wn({name:"SphericalGaussianBlur",defines:{n:fo,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:cg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function z_(){return new Wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function B_(){return new Wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function cg(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function CN(t){let e=new WeakMap,n=null;function r(s){if(s&&s.isTexture){const l=s.mapping,c=l===Dp||l===Ip,u=l===$a||l===Xa;if(c||u){let f=e.get(s);const d=f!==void 0?f.texture.pmremVersion:0;if(s.isRenderTargetTexture&&s.pmremVersion!==d)return n===null&&(n=new F_(t)),f=c?n.fromEquirectangular(s,f):n.fromCubemap(s,f),f.texture.pmremVersion=s.pmremVersion,e.set(s,f),f.texture;if(f!==void 0)return f.texture;{const p=s.image;return c&&p&&p.height>0||u&&p&&i(p)?(n===null&&(n=new F_(t)),f=c?n.fromEquirectangular(s):n.fromCubemap(s),f.texture.pmremVersion=s.pmremVersion,e.set(s,f),s.addEventListener("dispose",o),f.texture):null}}}return s}function i(s){let l=0;const c=6;for(let u=0;u<c;u++)s[u]!==void 0&&l++;return l===c}function o(s){const l=s.target;l.removeEventListener("dispose",o);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:a}}function AN(t){const e={};function n(r){if(e[r]!==void 0)return e[r];let i;switch(r){case"WEBGL_depth_texture":i=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=t.getExtension(r)}return e[r]=i,i}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const i=n(r);return i===null&&AM("THREE.WebGLRenderer: "+r+" extension not supported."),i}}}function RN(t,e,n,r){const i={},o=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const v=d.morphAttributes[_];for(let m=0,h=v.length;m<h;m++)e.remove(v[m])}d.removeEventListener("dispose",a),delete i[d.id];const p=o.get(d);p&&(e.remove(p),o.delete(d)),r.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function s(f,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const _ in d)e.update(d[_],t.ARRAY_BUFFER);const p=f.morphAttributes;for(const _ in p){const v=p[_];for(let m=0,h=v.length;m<h;m++)e.update(v[m],t.ARRAY_BUFFER)}}function c(f){const d=[],p=f.index,_=f.attributes.position;let v=0;if(p!==null){const g=p.array;v=p.version;for(let y=0,E=g.length;y<E;y+=3){const A=g[y+0],x=g[y+1],M=g[y+2];d.push(A,x,x,M,M,A)}}else if(_!==void 0){const g=_.array;v=_.version;for(let y=0,E=g.length/3-1;y<E;y+=3){const A=y+0,x=y+1,M=y+2;d.push(A,x,x,M,M,A)}}else return;const m=new(CM(d)?NM:IM)(d,1);m.version=v;const h=o.get(f);h&&e.remove(h),o.set(f,m)}function u(f){const d=o.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return o.get(f)}return{get:s,update:l,getWireframeAttribute:u}}function PN(t,e,n){let r;function i(d){r=d}let o,a;function s(d){o=d.type,a=d.bytesPerElement}function l(d,p){t.drawElements(r,p,o,d*a),n.update(p,r,1)}function c(d,p,_){_!==0&&(t.drawElementsInstanced(r,p,o,d*a,_),n.update(p,r,_))}function u(d,p,_){if(_===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let m=0;m<_;m++)this.render(d[m]/a,p[m]);else{v.multiDrawElementsWEBGL(r,p,0,o,d,0,_);let m=0;for(let h=0;h<_;h++)m+=p[h];n.update(m,r,1)}}function f(d,p,_,v){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<d.length;h++)c(d[h]/a,p[h],v[h]);else{m.multiDrawElementsInstancedWEBGL(r,p,0,o,d,0,v,0,_);let h=0;for(let g=0;g<_;g++)h+=p[g];for(let g=0;g<v.length;g++)n.update(h,r,v[g])}}this.setMode=i,this.setIndex=s,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function LN(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(o,a,s){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=s*(o/3);break;case t.LINES:n.lines+=s*(o/2);break;case t.LINE_STRIP:n.lines+=s*(o-1);break;case t.LINE_LOOP:n.lines+=s*o;break;case t.POINTS:n.points+=s*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:i,update:r}}function DN(t,e,n){const r=new WeakMap,i=new rn;function o(a,s,l){const c=a.morphTargetInfluences,u=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color,f=u!==void 0?u.length:0;let d=r.get(s);if(d===void 0||d.count!==f){let w=function(){P.dispose(),r.delete(s),s.removeEventListener("dispose",w)};var p=w;d!==void 0&&d.texture.dispose();const _=s.morphAttributes.position!==void 0,v=s.morphAttributes.normal!==void 0,m=s.morphAttributes.color!==void 0,h=s.morphAttributes.position||[],g=s.morphAttributes.normal||[],y=s.morphAttributes.color||[];let E=0;_===!0&&(E=1),v===!0&&(E=2),m===!0&&(E=3);let A=s.attributes.position.count*E,x=1;A>e.maxTextureSize&&(x=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const M=new Float32Array(A*x*4*f),P=new PM(M,A,x,f);P.type=Ci,P.needsUpdate=!0;const T=E*4;for(let L=0;L<f;L++){const V=h[L],F=g[L],W=y[L],ee=A*x*4*L;for(let U=0;U<V.count;U++){const N=U*T;_===!0&&(i.fromBufferAttribute(V,U),M[ee+N+0]=i.x,M[ee+N+1]=i.y,M[ee+N+2]=i.z,M[ee+N+3]=0),v===!0&&(i.fromBufferAttribute(F,U),M[ee+N+4]=i.x,M[ee+N+5]=i.y,M[ee+N+6]=i.z,M[ee+N+7]=0),m===!0&&(i.fromBufferAttribute(W,U),M[ee+N+8]=i.x,M[ee+N+9]=i.y,M[ee+N+10]=i.z,M[ee+N+11]=W.itemSize===4?i.w:1)}}d={count:f,texture:P,size:new Je(A,x)},r.set(s,d),s.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const v=s.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",v),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:o}}function IN(t,e,n,r){let i=new WeakMap;function o(l){const c=r.render.frame,u=l.geometry,f=e.get(l,u);if(i.get(f)!==c&&(e.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),i.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return f}function a(){i=new WeakMap}function s(l){const c=l.target;c.removeEventListener("dispose",s),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:o,dispose:a}}class BM extends Pn{constructor(e,n,r,i,o,a,s,l,c,u=Ia){if(u!==Ia&&u!==Ka)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&u===Ia&&(r=Ya),r===void 0&&u===Ka&&(r=qa),super(null,i,o,a,s,l,u,r,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=s!==void 0?s:er,this.minFilter=l!==void 0?l:er,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const HM=new Pn,VM=new BM(1,1);VM.compareFunction=bM;const GM=new PM,WM=new _D,jM=new FM,H_=[],V_=[],G_=new Float32Array(16),W_=new Float32Array(9),j_=new Float32Array(4);function os(t,e,n){const r=t[0];if(r<=0||r>0)return t;const i=e*n;let o=H_[i];if(o===void 0&&(o=new Float32Array(i),H_[i]=o),e!==0){r.toArray(o,0);for(let a=1,s=0;a!==e;++a)s+=n,t[a].toArray(o,s)}return o}function qt(t,e){if(t.length!==e.length)return!1;for(let n=0,r=t.length;n<r;n++)if(t[n]!==e[n])return!1;return!0}function Kt(t,e){for(let n=0,r=e.length;n<r;n++)t[n]=e[n]}function Df(t,e){let n=V_[e];n===void 0&&(n=new Int32Array(e),V_[e]=n);for(let r=0;r!==e;++r)n[r]=t.allocateTextureUnit();return n}function NN(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function UN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(qt(n,e))return;t.uniform2fv(this.addr,e),Kt(n,e)}}function ON(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(qt(n,e))return;t.uniform3fv(this.addr,e),Kt(n,e)}}function FN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(qt(n,e))return;t.uniform4fv(this.addr,e),Kt(n,e)}}function kN(t,e){const n=this.cache,r=e.elements;if(r===void 0){if(qt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Kt(n,e)}else{if(qt(n,r))return;j_.set(r),t.uniformMatrix2fv(this.addr,!1,j_),Kt(n,r)}}function zN(t,e){const n=this.cache,r=e.elements;if(r===void 0){if(qt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Kt(n,e)}else{if(qt(n,r))return;W_.set(r),t.uniformMatrix3fv(this.addr,!1,W_),Kt(n,r)}}function BN(t,e){const n=this.cache,r=e.elements;if(r===void 0){if(qt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Kt(n,e)}else{if(qt(n,r))return;G_.set(r),t.uniformMatrix4fv(this.addr,!1,G_),Kt(n,r)}}function HN(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function VN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(qt(n,e))return;t.uniform2iv(this.addr,e),Kt(n,e)}}function GN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(qt(n,e))return;t.uniform3iv(this.addr,e),Kt(n,e)}}function WN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(qt(n,e))return;t.uniform4iv(this.addr,e),Kt(n,e)}}function jN(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function $N(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(qt(n,e))return;t.uniform2uiv(this.addr,e),Kt(n,e)}}function XN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(qt(n,e))return;t.uniform3uiv(this.addr,e),Kt(n,e)}}function YN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(qt(n,e))return;t.uniform4uiv(this.addr,e),Kt(n,e)}}function qN(t,e,n){const r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(t.uniform1i(this.addr,i),r[0]=i);const o=this.type===t.SAMPLER_2D_SHADOW?VM:HM;n.setTexture2D(e||o,i)}function KN(t,e,n){const r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(t.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(e||WM,i)}function ZN(t,e,n){const r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(t.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(e||jM,i)}function QN(t,e,n){const r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(t.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(e||GM,i)}function JN(t){switch(t){case 5126:return NN;case 35664:return UN;case 35665:return ON;case 35666:return FN;case 35674:return kN;case 35675:return zN;case 35676:return BN;case 5124:case 35670:return HN;case 35667:case 35671:return VN;case 35668:case 35672:return GN;case 35669:case 35673:return WN;case 5125:return jN;case 36294:return $N;case 36295:return XN;case 36296:return YN;case 35678:case 36198:case 36298:case 36306:case 35682:return qN;case 35679:case 36299:case 36307:return KN;case 35680:case 36300:case 36308:case 36293:return ZN;case 36289:case 36303:case 36311:case 36292:return QN}}function eU(t,e){t.uniform1fv(this.addr,e)}function tU(t,e){const n=os(e,this.size,2);t.uniform2fv(this.addr,n)}function nU(t,e){const n=os(e,this.size,3);t.uniform3fv(this.addr,n)}function rU(t,e){const n=os(e,this.size,4);t.uniform4fv(this.addr,n)}function iU(t,e){const n=os(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function oU(t,e){const n=os(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function aU(t,e){const n=os(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function sU(t,e){t.uniform1iv(this.addr,e)}function lU(t,e){t.uniform2iv(this.addr,e)}function cU(t,e){t.uniform3iv(this.addr,e)}function uU(t,e){t.uniform4iv(this.addr,e)}function fU(t,e){t.uniform1uiv(this.addr,e)}function dU(t,e){t.uniform2uiv(this.addr,e)}function hU(t,e){t.uniform3uiv(this.addr,e)}function pU(t,e){t.uniform4uiv(this.addr,e)}function mU(t,e,n){const r=this.cache,i=e.length,o=Df(n,i);qt(r,o)||(t.uniform1iv(this.addr,o),Kt(r,o));for(let a=0;a!==i;++a)n.setTexture2D(e[a]||HM,o[a])}function gU(t,e,n){const r=this.cache,i=e.length,o=Df(n,i);qt(r,o)||(t.uniform1iv(this.addr,o),Kt(r,o));for(let a=0;a!==i;++a)n.setTexture3D(e[a]||WM,o[a])}function vU(t,e,n){const r=this.cache,i=e.length,o=Df(n,i);qt(r,o)||(t.uniform1iv(this.addr,o),Kt(r,o));for(let a=0;a!==i;++a)n.setTextureCube(e[a]||jM,o[a])}function _U(t,e,n){const r=this.cache,i=e.length,o=Df(n,i);qt(r,o)||(t.uniform1iv(this.addr,o),Kt(r,o));for(let a=0;a!==i;++a)n.setTexture2DArray(e[a]||GM,o[a])}function yU(t){switch(t){case 5126:return eU;case 35664:return tU;case 35665:return nU;case 35666:return rU;case 35674:return iU;case 35675:return oU;case 35676:return aU;case 5124:case 35670:return sU;case 35667:case 35671:return lU;case 35668:case 35672:return cU;case 35669:case 35673:return uU;case 5125:return fU;case 36294:return dU;case 36295:return hU;case 36296:return pU;case 35678:case 36198:case 36298:case 36306:case 35682:return mU;case 35679:case 36299:case 36307:return gU;case 35680:case 36300:case 36308:case 36293:return vU;case 36289:case 36303:case 36311:case 36292:return _U}}class xU{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=JN(n.type)}}class SU{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=yU(n.type)}}class EU{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const i=this.seq;for(let o=0,a=i.length;o!==a;++o){const s=i[o];s.setValue(e,n[s.id],r)}}}const rh=/(\w+)(\])?(\[|\.)?/g;function $_(t,e){t.seq.push(e),t.map[e.id]=e}function MU(t,e,n){const r=t.name,i=r.length;for(rh.lastIndex=0;;){const o=rh.exec(r),a=rh.lastIndex;let s=o[1];const l=o[2]==="]",c=o[3];if(l&&(s=s|0),c===void 0||c==="["&&a+2===i){$_(n,c===void 0?new xU(s,t,e):new SU(s,t,e));break}else{let f=n.map[s];f===void 0&&(f=new EU(s),$_(n,f)),n=f}}}class Qc{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let i=0;i<r;++i){const o=e.getActiveUniform(n,i),a=e.getUniformLocation(n,o.name);MU(o,a,this)}}setValue(e,n,r,i){const o=this.map[n];o!==void 0&&o.setValue(e,r,i)}setOptional(e,n,r){const i=n[r];i!==void 0&&this.setValue(e,r,i)}static upload(e,n,r,i){for(let o=0,a=n.length;o!==a;++o){const s=n[o],l=r[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,i)}}static seqWithValue(e,n){const r=[];for(let i=0,o=e.length;i!==o;++i){const a=e[i];a.id in n&&r.push(a)}return r}}function X_(t,e,n){const r=t.createShader(e);return t.shaderSource(r,n),t.compileShader(r),r}const wU=37297;let TU=0;function bU(t,e){const n=t.split(`
`),r=[],i=Math.max(e-6,0),o=Math.min(e+6,n.length);for(let a=i;a<o;a++){const s=a+1;r.push(`${s===e?">":" "} ${s}: ${n[a]}`)}return r.join(`
`)}function CU(t){const e=St.getPrimaries(St.workingColorSpace),n=St.getPrimaries(t);let r;switch(e===n?r="":e===Fu&&n===Ou?r="LinearDisplayP3ToLinearSRGB":e===Ou&&n===Fu&&(r="LinearSRGBToLinearDisplayP3"),t){case Ki:case Pf:return[r,"LinearTransferOETF"];case Tr:case og:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[r,"LinearTransferOETF"]}}function Y_(t,e,n){const r=t.getShaderParameter(e,t.COMPILE_STATUS),i=t.getShaderInfoLog(e).trim();if(r&&i==="")return"";const o=/ERROR: 0:(\d+)/.exec(i);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+i+`

`+bU(t.getShaderSource(e),a)}else return i}function AU(t,e){const n=CU(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function RU(t,e){let n;switch(e){case yL:n="Linear";break;case xL:n="Reinhard";break;case SL:n="OptimizedCineon";break;case EL:n="ACESFilmic";break;case wL:n="AgX";break;case TL:n="Neutral";break;case ML:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function PU(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(As).join(`
`)}function LU(t){const e=[];for(const n in t){const r=t[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function DU(t,e){const n={},r=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){const o=t.getActiveAttrib(e,i),a=o.name;let s=1;o.type===t.FLOAT_MAT2&&(s=2),o.type===t.FLOAT_MAT3&&(s=3),o.type===t.FLOAT_MAT4&&(s=4),n[a]={type:o.type,location:t.getAttribLocation(e,a),locationSize:s}}return n}function As(t){return t!==""}function q_(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function K_(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const IU=/^[ \t]*#include +<([\w\d./]+)>/gm;function Op(t){return t.replace(IU,UU)}const NU=new Map;function UU(t,e){let n=lt[e];if(n===void 0){const r=NU.get(e);if(r!==void 0)n=lt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Op(n)}const OU=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Z_(t){return t.replace(OU,FU)}function FU(t,e,n,r){let i="";for(let o=parseInt(e);o<parseInt(n);o++)i+=r.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return i}function Q_(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function kU(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===gM?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===vM?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Hr&&(e="SHADOWMAP_TYPE_VSM"),e}function zU(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case $a:case Xa:e="ENVMAP_TYPE_CUBE";break;case Af:e="ENVMAP_TYPE_CUBE_UV";break}return e}function BU(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Xa:e="ENVMAP_MODE_REFRACTION";break}return e}function HU(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case _M:e="ENVMAP_BLENDING_MULTIPLY";break;case vL:e="ENVMAP_BLENDING_MIX";break;case _L:e="ENVMAP_BLENDING_ADD";break}return e}function VU(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:r,maxMip:n}}function GU(t,e,n,r){const i=t.getContext(),o=n.defines;let a=n.vertexShader,s=n.fragmentShader;const l=kU(n),c=zU(n),u=BU(n),f=HU(n),d=VU(n),p=PU(n),_=LU(o),v=i.createProgram();let m,h,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(As).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(As).join(`
`),h.length>0&&(h+=`
`)):(m=[Q_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(As).join(`
`),h=[Q_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ki?"#define TONE_MAPPING":"",n.toneMapping!==ki?lt.tonemapping_pars_fragment:"",n.toneMapping!==ki?RU("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",lt.colorspace_pars_fragment,AU("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(As).join(`
`)),a=Op(a),a=q_(a,n),a=K_(a,n),s=Op(s),s=q_(s,n),s=K_(s,n),a=Z_(a),s=Z_(s),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",n.glslVersion===h_?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===h_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const y=g+m+a,E=g+h+s,A=X_(i,i.VERTEX_SHADER,y),x=X_(i,i.FRAGMENT_SHADER,E);i.attachShader(v,A),i.attachShader(v,x),n.index0AttributeName!==void 0?i.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function M(L){if(t.debug.checkShaderErrors){const V=i.getProgramInfoLog(v).trim(),F=i.getShaderInfoLog(A).trim(),W=i.getShaderInfoLog(x).trim();let ee=!0,U=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(ee=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(i,v,A,x);else{const N=Y_(i,A,"vertex"),R=Y_(i,x,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+V+`
`+N+`
`+R)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(F===""||W==="")&&(U=!1);U&&(L.diagnostics={runnable:ee,programLog:V,vertexShader:{log:F,prefix:m},fragmentShader:{log:W,prefix:h}})}i.deleteShader(A),i.deleteShader(x),P=new Qc(i,v),T=DU(i,v)}let P;this.getUniforms=function(){return P===void 0&&M(this),P};let T;this.getAttributes=function(){return T===void 0&&M(this),T};let w=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=i.getProgramParameter(v,wU)),w},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=TU++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=x,this}let WU=0;class jU{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,i=this._getShaderStage(n),o=this._getShaderStage(r),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(o)===!1&&(a.add(o),o.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new $U(e),n.set(e,r)),r}}class $U{constructor(e){this.id=WU++,this.code=e,this.usedTimes=0}}function XU(t,e,n,r,i,o,a){const s=new LM,l=new jU,c=new Set,u=[],f=i.logarithmicDepthBuffer,d=i.vertexTextures;let p=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(T){return c.add(T),T===0?"uv":`uv${T}`}function m(T,w,L,V,F){const W=V.fog,ee=F.geometry,U=T.isMeshStandardMaterial?V.environment:null,N=(T.isMeshStandardMaterial?n:e).get(T.envMap||U),R=N&&N.mapping===Af?N.image.height:null,z=_[T.type];T.precision!==null&&(p=i.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const X=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Y=X!==void 0?X.length:0;let oe=0;ee.morphAttributes.position!==void 0&&(oe=1),ee.morphAttributes.normal!==void 0&&(oe=2),ee.morphAttributes.color!==void 0&&(oe=3);let xe,q,ae,de;if(z){const mt=br[z];xe=mt.vertexShader,q=mt.fragmentShader}else xe=T.vertexShader,q=T.fragmentShader,l.update(T),ae=l.getVertexShaderID(T),de=l.getFragmentShaderID(T);const fe=t.getRenderTarget(),$e=F.isInstancedMesh===!0,We=F.isBatchedMesh===!0,et=!!T.map,B=!!T.matcap,De=!!N,je=!!T.aoMap,dt=!!T.lightMap,Ne=!!T.bumpMap,Oe=!!T.normalMap,Xe=!!T.displacementMap,Be=!!T.emissiveMap,yt=!!T.metalnessMap,D=!!T.roughnessMap,b=T.anisotropy>0,Q=T.clearcoat>0,se=T.dispersion>0,ie=T.iridescence>0,le=T.sheen>0,Le=T.transmission>0,ge=b&&!!T.anisotropyMap,me=Q&&!!T.clearcoatMap,ke=Q&&!!T.clearcoatNormalMap,pe=Q&&!!T.clearcoatRoughnessMap,be=ie&&!!T.iridescenceMap,ot=ie&&!!T.iridescenceThicknessMap,Ue=le&&!!T.sheenColorMap,ye=le&&!!T.sheenRoughnessMap,qe=!!T.specularMap,Ke=!!T.specularColorMap,wt=!!T.specularIntensityMap,S=Le&&!!T.transmissionMap,te=Le&&!!T.thicknessMap,Z=!!T.gradientMap,ne=!!T.alphaMap,ce=T.alphaTest>0,Re=!!T.alphaHash,Ye=!!T.extensions;let tt=ki;T.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(tt=t.toneMapping);const Pt={shaderID:z,shaderType:T.type,shaderName:T.name,vertexShader:xe,fragmentShader:q,defines:T.defines,customVertexShaderID:ae,customFragmentShaderID:de,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:We,batchingColor:We&&F._colorsTexture!==null,instancing:$e,instancingColor:$e&&F.instanceColor!==null,instancingMorph:$e&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:fe===null?t.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:Ki,alphaToCoverage:!!T.alphaToCoverage,map:et,matcap:B,envMap:De,envMapMode:De&&N.mapping,envMapCubeUVHeight:R,aoMap:je,lightMap:dt,bumpMap:Ne,normalMap:Oe,displacementMap:d&&Xe,emissiveMap:Be,normalMapObjectSpace:Oe&&T.normalMapType===BL,normalMapTangentSpace:Oe&&T.normalMapType===zL,metalnessMap:yt,roughnessMap:D,anisotropy:b,anisotropyMap:ge,clearcoat:Q,clearcoatMap:me,clearcoatNormalMap:ke,clearcoatRoughnessMap:pe,dispersion:se,iridescence:ie,iridescenceMap:be,iridescenceThicknessMap:ot,sheen:le,sheenColorMap:Ue,sheenRoughnessMap:ye,specularMap:qe,specularColorMap:Ke,specularIntensityMap:wt,transmission:Le,transmissionMap:S,thicknessMap:te,gradientMap:Z,opaque:T.transparent===!1&&T.blending===Da&&T.alphaToCoverage===!1,alphaMap:ne,alphaTest:ce,alphaHash:Re,combine:T.combine,mapUv:et&&v(T.map.channel),aoMapUv:je&&v(T.aoMap.channel),lightMapUv:dt&&v(T.lightMap.channel),bumpMapUv:Ne&&v(T.bumpMap.channel),normalMapUv:Oe&&v(T.normalMap.channel),displacementMapUv:Xe&&v(T.displacementMap.channel),emissiveMapUv:Be&&v(T.emissiveMap.channel),metalnessMapUv:yt&&v(T.metalnessMap.channel),roughnessMapUv:D&&v(T.roughnessMap.channel),anisotropyMapUv:ge&&v(T.anisotropyMap.channel),clearcoatMapUv:me&&v(T.clearcoatMap.channel),clearcoatNormalMapUv:ke&&v(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&v(T.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&v(T.iridescenceMap.channel),iridescenceThicknessMapUv:ot&&v(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&v(T.sheenColorMap.channel),sheenRoughnessMapUv:ye&&v(T.sheenRoughnessMap.channel),specularMapUv:qe&&v(T.specularMap.channel),specularColorMapUv:Ke&&v(T.specularColorMap.channel),specularIntensityMapUv:wt&&v(T.specularIntensityMap.channel),transmissionMapUv:S&&v(T.transmissionMap.channel),thicknessMapUv:te&&v(T.thicknessMap.channel),alphaMapUv:ne&&v(T.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(Oe||b),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!ee.attributes.uv&&(et||ne),fog:!!W,useFog:T.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:F.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:Y,morphTextureStride:oe,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:T.dithering,shadowMapEnabled:t.shadowMap.enabled&&L.length>0,shadowMapType:t.shadowMap.type,toneMapping:tt,decodeVideoTexture:et&&T.map.isVideoTexture===!0&&St.getTransfer(T.map.colorSpace)===Dt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===zn,flipSided:T.side===Rn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ye&&T.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Ye&&T.extensions.multiDraw===!0&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Pt.vertexUv1s=c.has(1),Pt.vertexUv2s=c.has(2),Pt.vertexUv3s=c.has(3),c.clear(),Pt}function h(T){const w=[];if(T.shaderID?w.push(T.shaderID):(w.push(T.customVertexShaderID),w.push(T.customFragmentShaderID)),T.defines!==void 0)for(const L in T.defines)w.push(L),w.push(T.defines[L]);return T.isRawShaderMaterial===!1&&(g(w,T),y(w,T),w.push(t.outputColorSpace)),w.push(T.customProgramCacheKey),w.join()}function g(T,w){T.push(w.precision),T.push(w.outputColorSpace),T.push(w.envMapMode),T.push(w.envMapCubeUVHeight),T.push(w.mapUv),T.push(w.alphaMapUv),T.push(w.lightMapUv),T.push(w.aoMapUv),T.push(w.bumpMapUv),T.push(w.normalMapUv),T.push(w.displacementMapUv),T.push(w.emissiveMapUv),T.push(w.metalnessMapUv),T.push(w.roughnessMapUv),T.push(w.anisotropyMapUv),T.push(w.clearcoatMapUv),T.push(w.clearcoatNormalMapUv),T.push(w.clearcoatRoughnessMapUv),T.push(w.iridescenceMapUv),T.push(w.iridescenceThicknessMapUv),T.push(w.sheenColorMapUv),T.push(w.sheenRoughnessMapUv),T.push(w.specularMapUv),T.push(w.specularColorMapUv),T.push(w.specularIntensityMapUv),T.push(w.transmissionMapUv),T.push(w.thicknessMapUv),T.push(w.combine),T.push(w.fogExp2),T.push(w.sizeAttenuation),T.push(w.morphTargetsCount),T.push(w.morphAttributeCount),T.push(w.numDirLights),T.push(w.numPointLights),T.push(w.numSpotLights),T.push(w.numSpotLightMaps),T.push(w.numHemiLights),T.push(w.numRectAreaLights),T.push(w.numDirLightShadows),T.push(w.numPointLightShadows),T.push(w.numSpotLightShadows),T.push(w.numSpotLightShadowsWithMaps),T.push(w.numLightProbes),T.push(w.shadowMapType),T.push(w.toneMapping),T.push(w.numClippingPlanes),T.push(w.numClipIntersection),T.push(w.depthPacking)}function y(T,w){s.disableAll(),w.supportsVertexTextures&&s.enable(0),w.instancing&&s.enable(1),w.instancingColor&&s.enable(2),w.instancingMorph&&s.enable(3),w.matcap&&s.enable(4),w.envMap&&s.enable(5),w.normalMapObjectSpace&&s.enable(6),w.normalMapTangentSpace&&s.enable(7),w.clearcoat&&s.enable(8),w.iridescence&&s.enable(9),w.alphaTest&&s.enable(10),w.vertexColors&&s.enable(11),w.vertexAlphas&&s.enable(12),w.vertexUv1s&&s.enable(13),w.vertexUv2s&&s.enable(14),w.vertexUv3s&&s.enable(15),w.vertexTangents&&s.enable(16),w.anisotropy&&s.enable(17),w.alphaHash&&s.enable(18),w.batching&&s.enable(19),w.dispersion&&s.enable(20),w.batchingColor&&s.enable(21),T.push(s.mask),s.disableAll(),w.fog&&s.enable(0),w.useFog&&s.enable(1),w.flatShading&&s.enable(2),w.logarithmicDepthBuffer&&s.enable(3),w.skinning&&s.enable(4),w.morphTargets&&s.enable(5),w.morphNormals&&s.enable(6),w.morphColors&&s.enable(7),w.premultipliedAlpha&&s.enable(8),w.shadowMapEnabled&&s.enable(9),w.doubleSided&&s.enable(10),w.flipSided&&s.enable(11),w.useDepthPacking&&s.enable(12),w.dithering&&s.enable(13),w.transmission&&s.enable(14),w.sheen&&s.enable(15),w.opaque&&s.enable(16),w.pointsUvs&&s.enable(17),w.decodeVideoTexture&&s.enable(18),w.alphaToCoverage&&s.enable(19),T.push(s.mask)}function E(T){const w=_[T.type];let L;if(w){const V=br[w];L=PD.clone(V.uniforms)}else L=T.uniforms;return L}function A(T,w){let L;for(let V=0,F=u.length;V<F;V++){const W=u[V];if(W.cacheKey===w){L=W,++L.usedTimes;break}}return L===void 0&&(L=new GU(t,w,T,o),u.push(L)),L}function x(T){if(--T.usedTimes===0){const w=u.indexOf(T);u[w]=u[u.length-1],u.pop(),T.destroy()}}function M(T){l.remove(T)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:E,acquireProgram:A,releaseProgram:x,releaseShaderCache:M,programs:u,dispose:P}}function YU(){let t=new WeakMap;function e(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function n(o){t.delete(o)}function r(o,a,s){t.get(o)[a]=s}function i(){t=new WeakMap}return{get:e,remove:n,update:r,dispose:i}}function qU(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function J_(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function ey(){const t=[];let e=0;const n=[],r=[],i=[];function o(){e=0,n.length=0,r.length=0,i.length=0}function a(f,d,p,_,v,m){let h=t[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:_,renderOrder:f.renderOrder,z:v,group:m},t[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=_,h.renderOrder=f.renderOrder,h.z=v,h.group=m),e++,h}function s(f,d,p,_,v,m){const h=a(f,d,p,_,v,m);p.transmission>0?r.push(h):p.transparent===!0?i.push(h):n.push(h)}function l(f,d,p,_,v,m){const h=a(f,d,p,_,v,m);p.transmission>0?r.unshift(h):p.transparent===!0?i.unshift(h):n.unshift(h)}function c(f,d){n.length>1&&n.sort(f||qU),r.length>1&&r.sort(d||J_),i.length>1&&i.sort(d||J_)}function u(){for(let f=e,d=t.length;f<d;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:r,transparent:i,init:o,push:s,unshift:l,finish:u,sort:c}}function KU(){let t=new WeakMap;function e(r,i){const o=t.get(r);let a;return o===void 0?(a=new ey,t.set(r,[a])):i>=o.length?(a=new ey,o.push(a)):a=o[i],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function ZU(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new K,color:new vt};break;case"SpotLight":n={position:new K,direction:new K,color:new vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new K,color:new vt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new K,skyColor:new vt,groundColor:new vt};break;case"RectAreaLight":n={color:new vt,position:new K,halfWidth:new K,halfHeight:new K};break}return t[e.id]=n,n}}}function QU(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let JU=0;function eO(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function tO(t){const e=new ZU,n=QU(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new K);const i=new K,o=new $t,a=new $t;function s(c){let u=0,f=0,d=0;for(let T=0;T<9;T++)r.probe[T].set(0,0,0);let p=0,_=0,v=0,m=0,h=0,g=0,y=0,E=0,A=0,x=0,M=0;c.sort(eO);for(let T=0,w=c.length;T<w;T++){const L=c[T],V=L.color,F=L.intensity,W=L.distance,ee=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=V.r*F,f+=V.g*F,d+=V.b*F;else if(L.isLightProbe){for(let U=0;U<9;U++)r.probe[U].addScaledVector(L.sh.coefficients[U],F);M++}else if(L.isDirectionalLight){const U=e.get(L);if(U.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const N=L.shadow,R=n.get(L);R.shadowBias=N.bias,R.shadowNormalBias=N.normalBias,R.shadowRadius=N.radius,R.shadowMapSize=N.mapSize,r.directionalShadow[p]=R,r.directionalShadowMap[p]=ee,r.directionalShadowMatrix[p]=L.shadow.matrix,g++}r.directional[p]=U,p++}else if(L.isSpotLight){const U=e.get(L);U.position.setFromMatrixPosition(L.matrixWorld),U.color.copy(V).multiplyScalar(F),U.distance=W,U.coneCos=Math.cos(L.angle),U.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),U.decay=L.decay,r.spot[v]=U;const N=L.shadow;if(L.map&&(r.spotLightMap[A]=L.map,A++,N.updateMatrices(L),L.castShadow&&x++),r.spotLightMatrix[v]=N.matrix,L.castShadow){const R=n.get(L);R.shadowBias=N.bias,R.shadowNormalBias=N.normalBias,R.shadowRadius=N.radius,R.shadowMapSize=N.mapSize,r.spotShadow[v]=R,r.spotShadowMap[v]=ee,E++}v++}else if(L.isRectAreaLight){const U=e.get(L);U.color.copy(V).multiplyScalar(F),U.halfWidth.set(L.width*.5,0,0),U.halfHeight.set(0,L.height*.5,0),r.rectArea[m]=U,m++}else if(L.isPointLight){const U=e.get(L);if(U.color.copy(L.color).multiplyScalar(L.intensity),U.distance=L.distance,U.decay=L.decay,L.castShadow){const N=L.shadow,R=n.get(L);R.shadowBias=N.bias,R.shadowNormalBias=N.normalBias,R.shadowRadius=N.radius,R.shadowMapSize=N.mapSize,R.shadowCameraNear=N.camera.near,R.shadowCameraFar=N.camera.far,r.pointShadow[_]=R,r.pointShadowMap[_]=ee,r.pointShadowMatrix[_]=L.shadow.matrix,y++}r.point[_]=U,_++}else if(L.isHemisphereLight){const U=e.get(L);U.skyColor.copy(L.color).multiplyScalar(F),U.groundColor.copy(L.groundColor).multiplyScalar(F),r.hemi[h]=U,h++}}m>0&&(t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Se.LTC_FLOAT_1,r.rectAreaLTC2=Se.LTC_FLOAT_2):(r.rectAreaLTC1=Se.LTC_HALF_1,r.rectAreaLTC2=Se.LTC_HALF_2)),r.ambient[0]=u,r.ambient[1]=f,r.ambient[2]=d;const P=r.hash;(P.directionalLength!==p||P.pointLength!==_||P.spotLength!==v||P.rectAreaLength!==m||P.hemiLength!==h||P.numDirectionalShadows!==g||P.numPointShadows!==y||P.numSpotShadows!==E||P.numSpotMaps!==A||P.numLightProbes!==M)&&(r.directional.length=p,r.spot.length=v,r.rectArea.length=m,r.point.length=_,r.hemi.length=h,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.pointShadow.length=y,r.pointShadowMap.length=y,r.spotShadow.length=E,r.spotShadowMap.length=E,r.directionalShadowMatrix.length=g,r.pointShadowMatrix.length=y,r.spotLightMatrix.length=E+A-x,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=x,r.numLightProbes=M,P.directionalLength=p,P.pointLength=_,P.spotLength=v,P.rectAreaLength=m,P.hemiLength=h,P.numDirectionalShadows=g,P.numPointShadows=y,P.numSpotShadows=E,P.numSpotMaps=A,P.numLightProbes=M,r.version=JU++)}function l(c,u){let f=0,d=0,p=0,_=0,v=0;const m=u.matrixWorldInverse;for(let h=0,g=c.length;h<g;h++){const y=c[h];if(y.isDirectionalLight){const E=r.directional[f];E.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(m),f++}else if(y.isSpotLight){const E=r.spot[p];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const E=r.rectArea[_];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(m),a.identity(),o.copy(y.matrixWorld),o.premultiply(m),a.extractRotation(o),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){const E=r.point[d];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const E=r.hemi[v];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(m),v++}}}return{setup:s,setupView:l,state:r}}function ty(t){const e=new tO(t),n=[],r=[];function i(u){c.camera=u,n.length=0,r.length=0}function o(u){n.push(u)}function a(u){r.push(u)}function s(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:s,setupLightsView:l,pushLight:o,pushShadow:a}}function nO(t){let e=new WeakMap;function n(i,o=0){const a=e.get(i);let s;return a===void 0?(s=new ty(t),e.set(i,[s])):o>=a.length?(s=new ty(t),a.push(s)):s=a[o],s}function r(){e=new WeakMap}return{get:n,dispose:r}}class rO extends Ll{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=FL,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class iO extends Ll{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const oO=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,aO=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function sO(t,e,n){let r=new kM;const i=new Je,o=new Je,a=new rn,s=new rO({depthPacking:kL}),l=new iO,c={},u=n.maxTextureSize,f={[Vi]:Rn,[Rn]:Vi,[zn]:zn},d=new Wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:oO,fragmentShader:aO}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new Ir;_.setAttribute("position",new Dr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new yn(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gM;let h=this.type;this.render=function(x,M,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||x.length===0)return;const T=t.getRenderTarget(),w=t.getActiveCubeFace(),L=t.getActiveMipmapLevel(),V=t.state;V.setBlending(Fi),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const F=h!==Hr&&this.type===Hr,W=h===Hr&&this.type!==Hr;for(let ee=0,U=x.length;ee<U;ee++){const N=x[ee],R=N.shadow;if(R===void 0){console.warn("THREE.WebGLShadowMap:",N,"has no shadow.");continue}if(R.autoUpdate===!1&&R.needsUpdate===!1)continue;i.copy(R.mapSize);const z=R.getFrameExtents();if(i.multiply(z),o.copy(R.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(o.x=Math.floor(u/z.x),i.x=o.x*z.x,R.mapSize.x=o.x),i.y>u&&(o.y=Math.floor(u/z.y),i.y=o.y*z.y,R.mapSize.y=o.y)),R.map===null||F===!0||W===!0){const Y=this.type!==Hr?{minFilter:er,magFilter:er}:{};R.map!==null&&R.map.dispose(),R.map=new Uo(i.x,i.y,Y),R.map.texture.name=N.name+".shadowMap",R.camera.updateProjectionMatrix()}t.setRenderTarget(R.map),t.clear();const X=R.getViewportCount();for(let Y=0;Y<X;Y++){const oe=R.getViewport(Y);a.set(o.x*oe.x,o.y*oe.y,o.x*oe.z,o.y*oe.w),V.viewport(a),R.updateMatrices(N,Y),r=R.getFrustum(),E(M,P,R.camera,N,this.type)}R.isPointLightShadow!==!0&&this.type===Hr&&g(R,P),R.needsUpdate=!1}h=this.type,m.needsUpdate=!1,t.setRenderTarget(T,w,L)};function g(x,M){const P=e.update(v);d.defines.VSM_SAMPLES!==x.blurSamples&&(d.defines.VSM_SAMPLES=x.blurSamples,p.defines.VSM_SAMPLES=x.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),x.mapPass===null&&(x.mapPass=new Uo(i.x,i.y)),d.uniforms.shadow_pass.value=x.map.texture,d.uniforms.resolution.value=x.mapSize,d.uniforms.radius.value=x.radius,t.setRenderTarget(x.mapPass),t.clear(),t.renderBufferDirect(M,null,P,d,v,null),p.uniforms.shadow_pass.value=x.mapPass.texture,p.uniforms.resolution.value=x.mapSize,p.uniforms.radius.value=x.radius,t.setRenderTarget(x.map),t.clear(),t.renderBufferDirect(M,null,P,p,v,null)}function y(x,M,P,T){let w=null;const L=P.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(L!==void 0)w=L;else if(w=P.isPointLight===!0?l:s,t.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const V=w.uuid,F=M.uuid;let W=c[V];W===void 0&&(W={},c[V]=W);let ee=W[F];ee===void 0&&(ee=w.clone(),W[F]=ee,M.addEventListener("dispose",A)),w=ee}if(w.visible=M.visible,w.wireframe=M.wireframe,T===Hr?w.side=M.shadowSide!==null?M.shadowSide:M.side:w.side=M.shadowSide!==null?M.shadowSide:f[M.side],w.alphaMap=M.alphaMap,w.alphaTest=M.alphaTest,w.map=M.map,w.clipShadows=M.clipShadows,w.clippingPlanes=M.clippingPlanes,w.clipIntersection=M.clipIntersection,w.displacementMap=M.displacementMap,w.displacementScale=M.displacementScale,w.displacementBias=M.displacementBias,w.wireframeLinewidth=M.wireframeLinewidth,w.linewidth=M.linewidth,P.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const V=t.properties.get(w);V.light=P}return w}function E(x,M,P,T,w){if(x.visible===!1)return;if(x.layers.test(M.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&w===Hr)&&(!x.frustumCulled||r.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,x.matrixWorld);const F=e.update(x),W=x.material;if(Array.isArray(W)){const ee=F.groups;for(let U=0,N=ee.length;U<N;U++){const R=ee[U],z=W[R.materialIndex];if(z&&z.visible){const X=y(x,z,T,w);x.onBeforeShadow(t,x,M,P,F,X,R),t.renderBufferDirect(P,null,F,X,x,R),x.onAfterShadow(t,x,M,P,F,X,R)}}}else if(W.visible){const ee=y(x,W,T,w);x.onBeforeShadow(t,x,M,P,F,ee,null),t.renderBufferDirect(P,null,F,ee,x,null),x.onAfterShadow(t,x,M,P,F,ee,null)}}const V=x.children;for(let F=0,W=V.length;F<W;F++)E(V[F],M,P,T,w)}function A(x){x.target.removeEventListener("dispose",A);for(const P in c){const T=c[P],w=x.target.uuid;w in T&&(T[w].dispose(),delete T[w])}}}function lO(t){function e(){let S=!1;const te=new rn;let Z=null;const ne=new rn(0,0,0,0);return{setMask:function(ce){Z!==ce&&!S&&(t.colorMask(ce,ce,ce,ce),Z=ce)},setLocked:function(ce){S=ce},setClear:function(ce,Re,Ye,tt,Pt){Pt===!0&&(ce*=tt,Re*=tt,Ye*=tt),te.set(ce,Re,Ye,tt),ne.equals(te)===!1&&(t.clearColor(ce,Re,Ye,tt),ne.copy(te))},reset:function(){S=!1,Z=null,ne.set(-1,0,0,0)}}}function n(){let S=!1,te=null,Z=null,ne=null;return{setTest:function(ce){ce?de(t.DEPTH_TEST):fe(t.DEPTH_TEST)},setMask:function(ce){te!==ce&&!S&&(t.depthMask(ce),te=ce)},setFunc:function(ce){if(Z!==ce){switch(ce){case uL:t.depthFunc(t.NEVER);break;case fL:t.depthFunc(t.ALWAYS);break;case dL:t.depthFunc(t.LESS);break;case Iu:t.depthFunc(t.LEQUAL);break;case hL:t.depthFunc(t.EQUAL);break;case pL:t.depthFunc(t.GEQUAL);break;case mL:t.depthFunc(t.GREATER);break;case gL:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Z=ce}},setLocked:function(ce){S=ce},setClear:function(ce){ne!==ce&&(t.clearDepth(ce),ne=ce)},reset:function(){S=!1,te=null,Z=null,ne=null}}}function r(){let S=!1,te=null,Z=null,ne=null,ce=null,Re=null,Ye=null,tt=null,Pt=null;return{setTest:function(mt){S||(mt?de(t.STENCIL_TEST):fe(t.STENCIL_TEST))},setMask:function(mt){te!==mt&&!S&&(t.stencilMask(mt),te=mt)},setFunc:function(mt,nt,rt){(Z!==mt||ne!==nt||ce!==rt)&&(t.stencilFunc(mt,nt,rt),Z=mt,ne=nt,ce=rt)},setOp:function(mt,nt,rt){(Re!==mt||Ye!==nt||tt!==rt)&&(t.stencilOp(mt,nt,rt),Re=mt,Ye=nt,tt=rt)},setLocked:function(mt){S=mt},setClear:function(mt){Pt!==mt&&(t.clearStencil(mt),Pt=mt)},reset:function(){S=!1,te=null,Z=null,ne=null,ce=null,Re=null,Ye=null,tt=null,Pt=null}}}const i=new e,o=new n,a=new r,s=new WeakMap,l=new WeakMap;let c={},u={},f=new WeakMap,d=[],p=null,_=!1,v=null,m=null,h=null,g=null,y=null,E=null,A=null,x=new vt(0,0,0),M=0,P=!1,T=null,w=null,L=null,V=null,F=null;const W=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ee=!1,U=0;const N=t.getParameter(t.VERSION);N.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(N)[1]),ee=U>=1):N.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),ee=U>=2);let R=null,z={};const X=t.getParameter(t.SCISSOR_BOX),Y=t.getParameter(t.VIEWPORT),oe=new rn().fromArray(X),xe=new rn().fromArray(Y);function q(S,te,Z,ne){const ce=new Uint8Array(4),Re=t.createTexture();t.bindTexture(S,Re),t.texParameteri(S,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(S,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ye=0;Ye<Z;Ye++)S===t.TEXTURE_3D||S===t.TEXTURE_2D_ARRAY?t.texImage3D(te,0,t.RGBA,1,1,ne,0,t.RGBA,t.UNSIGNED_BYTE,ce):t.texImage2D(te+Ye,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ce);return Re}const ae={};ae[t.TEXTURE_2D]=q(t.TEXTURE_2D,t.TEXTURE_2D,1),ae[t.TEXTURE_CUBE_MAP]=q(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[t.TEXTURE_2D_ARRAY]=q(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ae[t.TEXTURE_3D]=q(t.TEXTURE_3D,t.TEXTURE_3D,1,1),i.setClear(0,0,0,1),o.setClear(1),a.setClear(0),de(t.DEPTH_TEST),o.setFunc(Iu),Ne(!1),Oe(U0),de(t.CULL_FACE),je(Fi);function de(S){c[S]!==!0&&(t.enable(S),c[S]=!0)}function fe(S){c[S]!==!1&&(t.disable(S),c[S]=!1)}function $e(S,te){return u[S]!==te?(t.bindFramebuffer(S,te),u[S]=te,S===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=te),S===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=te),!0):!1}function We(S,te){let Z=d,ne=!1;if(S){Z=f.get(te),Z===void 0&&(Z=[],f.set(te,Z));const ce=S.textures;if(Z.length!==ce.length||Z[0]!==t.COLOR_ATTACHMENT0){for(let Re=0,Ye=ce.length;Re<Ye;Re++)Z[Re]=t.COLOR_ATTACHMENT0+Re;Z.length=ce.length,ne=!0}}else Z[0]!==t.BACK&&(Z[0]=t.BACK,ne=!0);ne&&t.drawBuffers(Z)}function et(S){return p!==S?(t.useProgram(S),p=S,!0):!1}const B={[uo]:t.FUNC_ADD,[X2]:t.FUNC_SUBTRACT,[Y2]:t.FUNC_REVERSE_SUBTRACT};B[q2]=t.MIN,B[K2]=t.MAX;const De={[Z2]:t.ZERO,[Q2]:t.ONE,[J2]:t.SRC_COLOR,[Pp]:t.SRC_ALPHA,[oL]:t.SRC_ALPHA_SATURATE,[rL]:t.DST_COLOR,[tL]:t.DST_ALPHA,[eL]:t.ONE_MINUS_SRC_COLOR,[Lp]:t.ONE_MINUS_SRC_ALPHA,[iL]:t.ONE_MINUS_DST_COLOR,[nL]:t.ONE_MINUS_DST_ALPHA,[aL]:t.CONSTANT_COLOR,[sL]:t.ONE_MINUS_CONSTANT_COLOR,[lL]:t.CONSTANT_ALPHA,[cL]:t.ONE_MINUS_CONSTANT_ALPHA};function je(S,te,Z,ne,ce,Re,Ye,tt,Pt,mt){if(S===Fi){_===!0&&(fe(t.BLEND),_=!1);return}if(_===!1&&(de(t.BLEND),_=!0),S!==$2){if(S!==v||mt!==P){if((m!==uo||y!==uo)&&(t.blendEquation(t.FUNC_ADD),m=uo,y=uo),mt)switch(S){case Da:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case O0:t.blendFunc(t.ONE,t.ONE);break;case F0:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case k0:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",S);break}else switch(S){case Da:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case O0:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case F0:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case k0:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",S);break}h=null,g=null,E=null,A=null,x.set(0,0,0),M=0,v=S,P=mt}return}ce=ce||te,Re=Re||Z,Ye=Ye||ne,(te!==m||ce!==y)&&(t.blendEquationSeparate(B[te],B[ce]),m=te,y=ce),(Z!==h||ne!==g||Re!==E||Ye!==A)&&(t.blendFuncSeparate(De[Z],De[ne],De[Re],De[Ye]),h=Z,g=ne,E=Re,A=Ye),(tt.equals(x)===!1||Pt!==M)&&(t.blendColor(tt.r,tt.g,tt.b,Pt),x.copy(tt),M=Pt),v=S,P=!1}function dt(S,te){S.side===zn?fe(t.CULL_FACE):de(t.CULL_FACE);let Z=S.side===Rn;te&&(Z=!Z),Ne(Z),S.blending===Da&&S.transparent===!1?je(Fi):je(S.blending,S.blendEquation,S.blendSrc,S.blendDst,S.blendEquationAlpha,S.blendSrcAlpha,S.blendDstAlpha,S.blendColor,S.blendAlpha,S.premultipliedAlpha),o.setFunc(S.depthFunc),o.setTest(S.depthTest),o.setMask(S.depthWrite),i.setMask(S.colorWrite);const ne=S.stencilWrite;a.setTest(ne),ne&&(a.setMask(S.stencilWriteMask),a.setFunc(S.stencilFunc,S.stencilRef,S.stencilFuncMask),a.setOp(S.stencilFail,S.stencilZFail,S.stencilZPass)),Be(S.polygonOffset,S.polygonOffsetFactor,S.polygonOffsetUnits),S.alphaToCoverage===!0?de(t.SAMPLE_ALPHA_TO_COVERAGE):fe(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ne(S){T!==S&&(S?t.frontFace(t.CW):t.frontFace(t.CCW),T=S)}function Oe(S){S!==W2?(de(t.CULL_FACE),S!==w&&(S===U0?t.cullFace(t.BACK):S===j2?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):fe(t.CULL_FACE),w=S}function Xe(S){S!==L&&(ee&&t.lineWidth(S),L=S)}function Be(S,te,Z){S?(de(t.POLYGON_OFFSET_FILL),(V!==te||F!==Z)&&(t.polygonOffset(te,Z),V=te,F=Z)):fe(t.POLYGON_OFFSET_FILL)}function yt(S){S?de(t.SCISSOR_TEST):fe(t.SCISSOR_TEST)}function D(S){S===void 0&&(S=t.TEXTURE0+W-1),R!==S&&(t.activeTexture(S),R=S)}function b(S,te,Z){Z===void 0&&(R===null?Z=t.TEXTURE0+W-1:Z=R);let ne=z[Z];ne===void 0&&(ne={type:void 0,texture:void 0},z[Z]=ne),(ne.type!==S||ne.texture!==te)&&(R!==Z&&(t.activeTexture(Z),R=Z),t.bindTexture(S,te||ae[S]),ne.type=S,ne.texture=te)}function Q(){const S=z[R];S!==void 0&&S.type!==void 0&&(t.bindTexture(S.type,null),S.type=void 0,S.texture=void 0)}function se(){try{t.compressedTexImage2D.apply(t,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function ie(){try{t.compressedTexImage3D.apply(t,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function le(){try{t.texSubImage2D.apply(t,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Le(){try{t.texSubImage3D.apply(t,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function ge(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function me(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function ke(){try{t.texStorage2D.apply(t,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function pe(){try{t.texStorage3D.apply(t,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function be(){try{t.texImage2D.apply(t,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function ot(){try{t.texImage3D.apply(t,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Ue(S){oe.equals(S)===!1&&(t.scissor(S.x,S.y,S.z,S.w),oe.copy(S))}function ye(S){xe.equals(S)===!1&&(t.viewport(S.x,S.y,S.z,S.w),xe.copy(S))}function qe(S,te){let Z=l.get(te);Z===void 0&&(Z=new WeakMap,l.set(te,Z));let ne=Z.get(S);ne===void 0&&(ne=t.getUniformBlockIndex(te,S.name),Z.set(S,ne))}function Ke(S,te){const ne=l.get(te).get(S);s.get(te)!==ne&&(t.uniformBlockBinding(te,ne,S.__bindingPointIndex),s.set(te,ne))}function wt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},R=null,z={},u={},f=new WeakMap,d=[],p=null,_=!1,v=null,m=null,h=null,g=null,y=null,E=null,A=null,x=new vt(0,0,0),M=0,P=!1,T=null,w=null,L=null,V=null,F=null,oe.set(0,0,t.canvas.width,t.canvas.height),xe.set(0,0,t.canvas.width,t.canvas.height),i.reset(),o.reset(),a.reset()}return{buffers:{color:i,depth:o,stencil:a},enable:de,disable:fe,bindFramebuffer:$e,drawBuffers:We,useProgram:et,setBlending:je,setMaterial:dt,setFlipSided:Ne,setCullFace:Oe,setLineWidth:Xe,setPolygonOffset:Be,setScissorTest:yt,activeTexture:D,bindTexture:b,unbindTexture:Q,compressedTexImage2D:se,compressedTexImage3D:ie,texImage2D:be,texImage3D:ot,updateUBOMapping:qe,uniformBlockBinding:Ke,texStorage2D:ke,texStorage3D:pe,texSubImage2D:le,texSubImage3D:Le,compressedTexSubImage2D:ge,compressedTexSubImage3D:me,scissor:Ue,viewport:ye,reset:wt}}function cO(t,e,n,r,i,o,a){const s=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Je,u=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(D,b){return p?new OffscreenCanvas(D,b):zu("canvas")}function v(D,b,Q){let se=1;const ie=yt(D);if((ie.width>Q||ie.height>Q)&&(se=Q/Math.max(ie.width,ie.height)),se<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const le=Math.floor(se*ie.width),Le=Math.floor(se*ie.height);f===void 0&&(f=_(le,Le));const ge=b?_(le,Le):f;return ge.width=le,ge.height=Le,ge.getContext("2d").drawImage(D,0,0,le,Le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+le+"x"+Le+")."),ge}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),D;return D}function m(D){return D.generateMipmaps&&D.minFilter!==er&&D.minFilter!==gr}function h(D){t.generateMipmap(D)}function g(D,b,Q,se,ie=!1){if(D!==null){if(t[D]!==void 0)return t[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let le=b;if(b===t.RED&&(Q===t.FLOAT&&(le=t.R32F),Q===t.HALF_FLOAT&&(le=t.R16F),Q===t.UNSIGNED_BYTE&&(le=t.R8)),b===t.RED_INTEGER&&(Q===t.UNSIGNED_BYTE&&(le=t.R8UI),Q===t.UNSIGNED_SHORT&&(le=t.R16UI),Q===t.UNSIGNED_INT&&(le=t.R32UI),Q===t.BYTE&&(le=t.R8I),Q===t.SHORT&&(le=t.R16I),Q===t.INT&&(le=t.R32I)),b===t.RG&&(Q===t.FLOAT&&(le=t.RG32F),Q===t.HALF_FLOAT&&(le=t.RG16F),Q===t.UNSIGNED_BYTE&&(le=t.RG8)),b===t.RG_INTEGER&&(Q===t.UNSIGNED_BYTE&&(le=t.RG8UI),Q===t.UNSIGNED_SHORT&&(le=t.RG16UI),Q===t.UNSIGNED_INT&&(le=t.RG32UI),Q===t.BYTE&&(le=t.RG8I),Q===t.SHORT&&(le=t.RG16I),Q===t.INT&&(le=t.RG32I)),b===t.RGB&&Q===t.UNSIGNED_INT_5_9_9_9_REV&&(le=t.RGB9_E5),b===t.RGBA){const Le=ie?Uu:St.getTransfer(se);Q===t.FLOAT&&(le=t.RGBA32F),Q===t.HALF_FLOAT&&(le=t.RGBA16F),Q===t.UNSIGNED_BYTE&&(le=Le===Dt?t.SRGB8_ALPHA8:t.RGBA8),Q===t.UNSIGNED_SHORT_4_4_4_4&&(le=t.RGBA4),Q===t.UNSIGNED_SHORT_5_5_5_1&&(le=t.RGB5_A1)}return(le===t.R16F||le===t.R32F||le===t.RG16F||le===t.RG32F||le===t.RGBA16F||le===t.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function y(D,b){let Q;return D?b===null||b===Ya||b===qa?Q=t.DEPTH24_STENCIL8:b===Ci?Q=t.DEPTH32F_STENCIL8:b===Nu&&(Q=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Ya||b===qa?Q=t.DEPTH_COMPONENT24:b===Ci?Q=t.DEPTH_COMPONENT32F:b===Nu&&(Q=t.DEPTH_COMPONENT16),Q}function E(D,b){return m(D)===!0||D.isFramebufferTexture&&D.minFilter!==er&&D.minFilter!==gr?Math.log2(Math.max(b.width,b.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?b.mipmaps.length:1}function A(D){const b=D.target;b.removeEventListener("dispose",A),M(b),b.isVideoTexture&&u.delete(b)}function x(D){const b=D.target;b.removeEventListener("dispose",x),T(b)}function M(D){const b=r.get(D);if(b.__webglInit===void 0)return;const Q=D.source,se=d.get(Q);if(se){const ie=se[b.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&P(D),Object.keys(se).length===0&&d.delete(Q)}r.remove(D)}function P(D){const b=r.get(D);t.deleteTexture(b.__webglTexture);const Q=D.source,se=d.get(Q);delete se[b.__cacheKey],a.memory.textures--}function T(D){const b=r.get(D);if(D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(b.__webglFramebuffer[se]))for(let ie=0;ie<b.__webglFramebuffer[se].length;ie++)t.deleteFramebuffer(b.__webglFramebuffer[se][ie]);else t.deleteFramebuffer(b.__webglFramebuffer[se]);b.__webglDepthbuffer&&t.deleteRenderbuffer(b.__webglDepthbuffer[se])}else{if(Array.isArray(b.__webglFramebuffer))for(let se=0;se<b.__webglFramebuffer.length;se++)t.deleteFramebuffer(b.__webglFramebuffer[se]);else t.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&t.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&t.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let se=0;se<b.__webglColorRenderbuffer.length;se++)b.__webglColorRenderbuffer[se]&&t.deleteRenderbuffer(b.__webglColorRenderbuffer[se]);b.__webglDepthRenderbuffer&&t.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const Q=D.textures;for(let se=0,ie=Q.length;se<ie;se++){const le=r.get(Q[se]);le.__webglTexture&&(t.deleteTexture(le.__webglTexture),a.memory.textures--),r.remove(Q[se])}r.remove(D)}let w=0;function L(){w=0}function V(){const D=w;return D>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+i.maxTextures),w+=1,D}function F(D){const b=[];return b.push(D.wrapS),b.push(D.wrapT),b.push(D.wrapR||0),b.push(D.magFilter),b.push(D.minFilter),b.push(D.anisotropy),b.push(D.internalFormat),b.push(D.format),b.push(D.type),b.push(D.generateMipmaps),b.push(D.premultiplyAlpha),b.push(D.flipY),b.push(D.unpackAlignment),b.push(D.colorSpace),b.join()}function W(D,b){const Q=r.get(D);if(D.isVideoTexture&&Xe(D),D.isRenderTargetTexture===!1&&D.version>0&&Q.__version!==D.version){const se=D.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{xe(Q,D,b);return}}n.bindTexture(t.TEXTURE_2D,Q.__webglTexture,t.TEXTURE0+b)}function ee(D,b){const Q=r.get(D);if(D.version>0&&Q.__version!==D.version){xe(Q,D,b);return}n.bindTexture(t.TEXTURE_2D_ARRAY,Q.__webglTexture,t.TEXTURE0+b)}function U(D,b){const Q=r.get(D);if(D.version>0&&Q.__version!==D.version){xe(Q,D,b);return}n.bindTexture(t.TEXTURE_3D,Q.__webglTexture,t.TEXTURE0+b)}function N(D,b){const Q=r.get(D);if(D.version>0&&Q.__version!==D.version){q(Q,D,b);return}n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture,t.TEXTURE0+b)}const R={[Np]:t.REPEAT,[yo]:t.CLAMP_TO_EDGE,[Up]:t.MIRRORED_REPEAT},z={[er]:t.NEAREST,[bL]:t.NEAREST_MIPMAP_NEAREST,[oc]:t.NEAREST_MIPMAP_LINEAR,[gr]:t.LINEAR,[Ad]:t.LINEAR_MIPMAP_NEAREST,[xo]:t.LINEAR_MIPMAP_LINEAR},X={[HL]:t.NEVER,[XL]:t.ALWAYS,[VL]:t.LESS,[bM]:t.LEQUAL,[GL]:t.EQUAL,[$L]:t.GEQUAL,[WL]:t.GREATER,[jL]:t.NOTEQUAL};function Y(D,b){if(b.type===Ci&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===gr||b.magFilter===Ad||b.magFilter===oc||b.magFilter===xo||b.minFilter===gr||b.minFilter===Ad||b.minFilter===oc||b.minFilter===xo)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(D,t.TEXTURE_WRAP_S,R[b.wrapS]),t.texParameteri(D,t.TEXTURE_WRAP_T,R[b.wrapT]),(D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY)&&t.texParameteri(D,t.TEXTURE_WRAP_R,R[b.wrapR]),t.texParameteri(D,t.TEXTURE_MAG_FILTER,z[b.magFilter]),t.texParameteri(D,t.TEXTURE_MIN_FILTER,z[b.minFilter]),b.compareFunction&&(t.texParameteri(D,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(D,t.TEXTURE_COMPARE_FUNC,X[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===er||b.minFilter!==oc&&b.minFilter!==xo||b.type===Ci&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const Q=e.get("EXT_texture_filter_anisotropic");t.texParameterf(D,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function oe(D,b){let Q=!1;D.__webglInit===void 0&&(D.__webglInit=!0,b.addEventListener("dispose",A));const se=b.source;let ie=d.get(se);ie===void 0&&(ie={},d.set(se,ie));const le=F(b);if(le!==D.__cacheKey){ie[le]===void 0&&(ie[le]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,Q=!0),ie[le].usedTimes++;const Le=ie[D.__cacheKey];Le!==void 0&&(ie[D.__cacheKey].usedTimes--,Le.usedTimes===0&&P(b)),D.__cacheKey=le,D.__webglTexture=ie[le].texture}return Q}function xe(D,b,Q){let se=t.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(se=t.TEXTURE_2D_ARRAY),b.isData3DTexture&&(se=t.TEXTURE_3D);const ie=oe(D,b),le=b.source;n.bindTexture(se,D.__webglTexture,t.TEXTURE0+Q);const Le=r.get(le);if(le.version!==Le.__version||ie===!0){n.activeTexture(t.TEXTURE0+Q);const ge=St.getPrimaries(St.workingColorSpace),me=b.colorSpace===Ei?null:St.getPrimaries(b.colorSpace),ke=b.colorSpace===Ei||ge===me?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);let pe=v(b.image,!1,i.maxTextureSize);pe=Be(b,pe);const be=o.convert(b.format,b.colorSpace),ot=o.convert(b.type);let Ue=g(b.internalFormat,be,ot,b.colorSpace,b.isVideoTexture);Y(se,b);let ye;const qe=b.mipmaps,Ke=b.isVideoTexture!==!0,wt=Le.__version===void 0||ie===!0,S=le.dataReady,te=E(b,pe);if(b.isDepthTexture)Ue=y(b.format===Ka,b.type),wt&&(Ke?n.texStorage2D(t.TEXTURE_2D,1,Ue,pe.width,pe.height):n.texImage2D(t.TEXTURE_2D,0,Ue,pe.width,pe.height,0,be,ot,null));else if(b.isDataTexture)if(qe.length>0){Ke&&wt&&n.texStorage2D(t.TEXTURE_2D,te,Ue,qe[0].width,qe[0].height);for(let Z=0,ne=qe.length;Z<ne;Z++)ye=qe[Z],Ke?S&&n.texSubImage2D(t.TEXTURE_2D,Z,0,0,ye.width,ye.height,be,ot,ye.data):n.texImage2D(t.TEXTURE_2D,Z,Ue,ye.width,ye.height,0,be,ot,ye.data);b.generateMipmaps=!1}else Ke?(wt&&n.texStorage2D(t.TEXTURE_2D,te,Ue,pe.width,pe.height),S&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,pe.width,pe.height,be,ot,pe.data)):n.texImage2D(t.TEXTURE_2D,0,Ue,pe.width,pe.height,0,be,ot,pe.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ke&&wt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,te,Ue,qe[0].width,qe[0].height,pe.depth);for(let Z=0,ne=qe.length;Z<ne;Z++)if(ye=qe[Z],b.format!==Rr)if(be!==null)if(Ke){if(S)if(b.layerUpdates.size>0){for(const ce of b.layerUpdates){const Re=ye.width*ye.height;n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Z,0,0,ce,ye.width,ye.height,1,be,ye.data.slice(Re*ce,Re*(ce+1)),0,0)}b.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Z,0,0,0,ye.width,ye.height,pe.depth,be,ye.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Z,Ue,ye.width,ye.height,pe.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ke?S&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,Z,0,0,0,ye.width,ye.height,pe.depth,be,ot,ye.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Z,Ue,ye.width,ye.height,pe.depth,0,be,ot,ye.data)}else{Ke&&wt&&n.texStorage2D(t.TEXTURE_2D,te,Ue,qe[0].width,qe[0].height);for(let Z=0,ne=qe.length;Z<ne;Z++)ye=qe[Z],b.format!==Rr?be!==null?Ke?S&&n.compressedTexSubImage2D(t.TEXTURE_2D,Z,0,0,ye.width,ye.height,be,ye.data):n.compressedTexImage2D(t.TEXTURE_2D,Z,Ue,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?S&&n.texSubImage2D(t.TEXTURE_2D,Z,0,0,ye.width,ye.height,be,ot,ye.data):n.texImage2D(t.TEXTURE_2D,Z,Ue,ye.width,ye.height,0,be,ot,ye.data)}else if(b.isDataArrayTexture)if(Ke){if(wt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,te,Ue,pe.width,pe.height,pe.depth),S)if(b.layerUpdates.size>0){let Z;switch(ot){case t.UNSIGNED_BYTE:switch(be){case t.ALPHA:Z=1;break;case t.LUMINANCE:Z=1;break;case t.LUMINANCE_ALPHA:Z=2;break;case t.RGB:Z=3;break;case t.RGBA:Z=4;break;default:throw new Error(`Unknown texel size for format ${be}.`)}break;case t.UNSIGNED_SHORT_4_4_4_4:case t.UNSIGNED_SHORT_5_5_5_1:case t.UNSIGNED_SHORT_5_6_5:Z=1;break;default:throw new Error(`Unknown texel size for type ${ot}.`)}const ne=pe.width*pe.height*Z;for(const ce of b.layerUpdates)n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ce,pe.width,pe.height,1,be,ot,pe.data.slice(ne*ce,ne*(ce+1)));b.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,be,ot,pe.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ue,pe.width,pe.height,pe.depth,0,be,ot,pe.data);else if(b.isData3DTexture)Ke?(wt&&n.texStorage3D(t.TEXTURE_3D,te,Ue,pe.width,pe.height,pe.depth),S&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,be,ot,pe.data)):n.texImage3D(t.TEXTURE_3D,0,Ue,pe.width,pe.height,pe.depth,0,be,ot,pe.data);else if(b.isFramebufferTexture){if(wt)if(Ke)n.texStorage2D(t.TEXTURE_2D,te,Ue,pe.width,pe.height);else{let Z=pe.width,ne=pe.height;for(let ce=0;ce<te;ce++)n.texImage2D(t.TEXTURE_2D,ce,Ue,Z,ne,0,be,ot,null),Z>>=1,ne>>=1}}else if(qe.length>0){if(Ke&&wt){const Z=yt(qe[0]);n.texStorage2D(t.TEXTURE_2D,te,Ue,Z.width,Z.height)}for(let Z=0,ne=qe.length;Z<ne;Z++)ye=qe[Z],Ke?S&&n.texSubImage2D(t.TEXTURE_2D,Z,0,0,be,ot,ye):n.texImage2D(t.TEXTURE_2D,Z,Ue,be,ot,ye);b.generateMipmaps=!1}else if(Ke){if(wt){const Z=yt(pe);n.texStorage2D(t.TEXTURE_2D,te,Ue,Z.width,Z.height)}S&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,be,ot,pe)}else n.texImage2D(t.TEXTURE_2D,0,Ue,be,ot,pe);m(b)&&h(se),Le.__version=le.version,b.onUpdate&&b.onUpdate(b)}D.__version=b.version}function q(D,b,Q){if(b.image.length!==6)return;const se=oe(D,b),ie=b.source;n.bindTexture(t.TEXTURE_CUBE_MAP,D.__webglTexture,t.TEXTURE0+Q);const le=r.get(ie);if(ie.version!==le.__version||se===!0){n.activeTexture(t.TEXTURE0+Q);const Le=St.getPrimaries(St.workingColorSpace),ge=b.colorSpace===Ei?null:St.getPrimaries(b.colorSpace),me=b.colorSpace===Ei||Le===ge?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const ke=b.isCompressedTexture||b.image[0].isCompressedTexture,pe=b.image[0]&&b.image[0].isDataTexture,be=[];for(let ne=0;ne<6;ne++)!ke&&!pe?be[ne]=v(b.image[ne],!0,i.maxCubemapSize):be[ne]=pe?b.image[ne].image:b.image[ne],be[ne]=Be(b,be[ne]);const ot=be[0],Ue=o.convert(b.format,b.colorSpace),ye=o.convert(b.type),qe=g(b.internalFormat,Ue,ye,b.colorSpace),Ke=b.isVideoTexture!==!0,wt=le.__version===void 0||se===!0,S=ie.dataReady;let te=E(b,ot);Y(t.TEXTURE_CUBE_MAP,b);let Z;if(ke){Ke&&wt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,te,qe,ot.width,ot.height);for(let ne=0;ne<6;ne++){Z=be[ne].mipmaps;for(let ce=0;ce<Z.length;ce++){const Re=Z[ce];b.format!==Rr?Ue!==null?Ke?S&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ce,0,0,Re.width,Re.height,Ue,Re.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ce,qe,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ke?S&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ce,0,0,Re.width,Re.height,Ue,ye,Re.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ce,qe,Re.width,Re.height,0,Ue,ye,Re.data)}}}else{if(Z=b.mipmaps,Ke&&wt){Z.length>0&&te++;const ne=yt(be[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,te,qe,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(pe){Ke?S&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,be[ne].width,be[ne].height,Ue,ye,be[ne].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,qe,be[ne].width,be[ne].height,0,Ue,ye,be[ne].data);for(let ce=0;ce<Z.length;ce++){const Ye=Z[ce].image[ne].image;Ke?S&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ce+1,0,0,Ye.width,Ye.height,Ue,ye,Ye.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ce+1,qe,Ye.width,Ye.height,0,Ue,ye,Ye.data)}}else{Ke?S&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ue,ye,be[ne]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,qe,Ue,ye,be[ne]);for(let ce=0;ce<Z.length;ce++){const Re=Z[ce];Ke?S&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ce+1,0,0,Ue,ye,Re.image[ne]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ce+1,qe,Ue,ye,Re.image[ne])}}}m(b)&&h(t.TEXTURE_CUBE_MAP),le.__version=ie.version,b.onUpdate&&b.onUpdate(b)}D.__version=b.version}function ae(D,b,Q,se,ie,le){const Le=o.convert(Q.format,Q.colorSpace),ge=o.convert(Q.type),me=g(Q.internalFormat,Le,ge,Q.colorSpace);if(!r.get(b).__hasExternalTextures){const pe=Math.max(1,b.width>>le),be=Math.max(1,b.height>>le);ie===t.TEXTURE_3D||ie===t.TEXTURE_2D_ARRAY?n.texImage3D(ie,le,me,pe,be,b.depth,0,Le,ge,null):n.texImage2D(ie,le,me,pe,be,0,Le,ge,null)}n.bindFramebuffer(t.FRAMEBUFFER,D),Oe(b)?s.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,se,ie,r.get(Q).__webglTexture,0,Ne(b)):(ie===t.TEXTURE_2D||ie>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,se,ie,r.get(Q).__webglTexture,le),n.bindFramebuffer(t.FRAMEBUFFER,null)}function de(D,b,Q){if(t.bindRenderbuffer(t.RENDERBUFFER,D),b.depthBuffer){const se=b.depthTexture,ie=se&&se.isDepthTexture?se.type:null,le=y(b.stencilBuffer,ie),Le=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ge=Ne(b);Oe(b)?s.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ge,le,b.width,b.height):Q?t.renderbufferStorageMultisample(t.RENDERBUFFER,ge,le,b.width,b.height):t.renderbufferStorage(t.RENDERBUFFER,le,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Le,t.RENDERBUFFER,D)}else{const se=b.textures;for(let ie=0;ie<se.length;ie++){const le=se[ie],Le=o.convert(le.format,le.colorSpace),ge=o.convert(le.type),me=g(le.internalFormat,Le,ge,le.colorSpace),ke=Ne(b);Q&&Oe(b)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ke,me,b.width,b.height):Oe(b)?s.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ke,me,b.width,b.height):t.renderbufferStorage(t.RENDERBUFFER,me,b.width,b.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function fe(D,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,D),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),W(b.depthTexture,0);const se=r.get(b.depthTexture).__webglTexture,ie=Ne(b);if(b.depthTexture.format===Ia)Oe(b)?s.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,se,0,ie):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,se,0);else if(b.depthTexture.format===Ka)Oe(b)?s.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,se,0,ie):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function $e(D){const b=r.get(D),Q=D.isWebGLCubeRenderTarget===!0;if(D.depthTexture&&!b.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");fe(b.__webglFramebuffer,D)}else if(Q){b.__webglDepthbuffer=[];for(let se=0;se<6;se++)n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer[se]),b.__webglDepthbuffer[se]=t.createRenderbuffer(),de(b.__webglDepthbuffer[se],D,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=t.createRenderbuffer(),de(b.__webglDepthbuffer,D,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function We(D,b,Q){const se=r.get(D);b!==void 0&&ae(se.__webglFramebuffer,D,D.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),Q!==void 0&&$e(D)}function et(D){const b=D.texture,Q=r.get(D),se=r.get(b);D.addEventListener("dispose",x);const ie=D.textures,le=D.isWebGLCubeRenderTarget===!0,Le=ie.length>1;if(Le||(se.__webglTexture===void 0&&(se.__webglTexture=t.createTexture()),se.__version=b.version,a.memory.textures++),le){Q.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(b.mipmaps&&b.mipmaps.length>0){Q.__webglFramebuffer[ge]=[];for(let me=0;me<b.mipmaps.length;me++)Q.__webglFramebuffer[ge][me]=t.createFramebuffer()}else Q.__webglFramebuffer[ge]=t.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){Q.__webglFramebuffer=[];for(let ge=0;ge<b.mipmaps.length;ge++)Q.__webglFramebuffer[ge]=t.createFramebuffer()}else Q.__webglFramebuffer=t.createFramebuffer();if(Le)for(let ge=0,me=ie.length;ge<me;ge++){const ke=r.get(ie[ge]);ke.__webglTexture===void 0&&(ke.__webglTexture=t.createTexture(),a.memory.textures++)}if(D.samples>0&&Oe(D)===!1){Q.__webglMultisampledFramebuffer=t.createFramebuffer(),Q.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let ge=0;ge<ie.length;ge++){const me=ie[ge];Q.__webglColorRenderbuffer[ge]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,Q.__webglColorRenderbuffer[ge]);const ke=o.convert(me.format,me.colorSpace),pe=o.convert(me.type),be=g(me.internalFormat,ke,pe,me.colorSpace,D.isXRRenderTarget===!0),ot=Ne(D);t.renderbufferStorageMultisample(t.RENDERBUFFER,ot,be,D.width,D.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,Q.__webglColorRenderbuffer[ge])}t.bindRenderbuffer(t.RENDERBUFFER,null),D.depthBuffer&&(Q.__webglDepthRenderbuffer=t.createRenderbuffer(),de(Q.__webglDepthRenderbuffer,D,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(le){n.bindTexture(t.TEXTURE_CUBE_MAP,se.__webglTexture),Y(t.TEXTURE_CUBE_MAP,b);for(let ge=0;ge<6;ge++)if(b.mipmaps&&b.mipmaps.length>0)for(let me=0;me<b.mipmaps.length;me++)ae(Q.__webglFramebuffer[ge][me],D,b,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,me);else ae(Q.__webglFramebuffer[ge],D,b,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);m(b)&&h(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Le){for(let ge=0,me=ie.length;ge<me;ge++){const ke=ie[ge],pe=r.get(ke);n.bindTexture(t.TEXTURE_2D,pe.__webglTexture),Y(t.TEXTURE_2D,ke),ae(Q.__webglFramebuffer,D,ke,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,0),m(ke)&&h(t.TEXTURE_2D)}n.unbindTexture()}else{let ge=t.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ge=D.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ge,se.__webglTexture),Y(ge,b),b.mipmaps&&b.mipmaps.length>0)for(let me=0;me<b.mipmaps.length;me++)ae(Q.__webglFramebuffer[me],D,b,t.COLOR_ATTACHMENT0,ge,me);else ae(Q.__webglFramebuffer,D,b,t.COLOR_ATTACHMENT0,ge,0);m(b)&&h(ge),n.unbindTexture()}D.depthBuffer&&$e(D)}function B(D){const b=D.textures;for(let Q=0,se=b.length;Q<se;Q++){const ie=b[Q];if(m(ie)){const le=D.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Le=r.get(ie).__webglTexture;n.bindTexture(le,Le),h(le),n.unbindTexture()}}}const De=[],je=[];function dt(D){if(D.samples>0){if(Oe(D)===!1){const b=D.textures,Q=D.width,se=D.height;let ie=t.COLOR_BUFFER_BIT;const le=D.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Le=r.get(D),ge=b.length>1;if(ge)for(let me=0;me<b.length;me++)n.bindFramebuffer(t.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let me=0;me<b.length;me++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ie|=t.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ie|=t.STENCIL_BUFFER_BIT)),ge){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Le.__webglColorRenderbuffer[me]);const ke=r.get(b[me]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ke,0)}t.blitFramebuffer(0,0,Q,se,0,0,Q,se,ie,t.NEAREST),l===!0&&(De.length=0,je.length=0,De.push(t.COLOR_ATTACHMENT0+me),D.depthBuffer&&D.resolveDepthBuffer===!1&&(De.push(le),je.push(le),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,je)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,De))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ge)for(let me=0;me<b.length;me++){n.bindFramebuffer(t.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,Le.__webglColorRenderbuffer[me]);const ke=r.get(b[me]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,ke,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){const b=D.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[b])}}}function Ne(D){return Math.min(i.maxSamples,D.samples)}function Oe(D){const b=r.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Xe(D){const b=a.render.frame;u.get(D)!==b&&(u.set(D,b),D.update())}function Be(D,b){const Q=D.colorSpace,se=D.format,ie=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||Q!==Ki&&Q!==Ei&&(St.getTransfer(Q)===Dt?(se!==Rr||ie!==Gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),b}function yt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=L,this.setTexture2D=W,this.setTexture2DArray=ee,this.setTexture3D=U,this.setTextureCube=N,this.rebindTextures=We,this.setupRenderTarget=et,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=dt,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=Oe}function uO(t,e){function n(r,i=Ei){let o;const a=St.getTransfer(i);if(r===Gi)return t.UNSIGNED_BYTE;if(r===SM)return t.UNSIGNED_SHORT_4_4_4_4;if(r===EM)return t.UNSIGNED_SHORT_5_5_5_1;if(r===RL)return t.UNSIGNED_INT_5_9_9_9_REV;if(r===CL)return t.BYTE;if(r===AL)return t.SHORT;if(r===Nu)return t.UNSIGNED_SHORT;if(r===xM)return t.INT;if(r===Ya)return t.UNSIGNED_INT;if(r===Ci)return t.FLOAT;if(r===Rf)return t.HALF_FLOAT;if(r===PL)return t.ALPHA;if(r===LL)return t.RGB;if(r===Rr)return t.RGBA;if(r===DL)return t.LUMINANCE;if(r===IL)return t.LUMINANCE_ALPHA;if(r===Ia)return t.DEPTH_COMPONENT;if(r===Ka)return t.DEPTH_STENCIL;if(r===NL)return t.RED;if(r===MM)return t.RED_INTEGER;if(r===UL)return t.RG;if(r===wM)return t.RG_INTEGER;if(r===TM)return t.RGBA_INTEGER;if(r===Rd||r===Pd||r===Ld||r===Dd)if(a===Dt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Rd)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Pd)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ld)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Dd)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Rd)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Pd)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ld)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Dd)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===z0||r===B0||r===H0||r===V0)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===z0)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===B0)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===H0)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===V0)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===G0||r===W0||r===j0)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===G0||r===W0)return a===Dt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===j0)return a===Dt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===$0||r===X0||r===Y0||r===q0||r===K0||r===Z0||r===Q0||r===J0||r===e_||r===t_||r===n_||r===r_||r===i_||r===o_)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===$0)return a===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===X0)return a===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Y0)return a===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===q0)return a===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===K0)return a===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Z0)return a===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Q0)return a===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===J0)return a===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===e_)return a===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===t_)return a===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===n_)return a===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===r_)return a===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===i_)return a===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===o_)return a===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Id||r===a_||r===s_)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===Id)return a===Dt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===a_)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===s_)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===OL||r===l_||r===c_||r===u_)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===Id)return o.COMPRESSED_RED_RGTC1_EXT;if(r===l_)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===c_)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===u_)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===qa?t.UNSIGNED_INT_24_8:t[r]!==void 0?t[r]:null}return{convert:n}}class fO extends Qn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Cc extends Ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}const dO={type:"move"};class ih{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Cc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Cc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Cc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let i=null,o=null,a=null;const s=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const m=n.getJointPose(v,r),h=this._getHandJoint(c,v);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,_=.005;c.inputState.pinching&&d>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=n.getPose(e.gripSpace,r),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(i=n.getPose(e.targetRaySpace,r),i===null&&o!==null&&(i=o),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(dO)))}return s!==null&&(s.visible=i!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new Cc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const hO=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,pO=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class mO{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const i=new Pn,o=e.properties.get(i);o.__webglTexture=n.texture,(n.depthNear!=r.depthNear||n.depthFar!=r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new Wn({vertexShader:hO,fragmentShader:pO,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new yn(new Zi(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class gO extends zo{constructor(e,n){super();const r=this;let i=null,o=1,a=null,s="local-floor",l=1,c=null,u=null,f=null,d=null,p=null,_=null;const v=new mO,m=n.getContextAttributes();let h=null,g=null;const y=[],E=[],A=new Je;let x=null;const M=new Qn;M.layers.enable(1),M.viewport=new rn;const P=new Qn;P.layers.enable(2),P.viewport=new rn;const T=[M,P],w=new fO;w.layers.enable(1),w.layers.enable(2);let L=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ae=y[q];return ae===void 0&&(ae=new ih,y[q]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(q){let ae=y[q];return ae===void 0&&(ae=new ih,y[q]=ae),ae.getGripSpace()},this.getHand=function(q){let ae=y[q];return ae===void 0&&(ae=new ih,y[q]=ae),ae.getHandSpace()};function F(q){const ae=E.indexOf(q.inputSource);if(ae===-1)return;const de=y[ae];de!==void 0&&(de.update(q.inputSource,q.frame,c||a),de.dispatchEvent({type:q.type,data:q.inputSource}))}function W(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",ee);for(let q=0;q<y.length;q++){const ae=E[q];ae!==null&&(E[q]=null,y[q].disconnect(ae))}L=null,V=null,v.reset(),e.setRenderTarget(h),p=null,d=null,f=null,i=null,g=null,xe.stop(),r.isPresenting=!1,e.setPixelRatio(x),e.setSize(A.width,A.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){o=q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){s=q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(h=e.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",W),i.addEventListener("inputsourceschange",ee),m.xrCompatible!==!0&&await n.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(A),i.renderState.layers===void 0){const ae={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:o};p=new XRWebGLLayer(i,n,ae),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),g=new Uo(p.framebufferWidth,p.framebufferHeight,{format:Rr,type:Gi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ae=null,de=null,fe=null;m.depth&&(fe=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ae=m.stencil?Ka:Ia,de=m.stencil?qa:Ya);const $e={colorFormat:n.RGBA8,depthFormat:fe,scaleFactor:o};f=new XRWebGLBinding(i,n),d=f.createProjectionLayer($e),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),g=new Uo(d.textureWidth,d.textureHeight,{format:Rr,type:Gi,depthTexture:new BM(d.textureWidth,d.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(s),xe.setContext(i),xe.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function ee(q){for(let ae=0;ae<q.removed.length;ae++){const de=q.removed[ae],fe=E.indexOf(de);fe>=0&&(E[fe]=null,y[fe].disconnect(de))}for(let ae=0;ae<q.added.length;ae++){const de=q.added[ae];let fe=E.indexOf(de);if(fe===-1){for(let We=0;We<y.length;We++)if(We>=E.length){E.push(de),fe=We;break}else if(E[We]===null){E[We]=de,fe=We;break}if(fe===-1)break}const $e=y[fe];$e&&$e.connect(de)}}const U=new K,N=new K;function R(q,ae,de){U.setFromMatrixPosition(ae.matrixWorld),N.setFromMatrixPosition(de.matrixWorld);const fe=U.distanceTo(N),$e=ae.projectionMatrix.elements,We=de.projectionMatrix.elements,et=$e[14]/($e[10]-1),B=$e[14]/($e[10]+1),De=($e[9]+1)/$e[5],je=($e[9]-1)/$e[5],dt=($e[8]-1)/$e[0],Ne=(We[8]+1)/We[0],Oe=et*dt,Xe=et*Ne,Be=fe/(-dt+Ne),yt=Be*-dt;ae.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(yt),q.translateZ(Be),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const D=et+Be,b=B+Be,Q=Oe-yt,se=Xe+(fe-yt),ie=De*B/b*D,le=je*B/b*D;q.projectionMatrix.makePerspective(Q,se,ie,le,D,b),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function z(q,ae){ae===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ae.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;v.texture!==null&&(q.near=v.depthNear,q.far=v.depthFar),w.near=P.near=M.near=q.near,w.far=P.far=M.far=q.far,(L!==w.near||V!==w.far)&&(i.updateRenderState({depthNear:w.near,depthFar:w.far}),L=w.near,V=w.far,M.near=L,M.far=V,P.near=L,P.far=V,M.updateProjectionMatrix(),P.updateProjectionMatrix(),q.updateProjectionMatrix());const ae=q.parent,de=w.cameras;z(w,ae);for(let fe=0;fe<de.length;fe++)z(de[fe],ae);de.length===2?R(w,M,P):w.projectionMatrix.copy(M.projectionMatrix),X(q,w,ae)};function X(q,ae,de){de===null?q.matrix.copy(ae.matrixWorld):(q.matrix.copy(de.matrixWorld),q.matrix.invert(),q.matrix.multiply(ae.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ae.projectionMatrix),q.projectionMatrixInverse.copy(ae.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=vl*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(w)};let Y=null;function oe(q,ae){if(u=ae.getViewerPose(c||a),_=ae,u!==null){const de=u.views;p!==null&&(e.setRenderTargetFramebuffer(g,p.framebuffer),e.setRenderTarget(g));let fe=!1;de.length!==w.cameras.length&&(w.cameras.length=0,fe=!0);for(let We=0;We<de.length;We++){const et=de[We];let B=null;if(p!==null)B=p.getViewport(et);else{const je=f.getViewSubImage(d,et);B=je.viewport,We===0&&(e.setRenderTargetTextures(g,je.colorTexture,d.ignoreDepthValues?void 0:je.depthStencilTexture),e.setRenderTarget(g))}let De=T[We];De===void 0&&(De=new Qn,De.layers.enable(We),De.viewport=new rn,T[We]=De),De.matrix.fromArray(et.transform.matrix),De.matrix.decompose(De.position,De.quaternion,De.scale),De.projectionMatrix.fromArray(et.projectionMatrix),De.projectionMatrixInverse.copy(De.projectionMatrix).invert(),De.viewport.set(B.x,B.y,B.width,B.height),We===0&&(w.matrix.copy(De.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),fe===!0&&w.cameras.push(De)}const $e=i.enabledFeatures;if($e&&$e.includes("depth-sensing")){const We=f.getDepthInformation(de[0]);We&&We.isValid&&We.texture&&v.init(e,We,i.renderState)}}for(let de=0;de<y.length;de++){const fe=E[de],$e=y[de];fe!==null&&$e!==void 0&&$e.update(fe,ae,c||a)}Y&&Y(q,ae),ae.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ae}),_=null}const xe=new zM;xe.setAnimationLoop(oe),this.setAnimationLoop=function(q){Y=q},this.dispose=function(){}}}const io=new ti,vO=new $t;function _O(t,e){function n(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function r(m,h){h.color.getRGB(m.fogColor.value,UM(t)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function i(m,h,g,y,E){h.isMeshBasicMaterial||h.isMeshLambertMaterial?o(m,h):h.isMeshToonMaterial?(o(m,h),f(m,h)):h.isMeshPhongMaterial?(o(m,h),u(m,h)):h.isMeshStandardMaterial?(o(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,E)):h.isMeshMatcapMaterial?(o(m,h),_(m,h)):h.isMeshDepthMaterial?o(m,h):h.isMeshDistanceMaterial?(o(m,h),v(m,h)):h.isMeshNormalMaterial?o(m,h):h.isLineBasicMaterial?(a(m,h),h.isLineDashedMaterial&&s(m,h)):h.isPointsMaterial?l(m,h,g,y):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function o(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,n(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===Rn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,n(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===Rn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,n(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,n(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const g=e.get(h),y=g.envMap,E=g.envMapRotation;y&&(m.envMap.value=y,io.copy(E),io.x*=-1,io.y*=-1,io.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(io.y*=-1,io.z*=-1),m.envMapRotation.value.setFromMatrix4(vO.makeRotationFromEuler(io)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,m.aoMapTransform))}function a(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform))}function s(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,g,y){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*g,m.scale.value=y*.5,h.map&&(m.map.value=h.map,n(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,g){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Rn&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,h){h.matcap&&(m.matcap.value=h.matcap)}function v(m,h){const g=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function yO(t,e,n,r){let i={},o={},a=[];const s=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,y){const E=y.program;r.uniformBlockBinding(g,E)}function c(g,y){let E=i[g.id];E===void 0&&(_(g),E=u(g),i[g.id]=E,g.addEventListener("dispose",m));const A=y.program;r.updateUBOMapping(g,A);const x=e.render.frame;o[g.id]!==x&&(d(g),o[g.id]=x)}function u(g){const y=f();g.__bindingPointIndex=y;const E=t.createBuffer(),A=g.__size,x=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,E),t.bufferData(t.UNIFORM_BUFFER,A,x),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,y,E),E}function f(){for(let g=0;g<s;g++)if(a.indexOf(g)===-1)return a.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(g){const y=i[g.id],E=g.uniforms,A=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,y);for(let x=0,M=E.length;x<M;x++){const P=Array.isArray(E[x])?E[x]:[E[x]];for(let T=0,w=P.length;T<w;T++){const L=P[T];if(p(L,x,T,A)===!0){const V=L.__offset,F=Array.isArray(L.value)?L.value:[L.value];let W=0;for(let ee=0;ee<F.length;ee++){const U=F[ee],N=v(U);typeof U=="number"||typeof U=="boolean"?(L.__data[0]=U,t.bufferSubData(t.UNIFORM_BUFFER,V+W,L.__data)):U.isMatrix3?(L.__data[0]=U.elements[0],L.__data[1]=U.elements[1],L.__data[2]=U.elements[2],L.__data[3]=0,L.__data[4]=U.elements[3],L.__data[5]=U.elements[4],L.__data[6]=U.elements[5],L.__data[7]=0,L.__data[8]=U.elements[6],L.__data[9]=U.elements[7],L.__data[10]=U.elements[8],L.__data[11]=0):(U.toArray(L.__data,W),W+=N.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,V,L.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(g,y,E,A){const x=g.value,M=y+"_"+E;if(A[M]===void 0)return typeof x=="number"||typeof x=="boolean"?A[M]=x:A[M]=x.clone(),!0;{const P=A[M];if(typeof x=="number"||typeof x=="boolean"){if(P!==x)return A[M]=x,!0}else if(P.equals(x)===!1)return P.copy(x),!0}return!1}function _(g){const y=g.uniforms;let E=0;const A=16;for(let M=0,P=y.length;M<P;M++){const T=Array.isArray(y[M])?y[M]:[y[M]];for(let w=0,L=T.length;w<L;w++){const V=T[w],F=Array.isArray(V.value)?V.value:[V.value];for(let W=0,ee=F.length;W<ee;W++){const U=F[W],N=v(U),R=E%A;R!==0&&A-R<N.boundary&&(E+=A-R),V.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=E,E+=N.storage}}}const x=E%A;return x>0&&(E+=A-x),g.__size=E,g.__cache={},this}function v(g){const y={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(y.boundary=4,y.storage=4):g.isVector2?(y.boundary=8,y.storage=8):g.isVector3||g.isColor?(y.boundary=16,y.storage=12):g.isVector4?(y.boundary=16,y.storage=16):g.isMatrix3?(y.boundary=48,y.storage=48):g.isMatrix4?(y.boundary=64,y.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),y}function m(g){const y=g.target;y.removeEventListener("dispose",m);const E=a.indexOf(y.__bindingPointIndex);a.splice(E,1),t.deleteBuffer(i[y.id]),delete i[y.id],delete o[y.id]}function h(){for(const g in i)t.deleteBuffer(i[g]);a=[],i={},o={}}return{bind:l,update:c,dispose:h}}class xO{constructor(e={}){const{canvas:n=fD(),context:r=null,depth:i=!0,stencil:o=!1,alpha:a=!1,antialias:s=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=r.getContextAttributes().alpha}else d=a;const p=new Uint32Array(4),_=new Int32Array(4);let v=null,m=null;const h=[],g=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Tr,this.toneMapping=ki,this.toneMappingExposure=1;const y=this;let E=!1,A=0,x=0,M=null,P=-1,T=null;const w=new rn,L=new rn;let V=null;const F=new vt(0);let W=0,ee=n.width,U=n.height,N=1,R=null,z=null;const X=new rn(0,0,ee,U),Y=new rn(0,0,ee,U);let oe=!1;const xe=new kM;let q=!1,ae=!1;const de=new $t,fe=new K,$e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let We=!1;function et(){return M===null?N:1}let B=r;function De(C,k){return n.getContext(C,k)}try{const C={alpha:!0,depth:i,stencil:o,antialias:s,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${ig}`),n.addEventListener("webglcontextlost",te,!1),n.addEventListener("webglcontextrestored",Z,!1),n.addEventListener("webglcontextcreationerror",ne,!1),B===null){const k="webgl2";if(B=De(k,C),B===null)throw De(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let je,dt,Ne,Oe,Xe,Be,yt,D,b,Q,se,ie,le,Le,ge,me,ke,pe,be,ot,Ue,ye,qe,Ke;function wt(){je=new AN(B),je.init(),ye=new uO(B,je),dt=new SN(B,je,e,ye),Ne=new lO(B),Oe=new LN(B),Xe=new YU,Be=new cO(B,je,Ne,Xe,dt,ye,Oe),yt=new MN(y),D=new CN(y),b=new FD(B),qe=new yN(B,b),Q=new RN(B,b,Oe,qe),se=new IN(B,Q,b,Oe),be=new DN(B,dt,Be),me=new EN(Xe),ie=new XU(y,yt,D,je,dt,qe,me),le=new _O(y,Xe),Le=new KU,ge=new nO(je),pe=new _N(y,yt,D,Ne,se,d,l),ke=new sO(y,se,dt),Ke=new yO(B,Oe,dt,Ne),ot=new xN(B,je,Oe),Ue=new PN(B,je,Oe),Oe.programs=ie.programs,y.capabilities=dt,y.extensions=je,y.properties=Xe,y.renderLists=Le,y.shadowMap=ke,y.state=Ne,y.info=Oe}wt();const S=new gO(y,B);this.xr=S,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const C=je.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=je.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(C){C!==void 0&&(N=C,this.setSize(ee,U,!1))},this.getSize=function(C){return C.set(ee,U)},this.setSize=function(C,k,j=!0){if(S.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ee=C,U=k,n.width=Math.floor(C*N),n.height=Math.floor(k*N),j===!0&&(n.style.width=C+"px",n.style.height=k+"px"),this.setViewport(0,0,C,k)},this.getDrawingBufferSize=function(C){return C.set(ee*N,U*N).floor()},this.setDrawingBufferSize=function(C,k,j){ee=C,U=k,N=j,n.width=Math.floor(C*j),n.height=Math.floor(k*j),this.setViewport(0,0,C,k)},this.getCurrentViewport=function(C){return C.copy(w)},this.getViewport=function(C){return C.copy(X)},this.setViewport=function(C,k,j,$){C.isVector4?X.set(C.x,C.y,C.z,C.w):X.set(C,k,j,$),Ne.viewport(w.copy(X).multiplyScalar(N).round())},this.getScissor=function(C){return C.copy(Y)},this.setScissor=function(C,k,j,$){C.isVector4?Y.set(C.x,C.y,C.z,C.w):Y.set(C,k,j,$),Ne.scissor(L.copy(Y).multiplyScalar(N).round())},this.getScissorTest=function(){return oe},this.setScissorTest=function(C){Ne.setScissorTest(oe=C)},this.setOpaqueSort=function(C){R=C},this.setTransparentSort=function(C){z=C},this.getClearColor=function(C){return C.copy(pe.getClearColor())},this.setClearColor=function(){pe.setClearColor.apply(pe,arguments)},this.getClearAlpha=function(){return pe.getClearAlpha()},this.setClearAlpha=function(){pe.setClearAlpha.apply(pe,arguments)},this.clear=function(C=!0,k=!0,j=!0){let $=0;if(C){let G=!1;if(M!==null){const ue=M.texture.format;G=ue===TM||ue===wM||ue===MM}if(G){const ue=M.texture.type,Ee=ue===Gi||ue===Ya||ue===Nu||ue===qa||ue===SM||ue===EM,we=pe.getClearColor(),Pe=pe.getClearAlpha(),ze=we.r,He=we.g,Ie=we.b;Ee?(p[0]=ze,p[1]=He,p[2]=Ie,p[3]=Pe,B.clearBufferuiv(B.COLOR,0,p)):(_[0]=ze,_[1]=He,_[2]=Ie,_[3]=Pe,B.clearBufferiv(B.COLOR,0,_))}else $|=B.COLOR_BUFFER_BIT}k&&($|=B.DEPTH_BUFFER_BIT),j&&($|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",te,!1),n.removeEventListener("webglcontextrestored",Z,!1),n.removeEventListener("webglcontextcreationerror",ne,!1),Le.dispose(),ge.dispose(),Xe.dispose(),yt.dispose(),D.dispose(),se.dispose(),qe.dispose(),Ke.dispose(),ie.dispose(),S.dispose(),S.removeEventListener("sessionstart",nt),S.removeEventListener("sessionend",rt),Ct.stop()};function te(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function Z(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const C=Oe.autoReset,k=ke.enabled,j=ke.autoUpdate,$=ke.needsUpdate,G=ke.type;wt(),Oe.autoReset=C,ke.enabled=k,ke.autoUpdate=j,ke.needsUpdate=$,ke.type=G}function ne(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ce(C){const k=C.target;k.removeEventListener("dispose",ce),Re(k)}function Re(C){Ye(C),Xe.remove(C)}function Ye(C){const k=Xe.get(C).programs;k!==void 0&&(k.forEach(function(j){ie.releaseProgram(j)}),C.isShaderMaterial&&ie.releaseShaderCache(C))}this.renderBufferDirect=function(C,k,j,$,G,ue){k===null&&(k=$e);const Ee=G.isMesh&&G.matrixWorld.determinant()<0,we=Qe(C,k,j,$,G);Ne.setMaterial($,Ee);let Pe=j.index,ze=1;if($.wireframe===!0){if(Pe=Q.getWireframeAttribute(j),Pe===void 0)return;ze=2}const He=j.drawRange,Ie=j.attributes.position;let gt=He.start*ze,Tt=(He.start+He.count)*ze;ue!==null&&(gt=Math.max(gt,ue.start*ze),Tt=Math.min(Tt,(ue.start+ue.count)*ze)),Pe!==null?(gt=Math.max(gt,0),Tt=Math.min(Tt,Pe.count)):Ie!=null&&(gt=Math.max(gt,0),Tt=Math.min(Tt,Ie.count));const bt=Tt-gt;if(bt<0||bt===1/0)return;qe.setup(G,$,we,j,Pe);let Ve,Ge=ot;if(Pe!==null&&(Ve=b.get(Pe),Ge=Ue,Ge.setIndex(Ve)),G.isMesh)$.wireframe===!0?(Ne.setLineWidth($.wireframeLinewidth*et()),Ge.setMode(B.LINES)):Ge.setMode(B.TRIANGLES);else if(G.isLine){let Te=$.linewidth;Te===void 0&&(Te=1),Ne.setLineWidth(Te*et()),G.isLineSegments?Ge.setMode(B.LINES):G.isLineLoop?Ge.setMode(B.LINE_LOOP):Ge.setMode(B.LINE_STRIP)}else G.isPoints?Ge.setMode(B.POINTS):G.isSprite&&Ge.setMode(B.TRIANGLES);if(G.isBatchedMesh)G._multiDrawInstances!==null?Ge.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances):Ge.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else if(G.isInstancedMesh)Ge.renderInstances(gt,bt,G.count);else if(j.isInstancedBufferGeometry){const Te=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,at=Math.min(j.instanceCount,Te);Ge.renderInstances(gt,bt,at)}else Ge.render(gt,bt)};function tt(C,k,j){C.transparent===!0&&C.side===zn&&C.forceSinglePass===!1?(C.side=Rn,C.needsUpdate=!0,Ce(C,k,j),C.side=Vi,C.needsUpdate=!0,Ce(C,k,j),C.side=zn):Ce(C,k,j)}this.compile=function(C,k,j=null){j===null&&(j=C),m=ge.get(j),m.init(k),g.push(m),j.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),C!==j&&C.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),m.setupLights();const $=new Set;return C.traverse(function(G){const ue=G.material;if(ue)if(Array.isArray(ue))for(let Ee=0;Ee<ue.length;Ee++){const we=ue[Ee];tt(we,j,G),$.add(we)}else tt(ue,j,G),$.add(ue)}),g.pop(),m=null,$},this.compileAsync=function(C,k,j=null){const $=this.compile(C,k,j);return new Promise(G=>{function ue(){if($.forEach(function(Ee){Xe.get(Ee).currentProgram.isReady()&&$.delete(Ee)}),$.size===0){G(C);return}setTimeout(ue,10)}je.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let Pt=null;function mt(C){Pt&&Pt(C)}function nt(){Ct.stop()}function rt(){Ct.start()}const Ct=new zM;Ct.setAnimationLoop(mt),typeof self<"u"&&Ct.setContext(self),this.setAnimationLoop=function(C){Pt=C,S.setAnimationLoop(C),C===null?Ct.stop():Ct.start()},S.addEventListener("sessionstart",nt),S.addEventListener("sessionend",rt),this.render=function(C,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),S.enabled===!0&&S.isPresenting===!0&&(S.cameraAutoUpdate===!0&&S.updateCamera(k),k=S.getCamera()),C.isScene===!0&&C.onBeforeRender(y,C,k,M),m=ge.get(C,g.length),m.init(k),g.push(m),de.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),xe.setFromProjectionMatrix(de),ae=this.localClippingEnabled,q=me.init(this.clippingPlanes,ae),v=Le.get(C,h.length),v.init(),h.push(v),S.enabled===!0&&S.isPresenting===!0){const ue=y.xr.getDepthSensingMesh();ue!==null&&O(ue,k,-1/0,y.sortObjects)}O(C,k,0,y.sortObjects),v.finish(),y.sortObjects===!0&&v.sort(R,z),We=S.enabled===!1||S.isPresenting===!1||S.hasDepthSensing()===!1,We&&pe.addToRenderList(v,C),this.info.render.frame++,q===!0&&me.beginShadows();const j=m.state.shadowsArray;ke.render(j,C,k),q===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=v.opaque,G=v.transmissive;if(m.setupLights(),k.isArrayCamera){const ue=k.cameras;if(G.length>0)for(let Ee=0,we=ue.length;Ee<we;Ee++){const Pe=ue[Ee];J($,G,C,Pe)}We&&pe.render(C);for(let Ee=0,we=ue.length;Ee<we;Ee++){const Pe=ue[Ee];H(v,C,Pe,Pe.viewport)}}else G.length>0&&J($,G,C,k),We&&pe.render(C),H(v,C,k);M!==null&&(Be.updateMultisampleRenderTarget(M),Be.updateRenderTargetMipmap(M)),C.isScene===!0&&C.onAfterRender(y,C,k),qe.resetDefaultState(),P=-1,T=null,g.pop(),g.length>0?(m=g[g.length-1],q===!0&&me.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,h.pop(),h.length>0?v=h[h.length-1]:v=null};function O(C,k,j,$){if(C.visible===!1)return;if(C.layers.test(k.layers)){if(C.isGroup)j=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(k);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||xe.intersectsSprite(C)){$&&fe.setFromMatrixPosition(C.matrixWorld).applyMatrix4(de);const Ee=se.update(C),we=C.material;we.visible&&v.push(C,Ee,we,j,fe.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||xe.intersectsObject(C))){const Ee=se.update(C),we=C.material;if($&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),fe.copy(C.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),fe.copy(Ee.boundingSphere.center)),fe.applyMatrix4(C.matrixWorld).applyMatrix4(de)),Array.isArray(we)){const Pe=Ee.groups;for(let ze=0,He=Pe.length;ze<He;ze++){const Ie=Pe[ze],gt=we[Ie.materialIndex];gt&&gt.visible&&v.push(C,Ee,gt,j,fe.z,Ie)}}else we.visible&&v.push(C,Ee,we,j,fe.z,null)}}const ue=C.children;for(let Ee=0,we=ue.length;Ee<we;Ee++)O(ue[Ee],k,j,$)}function H(C,k,j,$){const G=C.opaque,ue=C.transmissive,Ee=C.transparent;m.setupLightsView(j),q===!0&&me.setGlobalState(y.clippingPlanes,j),$&&Ne.viewport(w.copy($)),G.length>0&&re(G,k,j),ue.length>0&&re(ue,k,j),Ee.length>0&&re(Ee,k,j),Ne.buffers.depth.setTest(!0),Ne.buffers.depth.setMask(!0),Ne.buffers.color.setMask(!0),Ne.setPolygonOffset(!1)}function J(C,k,j,$){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[$.id]===void 0&&(m.state.transmissionRenderTarget[$.id]=new Uo(1,1,{generateMipmaps:!0,type:je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float")?Rf:Gi,minFilter:xo,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:St.workingColorSpace}));const ue=m.state.transmissionRenderTarget[$.id],Ee=$.viewport||w;ue.setSize(Ee.z,Ee.w);const we=y.getRenderTarget();y.setRenderTarget(ue),y.getClearColor(F),W=y.getClearAlpha(),W<1&&y.setClearColor(16777215,.5),We?pe.render(j):y.clear();const Pe=y.toneMapping;y.toneMapping=ki;const ze=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),m.setupLightsView($),q===!0&&me.setGlobalState(y.clippingPlanes,$),re(C,j,$),Be.updateMultisampleRenderTarget(ue),Be.updateRenderTargetMipmap(ue),je.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let Ie=0,gt=k.length;Ie<gt;Ie++){const Tt=k[Ie],bt=Tt.object,Ve=Tt.geometry,Ge=Tt.material,Te=Tt.group;if(Ge.side===zn&&bt.layers.test($.layers)){const at=Ge.side;Ge.side=Rn,Ge.needsUpdate=!0,_e(bt,j,$,Ve,Ge,Te),Ge.side=at,Ge.needsUpdate=!0,He=!0}}He===!0&&(Be.updateMultisampleRenderTarget(ue),Be.updateRenderTargetMipmap(ue))}y.setRenderTarget(we),y.setClearColor(F,W),ze!==void 0&&($.viewport=ze),y.toneMapping=Pe}function re(C,k,j){const $=k.isScene===!0?k.overrideMaterial:null;for(let G=0,ue=C.length;G<ue;G++){const Ee=C[G],we=Ee.object,Pe=Ee.geometry,ze=$===null?Ee.material:$,He=Ee.group;we.layers.test(j.layers)&&_e(we,k,j,Pe,ze,He)}}function _e(C,k,j,$,G,ue){C.onBeforeRender(y,k,j,$,G,ue),C.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),G.onBeforeRender(y,k,j,$,C,ue),G.transparent===!0&&G.side===zn&&G.forceSinglePass===!1?(G.side=Rn,G.needsUpdate=!0,y.renderBufferDirect(j,k,$,G,C,ue),G.side=Vi,G.needsUpdate=!0,y.renderBufferDirect(j,k,$,G,C,ue),G.side=zn):y.renderBufferDirect(j,k,$,G,C,ue),C.onAfterRender(y,k,j,$,G,ue)}function Ce(C,k,j){k.isScene!==!0&&(k=$e);const $=Xe.get(C),G=m.state.lights,ue=m.state.shadowsArray,Ee=G.state.version,we=ie.getParameters(C,G.state,ue,k,j),Pe=ie.getProgramCacheKey(we);let ze=$.programs;$.environment=C.isMeshStandardMaterial?k.environment:null,$.fog=k.fog,$.envMap=(C.isMeshStandardMaterial?D:yt).get(C.envMap||$.environment),$.envMapRotation=$.environment!==null&&C.envMap===null?k.environmentRotation:C.envMapRotation,ze===void 0&&(C.addEventListener("dispose",ce),ze=new Map,$.programs=ze);let He=ze.get(Pe);if(He!==void 0){if($.currentProgram===He&&$.lightsStateVersion===Ee)return ve(C,we),He}else we.uniforms=ie.getUniforms(C),C.onBuild(j,we,y),C.onBeforeCompile(we,y),He=ie.acquireProgram(we,Pe),ze.set(Pe,He),$.uniforms=we.uniforms;const Ie=$.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ie.clippingPlanes=me.uniform),ve(C,we),$.needsLights=it(C),$.lightsStateVersion=Ee,$.needsLights&&(Ie.ambientLightColor.value=G.state.ambient,Ie.lightProbe.value=G.state.probe,Ie.directionalLights.value=G.state.directional,Ie.directionalLightShadows.value=G.state.directionalShadow,Ie.spotLights.value=G.state.spot,Ie.spotLightShadows.value=G.state.spotShadow,Ie.rectAreaLights.value=G.state.rectArea,Ie.ltc_1.value=G.state.rectAreaLTC1,Ie.ltc_2.value=G.state.rectAreaLTC2,Ie.pointLights.value=G.state.point,Ie.pointLightShadows.value=G.state.pointShadow,Ie.hemisphereLights.value=G.state.hemi,Ie.directionalShadowMap.value=G.state.directionalShadowMap,Ie.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ie.spotShadowMap.value=G.state.spotShadowMap,Ie.spotLightMatrix.value=G.state.spotLightMatrix,Ie.spotLightMap.value=G.state.spotLightMap,Ie.pointShadowMap.value=G.state.pointShadowMap,Ie.pointShadowMatrix.value=G.state.pointShadowMatrix),$.currentProgram=He,$.uniformsList=null,He}function Fe(C){if(C.uniformsList===null){const k=C.currentProgram.getUniforms();C.uniformsList=Qc.seqWithValue(k.seq,C.uniforms)}return C.uniformsList}function ve(C,k){const j=Xe.get(C);j.outputColorSpace=k.outputColorSpace,j.batching=k.batching,j.batchingColor=k.batchingColor,j.instancing=k.instancing,j.instancingColor=k.instancingColor,j.instancingMorph=k.instancingMorph,j.skinning=k.skinning,j.morphTargets=k.morphTargets,j.morphNormals=k.morphNormals,j.morphColors=k.morphColors,j.morphTargetsCount=k.morphTargetsCount,j.numClippingPlanes=k.numClippingPlanes,j.numIntersection=k.numClipIntersection,j.vertexAlphas=k.vertexAlphas,j.vertexTangents=k.vertexTangents,j.toneMapping=k.toneMapping}function Qe(C,k,j,$,G){k.isScene!==!0&&(k=$e),Be.resetTextureUnits();const ue=k.fog,Ee=$.isMeshStandardMaterial?k.environment:null,we=M===null?y.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:Ki,Pe=($.isMeshStandardMaterial?D:yt).get($.envMap||Ee),ze=$.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,He=!!j.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ie=!!j.morphAttributes.position,gt=!!j.morphAttributes.normal,Tt=!!j.morphAttributes.color;let bt=ki;$.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(bt=y.toneMapping);const Ve=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Ge=Ve!==void 0?Ve.length:0,Te=Xe.get($),at=m.state.lights;if(q===!0&&(ae===!0||C!==T)){const Yn=C===T&&$.id===P;me.setState($,C,Yn)}let ut=!1;$.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==at.state.version||Te.outputColorSpace!==we||G.isBatchedMesh&&Te.batching===!1||!G.isBatchedMesh&&Te.batching===!0||G.isBatchedMesh&&Te.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Te.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Te.instancing===!1||!G.isInstancedMesh&&Te.instancing===!0||G.isSkinnedMesh&&Te.skinning===!1||!G.isSkinnedMesh&&Te.skinning===!0||G.isInstancedMesh&&Te.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Te.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Te.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Te.instancingMorph===!1&&G.morphTexture!==null||Te.envMap!==Pe||$.fog===!0&&Te.fog!==ue||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==me.numPlanes||Te.numIntersection!==me.numIntersection)||Te.vertexAlphas!==ze||Te.vertexTangents!==He||Te.morphTargets!==Ie||Te.morphNormals!==gt||Te.morphColors!==Tt||Te.toneMapping!==bt||Te.morphTargetsCount!==Ge)&&(ut=!0):(ut=!0,Te.__version=$.version);let Xn=Te.currentProgram;ut===!0&&(Xn=Ce($,k,G));let Bo=!1,Qi=!1,If=!1;const Zt=Xn.getUniforms(),si=Te.uniforms;if(Ne.useProgram(Xn.program)&&(Bo=!0,Qi=!0,If=!0),$.id!==P&&(P=$.id,Qi=!0),Bo||T!==C){Zt.setValue(B,"projectionMatrix",C.projectionMatrix),Zt.setValue(B,"viewMatrix",C.matrixWorldInverse);const Yn=Zt.map.cameraPosition;Yn!==void 0&&Yn.setValue(B,fe.setFromMatrixPosition(C.matrixWorld)),dt.logarithmicDepthBuffer&&Zt.setValue(B,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Zt.setValue(B,"isOrthographic",C.isOrthographicCamera===!0),T!==C&&(T=C,Qi=!0,If=!0)}if(G.isSkinnedMesh){Zt.setOptional(B,G,"bindMatrix"),Zt.setOptional(B,G,"bindMatrixInverse");const Yn=G.skeleton;Yn&&(Yn.boneTexture===null&&Yn.computeBoneTexture(),Zt.setValue(B,"boneTexture",Yn.boneTexture,Be))}G.isBatchedMesh&&(Zt.setOptional(B,G,"batchingTexture"),Zt.setValue(B,"batchingTexture",G._matricesTexture,Be),Zt.setOptional(B,G,"batchingColorTexture"),G._colorsTexture!==null&&Zt.setValue(B,"batchingColorTexture",G._colorsTexture,Be));const Nf=j.morphAttributes;if((Nf.position!==void 0||Nf.normal!==void 0||Nf.color!==void 0)&&be.update(G,j,Xn),(Qi||Te.receiveShadow!==G.receiveShadow)&&(Te.receiveShadow=G.receiveShadow,Zt.setValue(B,"receiveShadow",G.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(si.envMap.value=Pe,si.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&k.environment!==null&&(si.envMapIntensity.value=k.environmentIntensity),Qi&&(Zt.setValue(B,"toneMappingExposure",y.toneMappingExposure),Te.needsLights&&Me(si,If),ue&&$.fog===!0&&le.refreshFogUniforms(si,ue),le.refreshMaterialUniforms(si,$,N,U,m.state.transmissionRenderTarget[C.id]),Qc.upload(B,Fe(Te),si,Be)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Qc.upload(B,Fe(Te),si,Be),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Zt.setValue(B,"center",G.center),Zt.setValue(B,"modelViewMatrix",G.modelViewMatrix),Zt.setValue(B,"normalMatrix",G.normalMatrix),Zt.setValue(B,"modelMatrix",G.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const Yn=$.uniformsGroups;for(let Uf=0,XM=Yn.length;Uf<XM;Uf++){const fg=Yn[Uf];Ke.update(fg,Xn),Ke.bind(fg,Xn)}}return Xn}function Me(C,k){C.ambientLightColor.needsUpdate=k,C.lightProbe.needsUpdate=k,C.directionalLights.needsUpdate=k,C.directionalLightShadows.needsUpdate=k,C.pointLights.needsUpdate=k,C.pointLightShadows.needsUpdate=k,C.spotLights.needsUpdate=k,C.spotLightShadows.needsUpdate=k,C.rectAreaLights.needsUpdate=k,C.hemisphereLights.needsUpdate=k}function it(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(C,k,j){Xe.get(C.texture).__webglTexture=k,Xe.get(C.depthTexture).__webglTexture=j;const $=Xe.get(C);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=j===void 0,$.__autoAllocateDepthBuffer||je.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,k){const j=Xe.get(C);j.__webglFramebuffer=k,j.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(C,k=0,j=0){M=C,A=k,x=j;let $=!0,G=null,ue=!1,Ee=!1;if(C){const Pe=Xe.get(C);Pe.__useDefaultFramebuffer!==void 0?(Ne.bindFramebuffer(B.FRAMEBUFFER,null),$=!1):Pe.__webglFramebuffer===void 0?Be.setupRenderTarget(C):Pe.__hasExternalTextures&&Be.rebindTextures(C,Xe.get(C.texture).__webglTexture,Xe.get(C.depthTexture).__webglTexture);const ze=C.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(Ee=!0);const He=Xe.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(He[k])?G=He[k][j]:G=He[k],ue=!0):C.samples>0&&Be.useMultisampledRTT(C)===!1?G=Xe.get(C).__webglMultisampledFramebuffer:Array.isArray(He)?G=He[j]:G=He,w.copy(C.viewport),L.copy(C.scissor),V=C.scissorTest}else w.copy(X).multiplyScalar(N).floor(),L.copy(Y).multiplyScalar(N).floor(),V=oe;if(Ne.bindFramebuffer(B.FRAMEBUFFER,G)&&$&&Ne.drawBuffers(C,G),Ne.viewport(w),Ne.scissor(L),Ne.setScissorTest(V),ue){const Pe=Xe.get(C.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+k,Pe.__webglTexture,j)}else if(Ee){const Pe=Xe.get(C.texture),ze=k||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Pe.__webglTexture,j||0,ze)}P=-1},this.readRenderTargetPixels=function(C,k,j,$,G,ue,Ee){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=Xe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ee!==void 0&&(we=we[Ee]),we){Ne.bindFramebuffer(B.FRAMEBUFFER,we);try{const Pe=C.texture,ze=Pe.format,He=Pe.type;if(!dt.textureFormatReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!dt.textureTypeReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=C.width-$&&j>=0&&j<=C.height-G&&B.readPixels(k,j,$,G,ye.convert(ze),ye.convert(He),ue)}finally{const Pe=M!==null?Xe.get(M).__webglFramebuffer:null;Ne.bindFramebuffer(B.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(C,k,j,$,G,ue,Ee){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=Xe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ee!==void 0&&(we=we[Ee]),we){Ne.bindFramebuffer(B.FRAMEBUFFER,we);try{const Pe=C.texture,ze=Pe.format,He=Pe.type;if(!dt.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!dt.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=C.width-$&&j>=0&&j<=C.height-G){const Ie=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Ie),B.bufferData(B.PIXEL_PACK_BUFFER,ue.byteLength,B.STREAM_READ),B.readPixels(k,j,$,G,ye.convert(ze),ye.convert(He),0),B.flush();const gt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);await dD(B,gt,4);try{B.bindBuffer(B.PIXEL_PACK_BUFFER,Ie),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,ue)}finally{B.deleteBuffer(Ie),B.deleteSync(gt)}return ue}}finally{const Pe=M!==null?Xe.get(M).__webglFramebuffer:null;Ne.bindFramebuffer(B.FRAMEBUFFER,Pe)}}},this.copyFramebufferToTexture=function(C,k=null,j=0){C.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,C=arguments[1]);const $=Math.pow(2,-j),G=Math.floor(C.image.width*$),ue=Math.floor(C.image.height*$),Ee=k!==null?k.x:0,we=k!==null?k.y:0;Be.setTexture2D(C,0),B.copyTexSubImage2D(B.TEXTURE_2D,j,0,0,Ee,we,G,ue),Ne.unbindTexture()},this.copyTextureToTexture=function(C,k,j=null,$=null,G=0){C.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,C=arguments[1],k=arguments[2],G=arguments[3]||0,j=null);let ue,Ee,we,Pe,ze,He;j!==null?(ue=j.max.x-j.min.x,Ee=j.max.y-j.min.y,we=j.min.x,Pe=j.min.y):(ue=C.image.width,Ee=C.image.height,we=0,Pe=0),$!==null?(ze=$.x,He=$.y):(ze=0,He=0);const Ie=ye.convert(k.format),gt=ye.convert(k.type);Be.setTexture2D(k,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,k.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,k.unpackAlignment);const Tt=B.getParameter(B.UNPACK_ROW_LENGTH),bt=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Ve=B.getParameter(B.UNPACK_SKIP_PIXELS),Ge=B.getParameter(B.UNPACK_SKIP_ROWS),Te=B.getParameter(B.UNPACK_SKIP_IMAGES),at=C.isCompressedTexture?C.mipmaps[G]:C.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,at.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,at.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,we),B.pixelStorei(B.UNPACK_SKIP_ROWS,Pe),C.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,G,ze,He,ue,Ee,Ie,gt,at.data):C.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,G,ze,He,at.width,at.height,Ie,at.data):B.texSubImage2D(B.TEXTURE_2D,G,ze,He,Ie,gt,at),B.pixelStorei(B.UNPACK_ROW_LENGTH,Tt),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,bt),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Ve),B.pixelStorei(B.UNPACK_SKIP_ROWS,Ge),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Te),G===0&&k.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),Ne.unbindTexture()},this.copyTextureToTexture3D=function(C,k,j=null,$=null,G=0){C.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),j=arguments[0]||null,$=arguments[1]||null,C=arguments[2],k=arguments[3],G=arguments[4]||0);let ue,Ee,we,Pe,ze,He,Ie,gt,Tt;const bt=C.isCompressedTexture?C.mipmaps[G]:C.image;j!==null?(ue=j.max.x-j.min.x,Ee=j.max.y-j.min.y,we=j.max.z-j.min.z,Pe=j.min.x,ze=j.min.y,He=j.min.z):(ue=bt.width,Ee=bt.height,we=bt.depth,Pe=0,ze=0,He=0),$!==null?(Ie=$.x,gt=$.y,Tt=$.z):(Ie=0,gt=0,Tt=0);const Ve=ye.convert(k.format),Ge=ye.convert(k.type);let Te;if(k.isData3DTexture)Be.setTexture3D(k,0),Te=B.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)Be.setTexture2DArray(k,0),Te=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,k.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,k.unpackAlignment);const at=B.getParameter(B.UNPACK_ROW_LENGTH),ut=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Xn=B.getParameter(B.UNPACK_SKIP_PIXELS),Bo=B.getParameter(B.UNPACK_SKIP_ROWS),Qi=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,bt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,bt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Pe),B.pixelStorei(B.UNPACK_SKIP_ROWS,ze),B.pixelStorei(B.UNPACK_SKIP_IMAGES,He),C.isDataTexture||C.isData3DTexture?B.texSubImage3D(Te,G,Ie,gt,Tt,ue,Ee,we,Ve,Ge,bt.data):k.isCompressedArrayTexture?B.compressedTexSubImage3D(Te,G,Ie,gt,Tt,ue,Ee,we,Ve,bt.data):B.texSubImage3D(Te,G,Ie,gt,Tt,ue,Ee,we,Ve,Ge,bt),B.pixelStorei(B.UNPACK_ROW_LENGTH,at),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ut),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Xn),B.pixelStorei(B.UNPACK_SKIP_ROWS,Bo),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Qi),G===0&&k.generateMipmaps&&B.generateMipmap(Te),Ne.unbindTexture()},this.initRenderTarget=function(C){Xe.get(C).__webglFramebuffer===void 0&&Be.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?Be.setTextureCube(C,0):C.isData3DTexture?Be.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Be.setTexture2DArray(C,0):Be.setTexture2D(C,0),Ne.unbindTexture()},this.resetState=function(){A=0,x=0,M=null,Ne.reset(),qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===og?"display-p3":"srgb",n.unpackColorSpace=St.workingColorSpace===Pf?"display-p3":"srgb"}}class SO extends Ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ti,this.environmentIntensity=1,this.environmentRotation=new ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class $M extends Ll{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new vt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Bu=new K,Hu=new K,ny=new $t,Es=new sg,Ac=new Lf,oh=new K,ry=new K;class EO extends Ln{constructor(e=new Ir,n=new $M){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[0];for(let i=1,o=n.count;i<o;i++)Bu.fromBufferAttribute(n,i-1),Hu.fromBufferAttribute(n,i),r[i]=r[i-1],r[i]+=Bu.distanceTo(Hu);e.setAttribute("lineDistance",new Dn(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const r=this.geometry,i=this.matrixWorld,o=e.params.Line.threshold,a=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Ac.copy(r.boundingSphere),Ac.applyMatrix4(i),Ac.radius+=o,e.ray.intersectsSphere(Ac)===!1)return;ny.copy(i).invert(),Es.copy(e.ray).applyMatrix4(ny);const s=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=s*s,c=this.isLineSegments?2:1,u=r.index,d=r.attributes.position;if(u!==null){const p=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let v=p,m=_-1;v<m;v+=c){const h=u.getX(v),g=u.getX(v+1),y=Rc(this,e,Es,l,h,g);y&&n.push(y)}if(this.isLineLoop){const v=u.getX(_-1),m=u.getX(p),h=Rc(this,e,Es,l,v,m);h&&n.push(h)}}else{const p=Math.max(0,a.start),_=Math.min(d.count,a.start+a.count);for(let v=p,m=_-1;v<m;v+=c){const h=Rc(this,e,Es,l,v,v+1);h&&n.push(h)}if(this.isLineLoop){const v=Rc(this,e,Es,l,_-1,p);v&&n.push(v)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const i=n[r[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=i.length;o<a;o++){const s=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=o}}}}}function Rc(t,e,n,r,i,o){const a=t.geometry.attributes.position;if(Bu.fromBufferAttribute(a,i),Hu.fromBufferAttribute(a,o),n.distanceSqToSegment(Bu,Hu,oh,ry)>r)return;oh.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(oh);if(!(l<e.near||l>e.far))return{distance:l,point:ry.clone().applyMatrix4(t.matrixWorld),index:i,face:null,faceIndex:null,object:t}}const iy=new K,oy=new K;class MO extends EO{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[];for(let i=0,o=n.count;i<o;i+=2)iy.fromBufferAttribute(n,i),oy.fromBufferAttribute(n,i+1),r[i]=i===0?0:r[i-1],r[i+1]=r[i]+iy.distanceTo(oy);e.setAttribute("lineDistance",new Dn(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ug extends Ir{constructor(e=1,n=32,r=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:r,thetaLength:i},n=Math.max(3,n);const o=[],a=[],s=[],l=[],c=new K,u=new Je;a.push(0,0,0),s.push(0,0,1),l.push(.5,.5);for(let f=0,d=3;f<=n;f++,d+=3){const p=r+f/n*i;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),s.push(0,0,1),u.x=(a[d]/e+1)/2,u.y=(a[d+1]/e+1)/2,l.push(u.x,u.y)}for(let f=1;f<=n;f++)o.push(f,f+1,0);this.setIndex(o),this.setAttribute("position",new Dn(a,3)),this.setAttribute("normal",new Dn(s,3)),this.setAttribute("uv",new Dn(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ug(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ay{constructor(e=1,n=0,r=0){return this.radius=e,this.phi=n,this.theta=r,this}set(e,n,r){return this.radius=e,this.phi=n,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,r){return this.radius=Math.sqrt(e*e+n*n+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(hn(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class wO extends MO{constructor(e=1){const n=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],r=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new Ir;i.setAttribute("position",new Dn(n,3)),i.setAttribute("color",new Dn(r,3));const o=new $M({vertexColors:!0,toneMapped:!1});super(i,o),this.type="AxesHelper"}setColors(e,n,r){const i=new vt,o=this.geometry.attributes.color.array;return i.set(e),i.toArray(o,0),i.toArray(o,3),i.set(n),i.toArray(o,6),i.toArray(o,9),i.set(r),i.toArray(o,12),i.toArray(o,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ig}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ig);const sy={type:"change"},ah={type:"start"},ly={type:"end"},Pc=new sg,cy=new yi,TO=Math.cos(70*uD.DEG2RAD);class bO extends zo{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new K,this.cursor=new K,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Wo.ROTATE,MIDDLE:Wo.DOLLY,RIGHT:Wo.PAN},this.touches={ONE:jo.ROTATE,TWO:jo.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return s.phi},this.getAzimuthalAngle=function(){return s.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(S){S.addEventListener("keydown",me),this._domElementKeyEvents=S},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",me),this._domElementKeyEvents=null},this.saveState=function(){r.target0.copy(r.target),r.position0.copy(r.object.position),r.zoom0=r.object.zoom},this.reset=function(){r.target.copy(r.target0),r.object.position.copy(r.position0),r.object.zoom=r.zoom0,r.object.updateProjectionMatrix(),r.dispatchEvent(sy),r.update(),o=i.NONE},this.update=function(){const S=new K,te=new Oo().setFromUnitVectors(e.up,new K(0,1,0)),Z=te.clone().invert(),ne=new K,ce=new Oo,Re=new K,Ye=2*Math.PI;return function(Pt=null){const mt=r.object.position;S.copy(mt).sub(r.target),S.applyQuaternion(te),s.setFromVector3(S),r.autoRotate&&o===i.NONE&&V(w(Pt)),r.enableDamping?(s.theta+=l.theta*r.dampingFactor,s.phi+=l.phi*r.dampingFactor):(s.theta+=l.theta,s.phi+=l.phi);let nt=r.minAzimuthAngle,rt=r.maxAzimuthAngle;isFinite(nt)&&isFinite(rt)&&(nt<-Math.PI?nt+=Ye:nt>Math.PI&&(nt-=Ye),rt<-Math.PI?rt+=Ye:rt>Math.PI&&(rt-=Ye),nt<=rt?s.theta=Math.max(nt,Math.min(rt,s.theta)):s.theta=s.theta>(nt+rt)/2?Math.max(nt,s.theta):Math.min(rt,s.theta)),s.phi=Math.max(r.minPolarAngle,Math.min(r.maxPolarAngle,s.phi)),s.makeSafe(),r.enableDamping===!0?r.target.addScaledVector(u,r.dampingFactor):r.target.add(u),r.target.sub(r.cursor),r.target.clampLength(r.minTargetRadius,r.maxTargetRadius),r.target.add(r.cursor);let Ct=!1;if(r.zoomToCursor&&x||r.object.isOrthographicCamera)s.radius=X(s.radius);else{const O=s.radius;s.radius=X(s.radius*c),Ct=O!=s.radius}if(S.setFromSpherical(s),S.applyQuaternion(Z),mt.copy(r.target).add(S),r.object.lookAt(r.target),r.enableDamping===!0?(l.theta*=1-r.dampingFactor,l.phi*=1-r.dampingFactor,u.multiplyScalar(1-r.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),r.zoomToCursor&&x){let O=null;if(r.object.isPerspectiveCamera){const H=S.length();O=X(H*c);const J=H-O;r.object.position.addScaledVector(E,J),r.object.updateMatrixWorld(),Ct=!!J}else if(r.object.isOrthographicCamera){const H=new K(A.x,A.y,0);H.unproject(r.object);const J=r.object.zoom;r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/c)),r.object.updateProjectionMatrix(),Ct=J!==r.object.zoom;const re=new K(A.x,A.y,0);re.unproject(r.object),r.object.position.sub(re).add(H),r.object.updateMatrixWorld(),O=S.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),r.zoomToCursor=!1;O!==null&&(this.screenSpacePanning?r.target.set(0,0,-1).transformDirection(r.object.matrix).multiplyScalar(O).add(r.object.position):(Pc.origin.copy(r.object.position),Pc.direction.set(0,0,-1).transformDirection(r.object.matrix),Math.abs(r.object.up.dot(Pc.direction))<TO?e.lookAt(r.target):(cy.setFromNormalAndCoplanarPoint(r.object.up,r.target),Pc.intersectPlane(cy,r.target))))}else if(r.object.isOrthographicCamera){const O=r.object.zoom;r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/c)),O!==r.object.zoom&&(r.object.updateProjectionMatrix(),Ct=!0)}return c=1,x=!1,Ct||ne.distanceToSquared(r.object.position)>a||8*(1-ce.dot(r.object.quaternion))>a||Re.distanceToSquared(r.target)>a?(r.dispatchEvent(sy),ne.copy(r.object.position),ce.copy(r.object.quaternion),Re.copy(r.target),!0):!1}}(),this.dispose=function(){r.domElement.removeEventListener("contextmenu",be),r.domElement.removeEventListener("pointerdown",yt),r.domElement.removeEventListener("pointercancel",b),r.domElement.removeEventListener("wheel",ie),r.domElement.removeEventListener("pointermove",D),r.domElement.removeEventListener("pointerup",b),r.domElement.getRootNode().removeEventListener("keydown",Le,{capture:!0}),r._domElementKeyEvents!==null&&(r._domElementKeyEvents.removeEventListener("keydown",me),r._domElementKeyEvents=null)};const r=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let o=i.NONE;const a=1e-6,s=new ay,l=new ay;let c=1;const u=new K,f=new Je,d=new Je,p=new Je,_=new Je,v=new Je,m=new Je,h=new Je,g=new Je,y=new Je,E=new K,A=new Je;let x=!1;const M=[],P={};let T=!1;function w(S){return S!==null?2*Math.PI/60*r.autoRotateSpeed*S:2*Math.PI/60/60*r.autoRotateSpeed}function L(S){const te=Math.abs(S*.01);return Math.pow(.95,r.zoomSpeed*te)}function V(S){l.theta-=S}function F(S){l.phi-=S}const W=function(){const S=new K;return function(Z,ne){S.setFromMatrixColumn(ne,0),S.multiplyScalar(-Z),u.add(S)}}(),ee=function(){const S=new K;return function(Z,ne){r.screenSpacePanning===!0?S.setFromMatrixColumn(ne,1):(S.setFromMatrixColumn(ne,0),S.crossVectors(r.object.up,S)),S.multiplyScalar(Z),u.add(S)}}(),U=function(){const S=new K;return function(Z,ne){const ce=r.domElement;if(r.object.isPerspectiveCamera){const Re=r.object.position;S.copy(Re).sub(r.target);let Ye=S.length();Ye*=Math.tan(r.object.fov/2*Math.PI/180),W(2*Z*Ye/ce.clientHeight,r.object.matrix),ee(2*ne*Ye/ce.clientHeight,r.object.matrix)}else r.object.isOrthographicCamera?(W(Z*(r.object.right-r.object.left)/r.object.zoom/ce.clientWidth,r.object.matrix),ee(ne*(r.object.top-r.object.bottom)/r.object.zoom/ce.clientHeight,r.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),r.enablePan=!1)}}();function N(S){r.object.isPerspectiveCamera||r.object.isOrthographicCamera?c/=S:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function R(S){r.object.isPerspectiveCamera||r.object.isOrthographicCamera?c*=S:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function z(S,te){if(!r.zoomToCursor)return;x=!0;const Z=r.domElement.getBoundingClientRect(),ne=S-Z.left,ce=te-Z.top,Re=Z.width,Ye=Z.height;A.x=ne/Re*2-1,A.y=-(ce/Ye)*2+1,E.set(A.x,A.y,1).unproject(r.object).sub(r.object.position).normalize()}function X(S){return Math.max(r.minDistance,Math.min(r.maxDistance,S))}function Y(S){f.set(S.clientX,S.clientY)}function oe(S){z(S.clientX,S.clientX),h.set(S.clientX,S.clientY)}function xe(S){_.set(S.clientX,S.clientY)}function q(S){d.set(S.clientX,S.clientY),p.subVectors(d,f).multiplyScalar(r.rotateSpeed);const te=r.domElement;V(2*Math.PI*p.x/te.clientHeight),F(2*Math.PI*p.y/te.clientHeight),f.copy(d),r.update()}function ae(S){g.set(S.clientX,S.clientY),y.subVectors(g,h),y.y>0?N(L(y.y)):y.y<0&&R(L(y.y)),h.copy(g),r.update()}function de(S){v.set(S.clientX,S.clientY),m.subVectors(v,_).multiplyScalar(r.panSpeed),U(m.x,m.y),_.copy(v),r.update()}function fe(S){z(S.clientX,S.clientY),S.deltaY<0?R(L(S.deltaY)):S.deltaY>0&&N(L(S.deltaY)),r.update()}function $e(S){let te=!1;switch(S.code){case r.keys.UP:S.ctrlKey||S.metaKey||S.shiftKey?F(2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):U(0,r.keyPanSpeed),te=!0;break;case r.keys.BOTTOM:S.ctrlKey||S.metaKey||S.shiftKey?F(-2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):U(0,-r.keyPanSpeed),te=!0;break;case r.keys.LEFT:S.ctrlKey||S.metaKey||S.shiftKey?V(2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):U(r.keyPanSpeed,0),te=!0;break;case r.keys.RIGHT:S.ctrlKey||S.metaKey||S.shiftKey?V(-2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):U(-r.keyPanSpeed,0),te=!0;break}te&&(S.preventDefault(),r.update())}function We(S){if(M.length===1)f.set(S.pageX,S.pageY);else{const te=Ke(S),Z=.5*(S.pageX+te.x),ne=.5*(S.pageY+te.y);f.set(Z,ne)}}function et(S){if(M.length===1)_.set(S.pageX,S.pageY);else{const te=Ke(S),Z=.5*(S.pageX+te.x),ne=.5*(S.pageY+te.y);_.set(Z,ne)}}function B(S){const te=Ke(S),Z=S.pageX-te.x,ne=S.pageY-te.y,ce=Math.sqrt(Z*Z+ne*ne);h.set(0,ce)}function De(S){r.enableZoom&&B(S),r.enablePan&&et(S)}function je(S){r.enableZoom&&B(S),r.enableRotate&&We(S)}function dt(S){if(M.length==1)d.set(S.pageX,S.pageY);else{const Z=Ke(S),ne=.5*(S.pageX+Z.x),ce=.5*(S.pageY+Z.y);d.set(ne,ce)}p.subVectors(d,f).multiplyScalar(r.rotateSpeed);const te=r.domElement;V(2*Math.PI*p.x/te.clientHeight),F(2*Math.PI*p.y/te.clientHeight),f.copy(d)}function Ne(S){if(M.length===1)v.set(S.pageX,S.pageY);else{const te=Ke(S),Z=.5*(S.pageX+te.x),ne=.5*(S.pageY+te.y);v.set(Z,ne)}m.subVectors(v,_).multiplyScalar(r.panSpeed),U(m.x,m.y),_.copy(v)}function Oe(S){const te=Ke(S),Z=S.pageX-te.x,ne=S.pageY-te.y,ce=Math.sqrt(Z*Z+ne*ne);g.set(0,ce),y.set(0,Math.pow(g.y/h.y,r.zoomSpeed)),N(y.y),h.copy(g);const Re=(S.pageX+te.x)*.5,Ye=(S.pageY+te.y)*.5;z(Re,Ye)}function Xe(S){r.enableZoom&&Oe(S),r.enablePan&&Ne(S)}function Be(S){r.enableZoom&&Oe(S),r.enableRotate&&dt(S)}function yt(S){r.enabled!==!1&&(M.length===0&&(r.domElement.setPointerCapture(S.pointerId),r.domElement.addEventListener("pointermove",D),r.domElement.addEventListener("pointerup",b)),!ye(S)&&(ot(S),S.pointerType==="touch"?ke(S):Q(S)))}function D(S){r.enabled!==!1&&(S.pointerType==="touch"?pe(S):se(S))}function b(S){switch(Ue(S),M.length){case 0:r.domElement.releasePointerCapture(S.pointerId),r.domElement.removeEventListener("pointermove",D),r.domElement.removeEventListener("pointerup",b),r.dispatchEvent(ly),o=i.NONE;break;case 1:const te=M[0],Z=P[te];ke({pointerId:te,pageX:Z.x,pageY:Z.y});break}}function Q(S){let te;switch(S.button){case 0:te=r.mouseButtons.LEFT;break;case 1:te=r.mouseButtons.MIDDLE;break;case 2:te=r.mouseButtons.RIGHT;break;default:te=-1}switch(te){case Wo.DOLLY:if(r.enableZoom===!1)return;oe(S),o=i.DOLLY;break;case Wo.ROTATE:if(S.ctrlKey||S.metaKey||S.shiftKey){if(r.enablePan===!1)return;xe(S),o=i.PAN}else{if(r.enableRotate===!1)return;Y(S),o=i.ROTATE}break;case Wo.PAN:if(S.ctrlKey||S.metaKey||S.shiftKey){if(r.enableRotate===!1)return;Y(S),o=i.ROTATE}else{if(r.enablePan===!1)return;xe(S),o=i.PAN}break;default:o=i.NONE}o!==i.NONE&&r.dispatchEvent(ah)}function se(S){switch(o){case i.ROTATE:if(r.enableRotate===!1)return;q(S);break;case i.DOLLY:if(r.enableZoom===!1)return;ae(S);break;case i.PAN:if(r.enablePan===!1)return;de(S);break}}function ie(S){r.enabled===!1||r.enableZoom===!1||o!==i.NONE||(S.preventDefault(),r.dispatchEvent(ah),fe(le(S)),r.dispatchEvent(ly))}function le(S){const te=S.deltaMode,Z={clientX:S.clientX,clientY:S.clientY,deltaY:S.deltaY};switch(te){case 1:Z.deltaY*=16;break;case 2:Z.deltaY*=100;break}return S.ctrlKey&&!T&&(Z.deltaY*=10),Z}function Le(S){S.key==="Control"&&(T=!0,r.domElement.getRootNode().addEventListener("keyup",ge,{passive:!0,capture:!0}))}function ge(S){S.key==="Control"&&(T=!1,r.domElement.getRootNode().removeEventListener("keyup",ge,{passive:!0,capture:!0}))}function me(S){r.enabled===!1||r.enablePan===!1||$e(S)}function ke(S){switch(qe(S),M.length){case 1:switch(r.touches.ONE){case jo.ROTATE:if(r.enableRotate===!1)return;We(S),o=i.TOUCH_ROTATE;break;case jo.PAN:if(r.enablePan===!1)return;et(S),o=i.TOUCH_PAN;break;default:o=i.NONE}break;case 2:switch(r.touches.TWO){case jo.DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;De(S),o=i.TOUCH_DOLLY_PAN;break;case jo.DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;je(S),o=i.TOUCH_DOLLY_ROTATE;break;default:o=i.NONE}break;default:o=i.NONE}o!==i.NONE&&r.dispatchEvent(ah)}function pe(S){switch(qe(S),o){case i.TOUCH_ROTATE:if(r.enableRotate===!1)return;dt(S),r.update();break;case i.TOUCH_PAN:if(r.enablePan===!1)return;Ne(S),r.update();break;case i.TOUCH_DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;Xe(S),r.update();break;case i.TOUCH_DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;Be(S),r.update();break;default:o=i.NONE}}function be(S){r.enabled!==!1&&S.preventDefault()}function ot(S){M.push(S.pointerId)}function Ue(S){delete P[S.pointerId];for(let te=0;te<M.length;te++)if(M[te]==S.pointerId){M.splice(te,1);return}}function ye(S){for(let te=0;te<M.length;te++)if(M[te]==S.pointerId)return!0;return!1}function qe(S){let te=P[S.pointerId];te===void 0&&(te=new Je,P[S.pointerId]=te),te.set(S.pageX,S.pageY)}function Ke(S){const te=S.pointerId===M[0]?M[1]:M[0];return P[te]}r.domElement.addEventListener("contextmenu",be),r.domElement.addEventListener("pointerdown",yt),r.domElement.addEventListener("pointercancel",b),r.domElement.addEventListener("wheel",ie,{passive:!1}),r.domElement.getRootNode().addEventListener("keydown",Le,{passive:!0,capture:!0}),this.update()}}const CO=t=>{var n;const e=new xO({antialias:!0});return e.setSize(window.innerWidth,window.innerHeight),e.shadowMap.enabled=!0,e.shadowMap.type=vM,(n=document.getElementById(t))==null||n.appendChild(e.domElement),e},AO=()=>{const t=new Qn(45,window.innerWidth/window.innerHeight,.1,1e4);return t.position.set(-100,100,100),t.lookAt(0,0,0),t},RO=()=>{const t=new SO;return t.background=new vt(15790320),t},PO=t=>{let e=null,n=null,r=null,i=null;e=CO(t),n=AO(),r=RO();const o=new is(10,10,10),a=new lg({color:"red"});new yn(o,a).position.set(0,10,0),i=new bO(n,e.domElement);const l=new wO(500);r.add(l);const c=()=>{e==null||e.render(r,n),requestAnimationFrame(c)};return c(),{renderer:e,camera:n,scene:r,controls:i}},LO=`  
varying vec2 vUv;  

void main() {  
    vUv = uv;  
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);  
}  
`,DO=`  
precision mediump float;  
varying vec2 vUv;  
uniform float uTime;  
uniform vec2 uCenter;  
uniform float uRadius;  
uniform float uAmplitude;
uniform vec3 u_color;
  
void main() {  
    // 计算像素到涟漪中心的距离  
    vec2 dist = (vUv - uCenter);  
    float len = length(dist);  
  
    // 使用距离和时间来计算涟漪效果  
    float ripple = sin(len * uRadius - uTime * 2.0) * uAmplitude;  
    
    float alpha = ripple * 0.5 + 0.5; // 涟漪效果越强，透明度越高  
    alpha = clamp(alpha, 0.0, 1.0); // 确保透明度在0到1之间  
  
    // 输出颜色  
    gl_FragColor = vec4(u_color, alpha * 0.5);  // 0.5 环透明度
}  
`;function IO(t={}){const e=Object.assign({color:"#f00",position:null},t);if(!e.position)throw new Error("请传入模型位置信息");console.log(t,"option");const n=new Wn({vertexShader:LO,fragmentShader:DO,uniforms:{uTime:{value:10},uCenter:{value:new Je(.5,.5)},uRadius:{value:40},uAmplitude:{value:50},u_color:{value:new vt("#f00")}},transparent:!0,depthWrite:!1}),r=new ug(50,50,1,Math.PI*2),i=new yn(r,n);i.rotation.x=-Math.PI/2,i.position.copy(e.position);const o=()=>{n.uniforms.uTime.value+=.03,requestAnimationFrame(o)};return o(),i}const NO=`
precision mediump float;
 
float atan2(float y, float x){
  float t0, t1, t2, t3, t4;
  t3 = abs(x);
  t1 = abs(y);
  t0 = max(t3, t1);
  t1 = min(t3, t1);
  t3 = float(1) / t0;
  t3 = t1 * t3;
  t4 = t3 * t3;
  t0 = -float(0.013480470);
  t0 = t0 * t4 + float(0.057477314);
  t0 = t0 * t4 - float(0.121239071);
  t0 = t0 * t4 + float(0.195635925);
  t0 = t0 * t4 - float(0.332994597);
  t0 = t0 * t4 + float(0.999995630);
  t3 = t0 * t3;
  t3 = (abs(y) > abs(x)) ? float(1.570796327) - t3 : t3;
  t3 = (x < 0.0) ?  float(3.141592654) - t3 : t3;
  t3 = (y < 0.0) ? -t3 : t3;
  return t3;
}
// 计算距离
float distanceTo(vec2 src, vec2 dst) {
	float dx = src.x - dst.x;
	float dy = src.y - dst.y;
	float dv = dx * dx + dy * dy;
	return sqrt(dv);
}

#define PI 3.14159265359
#define PI2 6.28318530718

uniform vec3 u_color;
uniform float time;
uniform float u_opacity;
uniform float u_radius;
uniform float u_width;
uniform float u_speed;

varying vec2 v_position;

    `,uy={vertexShader:`
    varying vec2 v_position;
    
    void main() {
        v_position = vec2(position.x, position.y);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }`,fragmentShader:`
    ${NO} 
    void main() {
        float d_time = u_speed * time;

        float angle = atan2(v_position.x, v_position.y) + PI;
        
        float angleT = mod(angle + d_time, PI2);

        float width = u_width;
    
        float d_opacity = 0.0;

        // 当前位置离中心位置
        float length = distanceTo(vec2(0.0, 0.0), v_position);
        
        float bw = 5.0;
       

        if (length < u_radius - bw / 1.1) {
            d_opacity = 1.0 - angleT / PI * (PI / width);
        } 

        if (length > u_radius) { d_opacity = 0.0; }
 
        gl_FragColor = vec4(u_color, d_opacity * u_opacity);
    }`};function UO(t,e){const{radius:n=50,color:r="#fff",speed:i=1,opacity:o=1,angle:a=Math.PI,position:s={x:0,y:0,z:0},rotation:l={x:-Math.PI/2,y:0,z:0}}=t||{},c=50*2;e||(e=new Zi(c,c,1,1));const u=new Wn({uniforms:{u_radius:{value:n},u_speed:{value:i},u_opacity:{value:o},u_width:{value:a},u_color:{value:new vt(r)},time:{value:0}},transparent:!0,depthWrite:!1,side:zn,vertexShader:uy.vertexShader,fragmentShader:uy.fragmentShader}),f=new yn(e,u);f.rotation.set(l.x,l.y,l.z),f.position.copy(s);const d=()=>{u.uniforms.time.value+=.05,requestAnimationFrame(d)};return d(),f}const OO=`
    varying vec2 vUv;
    void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`,FO=`
uniform float time;
uniform float lineWidth;
uniform float lineOpenTime;
uniform float scanTime;
uniform float opacityTime;
varying vec2 vUv;
void main()
{
  // 线的颜色
  vec3 color = vec3(44.0 / 255.0, 140.0 / 255.0, 70.0 / 255.0);

  const float gapWidth = 0.02;

  vec4 gradientColor = mix(vec4(0.0, 77.0 / 255.0, 23.0 / 255.0, 1.0), vec4(0.0, 77.0 / 255.0, 23.0 / 255.0, 0.0), vUv.y);

  // 刚开始的展开动画
  if (time < lineOpenTime)
  {
    float speed = 0.5 / lineOpenTime;
    float progress = speed * time;
    // 展开线
    if (0.5 - lineWidth - progress < vUv.y && vUv.y < 0.5 - progress || (vUv.y > 0.5 + progress && vUv.y < 0.5 + lineWidth + progress))
    {
      gl_FragColor = vec4(color, 1.0);
      return;
    }
    if (vUv.y > (0.5 - progress + gapWidth) && vUv.y < (0.5 + progress - gapWidth))
    {
      gl_FragColor = gradientColor;
    }
  }
  else
  {
    // 展开后的线
    if (vUv.y < lineWidth || vUv.y > 1.0 - lineWidth)
    {
      gl_FragColor = vec4(color, 1.0);
      // gap 部分
    }
    else if (vUv.y > lineWidth && vUv.y < lineWidth + gapWidth || (vUv.y > 1.0 - (lineWidth + gapWidth) && vUv.y < 1.0 - lineWidth))
    {
      gl_FragColor = vec4(0, 0, 0, 0);
    }
    else
    {
      float allTime = scanTime + opacityTime;
      float modTime = mod(time - lineOpenTime, allTime);
      if (modTime < scanTime)
      {
        if (modTime / scanTime < (1.0 - vUv.y))
        {
          gl_FragColor = vec4(0, 0, 0, 0);
        }
        else
        {
          gl_FragColor = gradientColor;
        }
      }
      else
      {
        gradientColor.a *= (allTime - modTime) / opacityTime;
        gl_FragColor = gradientColor;
      }
    }
  }
}`,kO=t=>{const{lineWidth:e,height:n,width:r,position:i,lineOpenTime:o,scanTime:a,opacityTime:s}=Object.assign({lineWidth:1,height:100,width:100,position:[0,0,0],lineOpenTime:.8,scanTime:2,opacityTime:.2},t),l=new Wn({uniforms:{time:{value:0},lineWidth:{value:e/n},lineOpenTime:{value:o},scanTime:{value:a},opacityTime:{value:s}},vertexShader:OO,fragmentShader:FO,transparent:!0,side:zn}),c=new Zi(r,n,1e3,1e3),u=new yn(c,l);u.position.copy(new K(...i));const f=performance.now();function d(){const p=performance.now();requestAnimationFrame(d);const _=(p-f)/1e3;l.uniforms.time.value=_}return d(),u},zO=`
    varying vec2 vUv;
    void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`,BO=`
uniform float time;
uniform vec3 color;
varying vec2 vUv;

float lazer(vec2 pos)
{
	
	float x = time/.33 * 2.0;
	float w = fract(x*0.5);
	w = sin(3.14156*w);
	w *= 1.5 + pos.x;
	w *= 2.0;
  float alpha = w / abs(pos.y) / 16.0;

	float d = distance(pos, vec2(-1.0-fract(x*0.5)*2.,0.8));
	alpha += (0.25*w/d);
	return alpha / 4.0 < 0.3 ? 0.0 : alpha / 4.0;
}

void main()
{
	vec2 pos = ( vUv * 2.0 ) - 1.0; // 归一化 (0, 0) -> (1, 1) => (-1, -1) -> (1, 1)
	gl_FragColor = vec4(color, lazer(pos));
}
`,HO=t=>{const{height:e,position:n,width:r,color:i}=Object.assign({height:20,width:200,position:[0,0,0],color:new vt(1.7,.2,3)},t),o=new Wn({uniforms:{time:{value:0},color:{value:new vt(i)}},vertexShader:zO,fragmentShader:BO,transparent:!0,side:zn});var a=new Zi(r,e,100,100);const s=new yn(a,o);s.position.copy(new K(...n));const l=performance.now();function c(){const u=performance.now();requestAnimationFrame(c);const f=(u-l)/1e3;o.uniforms.time.value=f}return c(),s},VO=`
    varying vec2 vUv;
    void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`,GO=`
#ifdef GL_ES
precision mediump float;
#endif

uniform float time;
uniform vec2 resolution;
uniform vec2 mouse;
varying vec2 vUv;

vec3 lazer(vec2 pos, vec3 clr, float mult)
{
	
	float x = time/1.5 * 2.0;
	float w = fract(x*0.5);
	w = sin(3.14156*w);
	w *= 1.5+pos.x;
	w *= 2.0;
        vec3 color = clr * mult * w / abs(pos.y);

	float d = distance(pos,vec2(-1.0+fract(x*0.5)*2.,0.0));
	color += (clr * 0.25*w/d);
	return color;
}

void main()
{
	vec2 pos = ( vUv * 2.0 ) - 1.0;
	vec3 color = max(vec3(0.), lazer(pos, vec3(1.75, 0.2, 3.), 0.25));
	gl_FragColor = vec4(color * 0.05, 1.0);
}
`,WO=t=>{const{lineWidth:e,height:n,position:r,lineOpenTime:i,scanTime:o,opacityTime:a,renderer:s}=Object.assign({lineWidth:10,height:1e3,width:1e3,position:[0,0,0],lineOpenTime:.8,scanTime:2,opacityTime:.2},t),l=new Wn({uniforms:{time:{value:0},lineWidth:{value:e/n},lineOpenTime:{value:i},scanTime:{value:o},opacityTime:{value:a},resolution:{value:new Je(100,100)},mouse:{value:new Je(0,0)}},vertexShader:VO,fragmentShader:GO,transparent:!0,side:zn});var c=new Zi(100,100,100,100);const u=new yn(c,l);u.position.copy(new K(...r));const f=performance.now();s.domElement.addEventListener("mousemove",p=>{const _=p.clientX/window.innerWidth*2-1,v=-(p.clientY/window.innerHeight)*2+1;l.uniforms.mouse.value=new Je(_,v)});function d(){const p=performance.now();requestAnimationFrame(d);const _=(p-f)/1e3;l.uniforms.time.value=_}return d(),u};function jO(){const t=st.useRef(),e=st.useRef(),n=[{id:"lianyi",name:"涟漪",fn:()=>{var o;(o=t.current)==null||o.add(IO({position:{x:0,y:0,z:0}}))}},{id:"radar",name:"雷达扫描",fn:()=>{var o;(o=t.current)==null||o.add(UO({color:"#69BDF2",position:{x:0,y:0,z:0}}))}},{id:"scan",name:"二维码扫描",fn:()=>{var o;(o=t.current)==null||o.add(kO())}},{id:"laser",name:"激光束",fn:()=>{var o;(o=t.current)==null||o.add(HO())}},{id:"glsl",name:"shaderToy实例加载",fn:()=>{var o;(o=t.current)==null||o.add(WO({renderer:e.current}))}}],[r,i]=st.useState(0);return I.useEffect(()=>{const{scene:o,renderer:a}=PO(n[r].id);t.current=o,e.current=a},[]),I.useEffect(()=>{var o;(o=t.current)==null||o.children.forEach(a=>{var s;a.type!=="AxesHelper"&&((s=t.current)==null||s.remove(a))}),n[r].fn()},[r]),nn.jsxs("div",{className:"container",children:[nn.jsx("div",{className:"qr-scanner",children:nn.jsxs("div",{className:"box",children:[nn.jsx("div",{className:"line"}),nn.jsx("div",{className:"angle"})]})}),nn.jsx(z2,{className:"aside",style:{padding:12},children:nn.jsx(mM,{direction:"vertical",children:n.map((o,a)=>nn.jsx(rg,{onClick:()=>i(a),children:o.name},o.id))})}),nn.jsx("div",{className:"main",children:nn.jsx("div",{id:n[r].id})})]})}const $O=Ob([{path:"/",element:nn.jsx(Xb,{}),children:[{path:"",element:nn.jsx(Lb,{to:"/threejs",replace:!0})},{path:"threejs",element:nn.jsx(jO,{})},{path:"test",element:nn.jsx(Yb,{})}]}]);sh.createRoot(document.getElementById("root")).render(nn.jsx(jb,{router:$O}));
