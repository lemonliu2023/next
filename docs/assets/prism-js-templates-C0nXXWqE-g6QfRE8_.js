(function(a){var h=a.languages.javascript["template-string"],z=h.pattern.source,v=h.inside.interpolation,O=v.inside["interpolation-punctuation"],E=v.pattern.source;function y(e,r){if(a.languages[e])return{pattern:RegExp("((?:"+r+")\\s*)"+z),lookbehind:!0,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},"embedded-code":{pattern:/[\s\S]+/,alias:e}}}}a.languages.javascript["template-string"]=[y("css",/\b(?:styled(?:\([^)]*\))?(?:\s*\.\s*\w+(?:\([^)]*\))*)*|css(?:\s*\.\s*(?:global|resolve))?|createGlobalStyle|keyframes)/.source),y("html",/\bhtml|\.\s*(?:inner|outer)HTML\s*\+?=/.source),y("svg",/\bsvg/.source),y("markdown",/\b(?:markdown|md)/.source),y("graphql",/\b(?:gql|graphql(?:\s*\.\s*experimental)?)/.source),y("sql",/\bsql/.source),h].filter(Boolean);function S(e,r){return"___"+r.toUpperCase()+"_"+e+"___"}function _(e,r,t){var n={code:e,grammar:r,language:t};return a.hooks.run("before-tokenize",n),n.tokens=a.tokenize(n.code,n.grammar),a.hooks.run("after-tokenize",n),n.tokens}function C(e){var r={};r["interpolation-punctuation"]=O;var t=a.tokenize(e,r);if(t.length===3){var n=[1,1];n.push.apply(n,_(t[1],a.languages.javascript,"javascript")),t.splice.apply(t,n)}return new a.Token("interpolation",t,v.alias,e)}function L(e,r,t){var n=a.tokenize(e,{interpolation:{pattern:RegExp(E),lookbehind:!0}}),u=0,c={},l=n.map(function(i){if(typeof i=="string")return i;for(var s=i.content,o;e.indexOf(o=S(u++,t))!==-1;);return c[o]=s,o}).join(""),g=_(l,r,t),d=Object.keys(c);u=0;function p(i){for(var s=0;s<i.length;s++){if(u>=d.length)return;var o=i[s];if(typeof o=="string"||typeof o.content=="string"){var k=d[u],b=typeof o=="string"?o:o.content,j=b.indexOf(k);if(j!==-1){++u;var q=b.substring(0,j),T=C(c[k]),A=b.substring(j+k.length),f=[];if(q&&f.push(q),f.push(T),A){var w=[A];p(w),f.push.apply(f,w)}typeof o=="string"?(i.splice.apply(i,[s,1].concat(f)),s+=f.length-1):o.content=f}}else{var x=o.content;Array.isArray(x)?p(x):p([x])}}}return p(g),new a.Token(t,g,"language-"+t,e)}var R={javascript:!0,js:!0,typescript:!0,ts:!0,jsx:!0,tsx:!0};a.hooks.add("after-tokenize",function(e){if(!(e.language in R))return;function r(t){for(var n=0,u=t.length;n<u;n++){var c=t[n];if(typeof c!="string"){var l=c.content;if(!Array.isArray(l)){typeof l!="string"&&r([l]);continue}if(c.type==="template-string"){var g=l[1];if(l.length===3&&typeof g!="string"&&g.type==="embedded-code"){var d=m(g),p=g.alias,i=Array.isArray(p)?p[0]:p,s=a.languages[i];if(!s)continue;l[1]=L(d,s,i)}}else r(l)}}}r(e.tokens)});function m(e){return typeof e=="string"?e:Array.isArray(e)?e.map(m).join(""):m(e.content)}})(Prism);