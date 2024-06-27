function rg(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const o=Object.getOwnPropertyDescriptor(i,r);o&&Object.defineProperty(t,r,o.get?o:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function og(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ag={exports:{}},ou={},sg={exports:{}},st={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ls=Symbol.for("react.element"),d0=Symbol.for("react.portal"),h0=Symbol.for("react.fragment"),p0=Symbol.for("react.strict_mode"),m0=Symbol.for("react.profiler"),g0=Symbol.for("react.provider"),v0=Symbol.for("react.context"),_0=Symbol.for("react.forward_ref"),x0=Symbol.for("react.suspense"),y0=Symbol.for("react.memo"),S0=Symbol.for("react.lazy"),Zd=Symbol.iterator;function M0(t){return t===null||typeof t!="object"?null:(t=Zd&&t[Zd]||t["@@iterator"],typeof t=="function"?t:null)}var lg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ug=Object.assign,cg={};function na(t,e,n){this.props=t,this.context=e,this.refs=cg,this.updater=n||lg}na.prototype.isReactComponent={};na.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};na.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function fg(){}fg.prototype=na.prototype;function Vf(t,e,n){this.props=t,this.context=e,this.refs=cg,this.updater=n||lg}var Gf=Vf.prototype=new fg;Gf.constructor=Vf;ug(Gf,na.prototype);Gf.isPureReactComponent=!0;var Qd=Array.isArray,dg=Object.prototype.hasOwnProperty,Wf={current:null},hg={key:!0,ref:!0,__self:!0,__source:!0};function pg(t,e,n){var i,r={},o=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(o=""+e.key),e)dg.call(e,i)&&!hg.hasOwnProperty(i)&&(r[i]=e[i]);var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in s=t.defaultProps,s)r[i]===void 0&&(r[i]=s[i]);return{$$typeof:ls,type:t,key:o,ref:a,props:r,_owner:Wf.current}}function E0(t,e){return{$$typeof:ls,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Xf(t){return typeof t=="object"&&t!==null&&t.$$typeof===ls}function T0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Jd=/\/+/g;function Lu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?T0(""+t.key):e.toString(36)}function ul(t,e,n,i,r){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case ls:case d0:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+Lu(a,0):i,Qd(r)?(n="",t!=null&&(n=t.replace(Jd,"$&/")+"/"),ul(r,e,n,"",function(u){return u})):r!=null&&(Xf(r)&&(r=E0(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Jd,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Qd(t))for(var s=0;s<t.length;s++){o=t[s];var l=i+Lu(o,s);a+=ul(o,e,n,l,r)}else if(l=M0(t),typeof l=="function")for(t=l.call(t),s=0;!(o=t.next()).done;)o=o.value,l=i+Lu(o,s++),a+=ul(o,e,n,l,r);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function ys(t,e,n){if(t==null)return t;var i=[],r=0;return ul(t,i,"","",function(o){return e.call(n,o,r++)}),i}function w0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var dn={current:null},cl={transition:null},A0={ReactCurrentDispatcher:dn,ReactCurrentBatchConfig:cl,ReactCurrentOwner:Wf};function mg(){throw Error("act(...) is not supported in production builds of React.")}st.Children={map:ys,forEach:function(t,e,n){ys(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ys(t,function(){e++}),e},toArray:function(t){return ys(t,function(e){return e})||[]},only:function(t){if(!Xf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};st.Component=na;st.Fragment=h0;st.Profiler=m0;st.PureComponent=Vf;st.StrictMode=p0;st.Suspense=x0;st.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A0;st.act=mg;st.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=ug({},t.props),r=t.key,o=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,a=Wf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var s=t.type.defaultProps;for(l in e)dg.call(e,l)&&!hg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&s!==void 0?s[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];i.children=s}return{$$typeof:ls,type:t.type,key:r,ref:o,props:i,_owner:a}};st.createContext=function(t){return t={$$typeof:v0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:g0,_context:t},t.Consumer=t};st.createElement=pg;st.createFactory=function(t){var e=pg.bind(null,t);return e.type=t,e};st.createRef=function(){return{current:null}};st.forwardRef=function(t){return{$$typeof:_0,render:t}};st.isValidElement=Xf;st.lazy=function(t){return{$$typeof:S0,_payload:{_status:-1,_result:t},_init:w0}};st.memo=function(t,e){return{$$typeof:y0,type:t,compare:e===void 0?null:e}};st.startTransition=function(t){var e=cl.transition;cl.transition={};try{t()}finally{cl.transition=e}};st.unstable_act=mg;st.useCallback=function(t,e){return dn.current.useCallback(t,e)};st.useContext=function(t){return dn.current.useContext(t)};st.useDebugValue=function(){};st.useDeferredValue=function(t){return dn.current.useDeferredValue(t)};st.useEffect=function(t,e){return dn.current.useEffect(t,e)};st.useId=function(){return dn.current.useId()};st.useImperativeHandle=function(t,e,n){return dn.current.useImperativeHandle(t,e,n)};st.useInsertionEffect=function(t,e){return dn.current.useInsertionEffect(t,e)};st.useLayoutEffect=function(t,e){return dn.current.useLayoutEffect(t,e)};st.useMemo=function(t,e){return dn.current.useMemo(t,e)};st.useReducer=function(t,e,n){return dn.current.useReducer(t,e,n)};st.useRef=function(t){return dn.current.useRef(t)};st.useState=function(t){return dn.current.useState(t)};st.useSyncExternalStore=function(t,e,n){return dn.current.useSyncExternalStore(t,e,n)};st.useTransition=function(){return dn.current.useTransition()};st.version="18.3.1";sg.exports=st;var de=sg.exports;const gg=og(de),R0=rg({__proto__:null,default:gg},[de]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C0=de,P0=Symbol.for("react.element"),b0=Symbol.for("react.fragment"),L0=Object.prototype.hasOwnProperty,D0=C0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,U0={key:!0,ref:!0,__self:!0,__source:!0};function vg(t,e,n){var i,r={},o=null,a=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)L0.call(e,i)&&!U0.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:P0,type:t,key:o,ref:a,props:r,_owner:D0.current}}ou.Fragment=b0;ou.jsx=vg;ou.jsxs=vg;ag.exports=ou;var $t=ag.exports,zc={},_g={exports:{}},Pn={},xg={exports:{}},yg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,ee){var te=I.length;I.push(ee);e:for(;0<te;){var ue=te-1>>>1,Re=I[ue];if(0<r(Re,ee))I[ue]=ee,I[te]=Re,te=ue;else break e}}function n(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var ee=I[0],te=I.pop();if(te!==ee){I[0]=te;e:for(var ue=0,Re=I.length,Ze=Re>>>1;ue<Ze;){var $=2*(ue+1)-1,se=I[$],pe=$+1,he=I[pe];if(0>r(se,te))pe<Re&&0>r(he,se)?(I[ue]=he,I[pe]=te,ue=pe):(I[ue]=se,I[$]=te,ue=$);else if(pe<Re&&0>r(he,te))I[ue]=he,I[pe]=te,ue=pe;else break e}}return ee}function r(I,ee){var te=I.sortIndex-ee.sortIndex;return te!==0?te:I.id-ee.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var a=Date,s=a.now();t.unstable_now=function(){return a.now()-s}}var l=[],u=[],c=1,f=null,h=3,m=!1,_=!1,x=!1,p=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(I){for(var ee=n(u);ee!==null;){if(ee.callback===null)i(u);else if(ee.startTime<=I)i(u),ee.sortIndex=ee.expirationTime,e(l,ee);else break;ee=n(u)}}function w(I){if(x=!1,v(I),!_)if(n(l)!==null)_=!0,K(b);else{var ee=n(u);ee!==null&&Z(w,ee.startTime-I)}}function b(I,ee){_=!1,x&&(x=!1,d(L),L=-1),m=!0;var te=h;try{for(v(ee),f=n(l);f!==null&&(!(f.expirationTime>ee)||I&&!P());){var ue=f.callback;if(typeof ue=="function"){f.callback=null,h=f.priorityLevel;var Re=ue(f.expirationTime<=ee);ee=t.unstable_now(),typeof Re=="function"?f.callback=Re:f===n(l)&&i(l),v(ee)}else i(l);f=n(l)}if(f!==null)var Ze=!0;else{var $=n(u);$!==null&&Z(w,$.startTime-ee),Ze=!1}return Ze}finally{f=null,h=te,m=!1}}var S=!1,R=null,L=-1,A=5,M=-1;function P(){return!(t.unstable_now()-M<A)}function j(){if(R!==null){var I=t.unstable_now();M=I;var ee=!0;try{ee=R(!0,I)}finally{ee?B():(S=!1,R=null)}}else S=!1}var B;if(typeof g=="function")B=function(){g(j)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,J=q.port2;q.port1.onmessage=j,B=function(){J.postMessage(null)}}else B=function(){p(j,0)};function K(I){R=I,S||(S=!0,B())}function Z(I,ee){L=p(function(){I(t.unstable_now())},ee)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){_||m||(_=!0,K(b))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(I){switch(h){case 1:case 2:case 3:var ee=3;break;default:ee=h}var te=h;h=ee;try{return I()}finally{h=te}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,ee){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var te=h;h=I;try{return ee()}finally{h=te}},t.unstable_scheduleCallback=function(I,ee,te){var ue=t.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?ue+te:ue):te=ue,I){case 1:var Re=-1;break;case 2:Re=250;break;case 5:Re=1073741823;break;case 4:Re=1e4;break;default:Re=5e3}return Re=te+Re,I={id:c++,callback:ee,priorityLevel:I,startTime:te,expirationTime:Re,sortIndex:-1},te>ue?(I.sortIndex=te,e(u,I),n(l)===null&&I===n(u)&&(x?(d(L),L=-1):x=!0,Z(w,te-ue))):(I.sortIndex=Re,e(l,I),_||m||(_=!0,K(b))),I},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(I){var ee=h;return function(){var te=h;h=ee;try{return I.apply(this,arguments)}finally{h=te}}}})(yg);xg.exports=yg;var N0=xg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I0=de,Cn=N0;function le(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Sg=new Set,Va={};function $r(t,e){Go(t,e),Go(t+"Capture",e)}function Go(t,e){for(Va[t]=e,t=0;t<e.length;t++)Sg.add(e[t])}var wi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bc=Object.prototype.hasOwnProperty,F0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,eh={},th={};function O0(t){return Bc.call(th,t)?!0:Bc.call(eh,t)?!1:F0.test(t)?th[t]=!0:(eh[t]=!0,!1)}function k0(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function z0(t,e,n,i){if(e===null||typeof e>"u"||k0(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function hn(t,e,n,i,r,o,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=a}var Zt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Zt[t]=new hn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Zt[e]=new hn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Zt[t]=new hn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Zt[t]=new hn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Zt[t]=new hn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Zt[t]=new hn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Zt[t]=new hn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Zt[t]=new hn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Zt[t]=new hn(t,5,!1,t.toLowerCase(),null,!1,!1)});var jf=/[\-:]([a-z])/g;function Yf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(jf,Yf);Zt[e]=new hn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(jf,Yf);Zt[e]=new hn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(jf,Yf);Zt[e]=new hn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Zt[t]=new hn(t,1,!1,t.toLowerCase(),null,!1,!1)});Zt.xlinkHref=new hn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Zt[t]=new hn(t,1,!1,t.toLowerCase(),null,!0,!0)});function $f(t,e,n,i){var r=Zt.hasOwnProperty(e)?Zt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(z0(e,n,r,i)&&(n=null),i||r===null?O0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Li=I0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ss=Symbol.for("react.element"),So=Symbol.for("react.portal"),Mo=Symbol.for("react.fragment"),qf=Symbol.for("react.strict_mode"),Hc=Symbol.for("react.profiler"),Mg=Symbol.for("react.provider"),Eg=Symbol.for("react.context"),Kf=Symbol.for("react.forward_ref"),Vc=Symbol.for("react.suspense"),Gc=Symbol.for("react.suspense_list"),Zf=Symbol.for("react.memo"),Gi=Symbol.for("react.lazy"),Tg=Symbol.for("react.offscreen"),nh=Symbol.iterator;function la(t){return t===null||typeof t!="object"?null:(t=nh&&t[nh]||t["@@iterator"],typeof t=="function"?t:null)}var Lt=Object.assign,Du;function Ta(t){if(Du===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Du=e&&e[1]||""}return`
`+Du+t}var Uu=!1;function Nu(t,e){if(!t||Uu)return"";Uu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),o=i.stack.split(`
`),a=r.length-1,s=o.length-1;1<=a&&0<=s&&r[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(r[a]!==o[s]){if(a!==1||s!==1)do if(a--,s--,0>s||r[a]!==o[s]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=s);break}}}finally{Uu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ta(t):""}function B0(t){switch(t.tag){case 5:return Ta(t.type);case 16:return Ta("Lazy");case 13:return Ta("Suspense");case 19:return Ta("SuspenseList");case 0:case 2:case 15:return t=Nu(t.type,!1),t;case 11:return t=Nu(t.type.render,!1),t;case 1:return t=Nu(t.type,!0),t;default:return""}}function Wc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Mo:return"Fragment";case So:return"Portal";case Hc:return"Profiler";case qf:return"StrictMode";case Vc:return"Suspense";case Gc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Eg:return(t.displayName||"Context")+".Consumer";case Mg:return(t._context.displayName||"Context")+".Provider";case Kf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Zf:return e=t.displayName||null,e!==null?e:Wc(t.type)||"Memo";case Gi:e=t._payload,t=t._init;try{return Wc(t(e))}catch{}}return null}function H0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Wc(e);case 8:return e===qf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ur(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function wg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function V0(t){var e=wg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,o.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ms(t){t._valueTracker||(t._valueTracker=V0(t))}function Ag(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=wg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function El(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Xc(t,e){var n=e.checked;return Lt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function ih(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=ur(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Rg(t,e){e=e.checked,e!=null&&$f(t,"checked",e,!1)}function jc(t,e){Rg(t,e);var n=ur(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Yc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Yc(t,e.type,ur(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function rh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Yc(t,e,n){(e!=="number"||El(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var wa=Array.isArray;function No(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+ur(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function $c(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(le(91));return Lt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function oh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(le(92));if(wa(n)){if(1<n.length)throw Error(le(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ur(n)}}function Cg(t,e){var n=ur(e.value),i=ur(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function ah(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Pg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function qc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Pg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Es,bg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Es=Es||document.createElement("div"),Es.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Es.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ga(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ba={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},G0=["Webkit","ms","Moz","O"];Object.keys(ba).forEach(function(t){G0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ba[e]=ba[t]})});function Lg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ba.hasOwnProperty(t)&&ba[t]?(""+e).trim():e+"px"}function Dg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Lg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var W0=Lt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Kc(t,e){if(e){if(W0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(le(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(le(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(le(61))}if(e.style!=null&&typeof e.style!="object")throw Error(le(62))}}function Zc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qc=null;function Qf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Jc=null,Io=null,Fo=null;function sh(t){if(t=fs(t)){if(typeof Jc!="function")throw Error(le(280));var e=t.stateNode;e&&(e=cu(e),Jc(t.stateNode,t.type,e))}}function Ug(t){Io?Fo?Fo.push(t):Fo=[t]:Io=t}function Ng(){if(Io){var t=Io,e=Fo;if(Fo=Io=null,sh(t),e)for(t=0;t<e.length;t++)sh(e[t])}}function Ig(t,e){return t(e)}function Fg(){}var Iu=!1;function Og(t,e,n){if(Iu)return t(e,n);Iu=!0;try{return Ig(t,e,n)}finally{Iu=!1,(Io!==null||Fo!==null)&&(Fg(),Ng())}}function Wa(t,e){var n=t.stateNode;if(n===null)return null;var i=cu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(le(231,e,typeof n));return n}var ef=!1;if(wi)try{var ua={};Object.defineProperty(ua,"passive",{get:function(){ef=!0}}),window.addEventListener("test",ua,ua),window.removeEventListener("test",ua,ua)}catch{ef=!1}function X0(t,e,n,i,r,o,a,s,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var La=!1,Tl=null,wl=!1,tf=null,j0={onError:function(t){La=!0,Tl=t}};function Y0(t,e,n,i,r,o,a,s,l){La=!1,Tl=null,X0.apply(j0,arguments)}function $0(t,e,n,i,r,o,a,s,l){if(Y0.apply(this,arguments),La){if(La){var u=Tl;La=!1,Tl=null}else throw Error(le(198));wl||(wl=!0,tf=u)}}function qr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function kg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function lh(t){if(qr(t)!==t)throw Error(le(188))}function q0(t){var e=t.alternate;if(!e){if(e=qr(t),e===null)throw Error(le(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var o=r.alternate;if(o===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===n)return lh(r),t;if(o===i)return lh(r),e;o=o.sibling}throw Error(le(188))}if(n.return!==i.return)n=r,i=o;else{for(var a=!1,s=r.child;s;){if(s===n){a=!0,n=r,i=o;break}if(s===i){a=!0,i=r,n=o;break}s=s.sibling}if(!a){for(s=o.child;s;){if(s===n){a=!0,n=o,i=r;break}if(s===i){a=!0,i=o,n=r;break}s=s.sibling}if(!a)throw Error(le(189))}}if(n.alternate!==i)throw Error(le(190))}if(n.tag!==3)throw Error(le(188));return n.stateNode.current===n?t:e}function zg(t){return t=q0(t),t!==null?Bg(t):null}function Bg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Bg(t);if(e!==null)return e;t=t.sibling}return null}var Hg=Cn.unstable_scheduleCallback,uh=Cn.unstable_cancelCallback,K0=Cn.unstable_shouldYield,Z0=Cn.unstable_requestPaint,Nt=Cn.unstable_now,Q0=Cn.unstable_getCurrentPriorityLevel,Jf=Cn.unstable_ImmediatePriority,Vg=Cn.unstable_UserBlockingPriority,Al=Cn.unstable_NormalPriority,J0=Cn.unstable_LowPriority,Gg=Cn.unstable_IdlePriority,au=null,ci=null;function ex(t){if(ci&&typeof ci.onCommitFiberRoot=="function")try{ci.onCommitFiberRoot(au,t,void 0,(t.current.flags&128)===128)}catch{}}var Qn=Math.clz32?Math.clz32:ix,tx=Math.log,nx=Math.LN2;function ix(t){return t>>>=0,t===0?32:31-(tx(t)/nx|0)|0}var Ts=64,ws=4194304;function Aa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Rl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,o=t.pingedLanes,a=n&268435455;if(a!==0){var s=a&~r;s!==0?i=Aa(s):(o&=a,o!==0&&(i=Aa(o)))}else a=n&~r,a!==0?i=Aa(a):o!==0&&(i=Aa(o));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,o=e&-e,r>=o||r===16&&(o&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Qn(e),r=1<<n,i|=t[n],e&=~r;return i}function rx(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ox(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,o=t.pendingLanes;0<o;){var a=31-Qn(o),s=1<<a,l=r[a];l===-1?(!(s&n)||s&i)&&(r[a]=rx(s,e)):l<=e&&(t.expiredLanes|=s),o&=~s}}function nf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Wg(){var t=Ts;return Ts<<=1,!(Ts&4194240)&&(Ts=64),t}function Fu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function us(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Qn(e),t[e]=n}function ax(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Qn(n),o=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~o}}function ed(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Qn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var pt=0;function Xg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var jg,td,Yg,$g,qg,rf=!1,As=[],Qi=null,Ji=null,er=null,Xa=new Map,ja=new Map,ji=[],sx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ch(t,e){switch(t){case"focusin":case"focusout":Qi=null;break;case"dragenter":case"dragleave":Ji=null;break;case"mouseover":case"mouseout":er=null;break;case"pointerover":case"pointerout":Xa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ja.delete(e.pointerId)}}function ca(t,e,n,i,r,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:o,targetContainers:[r]},e!==null&&(e=fs(e),e!==null&&td(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function lx(t,e,n,i,r){switch(e){case"focusin":return Qi=ca(Qi,t,e,n,i,r),!0;case"dragenter":return Ji=ca(Ji,t,e,n,i,r),!0;case"mouseover":return er=ca(er,t,e,n,i,r),!0;case"pointerover":var o=r.pointerId;return Xa.set(o,ca(Xa.get(o)||null,t,e,n,i,r)),!0;case"gotpointercapture":return o=r.pointerId,ja.set(o,ca(ja.get(o)||null,t,e,n,i,r)),!0}return!1}function Kg(t){var e=Lr(t.target);if(e!==null){var n=qr(e);if(n!==null){if(e=n.tag,e===13){if(e=kg(n),e!==null){t.blockedOn=e,qg(t.priority,function(){Yg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function fl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=of(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Qc=i,n.target.dispatchEvent(i),Qc=null}else return e=fs(n),e!==null&&td(e),t.blockedOn=n,!1;e.shift()}return!0}function fh(t,e,n){fl(t)&&n.delete(e)}function ux(){rf=!1,Qi!==null&&fl(Qi)&&(Qi=null),Ji!==null&&fl(Ji)&&(Ji=null),er!==null&&fl(er)&&(er=null),Xa.forEach(fh),ja.forEach(fh)}function fa(t,e){t.blockedOn===e&&(t.blockedOn=null,rf||(rf=!0,Cn.unstable_scheduleCallback(Cn.unstable_NormalPriority,ux)))}function Ya(t){function e(r){return fa(r,t)}if(0<As.length){fa(As[0],t);for(var n=1;n<As.length;n++){var i=As[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Qi!==null&&fa(Qi,t),Ji!==null&&fa(Ji,t),er!==null&&fa(er,t),Xa.forEach(e),ja.forEach(e),n=0;n<ji.length;n++)i=ji[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<ji.length&&(n=ji[0],n.blockedOn===null);)Kg(n),n.blockedOn===null&&ji.shift()}var Oo=Li.ReactCurrentBatchConfig,Cl=!0;function cx(t,e,n,i){var r=pt,o=Oo.transition;Oo.transition=null;try{pt=1,nd(t,e,n,i)}finally{pt=r,Oo.transition=o}}function fx(t,e,n,i){var r=pt,o=Oo.transition;Oo.transition=null;try{pt=4,nd(t,e,n,i)}finally{pt=r,Oo.transition=o}}function nd(t,e,n,i){if(Cl){var r=of(t,e,n,i);if(r===null)ju(t,e,i,Pl,n),ch(t,i);else if(lx(r,t,e,n,i))i.stopPropagation();else if(ch(t,i),e&4&&-1<sx.indexOf(t)){for(;r!==null;){var o=fs(r);if(o!==null&&jg(o),o=of(t,e,n,i),o===null&&ju(t,e,i,Pl,n),o===r)break;r=o}r!==null&&i.stopPropagation()}else ju(t,e,i,null,n)}}var Pl=null;function of(t,e,n,i){if(Pl=null,t=Qf(i),t=Lr(t),t!==null)if(e=qr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=kg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Pl=t,null}function Zg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Q0()){case Jf:return 1;case Vg:return 4;case Al:case J0:return 16;case Gg:return 536870912;default:return 16}default:return 16}}var qi=null,id=null,dl=null;function Qg(){if(dl)return dl;var t,e=id,n=e.length,i,r="value"in qi?qi.value:qi.textContent,o=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[o-i];i++);return dl=r.slice(t,1<i?1-i:void 0)}function hl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Rs(){return!0}function dh(){return!1}function bn(t){function e(n,i,r,o,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var s in t)t.hasOwnProperty(s)&&(n=t[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Rs:dh,this.isPropagationStopped=dh,this}return Lt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Rs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Rs)},persist:function(){},isPersistent:Rs}),e}var ia={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rd=bn(ia),cs=Lt({},ia,{view:0,detail:0}),dx=bn(cs),Ou,ku,da,su=Lt({},cs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:od,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==da&&(da&&t.type==="mousemove"?(Ou=t.screenX-da.screenX,ku=t.screenY-da.screenY):ku=Ou=0,da=t),Ou)},movementY:function(t){return"movementY"in t?t.movementY:ku}}),hh=bn(su),hx=Lt({},su,{dataTransfer:0}),px=bn(hx),mx=Lt({},cs,{relatedTarget:0}),zu=bn(mx),gx=Lt({},ia,{animationName:0,elapsedTime:0,pseudoElement:0}),vx=bn(gx),_x=Lt({},ia,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),xx=bn(_x),yx=Lt({},ia,{data:0}),ph=bn(yx),Sx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Mx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ex={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Tx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Ex[t])?!!e[t]:!1}function od(){return Tx}var wx=Lt({},cs,{key:function(t){if(t.key){var e=Sx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=hl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Mx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:od,charCode:function(t){return t.type==="keypress"?hl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?hl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ax=bn(wx),Rx=Lt({},su,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mh=bn(Rx),Cx=Lt({},cs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:od}),Px=bn(Cx),bx=Lt({},ia,{propertyName:0,elapsedTime:0,pseudoElement:0}),Lx=bn(bx),Dx=Lt({},su,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ux=bn(Dx),Nx=[9,13,27,32],ad=wi&&"CompositionEvent"in window,Da=null;wi&&"documentMode"in document&&(Da=document.documentMode);var Ix=wi&&"TextEvent"in window&&!Da,Jg=wi&&(!ad||Da&&8<Da&&11>=Da),gh=" ",vh=!1;function ev(t,e){switch(t){case"keyup":return Nx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function tv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Eo=!1;function Fx(t,e){switch(t){case"compositionend":return tv(e);case"keypress":return e.which!==32?null:(vh=!0,gh);case"textInput":return t=e.data,t===gh&&vh?null:t;default:return null}}function Ox(t,e){if(Eo)return t==="compositionend"||!ad&&ev(t,e)?(t=Qg(),dl=id=qi=null,Eo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Jg&&e.locale!=="ko"?null:e.data;default:return null}}var kx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _h(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!kx[t.type]:e==="textarea"}function nv(t,e,n,i){Ug(i),e=bl(e,"onChange"),0<e.length&&(n=new rd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ua=null,$a=null;function zx(t){hv(t,0)}function lu(t){var e=Ao(t);if(Ag(e))return t}function Bx(t,e){if(t==="change")return e}var iv=!1;if(wi){var Bu;if(wi){var Hu="oninput"in document;if(!Hu){var xh=document.createElement("div");xh.setAttribute("oninput","return;"),Hu=typeof xh.oninput=="function"}Bu=Hu}else Bu=!1;iv=Bu&&(!document.documentMode||9<document.documentMode)}function yh(){Ua&&(Ua.detachEvent("onpropertychange",rv),$a=Ua=null)}function rv(t){if(t.propertyName==="value"&&lu($a)){var e=[];nv(e,$a,t,Qf(t)),Og(zx,e)}}function Hx(t,e,n){t==="focusin"?(yh(),Ua=e,$a=n,Ua.attachEvent("onpropertychange",rv)):t==="focusout"&&yh()}function Vx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return lu($a)}function Gx(t,e){if(t==="click")return lu(e)}function Wx(t,e){if(t==="input"||t==="change")return lu(e)}function Xx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ti=typeof Object.is=="function"?Object.is:Xx;function qa(t,e){if(ti(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Bc.call(e,r)||!ti(t[r],e[r]))return!1}return!0}function Sh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Mh(t,e){var n=Sh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Sh(n)}}function ov(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?ov(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function av(){for(var t=window,e=El();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=El(t.document)}return e}function sd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function jx(t){var e=av(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&ov(n.ownerDocument.documentElement,n)){if(i!==null&&sd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,o=Math.min(i.start,r);i=i.end===void 0?o:Math.min(i.end,r),!t.extend&&o>i&&(r=i,i=o,o=r),r=Mh(n,o);var a=Mh(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),o>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Yx=wi&&"documentMode"in document&&11>=document.documentMode,To=null,af=null,Na=null,sf=!1;function Eh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;sf||To==null||To!==El(i)||(i=To,"selectionStart"in i&&sd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Na&&qa(Na,i)||(Na=i,i=bl(af,"onSelect"),0<i.length&&(e=new rd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=To)))}function Cs(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var wo={animationend:Cs("Animation","AnimationEnd"),animationiteration:Cs("Animation","AnimationIteration"),animationstart:Cs("Animation","AnimationStart"),transitionend:Cs("Transition","TransitionEnd")},Vu={},sv={};wi&&(sv=document.createElement("div").style,"AnimationEvent"in window||(delete wo.animationend.animation,delete wo.animationiteration.animation,delete wo.animationstart.animation),"TransitionEvent"in window||delete wo.transitionend.transition);function uu(t){if(Vu[t])return Vu[t];if(!wo[t])return t;var e=wo[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in sv)return Vu[t]=e[n];return t}var lv=uu("animationend"),uv=uu("animationiteration"),cv=uu("animationstart"),fv=uu("transitionend"),dv=new Map,Th="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function hr(t,e){dv.set(t,e),$r(e,[t])}for(var Gu=0;Gu<Th.length;Gu++){var Wu=Th[Gu],$x=Wu.toLowerCase(),qx=Wu[0].toUpperCase()+Wu.slice(1);hr($x,"on"+qx)}hr(lv,"onAnimationEnd");hr(uv,"onAnimationIteration");hr(cv,"onAnimationStart");hr("dblclick","onDoubleClick");hr("focusin","onFocus");hr("focusout","onBlur");hr(fv,"onTransitionEnd");Go("onMouseEnter",["mouseout","mouseover"]);Go("onMouseLeave",["mouseout","mouseover"]);Go("onPointerEnter",["pointerout","pointerover"]);Go("onPointerLeave",["pointerout","pointerover"]);$r("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));$r("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));$r("onBeforeInput",["compositionend","keypress","textInput","paste"]);$r("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));$r("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));$r("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ra="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Kx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ra));function wh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,$0(i,e,void 0,t),t.currentTarget=null}function hv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var o=void 0;if(e)for(var a=i.length-1;0<=a;a--){var s=i[a],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==o&&r.isPropagationStopped())break e;wh(r,s,u),o=l}else for(a=0;a<i.length;a++){if(s=i[a],l=s.instance,u=s.currentTarget,s=s.listener,l!==o&&r.isPropagationStopped())break e;wh(r,s,u),o=l}}}if(wl)throw t=tf,wl=!1,tf=null,t}function Mt(t,e){var n=e[df];n===void 0&&(n=e[df]=new Set);var i=t+"__bubble";n.has(i)||(pv(e,t,2,!1),n.add(i))}function Xu(t,e,n){var i=0;e&&(i|=4),pv(n,t,i,e)}var Ps="_reactListening"+Math.random().toString(36).slice(2);function Ka(t){if(!t[Ps]){t[Ps]=!0,Sg.forEach(function(n){n!=="selectionchange"&&(Kx.has(n)||Xu(n,!1,t),Xu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ps]||(e[Ps]=!0,Xu("selectionchange",!1,e))}}function pv(t,e,n,i){switch(Zg(e)){case 1:var r=cx;break;case 4:r=fx;break;default:r=nd}n=r.bind(null,e,n,t),r=void 0,!ef||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function ju(t,e,n,i,r){var o=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var s=i.stateNode.containerInfo;if(s===r||s.nodeType===8&&s.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;s!==null;){if(a=Lr(s),a===null)return;if(l=a.tag,l===5||l===6){i=o=a;continue e}s=s.parentNode}}i=i.return}Og(function(){var u=o,c=Qf(n),f=[];e:{var h=dv.get(t);if(h!==void 0){var m=rd,_=t;switch(t){case"keypress":if(hl(n)===0)break e;case"keydown":case"keyup":m=Ax;break;case"focusin":_="focus",m=zu;break;case"focusout":_="blur",m=zu;break;case"beforeblur":case"afterblur":m=zu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=hh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=px;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Px;break;case lv:case uv:case cv:m=vx;break;case fv:m=Lx;break;case"scroll":m=dx;break;case"wheel":m=Ux;break;case"copy":case"cut":case"paste":m=xx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=mh}var x=(e&4)!==0,p=!x&&t==="scroll",d=x?h!==null?h+"Capture":null:h;x=[];for(var g=u,v;g!==null;){v=g;var w=v.stateNode;if(v.tag===5&&w!==null&&(v=w,d!==null&&(w=Wa(g,d),w!=null&&x.push(Za(g,w,v)))),p)break;g=g.return}0<x.length&&(h=new m(h,_,null,n,c),f.push({event:h,listeners:x}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",h&&n!==Qc&&(_=n.relatedTarget||n.fromElement)&&(Lr(_)||_[Ai]))break e;if((m||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,m?(_=n.relatedTarget||n.toElement,m=u,_=_?Lr(_):null,_!==null&&(p=qr(_),_!==p||_.tag!==5&&_.tag!==6)&&(_=null)):(m=null,_=u),m!==_)){if(x=hh,w="onMouseLeave",d="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(x=mh,w="onPointerLeave",d="onPointerEnter",g="pointer"),p=m==null?h:Ao(m),v=_==null?h:Ao(_),h=new x(w,g+"leave",m,n,c),h.target=p,h.relatedTarget=v,w=null,Lr(c)===u&&(x=new x(d,g+"enter",_,n,c),x.target=v,x.relatedTarget=p,w=x),p=w,m&&_)t:{for(x=m,d=_,g=0,v=x;v;v=Qr(v))g++;for(v=0,w=d;w;w=Qr(w))v++;for(;0<g-v;)x=Qr(x),g--;for(;0<v-g;)d=Qr(d),v--;for(;g--;){if(x===d||d!==null&&x===d.alternate)break t;x=Qr(x),d=Qr(d)}x=null}else x=null;m!==null&&Ah(f,h,m,x,!1),_!==null&&p!==null&&Ah(f,p,_,x,!0)}}e:{if(h=u?Ao(u):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var b=Bx;else if(_h(h))if(iv)b=Wx;else{b=Vx;var S=Hx}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(b=Gx);if(b&&(b=b(t,u))){nv(f,b,n,c);break e}S&&S(t,h,u),t==="focusout"&&(S=h._wrapperState)&&S.controlled&&h.type==="number"&&Yc(h,"number",h.value)}switch(S=u?Ao(u):window,t){case"focusin":(_h(S)||S.contentEditable==="true")&&(To=S,af=u,Na=null);break;case"focusout":Na=af=To=null;break;case"mousedown":sf=!0;break;case"contextmenu":case"mouseup":case"dragend":sf=!1,Eh(f,n,c);break;case"selectionchange":if(Yx)break;case"keydown":case"keyup":Eh(f,n,c)}var R;if(ad)e:{switch(t){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else Eo?ev(t,n)&&(L="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(Jg&&n.locale!=="ko"&&(Eo||L!=="onCompositionStart"?L==="onCompositionEnd"&&Eo&&(R=Qg()):(qi=c,id="value"in qi?qi.value:qi.textContent,Eo=!0)),S=bl(u,L),0<S.length&&(L=new ph(L,t,null,n,c),f.push({event:L,listeners:S}),R?L.data=R:(R=tv(n),R!==null&&(L.data=R)))),(R=Ix?Fx(t,n):Ox(t,n))&&(u=bl(u,"onBeforeInput"),0<u.length&&(c=new ph("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=R))}hv(f,e)})}function Za(t,e,n){return{instance:t,listener:e,currentTarget:n}}function bl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,o=r.stateNode;r.tag===5&&o!==null&&(r=o,o=Wa(t,n),o!=null&&i.unshift(Za(t,o,r)),o=Wa(t,e),o!=null&&i.push(Za(t,o,r))),t=t.return}return i}function Qr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ah(t,e,n,i,r){for(var o=e._reactName,a=[];n!==null&&n!==i;){var s=n,l=s.alternate,u=s.stateNode;if(l!==null&&l===i)break;s.tag===5&&u!==null&&(s=u,r?(l=Wa(n,o),l!=null&&a.unshift(Za(n,l,s))):r||(l=Wa(n,o),l!=null&&a.push(Za(n,l,s)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var Zx=/\r\n?/g,Qx=/\u0000|\uFFFD/g;function Rh(t){return(typeof t=="string"?t:""+t).replace(Zx,`
`).replace(Qx,"")}function bs(t,e,n){if(e=Rh(e),Rh(t)!==e&&n)throw Error(le(425))}function Ll(){}var lf=null,uf=null;function cf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ff=typeof setTimeout=="function"?setTimeout:void 0,Jx=typeof clearTimeout=="function"?clearTimeout:void 0,Ch=typeof Promise=="function"?Promise:void 0,ey=typeof queueMicrotask=="function"?queueMicrotask:typeof Ch<"u"?function(t){return Ch.resolve(null).then(t).catch(ty)}:ff;function ty(t){setTimeout(function(){throw t})}function Yu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ya(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ya(e)}function tr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Ph(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ra=Math.random().toString(36).slice(2),ai="__reactFiber$"+ra,Qa="__reactProps$"+ra,Ai="__reactContainer$"+ra,df="__reactEvents$"+ra,ny="__reactListeners$"+ra,iy="__reactHandles$"+ra;function Lr(t){var e=t[ai];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ai]||n[ai]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Ph(t);t!==null;){if(n=t[ai])return n;t=Ph(t)}return e}t=n,n=t.parentNode}return null}function fs(t){return t=t[ai]||t[Ai],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ao(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(le(33))}function cu(t){return t[Qa]||null}var hf=[],Ro=-1;function pr(t){return{current:t}}function Tt(t){0>Ro||(t.current=hf[Ro],hf[Ro]=null,Ro--)}function xt(t,e){Ro++,hf[Ro]=t.current,t.current=e}var cr={},on=pr(cr),gn=pr(!1),Br=cr;function Wo(t,e){var n=t.type.contextTypes;if(!n)return cr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},o;for(o in n)r[o]=e[o];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function vn(t){return t=t.childContextTypes,t!=null}function Dl(){Tt(gn),Tt(on)}function bh(t,e,n){if(on.current!==cr)throw Error(le(168));xt(on,e),xt(gn,n)}function mv(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(le(108,H0(t)||"Unknown",r));return Lt({},n,i)}function Ul(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||cr,Br=on.current,xt(on,t),xt(gn,gn.current),!0}function Lh(t,e,n){var i=t.stateNode;if(!i)throw Error(le(169));n?(t=mv(t,e,Br),i.__reactInternalMemoizedMergedChildContext=t,Tt(gn),Tt(on),xt(on,t)):Tt(gn),xt(gn,n)}var yi=null,fu=!1,$u=!1;function gv(t){yi===null?yi=[t]:yi.push(t)}function ry(t){fu=!0,gv(t)}function mr(){if(!$u&&yi!==null){$u=!0;var t=0,e=pt;try{var n=yi;for(pt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}yi=null,fu=!1}catch(r){throw yi!==null&&(yi=yi.slice(t+1)),Hg(Jf,mr),r}finally{pt=e,$u=!1}}return null}var Co=[],Po=0,Nl=null,Il=0,Nn=[],In=0,Hr=null,Si=1,Mi="";function wr(t,e){Co[Po++]=Il,Co[Po++]=Nl,Nl=t,Il=e}function vv(t,e,n){Nn[In++]=Si,Nn[In++]=Mi,Nn[In++]=Hr,Hr=t;var i=Si;t=Mi;var r=32-Qn(i)-1;i&=~(1<<r),n+=1;var o=32-Qn(e)+r;if(30<o){var a=r-r%5;o=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Si=1<<32-Qn(e)+r|n<<r|i,Mi=o+t}else Si=1<<o|n<<r|i,Mi=t}function ld(t){t.return!==null&&(wr(t,1),vv(t,1,0))}function ud(t){for(;t===Nl;)Nl=Co[--Po],Co[Po]=null,Il=Co[--Po],Co[Po]=null;for(;t===Hr;)Hr=Nn[--In],Nn[In]=null,Mi=Nn[--In],Nn[In]=null,Si=Nn[--In],Nn[In]=null}var Rn=null,An=null,At=!1,qn=null;function _v(t,e){var n=On(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Dh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Rn=t,An=tr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Rn=t,An=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Hr!==null?{id:Si,overflow:Mi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=On(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Rn=t,An=null,!0):!1;default:return!1}}function pf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function mf(t){if(At){var e=An;if(e){var n=e;if(!Dh(t,e)){if(pf(t))throw Error(le(418));e=tr(n.nextSibling);var i=Rn;e&&Dh(t,e)?_v(i,n):(t.flags=t.flags&-4097|2,At=!1,Rn=t)}}else{if(pf(t))throw Error(le(418));t.flags=t.flags&-4097|2,At=!1,Rn=t}}}function Uh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Rn=t}function Ls(t){if(t!==Rn)return!1;if(!At)return Uh(t),At=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!cf(t.type,t.memoizedProps)),e&&(e=An)){if(pf(t))throw xv(),Error(le(418));for(;e;)_v(t,e),e=tr(e.nextSibling)}if(Uh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(le(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){An=tr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}An=null}}else An=Rn?tr(t.stateNode.nextSibling):null;return!0}function xv(){for(var t=An;t;)t=tr(t.nextSibling)}function Xo(){An=Rn=null,At=!1}function cd(t){qn===null?qn=[t]:qn.push(t)}var oy=Li.ReactCurrentBatchConfig;function ha(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(le(309));var i=n.stateNode}if(!i)throw Error(le(147,t));var r=i,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(a){var s=r.refs;a===null?delete s[o]:s[o]=a},e._stringRef=o,e)}if(typeof t!="string")throw Error(le(284));if(!n._owner)throw Error(le(290,t))}return t}function Ds(t,e){throw t=Object.prototype.toString.call(e),Error(le(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Nh(t){var e=t._init;return e(t._payload)}function yv(t){function e(d,g){if(t){var v=d.deletions;v===null?(d.deletions=[g],d.flags|=16):v.push(g)}}function n(d,g){if(!t)return null;for(;g!==null;)e(d,g),g=g.sibling;return null}function i(d,g){for(d=new Map;g!==null;)g.key!==null?d.set(g.key,g):d.set(g.index,g),g=g.sibling;return d}function r(d,g){return d=or(d,g),d.index=0,d.sibling=null,d}function o(d,g,v){return d.index=v,t?(v=d.alternate,v!==null?(v=v.index,v<g?(d.flags|=2,g):v):(d.flags|=2,g)):(d.flags|=1048576,g)}function a(d){return t&&d.alternate===null&&(d.flags|=2),d}function s(d,g,v,w){return g===null||g.tag!==6?(g=tc(v,d.mode,w),g.return=d,g):(g=r(g,v),g.return=d,g)}function l(d,g,v,w){var b=v.type;return b===Mo?c(d,g,v.props.children,w,v.key):g!==null&&(g.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Gi&&Nh(b)===g.type)?(w=r(g,v.props),w.ref=ha(d,g,v),w.return=d,w):(w=yl(v.type,v.key,v.props,null,d.mode,w),w.ref=ha(d,g,v),w.return=d,w)}function u(d,g,v,w){return g===null||g.tag!==4||g.stateNode.containerInfo!==v.containerInfo||g.stateNode.implementation!==v.implementation?(g=nc(v,d.mode,w),g.return=d,g):(g=r(g,v.children||[]),g.return=d,g)}function c(d,g,v,w,b){return g===null||g.tag!==7?(g=zr(v,d.mode,w,b),g.return=d,g):(g=r(g,v),g.return=d,g)}function f(d,g,v){if(typeof g=="string"&&g!==""||typeof g=="number")return g=tc(""+g,d.mode,v),g.return=d,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ss:return v=yl(g.type,g.key,g.props,null,d.mode,v),v.ref=ha(d,null,g),v.return=d,v;case So:return g=nc(g,d.mode,v),g.return=d,g;case Gi:var w=g._init;return f(d,w(g._payload),v)}if(wa(g)||la(g))return g=zr(g,d.mode,v,null),g.return=d,g;Ds(d,g)}return null}function h(d,g,v,w){var b=g!==null?g.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return b!==null?null:s(d,g,""+v,w);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ss:return v.key===b?l(d,g,v,w):null;case So:return v.key===b?u(d,g,v,w):null;case Gi:return b=v._init,h(d,g,b(v._payload),w)}if(wa(v)||la(v))return b!==null?null:c(d,g,v,w,null);Ds(d,v)}return null}function m(d,g,v,w,b){if(typeof w=="string"&&w!==""||typeof w=="number")return d=d.get(v)||null,s(g,d,""+w,b);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ss:return d=d.get(w.key===null?v:w.key)||null,l(g,d,w,b);case So:return d=d.get(w.key===null?v:w.key)||null,u(g,d,w,b);case Gi:var S=w._init;return m(d,g,v,S(w._payload),b)}if(wa(w)||la(w))return d=d.get(v)||null,c(g,d,w,b,null);Ds(g,w)}return null}function _(d,g,v,w){for(var b=null,S=null,R=g,L=g=0,A=null;R!==null&&L<v.length;L++){R.index>L?(A=R,R=null):A=R.sibling;var M=h(d,R,v[L],w);if(M===null){R===null&&(R=A);break}t&&R&&M.alternate===null&&e(d,R),g=o(M,g,L),S===null?b=M:S.sibling=M,S=M,R=A}if(L===v.length)return n(d,R),At&&wr(d,L),b;if(R===null){for(;L<v.length;L++)R=f(d,v[L],w),R!==null&&(g=o(R,g,L),S===null?b=R:S.sibling=R,S=R);return At&&wr(d,L),b}for(R=i(d,R);L<v.length;L++)A=m(R,d,L,v[L],w),A!==null&&(t&&A.alternate!==null&&R.delete(A.key===null?L:A.key),g=o(A,g,L),S===null?b=A:S.sibling=A,S=A);return t&&R.forEach(function(P){return e(d,P)}),At&&wr(d,L),b}function x(d,g,v,w){var b=la(v);if(typeof b!="function")throw Error(le(150));if(v=b.call(v),v==null)throw Error(le(151));for(var S=b=null,R=g,L=g=0,A=null,M=v.next();R!==null&&!M.done;L++,M=v.next()){R.index>L?(A=R,R=null):A=R.sibling;var P=h(d,R,M.value,w);if(P===null){R===null&&(R=A);break}t&&R&&P.alternate===null&&e(d,R),g=o(P,g,L),S===null?b=P:S.sibling=P,S=P,R=A}if(M.done)return n(d,R),At&&wr(d,L),b;if(R===null){for(;!M.done;L++,M=v.next())M=f(d,M.value,w),M!==null&&(g=o(M,g,L),S===null?b=M:S.sibling=M,S=M);return At&&wr(d,L),b}for(R=i(d,R);!M.done;L++,M=v.next())M=m(R,d,L,M.value,w),M!==null&&(t&&M.alternate!==null&&R.delete(M.key===null?L:M.key),g=o(M,g,L),S===null?b=M:S.sibling=M,S=M);return t&&R.forEach(function(j){return e(d,j)}),At&&wr(d,L),b}function p(d,g,v,w){if(typeof v=="object"&&v!==null&&v.type===Mo&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Ss:e:{for(var b=v.key,S=g;S!==null;){if(S.key===b){if(b=v.type,b===Mo){if(S.tag===7){n(d,S.sibling),g=r(S,v.props.children),g.return=d,d=g;break e}}else if(S.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Gi&&Nh(b)===S.type){n(d,S.sibling),g=r(S,v.props),g.ref=ha(d,S,v),g.return=d,d=g;break e}n(d,S);break}else e(d,S);S=S.sibling}v.type===Mo?(g=zr(v.props.children,d.mode,w,v.key),g.return=d,d=g):(w=yl(v.type,v.key,v.props,null,d.mode,w),w.ref=ha(d,g,v),w.return=d,d=w)}return a(d);case So:e:{for(S=v.key;g!==null;){if(g.key===S)if(g.tag===4&&g.stateNode.containerInfo===v.containerInfo&&g.stateNode.implementation===v.implementation){n(d,g.sibling),g=r(g,v.children||[]),g.return=d,d=g;break e}else{n(d,g);break}else e(d,g);g=g.sibling}g=nc(v,d.mode,w),g.return=d,d=g}return a(d);case Gi:return S=v._init,p(d,g,S(v._payload),w)}if(wa(v))return _(d,g,v,w);if(la(v))return x(d,g,v,w);Ds(d,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,g!==null&&g.tag===6?(n(d,g.sibling),g=r(g,v),g.return=d,d=g):(n(d,g),g=tc(v,d.mode,w),g.return=d,d=g),a(d)):n(d,g)}return p}var jo=yv(!0),Sv=yv(!1),Fl=pr(null),Ol=null,bo=null,fd=null;function dd(){fd=bo=Ol=null}function hd(t){var e=Fl.current;Tt(Fl),t._currentValue=e}function gf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function ko(t,e){Ol=t,fd=bo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(mn=!0),t.firstContext=null)}function Bn(t){var e=t._currentValue;if(fd!==t)if(t={context:t,memoizedValue:e,next:null},bo===null){if(Ol===null)throw Error(le(308));bo=t,Ol.dependencies={lanes:0,firstContext:t}}else bo=bo.next=t;return e}var Dr=null;function pd(t){Dr===null?Dr=[t]:Dr.push(t)}function Mv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,pd(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ri(t,i)}function Ri(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Wi=!1;function md(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ev(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ti(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function nr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,ct&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ri(t,n)}return r=i.interleaved,r===null?(e.next=e,pd(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ri(t,n)}function pl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,ed(t,n)}}function Ih(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?r=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?r=o=e:o=o.next=e}else r=o=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function kl(t,e,n,i){var r=t.updateQueue;Wi=!1;var o=r.firstBaseUpdate,a=r.lastBaseUpdate,s=r.shared.pending;if(s!==null){r.shared.pending=null;var l=s,u=l.next;l.next=null,a===null?o=u:a.next=u,a=l;var c=t.alternate;c!==null&&(c=c.updateQueue,s=c.lastBaseUpdate,s!==a&&(s===null?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=l))}if(o!==null){var f=r.baseState;a=0,c=u=l=null,s=o;do{var h=s.lane,m=s.eventTime;if((i&h)===h){c!==null&&(c=c.next={eventTime:m,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var _=t,x=s;switch(h=e,m=n,x.tag){case 1:if(_=x.payload,typeof _=="function"){f=_.call(m,f,h);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=x.payload,h=typeof _=="function"?_.call(m,f,h):_,h==null)break e;f=Lt({},f,h);break e;case 2:Wi=!0}}s.callback!==null&&s.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[s]:h.push(s))}else m={eventTime:m,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(u=c=m,l=f):c=c.next=m,a|=h;if(s=s.next,s===null){if(s=r.shared.pending,s===null)break;h=s,s=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(c===null&&(l=f),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else o===null&&(r.shared.lanes=0);Gr|=a,t.lanes=a,t.memoizedState=f}}function Fh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(le(191,r));r.call(i)}}}var ds={},fi=pr(ds),Ja=pr(ds),es=pr(ds);function Ur(t){if(t===ds)throw Error(le(174));return t}function gd(t,e){switch(xt(es,e),xt(Ja,t),xt(fi,ds),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:qc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=qc(e,t)}Tt(fi),xt(fi,e)}function Yo(){Tt(fi),Tt(Ja),Tt(es)}function Tv(t){Ur(es.current);var e=Ur(fi.current),n=qc(e,t.type);e!==n&&(xt(Ja,t),xt(fi,n))}function vd(t){Ja.current===t&&(Tt(fi),Tt(Ja))}var Pt=pr(0);function zl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var qu=[];function _d(){for(var t=0;t<qu.length;t++)qu[t]._workInProgressVersionPrimary=null;qu.length=0}var ml=Li.ReactCurrentDispatcher,Ku=Li.ReactCurrentBatchConfig,Vr=0,bt=null,zt=null,Xt=null,Bl=!1,Ia=!1,ts=0,ay=0;function Qt(){throw Error(le(321))}function xd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ti(t[n],e[n]))return!1;return!0}function yd(t,e,n,i,r,o){if(Vr=o,bt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ml.current=t===null||t.memoizedState===null?cy:fy,t=n(i,r),Ia){o=0;do{if(Ia=!1,ts=0,25<=o)throw Error(le(301));o+=1,Xt=zt=null,e.updateQueue=null,ml.current=dy,t=n(i,r)}while(Ia)}if(ml.current=Hl,e=zt!==null&&zt.next!==null,Vr=0,Xt=zt=bt=null,Bl=!1,e)throw Error(le(300));return t}function Sd(){var t=ts!==0;return ts=0,t}function ii(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xt===null?bt.memoizedState=Xt=t:Xt=Xt.next=t,Xt}function Hn(){if(zt===null){var t=bt.alternate;t=t!==null?t.memoizedState:null}else t=zt.next;var e=Xt===null?bt.memoizedState:Xt.next;if(e!==null)Xt=e,zt=t;else{if(t===null)throw Error(le(310));zt=t,t={memoizedState:zt.memoizedState,baseState:zt.baseState,baseQueue:zt.baseQueue,queue:zt.queue,next:null},Xt===null?bt.memoizedState=Xt=t:Xt=Xt.next=t}return Xt}function ns(t,e){return typeof e=="function"?e(t):e}function Zu(t){var e=Hn(),n=e.queue;if(n===null)throw Error(le(311));n.lastRenderedReducer=t;var i=zt,r=i.baseQueue,o=n.pending;if(o!==null){if(r!==null){var a=r.next;r.next=o.next,o.next=a}i.baseQueue=r=o,n.pending=null}if(r!==null){o=r.next,i=i.baseState;var s=a=null,l=null,u=o;do{var c=u.lane;if((Vr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=f,a=i):l=l.next=f,bt.lanes|=c,Gr|=c}u=u.next}while(u!==null&&u!==o);l===null?a=i:l.next=s,ti(i,e.memoizedState)||(mn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do o=r.lane,bt.lanes|=o,Gr|=o,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Qu(t){var e=Hn(),n=e.queue;if(n===null)throw Error(le(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,o=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do o=t(o,a.action),a=a.next;while(a!==r);ti(o,e.memoizedState)||(mn=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,i]}function wv(){}function Av(t,e){var n=bt,i=Hn(),r=e(),o=!ti(i.memoizedState,r);if(o&&(i.memoizedState=r,mn=!0),i=i.queue,Md(Pv.bind(null,n,i,t),[t]),i.getSnapshot!==e||o||Xt!==null&&Xt.memoizedState.tag&1){if(n.flags|=2048,is(9,Cv.bind(null,n,i,r,e),void 0,null),jt===null)throw Error(le(349));Vr&30||Rv(n,e,r)}return r}function Rv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=bt.updateQueue,e===null?(e={lastEffect:null,stores:null},bt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Cv(t,e,n,i){e.value=n,e.getSnapshot=i,bv(e)&&Lv(t)}function Pv(t,e,n){return n(function(){bv(e)&&Lv(t)})}function bv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ti(t,n)}catch{return!0}}function Lv(t){var e=Ri(t,1);e!==null&&Jn(e,t,1,-1)}function Oh(t){var e=ii();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ns,lastRenderedState:t},e.queue=t,t=t.dispatch=uy.bind(null,bt,t),[e.memoizedState,t]}function is(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=bt.updateQueue,e===null?(e={lastEffect:null,stores:null},bt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Dv(){return Hn().memoizedState}function gl(t,e,n,i){var r=ii();bt.flags|=t,r.memoizedState=is(1|e,n,void 0,i===void 0?null:i)}function du(t,e,n,i){var r=Hn();i=i===void 0?null:i;var o=void 0;if(zt!==null){var a=zt.memoizedState;if(o=a.destroy,i!==null&&xd(i,a.deps)){r.memoizedState=is(e,n,o,i);return}}bt.flags|=t,r.memoizedState=is(1|e,n,o,i)}function kh(t,e){return gl(8390656,8,t,e)}function Md(t,e){return du(2048,8,t,e)}function Uv(t,e){return du(4,2,t,e)}function Nv(t,e){return du(4,4,t,e)}function Iv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Fv(t,e,n){return n=n!=null?n.concat([t]):null,du(4,4,Iv.bind(null,e,t),n)}function Ed(){}function Ov(t,e){var n=Hn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&xd(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function kv(t,e){var n=Hn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&xd(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function zv(t,e,n){return Vr&21?(ti(n,e)||(n=Wg(),bt.lanes|=n,Gr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,mn=!0),t.memoizedState=n)}function sy(t,e){var n=pt;pt=n!==0&&4>n?n:4,t(!0);var i=Ku.transition;Ku.transition={};try{t(!1),e()}finally{pt=n,Ku.transition=i}}function Bv(){return Hn().memoizedState}function ly(t,e,n){var i=rr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Hv(t))Vv(e,n);else if(n=Mv(t,e,n,i),n!==null){var r=fn();Jn(n,t,i,r),Gv(n,e,i)}}function uy(t,e,n){var i=rr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Hv(t))Vv(e,r);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var a=e.lastRenderedState,s=o(a,n);if(r.hasEagerState=!0,r.eagerState=s,ti(s,a)){var l=e.interleaved;l===null?(r.next=r,pd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Mv(t,e,r,i),n!==null&&(r=fn(),Jn(n,t,i,r),Gv(n,e,i))}}function Hv(t){var e=t.alternate;return t===bt||e!==null&&e===bt}function Vv(t,e){Ia=Bl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Gv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,ed(t,n)}}var Hl={readContext:Bn,useCallback:Qt,useContext:Qt,useEffect:Qt,useImperativeHandle:Qt,useInsertionEffect:Qt,useLayoutEffect:Qt,useMemo:Qt,useReducer:Qt,useRef:Qt,useState:Qt,useDebugValue:Qt,useDeferredValue:Qt,useTransition:Qt,useMutableSource:Qt,useSyncExternalStore:Qt,useId:Qt,unstable_isNewReconciler:!1},cy={readContext:Bn,useCallback:function(t,e){return ii().memoizedState=[t,e===void 0?null:e],t},useContext:Bn,useEffect:kh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,gl(4194308,4,Iv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return gl(4194308,4,t,e)},useInsertionEffect:function(t,e){return gl(4,2,t,e)},useMemo:function(t,e){var n=ii();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ii();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=ly.bind(null,bt,t),[i.memoizedState,t]},useRef:function(t){var e=ii();return t={current:t},e.memoizedState=t},useState:Oh,useDebugValue:Ed,useDeferredValue:function(t){return ii().memoizedState=t},useTransition:function(){var t=Oh(!1),e=t[0];return t=sy.bind(null,t[1]),ii().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=bt,r=ii();if(At){if(n===void 0)throw Error(le(407));n=n()}else{if(n=e(),jt===null)throw Error(le(349));Vr&30||Rv(i,e,n)}r.memoizedState=n;var o={value:n,getSnapshot:e};return r.queue=o,kh(Pv.bind(null,i,o,t),[t]),i.flags|=2048,is(9,Cv.bind(null,i,o,n,e),void 0,null),n},useId:function(){var t=ii(),e=jt.identifierPrefix;if(At){var n=Mi,i=Si;n=(i&~(1<<32-Qn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ts++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=ay++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},fy={readContext:Bn,useCallback:Ov,useContext:Bn,useEffect:Md,useImperativeHandle:Fv,useInsertionEffect:Uv,useLayoutEffect:Nv,useMemo:kv,useReducer:Zu,useRef:Dv,useState:function(){return Zu(ns)},useDebugValue:Ed,useDeferredValue:function(t){var e=Hn();return zv(e,zt.memoizedState,t)},useTransition:function(){var t=Zu(ns)[0],e=Hn().memoizedState;return[t,e]},useMutableSource:wv,useSyncExternalStore:Av,useId:Bv,unstable_isNewReconciler:!1},dy={readContext:Bn,useCallback:Ov,useContext:Bn,useEffect:Md,useImperativeHandle:Fv,useInsertionEffect:Uv,useLayoutEffect:Nv,useMemo:kv,useReducer:Qu,useRef:Dv,useState:function(){return Qu(ns)},useDebugValue:Ed,useDeferredValue:function(t){var e=Hn();return zt===null?e.memoizedState=t:zv(e,zt.memoizedState,t)},useTransition:function(){var t=Qu(ns)[0],e=Hn().memoizedState;return[t,e]},useMutableSource:wv,useSyncExternalStore:Av,useId:Bv,unstable_isNewReconciler:!1};function jn(t,e){if(t&&t.defaultProps){e=Lt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function vf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Lt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var hu={isMounted:function(t){return(t=t._reactInternals)?qr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=fn(),r=rr(t),o=Ti(i,r);o.payload=e,n!=null&&(o.callback=n),e=nr(t,o,r),e!==null&&(Jn(e,t,r,i),pl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=fn(),r=rr(t),o=Ti(i,r);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=nr(t,o,r),e!==null&&(Jn(e,t,r,i),pl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=fn(),i=rr(t),r=Ti(n,i);r.tag=2,e!=null&&(r.callback=e),e=nr(t,r,i),e!==null&&(Jn(e,t,i,n),pl(e,t,i))}};function zh(t,e,n,i,r,o,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,o,a):e.prototype&&e.prototype.isPureReactComponent?!qa(n,i)||!qa(r,o):!0}function Wv(t,e,n){var i=!1,r=cr,o=e.contextType;return typeof o=="object"&&o!==null?o=Bn(o):(r=vn(e)?Br:on.current,i=e.contextTypes,o=(i=i!=null)?Wo(t,r):cr),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=hu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=o),e}function Bh(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&hu.enqueueReplaceState(e,e.state,null)}function _f(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},md(t);var o=e.contextType;typeof o=="object"&&o!==null?r.context=Bn(o):(o=vn(e)?Br:on.current,r.context=Wo(t,o)),r.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(vf(t,e,o,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&hu.enqueueReplaceState(r,r.state,null),kl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function $o(t,e){try{var n="",i=e;do n+=B0(i),i=i.return;while(i);var r=n}catch(o){r=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:r,digest:null}}function Ju(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function xf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var hy=typeof WeakMap=="function"?WeakMap:Map;function Xv(t,e,n){n=Ti(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Gl||(Gl=!0,Pf=i),xf(t,e)},n}function jv(t,e,n){n=Ti(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){xf(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){xf(t,e),typeof i!="function"&&(ir===null?ir=new Set([this]):ir.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Hh(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new hy;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Ry.bind(null,t,e,n),e.then(t,t))}function Vh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Gh(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ti(-1,1),e.tag=2,nr(n,e,1))),n.lanes|=1),t)}var py=Li.ReactCurrentOwner,mn=!1;function cn(t,e,n,i){e.child=t===null?Sv(e,null,n,i):jo(e,t.child,n,i)}function Wh(t,e,n,i,r){n=n.render;var o=e.ref;return ko(e,r),i=yd(t,e,n,i,o,r),n=Sd(),t!==null&&!mn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ci(t,e,r)):(At&&n&&ld(e),e.flags|=1,cn(t,e,i,r),e.child)}function Xh(t,e,n,i,r){if(t===null){var o=n.type;return typeof o=="function"&&!Ld(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,Yv(t,e,o,i,r)):(t=yl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&r)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:qa,n(a,i)&&t.ref===e.ref)return Ci(t,e,r)}return e.flags|=1,t=or(o,i),t.ref=e.ref,t.return=e,e.child=t}function Yv(t,e,n,i,r){if(t!==null){var o=t.memoizedProps;if(qa(o,i)&&t.ref===e.ref)if(mn=!1,e.pendingProps=i=o,(t.lanes&r)!==0)t.flags&131072&&(mn=!0);else return e.lanes=t.lanes,Ci(t,e,r)}return yf(t,e,n,i,r)}function $v(t,e,n){var i=e.pendingProps,r=i.children,o=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},xt(Do,Tn),Tn|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,xt(Do,Tn),Tn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=o!==null?o.baseLanes:n,xt(Do,Tn),Tn|=i}else o!==null?(i=o.baseLanes|n,e.memoizedState=null):i=n,xt(Do,Tn),Tn|=i;return cn(t,e,r,n),e.child}function qv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function yf(t,e,n,i,r){var o=vn(n)?Br:on.current;return o=Wo(e,o),ko(e,r),n=yd(t,e,n,i,o,r),i=Sd(),t!==null&&!mn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ci(t,e,r)):(At&&i&&ld(e),e.flags|=1,cn(t,e,n,r),e.child)}function jh(t,e,n,i,r){if(vn(n)){var o=!0;Ul(e)}else o=!1;if(ko(e,r),e.stateNode===null)vl(t,e),Wv(e,n,i),_f(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,s=e.memoizedProps;a.props=s;var l=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Bn(u):(u=vn(n)?Br:on.current,u=Wo(e,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==i||l!==u)&&Bh(e,a,i,u),Wi=!1;var h=e.memoizedState;a.state=h,kl(e,i,a,r),l=e.memoizedState,s!==i||h!==l||gn.current||Wi?(typeof c=="function"&&(vf(e,n,c,i),l=e.memoizedState),(s=Wi||zh(e,n,s,i,h,l,u))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=u,i=s):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,Ev(t,e),s=e.memoizedProps,u=e.type===e.elementType?s:jn(e.type,s),a.props=u,f=e.pendingProps,h=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Bn(l):(l=vn(n)?Br:on.current,l=Wo(e,l));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==f||h!==l)&&Bh(e,a,i,l),Wi=!1,h=e.memoizedState,a.state=h,kl(e,i,a,r);var _=e.memoizedState;s!==f||h!==_||gn.current||Wi?(typeof m=="function"&&(vf(e,n,m,i),_=e.memoizedState),(u=Wi||zh(e,n,u,i,h,_,l)||!1)?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,_,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,_,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),a.props=i,a.state=_,a.context=l,i=u):(typeof a.componentDidUpdate!="function"||s===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Sf(t,e,n,i,o,r)}function Sf(t,e,n,i,r,o){qv(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Lh(e,n,!1),Ci(t,e,o);i=e.stateNode,py.current=e;var s=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=jo(e,t.child,null,o),e.child=jo(e,null,s,o)):cn(t,e,s,o),e.memoizedState=i.state,r&&Lh(e,n,!0),e.child}function Kv(t){var e=t.stateNode;e.pendingContext?bh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&bh(t,e.context,!1),gd(t,e.containerInfo)}function Yh(t,e,n,i,r){return Xo(),cd(r),e.flags|=256,cn(t,e,n,i),e.child}var Mf={dehydrated:null,treeContext:null,retryLane:0};function Ef(t){return{baseLanes:t,cachePool:null,transitions:null}}function Zv(t,e,n){var i=e.pendingProps,r=Pt.current,o=!1,a=(e.flags&128)!==0,s;if((s=a)||(s=t!==null&&t.memoizedState===null?!1:(r&2)!==0),s?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),xt(Pt,r&1),t===null)return mf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,o?(i=e.mode,o=e.child,a={mode:"hidden",children:a},!(i&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=gu(a,i,0,null),t=zr(t,i,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=Ef(n),e.memoizedState=Mf,t):Td(e,a));if(r=t.memoizedState,r!==null&&(s=r.dehydrated,s!==null))return my(t,e,a,i,s,r,n);if(o){o=i.fallback,a=e.mode,r=t.child,s=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=or(r,l),i.subtreeFlags=r.subtreeFlags&14680064),s!==null?o=or(s,o):(o=zr(o,a,n,null),o.flags|=2),o.return=e,i.return=e,i.sibling=o,e.child=i,i=o,o=e.child,a=t.child.memoizedState,a=a===null?Ef(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=t.childLanes&~n,e.memoizedState=Mf,i}return o=t.child,t=o.sibling,i=or(o,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Td(t,e){return e=gu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Us(t,e,n,i){return i!==null&&cd(i),jo(e,t.child,null,n),t=Td(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function my(t,e,n,i,r,o,a){if(n)return e.flags&256?(e.flags&=-257,i=Ju(Error(le(422))),Us(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=i.fallback,r=e.mode,i=gu({mode:"visible",children:i.children},r,0,null),o=zr(o,r,a,null),o.flags|=2,i.return=e,o.return=e,i.sibling=o,e.child=i,e.mode&1&&jo(e,t.child,null,a),e.child.memoizedState=Ef(a),e.memoizedState=Mf,o);if(!(e.mode&1))return Us(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var s=i.dgst;return i=s,o=Error(le(419)),i=Ju(o,i,void 0),Us(t,e,a,i)}if(s=(a&t.childLanes)!==0,mn||s){if(i=jt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==o.retryLane&&(o.retryLane=r,Ri(t,r),Jn(i,t,r,-1))}return bd(),i=Ju(Error(le(421))),Us(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Cy.bind(null,t),r._reactRetry=e,null):(t=o.treeContext,An=tr(r.nextSibling),Rn=e,At=!0,qn=null,t!==null&&(Nn[In++]=Si,Nn[In++]=Mi,Nn[In++]=Hr,Si=t.id,Mi=t.overflow,Hr=e),e=Td(e,i.children),e.flags|=4096,e)}function $h(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),gf(t.return,e,n)}function ec(t,e,n,i,r){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=n,o.tailMode=r)}function Qv(t,e,n){var i=e.pendingProps,r=i.revealOrder,o=i.tail;if(cn(t,e,i.children,n),i=Pt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&$h(t,n,e);else if(t.tag===19)$h(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(xt(Pt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&zl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),ec(e,!1,r,n,o);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&zl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}ec(e,!0,n,null,o);break;case"together":ec(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function vl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ci(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Gr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(le(153));if(e.child!==null){for(t=e.child,n=or(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=or(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function gy(t,e,n){switch(e.tag){case 3:Kv(e),Xo();break;case 5:Tv(e);break;case 1:vn(e.type)&&Ul(e);break;case 4:gd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;xt(Fl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(xt(Pt,Pt.current&1),e.flags|=128,null):n&e.child.childLanes?Zv(t,e,n):(xt(Pt,Pt.current&1),t=Ci(t,e,n),t!==null?t.sibling:null);xt(Pt,Pt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Qv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),xt(Pt,Pt.current),i)break;return null;case 22:case 23:return e.lanes=0,$v(t,e,n)}return Ci(t,e,n)}var Jv,Tf,e_,t_;Jv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Tf=function(){};e_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Ur(fi.current);var o=null;switch(n){case"input":r=Xc(t,r),i=Xc(t,i),o=[];break;case"select":r=Lt({},r,{value:void 0}),i=Lt({},i,{value:void 0}),o=[];break;case"textarea":r=$c(t,r),i=$c(t,i),o=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Ll)}Kc(n,i);var a;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var s=r[u];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Va.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in i){var l=i[u];if(s=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(a in s)!s.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&s[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Va.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Mt("scroll",t),o||s===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(e.updateQueue=u)&&(e.flags|=4)}};t_=function(t,e,n,i){n!==i&&(e.flags|=4)};function pa(t,e){if(!At)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Jt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function vy(t,e,n){var i=e.pendingProps;switch(ud(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Jt(e),null;case 1:return vn(e.type)&&Dl(),Jt(e),null;case 3:return i=e.stateNode,Yo(),Tt(gn),Tt(on),_d(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Ls(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,qn!==null&&(Df(qn),qn=null))),Tf(t,e),Jt(e),null;case 5:vd(e);var r=Ur(es.current);if(n=e.type,t!==null&&e.stateNode!=null)e_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(le(166));return Jt(e),null}if(t=Ur(fi.current),Ls(e)){i=e.stateNode,n=e.type;var o=e.memoizedProps;switch(i[ai]=e,i[Qa]=o,t=(e.mode&1)!==0,n){case"dialog":Mt("cancel",i),Mt("close",i);break;case"iframe":case"object":case"embed":Mt("load",i);break;case"video":case"audio":for(r=0;r<Ra.length;r++)Mt(Ra[r],i);break;case"source":Mt("error",i);break;case"img":case"image":case"link":Mt("error",i),Mt("load",i);break;case"details":Mt("toggle",i);break;case"input":ih(i,o),Mt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},Mt("invalid",i);break;case"textarea":oh(i,o),Mt("invalid",i)}Kc(n,o),r=null;for(var a in o)if(o.hasOwnProperty(a)){var s=o[a];a==="children"?typeof s=="string"?i.textContent!==s&&(o.suppressHydrationWarning!==!0&&bs(i.textContent,s,t),r=["children",s]):typeof s=="number"&&i.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&bs(i.textContent,s,t),r=["children",""+s]):Va.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&Mt("scroll",i)}switch(n){case"input":Ms(i),rh(i,o,!0);break;case"textarea":Ms(i),ah(i);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(i.onclick=Ll)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Pg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[ai]=e,t[Qa]=i,Jv(t,e,!1,!1),e.stateNode=t;e:{switch(a=Zc(n,i),n){case"dialog":Mt("cancel",t),Mt("close",t),r=i;break;case"iframe":case"object":case"embed":Mt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Ra.length;r++)Mt(Ra[r],t);r=i;break;case"source":Mt("error",t),r=i;break;case"img":case"image":case"link":Mt("error",t),Mt("load",t),r=i;break;case"details":Mt("toggle",t),r=i;break;case"input":ih(t,i),r=Xc(t,i),Mt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Lt({},i,{value:void 0}),Mt("invalid",t);break;case"textarea":oh(t,i),r=$c(t,i),Mt("invalid",t);break;default:r=i}Kc(n,r),s=r;for(o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="style"?Dg(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&bg(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ga(t,l):typeof l=="number"&&Ga(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Va.hasOwnProperty(o)?l!=null&&o==="onScroll"&&Mt("scroll",t):l!=null&&$f(t,o,l,a))}switch(n){case"input":Ms(t),rh(t,i,!1);break;case"textarea":Ms(t),ah(t);break;case"option":i.value!=null&&t.setAttribute("value",""+ur(i.value));break;case"select":t.multiple=!!i.multiple,o=i.value,o!=null?No(t,!!i.multiple,o,!1):i.defaultValue!=null&&No(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Ll)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Jt(e),null;case 6:if(t&&e.stateNode!=null)t_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(le(166));if(n=Ur(es.current),Ur(fi.current),Ls(e)){if(i=e.stateNode,n=e.memoizedProps,i[ai]=e,(o=i.nodeValue!==n)&&(t=Rn,t!==null))switch(t.tag){case 3:bs(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&bs(i.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ai]=e,e.stateNode=i}return Jt(e),null;case 13:if(Tt(Pt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(At&&An!==null&&e.mode&1&&!(e.flags&128))xv(),Xo(),e.flags|=98560,o=!1;else if(o=Ls(e),i!==null&&i.dehydrated!==null){if(t===null){if(!o)throw Error(le(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(le(317));o[ai]=e}else Xo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Jt(e),o=!1}else qn!==null&&(Df(qn),qn=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Pt.current&1?Bt===0&&(Bt=3):bd())),e.updateQueue!==null&&(e.flags|=4),Jt(e),null);case 4:return Yo(),Tf(t,e),t===null&&Ka(e.stateNode.containerInfo),Jt(e),null;case 10:return hd(e.type._context),Jt(e),null;case 17:return vn(e.type)&&Dl(),Jt(e),null;case 19:if(Tt(Pt),o=e.memoizedState,o===null)return Jt(e),null;if(i=(e.flags&128)!==0,a=o.rendering,a===null)if(i)pa(o,!1);else{if(Bt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=zl(t),a!==null){for(e.flags|=128,pa(o,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)o=n,t=i,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,t=a.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return xt(Pt,Pt.current&1|2),e.child}t=t.sibling}o.tail!==null&&Nt()>qo&&(e.flags|=128,i=!0,pa(o,!1),e.lanes=4194304)}else{if(!i)if(t=zl(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),pa(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!At)return Jt(e),null}else 2*Nt()-o.renderingStartTime>qo&&n!==1073741824&&(e.flags|=128,i=!0,pa(o,!1),e.lanes=4194304);o.isBackwards?(a.sibling=e.child,e.child=a):(n=o.last,n!==null?n.sibling=a:e.child=a,o.last=a)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Nt(),e.sibling=null,n=Pt.current,xt(Pt,i?n&1|2:n&1),e):(Jt(e),null);case 22:case 23:return Pd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Tn&1073741824&&(Jt(e),e.subtreeFlags&6&&(e.flags|=8192)):Jt(e),null;case 24:return null;case 25:return null}throw Error(le(156,e.tag))}function _y(t,e){switch(ud(e),e.tag){case 1:return vn(e.type)&&Dl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Yo(),Tt(gn),Tt(on),_d(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return vd(e),null;case 13:if(Tt(Pt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(le(340));Xo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Tt(Pt),null;case 4:return Yo(),null;case 10:return hd(e.type._context),null;case 22:case 23:return Pd(),null;case 24:return null;default:return null}}var Ns=!1,nn=!1,xy=typeof WeakSet=="function"?WeakSet:Set,Ee=null;function Lo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Ut(t,e,i)}else n.current=null}function wf(t,e,n){try{n()}catch(i){Ut(t,e,i)}}var qh=!1;function yy(t,e){if(lf=Cl,t=av(),sd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,s=-1,l=-1,u=0,c=0,f=t,h=null;t:for(;;){for(var m;f!==n||r!==0&&f.nodeType!==3||(s=a+r),f!==o||i!==0&&f.nodeType!==3||(l=a+i),f.nodeType===3&&(a+=f.nodeValue.length),(m=f.firstChild)!==null;)h=f,f=m;for(;;){if(f===t)break t;if(h===n&&++u===r&&(s=a),h===o&&++c===i&&(l=a),(m=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=m}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(uf={focusedElem:t,selectionRange:n},Cl=!1,Ee=e;Ee!==null;)if(e=Ee,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ee=t;else for(;Ee!==null;){e=Ee;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var x=_.memoizedProps,p=_.memoizedState,d=e.stateNode,g=d.getSnapshotBeforeUpdate(e.elementType===e.type?x:jn(e.type,x),p);d.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(le(163))}}catch(w){Ut(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,Ee=t;break}Ee=e.return}return _=qh,qh=!1,_}function Fa(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var o=r.destroy;r.destroy=void 0,o!==void 0&&wf(e,n,o)}r=r.next}while(r!==i)}}function pu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Af(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function n_(t){var e=t.alternate;e!==null&&(t.alternate=null,n_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ai],delete e[Qa],delete e[df],delete e[ny],delete e[iy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function i_(t){return t.tag===5||t.tag===3||t.tag===4}function Kh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||i_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Rf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ll));else if(i!==4&&(t=t.child,t!==null))for(Rf(t,e,n),t=t.sibling;t!==null;)Rf(t,e,n),t=t.sibling}function Cf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Cf(t,e,n),t=t.sibling;t!==null;)Cf(t,e,n),t=t.sibling}var Yt=null,Yn=!1;function Ii(t,e,n){for(n=n.child;n!==null;)r_(t,e,n),n=n.sibling}function r_(t,e,n){if(ci&&typeof ci.onCommitFiberUnmount=="function")try{ci.onCommitFiberUnmount(au,n)}catch{}switch(n.tag){case 5:nn||Lo(n,e);case 6:var i=Yt,r=Yn;Yt=null,Ii(t,e,n),Yt=i,Yn=r,Yt!==null&&(Yn?(t=Yt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Yt.removeChild(n.stateNode));break;case 18:Yt!==null&&(Yn?(t=Yt,n=n.stateNode,t.nodeType===8?Yu(t.parentNode,n):t.nodeType===1&&Yu(t,n),Ya(t)):Yu(Yt,n.stateNode));break;case 4:i=Yt,r=Yn,Yt=n.stateNode.containerInfo,Yn=!0,Ii(t,e,n),Yt=i,Yn=r;break;case 0:case 11:case 14:case 15:if(!nn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var o=r,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&wf(n,e,a),r=r.next}while(r!==i)}Ii(t,e,n);break;case 1:if(!nn&&(Lo(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(s){Ut(n,e,s)}Ii(t,e,n);break;case 21:Ii(t,e,n);break;case 22:n.mode&1?(nn=(i=nn)||n.memoizedState!==null,Ii(t,e,n),nn=i):Ii(t,e,n);break;default:Ii(t,e,n)}}function Zh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new xy),e.forEach(function(i){var r=Py.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Vn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var o=t,a=e,s=a;e:for(;s!==null;){switch(s.tag){case 5:Yt=s.stateNode,Yn=!1;break e;case 3:Yt=s.stateNode.containerInfo,Yn=!0;break e;case 4:Yt=s.stateNode.containerInfo,Yn=!0;break e}s=s.return}if(Yt===null)throw Error(le(160));r_(o,a,r),Yt=null,Yn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){Ut(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)o_(e,t),e=e.sibling}function o_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Vn(e,t),ni(t),i&4){try{Fa(3,t,t.return),pu(3,t)}catch(x){Ut(t,t.return,x)}try{Fa(5,t,t.return)}catch(x){Ut(t,t.return,x)}}break;case 1:Vn(e,t),ni(t),i&512&&n!==null&&Lo(n,n.return);break;case 5:if(Vn(e,t),ni(t),i&512&&n!==null&&Lo(n,n.return),t.flags&32){var r=t.stateNode;try{Ga(r,"")}catch(x){Ut(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var o=t.memoizedProps,a=n!==null?n.memoizedProps:o,s=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&Rg(r,o),Zc(s,a);var u=Zc(s,o);for(a=0;a<l.length;a+=2){var c=l[a],f=l[a+1];c==="style"?Dg(r,f):c==="dangerouslySetInnerHTML"?bg(r,f):c==="children"?Ga(r,f):$f(r,c,f,u)}switch(s){case"input":jc(r,o);break;case"textarea":Cg(r,o);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m!=null?No(r,!!o.multiple,m,!1):h!==!!o.multiple&&(o.defaultValue!=null?No(r,!!o.multiple,o.defaultValue,!0):No(r,!!o.multiple,o.multiple?[]:"",!1))}r[Qa]=o}catch(x){Ut(t,t.return,x)}}break;case 6:if(Vn(e,t),ni(t),i&4){if(t.stateNode===null)throw Error(le(162));r=t.stateNode,o=t.memoizedProps;try{r.nodeValue=o}catch(x){Ut(t,t.return,x)}}break;case 3:if(Vn(e,t),ni(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ya(e.containerInfo)}catch(x){Ut(t,t.return,x)}break;case 4:Vn(e,t),ni(t);break;case 13:Vn(e,t),ni(t),r=t.child,r.flags&8192&&(o=r.memoizedState!==null,r.stateNode.isHidden=o,!o||r.alternate!==null&&r.alternate.memoizedState!==null||(Rd=Nt())),i&4&&Zh(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(nn=(u=nn)||c,Vn(e,t),nn=u):Vn(e,t),ni(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(Ee=t,c=t.child;c!==null;){for(f=Ee=c;Ee!==null;){switch(h=Ee,m=h.child,h.tag){case 0:case 11:case 14:case 15:Fa(4,h,h.return);break;case 1:Lo(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(x){Ut(i,n,x)}}break;case 5:Lo(h,h.return);break;case 22:if(h.memoizedState!==null){Jh(f);continue}}m!==null?(m.return=h,Ee=m):Jh(f)}c=c.sibling}e:for(c=null,f=t;;){if(f.tag===5){if(c===null){c=f;try{r=f.stateNode,u?(o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=f.stateNode,l=f.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=Lg("display",a))}catch(x){Ut(t,t.return,x)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(x){Ut(t,t.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Vn(e,t),ni(t),i&4&&Zh(t);break;case 21:break;default:Vn(e,t),ni(t)}}function ni(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(i_(n)){var i=n;break e}n=n.return}throw Error(le(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ga(r,""),i.flags&=-33);var o=Kh(t);Cf(t,o,r);break;case 3:case 4:var a=i.stateNode.containerInfo,s=Kh(t);Rf(t,s,a);break;default:throw Error(le(161))}}catch(l){Ut(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Sy(t,e,n){Ee=t,a_(t)}function a_(t,e,n){for(var i=(t.mode&1)!==0;Ee!==null;){var r=Ee,o=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||Ns;if(!a){var s=r.alternate,l=s!==null&&s.memoizedState!==null||nn;s=Ns;var u=nn;if(Ns=a,(nn=l)&&!u)for(Ee=r;Ee!==null;)a=Ee,l=a.child,a.tag===22&&a.memoizedState!==null?ep(r):l!==null?(l.return=a,Ee=l):ep(r);for(;o!==null;)Ee=o,a_(o),o=o.sibling;Ee=r,Ns=s,nn=u}Qh(t)}else r.subtreeFlags&8772&&o!==null?(o.return=r,Ee=o):Qh(t)}}function Qh(t){for(;Ee!==null;){var e=Ee;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:nn||pu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!nn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:jn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&Fh(e,o,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Fh(e,a,n)}break;case 5:var s=e.stateNode;if(n===null&&e.flags&4){n=s;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&Ya(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(le(163))}nn||e.flags&512&&Af(e)}catch(h){Ut(e,e.return,h)}}if(e===t){Ee=null;break}if(n=e.sibling,n!==null){n.return=e.return,Ee=n;break}Ee=e.return}}function Jh(t){for(;Ee!==null;){var e=Ee;if(e===t){Ee=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Ee=n;break}Ee=e.return}}function ep(t){for(;Ee!==null;){var e=Ee;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{pu(4,e)}catch(l){Ut(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Ut(e,r,l)}}var o=e.return;try{Af(e)}catch(l){Ut(e,o,l)}break;case 5:var a=e.return;try{Af(e)}catch(l){Ut(e,a,l)}}}catch(l){Ut(e,e.return,l)}if(e===t){Ee=null;break}var s=e.sibling;if(s!==null){s.return=e.return,Ee=s;break}Ee=e.return}}var My=Math.ceil,Vl=Li.ReactCurrentDispatcher,wd=Li.ReactCurrentOwner,zn=Li.ReactCurrentBatchConfig,ct=0,jt=null,Ot=null,Kt=0,Tn=0,Do=pr(0),Bt=0,rs=null,Gr=0,mu=0,Ad=0,Oa=null,pn=null,Rd=0,qo=1/0,xi=null,Gl=!1,Pf=null,ir=null,Is=!1,Ki=null,Wl=0,ka=0,bf=null,_l=-1,xl=0;function fn(){return ct&6?Nt():_l!==-1?_l:_l=Nt()}function rr(t){return t.mode&1?ct&2&&Kt!==0?Kt&-Kt:oy.transition!==null?(xl===0&&(xl=Wg()),xl):(t=pt,t!==0||(t=window.event,t=t===void 0?16:Zg(t.type)),t):1}function Jn(t,e,n,i){if(50<ka)throw ka=0,bf=null,Error(le(185));us(t,n,i),(!(ct&2)||t!==jt)&&(t===jt&&(!(ct&2)&&(mu|=n),Bt===4&&Yi(t,Kt)),_n(t,i),n===1&&ct===0&&!(e.mode&1)&&(qo=Nt()+500,fu&&mr()))}function _n(t,e){var n=t.callbackNode;ox(t,e);var i=Rl(t,t===jt?Kt:0);if(i===0)n!==null&&uh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&uh(n),e===1)t.tag===0?ry(tp.bind(null,t)):gv(tp.bind(null,t)),ey(function(){!(ct&6)&&mr()}),n=null;else{switch(Xg(i)){case 1:n=Jf;break;case 4:n=Vg;break;case 16:n=Al;break;case 536870912:n=Gg;break;default:n=Al}n=p_(n,s_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function s_(t,e){if(_l=-1,xl=0,ct&6)throw Error(le(327));var n=t.callbackNode;if(zo()&&t.callbackNode!==n)return null;var i=Rl(t,t===jt?Kt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Xl(t,i);else{e=i;var r=ct;ct|=2;var o=u_();(jt!==t||Kt!==e)&&(xi=null,qo=Nt()+500,kr(t,e));do try{wy();break}catch(s){l_(t,s)}while(!0);dd(),Vl.current=o,ct=r,Ot!==null?e=0:(jt=null,Kt=0,e=Bt)}if(e!==0){if(e===2&&(r=nf(t),r!==0&&(i=r,e=Lf(t,r))),e===1)throw n=rs,kr(t,0),Yi(t,i),_n(t,Nt()),n;if(e===6)Yi(t,i);else{if(r=t.current.alternate,!(i&30)&&!Ey(r)&&(e=Xl(t,i),e===2&&(o=nf(t),o!==0&&(i=o,e=Lf(t,o))),e===1))throw n=rs,kr(t,0),Yi(t,i),_n(t,Nt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(le(345));case 2:Ar(t,pn,xi);break;case 3:if(Yi(t,i),(i&130023424)===i&&(e=Rd+500-Nt(),10<e)){if(Rl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){fn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=ff(Ar.bind(null,t,pn,xi),e);break}Ar(t,pn,xi);break;case 4:if(Yi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-Qn(i);o=1<<a,a=e[a],a>r&&(r=a),i&=~o}if(i=r,i=Nt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*My(i/1960))-i,10<i){t.timeoutHandle=ff(Ar.bind(null,t,pn,xi),i);break}Ar(t,pn,xi);break;case 5:Ar(t,pn,xi);break;default:throw Error(le(329))}}}return _n(t,Nt()),t.callbackNode===n?s_.bind(null,t):null}function Lf(t,e){var n=Oa;return t.current.memoizedState.isDehydrated&&(kr(t,e).flags|=256),t=Xl(t,e),t!==2&&(e=pn,pn=n,e!==null&&Df(e)),t}function Df(t){pn===null?pn=t:pn.push.apply(pn,t)}function Ey(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],o=r.getSnapshot;r=r.value;try{if(!ti(o(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Yi(t,e){for(e&=~Ad,e&=~mu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Qn(e),i=1<<n;t[n]=-1,e&=~i}}function tp(t){if(ct&6)throw Error(le(327));zo();var e=Rl(t,0);if(!(e&1))return _n(t,Nt()),null;var n=Xl(t,e);if(t.tag!==0&&n===2){var i=nf(t);i!==0&&(e=i,n=Lf(t,i))}if(n===1)throw n=rs,kr(t,0),Yi(t,e),_n(t,Nt()),n;if(n===6)throw Error(le(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ar(t,pn,xi),_n(t,Nt()),null}function Cd(t,e){var n=ct;ct|=1;try{return t(e)}finally{ct=n,ct===0&&(qo=Nt()+500,fu&&mr())}}function Wr(t){Ki!==null&&Ki.tag===0&&!(ct&6)&&zo();var e=ct;ct|=1;var n=zn.transition,i=pt;try{if(zn.transition=null,pt=1,t)return t()}finally{pt=i,zn.transition=n,ct=e,!(ct&6)&&mr()}}function Pd(){Tn=Do.current,Tt(Do)}function kr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Jx(n)),Ot!==null)for(n=Ot.return;n!==null;){var i=n;switch(ud(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Dl();break;case 3:Yo(),Tt(gn),Tt(on),_d();break;case 5:vd(i);break;case 4:Yo();break;case 13:Tt(Pt);break;case 19:Tt(Pt);break;case 10:hd(i.type._context);break;case 22:case 23:Pd()}n=n.return}if(jt=t,Ot=t=or(t.current,null),Kt=Tn=e,Bt=0,rs=null,Ad=mu=Gr=0,pn=Oa=null,Dr!==null){for(e=0;e<Dr.length;e++)if(n=Dr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,o=n.pending;if(o!==null){var a=o.next;o.next=r,i.next=a}n.pending=i}Dr=null}return t}function l_(t,e){do{var n=Ot;try{if(dd(),ml.current=Hl,Bl){for(var i=bt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Bl=!1}if(Vr=0,Xt=zt=bt=null,Ia=!1,ts=0,wd.current=null,n===null||n.return===null){Bt=1,rs=e,Ot=null;break}e:{var o=t,a=n.return,s=n,l=e;if(e=Kt,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=s,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=Vh(a);if(m!==null){m.flags&=-257,Gh(m,a,s,o,e),m.mode&1&&Hh(o,u,e),e=m,l=u;var _=e.updateQueue;if(_===null){var x=new Set;x.add(l),e.updateQueue=x}else _.add(l);break e}else{if(!(e&1)){Hh(o,u,e),bd();break e}l=Error(le(426))}}else if(At&&s.mode&1){var p=Vh(a);if(p!==null){!(p.flags&65536)&&(p.flags|=256),Gh(p,a,s,o,e),cd($o(l,s));break e}}o=l=$o(l,s),Bt!==4&&(Bt=2),Oa===null?Oa=[o]:Oa.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var d=Xv(o,l,e);Ih(o,d);break e;case 1:s=l;var g=o.type,v=o.stateNode;if(!(o.flags&128)&&(typeof g.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(ir===null||!ir.has(v)))){o.flags|=65536,e&=-e,o.lanes|=e;var w=jv(o,s,e);Ih(o,w);break e}}o=o.return}while(o!==null)}f_(n)}catch(b){e=b,Ot===n&&n!==null&&(Ot=n=n.return);continue}break}while(!0)}function u_(){var t=Vl.current;return Vl.current=Hl,t===null?Hl:t}function bd(){(Bt===0||Bt===3||Bt===2)&&(Bt=4),jt===null||!(Gr&268435455)&&!(mu&268435455)||Yi(jt,Kt)}function Xl(t,e){var n=ct;ct|=2;var i=u_();(jt!==t||Kt!==e)&&(xi=null,kr(t,e));do try{Ty();break}catch(r){l_(t,r)}while(!0);if(dd(),ct=n,Vl.current=i,Ot!==null)throw Error(le(261));return jt=null,Kt=0,Bt}function Ty(){for(;Ot!==null;)c_(Ot)}function wy(){for(;Ot!==null&&!K0();)c_(Ot)}function c_(t){var e=h_(t.alternate,t,Tn);t.memoizedProps=t.pendingProps,e===null?f_(t):Ot=e,wd.current=null}function f_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=_y(n,e),n!==null){n.flags&=32767,Ot=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Bt=6,Ot=null;return}}else if(n=vy(n,e,Tn),n!==null){Ot=n;return}if(e=e.sibling,e!==null){Ot=e;return}Ot=e=t}while(e!==null);Bt===0&&(Bt=5)}function Ar(t,e,n){var i=pt,r=zn.transition;try{zn.transition=null,pt=1,Ay(t,e,n,i)}finally{zn.transition=r,pt=i}return null}function Ay(t,e,n,i){do zo();while(Ki!==null);if(ct&6)throw Error(le(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(le(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(ax(t,o),t===jt&&(Ot=jt=null,Kt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Is||(Is=!0,p_(Al,function(){return zo(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=zn.transition,zn.transition=null;var a=pt;pt=1;var s=ct;ct|=4,wd.current=null,yy(t,n),o_(n,t),jx(uf),Cl=!!lf,uf=lf=null,t.current=n,Sy(n),Z0(),ct=s,pt=a,zn.transition=o}else t.current=n;if(Is&&(Is=!1,Ki=t,Wl=r),o=t.pendingLanes,o===0&&(ir=null),ex(n.stateNode),_n(t,Nt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Gl)throw Gl=!1,t=Pf,Pf=null,t;return Wl&1&&t.tag!==0&&zo(),o=t.pendingLanes,o&1?t===bf?ka++:(ka=0,bf=t):ka=0,mr(),null}function zo(){if(Ki!==null){var t=Xg(Wl),e=zn.transition,n=pt;try{if(zn.transition=null,pt=16>t?16:t,Ki===null)var i=!1;else{if(t=Ki,Ki=null,Wl=0,ct&6)throw Error(le(331));var r=ct;for(ct|=4,Ee=t.current;Ee!==null;){var o=Ee,a=o.child;if(Ee.flags&16){var s=o.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(Ee=u;Ee!==null;){var c=Ee;switch(c.tag){case 0:case 11:case 15:Fa(8,c,o)}var f=c.child;if(f!==null)f.return=c,Ee=f;else for(;Ee!==null;){c=Ee;var h=c.sibling,m=c.return;if(n_(c),c===u){Ee=null;break}if(h!==null){h.return=m,Ee=h;break}Ee=m}}}var _=o.alternate;if(_!==null){var x=_.child;if(x!==null){_.child=null;do{var p=x.sibling;x.sibling=null,x=p}while(x!==null)}}Ee=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,Ee=a;else e:for(;Ee!==null;){if(o=Ee,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Fa(9,o,o.return)}var d=o.sibling;if(d!==null){d.return=o.return,Ee=d;break e}Ee=o.return}}var g=t.current;for(Ee=g;Ee!==null;){a=Ee;var v=a.child;if(a.subtreeFlags&2064&&v!==null)v.return=a,Ee=v;else e:for(a=g;Ee!==null;){if(s=Ee,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:pu(9,s)}}catch(b){Ut(s,s.return,b)}if(s===a){Ee=null;break e}var w=s.sibling;if(w!==null){w.return=s.return,Ee=w;break e}Ee=s.return}}if(ct=r,mr(),ci&&typeof ci.onPostCommitFiberRoot=="function")try{ci.onPostCommitFiberRoot(au,t)}catch{}i=!0}return i}finally{pt=n,zn.transition=e}}return!1}function np(t,e,n){e=$o(n,e),e=Xv(t,e,1),t=nr(t,e,1),e=fn(),t!==null&&(us(t,1,e),_n(t,e))}function Ut(t,e,n){if(t.tag===3)np(t,t,n);else for(;e!==null;){if(e.tag===3){np(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ir===null||!ir.has(i))){t=$o(n,t),t=jv(e,t,1),e=nr(e,t,1),t=fn(),e!==null&&(us(e,1,t),_n(e,t));break}}e=e.return}}function Ry(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=fn(),t.pingedLanes|=t.suspendedLanes&n,jt===t&&(Kt&n)===n&&(Bt===4||Bt===3&&(Kt&130023424)===Kt&&500>Nt()-Rd?kr(t,0):Ad|=n),_n(t,e)}function d_(t,e){e===0&&(t.mode&1?(e=ws,ws<<=1,!(ws&130023424)&&(ws=4194304)):e=1);var n=fn();t=Ri(t,e),t!==null&&(us(t,e,n),_n(t,n))}function Cy(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),d_(t,n)}function Py(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(le(314))}i!==null&&i.delete(e),d_(t,n)}var h_;h_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||gn.current)mn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return mn=!1,gy(t,e,n);mn=!!(t.flags&131072)}else mn=!1,At&&e.flags&1048576&&vv(e,Il,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;vl(t,e),t=e.pendingProps;var r=Wo(e,on.current);ko(e,n),r=yd(null,e,i,t,r,n);var o=Sd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,vn(i)?(o=!0,Ul(e)):o=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,md(e),r.updater=hu,e.stateNode=r,r._reactInternals=e,_f(e,i,t,n),e=Sf(null,e,i,!0,o,n)):(e.tag=0,At&&o&&ld(e),cn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(vl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Ly(i),t=jn(i,t),r){case 0:e=yf(null,e,i,t,n);break e;case 1:e=jh(null,e,i,t,n);break e;case 11:e=Wh(null,e,i,t,n);break e;case 14:e=Xh(null,e,i,jn(i.type,t),n);break e}throw Error(le(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),yf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),jh(t,e,i,r,n);case 3:e:{if(Kv(e),t===null)throw Error(le(387));i=e.pendingProps,o=e.memoizedState,r=o.element,Ev(t,e),kl(e,i,null,n);var a=e.memoizedState;if(i=a.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){r=$o(Error(le(423)),e),e=Yh(t,e,i,n,r);break e}else if(i!==r){r=$o(Error(le(424)),e),e=Yh(t,e,i,n,r);break e}else for(An=tr(e.stateNode.containerInfo.firstChild),Rn=e,At=!0,qn=null,n=Sv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Xo(),i===r){e=Ci(t,e,n);break e}cn(t,e,i,n)}e=e.child}return e;case 5:return Tv(e),t===null&&mf(e),i=e.type,r=e.pendingProps,o=t!==null?t.memoizedProps:null,a=r.children,cf(i,r)?a=null:o!==null&&cf(i,o)&&(e.flags|=32),qv(t,e),cn(t,e,a,n),e.child;case 6:return t===null&&mf(e),null;case 13:return Zv(t,e,n);case 4:return gd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=jo(e,null,i,n):cn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),Wh(t,e,i,r,n);case 7:return cn(t,e,e.pendingProps,n),e.child;case 8:return cn(t,e,e.pendingProps.children,n),e.child;case 12:return cn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,o=e.memoizedProps,a=r.value,xt(Fl,i._currentValue),i._currentValue=a,o!==null)if(ti(o.value,a)){if(o.children===r.children&&!gn.current){e=Ci(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var s=o.dependencies;if(s!==null){a=o.child;for(var l=s.firstContext;l!==null;){if(l.context===i){if(o.tag===1){l=Ti(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),gf(o.return,n,e),s.lanes|=n;break}l=l.next}}else if(o.tag===10)a=o.type===e.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(le(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),gf(a,n,e),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===e){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}cn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ko(e,n),r=Bn(r),i=i(r),e.flags|=1,cn(t,e,i,n),e.child;case 14:return i=e.type,r=jn(i,e.pendingProps),r=jn(i.type,r),Xh(t,e,i,r,n);case 15:return Yv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),vl(t,e),e.tag=1,vn(i)?(t=!0,Ul(e)):t=!1,ko(e,n),Wv(e,i,r),_f(e,i,r,n),Sf(null,e,i,!0,t,n);case 19:return Qv(t,e,n);case 22:return $v(t,e,n)}throw Error(le(156,e.tag))};function p_(t,e){return Hg(t,e)}function by(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function On(t,e,n,i){return new by(t,e,n,i)}function Ld(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ly(t){if(typeof t=="function")return Ld(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Kf)return 11;if(t===Zf)return 14}return 2}function or(t,e){var n=t.alternate;return n===null?(n=On(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function yl(t,e,n,i,r,o){var a=2;if(i=t,typeof t=="function")Ld(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Mo:return zr(n.children,r,o,e);case qf:a=8,r|=8;break;case Hc:return t=On(12,n,e,r|2),t.elementType=Hc,t.lanes=o,t;case Vc:return t=On(13,n,e,r),t.elementType=Vc,t.lanes=o,t;case Gc:return t=On(19,n,e,r),t.elementType=Gc,t.lanes=o,t;case Tg:return gu(n,r,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Mg:a=10;break e;case Eg:a=9;break e;case Kf:a=11;break e;case Zf:a=14;break e;case Gi:a=16,i=null;break e}throw Error(le(130,t==null?t:typeof t,""))}return e=On(a,n,e,r),e.elementType=t,e.type=i,e.lanes=o,e}function zr(t,e,n,i){return t=On(7,t,i,e),t.lanes=n,t}function gu(t,e,n,i){return t=On(22,t,i,e),t.elementType=Tg,t.lanes=n,t.stateNode={isHidden:!1},t}function tc(t,e,n){return t=On(6,t,null,e),t.lanes=n,t}function nc(t,e,n){return e=On(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Dy(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Fu(0),this.expirationTimes=Fu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Dd(t,e,n,i,r,o,a,s,l){return t=new Dy(t,e,n,s,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=On(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},md(o),t}function Uy(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:So,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function m_(t){if(!t)return cr;t=t._reactInternals;e:{if(qr(t)!==t||t.tag!==1)throw Error(le(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(vn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(le(171))}if(t.tag===1){var n=t.type;if(vn(n))return mv(t,n,e)}return e}function g_(t,e,n,i,r,o,a,s,l){return t=Dd(n,i,!0,t,r,o,a,s,l),t.context=m_(null),n=t.current,i=fn(),r=rr(n),o=Ti(i,r),o.callback=e??null,nr(n,o,r),t.current.lanes=r,us(t,r,i),_n(t,i),t}function vu(t,e,n,i){var r=e.current,o=fn(),a=rr(r);return n=m_(n),e.context===null?e.context=n:e.pendingContext=n,e=Ti(o,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=nr(r,e,a),t!==null&&(Jn(t,r,a,o),pl(t,r,a)),a}function jl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function ip(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ud(t,e){ip(t,e),(t=t.alternate)&&ip(t,e)}function Ny(){return null}var v_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Nd(t){this._internalRoot=t}_u.prototype.render=Nd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(le(409));vu(t,e,null,null)};_u.prototype.unmount=Nd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Wr(function(){vu(null,t,null,null)}),e[Ai]=null}};function _u(t){this._internalRoot=t}_u.prototype.unstable_scheduleHydration=function(t){if(t){var e=$g();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ji.length&&e!==0&&e<ji[n].priority;n++);ji.splice(n,0,t),n===0&&Kg(t)}};function Id(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function xu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function rp(){}function Iy(t,e,n,i,r){if(r){if(typeof i=="function"){var o=i;i=function(){var u=jl(a);o.call(u)}}var a=g_(e,i,t,0,null,!1,!1,"",rp);return t._reactRootContainer=a,t[Ai]=a.current,Ka(t.nodeType===8?t.parentNode:t),Wr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var s=i;i=function(){var u=jl(l);s.call(u)}}var l=Dd(t,0,!1,null,null,!1,!1,"",rp);return t._reactRootContainer=l,t[Ai]=l.current,Ka(t.nodeType===8?t.parentNode:t),Wr(function(){vu(e,l,n,i)}),l}function yu(t,e,n,i,r){var o=n._reactRootContainer;if(o){var a=o;if(typeof r=="function"){var s=r;r=function(){var l=jl(a);s.call(l)}}vu(e,a,t,r)}else a=Iy(n,e,t,r,i);return jl(a)}jg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Aa(e.pendingLanes);n!==0&&(ed(e,n|1),_n(e,Nt()),!(ct&6)&&(qo=Nt()+500,mr()))}break;case 13:Wr(function(){var i=Ri(t,1);if(i!==null){var r=fn();Jn(i,t,1,r)}}),Ud(t,1)}};td=function(t){if(t.tag===13){var e=Ri(t,134217728);if(e!==null){var n=fn();Jn(e,t,134217728,n)}Ud(t,134217728)}};Yg=function(t){if(t.tag===13){var e=rr(t),n=Ri(t,e);if(n!==null){var i=fn();Jn(n,t,e,i)}Ud(t,e)}};$g=function(){return pt};qg=function(t,e){var n=pt;try{return pt=t,e()}finally{pt=n}};Jc=function(t,e,n){switch(e){case"input":if(jc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=cu(i);if(!r)throw Error(le(90));Ag(i),jc(i,r)}}}break;case"textarea":Cg(t,n);break;case"select":e=n.value,e!=null&&No(t,!!n.multiple,e,!1)}};Ig=Cd;Fg=Wr;var Fy={usingClientEntryPoint:!1,Events:[fs,Ao,cu,Ug,Ng,Cd]},ma={findFiberByHostInstance:Lr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Oy={bundleType:ma.bundleType,version:ma.version,rendererPackageName:ma.rendererPackageName,rendererConfig:ma.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Li.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=zg(t),t===null?null:t.stateNode},findFiberByHostInstance:ma.findFiberByHostInstance||Ny,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fs.isDisabled&&Fs.supportsFiber)try{au=Fs.inject(Oy),ci=Fs}catch{}}Pn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Fy;Pn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Id(e))throw Error(le(200));return Uy(t,e,null,n)};Pn.createRoot=function(t,e){if(!Id(t))throw Error(le(299));var n=!1,i="",r=v_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Dd(t,1,!1,null,null,n,!1,i,r),t[Ai]=e.current,Ka(t.nodeType===8?t.parentNode:t),new Nd(e)};Pn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(le(188)):(t=Object.keys(t).join(","),Error(le(268,t)));return t=zg(e),t=t===null?null:t.stateNode,t};Pn.flushSync=function(t){return Wr(t)};Pn.hydrate=function(t,e,n){if(!xu(e))throw Error(le(200));return yu(null,t,e,!0,n)};Pn.hydrateRoot=function(t,e,n){if(!Id(t))throw Error(le(405));var i=n!=null&&n.hydratedSources||null,r=!1,o="",a=v_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=g_(e,null,t,1,n??null,r,!1,o,a),t[Ai]=e.current,Ka(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new _u(e)};Pn.render=function(t,e,n){if(!xu(e))throw Error(le(200));return yu(null,t,e,!1,n)};Pn.unmountComponentAtNode=function(t){if(!xu(t))throw Error(le(40));return t._reactRootContainer?(Wr(function(){yu(null,null,t,!1,function(){t._reactRootContainer=null,t[Ai]=null})}),!0):!1};Pn.unstable_batchedUpdates=Cd;Pn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!xu(n))throw Error(le(200));if(t==null||t._reactInternals===void 0)throw Error(le(38));return yu(t,e,n,!1,i)};Pn.version="18.3.1-next-f1338f8080-20240426";function __(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(__)}catch(t){console.error(t)}}__(),_g.exports=Pn;var Fd=_g.exports;const ky=og(Fd),zy=rg({__proto__:null,default:ky},[Fd]);var op=Fd;zc.createRoot=op.createRoot,zc.hydrateRoot=op.hydrateRoot;/**
 * @remix-run/router v1.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ct(){return Ct=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Ct.apply(this,arguments)}var Ft;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Ft||(Ft={}));const ap="popstate";function By(t){t===void 0&&(t={});function e(r,o){let{pathname:a="/",search:s="",hash:l=""}=Di(r.location.hash.substr(1));return!a.startsWith("/")&&!a.startsWith(".")&&(a="/"+a),os("",{pathname:a,search:s,hash:l},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){let a=r.document.querySelector("base"),s="";if(a&&a.getAttribute("href")){let l=r.location.href,u=l.indexOf("#");s=u===-1?l:l.slice(0,u)}return s+"#"+(typeof o=="string"?o:hs(o))}function i(r,o){Xr(r.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(o)+")")}return Vy(e,n,i,t)}function at(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Xr(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Hy(){return Math.random().toString(36).substr(2,8)}function sp(t,e){return{usr:t.state,key:t.key,idx:e}}function os(t,e,n,i){return n===void 0&&(n=null),Ct({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Di(e):e,{state:n,key:e&&e.key||i||Hy()})}function hs(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function Di(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function Vy(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:o=!1}=i,a=r.history,s=Ft.Pop,l=null,u=c();u==null&&(u=0,a.replaceState(Ct({},a.state,{idx:u}),""));function c(){return(a.state||{idx:null}).idx}function f(){s=Ft.Pop;let p=c(),d=p==null?null:p-u;u=p,l&&l({action:s,location:x.location,delta:d})}function h(p,d){s=Ft.Push;let g=os(x.location,p,d);n&&n(g,p),u=c()+1;let v=sp(g,u),w=x.createHref(g);try{a.pushState(v,"",w)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;r.location.assign(w)}o&&l&&l({action:s,location:x.location,delta:1})}function m(p,d){s=Ft.Replace;let g=os(x.location,p,d);n&&n(g,p),u=c();let v=sp(g,u),w=x.createHref(g);a.replaceState(v,"",w),o&&l&&l({action:s,location:x.location,delta:0})}function _(p){let d=r.location.origin!=="null"?r.location.origin:r.location.href,g=typeof p=="string"?p:hs(p);return g=g.replace(/ $/,"%20"),at(d,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,d)}let x={get action(){return s},get location(){return t(r,a)},listen(p){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(ap,f),l=p,()=>{r.removeEventListener(ap,f),l=null}},createHref(p){return e(r,p)},createURL:_,encodeLocation(p){let d=_(p);return{pathname:d.pathname,search:d.search,hash:d.hash}},push:h,replace:m,go(p){return a.go(p)}};return x}var _t;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(_t||(_t={}));const Gy=new Set(["lazy","caseSensitive","path","id","index","children"]);function Wy(t){return t.index===!0}function as(t,e,n,i){return n===void 0&&(n=[]),i===void 0&&(i={}),t.map((r,o)=>{let a=[...n,String(o)],s=typeof r.id=="string"?r.id:a.join("-");if(at(r.index!==!0||!r.children,"Cannot specify children on an index route"),at(!i[s],'Found a route id collision on id "'+s+`".  Route id's must be globally unique within Data Router usages`),Wy(r)){let l=Ct({},r,e(r),{id:s});return i[s]=l,l}else{let l=Ct({},r,e(r),{id:s,children:void 0});return i[s]=l,r.children&&(l.children=as(r.children,e,a,i)),l}})}function Cr(t,e,n){return n===void 0&&(n="/"),Sl(t,e,n,!1)}function Sl(t,e,n,i){let r=typeof e=="string"?Di(e):e,o=ps(r.pathname||"/",n);if(o==null)return null;let a=x_(t);jy(a);let s=null;for(let l=0;s==null&&l<a.length;++l){let u=iS(o);s=tS(a[l],u,i)}return s}function Xy(t,e){let{route:n,pathname:i,params:r}=t;return{id:n.id,pathname:i,params:r,data:e[n.id],handle:n.handle}}function x_(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(o,a,s)=>{let l={relativePath:s===void 0?o.path||"":s,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};l.relativePath.startsWith("/")&&(at(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let u=ar([i,l.relativePath]),c=n.concat(l);o.children&&o.children.length>0&&(at(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),x_(o.children,e,c,u)),!(o.path==null&&!o.index)&&e.push({path:u,score:Jy(u,o.index),routesMeta:c})};return t.forEach((o,a)=>{var s;if(o.path===""||!((s=o.path)!=null&&s.includes("?")))r(o,a);else for(let l of y_(o.path))r(o,a,l)}),e}function y_(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),o=n.replace(/\?$/,"");if(i.length===0)return r?[o,""]:[o];let a=y_(i.join("/")),s=[];return s.push(...a.map(l=>l===""?o:[o,l].join("/"))),r&&s.push(...a),s.map(l=>t.startsWith("/")&&l===""?"/":l)}function jy(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:eS(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const Yy=/^:[\w-]+$/,$y=3,qy=2,Ky=1,Zy=10,Qy=-2,lp=t=>t==="*";function Jy(t,e){let n=t.split("/"),i=n.length;return n.some(lp)&&(i+=Qy),e&&(i+=qy),n.filter(r=>!lp(r)).reduce((r,o)=>r+(Yy.test(o)?$y:o===""?Ky:Zy),i)}function eS(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function tS(t,e,n){n===void 0&&(n=!1);let{routesMeta:i}=t,r={},o="/",a=[];for(let s=0;s<i.length;++s){let l=i[s],u=s===i.length-1,c=o==="/"?e:e.slice(o.length)||"/",f=up({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},c),h=l.route;if(!f&&u&&n&&!i[i.length-1].route.index&&(f=up({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},c)),!f)return null;Object.assign(r,f.params),a.push({params:r,pathname:ar([o,f.pathname]),pathnameBase:aS(ar([o,f.pathnameBase])),route:h}),f.pathnameBase!=="/"&&(o=ar([o,f.pathnameBase]))}return a}function up(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=nS(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let o=r[0],a=o.replace(/(.)\/+$/,"$1"),s=r.slice(1);return{params:i.reduce((u,c,f)=>{let{paramName:h,isOptional:m}=c;if(h==="*"){let x=s[f]||"";a=o.slice(0,o.length-x.length).replace(/(.)\/+$/,"$1")}const _=s[f];return m&&!_?u[h]=void 0:u[h]=(_||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:a,pattern:t}}function nS(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Xr(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,s,l)=>(i.push({paramName:s,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function iS(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Xr(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function ps(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}function rS(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?Di(t):t;return{pathname:n?n.startsWith("/")?n:oS(n,e):e,search:sS(i),hash:lS(r)}}function oS(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function ic(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function S_(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Od(t,e){let n=S_(t);return e?n.map((i,r)=>r===t.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function kd(t,e,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=Di(t):(r=Ct({},t),at(!r.pathname||!r.pathname.includes("?"),ic("?","pathname","search",r)),at(!r.pathname||!r.pathname.includes("#"),ic("#","pathname","hash",r)),at(!r.search||!r.search.includes("#"),ic("#","search","hash",r)));let o=t===""||r.pathname==="",a=o?"/":r.pathname,s;if(a==null)s=n;else{let f=e.length-1;if(!i&&a.startsWith("..")){let h=a.split("/");for(;h[0]==="..";)h.shift(),f-=1;r.pathname=h.join("/")}s=f>=0?e[f]:"/"}let l=rS(r,s),u=a&&a!=="/"&&a.endsWith("/"),c=(o||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const ar=t=>t.join("/").replace(/\/\/+/g,"/"),aS=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),sS=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,lS=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class zd{constructor(e,n,i,r){r===void 0&&(r=!1),this.status=e,this.statusText=n||"",this.internal=r,i instanceof Error?(this.data=i.toString(),this.error=i):this.data=i}}function Su(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const M_=["post","put","patch","delete"],uS=new Set(M_),cS=["get",...M_],fS=new Set(cS),dS=new Set([301,302,303,307,308]),hS=new Set([307,308]),rc={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},pS={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},ga={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Bd=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,mS=t=>({hasErrorBoundary:!!t.hasErrorBoundary}),E_="remix-router-transitions";function gS(t){const e=t.window?t.window:typeof window<"u"?window:void 0,n=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u",i=!n;at(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let r;if(t.mapRouteProperties)r=t.mapRouteProperties;else if(t.detectErrorBoundary){let D=t.detectErrorBoundary;r=F=>({hasErrorBoundary:D(F)})}else r=mS;let o={},a=as(t.routes,r,void 0,o),s,l=t.basename||"/",u=t.unstable_dataStrategy||SS,c=t.unstable_patchRoutesOnMiss,f=Ct({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1,unstable_skipActionErrorRevalidation:!1},t.future),h=null,m=new Set,_=null,x=null,p=null,d=t.hydrationData!=null,g=Cr(a,t.history.location,l),v=null;if(g==null&&!c){let D=un(404,{pathname:t.history.location.pathname}),{matches:F,route:G}=xp(a);g=F,v={[G.id]:D}}let w;if(!g)w=!1,g=[];else if(g.some(D=>D.route.lazy))w=!1;else if(!g.some(D=>D.route.loader))w=!0;else if(f.v7_partialHydration){let D=t.hydrationData?t.hydrationData.loaderData:null,F=t.hydrationData?t.hydrationData.errors:null,G=Q=>Q.route.loader?typeof Q.route.loader=="function"&&Q.route.loader.hydrate===!0?!1:D&&D[Q.route.id]!==void 0||F&&F[Q.route.id]!==void 0:!0;if(F){let Q=g.findIndex(xe=>F[xe.route.id]!==void 0);w=g.slice(0,Q+1).every(G)}else w=g.every(G)}else w=t.hydrationData!=null;let b,S={historyAction:t.history.action,location:t.history.location,matches:g,initialized:w,navigation:rc,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||v,fetchers:new Map,blockers:new Map},R=Ft.Pop,L=!1,A,M=!1,P=new Map,j=null,B=!1,q=!1,J=[],K=[],Z=new Map,I=0,ee=-1,te=new Map,ue=new Set,Re=new Map,Ze=new Map,$=new Set,se=new Map,pe=new Map,he=new Map,$e=!1;function We(){if(h=t.history.listen(D=>{let{action:F,location:G,delta:Q}=D;if($e){$e=!1;return}Xr(pe.size===0||Q!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let xe=V({currentLocation:S.location,nextLocation:G,historyAction:F});if(xe&&Q!=null){$e=!0,t.history.go(Q*-1),W(xe,{state:"blocked",location:G,proceed(){W(xe,{state:"proceeding",proceed:void 0,reset:void 0,location:G}),t.history.go(Q)},reset(){let Ae=new Map(S.blockers);Ae.set(xe,ga),Be({blockers:Ae})}});return}return qe(F,G)}),n){NS(e,P);let D=()=>IS(e,P);e.addEventListener("pagehide",D),j=()=>e.removeEventListener("pagehide",D)}return S.initialized||qe(Ft.Pop,S.location,{initialHydration:!0}),b}function rt(){h&&h(),j&&j(),m.clear(),A&&A.abort(),S.fetchers.forEach((D,F)=>we(F)),S.blockers.forEach((D,F)=>y(F))}function N(D){return m.add(D),()=>m.delete(D)}function Be(D,F){F===void 0&&(F={}),S=Ct({},S,D);let G=[],Q=[];f.v7_fetcherPersist&&S.fetchers.forEach((xe,Ae)=>{xe.state==="idle"&&($.has(Ae)?Q.push(Ae):G.push(Ae))}),[...m].forEach(xe=>xe(S,{deletedFetchers:Q,unstable_viewTransitionOpts:F.viewTransitionOpts,unstable_flushSync:F.flushSync===!0})),f.v7_fetcherPersist&&(G.forEach(xe=>S.fetchers.delete(xe)),Q.forEach(xe=>we(xe)))}function Xe(D,F,G){var Q,xe;let{flushSync:Ae}=G===void 0?{}:G,Ue=S.actionData!=null&&S.navigation.formMethod!=null&&$n(S.navigation.formMethod)&&S.navigation.state==="loading"&&((Q=D.state)==null?void 0:Q._isRedirect)!==!0,ge;F.actionData?Object.keys(F.actionData).length>0?ge=F.actionData:ge=null:Ue?ge=S.actionData:ge=null;let Ye=F.loaderData?vp(S.loaderData,F.loaderData,F.matches||[],F.errors):S.loaderData,Ce=S.blockers;Ce.size>0&&(Ce=new Map(Ce),Ce.forEach((U,k)=>Ce.set(k,ga)));let Ke=L===!0||S.navigation.formMethod!=null&&$n(S.navigation.formMethod)&&((xe=D.state)==null?void 0:xe._isRedirect)!==!0;s&&(a=s,s=void 0),B||R===Ft.Pop||(R===Ft.Push?t.history.push(D,D.state):R===Ft.Replace&&t.history.replace(D,D.state));let E;if(R===Ft.Pop){let U=P.get(S.location.pathname);U&&U.has(D.pathname)?E={currentLocation:S.location,nextLocation:D}:P.has(D.pathname)&&(E={currentLocation:D,nextLocation:S.location})}else if(M){let U=P.get(S.location.pathname);U?U.add(D.pathname):(U=new Set([D.pathname]),P.set(S.location.pathname,U)),E={currentLocation:S.location,nextLocation:D}}Be(Ct({},F,{actionData:ge,loaderData:Ye,historyAction:R,location:D,initialized:!0,navigation:rc,revalidation:"idle",restoreScrollPosition:ut(D,F.matches||S.matches),preventScrollReset:Ke,blockers:Ce}),{viewTransitionOpts:E,flushSync:Ae===!0}),R=Ft.Pop,L=!1,M=!1,B=!1,q=!1,J=[],K=[]}async function dt(D,F){if(typeof D=="number"){t.history.go(D);return}let G=Uf(S.location,S.matches,l,f.v7_prependBasename,D,f.v7_relativeSplatPath,F==null?void 0:F.fromRouteId,F==null?void 0:F.relative),{path:Q,submission:xe,error:Ae}=cp(f.v7_normalizeFormMethod,!1,G,F),Ue=S.location,ge=os(S.location,Q,F&&F.state);ge=Ct({},ge,t.history.encodeLocation(ge));let Ye=F&&F.replace!=null?F.replace:void 0,Ce=Ft.Push;Ye===!0?Ce=Ft.Replace:Ye===!1||xe!=null&&$n(xe.formMethod)&&xe.formAction===S.location.pathname+S.location.search&&(Ce=Ft.Replace);let Ke=F&&"preventScrollReset"in F?F.preventScrollReset===!0:void 0,E=(F&&F.unstable_flushSync)===!0,U=V({currentLocation:Ue,nextLocation:ge,historyAction:Ce});if(U){W(U,{state:"blocked",location:ge,proceed(){W(U,{state:"proceeding",proceed:void 0,reset:void 0,location:ge}),dt(D,F)},reset(){let k=new Map(S.blockers);k.set(U,ga),Be({blockers:k})}});return}return await qe(Ce,ge,{submission:xe,pendingError:Ae,preventScrollReset:Ke,replace:F&&F.replace,enableViewTransition:F&&F.unstable_viewTransition,flushSync:E})}function Ie(){if(me(),Be({revalidation:"loading"}),S.navigation.state!=="submitting"){if(S.navigation.state==="idle"){qe(S.historyAction,S.location,{startUninterruptedRevalidation:!0});return}qe(R||S.historyAction,S.navigation.location,{overrideNavigation:S.navigation})}}async function qe(D,F,G){A&&A.abort(),A=null,R=D,B=(G&&G.startUninterruptedRevalidation)===!0,Dt(S.location,S.matches),L=(G&&G.preventScrollReset)===!0,M=(G&&G.enableViewTransition)===!0;let Q=s||a,xe=G&&G.overrideNavigation,Ae=Cr(Q,F,l),Ue=(G&&G.flushSync)===!0,ge=Rt(Ae,Q,F.pathname);if(ge.active&&ge.matches&&(Ae=ge.matches),!Ae){let{error:z,notFoundMatches:O,route:ne}=Y(F.pathname);Xe(F,{matches:O,loaderData:{},errors:{[ne.id]:z}},{flushSync:Ue});return}if(S.initialized&&!q&&RS(S.location,F)&&!(G&&G.submission&&$n(G.submission.formMethod))){Xe(F,{matches:Ae},{flushSync:Ue});return}A=new AbortController;let Ye=Jr(t.history,F,A.signal,G&&G.submission),Ce;if(G&&G.pendingError)Ce=[za(Ae).route.id,{type:_t.error,error:G.pendingError}];else if(G&&G.submission&&$n(G.submission.formMethod)){let z=await Je(Ye,F,G.submission,Ae,ge.active,{replace:G.replace,flushSync:Ue});if(z.shortCircuited)return;if(z.pendingActionResult){let[O,ne]=z.pendingActionResult;if(wn(ne)&&Su(ne.error)&&ne.error.status===404){A=null,Xe(F,{matches:z.matches,loaderData:{},errors:{[O]:ne.error}});return}}Ae=z.matches||Ae,Ce=z.pendingActionResult,xe=oc(F,G.submission),Ue=!1,ge.active=!1,Ye=Jr(t.history,Ye.url,Ye.signal)}let{shortCircuited:Ke,matches:E,loaderData:U,errors:k}=await je(Ye,F,Ae,ge.active,xe,G&&G.submission,G&&G.fetcherSubmission,G&&G.replace,G&&G.initialHydration===!0,Ue,Ce);Ke||(A=null,Xe(F,Ct({matches:E||Ae},_p(Ce),{loaderData:U,errors:k})))}async function Je(D,F,G,Q,xe,Ae){Ae===void 0&&(Ae={}),me();let Ue=DS(F,G);if(Be({navigation:Ue},{flushSync:Ae.flushSync===!0}),xe){let Ce=await St(Q,F.pathname,D.signal);if(Ce.type==="aborted")return{shortCircuited:!0};if(Ce.type==="error"){let{error:Ke,notFoundMatches:E,route:U}=ie(F.pathname,Ce);return{matches:E,pendingActionResult:[U.id,{type:_t.error,error:Ke}]}}else if(Ce.matches)Q=Ce.matches;else{let{notFoundMatches:Ke,error:E,route:U}=Y(F.pathname);return{matches:Ke,pendingActionResult:[U.id,{type:_t.error,error:E}]}}}let ge,Ye=Ca(Q,F);if(!Ye.route.action&&!Ye.route.lazy)ge={type:_t.error,error:un(405,{method:D.method,pathname:F.pathname,routeId:Ye.route.id})};else if(ge=(await ae("action",D,[Ye],Q))[0],D.signal.aborted)return{shortCircuited:!0};if(Ir(ge)){let Ce;return Ae&&Ae.replace!=null?Ce=Ae.replace:Ce=pp(ge.response.headers.get("Location"),new URL(D.url),l)===S.location.pathname+S.location.search,await oe(D,ge,{submission:G,replace:Ce}),{shortCircuited:!0}}if(Nr(ge))throw un(400,{type:"defer-action"});if(wn(ge)){let Ce=za(Q,Ye.route.id);return(Ae&&Ae.replace)!==!0&&(R=Ft.Push),{matches:Q,pendingActionResult:[Ce.route.id,ge]}}return{matches:Q,pendingActionResult:[Ye.route.id,ge]}}async function je(D,F,G,Q,xe,Ae,Ue,ge,Ye,Ce,Ke){let E=xe||oc(F,Ae),U=Ae||Ue||Mp(E),k=!B&&(!f.v7_partialHydration||!Ye);if(Q){if(k){let ze=vt(Ke);Be(Ct({navigation:E},ze!==void 0?{actionData:ze}:{}),{flushSync:Ce})}let Oe=await St(G,F.pathname,D.signal);if(Oe.type==="aborted")return{shortCircuited:!0};if(Oe.type==="error"){let{error:ze,notFoundMatches:Me,route:Qe}=ie(F.pathname,Oe);return{matches:Me,loaderData:{},errors:{[Qe.id]:ze}}}else if(Oe.matches)G=Oe.matches;else{let{error:ze,notFoundMatches:Me,route:Qe}=Y(F.pathname);return{matches:Me,loaderData:{},errors:{[Qe.id]:ze}}}}let z=s||a,[O,ne]=fp(t.history,S,G,U,F,f.v7_partialHydration&&Ye===!0,f.unstable_skipActionErrorRevalidation,q,J,K,$,Re,ue,z,l,Ke);if(be(Oe=>!(G&&G.some(ze=>ze.route.id===Oe))||O&&O.some(ze=>ze.route.id===Oe)),ee=++I,O.length===0&&ne.length===0){let Oe=Ve();return Xe(F,Ct({matches:G,loaderData:{},errors:Ke&&wn(Ke[1])?{[Ke[0]]:Ke[1].error}:null},_p(Ke),Oe?{fetchers:new Map(S.fetchers)}:{}),{flushSync:Ce}),{shortCircuited:!0}}if(k){let Oe={};if(!Q){Oe.navigation=E;let ze=vt(Ke);ze!==void 0&&(Oe.actionData=ze)}ne.length>0&&(Oe.fetchers=C(ne)),Be(Oe,{flushSync:Ce})}ne.forEach(Oe=>{Z.has(Oe.key)&&De(Oe.key),Oe.controller&&Z.set(Oe.key,Oe.controller)});let ye=()=>ne.forEach(Oe=>De(Oe.key));A&&A.signal.addEventListener("abort",ye);let{loaderResults:Se,fetcherResults:Te}=await Le(S.matches,G,O,ne,D);if(D.signal.aborted)return{shortCircuited:!0};A&&A.signal.removeEventListener("abort",ye),ne.forEach(Oe=>Z.delete(Oe.key));let Ne=yp([...Se,...Te]);if(Ne){if(Ne.idx>=O.length){let Oe=ne[Ne.idx-O.length].key;ue.add(Oe)}return await oe(D,Ne.result,{replace:ge}),{shortCircuited:!0}}let{loaderData:Fe,errors:Pe}=gp(S,G,O,Se,Ke,ne,Te,se);se.forEach((Oe,ze)=>{Oe.subscribe(Me=>{(Me||Oe.done)&&se.delete(ze)})}),f.v7_partialHydration&&Ye&&S.errors&&Object.entries(S.errors).filter(Oe=>{let[ze]=Oe;return!O.some(Me=>Me.route.id===ze)}).forEach(Oe=>{let[ze,Me]=Oe;Pe=Object.assign(Pe||{},{[ze]:Me})});let lt=Ve(),mt=Ge(ee),gt=lt||mt||ne.length>0;return Ct({matches:G,loaderData:Fe,errors:Pe},gt?{fetchers:new Map(S.fetchers)}:{})}function vt(D){if(D&&!wn(D[1]))return{[D[0]]:D[1].data};if(S.actionData)return Object.keys(S.actionData).length===0?null:S.actionData}function C(D){return D.forEach(F=>{let G=S.fetchers.get(F.key),Q=va(void 0,G?G.data:void 0);S.fetchers.set(F.key,Q)}),new Map(S.fetchers)}function T(D,F,G,Q){if(i)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");Z.has(D)&&De(D);let xe=(Q&&Q.unstable_flushSync)===!0,Ae=s||a,Ue=Uf(S.location,S.matches,l,f.v7_prependBasename,G,f.v7_relativeSplatPath,F,Q==null?void 0:Q.relative),ge=Cr(Ae,Ue,l),Ye=Rt(ge,Ae,Ue);if(Ye.active&&Ye.matches&&(ge=Ye.matches),!ge){ke(D,F,un(404,{pathname:Ue}),{flushSync:xe});return}let{path:Ce,submission:Ke,error:E}=cp(f.v7_normalizeFormMethod,!0,Ue,Q);if(E){ke(D,F,E,{flushSync:xe});return}let U=Ca(ge,Ce);if(L=(Q&&Q.preventScrollReset)===!0,Ke&&$n(Ke.formMethod)){X(D,F,Ce,U,ge,Ye.active,xe,Ke);return}Re.set(D,{routeId:F,path:Ce}),re(D,F,Ce,U,ge,Ye.active,xe,Ke)}async function X(D,F,G,Q,xe,Ae,Ue,ge){me(),Re.delete(D);function Ye(Qe){if(!Qe.route.action&&!Qe.route.lazy){let ot=un(405,{method:ge.formMethod,pathname:G,routeId:F});return ke(D,F,ot,{flushSync:Ue}),!0}return!1}if(!Ae&&Ye(Q))return;let Ce=S.fetchers.get(D);fe(D,US(ge,Ce),{flushSync:Ue});let Ke=new AbortController,E=Jr(t.history,G,Ke.signal,ge);if(Ae){let Qe=await St(xe,G,E.signal);if(Qe.type==="aborted")return;if(Qe.type==="error"){let{error:ot}=ie(G,Qe);ke(D,F,ot,{flushSync:Ue});return}else if(Qe.matches){if(xe=Qe.matches,Q=Ca(xe,G),Ye(Q))return}else{ke(D,F,un(404,{pathname:G}),{flushSync:Ue});return}}Z.set(D,Ke);let U=I,z=(await ae("action",E,[Q],xe))[0];if(E.signal.aborted){Z.get(D)===Ke&&Z.delete(D);return}if(f.v7_fetcherPersist&&$.has(D)){if(Ir(z)||wn(z)){fe(D,Vi(void 0));return}}else{if(Ir(z))if(Z.delete(D),ee>U){fe(D,Vi(void 0));return}else return ue.add(D),fe(D,va(ge)),oe(E,z,{fetcherSubmission:ge});if(wn(z)){ke(D,F,z.error);return}}if(Nr(z))throw un(400,{type:"defer-action"});let O=S.navigation.location||S.location,ne=Jr(t.history,O,Ke.signal),ye=s||a,Se=S.navigation.state!=="idle"?Cr(ye,S.navigation.location,l):S.matches;at(Se,"Didn't find any matches after fetcher action");let Te=++I;te.set(D,Te);let Ne=va(ge,z.data);S.fetchers.set(D,Ne);let[Fe,Pe]=fp(t.history,S,Se,ge,O,!1,f.unstable_skipActionErrorRevalidation,q,J,K,$,Re,ue,ye,l,[Q.route.id,z]);Pe.filter(Qe=>Qe.key!==D).forEach(Qe=>{let ot=Qe.key,Ln=S.fetchers.get(ot),Zr=va(void 0,Ln?Ln.data:void 0);S.fetchers.set(ot,Zr),Z.has(ot)&&De(ot),Qe.controller&&Z.set(ot,Qe.controller)}),Be({fetchers:new Map(S.fetchers)});let lt=()=>Pe.forEach(Qe=>De(Qe.key));Ke.signal.addEventListener("abort",lt);let{loaderResults:mt,fetcherResults:gt}=await Le(S.matches,Se,Fe,Pe,ne);if(Ke.signal.aborted)return;Ke.signal.removeEventListener("abort",lt),te.delete(D),Z.delete(D),Pe.forEach(Qe=>Z.delete(Qe.key));let Oe=yp([...mt,...gt]);if(Oe){if(Oe.idx>=Fe.length){let Qe=Pe[Oe.idx-Fe.length].key;ue.add(Qe)}return oe(ne,Oe.result)}let{loaderData:ze,errors:Me}=gp(S,S.matches,Fe,mt,void 0,Pe,gt,se);if(S.fetchers.has(D)){let Qe=Vi(z.data);S.fetchers.set(D,Qe)}Ge(Te),S.navigation.state==="loading"&&Te>ee?(at(R,"Expected pending action"),A&&A.abort(),Xe(S.navigation.location,{matches:Se,loaderData:ze,errors:Me,fetchers:new Map(S.fetchers)})):(Be({errors:Me,loaderData:vp(S.loaderData,ze,Se,Me),fetchers:new Map(S.fetchers)}),q=!1)}async function re(D,F,G,Q,xe,Ae,Ue,ge){let Ye=S.fetchers.get(D);fe(D,va(ge,Ye?Ye.data:void 0),{flushSync:Ue});let Ce=new AbortController,Ke=Jr(t.history,G,Ce.signal);if(Ae){let z=await St(xe,G,Ke.signal);if(z.type==="aborted")return;if(z.type==="error"){let{error:O}=ie(G,z);ke(D,F,O,{flushSync:Ue});return}else if(z.matches)xe=z.matches,Q=Ca(xe,G);else{ke(D,F,un(404,{pathname:G}),{flushSync:Ue});return}}Z.set(D,Ce);let E=I,k=(await ae("loader",Ke,[Q],xe))[0];if(Nr(k)&&(k=await C_(k,Ke.signal,!0)||k),Z.get(D)===Ce&&Z.delete(D),!Ke.signal.aborted){if($.has(D)){fe(D,Vi(void 0));return}if(Ir(k))if(ee>E){fe(D,Vi(void 0));return}else{ue.add(D),await oe(Ke,k);return}if(wn(k)){ke(D,F,k.error);return}at(!Nr(k),"Unhandled fetcher deferred data"),fe(D,Vi(k.data))}}async function oe(D,F,G){let{submission:Q,fetcherSubmission:xe,replace:Ae}=G===void 0?{}:G;F.response.headers.has("X-Remix-Revalidate")&&(q=!0);let Ue=F.response.headers.get("Location");at(Ue,"Expected a Location header on the redirect Response"),Ue=pp(Ue,new URL(D.url),l);let ge=os(S.location,Ue,{_isRedirect:!0});if(n){let k=!1;if(F.response.headers.has("X-Remix-Reload-Document"))k=!0;else if(Bd.test(Ue)){const z=t.history.createURL(Ue);k=z.origin!==e.location.origin||ps(z.pathname,l)==null}if(k){Ae?e.location.replace(Ue):e.location.assign(Ue);return}}A=null;let Ye=Ae===!0?Ft.Replace:Ft.Push,{formMethod:Ce,formAction:Ke,formEncType:E}=S.navigation;!Q&&!xe&&Ce&&Ke&&E&&(Q=Mp(S.navigation));let U=Q||xe;if(hS.has(F.response.status)&&U&&$n(U.formMethod))await qe(Ye,ge,{submission:Ct({},U,{formAction:Ue}),preventScrollReset:L});else{let k=oc(ge,Q);await qe(Ye,ge,{overrideNavigation:k,fetcherSubmission:xe,preventScrollReset:L})}}async function ae(D,F,G,Q){try{let xe=await MS(u,D,F,G,Q,o,r);return await Promise.all(xe.map((Ae,Ue)=>{if(PS(Ae)){let ge=Ae.result;return{type:_t.redirect,response:wS(ge,F,G[Ue].route.id,Q,l,f.v7_relativeSplatPath)}}return TS(Ae)}))}catch(xe){return G.map(()=>({type:_t.error,error:xe}))}}async function Le(D,F,G,Q,xe){let[Ae,...Ue]=await Promise.all([G.length?ae("loader",xe,G,F):[],...Q.map(ge=>{if(ge.matches&&ge.match&&ge.controller){let Ye=Jr(t.history,ge.path,ge.controller.signal);return ae("loader",Ye,[ge.match],ge.matches).then(Ce=>Ce[0])}else return Promise.resolve({type:_t.error,error:un(404,{pathname:ge.path})})})]);return await Promise.all([Sp(D,G,Ae,Ae.map(()=>xe.signal),!1,S.loaderData),Sp(D,Q.map(ge=>ge.match),Ue,Q.map(ge=>ge.controller?ge.controller.signal:null),!0)]),{loaderResults:Ae,fetcherResults:Ue}}function me(){q=!0,J.push(...be()),Re.forEach((D,F)=>{Z.has(F)&&(K.push(F),De(F))})}function fe(D,F,G){G===void 0&&(G={}),S.fetchers.set(D,F),Be({fetchers:new Map(S.fetchers)},{flushSync:(G&&G.flushSync)===!0})}function ke(D,F,G,Q){Q===void 0&&(Q={});let xe=za(S.matches,F);we(D),Be({errors:{[xe.route.id]:G},fetchers:new Map(S.fetchers)},{flushSync:(Q&&Q.flushSync)===!0})}function ce(D){return f.v7_fetcherPersist&&(Ze.set(D,(Ze.get(D)||0)+1),$.has(D)&&$.delete(D)),S.fetchers.get(D)||pS}function we(D){let F=S.fetchers.get(D);Z.has(D)&&!(F&&F.state==="loading"&&te.has(D))&&De(D),Re.delete(D),te.delete(D),ue.delete(D),$.delete(D),S.fetchers.delete(D)}function tt(D){if(f.v7_fetcherPersist){let F=(Ze.get(D)||0)-1;F<=0?(Ze.delete(D),$.add(D)):Ze.set(D,F)}else we(D);Be({fetchers:new Map(S.fetchers)})}function De(D){let F=Z.get(D);at(F,"Expected fetch controller: "+D),F.abort(),Z.delete(D)}function ve(D){for(let F of D){let G=ce(F),Q=Vi(G.data);S.fetchers.set(F,Q)}}function Ve(){let D=[],F=!1;for(let G of ue){let Q=S.fetchers.get(G);at(Q,"Expected fetcher: "+G),Q.state==="loading"&&(ue.delete(G),D.push(G),F=!0)}return ve(D),F}function Ge(D){let F=[];for(let[G,Q]of te)if(Q<D){let xe=S.fetchers.get(G);at(xe,"Expected fetcher: "+G),xe.state==="loading"&&(De(G),te.delete(G),F.push(G))}return ve(F),F.length>0}function wt(D,F){let G=S.blockers.get(D)||ga;return pe.get(D)!==F&&pe.set(D,F),G}function y(D){S.blockers.delete(D),pe.delete(D)}function W(D,F){let G=S.blockers.get(D)||ga;at(G.state==="unblocked"&&F.state==="blocked"||G.state==="blocked"&&F.state==="blocked"||G.state==="blocked"&&F.state==="proceeding"||G.state==="blocked"&&F.state==="unblocked"||G.state==="proceeding"&&F.state==="unblocked","Invalid blocker state transition: "+G.state+" -> "+F.state);let Q=new Map(S.blockers);Q.set(D,F),Be({blockers:Q})}function V(D){let{currentLocation:F,nextLocation:G,historyAction:Q}=D;if(pe.size===0)return;pe.size>1&&Xr(!1,"A router only supports one blocker at a time");let xe=Array.from(pe.entries()),[Ae,Ue]=xe[xe.length-1],ge=S.blockers.get(Ae);if(!(ge&&ge.state==="proceeding")&&Ue({currentLocation:F,nextLocation:G,historyAction:Q}))return Ae}function Y(D){let F=un(404,{pathname:D}),G=s||a,{matches:Q,route:xe}=xp(G);return be(),{notFoundMatches:Q,route:xe,error:F}}function ie(D,F){let G=F.partialMatches,Q=G[G.length-1].route,xe=un(400,{type:"route-discovery",routeId:Q.id,pathname:D,message:F.error!=null&&"message"in F.error?F.error:String(F.error)});return{notFoundMatches:G,route:Q,error:xe}}function be(D){let F=[];return se.forEach((G,Q)=>{(!D||D(Q))&&(G.cancel(),F.push(Q),se.delete(Q))}),F}function He(D,F,G){if(_=D,p=F,x=G||null,!d&&S.navigation===rc){d=!0;let Q=ut(S.location,S.matches);Q!=null&&Be({restoreScrollPosition:Q})}return()=>{_=null,p=null,x=null}}function yt(D,F){return x&&x(D,F.map(Q=>Xy(Q,S.loaderData)))||D.key}function Dt(D,F){if(_&&p){let G=yt(D,F);_[G]=p()}}function ut(D,F){if(_){let G=yt(D,F),Q=_[G];if(typeof Q=="number")return Q}return null}function Rt(D,F,G){if(c)if(D){if(D[D.length-1].route.path==="*")return{active:!0,matches:Sl(F,G,l,!0)}}else return{active:!0,matches:Sl(F,G,l,!0)||[]};return{active:!1,matches:null}}async function St(D,F,G){let Q=D,xe=Q.length>0?Q[Q.length-1].route:null;for(;;){try{await yS(c,F,Q,a||s,o,r,he,G)}catch(Ce){return{type:"error",error:Ce,partialMatches:Q}}if(G.aborted)return{type:"aborted"};let Ae=s||a,Ue=Cr(Ae,F,l),ge=!1;if(Ue){let Ce=Ue[Ue.length-1].route;if(Ce.index)return{type:"success",matches:Ue};if(Ce.path&&Ce.path.length>0)if(Ce.path==="*")ge=!0;else return{type:"success",matches:Ue}}let Ye=Sl(Ae,F,l,!0);if(!Ye||Q.map(Ce=>Ce.route.id).join("-")===Ye.map(Ce=>Ce.route.id).join("-"))return{type:"success",matches:ge?Ue:null};if(Q=Ye,xe=Q[Q.length-1].route,xe.path==="*")return{type:"success",matches:Q}}}function an(D){o={},s=as(D,r,void 0,o)}return b={get basename(){return l},get future(){return f},get state(){return S},get routes(){return a},get window(){return e},initialize:We,subscribe:N,enableScrollRestoration:He,navigate:dt,fetch:T,revalidate:Ie,createHref:D=>t.history.createHref(D),encodeLocation:D=>t.history.encodeLocation(D),getFetcher:ce,deleteFetcher:tt,dispose:rt,getBlocker:wt,deleteBlocker:y,patchRoutes(D,F){return w_(D,F,a||s,o,r)},_internalFetchControllers:Z,_internalActiveDeferreds:se,_internalSetRoutes:an},b}function vS(t){return t!=null&&("formData"in t&&t.formData!=null||"body"in t&&t.body!==void 0)}function Uf(t,e,n,i,r,o,a,s){let l,u;if(a){l=[];for(let f of e)if(l.push(f),f.route.id===a){u=f;break}}else l=e,u=e[e.length-1];let c=kd(r||".",Od(l,o),ps(t.pathname,n)||t.pathname,s==="path");return r==null&&(c.search=t.search,c.hash=t.hash),(r==null||r===""||r===".")&&u&&u.route.index&&!Hd(c.search)&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i&&n!=="/"&&(c.pathname=c.pathname==="/"?n:ar([n,c.pathname])),hs(c)}function cp(t,e,n,i){if(!i||!vS(i))return{path:n};if(i.formMethod&&!LS(i.formMethod))return{path:n,error:un(405,{method:i.formMethod})};let r=()=>({path:n,error:un(400,{type:"invalid-body"})}),o=i.formMethod||"get",a=t?o.toUpperCase():o.toLowerCase(),s=A_(n);if(i.body!==void 0){if(i.formEncType==="text/plain"){if(!$n(a))return r();let h=typeof i.body=="string"?i.body:i.body instanceof FormData||i.body instanceof URLSearchParams?Array.from(i.body.entries()).reduce((m,_)=>{let[x,p]=_;return""+m+x+"="+p+`
`},""):String(i.body);return{path:n,submission:{formMethod:a,formAction:s,formEncType:i.formEncType,formData:void 0,json:void 0,text:h}}}else if(i.formEncType==="application/json"){if(!$n(a))return r();try{let h=typeof i.body=="string"?JSON.parse(i.body):i.body;return{path:n,submission:{formMethod:a,formAction:s,formEncType:i.formEncType,formData:void 0,json:h,text:void 0}}}catch{return r()}}}at(typeof FormData=="function","FormData is not available in this environment");let l,u;if(i.formData)l=Nf(i.formData),u=i.formData;else if(i.body instanceof FormData)l=Nf(i.body),u=i.body;else if(i.body instanceof URLSearchParams)l=i.body,u=mp(l);else if(i.body==null)l=new URLSearchParams,u=new FormData;else try{l=new URLSearchParams(i.body),u=mp(l)}catch{return r()}let c={formMethod:a,formAction:s,formEncType:i&&i.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if($n(c.formMethod))return{path:n,submission:c};let f=Di(n);return e&&f.search&&Hd(f.search)&&l.append("index",""),f.search="?"+l,{path:hs(f),submission:c}}function _S(t,e){let n=t;if(e){let i=t.findIndex(r=>r.route.id===e);i>=0&&(n=t.slice(0,i))}return n}function fp(t,e,n,i,r,o,a,s,l,u,c,f,h,m,_,x){let p=x?wn(x[1])?x[1].error:x[1].data:void 0,d=t.createURL(e.location),g=t.createURL(r),v=x&&wn(x[1])?x[0]:void 0,w=v?_S(n,v):n,b=x?x[1].statusCode:void 0,S=a&&b&&b>=400,R=w.filter((A,M)=>{let{route:P}=A;if(P.lazy)return!0;if(P.loader==null)return!1;if(o)return typeof P.loader!="function"||P.loader.hydrate?!0:e.loaderData[P.id]===void 0&&(!e.errors||e.errors[P.id]===void 0);if(xS(e.loaderData,e.matches[M],A)||l.some(q=>q===A.route.id))return!0;let j=e.matches[M],B=A;return dp(A,Ct({currentUrl:d,currentParams:j.params,nextUrl:g,nextParams:B.params},i,{actionResult:p,unstable_actionStatus:b,defaultShouldRevalidate:S?!1:s||d.pathname+d.search===g.pathname+g.search||d.search!==g.search||T_(j,B)}))}),L=[];return f.forEach((A,M)=>{if(o||!n.some(J=>J.route.id===A.routeId)||c.has(M))return;let P=Cr(m,A.path,_);if(!P){L.push({key:M,routeId:A.routeId,path:A.path,matches:null,match:null,controller:null});return}let j=e.fetchers.get(M),B=Ca(P,A.path),q=!1;h.has(M)?q=!1:u.includes(M)?q=!0:j&&j.state!=="idle"&&j.data===void 0?q=s:q=dp(B,Ct({currentUrl:d,currentParams:e.matches[e.matches.length-1].params,nextUrl:g,nextParams:n[n.length-1].params},i,{actionResult:p,unstable_actionStatus:b,defaultShouldRevalidate:S?!1:s})),q&&L.push({key:M,routeId:A.routeId,path:A.path,matches:P,match:B,controller:new AbortController})}),[R,L]}function xS(t,e,n){let i=!e||n.route.id!==e.route.id,r=t[n.route.id]===void 0;return i||r}function T_(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function dp(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}async function yS(t,e,n,i,r,o,a,s){let l=[e,...n.map(u=>u.route.id)].join("-");try{let u=a.get(l);u||(u=t({path:e,matches:n,patch:(c,f)=>{s.aborted||w_(c,f,i,r,o)}}),a.set(l,u)),u&&CS(u)&&await u}finally{a.delete(l)}}function w_(t,e,n,i,r){if(t){var o;let a=i[t];at(a,"No route found to patch children into: routeId = "+t);let s=as(e,r,[t,"patch",String(((o=a.children)==null?void 0:o.length)||"0")],i);a.children?a.children.push(...s):a.children=s}else{let a=as(e,r,["patch",String(n.length||"0")],i);n.push(...a)}}async function hp(t,e,n){if(!t.lazy)return;let i=await t.lazy();if(!t.lazy)return;let r=n[t.id];at(r,"No route found in manifest");let o={};for(let a in i){let l=r[a]!==void 0&&a!=="hasErrorBoundary";Xr(!l,'Route "'+r.id+'" has a static property "'+a+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+a+'" will be ignored.')),!l&&!Gy.has(a)&&(o[a]=i[a])}Object.assign(r,o),Object.assign(r,Ct({},e(r),{lazy:void 0}))}function SS(t){return Promise.all(t.matches.map(e=>e.resolve()))}async function MS(t,e,n,i,r,o,a,s){let l=i.reduce((f,h)=>f.add(h.route.id),new Set),u=new Set,c=await t({matches:r.map(f=>{let h=l.has(f.route.id);return Ct({},f,{shouldLoad:h,resolve:_=>(u.add(f.route.id),h?ES(e,n,f,o,a,_,s):Promise.resolve({type:_t.data,result:void 0}))})}),request:n,params:r[0].params,context:s});return r.forEach(f=>at(u.has(f.route.id),'`match.resolve()` was not called for route id "'+f.route.id+'". You must call `match.resolve()` on every match passed to `dataStrategy` to ensure all routes are properly loaded.')),c.filter((f,h)=>l.has(r[h].route.id))}async function ES(t,e,n,i,r,o,a){let s,l,u=c=>{let f,h=new Promise((x,p)=>f=p);l=()=>f(),e.signal.addEventListener("abort",l);let m=x=>typeof c!="function"?Promise.reject(new Error("You cannot call the handler for a route which defines a boolean "+('"'+t+'" [routeId: '+n.route.id+"]"))):c({request:e,params:n.params,context:a},...x!==void 0?[x]:[]),_;return o?_=o(x=>m(x)):_=(async()=>{try{return{type:"data",result:await m()}}catch(x){return{type:"error",result:x}}})(),Promise.race([_,h])};try{let c=n.route[t];if(n.route.lazy)if(c){let f,[h]=await Promise.all([u(c).catch(m=>{f=m}),hp(n.route,r,i)]);if(f!==void 0)throw f;s=h}else if(await hp(n.route,r,i),c=n.route[t],c)s=await u(c);else if(t==="action"){let f=new URL(e.url),h=f.pathname+f.search;throw un(405,{method:e.method,pathname:h,routeId:n.route.id})}else return{type:_t.data,result:void 0};else if(c)s=await u(c);else{let f=new URL(e.url),h=f.pathname+f.search;throw un(404,{pathname:h})}at(s.result!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(c){return{type:_t.error,result:c}}finally{l&&e.signal.removeEventListener("abort",l)}return s}async function TS(t){let{result:e,type:n,status:i}=t;if(R_(e)){let a;try{let s=e.headers.get("Content-Type");s&&/\bapplication\/json\b/.test(s)?e.body==null?a=null:a=await e.json():a=await e.text()}catch(s){return{type:_t.error,error:s}}return n===_t.error?{type:_t.error,error:new zd(e.status,e.statusText,a),statusCode:e.status,headers:e.headers}:{type:_t.data,data:a,statusCode:e.status,headers:e.headers}}if(n===_t.error)return{type:_t.error,error:e,statusCode:Su(e)?e.status:i};if(bS(e)){var r,o;return{type:_t.deferred,deferredData:e,statusCode:(r=e.init)==null?void 0:r.status,headers:((o=e.init)==null?void 0:o.headers)&&new Headers(e.init.headers)}}return{type:_t.data,data:e,statusCode:i}}function wS(t,e,n,i,r,o){let a=t.headers.get("Location");if(at(a,"Redirects returned/thrown from loaders/actions must have a Location header"),!Bd.test(a)){let s=i.slice(0,i.findIndex(l=>l.route.id===n)+1);a=Uf(new URL(e.url),s,r,!0,a,o),t.headers.set("Location",a)}return t}function pp(t,e,n){if(Bd.test(t)){let i=t,r=i.startsWith("//")?new URL(e.protocol+i):new URL(i),o=ps(r.pathname,n)!=null;if(r.origin===e.origin&&o)return r.pathname+r.search+r.hash}return t}function Jr(t,e,n,i){let r=t.createURL(A_(e)).toString(),o={signal:n};if(i&&$n(i.formMethod)){let{formMethod:a,formEncType:s}=i;o.method=a.toUpperCase(),s==="application/json"?(o.headers=new Headers({"Content-Type":s}),o.body=JSON.stringify(i.json)):s==="text/plain"?o.body=i.text:s==="application/x-www-form-urlencoded"&&i.formData?o.body=Nf(i.formData):o.body=i.formData}return new Request(r,o)}function Nf(t){let e=new URLSearchParams;for(let[n,i]of t.entries())e.append(n,typeof i=="string"?i:i.name);return e}function mp(t){let e=new FormData;for(let[n,i]of t.entries())e.append(n,i);return e}function AS(t,e,n,i,r,o){let a={},s=null,l,u=!1,c={},f=i&&wn(i[1])?i[1].error:void 0;return n.forEach((h,m)=>{let _=e[m].route.id;if(at(!Ir(h),"Cannot handle redirect results in processLoaderData"),wn(h)){let x=h.error;f!==void 0&&(x=f,f=void 0),s=s||{};{let p=za(t,_);s[p.route.id]==null&&(s[p.route.id]=x)}a[_]=void 0,u||(u=!0,l=Su(h.error)?h.error.status:500),h.headers&&(c[_]=h.headers)}else Nr(h)?(r.set(_,h.deferredData),a[_]=h.deferredData.data,h.statusCode!=null&&h.statusCode!==200&&!u&&(l=h.statusCode),h.headers&&(c[_]=h.headers)):(a[_]=h.data,h.statusCode&&h.statusCode!==200&&!u&&(l=h.statusCode),h.headers&&(c[_]=h.headers))}),f!==void 0&&i&&(s={[i[0]]:f},a[i[0]]=void 0),{loaderData:a,errors:s,statusCode:l||200,loaderHeaders:c}}function gp(t,e,n,i,r,o,a,s){let{loaderData:l,errors:u}=AS(e,n,i,r,s);for(let c=0;c<o.length;c++){let{key:f,match:h,controller:m}=o[c];at(a!==void 0&&a[c]!==void 0,"Did not find corresponding fetcher result");let _=a[c];if(!(m&&m.signal.aborted))if(wn(_)){let x=za(t.matches,h==null?void 0:h.route.id);u&&u[x.route.id]||(u=Ct({},u,{[x.route.id]:_.error})),t.fetchers.delete(f)}else if(Ir(_))at(!1,"Unhandled fetcher revalidation redirect");else if(Nr(_))at(!1,"Unhandled fetcher deferred data");else{let x=Vi(_.data);t.fetchers.set(f,x)}}return{loaderData:l,errors:u}}function vp(t,e,n,i){let r=Ct({},e);for(let o of n){let a=o.route.id;if(e.hasOwnProperty(a)?e[a]!==void 0&&(r[a]=e[a]):t[a]!==void 0&&o.route.loader&&(r[a]=t[a]),i&&i.hasOwnProperty(a))break}return r}function _p(t){return t?wn(t[1])?{actionData:{}}:{actionData:{[t[0]]:t[1].data}}:{}}function za(t,e){return(e?t.slice(0,t.findIndex(i=>i.route.id===e)+1):[...t]).reverse().find(i=>i.route.hasErrorBoundary===!0)||t[0]}function xp(t){let e=t.length===1?t[0]:t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function un(t,e){let{pathname:n,routeId:i,method:r,type:o,message:a}=e===void 0?{}:e,s="Unknown Server Error",l="Unknown @remix-run/router error";return t===400?(s="Bad Request",o==="route-discovery"?l='Unable to match URL "'+n+'" - the `children()` function for '+("route `"+i+"` threw the following error:\n"+a):r&&n&&i?l="You made a "+r+' request to "'+n+'" but '+('did not provide a `loader` for route "'+i+'", ')+"so there is no way to handle the request.":o==="defer-action"?l="defer() is not supported in actions":o==="invalid-body"&&(l="Unable to encode submission body")):t===403?(s="Forbidden",l='Route "'+i+'" does not match URL "'+n+'"'):t===404?(s="Not Found",l='No route matches URL "'+n+'"'):t===405&&(s="Method Not Allowed",r&&n&&i?l="You made a "+r.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+i+'", ')+"so there is no way to handle the request.":r&&(l='Invalid request method "'+r.toUpperCase()+'"')),new zd(t||500,s,new Error(l),!0)}function yp(t){for(let e=t.length-1;e>=0;e--){let n=t[e];if(Ir(n))return{result:n,idx:e}}}function A_(t){let e=typeof t=="string"?Di(t):t;return hs(Ct({},e,{hash:""}))}function RS(t,e){return t.pathname!==e.pathname||t.search!==e.search?!1:t.hash===""?e.hash!=="":t.hash===e.hash?!0:e.hash!==""}function CS(t){return typeof t=="object"&&t!=null&&"then"in t}function PS(t){return R_(t.result)&&dS.has(t.result.status)}function Nr(t){return t.type===_t.deferred}function wn(t){return t.type===_t.error}function Ir(t){return(t&&t.type)===_t.redirect}function bS(t){let e=t;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function R_(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function LS(t){return fS.has(t.toLowerCase())}function $n(t){return uS.has(t.toLowerCase())}async function Sp(t,e,n,i,r,o){for(let a=0;a<n.length;a++){let s=n[a],l=e[a];if(!l)continue;let u=t.find(f=>f.route.id===l.route.id),c=u!=null&&!T_(u,l)&&(o&&o[l.route.id])!==void 0;if(Nr(s)&&(r||c)){let f=i[a];at(f,"Expected an AbortSignal for revalidating fetcher deferred result"),await C_(s,f,r).then(h=>{h&&(n[a]=h||n[a])})}}}async function C_(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:_t.data,data:t.deferredData.unwrappedData}}catch(r){return{type:_t.error,error:r}}return{type:_t.data,data:t.deferredData.data}}}function Hd(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function Ca(t,e){let n=typeof e=="string"?Di(e).search:e.search;if(t[t.length-1].route.index&&Hd(n||""))return t[t.length-1];let i=S_(t);return i[i.length-1]}function Mp(t){let{formMethod:e,formAction:n,formEncType:i,text:r,formData:o,json:a}=t;if(!(!e||!n||!i)){if(r!=null)return{formMethod:e,formAction:n,formEncType:i,formData:void 0,json:void 0,text:r};if(o!=null)return{formMethod:e,formAction:n,formEncType:i,formData:o,json:void 0,text:void 0};if(a!==void 0)return{formMethod:e,formAction:n,formEncType:i,formData:void 0,json:a,text:void 0}}}function oc(t,e){return e?{state:"loading",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:t,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function DS(t,e){return{state:"submitting",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function va(t,e){return t?{state:"loading",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function US(t,e){return{state:"submitting",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e?e.data:void 0}}function Vi(t){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function NS(t,e){try{let n=t.sessionStorage.getItem(E_);if(n){let i=JSON.parse(n);for(let[r,o]of Object.entries(i||{}))o&&Array.isArray(o)&&e.set(r,new Set(o||[]))}}catch{}}function IS(t,e){if(e.size>0){let n={};for(let[i,r]of e)n[i]=[...r];try{t.sessionStorage.setItem(E_,JSON.stringify(n))}catch(i){Xr(!1,"Failed to save applied view transitions in sessionStorage ("+i+").")}}}/**
 * React Router v6.24.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Yl(){return Yl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Yl.apply(this,arguments)}const Mu=de.createContext(null),P_=de.createContext(null),ms=de.createContext(null),Vd=de.createContext(null),gr=de.createContext({outlet:null,matches:[],isDataRoute:!1}),b_=de.createContext(null);function gs(){return de.useContext(Vd)!=null}function Gd(){return gs()||at(!1),de.useContext(Vd).location}function L_(t){de.useContext(ms).static||de.useLayoutEffect(t)}function FS(){let{isDataRoute:t}=de.useContext(gr);return t?KS():OS()}function OS(){gs()||at(!1);let t=de.useContext(Mu),{basename:e,future:n,navigator:i}=de.useContext(ms),{matches:r}=de.useContext(gr),{pathname:o}=Gd(),a=JSON.stringify(Od(r,n.v7_relativeSplatPath)),s=de.useRef(!1);return L_(()=>{s.current=!0}),de.useCallback(function(u,c){if(c===void 0&&(c={}),!s.current)return;if(typeof u=="number"){i.go(u);return}let f=kd(u,JSON.parse(a),o,c.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:ar([e,f.pathname])),(c.replace?i.replace:i.push)(f,c.state,c)},[e,i,a,o,t])}const kS=de.createContext(null);function zS(t){let e=de.useContext(gr).outlet;return e&&de.createElement(kS.Provider,{value:t},e)}function BS(t,e,n,i){gs()||at(!1);let{navigator:r}=de.useContext(ms),{matches:o}=de.useContext(gr),a=o[o.length-1],s=a?a.params:{};a&&a.pathname;let l=a?a.pathnameBase:"/";a&&a.route;let u=Gd(),c;c=u;let f=c.pathname||"/",h=f;if(l!=="/"){let x=l.replace(/^\//,"").split("/");h="/"+f.replace(/^\//,"").split("/").slice(x.length).join("/")}let m=Cr(t,{pathname:h});return XS(m&&m.map(x=>Object.assign({},x,{params:Object.assign({},s,x.params),pathname:ar([l,r.encodeLocation?r.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?l:ar([l,r.encodeLocation?r.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),o,n,i)}function HS(){let t=qS(),e=Su(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return de.createElement(de.Fragment,null,de.createElement("h2",null,"Unexpected Application Error!"),de.createElement("h3",{style:{fontStyle:"italic"}},e),n?de.createElement("pre",{style:r},n):null,null)}const VS=de.createElement(HS,null);class GS extends de.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?de.createElement(gr.Provider,{value:this.props.routeContext},de.createElement(b_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function WS(t){let{routeContext:e,match:n,children:i}=t,r=de.useContext(Mu);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),de.createElement(gr.Provider,{value:e},i)}function XS(t,e,n,i){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var o;if((o=n)!=null&&o.errors)t=n.matches;else return null}let a=t,s=(r=n)==null?void 0:r.errors;if(s!=null){let c=a.findIndex(f=>f.route.id&&(s==null?void 0:s[f.route.id])!==void 0);c>=0||at(!1),a=a.slice(0,Math.min(a.length,c+1))}let l=!1,u=-1;if(n&&i&&i.v7_partialHydration)for(let c=0;c<a.length;c++){let f=a[c];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=c),f.route.id){let{loaderData:h,errors:m}=n,_=f.route.loader&&h[f.route.id]===void 0&&(!m||m[f.route.id]===void 0);if(f.route.lazy||_){l=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((c,f,h)=>{let m,_=!1,x=null,p=null;n&&(m=s&&f.route.id?s[f.route.id]:void 0,x=f.route.errorElement||VS,l&&(u<0&&h===0?(ZS("route-fallback"),_=!0,p=null):u===h&&(_=!0,p=f.route.hydrateFallbackElement||null)));let d=e.concat(a.slice(0,h+1)),g=()=>{let v;return m?v=x:_?v=p:f.route.Component?v=de.createElement(f.route.Component,null):f.route.element?v=f.route.element:v=c,de.createElement(WS,{match:f,routeContext:{outlet:c,matches:d,isDataRoute:n!=null},children:v})};return n&&(f.route.ErrorBoundary||f.route.errorElement||h===0)?de.createElement(GS,{location:n.location,revalidation:n.revalidation,component:x,error:m,children:g(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):g()},null)}var D_=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(D_||{}),$l=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}($l||{});function jS(t){let e=de.useContext(Mu);return e||at(!1),e}function YS(t){let e=de.useContext(P_);return e||at(!1),e}function $S(t){let e=de.useContext(gr);return e||at(!1),e}function U_(t){let e=$S(),n=e.matches[e.matches.length-1];return n.route.id||at(!1),n.route.id}function qS(){var t;let e=de.useContext(b_),n=YS($l.UseRouteError),i=U_($l.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function KS(){let{router:t}=jS(D_.UseNavigateStable),e=U_($l.UseNavigateStable),n=de.useRef(!1);return L_(()=>{n.current=!0}),de.useCallback(function(r,o){o===void 0&&(o={}),n.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,Yl({fromRouteId:e},o)))},[t,e])}const Ep={};function ZS(t,e,n){Ep[t]||(Ep[t]=!0)}function QS(t){let{to:e,replace:n,state:i,relative:r}=t;gs()||at(!1);let{future:o,static:a}=de.useContext(ms),{matches:s}=de.useContext(gr),{pathname:l}=Gd(),u=FS(),c=kd(e,Od(s,o.v7_relativeSplatPath),l,r==="path"),f=JSON.stringify(c);return de.useEffect(()=>u(JSON.parse(f),{replace:n,state:i,relative:r}),[u,f,r,n,i]),null}function JS(t){return zS(t.context)}function eM(t){let{basename:e="/",children:n=null,location:i,navigationType:r=Ft.Pop,navigator:o,static:a=!1,future:s}=t;gs()&&at(!1);let l=e.replace(/^\/*/,"/"),u=de.useMemo(()=>({basename:l,navigator:o,static:a,future:Yl({v7_relativeSplatPath:!1},s)}),[l,s,o,a]);typeof i=="string"&&(i=Di(i));let{pathname:c="/",search:f="",hash:h="",state:m=null,key:_="default"}=i,x=de.useMemo(()=>{let p=ps(c,l);return p==null?null:{location:{pathname:p,search:f,hash:h,state:m,key:_},navigationType:r}},[l,c,f,h,m,_,r]);return x==null?null:de.createElement(ms.Provider,{value:u},de.createElement(Vd.Provider,{children:n,value:x}))}new Promise(()=>{});function tM(t){let e={hasErrorBoundary:t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&Object.assign(e,{element:de.createElement(t.Component),Component:void 0}),t.HydrateFallback&&Object.assign(e,{hydrateFallbackElement:de.createElement(t.HydrateFallback),HydrateFallback:void 0}),t.ErrorBoundary&&Object.assign(e,{errorElement:de.createElement(t.ErrorBoundary),ErrorBoundary:void 0}),e}/**
 * React Router DOM v6.24.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ql(){return ql=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},ql.apply(this,arguments)}const nM="6";try{window.__reactRouterVersion=nM}catch{}function iM(t,e){return gS({basename:void 0,future:ql({},void 0,{v7_prependBasename:!0}),history:By({window:void 0}),hydrationData:rM(),routes:t,mapRouteProperties:tM,unstable_dataStrategy:void 0,unstable_patchRoutesOnMiss:void 0,window:void 0}).initialize()}function rM(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=ql({},e,{errors:oM(e.errors)})),e}function oM(t){if(!t)return null;let e=Object.entries(t),n={};for(let[i,r]of e)if(r&&r.__type==="RouteErrorResponse")n[i]=new zd(r.status,r.statusText,r.data,r.internal===!0);else if(r&&r.__type==="Error"){if(r.__subType){let o=window[r.__subType];if(typeof o=="function")try{let a=new o(r.message);a.stack="",n[i]=a}catch{}}if(n[i]==null){let o=new Error(r.message);o.stack="",n[i]=o}}else n[i]=r;return n}const aM=de.createContext({isTransitioning:!1}),sM=de.createContext(new Map),lM="startTransition",Tp=R0[lM],uM="flushSync",wp=zy[uM];function cM(t){Tp?Tp(t):t()}function _a(t){wp?wp(t):t()}class fM{constructor(){this.status="pending",this.promise=new Promise((e,n)=>{this.resolve=i=>{this.status==="pending"&&(this.status="resolved",e(i))},this.reject=i=>{this.status==="pending"&&(this.status="rejected",n(i))}})}}function dM(t){let{fallbackElement:e,router:n,future:i}=t,[r,o]=de.useState(n.state),[a,s]=de.useState(),[l,u]=de.useState({isTransitioning:!1}),[c,f]=de.useState(),[h,m]=de.useState(),[_,x]=de.useState(),p=de.useRef(new Map),{v7_startTransition:d}=i||{},g=de.useCallback(R=>{d?cM(R):R()},[d]),v=de.useCallback((R,L)=>{let{deletedFetchers:A,unstable_flushSync:M,unstable_viewTransitionOpts:P}=L;A.forEach(B=>p.current.delete(B)),R.fetchers.forEach((B,q)=>{B.data!==void 0&&p.current.set(q,B.data)});let j=n.window==null||n.window.document==null||typeof n.window.document.startViewTransition!="function";if(!P||j){M?_a(()=>o(R)):g(()=>o(R));return}if(M){_a(()=>{h&&(c&&c.resolve(),h.skipTransition()),u({isTransitioning:!0,flushSync:!0,currentLocation:P.currentLocation,nextLocation:P.nextLocation})});let B=n.window.document.startViewTransition(()=>{_a(()=>o(R))});B.finished.finally(()=>{_a(()=>{f(void 0),m(void 0),s(void 0),u({isTransitioning:!1})})}),_a(()=>m(B));return}h?(c&&c.resolve(),h.skipTransition(),x({state:R,currentLocation:P.currentLocation,nextLocation:P.nextLocation})):(s(R),u({isTransitioning:!0,flushSync:!1,currentLocation:P.currentLocation,nextLocation:P.nextLocation}))},[n.window,h,c,p,g]);de.useLayoutEffect(()=>n.subscribe(v),[n,v]),de.useEffect(()=>{l.isTransitioning&&!l.flushSync&&f(new fM)},[l]),de.useEffect(()=>{if(c&&a&&n.window){let R=a,L=c.promise,A=n.window.document.startViewTransition(async()=>{g(()=>o(R)),await L});A.finished.finally(()=>{f(void 0),m(void 0),s(void 0),u({isTransitioning:!1})}),m(A)}},[g,a,c,n.window]),de.useEffect(()=>{c&&a&&r.location.key===a.location.key&&c.resolve()},[c,h,r.location,a]),de.useEffect(()=>{!l.isTransitioning&&_&&(s(_.state),u({isTransitioning:!0,flushSync:!1,currentLocation:_.currentLocation,nextLocation:_.nextLocation}),x(void 0))},[l.isTransitioning,_]),de.useEffect(()=>{},[]);let w=de.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:R=>n.navigate(R),push:(R,L,A)=>n.navigate(R,{state:L,preventScrollReset:A==null?void 0:A.preventScrollReset}),replace:(R,L,A)=>n.navigate(R,{replace:!0,state:L,preventScrollReset:A==null?void 0:A.preventScrollReset})}),[n]),b=n.basename||"/",S=de.useMemo(()=>({router:n,navigator:w,static:!1,basename:b}),[n,w,b]);return de.createElement(de.Fragment,null,de.createElement(Mu.Provider,{value:S},de.createElement(P_.Provider,{value:r},de.createElement(sM.Provider,{value:p.current},de.createElement(aM.Provider,{value:l},de.createElement(eM,{basename:b,location:r.location,navigationType:r.historyAction,navigator:w,future:{v7_relativeSplatPath:n.future.v7_relativeSplatPath}},r.initialized||n.future.v7_partialHydration?de.createElement(hM,{routes:n.routes,future:n.future,state:r}):e))))),null)}function hM(t){let{routes:e,future:n,state:i}=t;return BS(e,void 0,i,n)}var Ap;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Ap||(Ap={}));var Rp;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Rp||(Rp={}));function pM(){return $t.jsx("div",{className:"app",children:$t.jsx(JS,{})})}function mM(){return"test"}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Wd="165",eo={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},to={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},gM=0,Cp=1,vM=2,N_=1,I_=2,_i=3,fr=0,xn=1,si=2,sr=0,Bo=1,Pp=2,bp=3,Lp=4,_M=5,Pr=100,xM=101,yM=102,SM=103,MM=104,EM=200,TM=201,wM=202,AM=203,If=204,Ff=205,RM=206,CM=207,PM=208,bM=209,LM=210,DM=211,UM=212,NM=213,IM=214,FM=0,OM=1,kM=2,Kl=3,zM=4,BM=5,HM=6,VM=7,F_=0,GM=1,WM=2,lr=0,XM=1,jM=2,YM=3,$M=4,qM=5,KM=6,ZM=7,O_=300,Ko=301,Zo=302,Of=303,kf=304,Eu=306,zf=1e3,Fr=1001,Bf=1002,kn=1003,QM=1004,Os=1005,Kn=1006,ac=1007,Or=1008,dr=1009,JM=1010,eE=1011,Zl=1012,k_=1013,Qo=1014,Zi=1015,Tu=1016,z_=1017,B_=1018,Jo=1020,tE=35902,nE=1021,iE=1022,ui=1023,rE=1024,oE=1025,Ho=1026,ea=1027,aE=1028,H_=1029,sE=1030,V_=1031,G_=1033,sc=33776,lc=33777,uc=33778,cc=33779,Dp=35840,Up=35841,Np=35842,Ip=35843,Fp=36196,Op=37492,kp=37496,zp=37808,Bp=37809,Hp=37810,Vp=37811,Gp=37812,Wp=37813,Xp=37814,jp=37815,Yp=37816,$p=37817,qp=37818,Kp=37819,Zp=37820,Qp=37821,fc=36492,Jp=36494,em=36495,lE=36283,tm=36284,nm=36285,im=36286,uE=3200,cE=3201,fE=0,dE=1,$i="",ri="srgb",vr="srgb-linear",Xd="display-p3",wu="display-p3-linear",Ql="linear",Et="srgb",Jl="rec709",eu="p3",no=7680,rm=519,hE=512,pE=513,mE=514,W_=515,gE=516,vE=517,_E=518,xE=519,om=35044,am="300 es",Ei=2e3,tu=2001;class Kr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,a=r.length;o<a;o++)r[o].call(this,e);e.target=null}}}const en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let sm=1234567;const Ba=Math.PI/180,ss=180/Math.PI;function oa(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(en[t&255]+en[t>>8&255]+en[t>>16&255]+en[t>>24&255]+"-"+en[e&255]+en[e>>8&255]+"-"+en[e>>16&15|64]+en[e>>24&255]+"-"+en[n&63|128]+en[n>>8&255]+"-"+en[n>>16&255]+en[n>>24&255]+en[i&255]+en[i>>8&255]+en[i>>16&255]+en[i>>24&255]).toLowerCase()}function rn(t,e,n){return Math.max(e,Math.min(n,t))}function jd(t,e){return(t%e+e)%e}function yE(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function SE(t,e,n){return t!==e?(n-t)/(e-t):0}function Ha(t,e,n){return(1-n)*t+n*e}function ME(t,e,n,i){return Ha(t,e,1-Math.exp(-n*i))}function EE(t,e=1){return e-Math.abs(jd(t,e*2)-e)}function TE(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function wE(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function AE(t,e){return t+Math.floor(Math.random()*(e-t+1))}function RE(t,e){return t+Math.random()*(e-t)}function CE(t){return t*(.5-Math.random())}function PE(t){t!==void 0&&(sm=t);let e=sm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function bE(t){return t*Ba}function LE(t){return t*ss}function DE(t){return(t&t-1)===0&&t!==0}function UE(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function NE(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function IE(t,e,n,i,r){const o=Math.cos,a=Math.sin,s=o(n/2),l=a(n/2),u=o((e+i)/2),c=a((e+i)/2),f=o((e-i)/2),h=a((e-i)/2),m=o((i-e)/2),_=a((i-e)/2);switch(r){case"XYX":t.set(s*c,l*f,l*h,s*u);break;case"YZY":t.set(l*h,s*c,l*f,s*u);break;case"ZXZ":t.set(l*f,l*h,s*c,s*u);break;case"XZX":t.set(s*c,l*_,l*m,s*u);break;case"YXY":t.set(l*m,s*c,l*_,s*u);break;case"ZYZ":t.set(l*_,l*m,s*c,s*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function yo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function sn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const FE={DEG2RAD:Ba,RAD2DEG:ss,generateUUID:oa,clamp:rn,euclideanModulo:jd,mapLinear:yE,inverseLerp:SE,lerp:Ha,damp:ME,pingpong:EE,smoothstep:TE,smootherstep:wE,randInt:AE,randFloat:RE,randFloatSpread:CE,seededRandom:PE,degToRad:bE,radToDeg:LE,isPowerOfTwo:DE,ceilPowerOfTwo:UE,floorPowerOfTwo:NE,setQuaternionFromProperEuler:IE,normalize:sn,denormalize:yo};class et{constructor(e=0,n=0){et.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(rn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),o=this.x-e.x,a=this.y-e.y;return this.x=o*i-a*r+e.x,this.y=o*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class it{constructor(e,n,i,r,o,a,s,l,u){it.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,a,s,l,u)}set(e,n,i,r,o,a,s,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=s,c[3]=n,c[4]=o,c[5]=l,c[6]=i,c[7]=a,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,a=i[0],s=i[3],l=i[6],u=i[1],c=i[4],f=i[7],h=i[2],m=i[5],_=i[8],x=r[0],p=r[3],d=r[6],g=r[1],v=r[4],w=r[7],b=r[2],S=r[5],R=r[8];return o[0]=a*x+s*g+l*b,o[3]=a*p+s*v+l*S,o[6]=a*d+s*w+l*R,o[1]=u*x+c*g+f*b,o[4]=u*p+c*v+f*S,o[7]=u*d+c*w+f*R,o[2]=h*x+m*g+_*b,o[5]=h*p+m*v+_*S,o[8]=h*d+m*w+_*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],a=e[4],s=e[5],l=e[6],u=e[7],c=e[8];return n*a*c-n*s*u-i*o*c+i*s*l+r*o*u-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],a=e[4],s=e[5],l=e[6],u=e[7],c=e[8],f=c*a-s*u,h=s*l-c*o,m=u*o-a*l,_=n*f+i*h+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=f*x,e[1]=(r*u-c*i)*x,e[2]=(s*i-r*a)*x,e[3]=h*x,e[4]=(c*n-r*l)*x,e[5]=(r*o-s*n)*x,e[6]=m*x,e[7]=(i*l-u*n)*x,e[8]=(a*n-i*o)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,o,a,s){const l=Math.cos(o),u=Math.sin(o);return this.set(i*l,i*u,-i*(l*a+u*s)+a+e,-r*u,r*l,-r*(-u*a+l*s)+s+n,0,0,1),this}scale(e,n){return this.premultiply(dc.makeScale(e,n)),this}rotate(e){return this.premultiply(dc.makeRotation(-e)),this}translate(e,n){return this.premultiply(dc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const dc=new it;function X_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function nu(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function OE(){const t=nu("canvas");return t.style.display="block",t}const lm={};function j_(t){t in lm||(lm[t]=!0,console.warn(t))}function kE(t,e,n){return new Promise(function(i,r){function o(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(o,n);break;default:i()}}setTimeout(o,n)})}const um=new it().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),cm=new it().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ks={[vr]:{transfer:Ql,primaries:Jl,toReference:t=>t,fromReference:t=>t},[ri]:{transfer:Et,primaries:Jl,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[wu]:{transfer:Ql,primaries:eu,toReference:t=>t.applyMatrix3(cm),fromReference:t=>t.applyMatrix3(um)},[Xd]:{transfer:Et,primaries:eu,toReference:t=>t.convertSRGBToLinear().applyMatrix3(cm),fromReference:t=>t.applyMatrix3(um).convertLinearToSRGB()}},zE=new Set([vr,wu]),ht={enabled:!0,_workingColorSpace:vr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!zE.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=ks[e].toReference,r=ks[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return ks[t].primaries},getTransfer:function(t){return t===$i?Ql:ks[t].transfer}};function Vo(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function hc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let io;class BE{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{io===void 0&&(io=nu("canvas")),io.width=e.width,io.height=e.height;const i=io.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=io}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=nu("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let a=0;a<o.length;a++)o[a]=Vo(o[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Vo(n[i]/255)*255):n[i]=Vo(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let HE=0;class Y_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:HE++}),this.uuid=oa(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let a=0,s=r.length;a<s;a++)r[a].isDataTexture?o.push(pc(r[a].image)):o.push(pc(r[a]))}else o=pc(r);i.url=o}return n||(e.images[this.uuid]=i),i}}function pc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?BE.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let VE=0;class yn extends Kr{constructor(e=yn.DEFAULT_IMAGE,n=yn.DEFAULT_MAPPING,i=Fr,r=Fr,o=Kn,a=Or,s=ui,l=dr,u=yn.DEFAULT_ANISOTROPY,c=$i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:VE++}),this.uuid=oa(),this.name="",this.source=new Y_(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=a,this.anisotropy=u,this.format=s,this.internalFormat=null,this.type=l,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new it,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==O_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zf:e.x=e.x-Math.floor(e.x);break;case Fr:e.x=e.x<0?0:1;break;case Bf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zf:e.y=e.y-Math.floor(e.y);break;case Fr:e.y=e.y<0?0:1;break;case Bf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}yn.DEFAULT_IMAGE=null;yn.DEFAULT_MAPPING=O_;yn.DEFAULT_ANISOTROPY=1;class qt{constructor(e=0,n=0,i=0,r=1){qt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*o,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*o,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*o,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,o;const l=e.elements,u=l[0],c=l[4],f=l[8],h=l[1],m=l[5],_=l[9],x=l[2],p=l[6],d=l[10];if(Math.abs(c-h)<.01&&Math.abs(f-x)<.01&&Math.abs(_-p)<.01){if(Math.abs(c+h)<.1&&Math.abs(f+x)<.1&&Math.abs(_+p)<.1&&Math.abs(u+m+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(u+1)/2,w=(m+1)/2,b=(d+1)/2,S=(c+h)/4,R=(f+x)/4,L=(_+p)/4;return v>w&&v>b?v<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(v),r=S/i,o=R/i):w>b?w<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(w),i=S/r,o=L/r):b<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(b),i=R/o,r=L/o),this.set(i,r,o,n),this}let g=Math.sqrt((p-_)*(p-_)+(f-x)*(f-x)+(h-c)*(h-c));return Math.abs(g)<.001&&(g=1),this.x=(p-_)/g,this.y=(f-x)/g,this.z=(h-c)/g,this.w=Math.acos((u+m+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class GE extends Kr{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new qt(0,0,e,n),this.scissorTest=!1,this.viewport=new qt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const o=new yn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);o.flipY=!1,o.generateMipmaps=i.generateMipmaps,o.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let s=0;s<a;s++)this.textures[s]=o.clone(),this.textures[s].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Y_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class jr extends GE{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class $_ extends yn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=kn,this.minFilter=kn,this.wrapR=Fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class WE extends yn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=kn,this.minFilter=kn,this.wrapR=Fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yr{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,o,a,s){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const h=o[a+0],m=o[a+1],_=o[a+2],x=o[a+3];if(s===0){e[n+0]=l,e[n+1]=u,e[n+2]=c,e[n+3]=f;return}if(s===1){e[n+0]=h,e[n+1]=m,e[n+2]=_,e[n+3]=x;return}if(f!==x||l!==h||u!==m||c!==_){let p=1-s;const d=l*h+u*m+c*_+f*x,g=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){const b=Math.sqrt(v),S=Math.atan2(b,d*g);p=Math.sin(p*S)/b,s=Math.sin(s*S)/b}const w=s*g;if(l=l*p+h*w,u=u*p+m*w,c=c*p+_*w,f=f*p+x*w,p===1-s){const b=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=b,u*=b,c*=b,f*=b}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,o,a){const s=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=o[a],h=o[a+1],m=o[a+2],_=o[a+3];return e[n]=s*_+c*f+l*m-u*h,e[n+1]=l*_+c*h+u*f-s*m,e[n+2]=u*_+c*m+s*h-l*f,e[n+3]=c*_-s*f-l*h-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,o=e._z,a=e._order,s=Math.cos,l=Math.sin,u=s(i/2),c=s(r/2),f=s(o/2),h=l(i/2),m=l(r/2),_=l(o/2);switch(a){case"XYZ":this._x=h*c*f+u*m*_,this._y=u*m*f-h*c*_,this._z=u*c*_+h*m*f,this._w=u*c*f-h*m*_;break;case"YXZ":this._x=h*c*f+u*m*_,this._y=u*m*f-h*c*_,this._z=u*c*_-h*m*f,this._w=u*c*f+h*m*_;break;case"ZXY":this._x=h*c*f-u*m*_,this._y=u*m*f+h*c*_,this._z=u*c*_+h*m*f,this._w=u*c*f-h*m*_;break;case"ZYX":this._x=h*c*f-u*m*_,this._y=u*m*f+h*c*_,this._z=u*c*_-h*m*f,this._w=u*c*f+h*m*_;break;case"YZX":this._x=h*c*f+u*m*_,this._y=u*m*f+h*c*_,this._z=u*c*_-h*m*f,this._w=u*c*f-h*m*_;break;case"XZY":this._x=h*c*f-u*m*_,this._y=u*m*f-h*c*_,this._z=u*c*_+h*m*f,this._w=u*c*f+h*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],o=n[8],a=n[1],s=n[5],l=n[9],u=n[2],c=n[6],f=n[10],h=i+s+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(c-l)*m,this._y=(o-u)*m,this._z=(a-r)*m}else if(i>s&&i>f){const m=2*Math.sqrt(1+i-s-f);this._w=(c-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(o+u)/m}else if(s>f){const m=2*Math.sqrt(1+s-i-f);this._w=(o-u)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+c)/m}else{const m=2*Math.sqrt(1+f-i-s);this._w=(a-r)/m,this._x=(o+u)/m,this._y=(l+c)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,o=e._z,a=e._w,s=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+a*s+r*u-o*l,this._y=r*c+a*l+o*s-i*u,this._z=o*c+a*u+i*l-r*s,this._w=a*c-i*s-r*l-o*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,o=this._z,a=this._w;let s=a*e._w+i*e._x+r*e._y+o*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=a,this._x=i,this._y=r,this._z=o,this;const l=1-s*s;if(l<=Number.EPSILON){const m=1-n;return this._w=m*a+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*o+n*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,s),f=Math.sin((1-n)*c)/u,h=Math.sin(n*c)/u;return this._w=a*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=o*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(n),o*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,n=0,i=0){H.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(fm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(fm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[3]*i+o[6]*r,this.y=o[1]*n+o[4]*i+o[7]*r,this.z=o[2]*n+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=e.elements,a=1/(o[3]*n+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*n+o[4]*i+o[8]*r+o[12])*a,this.y=(o[1]*n+o[5]*i+o[9]*r+o[13])*a,this.z=(o[2]*n+o[6]*i+o[10]*r+o[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,o=e.x,a=e.y,s=e.z,l=e.w,u=2*(a*r-s*i),c=2*(s*n-o*r),f=2*(o*i-a*n);return this.x=n+l*u+a*f-s*c,this.y=i+l*c+s*u-o*f,this.z=r+l*f+o*c-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r,this.y=o[1]*n+o[5]*i+o[9]*r,this.z=o[2]*n+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,o=e.z,a=n.x,s=n.y,l=n.z;return this.x=r*l-o*s,this.y=o*a-i*l,this.z=i*s-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return mc.copy(this).projectOnVector(e),this.sub(mc)}reflect(e){return this.sub(mc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(rn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const mc=new H,fm=new Yr;class vs{constructor(e=new H(1/0,1/0,1/0),n=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Gn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Gn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Gn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(n===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let a=0,s=o.count;a<s;a++)e.isMesh===!0?e.getVertexPosition(a,Gn):Gn.fromBufferAttribute(o,a),Gn.applyMatrix4(e.matrixWorld),this.expandByPoint(Gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),zs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),zs.copy(i.boundingBox)),zs.applyMatrix4(e.matrixWorld),this.union(zs)}const r=e.children;for(let o=0,a=r.length;o<a;o++)this.expandByObject(r[o],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Gn),Gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xa),Bs.subVectors(this.max,xa),ro.subVectors(e.a,xa),oo.subVectors(e.b,xa),ao.subVectors(e.c,xa),Fi.subVectors(oo,ro),Oi.subVectors(ao,oo),xr.subVectors(ro,ao);let n=[0,-Fi.z,Fi.y,0,-Oi.z,Oi.y,0,-xr.z,xr.y,Fi.z,0,-Fi.x,Oi.z,0,-Oi.x,xr.z,0,-xr.x,-Fi.y,Fi.x,0,-Oi.y,Oi.x,0,-xr.y,xr.x,0];return!gc(n,ro,oo,ao,Bs)||(n=[1,0,0,0,1,0,0,0,1],!gc(n,ro,oo,ao,Bs))?!1:(Hs.crossVectors(Fi,Oi),n=[Hs.x,Hs.y,Hs.z],gc(n,ro,oo,ao,Bs))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const hi=[new H,new H,new H,new H,new H,new H,new H,new H],Gn=new H,zs=new vs,ro=new H,oo=new H,ao=new H,Fi=new H,Oi=new H,xr=new H,xa=new H,Bs=new H,Hs=new H,yr=new H;function gc(t,e,n,i,r){for(let o=0,a=t.length-3;o<=a;o+=3){yr.fromArray(t,o);const s=r.x*Math.abs(yr.x)+r.y*Math.abs(yr.y)+r.z*Math.abs(yr.z),l=e.dot(yr),u=n.dot(yr),c=i.dot(yr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>s)return!1}return!0}const XE=new vs,ya=new H,vc=new H;class Au{constructor(e=new H,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):XE.setFromPoints(e).getCenter(i);let r=0;for(let o=0,a=e.length;o<a;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ya.subVectors(e,this.center);const n=ya.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ya,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ya.copy(e.center).add(vc)),this.expandByPoint(ya.copy(e.center).sub(vc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const pi=new H,_c=new H,Vs=new H,ki=new H,xc=new H,Gs=new H,yc=new H;class Yd{constructor(e=new H,n=new H(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=pi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(pi.copy(this.origin).addScaledVector(this.direction,n),pi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){_c.copy(e).add(n).multiplyScalar(.5),Vs.copy(n).sub(e).normalize(),ki.copy(this.origin).sub(_c);const o=e.distanceTo(n)*.5,a=-this.direction.dot(Vs),s=ki.dot(this.direction),l=-ki.dot(Vs),u=ki.lengthSq(),c=Math.abs(1-a*a);let f,h,m,_;if(c>0)if(f=a*l-s,h=a*s-l,_=o*c,f>=0)if(h>=-_)if(h<=_){const x=1/c;f*=x,h*=x,m=f*(f+a*h+2*s)+h*(a*f+h+2*l)+u}else h=o,f=Math.max(0,-(a*h+s)),m=-f*f+h*(h+2*l)+u;else h=-o,f=Math.max(0,-(a*h+s)),m=-f*f+h*(h+2*l)+u;else h<=-_?(f=Math.max(0,-(-a*o+s)),h=f>0?-o:Math.min(Math.max(-o,-l),o),m=-f*f+h*(h+2*l)+u):h<=_?(f=0,h=Math.min(Math.max(-o,-l),o),m=h*(h+2*l)+u):(f=Math.max(0,-(a*o+s)),h=f>0?o:Math.min(Math.max(-o,-l),o),m=-f*f+h*(h+2*l)+u);else h=a>0?-o:o,f=Math.max(0,-(a*h+s)),m=-f*f+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(_c).addScaledVector(Vs,h),m}intersectSphere(e,n){pi.subVectors(e.center,this.origin);const i=pi.dot(this.direction),r=pi.dot(pi)-i*i,o=e.radius*e.radius;if(r>o)return null;const a=Math.sqrt(o-r),s=i-a,l=i+a;return l<0?null:s<0?this.at(l,n):this.at(s,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,o,a,s,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),c>=0?(o=(e.min.y-h.y)*c,a=(e.max.y-h.y)*c):(o=(e.max.y-h.y)*c,a=(e.min.y-h.y)*c),i>a||o>r||((o>i||isNaN(i))&&(i=o),(a<r||isNaN(r))&&(r=a),f>=0?(s=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(s=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||s>r)||((s>i||i!==i)&&(i=s),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,pi)!==null}intersectTriangle(e,n,i,r,o){xc.subVectors(n,e),Gs.subVectors(i,e),yc.crossVectors(xc,Gs);let a=this.direction.dot(yc),s;if(a>0){if(r)return null;s=1}else if(a<0)s=-1,a=-a;else return null;ki.subVectors(this.origin,e);const l=s*this.direction.dot(Gs.crossVectors(ki,Gs));if(l<0)return null;const u=s*this.direction.dot(xc.cross(ki));if(u<0||l+u>a)return null;const c=-s*ki.dot(yc);return c<0?null:this.at(c/a,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class kt{constructor(e,n,i,r,o,a,s,l,u,c,f,h,m,_,x,p){kt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,a,s,l,u,c,f,h,m,_,x,p)}set(e,n,i,r,o,a,s,l,u,c,f,h,m,_,x,p){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=o,d[5]=a,d[9]=s,d[13]=l,d[2]=u,d[6]=c,d[10]=f,d[14]=h,d[3]=m,d[7]=_,d[11]=x,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new kt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/so.setFromMatrixColumn(e,0).length(),o=1/so.setFromMatrixColumn(e,1).length(),a=1/so.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*o,n[5]=i[5]*o,n[6]=i[6]*o,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,o=e.z,a=Math.cos(i),s=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(o),f=Math.sin(o);if(e.order==="XYZ"){const h=a*c,m=a*f,_=s*c,x=s*f;n[0]=l*c,n[4]=-l*f,n[8]=u,n[1]=m+_*u,n[5]=h-x*u,n[9]=-s*l,n[2]=x-h*u,n[6]=_+m*u,n[10]=a*l}else if(e.order==="YXZ"){const h=l*c,m=l*f,_=u*c,x=u*f;n[0]=h+x*s,n[4]=_*s-m,n[8]=a*u,n[1]=a*f,n[5]=a*c,n[9]=-s,n[2]=m*s-_,n[6]=x+h*s,n[10]=a*l}else if(e.order==="ZXY"){const h=l*c,m=l*f,_=u*c,x=u*f;n[0]=h-x*s,n[4]=-a*f,n[8]=_+m*s,n[1]=m+_*s,n[5]=a*c,n[9]=x-h*s,n[2]=-a*u,n[6]=s,n[10]=a*l}else if(e.order==="ZYX"){const h=a*c,m=a*f,_=s*c,x=s*f;n[0]=l*c,n[4]=_*u-m,n[8]=h*u+x,n[1]=l*f,n[5]=x*u+h,n[9]=m*u-_,n[2]=-u,n[6]=s*l,n[10]=a*l}else if(e.order==="YZX"){const h=a*l,m=a*u,_=s*l,x=s*u;n[0]=l*c,n[4]=x-h*f,n[8]=_*f+m,n[1]=f,n[5]=a*c,n[9]=-s*c,n[2]=-u*c,n[6]=m*f+_,n[10]=h-x*f}else if(e.order==="XZY"){const h=a*l,m=a*u,_=s*l,x=s*u;n[0]=l*c,n[4]=-f,n[8]=u*c,n[1]=h*f+x,n[5]=a*c,n[9]=m*f-_,n[2]=_*f-m,n[6]=s*c,n[10]=x*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jE,e,YE)}lookAt(e,n,i){const r=this.elements;return Mn.subVectors(e,n),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),zi.crossVectors(i,Mn),zi.lengthSq()===0&&(Math.abs(i.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),zi.crossVectors(i,Mn)),zi.normalize(),Ws.crossVectors(Mn,zi),r[0]=zi.x,r[4]=Ws.x,r[8]=Mn.x,r[1]=zi.y,r[5]=Ws.y,r[9]=Mn.y,r[2]=zi.z,r[6]=Ws.z,r[10]=Mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,a=i[0],s=i[4],l=i[8],u=i[12],c=i[1],f=i[5],h=i[9],m=i[13],_=i[2],x=i[6],p=i[10],d=i[14],g=i[3],v=i[7],w=i[11],b=i[15],S=r[0],R=r[4],L=r[8],A=r[12],M=r[1],P=r[5],j=r[9],B=r[13],q=r[2],J=r[6],K=r[10],Z=r[14],I=r[3],ee=r[7],te=r[11],ue=r[15];return o[0]=a*S+s*M+l*q+u*I,o[4]=a*R+s*P+l*J+u*ee,o[8]=a*L+s*j+l*K+u*te,o[12]=a*A+s*B+l*Z+u*ue,o[1]=c*S+f*M+h*q+m*I,o[5]=c*R+f*P+h*J+m*ee,o[9]=c*L+f*j+h*K+m*te,o[13]=c*A+f*B+h*Z+m*ue,o[2]=_*S+x*M+p*q+d*I,o[6]=_*R+x*P+p*J+d*ee,o[10]=_*L+x*j+p*K+d*te,o[14]=_*A+x*B+p*Z+d*ue,o[3]=g*S+v*M+w*q+b*I,o[7]=g*R+v*P+w*J+b*ee,o[11]=g*L+v*j+w*K+b*te,o[15]=g*A+v*B+w*Z+b*ue,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],o=e[12],a=e[1],s=e[5],l=e[9],u=e[13],c=e[2],f=e[6],h=e[10],m=e[14],_=e[3],x=e[7],p=e[11],d=e[15];return _*(+o*l*f-r*u*f-o*s*h+i*u*h+r*s*m-i*l*m)+x*(+n*l*m-n*u*h+o*a*h-r*a*m+r*u*c-o*l*c)+p*(+n*u*f-n*s*m-o*a*f+i*a*m+o*s*c-i*u*c)+d*(-r*s*c-n*l*f+n*s*h+r*a*f-i*a*h+i*l*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],a=e[4],s=e[5],l=e[6],u=e[7],c=e[8],f=e[9],h=e[10],m=e[11],_=e[12],x=e[13],p=e[14],d=e[15],g=f*p*u-x*h*u+x*l*m-s*p*m-f*l*d+s*h*d,v=_*h*u-c*p*u-_*l*m+a*p*m+c*l*d-a*h*d,w=c*x*u-_*f*u+_*s*m-a*x*m-c*s*d+a*f*d,b=_*f*l-c*x*l-_*s*h+a*x*h+c*s*p-a*f*p,S=n*g+i*v+r*w+o*b;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/S;return e[0]=g*R,e[1]=(x*h*o-f*p*o-x*r*m+i*p*m+f*r*d-i*h*d)*R,e[2]=(s*p*o-x*l*o+x*r*u-i*p*u-s*r*d+i*l*d)*R,e[3]=(f*l*o-s*h*o-f*r*u+i*h*u+s*r*m-i*l*m)*R,e[4]=v*R,e[5]=(c*p*o-_*h*o+_*r*m-n*p*m-c*r*d+n*h*d)*R,e[6]=(_*l*o-a*p*o-_*r*u+n*p*u+a*r*d-n*l*d)*R,e[7]=(a*h*o-c*l*o+c*r*u-n*h*u-a*r*m+n*l*m)*R,e[8]=w*R,e[9]=(_*f*o-c*x*o-_*i*m+n*x*m+c*i*d-n*f*d)*R,e[10]=(a*x*o-_*s*o+_*i*u-n*x*u-a*i*d+n*s*d)*R,e[11]=(c*s*o-a*f*o-c*i*u+n*f*u+a*i*m-n*s*m)*R,e[12]=b*R,e[13]=(c*x*r-_*f*r+_*i*h-n*x*h-c*i*p+n*f*p)*R,e[14]=(_*s*r-a*x*r-_*i*l+n*x*l+a*i*p-n*s*p)*R,e[15]=(a*f*r-c*s*r+c*i*l-n*f*l-a*i*h+n*s*h)*R,this}scale(e){const n=this.elements,i=e.x,r=e.y,o=e.z;return n[0]*=i,n[4]*=r,n[8]*=o,n[1]*=i,n[5]*=r,n[9]*=o,n[2]*=i,n[6]*=r,n[10]*=o,n[3]*=i,n[7]*=r,n[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),o=1-i,a=e.x,s=e.y,l=e.z,u=o*a,c=o*s;return this.set(u*a+i,u*s-r*l,u*l+r*s,0,u*s+r*l,c*s+i,c*l-r*a,0,u*l-r*s,c*l+r*a,o*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,o,a){return this.set(1,i,o,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,o=n._x,a=n._y,s=n._z,l=n._w,u=o+o,c=a+a,f=s+s,h=o*u,m=o*c,_=o*f,x=a*c,p=a*f,d=s*f,g=l*u,v=l*c,w=l*f,b=i.x,S=i.y,R=i.z;return r[0]=(1-(x+d))*b,r[1]=(m+w)*b,r[2]=(_-v)*b,r[3]=0,r[4]=(m-w)*S,r[5]=(1-(h+d))*S,r[6]=(p+g)*S,r[7]=0,r[8]=(_+v)*R,r[9]=(p-g)*R,r[10]=(1-(h+x))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let o=so.set(r[0],r[1],r[2]).length();const a=so.set(r[4],r[5],r[6]).length(),s=so.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],Wn.copy(this);const u=1/o,c=1/a,f=1/s;return Wn.elements[0]*=u,Wn.elements[1]*=u,Wn.elements[2]*=u,Wn.elements[4]*=c,Wn.elements[5]*=c,Wn.elements[6]*=c,Wn.elements[8]*=f,Wn.elements[9]*=f,Wn.elements[10]*=f,n.setFromRotationMatrix(Wn),i.x=o,i.y=a,i.z=s,this}makePerspective(e,n,i,r,o,a,s=Ei){const l=this.elements,u=2*o/(n-e),c=2*o/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r);let m,_;if(s===Ei)m=-(a+o)/(a-o),_=-2*a*o/(a-o);else if(s===tu)m=-a/(a-o),_=-a*o/(a-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=c,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,o,a,s=Ei){const l=this.elements,u=1/(n-e),c=1/(i-r),f=1/(a-o),h=(n+e)*u,m=(i+r)*c;let _,x;if(s===Ei)_=(a+o)*f,x=-2*f;else if(s===tu)_=o*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const so=new H,Wn=new kt,jE=new H(0,0,0),YE=new H(1,1,1),zi=new H,Ws=new H,Mn=new H,dm=new kt,hm=new Yr;class Pi{constructor(e=0,n=0,i=0,r=Pi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,o=r[0],a=r[4],s=r[8],l=r[1],u=r[5],c=r[9],f=r[2],h=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(rn(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-c,m),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-rn(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(s,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(rn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-rn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(rn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(s,m));break;case"XZY":this._z=Math.asin(-rn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(s,o)):(this._x=Math.atan2(-c,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return dm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(dm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return hm.setFromEuler(this),this.setFromQuaternion(hm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pi.DEFAULT_ORDER="XYZ";class q_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let $E=0;const pm=new H,lo=new Yr,mi=new kt,Xs=new H,Sa=new H,qE=new H,KE=new Yr,mm=new H(1,0,0),gm=new H(0,1,0),vm=new H(0,0,1),_m={type:"added"},ZE={type:"removed"},uo={type:"childadded",child:null},Sc={type:"childremoved",child:null};class Sn extends Kr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$E++}),this.uuid=oa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Sn.DEFAULT_UP.clone();const e=new H,n=new Pi,i=new Yr,r=new H(1,1,1);function o(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(o),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new kt},normalMatrix:{value:new it}}),this.matrix=new kt,this.matrixWorld=new kt,this.matrixAutoUpdate=Sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new q_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return lo.setFromAxisAngle(e,n),this.quaternion.multiply(lo),this}rotateOnWorldAxis(e,n){return lo.setFromAxisAngle(e,n),this.quaternion.premultiply(lo),this}rotateX(e){return this.rotateOnAxis(mm,e)}rotateY(e){return this.rotateOnAxis(gm,e)}rotateZ(e){return this.rotateOnAxis(vm,e)}translateOnAxis(e,n){return pm.copy(e).applyQuaternion(this.quaternion),this.position.add(pm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(mm,e)}translateY(e){return this.translateOnAxis(gm,e)}translateZ(e){return this.translateOnAxis(vm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Xs.copy(e):Xs.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Sa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt(Sa,Xs,this.up):mi.lookAt(Xs,Sa,this.up),this.quaternion.setFromRotationMatrix(mi),r&&(mi.extractRotation(r.matrixWorld),lo.setFromRotationMatrix(mi),this.quaternion.premultiply(lo.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_m),uo.child=e,this.dispatchEvent(uo),uo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(ZE),Sc.child=e,this.dispatchEvent(Sc),Sc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(mi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_m),uo.child=e,this.dispatchEvent(uo),uo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sa,e,qE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sa,KE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const o=n[i];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++){const s=r[o];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(s=>({boxInitialized:s.boxInitialized,boxMin:s.box.min.toArray(),boxMax:s.box.max.toArray(),sphereInitialized:s.sphereInitialized,sphereRadius:s.sphere.radius,sphereCenter:s.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function o(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];o(e.shapes,f)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,u=this.material.length;l<u;l++)s.push(o(e.materials,this.material[l]));r.material=s}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let s=0;s<this.children.length;s++)r.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];r.animations.push(o(e.animations,l))}}if(n){const s=a(e.geometries),l=a(e.materials),u=a(e.textures),c=a(e.images),f=a(e.shapes),h=a(e.skeletons),m=a(e.animations),_=a(e.nodes);s.length>0&&(i.geometries=s),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(s){const l=[];for(const u in s){const c=s[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Sn.DEFAULT_UP=new H(0,1,0);Sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xn=new H,gi=new H,Mc=new H,vi=new H,co=new H,fo=new H,xm=new H,Ec=new H,Tc=new H,wc=new H;class li{constructor(e=new H,n=new H,i=new H){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Xn.subVectors(e,n),r.cross(Xn);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,n,i,r,o){Xn.subVectors(r,n),gi.subVectors(i,n),Mc.subVectors(e,n);const a=Xn.dot(Xn),s=Xn.dot(gi),l=Xn.dot(Mc),u=gi.dot(gi),c=gi.dot(Mc),f=a*u-s*s;if(f===0)return o.set(0,0,0),null;const h=1/f,m=(u*l-s*c)*h,_=(a*c-s*l)*h;return o.set(1-m-_,_,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,vi)===null?!1:vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getInterpolation(e,n,i,r,o,a,s,l){return this.getBarycoord(e,n,i,r,vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,vi.x),l.addScaledVector(a,vi.y),l.addScaledVector(s,vi.z),l)}static isFrontFacing(e,n,i,r){return Xn.subVectors(i,n),gi.subVectors(e,n),Xn.cross(gi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xn.subVectors(this.c,this.b),gi.subVectors(this.a,this.b),Xn.cross(gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return li.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return li.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,o){return li.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}containsPoint(e){return li.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return li.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,o=this.c;let a,s;co.subVectors(r,i),fo.subVectors(o,i),Ec.subVectors(e,i);const l=co.dot(Ec),u=fo.dot(Ec);if(l<=0&&u<=0)return n.copy(i);Tc.subVectors(e,r);const c=co.dot(Tc),f=fo.dot(Tc);if(c>=0&&f<=c)return n.copy(r);const h=l*f-c*u;if(h<=0&&l>=0&&c<=0)return a=l/(l-c),n.copy(i).addScaledVector(co,a);wc.subVectors(e,o);const m=co.dot(wc),_=fo.dot(wc);if(_>=0&&m<=_)return n.copy(o);const x=m*u-l*_;if(x<=0&&u>=0&&_<=0)return s=u/(u-_),n.copy(i).addScaledVector(fo,s);const p=c*_-m*f;if(p<=0&&f-c>=0&&m-_>=0)return xm.subVectors(o,r),s=(f-c)/(f-c+(m-_)),n.copy(r).addScaledVector(xm,s);const d=1/(p+x+h);return a=x*d,s=h*d,n.copy(i).addScaledVector(co,a).addScaledVector(fo,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const K_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bi={h:0,s:0,l:0},js={h:0,s:0,l:0};function Ac(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class ft{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ri){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=ht.workingColorSpace){return this.r=e,this.g=n,this.b=i,ht.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=ht.workingColorSpace){if(e=jd(e,1),n=rn(n,0,1),i=rn(i,0,1),n===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+n):i+n-i*n,a=2*i-o;this.r=Ac(a,o,e+1/3),this.g=Ac(a,o,e),this.b=Ac(a,o,e-1/3)}return ht.toWorkingColorSpace(this,r),this}setStyle(e,n=ri){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const a=r[1],s=r[2];switch(a){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,n);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,n);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],a=o.length;if(a===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(o,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ri){const i=K_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vo(e.r),this.g=Vo(e.g),this.b=Vo(e.b),this}copyLinearToSRGB(e){return this.r=hc(e.r),this.g=hc(e.g),this.b=hc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ri){return ht.fromWorkingColorSpace(tn.copy(this),e),Math.round(rn(tn.r*255,0,255))*65536+Math.round(rn(tn.g*255,0,255))*256+Math.round(rn(tn.b*255,0,255))}getHexString(e=ri){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=ht.workingColorSpace){ht.fromWorkingColorSpace(tn.copy(this),n);const i=tn.r,r=tn.g,o=tn.b,a=Math.max(i,r,o),s=Math.min(i,r,o);let l,u;const c=(s+a)/2;if(s===a)l=0,u=0;else{const f=a-s;switch(u=c<=.5?f/(a+s):f/(2-a-s),a){case i:l=(r-o)/f+(r<o?6:0);break;case r:l=(o-i)/f+2;break;case o:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=ht.workingColorSpace){return ht.fromWorkingColorSpace(tn.copy(this),n),e.r=tn.r,e.g=tn.g,e.b=tn.b,e}getStyle(e=ri){ht.fromWorkingColorSpace(tn.copy(this),e);const n=tn.r,i=tn.g,r=tn.b;return e!==ri?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Bi),this.setHSL(Bi.h+e,Bi.s+n,Bi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Bi),e.getHSL(js);const i=Ha(Bi.h,js.h,n),r=Ha(Bi.s,js.s,n),o=Ha(Bi.l,js.l,n);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*n+o[3]*i+o[6]*r,this.g=o[1]*n+o[4]*i+o[7]*r,this.b=o[2]*n+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const tn=new ft;ft.NAMES=K_;let QE=0;class _s extends Kr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:QE++}),this.uuid=oa(),this.name="",this.type="Material",this.blending=Bo,this.side=fr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=If,this.blendDst=Ff,this.blendEquation=Pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ft(0,0,0),this.blendAlpha=0,this.depthFunc=Kl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=no,this.stencilZFail=no,this.stencilZPass=no,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Bo&&(i.blending=this.blending),this.side!==fr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==If&&(i.blendSrc=this.blendSrc),this.blendDst!==Ff&&(i.blendDst=this.blendDst),this.blendEquation!==Pr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Kl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==rm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==no&&(i.stencilFail=this.stencilFail),this.stencilZFail!==no&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==no&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const a=[];for(const s in o){const l=o[s];delete l.metadata,a.push(l)}return a}if(n){const o=r(e.textures),a=r(e.images);o.length>0&&(i.textures=o),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=n[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class $d extends _s{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.combine=F_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const It=new H,Ys=new et;class di{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=om,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Zi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return j_("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ys.fromBufferAttribute(this,n),Ys.applyMatrix3(e),this.setXY(n,Ys.x,Ys.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)It.fromBufferAttribute(this,n),It.applyMatrix3(e),this.setXYZ(n,It.x,It.y,It.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)It.fromBufferAttribute(this,n),It.applyMatrix4(e),this.setXYZ(n,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)It.fromBufferAttribute(this,n),It.applyNormalMatrix(e),this.setXYZ(n,It.x,It.y,It.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)It.fromBufferAttribute(this,n),It.transformDirection(e),this.setXYZ(n,It.x,It.y,It.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=yo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=sn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=yo(n,this.array)),n}setX(e,n){return this.normalized&&(n=sn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=yo(n,this.array)),n}setY(e,n){return this.normalized&&(n=sn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=yo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=sn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=yo(n,this.array)),n}setW(e,n){return this.normalized&&(n=sn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=sn(n,this.array),i=sn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=sn(n,this.array),i=sn(i,this.array),r=sn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,o){return e*=this.itemSize,this.normalized&&(n=sn(n,this.array),i=sn(i,this.array),r=sn(r,this.array),o=sn(o,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==om&&(e.usage=this.usage),e}}class Z_ extends di{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Q_ extends di{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class ei extends di{constructor(e,n,i){super(new Float32Array(e),n,i)}}let JE=0;const Un=new kt,Rc=new Sn,ho=new H,En=new vs,Ma=new vs,Wt=new H;class Ui extends Kr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:JE++}),this.uuid=oa(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(X_(e)?Q_:Z_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new it().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Un.makeRotationFromQuaternion(e),this.applyMatrix4(Un),this}rotateX(e){return Un.makeRotationX(e),this.applyMatrix4(Un),this}rotateY(e){return Un.makeRotationY(e),this.applyMatrix4(Un),this}rotateZ(e){return Un.makeRotationZ(e),this.applyMatrix4(Un),this}translate(e,n,i){return Un.makeTranslation(e,n,i),this.applyMatrix4(Un),this}scale(e,n,i){return Un.makeScale(e,n,i),this.applyMatrix4(Un),this}lookAt(e){return Rc.lookAt(e),Rc.updateMatrix(),this.applyMatrix4(Rc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ho).negate(),this.translate(ho.x,ho.y,ho.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new ei(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vs);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const o=n[i];En.setFromBufferAttribute(o),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Au);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(En.setFromBufferAttribute(e),n)for(let o=0,a=n.length;o<a;o++){const s=n[o];Ma.setFromBufferAttribute(s),this.morphTargetsRelative?(Wt.addVectors(En.min,Ma.min),En.expandByPoint(Wt),Wt.addVectors(En.max,Ma.max),En.expandByPoint(Wt)):(En.expandByPoint(Ma.min),En.expandByPoint(Ma.max))}En.getCenter(i);let r=0;for(let o=0,a=e.count;o<a;o++)Wt.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(Wt));if(n)for(let o=0,a=n.length;o<a;o++){const s=n[o],l=this.morphTargetsRelative;for(let u=0,c=s.count;u<c;u++)Wt.fromBufferAttribute(s,u),l&&(ho.fromBufferAttribute(e,u),Wt.add(ho)),r=Math.max(r,i.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,o=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new di(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),s=[],l=[];for(let L=0;L<i.count;L++)s[L]=new H,l[L]=new H;const u=new H,c=new H,f=new H,h=new et,m=new et,_=new et,x=new H,p=new H;function d(L,A,M){u.fromBufferAttribute(i,L),c.fromBufferAttribute(i,A),f.fromBufferAttribute(i,M),h.fromBufferAttribute(o,L),m.fromBufferAttribute(o,A),_.fromBufferAttribute(o,M),c.sub(u),f.sub(u),m.sub(h),_.sub(h);const P=1/(m.x*_.y-_.x*m.y);isFinite(P)&&(x.copy(c).multiplyScalar(_.y).addScaledVector(f,-m.y).multiplyScalar(P),p.copy(f).multiplyScalar(m.x).addScaledVector(c,-_.x).multiplyScalar(P),s[L].add(x),s[A].add(x),s[M].add(x),l[L].add(p),l[A].add(p),l[M].add(p))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let L=0,A=g.length;L<A;++L){const M=g[L],P=M.start,j=M.count;for(let B=P,q=P+j;B<q;B+=3)d(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const v=new H,w=new H,b=new H,S=new H;function R(L){b.fromBufferAttribute(r,L),S.copy(b);const A=s[L];v.copy(A),v.sub(b.multiplyScalar(b.dot(A))).normalize(),w.crossVectors(S,A);const P=w.dot(l[L])<0?-1:1;a.setXYZW(L,v.x,v.y,v.z,P)}for(let L=0,A=g.length;L<A;++L){const M=g[L],P=M.start,j=M.count;for(let B=P,q=P+j;B<q;B+=3)R(e.getX(B+0)),R(e.getX(B+1)),R(e.getX(B+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new di(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new H,o=new H,a=new H,s=new H,l=new H,u=new H,c=new H,f=new H;if(e)for(let h=0,m=e.count;h<m;h+=3){const _=e.getX(h+0),x=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(n,_),o.fromBufferAttribute(n,x),a.fromBufferAttribute(n,p),c.subVectors(a,o),f.subVectors(r,o),c.cross(f),s.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),u.fromBufferAttribute(i,p),s.add(c),l.add(c),u.add(c),i.setXYZ(_,s.x,s.y,s.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,u.x,u.y,u.z)}else for(let h=0,m=n.count;h<m;h+=3)r.fromBufferAttribute(n,h+0),o.fromBufferAttribute(n,h+1),a.fromBufferAttribute(n,h+2),c.subVectors(a,o),f.subVectors(r,o),c.cross(f),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Wt.fromBufferAttribute(e,n),Wt.normalize(),e.setXYZ(n,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(s,l){const u=s.array,c=s.itemSize,f=s.normalized,h=new u.constructor(l.length*c);let m=0,_=0;for(let x=0,p=l.length;x<p;x++){s.isInterleavedBufferAttribute?m=l[x]*s.data.stride+s.offset:m=l[x]*c;for(let d=0;d<c;d++)h[_++]=u[m++]}return new di(h,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ui,i=this.index.array,r=this.attributes;for(const s in r){const l=r[s],u=e(l,i);n.setAttribute(s,u)}const o=this.morphAttributes;for(const s in o){const l=[],u=o[s];for(let c=0,f=u.length;c<f;c++){const h=u[c],m=e(h,i);l.push(m)}n.morphAttributes[s]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let s=0,l=a.length;s<l;s++){const u=a[s];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let o=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,h=u.length;f<h;f++){const m=u[f];c.push(m.toJSON(e.data))}c.length>0&&(r[l]=c,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(n))}const o=e.morphAttributes;for(const u in o){const c=[],f=o[u];for(let h=0,m=f.length;h<m;h++)c.push(f[h].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,c=a.length;u<c;u++){const f=a[u];this.addGroup(f.start,f.count,f.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ym=new kt,Sr=new Yd,$s=new Au,Sm=new H,po=new H,mo=new H,go=new H,Cc=new H,qs=new H,Ks=new et,Zs=new et,Qs=new et,Mm=new H,Em=new H,Tm=new H,Js=new H,el=new H;class Zn extends Sn{constructor(e=new Ui,n=new $d){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=r.length;o<a;o++){const s=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=o}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const s=this.morphTargetInfluences;if(o&&s){qs.set(0,0,0);for(let l=0,u=o.length;l<u;l++){const c=s[l],f=o[l];c!==0&&(Cc.fromBufferAttribute(f,e),a?qs.addScaledVector(Cc,c):qs.addScaledVector(Cc.sub(n),c))}n.add(qs)}return n}raycast(e,n){const i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),$s.copy(i.boundingSphere),$s.applyMatrix4(o),Sr.copy(e.ray).recast(e.near),!($s.containsPoint(Sr.origin)===!1&&(Sr.intersectSphere($s,Sm)===null||Sr.origin.distanceToSquared(Sm)>(e.far-e.near)**2))&&(ym.copy(o).invert(),Sr.copy(e.ray).applyMatrix4(ym),!(i.boundingBox!==null&&Sr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Sr)))}_computeIntersections(e,n,i){let r;const o=this.geometry,a=this.material,s=o.index,l=o.attributes.position,u=o.attributes.uv,c=o.attributes.uv1,f=o.attributes.normal,h=o.groups,m=o.drawRange;if(s!==null)if(Array.isArray(a))for(let _=0,x=h.length;_<x;_++){const p=h[_],d=a[p.materialIndex],g=Math.max(p.start,m.start),v=Math.min(s.count,Math.min(p.start+p.count,m.start+m.count));for(let w=g,b=v;w<b;w+=3){const S=s.getX(w),R=s.getX(w+1),L=s.getX(w+2);r=tl(this,d,e,i,u,c,f,S,R,L),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),x=Math.min(s.count,m.start+m.count);for(let p=_,d=x;p<d;p+=3){const g=s.getX(p),v=s.getX(p+1),w=s.getX(p+2);r=tl(this,a,e,i,u,c,f,g,v,w),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,x=h.length;_<x;_++){const p=h[_],d=a[p.materialIndex],g=Math.max(p.start,m.start),v=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let w=g,b=v;w<b;w+=3){const S=w,R=w+1,L=w+2;r=tl(this,d,e,i,u,c,f,S,R,L),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let p=_,d=x;p<d;p+=3){const g=p,v=p+1,w=p+2;r=tl(this,a,e,i,u,c,f,g,v,w),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function eT(t,e,n,i,r,o,a,s){let l;if(e.side===xn?l=i.intersectTriangle(a,o,r,!0,s):l=i.intersectTriangle(r,o,a,e.side===fr,s),l===null)return null;el.copy(s),el.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(el);return u<n.near||u>n.far?null:{distance:u,point:el.clone(),object:t}}function tl(t,e,n,i,r,o,a,s,l,u){t.getVertexPosition(s,po),t.getVertexPosition(l,mo),t.getVertexPosition(u,go);const c=eT(t,e,n,i,po,mo,go,Js);if(c){r&&(Ks.fromBufferAttribute(r,s),Zs.fromBufferAttribute(r,l),Qs.fromBufferAttribute(r,u),c.uv=li.getInterpolation(Js,po,mo,go,Ks,Zs,Qs,new et)),o&&(Ks.fromBufferAttribute(o,s),Zs.fromBufferAttribute(o,l),Qs.fromBufferAttribute(o,u),c.uv1=li.getInterpolation(Js,po,mo,go,Ks,Zs,Qs,new et)),a&&(Mm.fromBufferAttribute(a,s),Em.fromBufferAttribute(a,l),Tm.fromBufferAttribute(a,u),c.normal=li.getInterpolation(Js,po,mo,go,Mm,Em,Tm,new H),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const f={a:s,b:l,c:u,normal:new H,materialIndex:0};li.getNormal(po,mo,go,f.normal),c.face=f}return c}class aa extends Ui{constructor(e=1,n=1,i=1,r=1,o=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:o,depthSegments:a};const s=this;r=Math.floor(r),o=Math.floor(o),a=Math.floor(a);const l=[],u=[],c=[],f=[];let h=0,m=0;_("z","y","x",-1,-1,i,n,e,a,o,0),_("z","y","x",1,-1,i,n,-e,a,o,1),_("x","z","y",1,1,e,i,n,r,a,2),_("x","z","y",1,-1,e,i,-n,r,a,3),_("x","y","z",1,-1,e,n,i,r,o,4),_("x","y","z",-1,-1,e,n,-i,r,o,5),this.setIndex(l),this.setAttribute("position",new ei(u,3)),this.setAttribute("normal",new ei(c,3)),this.setAttribute("uv",new ei(f,2));function _(x,p,d,g,v,w,b,S,R,L,A){const M=w/R,P=b/L,j=w/2,B=b/2,q=S/2,J=R+1,K=L+1;let Z=0,I=0;const ee=new H;for(let te=0;te<K;te++){const ue=te*P-B;for(let Re=0;Re<J;Re++){const Ze=Re*M-j;ee[x]=Ze*g,ee[p]=ue*v,ee[d]=q,u.push(ee.x,ee.y,ee.z),ee[x]=0,ee[p]=0,ee[d]=S>0?1:-1,c.push(ee.x,ee.y,ee.z),f.push(Re/R),f.push(1-te/L),Z+=1}}for(let te=0;te<L;te++)for(let ue=0;ue<R;ue++){const Re=h+ue+J*te,Ze=h+ue+J*(te+1),$=h+(ue+1)+J*(te+1),se=h+(ue+1)+J*te;l.push(Re,Ze,se),l.push(Ze,$,se),I+=6}s.addGroup(m,I,A),m+=I,h+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new aa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ta(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function ln(t){const e={};for(let n=0;n<t.length;n++){const i=ta(t[n]);for(const r in i)e[r]=i[r]}return e}function tT(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function J_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ht.workingColorSpace}const nT={clone:ta,merge:ln};var iT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bi extends _s{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=iT,this.fragmentShader=rT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ta(e.uniforms),this.uniformsGroups=tT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class e0 extends Sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new kt,this.projectionMatrix=new kt,this.projectionMatrixInverse=new kt,this.coordinateSystem=Ei}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Hi=new H,wm=new et,Am=new et;class Fn extends e0{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=ss*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ba*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ss*2*Math.atan(Math.tan(Ba*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z),Hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z)}getViewSize(e,n){return this.getViewBounds(e,wm,Am),n.subVectors(Am,wm)}setViewOffset(e,n,i,r,o,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ba*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,o=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;o+=a.offsetX*r/l,n-=a.offsetY*i/u,r*=a.width/l,i*=a.height/u}const s=this.filmOffset;s!==0&&(o+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const vo=-90,_o=1;class oT extends Sn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Fn(vo,_o,e,n);r.layers=this.layers,this.add(r);const o=new Fn(vo,_o,e,n);o.layers=this.layers,this.add(o);const a=new Fn(vo,_o,e,n);a.layers=this.layers,this.add(a);const s=new Fn(vo,_o,e,n);s.layers=this.layers,this.add(s);const l=new Fn(vo,_o,e,n);l.layers=this.layers,this.add(l);const u=new Fn(vo,_o,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,o,a,s,l]=n;for(const u of n)this.remove(u);if(e===Ei)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===tu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,a,s,l,u,c]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,o),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,s),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,c),e.setRenderTarget(f,h,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class t0 extends yn{constructor(e,n,i,r,o,a,s,l,u,c){e=e!==void 0?e:[],n=n!==void 0?n:Ko,super(e,n,i,r,o,a,s,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class aT extends jr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new t0(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Kn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new aa(5,5,5),o=new bi({name:"CubemapFromEquirect",uniforms:ta(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:xn,blending:sr});o.uniforms.tEquirect.value=n;const a=new Zn(r,o),s=n.minFilter;return n.minFilter===Or&&(n.minFilter=Kn),new oT(1,10,this).update(e,a),n.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const o=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(o)}}const Pc=new H,sT=new H,lT=new it;class Xi{constructor(e=new H(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Pc.subVectors(i,n).cross(sT.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Pc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:n.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||lT.getNormalMatrix(e),r=this.coplanarPoint(Pc).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Mr=new Au,nl=new H;class n0{constructor(e=new Xi,n=new Xi,i=new Xi,r=new Xi,o=new Xi,a=new Xi){this.planes=[e,n,i,r,o,a]}set(e,n,i,r,o,a){const s=this.planes;return s[0].copy(e),s[1].copy(n),s[2].copy(i),s[3].copy(r),s[4].copy(o),s[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ei){const i=this.planes,r=e.elements,o=r[0],a=r[1],s=r[2],l=r[3],u=r[4],c=r[5],f=r[6],h=r[7],m=r[8],_=r[9],x=r[10],p=r[11],d=r[12],g=r[13],v=r[14],w=r[15];if(i[0].setComponents(l-o,h-u,p-m,w-d).normalize(),i[1].setComponents(l+o,h+u,p+m,w+d).normalize(),i[2].setComponents(l+a,h+c,p+_,w+g).normalize(),i[3].setComponents(l-a,h-c,p-_,w-g).normalize(),i[4].setComponents(l-s,h-f,p-x,w-v).normalize(),n===Ei)i[5].setComponents(l+s,h+f,p+x,w+v).normalize();else if(n===tu)i[5].setComponents(s,f,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Mr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Mr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Mr)}intersectsSprite(e){return Mr.center.set(0,0,0),Mr.radius=.7071067811865476,Mr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Mr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(n[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(nl.x=r.normal.x>0?e.max.x:e.min.x,nl.y=r.normal.y>0?e.max.y:e.min.y,nl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(nl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function i0(){let t=null,e=!1,n=null,i=null;function r(o,a){n(o,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){n=o},setContext:function(o){t=o}}}function uT(t){const e=new WeakMap;function n(s,l){const u=s.array,c=s.usage,f=u.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,u,c),s.onUploadCallback();let m;if(u instanceof Float32Array)m=t.FLOAT;else if(u instanceof Uint16Array)s.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)m=t.SHORT;else if(u instanceof Uint32Array)m=t.UNSIGNED_INT;else if(u instanceof Int32Array)m=t.INT;else if(u instanceof Int8Array)m=t.BYTE;else if(u instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:h,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:s.version,size:f}}function i(s,l,u){const c=l.array,f=l._updateRange,h=l.updateRanges;if(t.bindBuffer(u,s),f.count===-1&&h.length===0&&t.bufferSubData(u,0,c),h.length!==0){for(let m=0,_=h.length;m<_;m++){const x=h[m];t.bufferSubData(u,x.start*c.BYTES_PER_ELEMENT,c,x.start,x.count)}l.clearUpdateRanges()}f.count!==-1&&(t.bufferSubData(u,f.offset*c.BYTES_PER_ELEMENT,c,f.offset,f.count),f.count=-1),l.onUploadCallback()}function r(s){return s.isInterleavedBufferAttribute&&(s=s.data),e.get(s)}function o(s){s.isInterleavedBufferAttribute&&(s=s.data);const l=e.get(s);l&&(t.deleteBuffer(l.buffer),e.delete(s))}function a(s,l){if(s.isGLBufferAttribute){const c=e.get(s);(!c||c.version<s.version)&&e.set(s,{buffer:s.buffer,type:s.type,bytesPerElement:s.elementSize,version:s.version});return}s.isInterleavedBufferAttribute&&(s=s.data);const u=e.get(s);if(u===void 0)e.set(s,n(s,l));else if(u.version<s.version){if(u.size!==s.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,s,l),u.version=s.version}}return{get:r,remove:o,update:a}}class xs extends Ui{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const o=e/2,a=n/2,s=Math.floor(i),l=Math.floor(r),u=s+1,c=l+1,f=e/s,h=n/l,m=[],_=[],x=[],p=[];for(let d=0;d<c;d++){const g=d*h-a;for(let v=0;v<u;v++){const w=v*f-o;_.push(w,-g,0),x.push(0,0,1),p.push(v/s),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let g=0;g<s;g++){const v=g+u*d,w=g+u*(d+1),b=g+1+u*(d+1),S=g+1+u*d;m.push(v,w,S),m.push(w,b,S)}this.setIndex(m),this.setAttribute("position",new ei(_,3)),this.setAttribute("normal",new ei(x,3)),this.setAttribute("uv",new ei(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xs(e.width,e.height,e.widthSegments,e.heightSegments)}}var cT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fT=`#ifdef USE_ALPHAHASH
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
#endif`,dT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gT=`#ifdef USE_AOMAP
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
#endif`,vT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_T=`#ifdef USE_BATCHING
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
#endif`,xT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,yT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ST=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,MT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ET=`#ifdef USE_IRIDESCENCE
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
#endif`,TT=`#ifdef USE_BUMPMAP
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
#endif`,wT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,AT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,RT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,CT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,PT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,LT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,DT=`#if defined( USE_COLOR_ALPHA )
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
#endif`,UT=`#define PI 3.141592653589793
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
} // validated`,NT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,IT=`vec3 transformedNormal = objectNormal;
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
#endif`,FT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,OT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,BT="gl_FragColor = linearToOutputTexel( gl_FragColor );",HT=`
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
}`,VT=`#ifdef USE_ENVMAP
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
#endif`,GT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,WT=`#ifdef USE_ENVMAP
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
#endif`,XT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jT=`#ifdef USE_ENVMAP
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
#endif`,YT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$T=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,KT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ZT=`#ifdef USE_GRADIENTMAP
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
}`,QT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,JT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,e1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,t1=`uniform bool receiveShadow;
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
#endif`,n1=`#ifdef USE_ENVMAP
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
#endif`,i1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,r1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,o1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,a1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,s1=`PhysicalMaterial material;
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
#endif`,l1=`struct PhysicalMaterial {
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
}`,u1=`
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
#endif`,c1=`#if defined( RE_IndirectDiffuse )
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
#endif`,f1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,d1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,h1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,p1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,m1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,g1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,v1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,x1=`#if defined( USE_POINTS_UV )
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
#endif`,y1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,S1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,M1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,E1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,T1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,w1=`#ifdef USE_MORPHTARGETS
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
#endif`,A1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,R1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,C1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,P1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,b1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,L1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,D1=`#ifdef USE_NORMALMAP
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
#endif`,U1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,N1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,I1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,F1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,O1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,k1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,z1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,B1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,H1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,V1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,G1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,W1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,X1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,j1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Y1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$1=`float getShadowMask() {
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
}`,q1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,K1=`#ifdef USE_SKINNING
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
#endif`,Z1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Q1=`#ifdef USE_SKINNING
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
#endif`,J1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ew=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nw=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,iw=`#ifdef USE_TRANSMISSION
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
#endif`,rw=`#ifdef USE_TRANSMISSION
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
#endif`,ow=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,aw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const uw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cw=`uniform sampler2D t2D;
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
}`,fw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dw=`#ifdef ENVMAP_TYPE_CUBE
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
}`,hw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mw=`#include <common>
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
}`,gw=`#if DEPTH_PACKING == 3200
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
}`,vw=`#define DISTANCE
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
}`,_w=`#define DISTANCE
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
}`,xw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sw=`uniform float scale;
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
}`,Mw=`uniform vec3 diffuse;
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
}`,Ew=`#include <common>
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
}`,Tw=`uniform vec3 diffuse;
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
}`,ww=`#define LAMBERT
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
}`,Aw=`#define LAMBERT
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
}`,Rw=`#define MATCAP
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
}`,Cw=`#define MATCAP
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
}`,Pw=`#define NORMAL
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
}`,bw=`#define NORMAL
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
}`,Lw=`#define PHONG
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
}`,Dw=`#define PHONG
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
}`,Uw=`#define STANDARD
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
}`,Nw=`#define STANDARD
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
}`,Iw=`#define TOON
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
}`,Fw=`#define TOON
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
}`,Ow=`uniform float size;
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
}`,kw=`uniform vec3 diffuse;
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
}`,zw=`#include <common>
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
}`,Bw=`uniform vec3 color;
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
}`,Hw=`uniform float rotation;
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
}`,Vw=`uniform vec3 diffuse;
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
}`,nt={alphahash_fragment:cT,alphahash_pars_fragment:fT,alphamap_fragment:dT,alphamap_pars_fragment:hT,alphatest_fragment:pT,alphatest_pars_fragment:mT,aomap_fragment:gT,aomap_pars_fragment:vT,batching_pars_vertex:_T,batching_vertex:xT,begin_vertex:yT,beginnormal_vertex:ST,bsdfs:MT,iridescence_fragment:ET,bumpmap_pars_fragment:TT,clipping_planes_fragment:wT,clipping_planes_pars_fragment:AT,clipping_planes_pars_vertex:RT,clipping_planes_vertex:CT,color_fragment:PT,color_pars_fragment:bT,color_pars_vertex:LT,color_vertex:DT,common:UT,cube_uv_reflection_fragment:NT,defaultnormal_vertex:IT,displacementmap_pars_vertex:FT,displacementmap_vertex:OT,emissivemap_fragment:kT,emissivemap_pars_fragment:zT,colorspace_fragment:BT,colorspace_pars_fragment:HT,envmap_fragment:VT,envmap_common_pars_fragment:GT,envmap_pars_fragment:WT,envmap_pars_vertex:XT,envmap_physical_pars_fragment:n1,envmap_vertex:jT,fog_vertex:YT,fog_pars_vertex:$T,fog_fragment:qT,fog_pars_fragment:KT,gradientmap_pars_fragment:ZT,lightmap_pars_fragment:QT,lights_lambert_fragment:JT,lights_lambert_pars_fragment:e1,lights_pars_begin:t1,lights_toon_fragment:i1,lights_toon_pars_fragment:r1,lights_phong_fragment:o1,lights_phong_pars_fragment:a1,lights_physical_fragment:s1,lights_physical_pars_fragment:l1,lights_fragment_begin:u1,lights_fragment_maps:c1,lights_fragment_end:f1,logdepthbuf_fragment:d1,logdepthbuf_pars_fragment:h1,logdepthbuf_pars_vertex:p1,logdepthbuf_vertex:m1,map_fragment:g1,map_pars_fragment:v1,map_particle_fragment:_1,map_particle_pars_fragment:x1,metalnessmap_fragment:y1,metalnessmap_pars_fragment:S1,morphinstance_vertex:M1,morphcolor_vertex:E1,morphnormal_vertex:T1,morphtarget_pars_vertex:w1,morphtarget_vertex:A1,normal_fragment_begin:R1,normal_fragment_maps:C1,normal_pars_fragment:P1,normal_pars_vertex:b1,normal_vertex:L1,normalmap_pars_fragment:D1,clearcoat_normal_fragment_begin:U1,clearcoat_normal_fragment_maps:N1,clearcoat_pars_fragment:I1,iridescence_pars_fragment:F1,opaque_fragment:O1,packing:k1,premultiplied_alpha_fragment:z1,project_vertex:B1,dithering_fragment:H1,dithering_pars_fragment:V1,roughnessmap_fragment:G1,roughnessmap_pars_fragment:W1,shadowmap_pars_fragment:X1,shadowmap_pars_vertex:j1,shadowmap_vertex:Y1,shadowmask_pars_fragment:$1,skinbase_vertex:q1,skinning_pars_vertex:K1,skinning_vertex:Z1,skinnormal_vertex:Q1,specularmap_fragment:J1,specularmap_pars_fragment:ew,tonemapping_fragment:tw,tonemapping_pars_fragment:nw,transmission_fragment:iw,transmission_pars_fragment:rw,uv_pars_fragment:ow,uv_pars_vertex:aw,uv_vertex:sw,worldpos_vertex:lw,background_vert:uw,background_frag:cw,backgroundCube_vert:fw,backgroundCube_frag:dw,cube_vert:hw,cube_frag:pw,depth_vert:mw,depth_frag:gw,distanceRGBA_vert:vw,distanceRGBA_frag:_w,equirect_vert:xw,equirect_frag:yw,linedashed_vert:Sw,linedashed_frag:Mw,meshbasic_vert:Ew,meshbasic_frag:Tw,meshlambert_vert:ww,meshlambert_frag:Aw,meshmatcap_vert:Rw,meshmatcap_frag:Cw,meshnormal_vert:Pw,meshnormal_frag:bw,meshphong_vert:Lw,meshphong_frag:Dw,meshphysical_vert:Uw,meshphysical_frag:Nw,meshtoon_vert:Iw,meshtoon_frag:Fw,points_vert:Ow,points_frag:kw,shadow_vert:zw,shadow_frag:Bw,sprite_vert:Hw,sprite_frag:Vw},_e={common:{diffuse:{value:new ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new it}},envmap:{envMap:{value:null},envMapRotation:{value:new it},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new it}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new it}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new it},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new it},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new it},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new it}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new it}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new it}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0},uvTransform:{value:new it}},sprite:{diffuse:{value:new ft(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}}},oi={basic:{uniforms:ln([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:ln([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new ft(0)}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:ln([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new ft(0)},specular:{value:new ft(1118481)},shininess:{value:30}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:ln([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:ln([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new ft(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:ln([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:ln([_e.points,_e.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:ln([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:ln([_e.common,_e.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:ln([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:ln([_e.sprite,_e.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new it},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new it}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distanceRGBA:{uniforms:ln([_e.common,_e.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distanceRGBA_vert,fragmentShader:nt.distanceRGBA_frag},shadow:{uniforms:ln([_e.lights,_e.fog,{color:{value:new ft(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};oi.physical={uniforms:ln([oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new it},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new it},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new it},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new it},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new it},sheen:{value:0},sheenColor:{value:new ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new it},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new it},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new it},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new it},attenuationDistance:{value:0},attenuationColor:{value:new ft(0)},specularColor:{value:new ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new it},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new it},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new it}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};const il={r:0,b:0,g:0},Er=new Pi,Gw=new kt;function Ww(t,e,n,i,r,o,a){const s=new ft(0);let l=o===!0?0:1,u,c,f=null,h=0,m=null;function _(g){let v=g.isScene===!0?g.background:null;return v&&v.isTexture&&(v=(g.backgroundBlurriness>0?n:e).get(v)),v}function x(g){let v=!1;const w=_(g);w===null?d(s,l):w&&w.isColor&&(d(w,1),v=!0);const b=t.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,a):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function p(g,v){const w=_(v);w&&(w.isCubeTexture||w.mapping===Eu)?(c===void 0&&(c=new Zn(new aa(1,1,1),new bi({name:"BackgroundCubeMaterial",uniforms:ta(oi.backgroundCube.uniforms),vertexShader:oi.backgroundCube.vertexShader,fragmentShader:oi.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,S,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),Er.copy(v.backgroundRotation),Er.x*=-1,Er.y*=-1,Er.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Er.y*=-1,Er.z*=-1),c.material.uniforms.envMap.value=w,c.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Gw.makeRotationFromEuler(Er)),c.material.toneMapped=ht.getTransfer(w.colorSpace)!==Et,(f!==w||h!==w.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,f=w,h=w.version,m=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null)):w&&w.isTexture&&(u===void 0&&(u=new Zn(new xs(2,2),new bi({name:"BackgroundMaterial",uniforms:ta(oi.background.uniforms),vertexShader:oi.background.vertexShader,fragmentShader:oi.background.fragmentShader,side:fr,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=w,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.toneMapped=ht.getTransfer(w.colorSpace)!==Et,w.matrixAutoUpdate===!0&&w.updateMatrix(),u.material.uniforms.uvTransform.value.copy(w.matrix),(f!==w||h!==w.version||m!==t.toneMapping)&&(u.material.needsUpdate=!0,f=w,h=w.version,m=t.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null))}function d(g,v){g.getRGB(il,J_(t)),i.buffers.color.setClear(il.r,il.g,il.b,v,a)}return{getClearColor:function(){return s},setClearColor:function(g,v=1){s.set(g),l=v,d(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,d(s,l)},render:x,addToRenderList:p}}function Xw(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let o=r,a=!1;function s(M,P,j,B,q){let J=!1;const K=f(B,j,P);o!==K&&(o=K,u(o.object)),J=m(M,B,j,q),J&&_(M,B,j,q),q!==null&&e.update(q,t.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,w(M,P,j,B),q!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function l(){return t.createVertexArray()}function u(M){return t.bindVertexArray(M)}function c(M){return t.deleteVertexArray(M)}function f(M,P,j){const B=j.wireframe===!0;let q=i[M.id];q===void 0&&(q={},i[M.id]=q);let J=q[P.id];J===void 0&&(J={},q[P.id]=J);let K=J[B];return K===void 0&&(K=h(l()),J[B]=K),K}function h(M){const P=[],j=[],B=[];for(let q=0;q<n;q++)P[q]=0,j[q]=0,B[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:j,attributeDivisors:B,object:M,attributes:{},index:null}}function m(M,P,j,B){const q=o.attributes,J=P.attributes;let K=0;const Z=j.getAttributes();for(const I in Z)if(Z[I].location>=0){const te=q[I];let ue=J[I];if(ue===void 0&&(I==="instanceMatrix"&&M.instanceMatrix&&(ue=M.instanceMatrix),I==="instanceColor"&&M.instanceColor&&(ue=M.instanceColor)),te===void 0||te.attribute!==ue||ue&&te.data!==ue.data)return!0;K++}return o.attributesNum!==K||o.index!==B}function _(M,P,j,B){const q={},J=P.attributes;let K=0;const Z=j.getAttributes();for(const I in Z)if(Z[I].location>=0){let te=J[I];te===void 0&&(I==="instanceMatrix"&&M.instanceMatrix&&(te=M.instanceMatrix),I==="instanceColor"&&M.instanceColor&&(te=M.instanceColor));const ue={};ue.attribute=te,te&&te.data&&(ue.data=te.data),q[I]=ue,K++}o.attributes=q,o.attributesNum=K,o.index=B}function x(){const M=o.newAttributes;for(let P=0,j=M.length;P<j;P++)M[P]=0}function p(M){d(M,0)}function d(M,P){const j=o.newAttributes,B=o.enabledAttributes,q=o.attributeDivisors;j[M]=1,B[M]===0&&(t.enableVertexAttribArray(M),B[M]=1),q[M]!==P&&(t.vertexAttribDivisor(M,P),q[M]=P)}function g(){const M=o.newAttributes,P=o.enabledAttributes;for(let j=0,B=P.length;j<B;j++)P[j]!==M[j]&&(t.disableVertexAttribArray(j),P[j]=0)}function v(M,P,j,B,q,J,K){K===!0?t.vertexAttribIPointer(M,P,j,q,J):t.vertexAttribPointer(M,P,j,B,q,J)}function w(M,P,j,B){x();const q=B.attributes,J=j.getAttributes(),K=P.defaultAttributeValues;for(const Z in J){const I=J[Z];if(I.location>=0){let ee=q[Z];if(ee===void 0&&(Z==="instanceMatrix"&&M.instanceMatrix&&(ee=M.instanceMatrix),Z==="instanceColor"&&M.instanceColor&&(ee=M.instanceColor)),ee!==void 0){const te=ee.normalized,ue=ee.itemSize,Re=e.get(ee);if(Re===void 0)continue;const Ze=Re.buffer,$=Re.type,se=Re.bytesPerElement,pe=$===t.INT||$===t.UNSIGNED_INT||ee.gpuType===k_;if(ee.isInterleavedBufferAttribute){const he=ee.data,$e=he.stride,We=ee.offset;if(he.isInstancedInterleavedBuffer){for(let rt=0;rt<I.locationSize;rt++)d(I.location+rt,he.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let rt=0;rt<I.locationSize;rt++)p(I.location+rt);t.bindBuffer(t.ARRAY_BUFFER,Ze);for(let rt=0;rt<I.locationSize;rt++)v(I.location+rt,ue/I.locationSize,$,te,$e*se,(We+ue/I.locationSize*rt)*se,pe)}else{if(ee.isInstancedBufferAttribute){for(let he=0;he<I.locationSize;he++)d(I.location+he,ee.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let he=0;he<I.locationSize;he++)p(I.location+he);t.bindBuffer(t.ARRAY_BUFFER,Ze);for(let he=0;he<I.locationSize;he++)v(I.location+he,ue/I.locationSize,$,te,ue*se,ue/I.locationSize*he*se,pe)}}else if(K!==void 0){const te=K[Z];if(te!==void 0)switch(te.length){case 2:t.vertexAttrib2fv(I.location,te);break;case 3:t.vertexAttrib3fv(I.location,te);break;case 4:t.vertexAttrib4fv(I.location,te);break;default:t.vertexAttrib1fv(I.location,te)}}}}g()}function b(){L();for(const M in i){const P=i[M];for(const j in P){const B=P[j];for(const q in B)c(B[q].object),delete B[q];delete P[j]}delete i[M]}}function S(M){if(i[M.id]===void 0)return;const P=i[M.id];for(const j in P){const B=P[j];for(const q in B)c(B[q].object),delete B[q];delete P[j]}delete i[M.id]}function R(M){for(const P in i){const j=i[P];if(j[M.id]===void 0)continue;const B=j[M.id];for(const q in B)c(B[q].object),delete B[q];delete j[M.id]}}function L(){A(),a=!0,o!==r&&(o=r,u(o.object))}function A(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:s,reset:L,resetDefaultState:A,dispose:b,releaseStatesOfGeometry:S,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:p,disableUnusedAttributes:g}}function jw(t,e,n){let i;function r(u){i=u}function o(u,c){t.drawArrays(i,u,c),n.update(c,i,1)}function a(u,c,f){f!==0&&(t.drawArraysInstanced(i,u,c,f),n.update(c,i,f))}function s(u,c,f){if(f===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let m=0;m<f;m++)this.render(u[m],c[m]);else{h.multiDrawArraysWEBGL(i,u,0,c,0,f);let m=0;for(let _=0;_<f;_++)m+=c[_];n.update(m,i,1)}}function l(u,c,f,h){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<u.length;_++)a(u[_],c[_],h[_]);else{m.multiDrawArraysInstancedWEBGL(i,u,0,c,0,h,0,f);let _=0;for(let x=0;x<f;x++)_+=c[x];for(let x=0;x<h.length;x++)n.update(_,i,h[x])}}this.setMode=r,this.render=o,this.renderInstances=a,this.renderMultiDraw=s,this.renderMultiDrawInstances=l}function Yw(t,e,n,i){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const S=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(S){return!(S!==ui&&i.convert(S)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function s(S){const R=S===Tu&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(S!==dr&&i.convert(S)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&S!==Zi&&!R)}function l(S){if(S==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const f=n.logarithmicDepthBuffer===!0,h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),d=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),g=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),w=m>0,b=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:s,precision:u,logarithmicDepthBuffer:f,maxTextures:h,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:x,maxAttributes:p,maxVertexUniforms:d,maxVaryings:g,maxFragmentUniforms:v,vertexTextures:w,maxSamples:b}}function $w(t){const e=this;let n=null,i=0,r=!1,o=!1;const a=new Xi,s=new it,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const m=f.length!==0||h||i!==0||r;return r=h,i=f.length,m},this.beginShadows=function(){o=!0,c(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(f,h){n=c(f,h,0)},this.setState=function(f,h,m){const _=f.clippingPlanes,x=f.clipIntersection,p=f.clipShadows,d=t.get(f);if(!r||_===null||_.length===0||o&&!p)o?c(null):u();else{const g=o?0:i,v=g*4;let w=d.clippingState||null;l.value=w,w=c(_,h,v,m);for(let b=0;b!==v;++b)w[b]=n[b];d.clippingState=w,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=g}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,h,m,_){const x=f!==null?f.length:0;let p=null;if(x!==0){if(p=l.value,_!==!0||p===null){const d=m+x*4,g=h.matrixWorldInverse;s.getNormalMatrix(g),(p===null||p.length<d)&&(p=new Float32Array(d));for(let v=0,w=m;v!==x;++v,w+=4)a.copy(f[v]).applyMatrix4(g,s),a.normal.toArray(p,w),p[w+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function qw(t){let e=new WeakMap;function n(a,s){return s===Of?a.mapping=Ko:s===kf&&(a.mapping=Zo),a}function i(a){if(a&&a.isTexture){const s=a.mapping;if(s===Of||s===kf)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const u=new aT(l.height);return u.fromEquirectangularTexture(t,a),e.set(a,u),a.addEventListener("dispose",r),n(u.texture,a.mapping)}else return null}}return a}function r(a){const s=a.target;s.removeEventListener("dispose",r);const l=e.get(s);l!==void 0&&(e.delete(s),l.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class Kw extends e0{constructor(e=-1,n=1,i=1,r=-1,o=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=o,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,o,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,a=i+e,s=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=u*this.view.offsetX,a=o+u*this.view.width,s-=c*this.view.offsetY,l=s-c*this.view.height}this.projectionMatrix.makeOrthographic(o,a,s,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Uo=4,Rm=[.125,.215,.35,.446,.526,.582],br=20,bc=new Kw,Cm=new ft;let Lc=null,Dc=0,Uc=0,Nc=!1;const Rr=(1+Math.sqrt(5))/2,xo=1/Rr,Pm=[new H(-Rr,xo,0),new H(Rr,xo,0),new H(-xo,0,Rr),new H(xo,0,Rr),new H(0,Rr,-xo),new H(0,Rr,xo),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)];class bm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Lc=this._renderer.getRenderTarget(),Dc=this._renderer.getActiveCubeFace(),Uc=this._renderer.getActiveMipmapLevel(),Nc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o),n>0&&this._blur(o,0,0,n),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Um(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Lc,Dc,Uc),this._renderer.xr.enabled=Nc,e.scissorTest=!1,rl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ko||e.mapping===Zo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Lc=this._renderer.getRenderTarget(),Dc=this._renderer.getActiveCubeFace(),Uc=this._renderer.getActiveMipmapLevel(),Nc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Kn,minFilter:Kn,generateMipmaps:!1,type:Tu,format:ui,colorSpace:vr,depthBuffer:!1},r=Lm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lm(e,n,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Zw(o)),this._blurMaterial=Qw(o,e,n)}return r}_compileMaterial(e){const n=new Zn(this._lodPlanes[0],e);this._renderer.compile(n,bc)}_sceneToCubeUV(e,n,i,r){const s=new Fn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,h=c.toneMapping;c.getClearColor(Cm),c.toneMapping=lr,c.autoClear=!1;const m=new $d({name:"PMREM.Background",side:xn,depthWrite:!1,depthTest:!1}),_=new Zn(new aa,m);let x=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,x=!0):(m.color.copy(Cm),x=!0);for(let d=0;d<6;d++){const g=d%3;g===0?(s.up.set(0,l[d],0),s.lookAt(u[d],0,0)):g===1?(s.up.set(0,0,l[d]),s.lookAt(0,u[d],0)):(s.up.set(0,l[d],0),s.lookAt(0,0,u[d]));const v=this._cubeSize;rl(r,g*v,d>2?v:0,v,v),c.setRenderTarget(r),x&&c.render(_,s),c.render(e,s)}_.geometry.dispose(),_.material.dispose(),c.toneMapping=h,c.autoClear=f,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ko||e.mapping===Zo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Um()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dm());const o=r?this._cubemapMaterial:this._equirectMaterial,a=new Zn(this._lodPlanes[0],o),s=o.uniforms;s.envMap.value=e;const l=this._cubeSize;rl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,bc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let o=1;o<r;o++){const a=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),s=Pm[(r-o-1)%Pm.length];this._blur(e,o-1,o,a,s)}n.autoClear=i}_blur(e,n,i,r,o){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",o),this._halfBlur(a,e,i,i,r,"longitudinal",o)}_halfBlur(e,n,i,r,o,a,s){const l=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new Zn(this._lodPlanes[r],u),h=u.uniforms,m=this._sizeLods[i]-1,_=isFinite(o)?Math.PI/(2*m):2*Math.PI/(2*br-1),x=o/_,p=isFinite(o)?1+Math.floor(c*x):br;p>br&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${br}`);const d=[];let g=0;for(let R=0;R<br;++R){const L=R/x,A=Math.exp(-L*L/2);d.push(A),R===0?g+=A:R<p&&(g+=2*A)}for(let R=0;R<d.length;R++)d[R]=d[R]/g;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=d,h.latitudinal.value=a==="latitudinal",s&&(h.poleAxis.value=s);const{_lodMax:v}=this;h.dTheta.value=_,h.mipInt.value=v-i;const w=this._sizeLods[r],b=3*w*(r>v-Uo?r-v+Uo:0),S=4*(this._cubeSize-w);rl(n,b,S,3*w,2*w),l.setRenderTarget(n),l.render(f,bc)}}function Zw(t){const e=[],n=[],i=[];let r=t;const o=t-Uo+1+Rm.length;for(let a=0;a<o;a++){const s=Math.pow(2,r);n.push(s);let l=1/s;a>t-Uo?l=Rm[a-t+Uo-1]:a===0&&(l=0),i.push(l);const u=1/(s-2),c=-u,f=1+u,h=[c,c,f,c,f,f,c,c,f,f,c,f],m=6,_=6,x=3,p=2,d=1,g=new Float32Array(x*_*m),v=new Float32Array(p*_*m),w=new Float32Array(d*_*m);for(let S=0;S<m;S++){const R=S%3*2/3-1,L=S>2?0:-1,A=[R,L,0,R+2/3,L,0,R+2/3,L+1,0,R,L,0,R+2/3,L+1,0,R,L+1,0];g.set(A,x*_*S),v.set(h,p*_*S);const M=[S,S,S,S,S,S];w.set(M,d*_*S)}const b=new Ui;b.setAttribute("position",new di(g,x)),b.setAttribute("uv",new di(v,p)),b.setAttribute("faceIndex",new di(w,d)),e.push(b),r>Uo&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Lm(t,e,n){const i=new jr(t,e,n);return i.texture.mapping=Eu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function rl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function Qw(t,e,n){const i=new Float32Array(br),r=new H(0,1,0);return new bi({name:"SphericalGaussianBlur",defines:{n:br,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:qd(),fragmentShader:`

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
		`,blending:sr,depthTest:!1,depthWrite:!1})}function Dm(){return new bi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qd(),fragmentShader:`

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
		`,blending:sr,depthTest:!1,depthWrite:!1})}function Um(){return new bi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:sr,depthTest:!1,depthWrite:!1})}function qd(){return`

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
	`}function Jw(t){let e=new WeakMap,n=null;function i(s){if(s&&s.isTexture){const l=s.mapping,u=l===Of||l===kf,c=l===Ko||l===Zo;if(u||c){let f=e.get(s);const h=f!==void 0?f.texture.pmremVersion:0;if(s.isRenderTargetTexture&&s.pmremVersion!==h)return n===null&&(n=new bm(t)),f=u?n.fromEquirectangular(s,f):n.fromCubemap(s,f),f.texture.pmremVersion=s.pmremVersion,e.set(s,f),f.texture;if(f!==void 0)return f.texture;{const m=s.image;return u&&m&&m.height>0||c&&m&&r(m)?(n===null&&(n=new bm(t)),f=u?n.fromEquirectangular(s):n.fromCubemap(s),f.texture.pmremVersion=s.pmremVersion,e.set(s,f),s.addEventListener("dispose",o),f.texture):null}}}return s}function r(s){let l=0;const u=6;for(let c=0;c<u;c++)s[c]!==void 0&&l++;return l===u}function o(s){const l=s.target;l.removeEventListener("dispose",o);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function eA(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&j_("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function tA(t,e,n,i){const r={},o=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const x=h.morphAttributes[_];for(let p=0,d=x.length;p<d;p++)e.remove(x[p])}h.removeEventListener("dispose",a),delete r[h.id];const m=o.get(h);m&&(e.remove(m),o.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function s(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const _ in h)e.update(h[_],t.ARRAY_BUFFER);const m=f.morphAttributes;for(const _ in m){const x=m[_];for(let p=0,d=x.length;p<d;p++)e.update(x[p],t.ARRAY_BUFFER)}}function u(f){const h=[],m=f.index,_=f.attributes.position;let x=0;if(m!==null){const g=m.array;x=m.version;for(let v=0,w=g.length;v<w;v+=3){const b=g[v+0],S=g[v+1],R=g[v+2];h.push(b,S,S,R,R,b)}}else if(_!==void 0){const g=_.array;x=_.version;for(let v=0,w=g.length/3-1;v<w;v+=3){const b=v+0,S=v+1,R=v+2;h.push(b,S,S,R,R,b)}}else return;const p=new(X_(h)?Q_:Z_)(h,1);p.version=x;const d=o.get(f);d&&e.remove(d),o.set(f,p)}function c(f){const h=o.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&u(f)}else u(f);return o.get(f)}return{get:s,update:l,getWireframeAttribute:c}}function nA(t,e,n){let i;function r(h){i=h}let o,a;function s(h){o=h.type,a=h.bytesPerElement}function l(h,m){t.drawElements(i,m,o,h*a),n.update(m,i,1)}function u(h,m,_){_!==0&&(t.drawElementsInstanced(i,m,o,h*a,_),n.update(m,i,_))}function c(h,m,_){if(_===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let p=0;p<_;p++)this.render(h[p]/a,m[p]);else{x.multiDrawElementsWEBGL(i,m,0,o,h,0,_);let p=0;for(let d=0;d<_;d++)p+=m[d];n.update(p,i,1)}}function f(h,m,_,x){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<h.length;d++)u(h[d]/a,m[d],x[d]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,o,h,0,x,0,_);let d=0;for(let g=0;g<_;g++)d+=m[g];for(let g=0;g<x.length;g++)n.update(d,i,x[g])}}this.setMode=r,this.setIndex=s,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=f}function iA(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,a,s){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=s*(o/3);break;case t.LINES:n.lines+=s*(o/2);break;case t.LINE_STRIP:n.lines+=s*(o-1);break;case t.LINE_LOOP:n.lines+=s*o;break;case t.POINTS:n.points+=s*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function rA(t,e,n){const i=new WeakMap,r=new qt;function o(a,s,l){const u=a.morphTargetInfluences,c=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color,f=c!==void 0?c.length:0;let h=i.get(s);if(h===void 0||h.count!==f){let M=function(){L.dispose(),i.delete(s),s.removeEventListener("dispose",M)};var m=M;h!==void 0&&h.texture.dispose();const _=s.morphAttributes.position!==void 0,x=s.morphAttributes.normal!==void 0,p=s.morphAttributes.color!==void 0,d=s.morphAttributes.position||[],g=s.morphAttributes.normal||[],v=s.morphAttributes.color||[];let w=0;_===!0&&(w=1),x===!0&&(w=2),p===!0&&(w=3);let b=s.attributes.position.count*w,S=1;b>e.maxTextureSize&&(S=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const R=new Float32Array(b*S*4*f),L=new $_(R,b,S,f);L.type=Zi,L.needsUpdate=!0;const A=w*4;for(let P=0;P<f;P++){const j=d[P],B=g[P],q=v[P],J=b*S*4*P;for(let K=0;K<j.count;K++){const Z=K*A;_===!0&&(r.fromBufferAttribute(j,K),R[J+Z+0]=r.x,R[J+Z+1]=r.y,R[J+Z+2]=r.z,R[J+Z+3]=0),x===!0&&(r.fromBufferAttribute(B,K),R[J+Z+4]=r.x,R[J+Z+5]=r.y,R[J+Z+6]=r.z,R[J+Z+7]=0),p===!0&&(r.fromBufferAttribute(q,K),R[J+Z+8]=r.x,R[J+Z+9]=r.y,R[J+Z+10]=r.z,R[J+Z+11]=q.itemSize===4?r.w:1)}}h={count:f,texture:L,size:new et(b,S)},i.set(s,h),s.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let _=0;for(let p=0;p<u.length;p++)_+=u[p];const x=s.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",x),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:o}}function oA(t,e,n,i){let r=new WeakMap;function o(l){const u=i.render.frame,c=l.geometry,f=e.get(l,c);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return f}function a(){r=new WeakMap}function s(l){const u=l.target;u.removeEventListener("dispose",s),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:o,dispose:a}}class r0 extends yn{constructor(e,n,i,r,o,a,s,l,u,c=Ho){if(c!==Ho&&c!==ea)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Ho&&(i=Qo),i===void 0&&c===ea&&(i=Jo),super(null,r,o,a,s,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=s!==void 0?s:kn,this.minFilter=l!==void 0?l:kn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const o0=new yn,a0=new r0(1,1);a0.compareFunction=W_;const s0=new $_,l0=new WE,u0=new t0,Nm=[],Im=[],Fm=new Float32Array(16),Om=new Float32Array(9),km=new Float32Array(4);function sa(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let o=Nm[r];if(o===void 0&&(o=new Float32Array(r),Nm[r]=o),e!==0){i.toArray(o,0);for(let a=1,s=0;a!==e;++a)s+=n,t[a].toArray(o,s)}return o}function Ht(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Vt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Ru(t,e){let n=Im[e];n===void 0&&(n=new Int32Array(e),Im[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function aA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function sA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ht(n,e))return;t.uniform2fv(this.addr,e),Vt(n,e)}}function lA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ht(n,e))return;t.uniform3fv(this.addr,e),Vt(n,e)}}function uA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ht(n,e))return;t.uniform4fv(this.addr,e),Vt(n,e)}}function cA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ht(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Vt(n,e)}else{if(Ht(n,i))return;km.set(i),t.uniformMatrix2fv(this.addr,!1,km),Vt(n,i)}}function fA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ht(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Vt(n,e)}else{if(Ht(n,i))return;Om.set(i),t.uniformMatrix3fv(this.addr,!1,Om),Vt(n,i)}}function dA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ht(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Vt(n,e)}else{if(Ht(n,i))return;Fm.set(i),t.uniformMatrix4fv(this.addr,!1,Fm),Vt(n,i)}}function hA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function pA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ht(n,e))return;t.uniform2iv(this.addr,e),Vt(n,e)}}function mA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ht(n,e))return;t.uniform3iv(this.addr,e),Vt(n,e)}}function gA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ht(n,e))return;t.uniform4iv(this.addr,e),Vt(n,e)}}function vA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function _A(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ht(n,e))return;t.uniform2uiv(this.addr,e),Vt(n,e)}}function xA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ht(n,e))return;t.uniform3uiv(this.addr,e),Vt(n,e)}}function yA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ht(n,e))return;t.uniform4uiv(this.addr,e),Vt(n,e)}}function SA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const o=this.type===t.SAMPLER_2D_SHADOW?a0:o0;n.setTexture2D(e||o,r)}function MA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||l0,r)}function EA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||u0,r)}function TA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||s0,r)}function wA(t){switch(t){case 5126:return aA;case 35664:return sA;case 35665:return lA;case 35666:return uA;case 35674:return cA;case 35675:return fA;case 35676:return dA;case 5124:case 35670:return hA;case 35667:case 35671:return pA;case 35668:case 35672:return mA;case 35669:case 35673:return gA;case 5125:return vA;case 36294:return _A;case 36295:return xA;case 36296:return yA;case 35678:case 36198:case 36298:case 36306:case 35682:return SA;case 35679:case 36299:case 36307:return MA;case 35680:case 36300:case 36308:case 36293:return EA;case 36289:case 36303:case 36311:case 36292:return TA}}function AA(t,e){t.uniform1fv(this.addr,e)}function RA(t,e){const n=sa(e,this.size,2);t.uniform2fv(this.addr,n)}function CA(t,e){const n=sa(e,this.size,3);t.uniform3fv(this.addr,n)}function PA(t,e){const n=sa(e,this.size,4);t.uniform4fv(this.addr,n)}function bA(t,e){const n=sa(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function LA(t,e){const n=sa(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function DA(t,e){const n=sa(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function UA(t,e){t.uniform1iv(this.addr,e)}function NA(t,e){t.uniform2iv(this.addr,e)}function IA(t,e){t.uniform3iv(this.addr,e)}function FA(t,e){t.uniform4iv(this.addr,e)}function OA(t,e){t.uniform1uiv(this.addr,e)}function kA(t,e){t.uniform2uiv(this.addr,e)}function zA(t,e){t.uniform3uiv(this.addr,e)}function BA(t,e){t.uniform4uiv(this.addr,e)}function HA(t,e,n){const i=this.cache,r=e.length,o=Ru(n,r);Ht(i,o)||(t.uniform1iv(this.addr,o),Vt(i,o));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||o0,o[a])}function VA(t,e,n){const i=this.cache,r=e.length,o=Ru(n,r);Ht(i,o)||(t.uniform1iv(this.addr,o),Vt(i,o));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||l0,o[a])}function GA(t,e,n){const i=this.cache,r=e.length,o=Ru(n,r);Ht(i,o)||(t.uniform1iv(this.addr,o),Vt(i,o));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||u0,o[a])}function WA(t,e,n){const i=this.cache,r=e.length,o=Ru(n,r);Ht(i,o)||(t.uniform1iv(this.addr,o),Vt(i,o));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||s0,o[a])}function XA(t){switch(t){case 5126:return AA;case 35664:return RA;case 35665:return CA;case 35666:return PA;case 35674:return bA;case 35675:return LA;case 35676:return DA;case 5124:case 35670:return UA;case 35667:case 35671:return NA;case 35668:case 35672:return IA;case 35669:case 35673:return FA;case 5125:return OA;case 36294:return kA;case 36295:return zA;case 36296:return BA;case 35678:case 36198:case 36298:case 36306:case 35682:return HA;case 35679:case 36299:case 36307:return VA;case 35680:case 36300:case 36308:case 36293:return GA;case 36289:case 36303:case 36311:case 36292:return WA}}class jA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=wA(n.type)}}class YA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=XA(n.type)}}class $A{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let o=0,a=r.length;o!==a;++o){const s=r[o];s.setValue(e,n[s.id],i)}}}const Ic=/(\w+)(\])?(\[|\.)?/g;function zm(t,e){t.seq.push(e),t.map[e.id]=e}function qA(t,e,n){const i=t.name,r=i.length;for(Ic.lastIndex=0;;){const o=Ic.exec(i),a=Ic.lastIndex;let s=o[1];const l=o[2]==="]",u=o[3];if(l&&(s=s|0),u===void 0||u==="["&&a+2===r){zm(n,u===void 0?new jA(s,t,e):new YA(s,t,e));break}else{let f=n.map[s];f===void 0&&(f=new $A(s),zm(n,f)),n=f}}}class Ml{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=e.getActiveUniform(n,r),a=e.getUniformLocation(n,o.name);qA(o,a,this)}}setValue(e,n,i,r){const o=this.map[n];o!==void 0&&o.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let o=0,a=n.length;o!==a;++o){const s=n[o],l=i[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,o=e.length;r!==o;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Bm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const KA=37297;let ZA=0;function QA(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,n.length);for(let a=r;a<o;a++){const s=a+1;i.push(`${s===e?">":" "} ${s}: ${n[a]}`)}return i.join(`
`)}function JA(t){const e=ht.getPrimaries(ht.workingColorSpace),n=ht.getPrimaries(t);let i;switch(e===n?i="":e===eu&&n===Jl?i="LinearDisplayP3ToLinearSRGB":e===Jl&&n===eu&&(i="LinearSRGBToLinearDisplayP3"),t){case vr:case wu:return[i,"LinearTransferOETF"];case ri:case Xd:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Hm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+QA(t.getShaderSource(e),a)}else return r}function eR(t,e){const n=JA(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function tR(t,e){let n;switch(e){case XM:n="Linear";break;case jM:n="Reinhard";break;case YM:n="OptimizedCineon";break;case $M:n="ACESFilmic";break;case KM:n="AgX";break;case ZM:n="Neutral";break;case qM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function nR(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Pa).join(`
`)}function iR(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function rR(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=t.getActiveAttrib(e,r),a=o.name;let s=1;o.type===t.FLOAT_MAT2&&(s=2),o.type===t.FLOAT_MAT3&&(s=3),o.type===t.FLOAT_MAT4&&(s=4),n[a]={type:o.type,location:t.getAttribLocation(e,a),locationSize:s}}return n}function Pa(t){return t!==""}function Vm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Gm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const oR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hf(t){return t.replace(oR,sR)}const aR=new Map;function sR(t,e){let n=nt[e];if(n===void 0){const i=aR.get(e);if(i!==void 0)n=nt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Hf(n)}const lR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wm(t){return t.replace(lR,uR)}function uR(t,e,n,i){let r="";for(let o=parseInt(e);o<parseInt(n);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function Xm(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function cR(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===N_?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===I_?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===_i&&(e="SHADOWMAP_TYPE_VSM"),e}function fR(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ko:case Zo:e="ENVMAP_TYPE_CUBE";break;case Eu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function dR(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Zo:e="ENVMAP_MODE_REFRACTION";break}return e}function hR(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case F_:e="ENVMAP_BLENDING_MULTIPLY";break;case GM:e="ENVMAP_BLENDING_MIX";break;case WM:e="ENVMAP_BLENDING_ADD";break}return e}function pR(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function mR(t,e,n,i){const r=t.getContext(),o=n.defines;let a=n.vertexShader,s=n.fragmentShader;const l=cR(n),u=fR(n),c=dR(n),f=hR(n),h=pR(n),m=nR(n),_=iR(o),x=r.createProgram();let p,d,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Pa).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Pa).join(`
`),d.length>0&&(d+=`
`)):(p=[Xm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pa).join(`
`),d=[Xm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==lr?"#define TONE_MAPPING":"",n.toneMapping!==lr?nt.tonemapping_pars_fragment:"",n.toneMapping!==lr?tR("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,eR("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Pa).join(`
`)),a=Hf(a),a=Vm(a,n),a=Gm(a,n),s=Hf(s),s=Vm(s,n),s=Gm(s,n),a=Wm(a),s=Wm(s),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",n.glslVersion===am?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===am?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const v=g+p+a,w=g+d+s,b=Bm(r,r.VERTEX_SHADER,v),S=Bm(r,r.FRAGMENT_SHADER,w);r.attachShader(x,b),r.attachShader(x,S),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function R(P){if(t.debug.checkShaderErrors){const j=r.getProgramInfoLog(x).trim(),B=r.getShaderInfoLog(b).trim(),q=r.getShaderInfoLog(S).trim();let J=!0,K=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(J=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,b,S);else{const Z=Hm(r,b,"vertex"),I=Hm(r,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+j+`
`+Z+`
`+I)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(B===""||q==="")&&(K=!1);K&&(P.diagnostics={runnable:J,programLog:j,vertexShader:{log:B,prefix:p},fragmentShader:{log:q,prefix:d}})}r.deleteShader(b),r.deleteShader(S),L=new Ml(r,x),A=rR(r,x)}let L;this.getUniforms=function(){return L===void 0&&R(this),L};let A;this.getAttributes=function(){return A===void 0&&R(this),A};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(x,KA)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=ZA++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=b,this.fragmentShader=S,this}let gR=0;class vR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),o=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(o)===!1&&(a.add(o),o.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new _R(e),n.set(e,i)),i}}class _R{constructor(e){this.id=gR++,this.code=e,this.usedTimes=0}}function xR(t,e,n,i,r,o,a){const s=new q_,l=new vR,u=new Set,c=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(A){return u.add(A),A===0?"uv":`uv${A}`}function p(A,M,P,j,B){const q=j.fog,J=B.geometry,K=A.isMeshStandardMaterial?j.environment:null,Z=(A.isMeshStandardMaterial?n:e).get(A.envMap||K),I=Z&&Z.mapping===Eu?Z.image.height:null,ee=_[A.type];A.precision!==null&&(m=r.getMaxPrecision(A.precision),m!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",m,"instead."));const te=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,ue=te!==void 0?te.length:0;let Re=0;J.morphAttributes.position!==void 0&&(Re=1),J.morphAttributes.normal!==void 0&&(Re=2),J.morphAttributes.color!==void 0&&(Re=3);let Ze,$,se,pe;if(ee){const ut=oi[ee];Ze=ut.vertexShader,$=ut.fragmentShader}else Ze=A.vertexShader,$=A.fragmentShader,l.update(A),se=l.getVertexShaderID(A),pe=l.getFragmentShaderID(A);const he=t.getRenderTarget(),$e=B.isInstancedMesh===!0,We=B.isBatchedMesh===!0,rt=!!A.map,N=!!A.matcap,Be=!!Z,Xe=!!A.aoMap,dt=!!A.lightMap,Ie=!!A.bumpMap,qe=!!A.normalMap,Je=!!A.displacementMap,je=!!A.emissiveMap,vt=!!A.metalnessMap,C=!!A.roughnessMap,T=A.anisotropy>0,X=A.clearcoat>0,re=A.dispersion>0,oe=A.iridescence>0,ae=A.sheen>0,Le=A.transmission>0,me=T&&!!A.anisotropyMap,fe=X&&!!A.clearcoatMap,ke=X&&!!A.clearcoatNormalMap,ce=X&&!!A.clearcoatRoughnessMap,we=oe&&!!A.iridescenceMap,tt=oe&&!!A.iridescenceThicknessMap,De=ae&&!!A.sheenColorMap,ve=ae&&!!A.sheenRoughnessMap,Ve=!!A.specularMap,Ge=!!A.specularColorMap,wt=!!A.specularIntensityMap,y=Le&&!!A.transmissionMap,W=Le&&!!A.thicknessMap,V=!!A.gradientMap,Y=!!A.alphaMap,ie=A.alphaTest>0,be=!!A.alphaHash,He=!!A.extensions;let yt=lr;A.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(yt=t.toneMapping);const Dt={shaderID:ee,shaderType:A.type,shaderName:A.name,vertexShader:Ze,fragmentShader:$,defines:A.defines,customVertexShaderID:se,customFragmentShaderID:pe,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:m,batching:We,batchingColor:We&&B._colorsTexture!==null,instancing:$e,instancingColor:$e&&B.instanceColor!==null,instancingMorph:$e&&B.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:he===null?t.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:vr,alphaToCoverage:!!A.alphaToCoverage,map:rt,matcap:N,envMap:Be,envMapMode:Be&&Z.mapping,envMapCubeUVHeight:I,aoMap:Xe,lightMap:dt,bumpMap:Ie,normalMap:qe,displacementMap:h&&Je,emissiveMap:je,normalMapObjectSpace:qe&&A.normalMapType===dE,normalMapTangentSpace:qe&&A.normalMapType===fE,metalnessMap:vt,roughnessMap:C,anisotropy:T,anisotropyMap:me,clearcoat:X,clearcoatMap:fe,clearcoatNormalMap:ke,clearcoatRoughnessMap:ce,dispersion:re,iridescence:oe,iridescenceMap:we,iridescenceThicknessMap:tt,sheen:ae,sheenColorMap:De,sheenRoughnessMap:ve,specularMap:Ve,specularColorMap:Ge,specularIntensityMap:wt,transmission:Le,transmissionMap:y,thicknessMap:W,gradientMap:V,opaque:A.transparent===!1&&A.blending===Bo&&A.alphaToCoverage===!1,alphaMap:Y,alphaTest:ie,alphaHash:be,combine:A.combine,mapUv:rt&&x(A.map.channel),aoMapUv:Xe&&x(A.aoMap.channel),lightMapUv:dt&&x(A.lightMap.channel),bumpMapUv:Ie&&x(A.bumpMap.channel),normalMapUv:qe&&x(A.normalMap.channel),displacementMapUv:Je&&x(A.displacementMap.channel),emissiveMapUv:je&&x(A.emissiveMap.channel),metalnessMapUv:vt&&x(A.metalnessMap.channel),roughnessMapUv:C&&x(A.roughnessMap.channel),anisotropyMapUv:me&&x(A.anisotropyMap.channel),clearcoatMapUv:fe&&x(A.clearcoatMap.channel),clearcoatNormalMapUv:ke&&x(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&x(A.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&x(A.iridescenceMap.channel),iridescenceThicknessMapUv:tt&&x(A.iridescenceThicknessMap.channel),sheenColorMapUv:De&&x(A.sheenColorMap.channel),sheenRoughnessMapUv:ve&&x(A.sheenRoughnessMap.channel),specularMapUv:Ve&&x(A.specularMap.channel),specularColorMapUv:Ge&&x(A.specularColorMap.channel),specularIntensityMapUv:wt&&x(A.specularIntensityMap.channel),transmissionMapUv:y&&x(A.transmissionMap.channel),thicknessMapUv:W&&x(A.thicknessMap.channel),alphaMapUv:Y&&x(A.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(qe||T),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!J.attributes.uv&&(rt||Y),fog:!!q,useFog:A.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:B.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:Re,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:A.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:yt,decodeVideoTexture:rt&&A.map.isVideoTexture===!0&&ht.getTransfer(A.map.colorSpace)===Et,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===si,flipSided:A.side===xn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:He&&A.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:He&&A.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Dt.vertexUv1s=u.has(1),Dt.vertexUv2s=u.has(2),Dt.vertexUv3s=u.has(3),u.clear(),Dt}function d(A){const M=[];if(A.shaderID?M.push(A.shaderID):(M.push(A.customVertexShaderID),M.push(A.customFragmentShaderID)),A.defines!==void 0)for(const P in A.defines)M.push(P),M.push(A.defines[P]);return A.isRawShaderMaterial===!1&&(g(M,A),v(M,A),M.push(t.outputColorSpace)),M.push(A.customProgramCacheKey),M.join()}function g(A,M){A.push(M.precision),A.push(M.outputColorSpace),A.push(M.envMapMode),A.push(M.envMapCubeUVHeight),A.push(M.mapUv),A.push(M.alphaMapUv),A.push(M.lightMapUv),A.push(M.aoMapUv),A.push(M.bumpMapUv),A.push(M.normalMapUv),A.push(M.displacementMapUv),A.push(M.emissiveMapUv),A.push(M.metalnessMapUv),A.push(M.roughnessMapUv),A.push(M.anisotropyMapUv),A.push(M.clearcoatMapUv),A.push(M.clearcoatNormalMapUv),A.push(M.clearcoatRoughnessMapUv),A.push(M.iridescenceMapUv),A.push(M.iridescenceThicknessMapUv),A.push(M.sheenColorMapUv),A.push(M.sheenRoughnessMapUv),A.push(M.specularMapUv),A.push(M.specularColorMapUv),A.push(M.specularIntensityMapUv),A.push(M.transmissionMapUv),A.push(M.thicknessMapUv),A.push(M.combine),A.push(M.fogExp2),A.push(M.sizeAttenuation),A.push(M.morphTargetsCount),A.push(M.morphAttributeCount),A.push(M.numDirLights),A.push(M.numPointLights),A.push(M.numSpotLights),A.push(M.numSpotLightMaps),A.push(M.numHemiLights),A.push(M.numRectAreaLights),A.push(M.numDirLightShadows),A.push(M.numPointLightShadows),A.push(M.numSpotLightShadows),A.push(M.numSpotLightShadowsWithMaps),A.push(M.numLightProbes),A.push(M.shadowMapType),A.push(M.toneMapping),A.push(M.numClippingPlanes),A.push(M.numClipIntersection),A.push(M.depthPacking)}function v(A,M){s.disableAll(),M.supportsVertexTextures&&s.enable(0),M.instancing&&s.enable(1),M.instancingColor&&s.enable(2),M.instancingMorph&&s.enable(3),M.matcap&&s.enable(4),M.envMap&&s.enable(5),M.normalMapObjectSpace&&s.enable(6),M.normalMapTangentSpace&&s.enable(7),M.clearcoat&&s.enable(8),M.iridescence&&s.enable(9),M.alphaTest&&s.enable(10),M.vertexColors&&s.enable(11),M.vertexAlphas&&s.enable(12),M.vertexUv1s&&s.enable(13),M.vertexUv2s&&s.enable(14),M.vertexUv3s&&s.enable(15),M.vertexTangents&&s.enable(16),M.anisotropy&&s.enable(17),M.alphaHash&&s.enable(18),M.batching&&s.enable(19),M.dispersion&&s.enable(20),M.batchingColor&&s.enable(21),A.push(s.mask),s.disableAll(),M.fog&&s.enable(0),M.useFog&&s.enable(1),M.flatShading&&s.enable(2),M.logarithmicDepthBuffer&&s.enable(3),M.skinning&&s.enable(4),M.morphTargets&&s.enable(5),M.morphNormals&&s.enable(6),M.morphColors&&s.enable(7),M.premultipliedAlpha&&s.enable(8),M.shadowMapEnabled&&s.enable(9),M.doubleSided&&s.enable(10),M.flipSided&&s.enable(11),M.useDepthPacking&&s.enable(12),M.dithering&&s.enable(13),M.transmission&&s.enable(14),M.sheen&&s.enable(15),M.opaque&&s.enable(16),M.pointsUvs&&s.enable(17),M.decodeVideoTexture&&s.enable(18),M.alphaToCoverage&&s.enable(19),A.push(s.mask)}function w(A){const M=_[A.type];let P;if(M){const j=oi[M];P=nT.clone(j.uniforms)}else P=A.uniforms;return P}function b(A,M){let P;for(let j=0,B=c.length;j<B;j++){const q=c[j];if(q.cacheKey===M){P=q,++P.usedTimes;break}}return P===void 0&&(P=new mR(t,M,A,o),c.push(P)),P}function S(A){if(--A.usedTimes===0){const M=c.indexOf(A);c[M]=c[c.length-1],c.pop(),A.destroy()}}function R(A){l.remove(A)}function L(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:w,acquireProgram:b,releaseProgram:S,releaseShaderCache:R,programs:c,dispose:L}}function yR(){let t=new WeakMap;function e(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function n(o){t.delete(o)}function i(o,a,s){t.get(o)[a]=s}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function SR(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function jm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Ym(){const t=[];let e=0;const n=[],i=[],r=[];function o(){e=0,n.length=0,i.length=0,r.length=0}function a(f,h,m,_,x,p){let d=t[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:m,groupOrder:_,renderOrder:f.renderOrder,z:x,group:p},t[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=m,d.groupOrder=_,d.renderOrder=f.renderOrder,d.z=x,d.group=p),e++,d}function s(f,h,m,_,x,p){const d=a(f,h,m,_,x,p);m.transmission>0?i.push(d):m.transparent===!0?r.push(d):n.push(d)}function l(f,h,m,_,x,p){const d=a(f,h,m,_,x,p);m.transmission>0?i.unshift(d):m.transparent===!0?r.unshift(d):n.unshift(d)}function u(f,h){n.length>1&&n.sort(f||SR),i.length>1&&i.sort(h||jm),r.length>1&&r.sort(h||jm)}function c(){for(let f=e,h=t.length;f<h;f++){const m=t[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:o,push:s,unshift:l,finish:c,sort:u}}function MR(){let t=new WeakMap;function e(i,r){const o=t.get(i);let a;return o===void 0?(a=new Ym,t.set(i,[a])):r>=o.length?(a=new Ym,o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function ER(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new H,color:new ft};break;case"SpotLight":n={position:new H,direction:new H,color:new ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new H,color:new ft,distance:0,decay:0};break;case"HemisphereLight":n={direction:new H,skyColor:new ft,groundColor:new ft};break;case"RectAreaLight":n={color:new ft,position:new H,halfWidth:new H,halfHeight:new H};break}return t[e.id]=n,n}}}function TR(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let wR=0;function AR(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function RR(t){const e=new ER,n=TR(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new H);const r=new H,o=new kt,a=new kt;function s(u){let c=0,f=0,h=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let m=0,_=0,x=0,p=0,d=0,g=0,v=0,w=0,b=0,S=0,R=0;u.sort(AR);for(let A=0,M=u.length;A<M;A++){const P=u[A],j=P.color,B=P.intensity,q=P.distance,J=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)c+=j.r*B,f+=j.g*B,h+=j.b*B;else if(P.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(P.sh.coefficients[K],B);R++}else if(P.isDirectionalLight){const K=e.get(P);if(K.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Z=P.shadow,I=n.get(P);I.shadowBias=Z.bias,I.shadowNormalBias=Z.normalBias,I.shadowRadius=Z.radius,I.shadowMapSize=Z.mapSize,i.directionalShadow[m]=I,i.directionalShadowMap[m]=J,i.directionalShadowMatrix[m]=P.shadow.matrix,g++}i.directional[m]=K,m++}else if(P.isSpotLight){const K=e.get(P);K.position.setFromMatrixPosition(P.matrixWorld),K.color.copy(j).multiplyScalar(B),K.distance=q,K.coneCos=Math.cos(P.angle),K.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),K.decay=P.decay,i.spot[x]=K;const Z=P.shadow;if(P.map&&(i.spotLightMap[b]=P.map,b++,Z.updateMatrices(P),P.castShadow&&S++),i.spotLightMatrix[x]=Z.matrix,P.castShadow){const I=n.get(P);I.shadowBias=Z.bias,I.shadowNormalBias=Z.normalBias,I.shadowRadius=Z.radius,I.shadowMapSize=Z.mapSize,i.spotShadow[x]=I,i.spotShadowMap[x]=J,w++}x++}else if(P.isRectAreaLight){const K=e.get(P);K.color.copy(j).multiplyScalar(B),K.halfWidth.set(P.width*.5,0,0),K.halfHeight.set(0,P.height*.5,0),i.rectArea[p]=K,p++}else if(P.isPointLight){const K=e.get(P);if(K.color.copy(P.color).multiplyScalar(P.intensity),K.distance=P.distance,K.decay=P.decay,P.castShadow){const Z=P.shadow,I=n.get(P);I.shadowBias=Z.bias,I.shadowNormalBias=Z.normalBias,I.shadowRadius=Z.radius,I.shadowMapSize=Z.mapSize,I.shadowCameraNear=Z.camera.near,I.shadowCameraFar=Z.camera.far,i.pointShadow[_]=I,i.pointShadowMap[_]=J,i.pointShadowMatrix[_]=P.shadow.matrix,v++}i.point[_]=K,_++}else if(P.isHemisphereLight){const K=e.get(P);K.skyColor.copy(P.color).multiplyScalar(B),K.groundColor.copy(P.groundColor).multiplyScalar(B),i.hemi[d]=K,d++}}p>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_e.LTC_FLOAT_1,i.rectAreaLTC2=_e.LTC_FLOAT_2):(i.rectAreaLTC1=_e.LTC_HALF_1,i.rectAreaLTC2=_e.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=f,i.ambient[2]=h;const L=i.hash;(L.directionalLength!==m||L.pointLength!==_||L.spotLength!==x||L.rectAreaLength!==p||L.hemiLength!==d||L.numDirectionalShadows!==g||L.numPointShadows!==v||L.numSpotShadows!==w||L.numSpotMaps!==b||L.numLightProbes!==R)&&(i.directional.length=m,i.spot.length=x,i.rectArea.length=p,i.point.length=_,i.hemi.length=d,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=w+b-S,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=S,i.numLightProbes=R,L.directionalLength=m,L.pointLength=_,L.spotLength=x,L.rectAreaLength=p,L.hemiLength=d,L.numDirectionalShadows=g,L.numPointShadows=v,L.numSpotShadows=w,L.numSpotMaps=b,L.numLightProbes=R,i.version=wR++)}function l(u,c){let f=0,h=0,m=0,_=0,x=0;const p=c.matrixWorldInverse;for(let d=0,g=u.length;d<g;d++){const v=u[d];if(v.isDirectionalLight){const w=i.directional[f];w.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(p),f++}else if(v.isSpotLight){const w=i.spot[m];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(p),m++}else if(v.isRectAreaLight){const w=i.rectArea[_];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(p),a.identity(),o.copy(v.matrixWorld),o.premultiply(p),a.extractRotation(o),w.halfWidth.set(v.width*.5,0,0),w.halfHeight.set(0,v.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),_++}else if(v.isPointLight){const w=i.point[h];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(p),h++}else if(v.isHemisphereLight){const w=i.hemi[x];w.direction.setFromMatrixPosition(v.matrixWorld),w.direction.transformDirection(p),x++}}}return{setup:s,setupView:l,state:i}}function $m(t){const e=new RR(t),n=[],i=[];function r(c){u.camera=c,n.length=0,i.length=0}function o(c){n.push(c)}function a(c){i.push(c)}function s(){e.setup(n)}function l(c){e.setupView(n,c)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:s,setupLightsView:l,pushLight:o,pushShadow:a}}function CR(t){let e=new WeakMap;function n(r,o=0){const a=e.get(r);let s;return a===void 0?(s=new $m(t),e.set(r,[s])):o>=a.length?(s=new $m(t),a.push(s)):s=a[o],s}function i(){e=new WeakMap}return{get:n,dispose:i}}class PR extends _s{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=uE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class bR extends _s{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const LR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,DR=`uniform sampler2D shadow_pass;
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
}`;function UR(t,e,n){let i=new n0;const r=new et,o=new et,a=new qt,s=new PR({depthPacking:cE}),l=new bR,u={},c=n.maxTextureSize,f={[fr]:xn,[xn]:fr,[si]:si},h=new bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:LR,fragmentShader:DR}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const _=new Ui;_.setAttribute("position",new di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Zn(_,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=N_;let d=this.type;this.render=function(S,R,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;const A=t.getRenderTarget(),M=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),j=t.state;j.setBlending(sr),j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const B=d!==_i&&this.type===_i,q=d===_i&&this.type!==_i;for(let J=0,K=S.length;J<K;J++){const Z=S[J],I=Z.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const ee=I.getFrameExtents();if(r.multiply(ee),o.copy(I.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(o.x=Math.floor(c/ee.x),r.x=o.x*ee.x,I.mapSize.x=o.x),r.y>c&&(o.y=Math.floor(c/ee.y),r.y=o.y*ee.y,I.mapSize.y=o.y)),I.map===null||B===!0||q===!0){const ue=this.type!==_i?{minFilter:kn,magFilter:kn}:{};I.map!==null&&I.map.dispose(),I.map=new jr(r.x,r.y,ue),I.map.texture.name=Z.name+".shadowMap",I.camera.updateProjectionMatrix()}t.setRenderTarget(I.map),t.clear();const te=I.getViewportCount();for(let ue=0;ue<te;ue++){const Re=I.getViewport(ue);a.set(o.x*Re.x,o.y*Re.y,o.x*Re.z,o.y*Re.w),j.viewport(a),I.updateMatrices(Z,ue),i=I.getFrustum(),w(R,L,I.camera,Z,this.type)}I.isPointLightShadow!==!0&&this.type===_i&&g(I,L),I.needsUpdate=!1}d=this.type,p.needsUpdate=!1,t.setRenderTarget(A,M,P)};function g(S,R){const L=e.update(x);h.defines.VSM_SAMPLES!==S.blurSamples&&(h.defines.VSM_SAMPLES=S.blurSamples,m.defines.VSM_SAMPLES=S.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new jr(r.x,r.y)),h.uniforms.shadow_pass.value=S.map.texture,h.uniforms.resolution.value=S.mapSize,h.uniforms.radius.value=S.radius,t.setRenderTarget(S.mapPass),t.clear(),t.renderBufferDirect(R,null,L,h,x,null),m.uniforms.shadow_pass.value=S.mapPass.texture,m.uniforms.resolution.value=S.mapSize,m.uniforms.radius.value=S.radius,t.setRenderTarget(S.map),t.clear(),t.renderBufferDirect(R,null,L,m,x,null)}function v(S,R,L,A){let M=null;const P=L.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(P!==void 0)M=P;else if(M=L.isPointLight===!0?l:s,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const j=M.uuid,B=R.uuid;let q=u[j];q===void 0&&(q={},u[j]=q);let J=q[B];J===void 0&&(J=M.clone(),q[B]=J,R.addEventListener("dispose",b)),M=J}if(M.visible=R.visible,M.wireframe=R.wireframe,A===_i?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:f[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,L.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const j=t.properties.get(M);j.light=L}return M}function w(S,R,L,A,M){if(S.visible===!1)return;if(S.layers.test(R.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&M===_i)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,S.matrixWorld);const B=e.update(S),q=S.material;if(Array.isArray(q)){const J=B.groups;for(let K=0,Z=J.length;K<Z;K++){const I=J[K],ee=q[I.materialIndex];if(ee&&ee.visible){const te=v(S,ee,A,M);S.onBeforeShadow(t,S,R,L,B,te,I),t.renderBufferDirect(L,null,B,te,S,I),S.onAfterShadow(t,S,R,L,B,te,I)}}}else if(q.visible){const J=v(S,q,A,M);S.onBeforeShadow(t,S,R,L,B,J,null),t.renderBufferDirect(L,null,B,J,S,null),S.onAfterShadow(t,S,R,L,B,J,null)}}const j=S.children;for(let B=0,q=j.length;B<q;B++)w(j[B],R,L,A,M)}function b(S){S.target.removeEventListener("dispose",b);for(const L in u){const A=u[L],M=S.target.uuid;M in A&&(A[M].dispose(),delete A[M])}}}function NR(t){function e(){let y=!1;const W=new qt;let V=null;const Y=new qt(0,0,0,0);return{setMask:function(ie){V!==ie&&!y&&(t.colorMask(ie,ie,ie,ie),V=ie)},setLocked:function(ie){y=ie},setClear:function(ie,be,He,yt,Dt){Dt===!0&&(ie*=yt,be*=yt,He*=yt),W.set(ie,be,He,yt),Y.equals(W)===!1&&(t.clearColor(ie,be,He,yt),Y.copy(W))},reset:function(){y=!1,V=null,Y.set(-1,0,0,0)}}}function n(){let y=!1,W=null,V=null,Y=null;return{setTest:function(ie){ie?pe(t.DEPTH_TEST):he(t.DEPTH_TEST)},setMask:function(ie){W!==ie&&!y&&(t.depthMask(ie),W=ie)},setFunc:function(ie){if(V!==ie){switch(ie){case FM:t.depthFunc(t.NEVER);break;case OM:t.depthFunc(t.ALWAYS);break;case kM:t.depthFunc(t.LESS);break;case Kl:t.depthFunc(t.LEQUAL);break;case zM:t.depthFunc(t.EQUAL);break;case BM:t.depthFunc(t.GEQUAL);break;case HM:t.depthFunc(t.GREATER);break;case VM:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}V=ie}},setLocked:function(ie){y=ie},setClear:function(ie){Y!==ie&&(t.clearDepth(ie),Y=ie)},reset:function(){y=!1,W=null,V=null,Y=null}}}function i(){let y=!1,W=null,V=null,Y=null,ie=null,be=null,He=null,yt=null,Dt=null;return{setTest:function(ut){y||(ut?pe(t.STENCIL_TEST):he(t.STENCIL_TEST))},setMask:function(ut){W!==ut&&!y&&(t.stencilMask(ut),W=ut)},setFunc:function(ut,Rt,St){(V!==ut||Y!==Rt||ie!==St)&&(t.stencilFunc(ut,Rt,St),V=ut,Y=Rt,ie=St)},setOp:function(ut,Rt,St){(be!==ut||He!==Rt||yt!==St)&&(t.stencilOp(ut,Rt,St),be=ut,He=Rt,yt=St)},setLocked:function(ut){y=ut},setClear:function(ut){Dt!==ut&&(t.clearStencil(ut),Dt=ut)},reset:function(){y=!1,W=null,V=null,Y=null,ie=null,be=null,He=null,yt=null,Dt=null}}}const r=new e,o=new n,a=new i,s=new WeakMap,l=new WeakMap;let u={},c={},f=new WeakMap,h=[],m=null,_=!1,x=null,p=null,d=null,g=null,v=null,w=null,b=null,S=new ft(0,0,0),R=0,L=!1,A=null,M=null,P=null,j=null,B=null;const q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,K=0;const Z=t.getParameter(t.VERSION);Z.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(Z)[1]),J=K>=1):Z.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),J=K>=2);let I=null,ee={};const te=t.getParameter(t.SCISSOR_BOX),ue=t.getParameter(t.VIEWPORT),Re=new qt().fromArray(te),Ze=new qt().fromArray(ue);function $(y,W,V,Y){const ie=new Uint8Array(4),be=t.createTexture();t.bindTexture(y,be),t.texParameteri(y,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(y,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let He=0;He<V;He++)y===t.TEXTURE_3D||y===t.TEXTURE_2D_ARRAY?t.texImage3D(W,0,t.RGBA,1,1,Y,0,t.RGBA,t.UNSIGNED_BYTE,ie):t.texImage2D(W+He,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ie);return be}const se={};se[t.TEXTURE_2D]=$(t.TEXTURE_2D,t.TEXTURE_2D,1),se[t.TEXTURE_CUBE_MAP]=$(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[t.TEXTURE_2D_ARRAY]=$(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),se[t.TEXTURE_3D]=$(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),pe(t.DEPTH_TEST),o.setFunc(Kl),Ie(!1),qe(Cp),pe(t.CULL_FACE),Xe(sr);function pe(y){u[y]!==!0&&(t.enable(y),u[y]=!0)}function he(y){u[y]!==!1&&(t.disable(y),u[y]=!1)}function $e(y,W){return c[y]!==W?(t.bindFramebuffer(y,W),c[y]=W,y===t.DRAW_FRAMEBUFFER&&(c[t.FRAMEBUFFER]=W),y===t.FRAMEBUFFER&&(c[t.DRAW_FRAMEBUFFER]=W),!0):!1}function We(y,W){let V=h,Y=!1;if(y){V=f.get(W),V===void 0&&(V=[],f.set(W,V));const ie=y.textures;if(V.length!==ie.length||V[0]!==t.COLOR_ATTACHMENT0){for(let be=0,He=ie.length;be<He;be++)V[be]=t.COLOR_ATTACHMENT0+be;V.length=ie.length,Y=!0}}else V[0]!==t.BACK&&(V[0]=t.BACK,Y=!0);Y&&t.drawBuffers(V)}function rt(y){return m!==y?(t.useProgram(y),m=y,!0):!1}const N={[Pr]:t.FUNC_ADD,[xM]:t.FUNC_SUBTRACT,[yM]:t.FUNC_REVERSE_SUBTRACT};N[SM]=t.MIN,N[MM]=t.MAX;const Be={[EM]:t.ZERO,[TM]:t.ONE,[wM]:t.SRC_COLOR,[If]:t.SRC_ALPHA,[LM]:t.SRC_ALPHA_SATURATE,[PM]:t.DST_COLOR,[RM]:t.DST_ALPHA,[AM]:t.ONE_MINUS_SRC_COLOR,[Ff]:t.ONE_MINUS_SRC_ALPHA,[bM]:t.ONE_MINUS_DST_COLOR,[CM]:t.ONE_MINUS_DST_ALPHA,[DM]:t.CONSTANT_COLOR,[UM]:t.ONE_MINUS_CONSTANT_COLOR,[NM]:t.CONSTANT_ALPHA,[IM]:t.ONE_MINUS_CONSTANT_ALPHA};function Xe(y,W,V,Y,ie,be,He,yt,Dt,ut){if(y===sr){_===!0&&(he(t.BLEND),_=!1);return}if(_===!1&&(pe(t.BLEND),_=!0),y!==_M){if(y!==x||ut!==L){if((p!==Pr||v!==Pr)&&(t.blendEquation(t.FUNC_ADD),p=Pr,v=Pr),ut)switch(y){case Bo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Pp:t.blendFunc(t.ONE,t.ONE);break;case bp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Lp:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",y);break}else switch(y){case Bo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Pp:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case bp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Lp:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",y);break}d=null,g=null,w=null,b=null,S.set(0,0,0),R=0,x=y,L=ut}return}ie=ie||W,be=be||V,He=He||Y,(W!==p||ie!==v)&&(t.blendEquationSeparate(N[W],N[ie]),p=W,v=ie),(V!==d||Y!==g||be!==w||He!==b)&&(t.blendFuncSeparate(Be[V],Be[Y],Be[be],Be[He]),d=V,g=Y,w=be,b=He),(yt.equals(S)===!1||Dt!==R)&&(t.blendColor(yt.r,yt.g,yt.b,Dt),S.copy(yt),R=Dt),x=y,L=!1}function dt(y,W){y.side===si?he(t.CULL_FACE):pe(t.CULL_FACE);let V=y.side===xn;W&&(V=!V),Ie(V),y.blending===Bo&&y.transparent===!1?Xe(sr):Xe(y.blending,y.blendEquation,y.blendSrc,y.blendDst,y.blendEquationAlpha,y.blendSrcAlpha,y.blendDstAlpha,y.blendColor,y.blendAlpha,y.premultipliedAlpha),o.setFunc(y.depthFunc),o.setTest(y.depthTest),o.setMask(y.depthWrite),r.setMask(y.colorWrite);const Y=y.stencilWrite;a.setTest(Y),Y&&(a.setMask(y.stencilWriteMask),a.setFunc(y.stencilFunc,y.stencilRef,y.stencilFuncMask),a.setOp(y.stencilFail,y.stencilZFail,y.stencilZPass)),je(y.polygonOffset,y.polygonOffsetFactor,y.polygonOffsetUnits),y.alphaToCoverage===!0?pe(t.SAMPLE_ALPHA_TO_COVERAGE):he(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(y){A!==y&&(y?t.frontFace(t.CW):t.frontFace(t.CCW),A=y)}function qe(y){y!==gM?(pe(t.CULL_FACE),y!==M&&(y===Cp?t.cullFace(t.BACK):y===vM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):he(t.CULL_FACE),M=y}function Je(y){y!==P&&(J&&t.lineWidth(y),P=y)}function je(y,W,V){y?(pe(t.POLYGON_OFFSET_FILL),(j!==W||B!==V)&&(t.polygonOffset(W,V),j=W,B=V)):he(t.POLYGON_OFFSET_FILL)}function vt(y){y?pe(t.SCISSOR_TEST):he(t.SCISSOR_TEST)}function C(y){y===void 0&&(y=t.TEXTURE0+q-1),I!==y&&(t.activeTexture(y),I=y)}function T(y,W,V){V===void 0&&(I===null?V=t.TEXTURE0+q-1:V=I);let Y=ee[V];Y===void 0&&(Y={type:void 0,texture:void 0},ee[V]=Y),(Y.type!==y||Y.texture!==W)&&(I!==V&&(t.activeTexture(V),I=V),t.bindTexture(y,W||se[y]),Y.type=y,Y.texture=W)}function X(){const y=ee[I];y!==void 0&&y.type!==void 0&&(t.bindTexture(y.type,null),y.type=void 0,y.texture=void 0)}function re(){try{t.compressedTexImage2D.apply(t,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function oe(){try{t.compressedTexImage3D.apply(t,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function ae(){try{t.texSubImage2D.apply(t,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function Le(){try{t.texSubImage3D.apply(t,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function me(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function fe(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function ke(){try{t.texStorage2D.apply(t,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function ce(){try{t.texStorage3D.apply(t,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function we(){try{t.texImage2D.apply(t,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function tt(){try{t.texImage3D.apply(t,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function De(y){Re.equals(y)===!1&&(t.scissor(y.x,y.y,y.z,y.w),Re.copy(y))}function ve(y){Ze.equals(y)===!1&&(t.viewport(y.x,y.y,y.z,y.w),Ze.copy(y))}function Ve(y,W){let V=l.get(W);V===void 0&&(V=new WeakMap,l.set(W,V));let Y=V.get(y);Y===void 0&&(Y=t.getUniformBlockIndex(W,y.name),V.set(y,Y))}function Ge(y,W){const Y=l.get(W).get(y);s.get(W)!==Y&&(t.uniformBlockBinding(W,Y,y.__bindingPointIndex),s.set(W,Y))}function wt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},I=null,ee={},c={},f=new WeakMap,h=[],m=null,_=!1,x=null,p=null,d=null,g=null,v=null,w=null,b=null,S=new ft(0,0,0),R=0,L=!1,A=null,M=null,P=null,j=null,B=null,Re.set(0,0,t.canvas.width,t.canvas.height),Ze.set(0,0,t.canvas.width,t.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:pe,disable:he,bindFramebuffer:$e,drawBuffers:We,useProgram:rt,setBlending:Xe,setMaterial:dt,setFlipSided:Ie,setCullFace:qe,setLineWidth:Je,setPolygonOffset:je,setScissorTest:vt,activeTexture:C,bindTexture:T,unbindTexture:X,compressedTexImage2D:re,compressedTexImage3D:oe,texImage2D:we,texImage3D:tt,updateUBOMapping:Ve,uniformBlockBinding:Ge,texStorage2D:ke,texStorage3D:ce,texSubImage2D:ae,texSubImage3D:Le,compressedTexSubImage2D:me,compressedTexSubImage3D:fe,scissor:De,viewport:ve,reset:wt}}function IR(t,e,n,i,r,o,a){const s=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new et,c=new WeakMap;let f;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,T){return m?new OffscreenCanvas(C,T):nu("canvas")}function x(C,T,X){let re=1;const oe=vt(C);if((oe.width>X||oe.height>X)&&(re=X/Math.max(oe.width,oe.height)),re<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const ae=Math.floor(re*oe.width),Le=Math.floor(re*oe.height);f===void 0&&(f=_(ae,Le));const me=T?_(ae,Le):f;return me.width=ae,me.height=Le,me.getContext("2d").drawImage(C,0,0,ae,Le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+ae+"x"+Le+")."),me}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),C;return C}function p(C){return C.generateMipmaps&&C.minFilter!==kn&&C.minFilter!==Kn}function d(C){t.generateMipmap(C)}function g(C,T,X,re,oe=!1){if(C!==null){if(t[C]!==void 0)return t[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ae=T;if(T===t.RED&&(X===t.FLOAT&&(ae=t.R32F),X===t.HALF_FLOAT&&(ae=t.R16F),X===t.UNSIGNED_BYTE&&(ae=t.R8)),T===t.RED_INTEGER&&(X===t.UNSIGNED_BYTE&&(ae=t.R8UI),X===t.UNSIGNED_SHORT&&(ae=t.R16UI),X===t.UNSIGNED_INT&&(ae=t.R32UI),X===t.BYTE&&(ae=t.R8I),X===t.SHORT&&(ae=t.R16I),X===t.INT&&(ae=t.R32I)),T===t.RG&&(X===t.FLOAT&&(ae=t.RG32F),X===t.HALF_FLOAT&&(ae=t.RG16F),X===t.UNSIGNED_BYTE&&(ae=t.RG8)),T===t.RG_INTEGER&&(X===t.UNSIGNED_BYTE&&(ae=t.RG8UI),X===t.UNSIGNED_SHORT&&(ae=t.RG16UI),X===t.UNSIGNED_INT&&(ae=t.RG32UI),X===t.BYTE&&(ae=t.RG8I),X===t.SHORT&&(ae=t.RG16I),X===t.INT&&(ae=t.RG32I)),T===t.RGB&&X===t.UNSIGNED_INT_5_9_9_9_REV&&(ae=t.RGB9_E5),T===t.RGBA){const Le=oe?Ql:ht.getTransfer(re);X===t.FLOAT&&(ae=t.RGBA32F),X===t.HALF_FLOAT&&(ae=t.RGBA16F),X===t.UNSIGNED_BYTE&&(ae=Le===Et?t.SRGB8_ALPHA8:t.RGBA8),X===t.UNSIGNED_SHORT_4_4_4_4&&(ae=t.RGBA4),X===t.UNSIGNED_SHORT_5_5_5_1&&(ae=t.RGB5_A1)}return(ae===t.R16F||ae===t.R32F||ae===t.RG16F||ae===t.RG32F||ae===t.RGBA16F||ae===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function v(C,T){let X;return C?T===null||T===Qo||T===Jo?X=t.DEPTH24_STENCIL8:T===Zi?X=t.DEPTH32F_STENCIL8:T===Zl&&(X=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Qo||T===Jo?X=t.DEPTH_COMPONENT24:T===Zi?X=t.DEPTH_COMPONENT32F:T===Zl&&(X=t.DEPTH_COMPONENT16),X}function w(C,T){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==kn&&C.minFilter!==Kn?Math.log2(Math.max(T.width,T.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?T.mipmaps.length:1}function b(C){const T=C.target;T.removeEventListener("dispose",b),R(T),T.isVideoTexture&&c.delete(T)}function S(C){const T=C.target;T.removeEventListener("dispose",S),A(T)}function R(C){const T=i.get(C);if(T.__webglInit===void 0)return;const X=C.source,re=h.get(X);if(re){const oe=re[T.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&L(C),Object.keys(re).length===0&&h.delete(X)}i.remove(C)}function L(C){const T=i.get(C);t.deleteTexture(T.__webglTexture);const X=C.source,re=h.get(X);delete re[T.__cacheKey],a.memory.textures--}function A(C){const T=i.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(T.__webglFramebuffer[re]))for(let oe=0;oe<T.__webglFramebuffer[re].length;oe++)t.deleteFramebuffer(T.__webglFramebuffer[re][oe]);else t.deleteFramebuffer(T.__webglFramebuffer[re]);T.__webglDepthbuffer&&t.deleteRenderbuffer(T.__webglDepthbuffer[re])}else{if(Array.isArray(T.__webglFramebuffer))for(let re=0;re<T.__webglFramebuffer.length;re++)t.deleteFramebuffer(T.__webglFramebuffer[re]);else t.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&t.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&t.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let re=0;re<T.__webglColorRenderbuffer.length;re++)T.__webglColorRenderbuffer[re]&&t.deleteRenderbuffer(T.__webglColorRenderbuffer[re]);T.__webglDepthRenderbuffer&&t.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const X=C.textures;for(let re=0,oe=X.length;re<oe;re++){const ae=i.get(X[re]);ae.__webglTexture&&(t.deleteTexture(ae.__webglTexture),a.memory.textures--),i.remove(X[re])}i.remove(C)}let M=0;function P(){M=0}function j(){const C=M;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),M+=1,C}function B(C){const T=[];return T.push(C.wrapS),T.push(C.wrapT),T.push(C.wrapR||0),T.push(C.magFilter),T.push(C.minFilter),T.push(C.anisotropy),T.push(C.internalFormat),T.push(C.format),T.push(C.type),T.push(C.generateMipmaps),T.push(C.premultiplyAlpha),T.push(C.flipY),T.push(C.unpackAlignment),T.push(C.colorSpace),T.join()}function q(C,T){const X=i.get(C);if(C.isVideoTexture&&Je(C),C.isRenderTargetTexture===!1&&C.version>0&&X.__version!==C.version){const re=C.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ze(X,C,T);return}}n.bindTexture(t.TEXTURE_2D,X.__webglTexture,t.TEXTURE0+T)}function J(C,T){const X=i.get(C);if(C.version>0&&X.__version!==C.version){Ze(X,C,T);return}n.bindTexture(t.TEXTURE_2D_ARRAY,X.__webglTexture,t.TEXTURE0+T)}function K(C,T){const X=i.get(C);if(C.version>0&&X.__version!==C.version){Ze(X,C,T);return}n.bindTexture(t.TEXTURE_3D,X.__webglTexture,t.TEXTURE0+T)}function Z(C,T){const X=i.get(C);if(C.version>0&&X.__version!==C.version){$(X,C,T);return}n.bindTexture(t.TEXTURE_CUBE_MAP,X.__webglTexture,t.TEXTURE0+T)}const I={[zf]:t.REPEAT,[Fr]:t.CLAMP_TO_EDGE,[Bf]:t.MIRRORED_REPEAT},ee={[kn]:t.NEAREST,[QM]:t.NEAREST_MIPMAP_NEAREST,[Os]:t.NEAREST_MIPMAP_LINEAR,[Kn]:t.LINEAR,[ac]:t.LINEAR_MIPMAP_NEAREST,[Or]:t.LINEAR_MIPMAP_LINEAR},te={[hE]:t.NEVER,[xE]:t.ALWAYS,[pE]:t.LESS,[W_]:t.LEQUAL,[mE]:t.EQUAL,[_E]:t.GEQUAL,[gE]:t.GREATER,[vE]:t.NOTEQUAL};function ue(C,T){if(T.type===Zi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Kn||T.magFilter===ac||T.magFilter===Os||T.magFilter===Or||T.minFilter===Kn||T.minFilter===ac||T.minFilter===Os||T.minFilter===Or)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(C,t.TEXTURE_WRAP_S,I[T.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,I[T.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,I[T.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,ee[T.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,ee[T.minFilter]),T.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,te[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===kn||T.minFilter!==Os&&T.minFilter!==Or||T.type===Zi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");t.texParameterf(C,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function Re(C,T){let X=!1;C.__webglInit===void 0&&(C.__webglInit=!0,T.addEventListener("dispose",b));const re=T.source;let oe=h.get(re);oe===void 0&&(oe={},h.set(re,oe));const ae=B(T);if(ae!==C.__cacheKey){oe[ae]===void 0&&(oe[ae]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,X=!0),oe[ae].usedTimes++;const Le=oe[C.__cacheKey];Le!==void 0&&(oe[C.__cacheKey].usedTimes--,Le.usedTimes===0&&L(T)),C.__cacheKey=ae,C.__webglTexture=oe[ae].texture}return X}function Ze(C,T,X){let re=t.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(re=t.TEXTURE_2D_ARRAY),T.isData3DTexture&&(re=t.TEXTURE_3D);const oe=Re(C,T),ae=T.source;n.bindTexture(re,C.__webglTexture,t.TEXTURE0+X);const Le=i.get(ae);if(ae.version!==Le.__version||oe===!0){n.activeTexture(t.TEXTURE0+X);const me=ht.getPrimaries(ht.workingColorSpace),fe=T.colorSpace===$i?null:ht.getPrimaries(T.colorSpace),ke=T.colorSpace===$i||me===fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);let ce=x(T.image,!1,r.maxTextureSize);ce=je(T,ce);const we=o.convert(T.format,T.colorSpace),tt=o.convert(T.type);let De=g(T.internalFormat,we,tt,T.colorSpace,T.isVideoTexture);ue(re,T);let ve;const Ve=T.mipmaps,Ge=T.isVideoTexture!==!0,wt=Le.__version===void 0||oe===!0,y=ae.dataReady,W=w(T,ce);if(T.isDepthTexture)De=v(T.format===ea,T.type),wt&&(Ge?n.texStorage2D(t.TEXTURE_2D,1,De,ce.width,ce.height):n.texImage2D(t.TEXTURE_2D,0,De,ce.width,ce.height,0,we,tt,null));else if(T.isDataTexture)if(Ve.length>0){Ge&&wt&&n.texStorage2D(t.TEXTURE_2D,W,De,Ve[0].width,Ve[0].height);for(let V=0,Y=Ve.length;V<Y;V++)ve=Ve[V],Ge?y&&n.texSubImage2D(t.TEXTURE_2D,V,0,0,ve.width,ve.height,we,tt,ve.data):n.texImage2D(t.TEXTURE_2D,V,De,ve.width,ve.height,0,we,tt,ve.data);T.generateMipmaps=!1}else Ge?(wt&&n.texStorage2D(t.TEXTURE_2D,W,De,ce.width,ce.height),y&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ce.width,ce.height,we,tt,ce.data)):n.texImage2D(t.TEXTURE_2D,0,De,ce.width,ce.height,0,we,tt,ce.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Ge&&wt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,W,De,Ve[0].width,Ve[0].height,ce.depth);for(let V=0,Y=Ve.length;V<Y;V++)if(ve=Ve[V],T.format!==ui)if(we!==null)if(Ge){if(y)if(T.layerUpdates.size>0){for(const ie of T.layerUpdates){const be=ve.width*ve.height;n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,V,0,0,ie,ve.width,ve.height,1,we,ve.data.slice(be*ie,be*(ie+1)),0,0)}T.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,V,0,0,0,ve.width,ve.height,ce.depth,we,ve.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,V,De,ve.width,ve.height,ce.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?y&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,V,0,0,0,ve.width,ve.height,ce.depth,we,tt,ve.data):n.texImage3D(t.TEXTURE_2D_ARRAY,V,De,ve.width,ve.height,ce.depth,0,we,tt,ve.data)}else{Ge&&wt&&n.texStorage2D(t.TEXTURE_2D,W,De,Ve[0].width,Ve[0].height);for(let V=0,Y=Ve.length;V<Y;V++)ve=Ve[V],T.format!==ui?we!==null?Ge?y&&n.compressedTexSubImage2D(t.TEXTURE_2D,V,0,0,ve.width,ve.height,we,ve.data):n.compressedTexImage2D(t.TEXTURE_2D,V,De,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?y&&n.texSubImage2D(t.TEXTURE_2D,V,0,0,ve.width,ve.height,we,tt,ve.data):n.texImage2D(t.TEXTURE_2D,V,De,ve.width,ve.height,0,we,tt,ve.data)}else if(T.isDataArrayTexture)if(Ge){if(wt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,W,De,ce.width,ce.height,ce.depth),y)if(T.layerUpdates.size>0){let V;switch(tt){case t.UNSIGNED_BYTE:switch(we){case t.ALPHA:V=1;break;case t.LUMINANCE:V=1;break;case t.LUMINANCE_ALPHA:V=2;break;case t.RGB:V=3;break;case t.RGBA:V=4;break;default:throw new Error(`Unknown texel size for format ${we}.`)}break;case t.UNSIGNED_SHORT_4_4_4_4:case t.UNSIGNED_SHORT_5_5_5_1:case t.UNSIGNED_SHORT_5_6_5:V=1;break;default:throw new Error(`Unknown texel size for type ${tt}.`)}const Y=ce.width*ce.height*V;for(const ie of T.layerUpdates)n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ie,ce.width,ce.height,1,we,tt,ce.data.slice(Y*ie,Y*(ie+1)));T.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,we,tt,ce.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,De,ce.width,ce.height,ce.depth,0,we,tt,ce.data);else if(T.isData3DTexture)Ge?(wt&&n.texStorage3D(t.TEXTURE_3D,W,De,ce.width,ce.height,ce.depth),y&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,we,tt,ce.data)):n.texImage3D(t.TEXTURE_3D,0,De,ce.width,ce.height,ce.depth,0,we,tt,ce.data);else if(T.isFramebufferTexture){if(wt)if(Ge)n.texStorage2D(t.TEXTURE_2D,W,De,ce.width,ce.height);else{let V=ce.width,Y=ce.height;for(let ie=0;ie<W;ie++)n.texImage2D(t.TEXTURE_2D,ie,De,V,Y,0,we,tt,null),V>>=1,Y>>=1}}else if(Ve.length>0){if(Ge&&wt){const V=vt(Ve[0]);n.texStorage2D(t.TEXTURE_2D,W,De,V.width,V.height)}for(let V=0,Y=Ve.length;V<Y;V++)ve=Ve[V],Ge?y&&n.texSubImage2D(t.TEXTURE_2D,V,0,0,we,tt,ve):n.texImage2D(t.TEXTURE_2D,V,De,we,tt,ve);T.generateMipmaps=!1}else if(Ge){if(wt){const V=vt(ce);n.texStorage2D(t.TEXTURE_2D,W,De,V.width,V.height)}y&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,we,tt,ce)}else n.texImage2D(t.TEXTURE_2D,0,De,we,tt,ce);p(T)&&d(re),Le.__version=ae.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function $(C,T,X){if(T.image.length!==6)return;const re=Re(C,T),oe=T.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+X);const ae=i.get(oe);if(oe.version!==ae.__version||re===!0){n.activeTexture(t.TEXTURE0+X);const Le=ht.getPrimaries(ht.workingColorSpace),me=T.colorSpace===$i?null:ht.getPrimaries(T.colorSpace),fe=T.colorSpace===$i||Le===me?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const ke=T.isCompressedTexture||T.image[0].isCompressedTexture,ce=T.image[0]&&T.image[0].isDataTexture,we=[];for(let Y=0;Y<6;Y++)!ke&&!ce?we[Y]=x(T.image[Y],!0,r.maxCubemapSize):we[Y]=ce?T.image[Y].image:T.image[Y],we[Y]=je(T,we[Y]);const tt=we[0],De=o.convert(T.format,T.colorSpace),ve=o.convert(T.type),Ve=g(T.internalFormat,De,ve,T.colorSpace),Ge=T.isVideoTexture!==!0,wt=ae.__version===void 0||re===!0,y=oe.dataReady;let W=w(T,tt);ue(t.TEXTURE_CUBE_MAP,T);let V;if(ke){Ge&&wt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,W,Ve,tt.width,tt.height);for(let Y=0;Y<6;Y++){V=we[Y].mipmaps;for(let ie=0;ie<V.length;ie++){const be=V[ie];T.format!==ui?De!==null?Ge?y&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ie,0,0,be.width,be.height,De,be.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ie,Ve,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?y&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ie,0,0,be.width,be.height,De,ve,be.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ie,Ve,be.width,be.height,0,De,ve,be.data)}}}else{if(V=T.mipmaps,Ge&&wt){V.length>0&&W++;const Y=vt(we[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,W,Ve,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(ce){Ge?y&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,we[Y].width,we[Y].height,De,ve,we[Y].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Ve,we[Y].width,we[Y].height,0,De,ve,we[Y].data);for(let ie=0;ie<V.length;ie++){const He=V[ie].image[Y].image;Ge?y&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ie+1,0,0,He.width,He.height,De,ve,He.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ie+1,Ve,He.width,He.height,0,De,ve,He.data)}}else{Ge?y&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,De,ve,we[Y]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Ve,De,ve,we[Y]);for(let ie=0;ie<V.length;ie++){const be=V[ie];Ge?y&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ie+1,0,0,De,ve,be.image[Y]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ie+1,Ve,De,ve,be.image[Y])}}}p(T)&&d(t.TEXTURE_CUBE_MAP),ae.__version=oe.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function se(C,T,X,re,oe,ae){const Le=o.convert(X.format,X.colorSpace),me=o.convert(X.type),fe=g(X.internalFormat,Le,me,X.colorSpace);if(!i.get(T).__hasExternalTextures){const ce=Math.max(1,T.width>>ae),we=Math.max(1,T.height>>ae);oe===t.TEXTURE_3D||oe===t.TEXTURE_2D_ARRAY?n.texImage3D(oe,ae,fe,ce,we,T.depth,0,Le,me,null):n.texImage2D(oe,ae,fe,ce,we,0,Le,me,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),qe(T)?s.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,re,oe,i.get(X).__webglTexture,0,Ie(T)):(oe===t.TEXTURE_2D||oe>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,re,oe,i.get(X).__webglTexture,ae),n.bindFramebuffer(t.FRAMEBUFFER,null)}function pe(C,T,X){if(t.bindRenderbuffer(t.RENDERBUFFER,C),T.depthBuffer){const re=T.depthTexture,oe=re&&re.isDepthTexture?re.type:null,ae=v(T.stencilBuffer,oe),Le=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,me=Ie(T);qe(T)?s.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,me,ae,T.width,T.height):X?t.renderbufferStorageMultisample(t.RENDERBUFFER,me,ae,T.width,T.height):t.renderbufferStorage(t.RENDERBUFFER,ae,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Le,t.RENDERBUFFER,C)}else{const re=T.textures;for(let oe=0;oe<re.length;oe++){const ae=re[oe],Le=o.convert(ae.format,ae.colorSpace),me=o.convert(ae.type),fe=g(ae.internalFormat,Le,me,ae.colorSpace),ke=Ie(T);X&&qe(T)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ke,fe,T.width,T.height):qe(T)?s.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ke,fe,T.width,T.height):t.renderbufferStorage(t.RENDERBUFFER,fe,T.width,T.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function he(C,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),q(T.depthTexture,0);const re=i.get(T.depthTexture).__webglTexture,oe=Ie(T);if(T.depthTexture.format===Ho)qe(T)?s.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,re,0,oe):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,re,0);else if(T.depthTexture.format===ea)qe(T)?s.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,re,0,oe):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function $e(C){const T=i.get(C),X=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!T.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");he(T.__webglFramebuffer,C)}else if(X){T.__webglDepthbuffer=[];for(let re=0;re<6;re++)n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer[re]),T.__webglDepthbuffer[re]=t.createRenderbuffer(),pe(T.__webglDepthbuffer[re],C,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=t.createRenderbuffer(),pe(T.__webglDepthbuffer,C,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function We(C,T,X){const re=i.get(C);T!==void 0&&se(re.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),X!==void 0&&$e(C)}function rt(C){const T=C.texture,X=i.get(C),re=i.get(T);C.addEventListener("dispose",S);const oe=C.textures,ae=C.isWebGLCubeRenderTarget===!0,Le=oe.length>1;if(Le||(re.__webglTexture===void 0&&(re.__webglTexture=t.createTexture()),re.__version=T.version,a.memory.textures++),ae){X.__webglFramebuffer=[];for(let me=0;me<6;me++)if(T.mipmaps&&T.mipmaps.length>0){X.__webglFramebuffer[me]=[];for(let fe=0;fe<T.mipmaps.length;fe++)X.__webglFramebuffer[me][fe]=t.createFramebuffer()}else X.__webglFramebuffer[me]=t.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){X.__webglFramebuffer=[];for(let me=0;me<T.mipmaps.length;me++)X.__webglFramebuffer[me]=t.createFramebuffer()}else X.__webglFramebuffer=t.createFramebuffer();if(Le)for(let me=0,fe=oe.length;me<fe;me++){const ke=i.get(oe[me]);ke.__webglTexture===void 0&&(ke.__webglTexture=t.createTexture(),a.memory.textures++)}if(C.samples>0&&qe(C)===!1){X.__webglMultisampledFramebuffer=t.createFramebuffer(),X.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let me=0;me<oe.length;me++){const fe=oe[me];X.__webglColorRenderbuffer[me]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,X.__webglColorRenderbuffer[me]);const ke=o.convert(fe.format,fe.colorSpace),ce=o.convert(fe.type),we=g(fe.internalFormat,ke,ce,fe.colorSpace,C.isXRRenderTarget===!0),tt=Ie(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,tt,we,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,X.__webglColorRenderbuffer[me])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(X.__webglDepthRenderbuffer=t.createRenderbuffer(),pe(X.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ae){n.bindTexture(t.TEXTURE_CUBE_MAP,re.__webglTexture),ue(t.TEXTURE_CUBE_MAP,T);for(let me=0;me<6;me++)if(T.mipmaps&&T.mipmaps.length>0)for(let fe=0;fe<T.mipmaps.length;fe++)se(X.__webglFramebuffer[me][fe],C,T,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+me,fe);else se(X.__webglFramebuffer[me],C,T,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);p(T)&&d(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Le){for(let me=0,fe=oe.length;me<fe;me++){const ke=oe[me],ce=i.get(ke);n.bindTexture(t.TEXTURE_2D,ce.__webglTexture),ue(t.TEXTURE_2D,ke),se(X.__webglFramebuffer,C,ke,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,0),p(ke)&&d(t.TEXTURE_2D)}n.unbindTexture()}else{let me=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(me=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(me,re.__webglTexture),ue(me,T),T.mipmaps&&T.mipmaps.length>0)for(let fe=0;fe<T.mipmaps.length;fe++)se(X.__webglFramebuffer[fe],C,T,t.COLOR_ATTACHMENT0,me,fe);else se(X.__webglFramebuffer,C,T,t.COLOR_ATTACHMENT0,me,0);p(T)&&d(me),n.unbindTexture()}C.depthBuffer&&$e(C)}function N(C){const T=C.textures;for(let X=0,re=T.length;X<re;X++){const oe=T[X];if(p(oe)){const ae=C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Le=i.get(oe).__webglTexture;n.bindTexture(ae,Le),d(ae),n.unbindTexture()}}}const Be=[],Xe=[];function dt(C){if(C.samples>0){if(qe(C)===!1){const T=C.textures,X=C.width,re=C.height;let oe=t.COLOR_BUFFER_BIT;const ae=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Le=i.get(C),me=T.length>1;if(me)for(let fe=0;fe<T.length;fe++)n.bindFramebuffer(t.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let fe=0;fe<T.length;fe++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(oe|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(oe|=t.STENCIL_BUFFER_BIT)),me){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Le.__webglColorRenderbuffer[fe]);const ke=i.get(T[fe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ke,0)}t.blitFramebuffer(0,0,X,re,0,0,X,re,oe,t.NEAREST),l===!0&&(Be.length=0,Xe.length=0,Be.push(t.COLOR_ATTACHMENT0+fe),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Be.push(ae),Xe.push(ae),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Xe)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Be))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),me)for(let fe=0;fe<T.length;fe++){n.bindFramebuffer(t.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,Le.__webglColorRenderbuffer[fe]);const ke=i.get(T[fe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,ke,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const T=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[T])}}}function Ie(C){return Math.min(r.maxSamples,C.samples)}function qe(C){const T=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Je(C){const T=a.render.frame;c.get(C)!==T&&(c.set(C,T),C.update())}function je(C,T){const X=C.colorSpace,re=C.format,oe=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||X!==vr&&X!==$i&&(ht.getTransfer(X)===Et?(re!==ui||oe!==dr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),T}function vt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(u.width=C.naturalWidth||C.width,u.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(u.width=C.displayWidth,u.height=C.displayHeight):(u.width=C.width,u.height=C.height),u}this.allocateTextureUnit=j,this.resetTextureUnits=P,this.setTexture2D=q,this.setTexture2DArray=J,this.setTexture3D=K,this.setTextureCube=Z,this.rebindTextures=We,this.setupRenderTarget=rt,this.updateRenderTargetMipmap=N,this.updateMultisampleRenderTarget=dt,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=se,this.useMultisampledRTT=qe}function FR(t,e){function n(i,r=$i){let o;const a=ht.getTransfer(r);if(i===dr)return t.UNSIGNED_BYTE;if(i===z_)return t.UNSIGNED_SHORT_4_4_4_4;if(i===B_)return t.UNSIGNED_SHORT_5_5_5_1;if(i===tE)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===JM)return t.BYTE;if(i===eE)return t.SHORT;if(i===Zl)return t.UNSIGNED_SHORT;if(i===k_)return t.INT;if(i===Qo)return t.UNSIGNED_INT;if(i===Zi)return t.FLOAT;if(i===Tu)return t.HALF_FLOAT;if(i===nE)return t.ALPHA;if(i===iE)return t.RGB;if(i===ui)return t.RGBA;if(i===rE)return t.LUMINANCE;if(i===oE)return t.LUMINANCE_ALPHA;if(i===Ho)return t.DEPTH_COMPONENT;if(i===ea)return t.DEPTH_STENCIL;if(i===aE)return t.RED;if(i===H_)return t.RED_INTEGER;if(i===sE)return t.RG;if(i===V_)return t.RG_INTEGER;if(i===G_)return t.RGBA_INTEGER;if(i===sc||i===lc||i===uc||i===cc)if(a===Et)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===sc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===lc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===uc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===cc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===sc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===lc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===uc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===cc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Dp||i===Up||i===Np||i===Ip)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===Dp)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Up)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Np)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ip)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Fp||i===Op||i===kp)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===Fp||i===Op)return a===Et?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===kp)return a===Et?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===zp||i===Bp||i===Hp||i===Vp||i===Gp||i===Wp||i===Xp||i===jp||i===Yp||i===$p||i===qp||i===Kp||i===Zp||i===Qp)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===zp)return a===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Bp)return a===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Hp)return a===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Vp)return a===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Gp)return a===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Wp)return a===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Xp)return a===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===jp)return a===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Yp)return a===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===$p)return a===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===qp)return a===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Kp)return a===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Zp)return a===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Qp)return a===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===fc||i===Jp||i===em)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===fc)return a===Et?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Jp)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===em)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===lE||i===tm||i===nm||i===im)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===fc)return o.COMPRESSED_RED_RGTC1_EXT;if(i===tm)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===nm)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===im)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Jo?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class OR extends Fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ol extends Sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const kR={type:"move"};class Fc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ol,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ol,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ol,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,o=null,a=null;const s=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const x of e.hand.values()){const p=n.getJointPose(x,i),d=this._getHandJoint(u,x);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],h=c.position.distanceTo(f.position),m=.02,_=.005;u.inputState.pinching&&h>m+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=m-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=n.getPose(e.gripSpace,i),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(kR)))}return s!==null&&(s.visible=r!==null),l!==null&&(l.visible=o!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ol;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const zR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,BR=`
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

}`;class HR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new yn,o=e.properties.get(r);o.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new bi({vertexShader:zR,fragmentShader:BR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Zn(new xs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class VR extends Kr{constructor(e,n){super();const i=this;let r=null,o=1,a=null,s="local-floor",l=1,u=null,c=null,f=null,h=null,m=null,_=null;const x=new HR,p=n.getContextAttributes();let d=null,g=null;const v=[],w=[],b=new et;let S=null;const R=new Fn;R.layers.enable(1),R.viewport=new qt;const L=new Fn;L.layers.enable(2),L.viewport=new qt;const A=[R,L],M=new OR;M.layers.enable(1),M.layers.enable(2);let P=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let se=v[$];return se===void 0&&(se=new Fc,v[$]=se),se.getTargetRaySpace()},this.getControllerGrip=function($){let se=v[$];return se===void 0&&(se=new Fc,v[$]=se),se.getGripSpace()},this.getHand=function($){let se=v[$];return se===void 0&&(se=new Fc,v[$]=se),se.getHandSpace()};function B($){const se=w.indexOf($.inputSource);if(se===-1)return;const pe=v[se];pe!==void 0&&(pe.update($.inputSource,$.frame,u||a),pe.dispatchEvent({type:$.type,data:$.inputSource}))}function q(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",J);for(let $=0;$<v.length;$++){const se=w[$];se!==null&&(w[$]=null,v[$].disconnect(se))}P=null,j=null,x.reset(),e.setRenderTarget(d),m=null,h=null,f=null,r=null,g=null,Ze.stop(),i.isPresenting=!1,e.setPixelRatio(S),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){o=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){s=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function($){u=$},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",q),r.addEventListener("inputsourceschange",J),p.xrCompatible!==!0&&await n.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(b),r.renderState.layers===void 0){const se={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:o};m=new XRWebGLLayer(r,n,se),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),g=new jr(m.framebufferWidth,m.framebufferHeight,{format:ui,type:dr,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let se=null,pe=null,he=null;p.depth&&(he=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,se=p.stencil?ea:Ho,pe=p.stencil?Jo:Qo);const $e={colorFormat:n.RGBA8,depthFormat:he,scaleFactor:o};f=new XRWebGLBinding(r,n),h=f.createProjectionLayer($e),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),g=new jr(h.textureWidth,h.textureHeight,{format:ui,type:dr,depthTexture:new r0(h.textureWidth,h.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await r.requestReferenceSpace(s),Ze.setContext(r),Ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function J($){for(let se=0;se<$.removed.length;se++){const pe=$.removed[se],he=w.indexOf(pe);he>=0&&(w[he]=null,v[he].disconnect(pe))}for(let se=0;se<$.added.length;se++){const pe=$.added[se];let he=w.indexOf(pe);if(he===-1){for(let We=0;We<v.length;We++)if(We>=w.length){w.push(pe),he=We;break}else if(w[We]===null){w[We]=pe,he=We;break}if(he===-1)break}const $e=v[he];$e&&$e.connect(pe)}}const K=new H,Z=new H;function I($,se,pe){K.setFromMatrixPosition(se.matrixWorld),Z.setFromMatrixPosition(pe.matrixWorld);const he=K.distanceTo(Z),$e=se.projectionMatrix.elements,We=pe.projectionMatrix.elements,rt=$e[14]/($e[10]-1),N=$e[14]/($e[10]+1),Be=($e[9]+1)/$e[5],Xe=($e[9]-1)/$e[5],dt=($e[8]-1)/$e[0],Ie=(We[8]+1)/We[0],qe=rt*dt,Je=rt*Ie,je=he/(-dt+Ie),vt=je*-dt;se.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(vt),$.translateZ(je),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert();const C=rt+je,T=N+je,X=qe-vt,re=Je+(he-vt),oe=Be*N/T*C,ae=Xe*N/T*C;$.projectionMatrix.makePerspective(X,re,oe,ae,C,T),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}function ee($,se){se===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(se.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;x.texture!==null&&($.near=x.depthNear,$.far=x.depthFar),M.near=L.near=R.near=$.near,M.far=L.far=R.far=$.far,(P!==M.near||j!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,j=M.far,R.near=P,R.far=j,L.near=P,L.far=j,R.updateProjectionMatrix(),L.updateProjectionMatrix(),$.updateProjectionMatrix());const se=$.parent,pe=M.cameras;ee(M,se);for(let he=0;he<pe.length;he++)ee(pe[he],se);pe.length===2?I(M,R,L):M.projectionMatrix.copy(R.projectionMatrix),te($,M,se)};function te($,se,pe){pe===null?$.matrix.copy(se.matrixWorld):($.matrix.copy(pe.matrixWorld),$.matrix.invert(),$.matrix.multiply(se.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(se.projectionMatrix),$.projectionMatrixInverse.copy(se.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=ss*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function($){l=$,h!==null&&(h.fixedFoveation=$),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=$)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let ue=null;function Re($,se){if(c=se.getViewerPose(u||a),_=se,c!==null){const pe=c.views;m!==null&&(e.setRenderTargetFramebuffer(g,m.framebuffer),e.setRenderTarget(g));let he=!1;pe.length!==M.cameras.length&&(M.cameras.length=0,he=!0);for(let We=0;We<pe.length;We++){const rt=pe[We];let N=null;if(m!==null)N=m.getViewport(rt);else{const Xe=f.getViewSubImage(h,rt);N=Xe.viewport,We===0&&(e.setRenderTargetTextures(g,Xe.colorTexture,h.ignoreDepthValues?void 0:Xe.depthStencilTexture),e.setRenderTarget(g))}let Be=A[We];Be===void 0&&(Be=new Fn,Be.layers.enable(We),Be.viewport=new qt,A[We]=Be),Be.matrix.fromArray(rt.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(rt.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(N.x,N.y,N.width,N.height),We===0&&(M.matrix.copy(Be.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),he===!0&&M.cameras.push(Be)}const $e=r.enabledFeatures;if($e&&$e.includes("depth-sensing")){const We=f.getDepthInformation(pe[0]);We&&We.isValid&&We.texture&&x.init(e,We,r.renderState)}}for(let pe=0;pe<v.length;pe++){const he=w[pe],$e=v[pe];he!==null&&$e!==void 0&&$e.update(he,se,u||a)}ue&&ue($,se),se.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:se}),_=null}const Ze=new i0;Ze.setAnimationLoop(Re),this.setAnimationLoop=function($){ue=$},this.dispose=function(){}}}const Tr=new Pi,GR=new kt;function WR(t,e){function n(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function i(p,d){d.color.getRGB(p.fogColor.value,J_(t)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function r(p,d,g,v,w){d.isMeshBasicMaterial||d.isMeshLambertMaterial?o(p,d):d.isMeshToonMaterial?(o(p,d),f(p,d)):d.isMeshPhongMaterial?(o(p,d),c(p,d)):d.isMeshStandardMaterial?(o(p,d),h(p,d),d.isMeshPhysicalMaterial&&m(p,d,w)):d.isMeshMatcapMaterial?(o(p,d),_(p,d)):d.isMeshDepthMaterial?o(p,d):d.isMeshDistanceMaterial?(o(p,d),x(p,d)):d.isMeshNormalMaterial?o(p,d):d.isLineBasicMaterial?(a(p,d),d.isLineDashedMaterial&&s(p,d)):d.isPointsMaterial?l(p,d,g,v):d.isSpriteMaterial?u(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function o(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,n(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,n(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,n(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===xn&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,n(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===xn&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,n(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,n(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const g=e.get(d),v=g.envMap,w=g.envMapRotation;v&&(p.envMap.value=v,Tr.copy(w),Tr.x*=-1,Tr.y*=-1,Tr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Tr.y*=-1,Tr.z*=-1),p.envMapRotation.value.setFromMatrix4(GR.makeRotationFromEuler(Tr)),p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,p.aoMapTransform))}function a(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,n(d.map,p.mapTransform))}function s(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,g,v){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*g,p.scale.value=v*.5,d.map&&(p.map.value=d.map,n(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,n(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function u(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,n(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,n(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function f(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function h(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,g){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===xn&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=g.texture,p.transmissionSamplerSize.value.set(g.width,g.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,d){d.matcap&&(p.matcap.value=d.matcap)}function x(p,d){const g=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(g.matrixWorld),p.nearDistance.value=g.shadow.camera.near,p.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function XR(t,e,n,i){let r={},o={},a=[];const s=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,v){const w=v.program;i.uniformBlockBinding(g,w)}function u(g,v){let w=r[g.id];w===void 0&&(_(g),w=c(g),r[g.id]=w,g.addEventListener("dispose",p));const b=v.program;i.updateUBOMapping(g,b);const S=e.render.frame;o[g.id]!==S&&(h(g),o[g.id]=S)}function c(g){const v=f();g.__bindingPointIndex=v;const w=t.createBuffer(),b=g.__size,S=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,w),t.bufferData(t.UNIFORM_BUFFER,b,S),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,w),w}function f(){for(let g=0;g<s;g++)if(a.indexOf(g)===-1)return a.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(g){const v=r[g.id],w=g.uniforms,b=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let S=0,R=w.length;S<R;S++){const L=Array.isArray(w[S])?w[S]:[w[S]];for(let A=0,M=L.length;A<M;A++){const P=L[A];if(m(P,S,A,b)===!0){const j=P.__offset,B=Array.isArray(P.value)?P.value:[P.value];let q=0;for(let J=0;J<B.length;J++){const K=B[J],Z=x(K);typeof K=="number"||typeof K=="boolean"?(P.__data[0]=K,t.bufferSubData(t.UNIFORM_BUFFER,j+q,P.__data)):K.isMatrix3?(P.__data[0]=K.elements[0],P.__data[1]=K.elements[1],P.__data[2]=K.elements[2],P.__data[3]=0,P.__data[4]=K.elements[3],P.__data[5]=K.elements[4],P.__data[6]=K.elements[5],P.__data[7]=0,P.__data[8]=K.elements[6],P.__data[9]=K.elements[7],P.__data[10]=K.elements[8],P.__data[11]=0):(K.toArray(P.__data,q),q+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,j,P.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(g,v,w,b){const S=g.value,R=v+"_"+w;if(b[R]===void 0)return typeof S=="number"||typeof S=="boolean"?b[R]=S:b[R]=S.clone(),!0;{const L=b[R];if(typeof S=="number"||typeof S=="boolean"){if(L!==S)return b[R]=S,!0}else if(L.equals(S)===!1)return L.copy(S),!0}return!1}function _(g){const v=g.uniforms;let w=0;const b=16;for(let R=0,L=v.length;R<L;R++){const A=Array.isArray(v[R])?v[R]:[v[R]];for(let M=0,P=A.length;M<P;M++){const j=A[M],B=Array.isArray(j.value)?j.value:[j.value];for(let q=0,J=B.length;q<J;q++){const K=B[q],Z=x(K),I=w%b;I!==0&&b-I<Z.boundary&&(w+=b-I),j.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=w,w+=Z.storage}}}const S=w%b;return S>0&&(w+=b-S),g.__size=w,g.__cache={},this}function x(g){const v={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(v.boundary=4,v.storage=4):g.isVector2?(v.boundary=8,v.storage=8):g.isVector3||g.isColor?(v.boundary=16,v.storage=12):g.isVector4?(v.boundary=16,v.storage=16):g.isMatrix3?(v.boundary=48,v.storage=48):g.isMatrix4?(v.boundary=64,v.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),v}function p(g){const v=g.target;v.removeEventListener("dispose",p);const w=a.indexOf(v.__bindingPointIndex);a.splice(w,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete o[v.id]}function d(){for(const g in r)t.deleteBuffer(r[g]);a=[],r={},o={}}return{bind:l,update:u,dispose:d}}class jR{constructor(e={}){const{canvas:n=OE(),context:i=null,depth:r=!0,stencil:o=!1,alpha:a=!1,antialias:s=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=a;const m=new Uint32Array(4),_=new Int32Array(4);let x=null,p=null;const d=[],g=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ri,this.toneMapping=lr,this.toneMappingExposure=1;const v=this;let w=!1,b=0,S=0,R=null,L=-1,A=null;const M=new qt,P=new qt;let j=null;const B=new ft(0);let q=0,J=n.width,K=n.height,Z=1,I=null,ee=null;const te=new qt(0,0,J,K),ue=new qt(0,0,J,K);let Re=!1;const Ze=new n0;let $=!1,se=!1;const pe=new kt,he=new H,$e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let We=!1;function rt(){return R===null?Z:1}let N=i;function Be(E,U){return n.getContext(E,U)}try{const E={alpha:!0,depth:r,stencil:o,antialias:s,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Wd}`),n.addEventListener("webglcontextlost",W,!1),n.addEventListener("webglcontextrestored",V,!1),n.addEventListener("webglcontextcreationerror",Y,!1),N===null){const U="webgl2";if(N=Be(U,E),N===null)throw Be(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Xe,dt,Ie,qe,Je,je,vt,C,T,X,re,oe,ae,Le,me,fe,ke,ce,we,tt,De,ve,Ve,Ge;function wt(){Xe=new eA(N),Xe.init(),ve=new FR(N,Xe),dt=new Yw(N,Xe,e,ve),Ie=new NR(N),qe=new iA(N),Je=new yR,je=new IR(N,Xe,Ie,Je,dt,ve,qe),vt=new qw(v),C=new Jw(v),T=new uT(N),Ve=new Xw(N,T),X=new tA(N,T,qe,Ve),re=new oA(N,X,T,qe),we=new rA(N,dt,je),fe=new $w(Je),oe=new xR(v,vt,C,Xe,dt,Ve,fe),ae=new WR(v,Je),Le=new MR,me=new CR(Xe),ce=new Ww(v,vt,C,Ie,re,h,l),ke=new UR(v,re,dt),Ge=new XR(N,qe,dt,Ie),tt=new jw(N,Xe,qe),De=new nA(N,Xe,qe),qe.programs=oe.programs,v.capabilities=dt,v.extensions=Xe,v.properties=Je,v.renderLists=Le,v.shadowMap=ke,v.state=Ie,v.info=qe}wt();const y=new VR(v,N);this.xr=y,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const E=Xe.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Xe.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(E){E!==void 0&&(Z=E,this.setSize(J,K,!1))},this.getSize=function(E){return E.set(J,K)},this.setSize=function(E,U,k=!0){if(y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=E,K=U,n.width=Math.floor(E*Z),n.height=Math.floor(U*Z),k===!0&&(n.style.width=E+"px",n.style.height=U+"px"),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(J*Z,K*Z).floor()},this.setDrawingBufferSize=function(E,U,k){J=E,K=U,Z=k,n.width=Math.floor(E*k),n.height=Math.floor(U*k),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(M)},this.getViewport=function(E){return E.copy(te)},this.setViewport=function(E,U,k,z){E.isVector4?te.set(E.x,E.y,E.z,E.w):te.set(E,U,k,z),Ie.viewport(M.copy(te).multiplyScalar(Z).round())},this.getScissor=function(E){return E.copy(ue)},this.setScissor=function(E,U,k,z){E.isVector4?ue.set(E.x,E.y,E.z,E.w):ue.set(E,U,k,z),Ie.scissor(P.copy(ue).multiplyScalar(Z).round())},this.getScissorTest=function(){return Re},this.setScissorTest=function(E){Ie.setScissorTest(Re=E)},this.setOpaqueSort=function(E){I=E},this.setTransparentSort=function(E){ee=E},this.getClearColor=function(E){return E.copy(ce.getClearColor())},this.setClearColor=function(){ce.setClearColor.apply(ce,arguments)},this.getClearAlpha=function(){return ce.getClearAlpha()},this.setClearAlpha=function(){ce.setClearAlpha.apply(ce,arguments)},this.clear=function(E=!0,U=!0,k=!0){let z=0;if(E){let O=!1;if(R!==null){const ne=R.texture.format;O=ne===G_||ne===V_||ne===H_}if(O){const ne=R.texture.type,ye=ne===dr||ne===Qo||ne===Zl||ne===Jo||ne===z_||ne===B_,Se=ce.getClearColor(),Te=ce.getClearAlpha(),Ne=Se.r,Fe=Se.g,Pe=Se.b;ye?(m[0]=Ne,m[1]=Fe,m[2]=Pe,m[3]=Te,N.clearBufferuiv(N.COLOR,0,m)):(_[0]=Ne,_[1]=Fe,_[2]=Pe,_[3]=Te,N.clearBufferiv(N.COLOR,0,_))}else z|=N.COLOR_BUFFER_BIT}U&&(z|=N.DEPTH_BUFFER_BIT),k&&(z|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",W,!1),n.removeEventListener("webglcontextrestored",V,!1),n.removeEventListener("webglcontextcreationerror",Y,!1),Le.dispose(),me.dispose(),Je.dispose(),vt.dispose(),C.dispose(),re.dispose(),Ve.dispose(),Ge.dispose(),oe.dispose(),y.dispose(),y.removeEventListener("sessionstart",Rt),y.removeEventListener("sessionend",St),an.stop()};function W(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function V(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const E=qe.autoReset,U=ke.enabled,k=ke.autoUpdate,z=ke.needsUpdate,O=ke.type;wt(),qe.autoReset=E,ke.enabled=U,ke.autoUpdate=k,ke.needsUpdate=z,ke.type=O}function Y(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ie(E){const U=E.target;U.removeEventListener("dispose",ie),be(U)}function be(E){He(E),Je.remove(E)}function He(E){const U=Je.get(E).programs;U!==void 0&&(U.forEach(function(k){oe.releaseProgram(k)}),E.isShaderMaterial&&oe.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,k,z,O,ne){U===null&&(U=$e);const ye=O.isMesh&&O.matrixWorld.determinant()<0,Se=Ye(E,U,k,z,O);Ie.setMaterial(z,ye);let Te=k.index,Ne=1;if(z.wireframe===!0){if(Te=X.getWireframeAttribute(k),Te===void 0)return;Ne=2}const Fe=k.drawRange,Pe=k.attributes.position;let lt=Fe.start*Ne,mt=(Fe.start+Fe.count)*Ne;ne!==null&&(lt=Math.max(lt,ne.start*Ne),mt=Math.min(mt,(ne.start+ne.count)*Ne)),Te!==null?(lt=Math.max(lt,0),mt=Math.min(mt,Te.count)):Pe!=null&&(lt=Math.max(lt,0),mt=Math.min(mt,Pe.count));const gt=mt-lt;if(gt<0||gt===1/0)return;Ve.setup(O,z,Se,k,Te);let Oe,ze=tt;if(Te!==null&&(Oe=T.get(Te),ze=De,ze.setIndex(Oe)),O.isMesh)z.wireframe===!0?(Ie.setLineWidth(z.wireframeLinewidth*rt()),ze.setMode(N.LINES)):ze.setMode(N.TRIANGLES);else if(O.isLine){let Me=z.linewidth;Me===void 0&&(Me=1),Ie.setLineWidth(Me*rt()),O.isLineSegments?ze.setMode(N.LINES):O.isLineLoop?ze.setMode(N.LINE_LOOP):ze.setMode(N.LINE_STRIP)}else O.isPoints?ze.setMode(N.POINTS):O.isSprite&&ze.setMode(N.TRIANGLES);if(O.isBatchedMesh)O._multiDrawInstances!==null?ze.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances):ze.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else if(O.isInstancedMesh)ze.renderInstances(lt,gt,O.count);else if(k.isInstancedBufferGeometry){const Me=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Qe=Math.min(k.instanceCount,Me);ze.renderInstances(lt,gt,Qe)}else ze.render(lt,gt)};function yt(E,U,k){E.transparent===!0&&E.side===si&&E.forceSinglePass===!1?(E.side=xn,E.needsUpdate=!0,Ae(E,U,k),E.side=fr,E.needsUpdate=!0,Ae(E,U,k),E.side=si):Ae(E,U,k)}this.compile=function(E,U,k=null){k===null&&(k=E),p=me.get(k),p.init(U),g.push(p),k.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),E!==k&&E.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();const z=new Set;return E.traverse(function(O){const ne=O.material;if(ne)if(Array.isArray(ne))for(let ye=0;ye<ne.length;ye++){const Se=ne[ye];yt(Se,k,O),z.add(Se)}else yt(ne,k,O),z.add(ne)}),g.pop(),p=null,z},this.compileAsync=function(E,U,k=null){const z=this.compile(E,U,k);return new Promise(O=>{function ne(){if(z.forEach(function(ye){Je.get(ye).currentProgram.isReady()&&z.delete(ye)}),z.size===0){O(E);return}setTimeout(ne,10)}Xe.get("KHR_parallel_shader_compile")!==null?ne():setTimeout(ne,10)})};let Dt=null;function ut(E){Dt&&Dt(E)}function Rt(){an.stop()}function St(){an.start()}const an=new i0;an.setAnimationLoop(ut),typeof self<"u"&&an.setContext(self),this.setAnimationLoop=function(E){Dt=E,y.setAnimationLoop(E),E===null?an.stop():an.start()},y.addEventListener("sessionstart",Rt),y.addEventListener("sessionend",St),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),y.enabled===!0&&y.isPresenting===!0&&(y.cameraAutoUpdate===!0&&y.updateCamera(U),U=y.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,U,R),p=me.get(E,g.length),p.init(U),g.push(p),pe.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Ze.setFromProjectionMatrix(pe),se=this.localClippingEnabled,$=fe.init(this.clippingPlanes,se),x=Le.get(E,d.length),x.init(),d.push(x),y.enabled===!0&&y.isPresenting===!0){const ne=v.xr.getDepthSensingMesh();ne!==null&&D(ne,U,-1/0,v.sortObjects)}D(E,U,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(I,ee),We=y.enabled===!1||y.isPresenting===!1||y.hasDepthSensing()===!1,We&&ce.addToRenderList(x,E),this.info.render.frame++,$===!0&&fe.beginShadows();const k=p.state.shadowsArray;ke.render(k,E,U),$===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=x.opaque,O=x.transmissive;if(p.setupLights(),U.isArrayCamera){const ne=U.cameras;if(O.length>0)for(let ye=0,Se=ne.length;ye<Se;ye++){const Te=ne[ye];G(z,O,E,Te)}We&&ce.render(E);for(let ye=0,Se=ne.length;ye<Se;ye++){const Te=ne[ye];F(x,E,Te,Te.viewport)}}else O.length>0&&G(z,O,E,U),We&&ce.render(E),F(x,E,U);R!==null&&(je.updateMultisampleRenderTarget(R),je.updateRenderTargetMipmap(R)),E.isScene===!0&&E.onAfterRender(v,E,U),Ve.resetDefaultState(),L=-1,A=null,g.pop(),g.length>0?(p=g[g.length-1],$===!0&&fe.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,d.pop(),d.length>0?x=d[d.length-1]:x=null};function D(E,U,k,z){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)k=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Ze.intersectsSprite(E)){z&&he.setFromMatrixPosition(E.matrixWorld).applyMatrix4(pe);const ye=re.update(E),Se=E.material;Se.visible&&x.push(E,ye,Se,k,he.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Ze.intersectsObject(E))){const ye=re.update(E),Se=E.material;if(z&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),he.copy(E.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),he.copy(ye.boundingSphere.center)),he.applyMatrix4(E.matrixWorld).applyMatrix4(pe)),Array.isArray(Se)){const Te=ye.groups;for(let Ne=0,Fe=Te.length;Ne<Fe;Ne++){const Pe=Te[Ne],lt=Se[Pe.materialIndex];lt&&lt.visible&&x.push(E,ye,lt,k,he.z,Pe)}}else Se.visible&&x.push(E,ye,Se,k,he.z,null)}}const ne=E.children;for(let ye=0,Se=ne.length;ye<Se;ye++)D(ne[ye],U,k,z)}function F(E,U,k,z){const O=E.opaque,ne=E.transmissive,ye=E.transparent;p.setupLightsView(k),$===!0&&fe.setGlobalState(v.clippingPlanes,k),z&&Ie.viewport(M.copy(z)),O.length>0&&Q(O,U,k),ne.length>0&&Q(ne,U,k),ye.length>0&&Q(ye,U,k),Ie.buffers.depth.setTest(!0),Ie.buffers.depth.setMask(!0),Ie.buffers.color.setMask(!0),Ie.setPolygonOffset(!1)}function G(E,U,k,z){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[z.id]===void 0&&(p.state.transmissionRenderTarget[z.id]=new jr(1,1,{generateMipmaps:!0,type:Xe.has("EXT_color_buffer_half_float")||Xe.has("EXT_color_buffer_float")?Tu:dr,minFilter:Or,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ht.workingColorSpace}));const ne=p.state.transmissionRenderTarget[z.id],ye=z.viewport||M;ne.setSize(ye.z,ye.w);const Se=v.getRenderTarget();v.setRenderTarget(ne),v.getClearColor(B),q=v.getClearAlpha(),q<1&&v.setClearColor(16777215,.5),We?ce.render(k):v.clear();const Te=v.toneMapping;v.toneMapping=lr;const Ne=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),p.setupLightsView(z),$===!0&&fe.setGlobalState(v.clippingPlanes,z),Q(E,k,z),je.updateMultisampleRenderTarget(ne),je.updateRenderTargetMipmap(ne),Xe.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let Pe=0,lt=U.length;Pe<lt;Pe++){const mt=U[Pe],gt=mt.object,Oe=mt.geometry,ze=mt.material,Me=mt.group;if(ze.side===si&&gt.layers.test(z.layers)){const Qe=ze.side;ze.side=xn,ze.needsUpdate=!0,xe(gt,k,z,Oe,ze,Me),ze.side=Qe,ze.needsUpdate=!0,Fe=!0}}Fe===!0&&(je.updateMultisampleRenderTarget(ne),je.updateRenderTargetMipmap(ne))}v.setRenderTarget(Se),v.setClearColor(B,q),Ne!==void 0&&(z.viewport=Ne),v.toneMapping=Te}function Q(E,U,k){const z=U.isScene===!0?U.overrideMaterial:null;for(let O=0,ne=E.length;O<ne;O++){const ye=E[O],Se=ye.object,Te=ye.geometry,Ne=z===null?ye.material:z,Fe=ye.group;Se.layers.test(k.layers)&&xe(Se,U,k,Te,Ne,Fe)}}function xe(E,U,k,z,O,ne){E.onBeforeRender(v,U,k,z,O,ne),E.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),O.onBeforeRender(v,U,k,z,E,ne),O.transparent===!0&&O.side===si&&O.forceSinglePass===!1?(O.side=xn,O.needsUpdate=!0,v.renderBufferDirect(k,U,z,O,E,ne),O.side=fr,O.needsUpdate=!0,v.renderBufferDirect(k,U,z,O,E,ne),O.side=si):v.renderBufferDirect(k,U,z,O,E,ne),E.onAfterRender(v,U,k,z,O,ne)}function Ae(E,U,k){U.isScene!==!0&&(U=$e);const z=Je.get(E),O=p.state.lights,ne=p.state.shadowsArray,ye=O.state.version,Se=oe.getParameters(E,O.state,ne,U,k),Te=oe.getProgramCacheKey(Se);let Ne=z.programs;z.environment=E.isMeshStandardMaterial?U.environment:null,z.fog=U.fog,z.envMap=(E.isMeshStandardMaterial?C:vt).get(E.envMap||z.environment),z.envMapRotation=z.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,Ne===void 0&&(E.addEventListener("dispose",ie),Ne=new Map,z.programs=Ne);let Fe=Ne.get(Te);if(Fe!==void 0){if(z.currentProgram===Fe&&z.lightsStateVersion===ye)return ge(E,Se),Fe}else Se.uniforms=oe.getUniforms(E),E.onBuild(k,Se,v),E.onBeforeCompile(Se,v),Fe=oe.acquireProgram(Se,Te),Ne.set(Te,Fe),z.uniforms=Se.uniforms;const Pe=z.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Pe.clippingPlanes=fe.uniform),ge(E,Se),z.needsLights=Ke(E),z.lightsStateVersion=ye,z.needsLights&&(Pe.ambientLightColor.value=O.state.ambient,Pe.lightProbe.value=O.state.probe,Pe.directionalLights.value=O.state.directional,Pe.directionalLightShadows.value=O.state.directionalShadow,Pe.spotLights.value=O.state.spot,Pe.spotLightShadows.value=O.state.spotShadow,Pe.rectAreaLights.value=O.state.rectArea,Pe.ltc_1.value=O.state.rectAreaLTC1,Pe.ltc_2.value=O.state.rectAreaLTC2,Pe.pointLights.value=O.state.point,Pe.pointLightShadows.value=O.state.pointShadow,Pe.hemisphereLights.value=O.state.hemi,Pe.directionalShadowMap.value=O.state.directionalShadowMap,Pe.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Pe.spotShadowMap.value=O.state.spotShadowMap,Pe.spotLightMatrix.value=O.state.spotLightMatrix,Pe.spotLightMap.value=O.state.spotLightMap,Pe.pointShadowMap.value=O.state.pointShadowMap,Pe.pointShadowMatrix.value=O.state.pointShadowMatrix),z.currentProgram=Fe,z.uniformsList=null,Fe}function Ue(E){if(E.uniformsList===null){const U=E.currentProgram.getUniforms();E.uniformsList=Ml.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function ge(E,U){const k=Je.get(E);k.outputColorSpace=U.outputColorSpace,k.batching=U.batching,k.batchingColor=U.batchingColor,k.instancing=U.instancing,k.instancingColor=U.instancingColor,k.instancingMorph=U.instancingMorph,k.skinning=U.skinning,k.morphTargets=U.morphTargets,k.morphNormals=U.morphNormals,k.morphColors=U.morphColors,k.morphTargetsCount=U.morphTargetsCount,k.numClippingPlanes=U.numClippingPlanes,k.numIntersection=U.numClipIntersection,k.vertexAlphas=U.vertexAlphas,k.vertexTangents=U.vertexTangents,k.toneMapping=U.toneMapping}function Ye(E,U,k,z,O){U.isScene!==!0&&(U=$e),je.resetTextureUnits();const ne=U.fog,ye=z.isMeshStandardMaterial?U.environment:null,Se=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:vr,Te=(z.isMeshStandardMaterial?C:vt).get(z.envMap||ye),Ne=z.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Fe=!!k.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Pe=!!k.morphAttributes.position,lt=!!k.morphAttributes.normal,mt=!!k.morphAttributes.color;let gt=lr;z.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(gt=v.toneMapping);const Oe=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ze=Oe!==void 0?Oe.length:0,Me=Je.get(z),Qe=p.state.lights;if($===!0&&(se===!0||E!==A)){const Dn=E===A&&z.id===L;fe.setState(z,E,Dn)}let ot=!1;z.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==Qe.state.version||Me.outputColorSpace!==Se||O.isBatchedMesh&&Me.batching===!1||!O.isBatchedMesh&&Me.batching===!0||O.isBatchedMesh&&Me.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Me.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Me.instancing===!1||!O.isInstancedMesh&&Me.instancing===!0||O.isSkinnedMesh&&Me.skinning===!1||!O.isSkinnedMesh&&Me.skinning===!0||O.isInstancedMesh&&Me.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Me.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Me.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Me.instancingMorph===!1&&O.morphTexture!==null||Me.envMap!==Te||z.fog===!0&&Me.fog!==ne||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==fe.numPlanes||Me.numIntersection!==fe.numIntersection)||Me.vertexAlphas!==Ne||Me.vertexTangents!==Fe||Me.morphTargets!==Pe||Me.morphNormals!==lt||Me.morphColors!==mt||Me.toneMapping!==gt||Me.morphTargetsCount!==ze)&&(ot=!0):(ot=!0,Me.__version=z.version);let Ln=Me.currentProgram;ot===!0&&(Ln=Ae(z,U,O));let Zr=!1,_r=!1,Cu=!1;const Gt=Ln.getUniforms(),Ni=Me.uniforms;if(Ie.useProgram(Ln.program)&&(Zr=!0,_r=!0,Cu=!0),z.id!==L&&(L=z.id,_r=!0),Zr||A!==E){Gt.setValue(N,"projectionMatrix",E.projectionMatrix),Gt.setValue(N,"viewMatrix",E.matrixWorldInverse);const Dn=Gt.map.cameraPosition;Dn!==void 0&&Dn.setValue(N,he.setFromMatrixPosition(E.matrixWorld)),dt.logarithmicDepthBuffer&&Gt.setValue(N,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Gt.setValue(N,"isOrthographic",E.isOrthographicCamera===!0),A!==E&&(A=E,_r=!0,Cu=!0)}if(O.isSkinnedMesh){Gt.setOptional(N,O,"bindMatrix"),Gt.setOptional(N,O,"bindMatrixInverse");const Dn=O.skeleton;Dn&&(Dn.boneTexture===null&&Dn.computeBoneTexture(),Gt.setValue(N,"boneTexture",Dn.boneTexture,je))}O.isBatchedMesh&&(Gt.setOptional(N,O,"batchingTexture"),Gt.setValue(N,"batchingTexture",O._matricesTexture,je),Gt.setOptional(N,O,"batchingColorTexture"),O._colorsTexture!==null&&Gt.setValue(N,"batchingColorTexture",O._colorsTexture,je));const Pu=k.morphAttributes;if((Pu.position!==void 0||Pu.normal!==void 0||Pu.color!==void 0)&&we.update(O,k,Ln),(_r||Me.receiveShadow!==O.receiveShadow)&&(Me.receiveShadow=O.receiveShadow,Gt.setValue(N,"receiveShadow",O.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Ni.envMap.value=Te,Ni.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&U.environment!==null&&(Ni.envMapIntensity.value=U.environmentIntensity),_r&&(Gt.setValue(N,"toneMappingExposure",v.toneMappingExposure),Me.needsLights&&Ce(Ni,Cu),ne&&z.fog===!0&&ae.refreshFogUniforms(Ni,ne),ae.refreshMaterialUniforms(Ni,z,Z,K,p.state.transmissionRenderTarget[E.id]),Ml.upload(N,Ue(Me),Ni,je)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Ml.upload(N,Ue(Me),Ni,je),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Gt.setValue(N,"center",O.center),Gt.setValue(N,"modelViewMatrix",O.modelViewMatrix),Gt.setValue(N,"normalMatrix",O.normalMatrix),Gt.setValue(N,"modelMatrix",O.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Dn=z.uniformsGroups;for(let bu=0,f0=Dn.length;bu<f0;bu++){const Kd=Dn[bu];Ge.update(Kd,Ln),Ge.bind(Kd,Ln)}}return Ln}function Ce(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function Ke(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(E,U,k){Je.get(E.texture).__webglTexture=U,Je.get(E.depthTexture).__webglTexture=k;const z=Je.get(E);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=k===void 0,z.__autoAllocateDepthBuffer||Xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,U){const k=Je.get(E);k.__webglFramebuffer=U,k.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,k=0){R=E,b=U,S=k;let z=!0,O=null,ne=!1,ye=!1;if(E){const Te=Je.get(E);Te.__useDefaultFramebuffer!==void 0?(Ie.bindFramebuffer(N.FRAMEBUFFER,null),z=!1):Te.__webglFramebuffer===void 0?je.setupRenderTarget(E):Te.__hasExternalTextures&&je.rebindTextures(E,Je.get(E.texture).__webglTexture,Je.get(E.depthTexture).__webglTexture);const Ne=E.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(ye=!0);const Fe=Je.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Fe[U])?O=Fe[U][k]:O=Fe[U],ne=!0):E.samples>0&&je.useMultisampledRTT(E)===!1?O=Je.get(E).__webglMultisampledFramebuffer:Array.isArray(Fe)?O=Fe[k]:O=Fe,M.copy(E.viewport),P.copy(E.scissor),j=E.scissorTest}else M.copy(te).multiplyScalar(Z).floor(),P.copy(ue).multiplyScalar(Z).floor(),j=Re;if(Ie.bindFramebuffer(N.FRAMEBUFFER,O)&&z&&Ie.drawBuffers(E,O),Ie.viewport(M),Ie.scissor(P),Ie.setScissorTest(j),ne){const Te=Je.get(E.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+U,Te.__webglTexture,k)}else if(ye){const Te=Je.get(E.texture),Ne=U||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Te.__webglTexture,k||0,Ne)}L=-1},this.readRenderTargetPixels=function(E,U,k,z,O,ne,ye){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=Je.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ye!==void 0&&(Se=Se[ye]),Se){Ie.bindFramebuffer(N.FRAMEBUFFER,Se);try{const Te=E.texture,Ne=Te.format,Fe=Te.type;if(!dt.textureFormatReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!dt.textureTypeReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-z&&k>=0&&k<=E.height-O&&N.readPixels(U,k,z,O,ve.convert(Ne),ve.convert(Fe),ne)}finally{const Te=R!==null?Je.get(R).__webglFramebuffer:null;Ie.bindFramebuffer(N.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(E,U,k,z,O,ne,ye){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=Je.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ye!==void 0&&(Se=Se[ye]),Se){Ie.bindFramebuffer(N.FRAMEBUFFER,Se);try{const Te=E.texture,Ne=Te.format,Fe=Te.type;if(!dt.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!dt.textureTypeReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=E.width-z&&k>=0&&k<=E.height-O){const Pe=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Pe),N.bufferData(N.PIXEL_PACK_BUFFER,ne.byteLength,N.STREAM_READ),N.readPixels(U,k,z,O,ve.convert(Ne),ve.convert(Fe),0),N.flush();const lt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);await kE(N,lt,4);try{N.bindBuffer(N.PIXEL_PACK_BUFFER,Pe),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ne)}finally{N.deleteBuffer(Pe),N.deleteSync(lt)}return ne}}finally{const Te=R!==null?Je.get(R).__webglFramebuffer:null;Ie.bindFramebuffer(N.FRAMEBUFFER,Te)}}},this.copyFramebufferToTexture=function(E,U=null,k=0){E.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,E=arguments[1]);const z=Math.pow(2,-k),O=Math.floor(E.image.width*z),ne=Math.floor(E.image.height*z),ye=U!==null?U.x:0,Se=U!==null?U.y:0;je.setTexture2D(E,0),N.copyTexSubImage2D(N.TEXTURE_2D,k,0,0,ye,Se,O,ne),Ie.unbindTexture()},this.copyTextureToTexture=function(E,U,k=null,z=null,O=0){E.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,E=arguments[1],U=arguments[2],O=arguments[3]||0,k=null);let ne,ye,Se,Te,Ne,Fe;k!==null?(ne=k.max.x-k.min.x,ye=k.max.y-k.min.y,Se=k.min.x,Te=k.min.y):(ne=E.image.width,ye=E.image.height,Se=0,Te=0),z!==null?(Ne=z.x,Fe=z.y):(Ne=0,Fe=0);const Pe=ve.convert(U.format),lt=ve.convert(U.type);je.setTexture2D(U,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,U.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,U.unpackAlignment);const mt=N.getParameter(N.UNPACK_ROW_LENGTH),gt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Oe=N.getParameter(N.UNPACK_SKIP_PIXELS),ze=N.getParameter(N.UNPACK_SKIP_ROWS),Me=N.getParameter(N.UNPACK_SKIP_IMAGES),Qe=E.isCompressedTexture?E.mipmaps[O]:E.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,Qe.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Qe.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Se),N.pixelStorei(N.UNPACK_SKIP_ROWS,Te),E.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,O,Ne,Fe,ne,ye,Pe,lt,Qe.data):E.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,O,Ne,Fe,Qe.width,Qe.height,Pe,Qe.data):N.texSubImage2D(N.TEXTURE_2D,O,Ne,Fe,Pe,lt,Qe),N.pixelStorei(N.UNPACK_ROW_LENGTH,mt),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,gt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Oe),N.pixelStorei(N.UNPACK_SKIP_ROWS,ze),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Me),O===0&&U.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),Ie.unbindTexture()},this.copyTextureToTexture3D=function(E,U,k=null,z=null,O=0){E.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,z=arguments[1]||null,E=arguments[2],U=arguments[3],O=arguments[4]||0);let ne,ye,Se,Te,Ne,Fe,Pe,lt,mt;const gt=E.isCompressedTexture?E.mipmaps[O]:E.image;k!==null?(ne=k.max.x-k.min.x,ye=k.max.y-k.min.y,Se=k.max.z-k.min.z,Te=k.min.x,Ne=k.min.y,Fe=k.min.z):(ne=gt.width,ye=gt.height,Se=gt.depth,Te=0,Ne=0,Fe=0),z!==null?(Pe=z.x,lt=z.y,mt=z.z):(Pe=0,lt=0,mt=0);const Oe=ve.convert(U.format),ze=ve.convert(U.type);let Me;if(U.isData3DTexture)je.setTexture3D(U,0),Me=N.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)je.setTexture2DArray(U,0),Me=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,U.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,U.unpackAlignment);const Qe=N.getParameter(N.UNPACK_ROW_LENGTH),ot=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Ln=N.getParameter(N.UNPACK_SKIP_PIXELS),Zr=N.getParameter(N.UNPACK_SKIP_ROWS),_r=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,gt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,gt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Te),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ne),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Fe),E.isDataTexture||E.isData3DTexture?N.texSubImage3D(Me,O,Pe,lt,mt,ne,ye,Se,Oe,ze,gt.data):U.isCompressedArrayTexture?N.compressedTexSubImage3D(Me,O,Pe,lt,mt,ne,ye,Se,Oe,gt.data):N.texSubImage3D(Me,O,Pe,lt,mt,ne,ye,Se,Oe,ze,gt),N.pixelStorei(N.UNPACK_ROW_LENGTH,Qe),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ot),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ln),N.pixelStorei(N.UNPACK_SKIP_ROWS,Zr),N.pixelStorei(N.UNPACK_SKIP_IMAGES,_r),O===0&&U.generateMipmaps&&N.generateMipmap(Me),Ie.unbindTexture()},this.initRenderTarget=function(E){Je.get(E).__webglFramebuffer===void 0&&je.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?je.setTextureCube(E,0):E.isData3DTexture?je.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?je.setTexture2DArray(E,0):je.setTexture2D(E,0),Ie.unbindTexture()},this.resetState=function(){b=0,S=0,R=null,Ie.reset(),Ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Xd?"display-p3":"srgb",n.unpackColorSpace=ht.workingColorSpace===wu?"display-p3":"srgb"}}class YR extends Sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pi,this.environmentIntensity=1,this.environmentRotation=new Pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class c0 extends _s{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ft(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const iu=new H,ru=new H,qm=new kt,Ea=new Yd,al=new Au,Oc=new H,Km=new H;class $R extends Sn{constructor(e=new Ui,n=new c0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,o=n.count;r<o;r++)iu.fromBufferAttribute(n,r-1),ru.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=iu.distanceTo(ru);e.setAttribute("lineDistance",new ei(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,o=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),al.copy(i.boundingSphere),al.applyMatrix4(r),al.radius+=o,e.ray.intersectsSphere(al)===!1)return;qm.copy(r).invert(),Ea.copy(e.ray).applyMatrix4(qm);const s=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=s*s,u=this.isLineSegments?2:1,c=i.index,h=i.attributes.position;if(c!==null){const m=Math.max(0,a.start),_=Math.min(c.count,a.start+a.count);for(let x=m,p=_-1;x<p;x+=u){const d=c.getX(x),g=c.getX(x+1),v=sl(this,e,Ea,l,d,g);v&&n.push(v)}if(this.isLineLoop){const x=c.getX(_-1),p=c.getX(m),d=sl(this,e,Ea,l,x,p);d&&n.push(d)}}else{const m=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let x=m,p=_-1;x<p;x+=u){const d=sl(this,e,Ea,l,x,x+1);d&&n.push(d)}if(this.isLineLoop){const x=sl(this,e,Ea,l,_-1,m);x&&n.push(x)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=r.length;o<a;o++){const s=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=o}}}}}function sl(t,e,n,i,r,o){const a=t.geometry.attributes.position;if(iu.fromBufferAttribute(a,r),ru.fromBufferAttribute(a,o),n.distanceSqToSegment(iu,ru,Oc,Km)>i)return;Oc.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(Oc);if(!(l<e.near||l>e.far))return{distance:l,point:Km.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,object:t}}const Zm=new H,Qm=new H;class qR extends $R{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,o=n.count;r<o;r+=2)Zm.fromBufferAttribute(n,r),Qm.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Zm.distanceTo(Qm);e.setAttribute("lineDistance",new ei(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Jm{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(rn(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class KR extends qR{constructor(e=1){const n=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new Ui;r.setAttribute("position",new ei(n,3)),r.setAttribute("color",new ei(i,3));const o=new c0({vertexColors:!0,toneMapped:!1});super(r,o),this.type="AxesHelper"}setColors(e,n,i){const r=new ft,o=this.geometry.attributes.color.array;return r.set(e),r.toArray(o,0),r.toArray(o,3),r.set(n),r.toArray(o,6),r.toArray(o,9),r.set(i),r.toArray(o,12),r.toArray(o,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wd);const eg={type:"change"},kc={type:"start"},tg={type:"end"},ll=new Yd,ng=new Xi,ZR=Math.cos(70*FE.DEG2RAD);class QR extends Kr{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new H,this.cursor=new H,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:eo.ROTATE,MIDDLE:eo.DOLLY,RIGHT:eo.PAN},this.touches={ONE:to.ROTATE,TWO:to.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return s.phi},this.getAzimuthalAngle=function(){return s.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(y){y.addEventListener("keydown",fe),this._domElementKeyEvents=y},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",fe),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(eg),i.update(),o=r.NONE},this.update=function(){const y=new H,W=new Yr().setFromUnitVectors(e.up,new H(0,1,0)),V=W.clone().invert(),Y=new H,ie=new Yr,be=new H,He=2*Math.PI;return function(Dt=null){const ut=i.object.position;y.copy(ut).sub(i.target),y.applyQuaternion(W),s.setFromVector3(y),i.autoRotate&&o===r.NONE&&j(M(Dt)),i.enableDamping?(s.theta+=l.theta*i.dampingFactor,s.phi+=l.phi*i.dampingFactor):(s.theta+=l.theta,s.phi+=l.phi);let Rt=i.minAzimuthAngle,St=i.maxAzimuthAngle;isFinite(Rt)&&isFinite(St)&&(Rt<-Math.PI?Rt+=He:Rt>Math.PI&&(Rt-=He),St<-Math.PI?St+=He:St>Math.PI&&(St-=He),Rt<=St?s.theta=Math.max(Rt,Math.min(St,s.theta)):s.theta=s.theta>(Rt+St)/2?Math.max(Rt,s.theta):Math.min(St,s.theta)),s.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,s.phi)),s.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(c,i.dampingFactor):i.target.add(c),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor);let an=!1;if(i.zoomToCursor&&S||i.object.isOrthographicCamera)s.radius=te(s.radius);else{const D=s.radius;s.radius=te(s.radius*u),an=D!=s.radius}if(y.setFromSpherical(s),y.applyQuaternion(V),ut.copy(i.target).add(y),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,c.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),c.set(0,0,0)),i.zoomToCursor&&S){let D=null;if(i.object.isPerspectiveCamera){const F=y.length();D=te(F*u);const G=F-D;i.object.position.addScaledVector(w,G),i.object.updateMatrixWorld(),an=!!G}else if(i.object.isOrthographicCamera){const F=new H(b.x,b.y,0);F.unproject(i.object);const G=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/u)),i.object.updateProjectionMatrix(),an=G!==i.object.zoom;const Q=new H(b.x,b.y,0);Q.unproject(i.object),i.object.position.sub(Q).add(F),i.object.updateMatrixWorld(),D=y.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;D!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(D).add(i.object.position):(ll.origin.copy(i.object.position),ll.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(ll.direction))<ZR?e.lookAt(i.target):(ng.setFromNormalAndCoplanarPoint(i.object.up,i.target),ll.intersectPlane(ng,i.target))))}else if(i.object.isOrthographicCamera){const D=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/u)),D!==i.object.zoom&&(i.object.updateProjectionMatrix(),an=!0)}return u=1,S=!1,an||Y.distanceToSquared(i.object.position)>a||8*(1-ie.dot(i.object.quaternion))>a||be.distanceToSquared(i.target)>a?(i.dispatchEvent(eg),Y.copy(i.object.position),ie.copy(i.object.quaternion),be.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",we),i.domElement.removeEventListener("pointerdown",vt),i.domElement.removeEventListener("pointercancel",T),i.domElement.removeEventListener("wheel",oe),i.domElement.removeEventListener("pointermove",C),i.domElement.removeEventListener("pointerup",T),i.domElement.getRootNode().removeEventListener("keydown",Le,{capture:!0}),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",fe),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let o=r.NONE;const a=1e-6,s=new Jm,l=new Jm;let u=1;const c=new H,f=new et,h=new et,m=new et,_=new et,x=new et,p=new et,d=new et,g=new et,v=new et,w=new H,b=new et;let S=!1;const R=[],L={};let A=!1;function M(y){return y!==null?2*Math.PI/60*i.autoRotateSpeed*y:2*Math.PI/60/60*i.autoRotateSpeed}function P(y){const W=Math.abs(y*.01);return Math.pow(.95,i.zoomSpeed*W)}function j(y){l.theta-=y}function B(y){l.phi-=y}const q=function(){const y=new H;return function(V,Y){y.setFromMatrixColumn(Y,0),y.multiplyScalar(-V),c.add(y)}}(),J=function(){const y=new H;return function(V,Y){i.screenSpacePanning===!0?y.setFromMatrixColumn(Y,1):(y.setFromMatrixColumn(Y,0),y.crossVectors(i.object.up,y)),y.multiplyScalar(V),c.add(y)}}(),K=function(){const y=new H;return function(V,Y){const ie=i.domElement;if(i.object.isPerspectiveCamera){const be=i.object.position;y.copy(be).sub(i.target);let He=y.length();He*=Math.tan(i.object.fov/2*Math.PI/180),q(2*V*He/ie.clientHeight,i.object.matrix),J(2*Y*He/ie.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(q(V*(i.object.right-i.object.left)/i.object.zoom/ie.clientWidth,i.object.matrix),J(Y*(i.object.top-i.object.bottom)/i.object.zoom/ie.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function Z(y){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?u/=y:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function I(y){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?u*=y:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function ee(y,W){if(!i.zoomToCursor)return;S=!0;const V=i.domElement.getBoundingClientRect(),Y=y-V.left,ie=W-V.top,be=V.width,He=V.height;b.x=Y/be*2-1,b.y=-(ie/He)*2+1,w.set(b.x,b.y,1).unproject(i.object).sub(i.object.position).normalize()}function te(y){return Math.max(i.minDistance,Math.min(i.maxDistance,y))}function ue(y){f.set(y.clientX,y.clientY)}function Re(y){ee(y.clientX,y.clientX),d.set(y.clientX,y.clientY)}function Ze(y){_.set(y.clientX,y.clientY)}function $(y){h.set(y.clientX,y.clientY),m.subVectors(h,f).multiplyScalar(i.rotateSpeed);const W=i.domElement;j(2*Math.PI*m.x/W.clientHeight),B(2*Math.PI*m.y/W.clientHeight),f.copy(h),i.update()}function se(y){g.set(y.clientX,y.clientY),v.subVectors(g,d),v.y>0?Z(P(v.y)):v.y<0&&I(P(v.y)),d.copy(g),i.update()}function pe(y){x.set(y.clientX,y.clientY),p.subVectors(x,_).multiplyScalar(i.panSpeed),K(p.x,p.y),_.copy(x),i.update()}function he(y){ee(y.clientX,y.clientY),y.deltaY<0?I(P(y.deltaY)):y.deltaY>0&&Z(P(y.deltaY)),i.update()}function $e(y){let W=!1;switch(y.code){case i.keys.UP:y.ctrlKey||y.metaKey||y.shiftKey?B(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):K(0,i.keyPanSpeed),W=!0;break;case i.keys.BOTTOM:y.ctrlKey||y.metaKey||y.shiftKey?B(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):K(0,-i.keyPanSpeed),W=!0;break;case i.keys.LEFT:y.ctrlKey||y.metaKey||y.shiftKey?j(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):K(i.keyPanSpeed,0),W=!0;break;case i.keys.RIGHT:y.ctrlKey||y.metaKey||y.shiftKey?j(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):K(-i.keyPanSpeed,0),W=!0;break}W&&(y.preventDefault(),i.update())}function We(y){if(R.length===1)f.set(y.pageX,y.pageY);else{const W=Ge(y),V=.5*(y.pageX+W.x),Y=.5*(y.pageY+W.y);f.set(V,Y)}}function rt(y){if(R.length===1)_.set(y.pageX,y.pageY);else{const W=Ge(y),V=.5*(y.pageX+W.x),Y=.5*(y.pageY+W.y);_.set(V,Y)}}function N(y){const W=Ge(y),V=y.pageX-W.x,Y=y.pageY-W.y,ie=Math.sqrt(V*V+Y*Y);d.set(0,ie)}function Be(y){i.enableZoom&&N(y),i.enablePan&&rt(y)}function Xe(y){i.enableZoom&&N(y),i.enableRotate&&We(y)}function dt(y){if(R.length==1)h.set(y.pageX,y.pageY);else{const V=Ge(y),Y=.5*(y.pageX+V.x),ie=.5*(y.pageY+V.y);h.set(Y,ie)}m.subVectors(h,f).multiplyScalar(i.rotateSpeed);const W=i.domElement;j(2*Math.PI*m.x/W.clientHeight),B(2*Math.PI*m.y/W.clientHeight),f.copy(h)}function Ie(y){if(R.length===1)x.set(y.pageX,y.pageY);else{const W=Ge(y),V=.5*(y.pageX+W.x),Y=.5*(y.pageY+W.y);x.set(V,Y)}p.subVectors(x,_).multiplyScalar(i.panSpeed),K(p.x,p.y),_.copy(x)}function qe(y){const W=Ge(y),V=y.pageX-W.x,Y=y.pageY-W.y,ie=Math.sqrt(V*V+Y*Y);g.set(0,ie),v.set(0,Math.pow(g.y/d.y,i.zoomSpeed)),Z(v.y),d.copy(g);const be=(y.pageX+W.x)*.5,He=(y.pageY+W.y)*.5;ee(be,He)}function Je(y){i.enableZoom&&qe(y),i.enablePan&&Ie(y)}function je(y){i.enableZoom&&qe(y),i.enableRotate&&dt(y)}function vt(y){i.enabled!==!1&&(R.length===0&&(i.domElement.setPointerCapture(y.pointerId),i.domElement.addEventListener("pointermove",C),i.domElement.addEventListener("pointerup",T)),!ve(y)&&(tt(y),y.pointerType==="touch"?ke(y):X(y)))}function C(y){i.enabled!==!1&&(y.pointerType==="touch"?ce(y):re(y))}function T(y){switch(De(y),R.length){case 0:i.domElement.releasePointerCapture(y.pointerId),i.domElement.removeEventListener("pointermove",C),i.domElement.removeEventListener("pointerup",T),i.dispatchEvent(tg),o=r.NONE;break;case 1:const W=R[0],V=L[W];ke({pointerId:W,pageX:V.x,pageY:V.y});break}}function X(y){let W;switch(y.button){case 0:W=i.mouseButtons.LEFT;break;case 1:W=i.mouseButtons.MIDDLE;break;case 2:W=i.mouseButtons.RIGHT;break;default:W=-1}switch(W){case eo.DOLLY:if(i.enableZoom===!1)return;Re(y),o=r.DOLLY;break;case eo.ROTATE:if(y.ctrlKey||y.metaKey||y.shiftKey){if(i.enablePan===!1)return;Ze(y),o=r.PAN}else{if(i.enableRotate===!1)return;ue(y),o=r.ROTATE}break;case eo.PAN:if(y.ctrlKey||y.metaKey||y.shiftKey){if(i.enableRotate===!1)return;ue(y),o=r.ROTATE}else{if(i.enablePan===!1)return;Ze(y),o=r.PAN}break;default:o=r.NONE}o!==r.NONE&&i.dispatchEvent(kc)}function re(y){switch(o){case r.ROTATE:if(i.enableRotate===!1)return;$(y);break;case r.DOLLY:if(i.enableZoom===!1)return;se(y);break;case r.PAN:if(i.enablePan===!1)return;pe(y);break}}function oe(y){i.enabled===!1||i.enableZoom===!1||o!==r.NONE||(y.preventDefault(),i.dispatchEvent(kc),he(ae(y)),i.dispatchEvent(tg))}function ae(y){const W=y.deltaMode,V={clientX:y.clientX,clientY:y.clientY,deltaY:y.deltaY};switch(W){case 1:V.deltaY*=16;break;case 2:V.deltaY*=100;break}return y.ctrlKey&&!A&&(V.deltaY*=10),V}function Le(y){y.key==="Control"&&(A=!0,i.domElement.getRootNode().addEventListener("keyup",me,{passive:!0,capture:!0}))}function me(y){y.key==="Control"&&(A=!1,i.domElement.getRootNode().removeEventListener("keyup",me,{passive:!0,capture:!0}))}function fe(y){i.enabled===!1||i.enablePan===!1||$e(y)}function ke(y){switch(Ve(y),R.length){case 1:switch(i.touches.ONE){case to.ROTATE:if(i.enableRotate===!1)return;We(y),o=r.TOUCH_ROTATE;break;case to.PAN:if(i.enablePan===!1)return;rt(y),o=r.TOUCH_PAN;break;default:o=r.NONE}break;case 2:switch(i.touches.TWO){case to.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Be(y),o=r.TOUCH_DOLLY_PAN;break;case to.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Xe(y),o=r.TOUCH_DOLLY_ROTATE;break;default:o=r.NONE}break;default:o=r.NONE}o!==r.NONE&&i.dispatchEvent(kc)}function ce(y){switch(Ve(y),o){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;dt(y),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;Ie(y),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Je(y),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;je(y),i.update();break;default:o=r.NONE}}function we(y){i.enabled!==!1&&y.preventDefault()}function tt(y){R.push(y.pointerId)}function De(y){delete L[y.pointerId];for(let W=0;W<R.length;W++)if(R[W]==y.pointerId){R.splice(W,1);return}}function ve(y){for(let W=0;W<R.length;W++)if(R[W]==y.pointerId)return!0;return!1}function Ve(y){let W=L[y.pointerId];W===void 0&&(W=new et,L[y.pointerId]=W),W.set(y.pageX,y.pageY)}function Ge(y){const W=y.pointerId===R[0]?R[1]:R[0];return L[W]}i.domElement.addEventListener("contextmenu",we),i.domElement.addEventListener("pointerdown",vt),i.domElement.addEventListener("pointercancel",T),i.domElement.addEventListener("wheel",oe,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",Le,{passive:!0,capture:!0}),this.update()}}const JR=t=>{var n;const e=new jR({antialias:!0});return e.setSize(window.innerWidth-200,window.innerHeight),e.shadowMap.enabled=!0,e.shadowMap.type=I_,(n=document.getElementById(t))==null||n.appendChild(e.domElement),e},eC=()=>{const t=new Fn(45,(window.innerWidth-200)/window.innerHeight,.1,1e4);return t.position.set(-100,100,100),t.lookAt(0,0,0),t},tC=()=>{const t=new YR;return t.background=new ft(15790320),t},nC=t=>{let e=null,n=null,i=null,r=null;e=JR(t),n=eC(),i=tC();const o=new aa(10,10,10),a=new $d({color:"red"});new Zn(o,a).position.set(0,10,0),r=new QR(n,e.domElement);const l=new KR(500);i.add(l);const u=()=>{e==null||e.render(i,n),requestAnimationFrame(u)};return u(),{renderer:e,camera:n,scene:i,controls:r}},iC=`
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

    `,ig={vertexShader:`
    varying vec2 v_position;
    
    void main() {
        v_position = vec2(position.x, position.y);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }`,fragmentShader:`
    ${iC} 
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
    }`};function rC(t,e){const{radius:n=50,color:i="#fff",speed:r=1,opacity:o=1,angle:a=Math.PI,position:s={x:0,y:0,z:0},rotation:l={x:-Math.PI/2,y:0,z:0}}=t||{},u=50*2;e||(e=new xs(u,u,1,1));const c=new bi({uniforms:{u_radius:{value:n},u_speed:{value:r},u_opacity:{value:o},u_width:{value:a},u_color:{value:new ft(i)},time:{value:0}},transparent:!0,depthWrite:!1,side:si,vertexShader:ig.vertexShader,fragmentShader:ig.fragmentShader}),f=new Zn(e,c);f.rotation.set(l.x,l.y,l.z),f.position.copy(s);const h=()=>{c.uniforms.time.value+=.05,requestAnimationFrame(h)};return h(),f}function oC(){const t=[{id:"test1",name:"Example 1"},{id:"test2",name:"Example 2"},{id:"test3",name:"Example 3"}],[e,n]=gg.useState(0);return de.useEffect(()=>{const{scene:i}=nC(t[e].id);i.add(rC({color:"#69BDF2"}))},[]),$t.jsxs("div",{className:"container",children:[$t.jsx("div",{className:"qr-scanner",children:$t.jsxs("div",{className:"box",children:[$t.jsx("div",{className:"line"}),$t.jsx("div",{className:"angle"})]})}),$t.jsx("div",{className:"aside",children:$t.jsx("ul",{children:t.map((i,r)=>$t.jsx("li",{onClick:()=>n(r),children:i.name},i.id))})}),$t.jsx("div",{className:"main",children:$t.jsx("div",{id:t[e].id})})]})}const aC=iM([{path:"/",element:$t.jsx(pM,{}),children:[{path:"",element:$t.jsx(QS,{to:"/threejs",replace:!0})},{path:"threejs",element:$t.jsx(oC,{})},{path:"test",element:$t.jsx(mM,{})}]}]);zc.createRoot(document.getElementById("root")).render($t.jsx(dM,{router:aC}));
