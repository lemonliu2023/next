import{c as R,d as Q}from"./data-CQIc2BVB.js";import"./index-39aEQXc_.js";function V(y,O){for(var k=0;k<O.length;k++){const s=O[k];if(typeof s!="string"&&!Array.isArray(s)){for(const d in s)if(d!=="default"&&!(d in y)){const b=Object.getOwnPropertyDescriptor(s,d);b&&Object.defineProperty(y,d,b.get?b:{enumerable:!0,get:()=>s[d]})}}}return Object.freeze(Object.defineProperty(y,Symbol.toStringTag,{value:"Module"}))}var U={exports:{}};(function(y){var O=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{},k=function(s){var d=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,b=0,E={},o={manual:s.Prism&&s.Prism.manual,disableWorkerMessageHandler:s.Prism&&s.Prism.disableWorkerMessageHandler,util:{encode:function t(e){return e instanceof v?new v(e.type,t(e.content),e.alias):Array.isArray(e)?e.map(t):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(t){return Object.prototype.toString.call(t).slice(8,-1)},objId:function(t){return t.__id||Object.defineProperty(t,"__id",{value:++b}),t.__id},clone:function t(e,r){var n,a;switch(r=r||{},o.util.type(e)){case"Object":if(a=o.util.objId(e),r[a])return r[a];for(var l in n={},r[a]=n,e)e.hasOwnProperty(l)&&(n[l]=t(e[l],r));return n;case"Array":return a=o.util.objId(e),r[a]?r[a]:(n=[],r[a]=n,e.forEach(function(i,u){n[u]=t(i,r)}),n);default:return e}},getLanguage:function(t){for(;t;){var e=d.exec(t.className);if(e)return e[1].toLowerCase();t=t.parentElement}return"none"},setLanguage:function(t,e){t.className=t.className.replace(RegExp(d,"gi"),""),t.classList.add("language-"+e)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(n){var t=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(n.stack)||[])[1];if(t){var e=document.getElementsByTagName("script");for(var r in e)if(e[r].src==t)return e[r]}return null}},isActive:function(t,e,r){for(var n="no-"+e;t;){var a=t.classList;if(a.contains(e))return!0;if(a.contains(n))return!1;t=t.parentElement}return!!r}},languages:{plain:E,plaintext:E,text:E,txt:E,extend:function(t,e){var r=o.util.clone(o.languages[t]);for(var n in e)r[n]=e[n];return r},insertBefore:function(t,e,r,n){var a=(n=n||o.languages)[t],l={};for(var i in a)if(a.hasOwnProperty(i)){if(i==e)for(var u in r)r.hasOwnProperty(u)&&(l[u]=r[u]);r.hasOwnProperty(i)||(l[i]=a[i])}var g=n[t];return n[t]=l,o.languages.DFS(o.languages,function(c,P){P===g&&c!=t&&(this[c]=l)}),l},DFS:function t(e,r,n,a){a=a||{};var l=o.util.objId;for(var i in e)if(e.hasOwnProperty(i)){r.call(e,i,e[i],n||i);var u=e[i],g=o.util.type(u);g!=="Object"||a[l(u)]?g!=="Array"||a[l(u)]||(a[l(u)]=!0,t(u,r,i,a)):(a[l(u)]=!0,t(u,r,null,a))}}},plugins:{},highlightAll:function(t,e){o.highlightAllUnder(document,t,e)},highlightAllUnder:function(t,e,r){var n={callback:r,container:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};o.hooks.run("before-highlightall",n),n.elements=Array.prototype.slice.apply(n.container.querySelectorAll(n.selector)),o.hooks.run("before-all-elements-highlight",n);for(var a,l=0;a=n.elements[l++];)o.highlightElement(a,e===!0,n.callback)},highlightElement:function(t,e,r){var n=o.util.getLanguage(t),a=o.languages[n];o.util.setLanguage(t,n);var l=t.parentElement;l&&l.nodeName.toLowerCase()==="pre"&&o.util.setLanguage(l,n);var i={element:t,language:n,grammar:a,code:t.textContent};function u(c){i.highlightedCode=c,o.hooks.run("before-insert",i),i.element.innerHTML=i.highlightedCode,o.hooks.run("after-highlight",i),o.hooks.run("complete",i),r&&r.call(i.element)}if(o.hooks.run("before-sanity-check",i),(l=i.element.parentElement)&&l.nodeName.toLowerCase()==="pre"&&!l.hasAttribute("tabindex")&&l.setAttribute("tabindex","0"),!i.code)return o.hooks.run("complete",i),void(r&&r.call(i.element));if(o.hooks.run("before-highlight",i),i.grammar)if(e&&s.Worker){var g=new Worker(o.filename);g.onmessage=function(c){u(c.data)},g.postMessage(JSON.stringify({language:i.language,code:i.code,immediateClose:!0}))}else u(o.highlight(i.code,i.grammar,i.language));else u(o.util.encode(i.code))},highlight:function(t,e,r){var n={code:t,grammar:e,language:r};if(o.hooks.run("before-tokenize",n),!n.grammar)throw new Error('The language "'+n.language+'" has no grammar.');return n.tokens=o.tokenize(n.code,n.grammar),o.hooks.run("after-tokenize",n),v.stringify(o.util.encode(n.tokens),n.language)},tokenize:function(t,e){var r=e.rest;if(r){for(var n in r)e[n]=r[n];delete e.rest}var a=new $;return S(a,a.head,t),I(t,a,e,a.head,0),function(l){for(var i=[],u=l.head.next;u!==l.tail;)i.push(u.value),u=u.next;return i}(a)},hooks:{all:{},add:function(t,e){var r=o.hooks.all;r[t]=r[t]||[],r[t].push(e)},run:function(t,e){var r=o.hooks.all[t];if(r&&r.length)for(var n,a=0;n=r[a++];)n(e)}},Token:v};function v(t,e,r,n){this.type=t,this.content=e,this.alias=r,this.length=0|(n||"").length}function z(t,e,r,n){t.lastIndex=e;var a=t.exec(r);if(a&&n&&a[1]){var l=a[1].length;a.index+=l,a[0]=a[0].slice(l)}return a}function I(t,e,r,n,a,l){for(var i in r)if(r.hasOwnProperty(i)&&r[i]){var u=r[i];u=Array.isArray(u)?u:[u];for(var g=0;g<u.length;++g){if(l&&l.cause==i+","+g)return;var c=u[g],P=c.inside,q=!!c.lookbehind,B=!!c.greedy,Y=c.alias;if(B&&!c.pattern.global){var Z=c.pattern.toString().match(/[imsuy]*$/)[0];c.pattern=RegExp(c.pattern.source,Z+"g")}for(var H=c.pattern||c,f=n.next,h=a;f!==e.tail&&!(l&&h>=l.reach);h+=f.value.length,f=f.next){var x=f.value;if(e.length>t.length)return;if(!(x instanceof v)){var p,L=1;if(B){if(!(p=z(H,h,t,q))||p.index>=t.length)break;var _=p.index,K=p.index+p[0].length,m=h;for(m+=f.value.length;_>=m;)m+=(f=f.next).value.length;if(h=m-=f.value.length,f.value instanceof v)continue;for(var A=f;A!==e.tail&&(m<K||typeof A.value=="string");A=A.next)L++,m+=A.value.length;L--,x=t.slice(h,m),p.index-=h}else if(!(p=z(H,0,x,q)))continue;_=p.index;var j=p[0],F=x.slice(0,_),J=x.slice(_+j.length),C=h+x.length;l&&C>l.reach&&(l.reach=C);var M=f.prev;if(F&&(M=S(e,M,F),h+=F.length),G(e,M,L),f=S(e,M,new v(i,P?o.tokenize(j,P):j,Y,j)),J&&S(e,f,J),L>1){var N={cause:i+","+g,reach:C};I(t,e,r,f.prev,h,N),l&&N.reach>l.reach&&(l.reach=N.reach)}}}}}}function $(){var t={value:null,prev:null,next:null},e={value:null,prev:t,next:null};t.next=e,this.head=t,this.tail=e,this.length=0}function S(t,e,r){var n=e.next,a={value:r,prev:e,next:n};return e.next=a,n.prev=a,t.length++,a}function G(t,e,r){for(var n=e.next,a=0;a<r&&n!==t.tail;a++)n=n.next;e.next=n,n.prev=e,t.length-=a}if(s.Prism=o,v.stringify=function t(e,r){if(typeof e=="string")return e;if(Array.isArray(e)){var n="";return e.forEach(function(g){n+=t(g,r)}),n}var a={type:e.type,content:t(e.content,r),tag:"span",classes:["token",e.type],attributes:{},language:r},l=e.alias;l&&(Array.isArray(l)?Array.prototype.push.apply(a.classes,l):a.classes.push(l)),o.hooks.run("wrap",a);var i="";for(var u in a.attributes)i+=" "+u+'="'+(a.attributes[u]||"").replace(/"/g,"&quot;")+'"';return"<"+a.tag+' class="'+a.classes.join(" ")+'"'+i+">"+a.content+"</"+a.tag+">"},!s.document)return s.addEventListener&&(o.disableWorkerMessageHandler||s.addEventListener("message",function(t){var e=JSON.parse(t.data),r=e.language,n=e.code,a=e.immediateClose;s.postMessage(o.highlight(n,o.languages[r],r)),a&&s.close()},!1)),o;var w=o.util.currentScript();function W(){o.manual||o.highlightAll()}if(w&&(o.filename=w.src,w.hasAttribute("data-manual")&&(o.manual=!0)),!o.manual){var T=document.readyState;T==="loading"||T==="interactive"&&w&&w.defer?document.addEventListener("DOMContentLoaded",W):window.requestAnimationFrame?window.requestAnimationFrame(W):window.setTimeout(W,16)}return o}(O);y.exports&&(y.exports=k),typeof R<"u"&&(R.Prism=k)})(U);var D=U.exports;const X=Q(D),ne=V({__proto__:null,default:X},[D]);export{ne as p};
