import{c as rt,g as _t,s as mt,a as xt,b as kt,x as vt,v as bt,z as Et,j as Lt,u as wt,h as Y,t as At}from"./mermaid.core-CrY0-6Yn-BCmlA074.js";import"./data-BeaF1kZy.js";import{d as Mt}from"./ordinal-IY-0syaZ-B-bE9dDY.js";import{r as St}from"./Tableau10-GLA_9iAD-Cyu9clx1.js";import"./index-FW1nyG-2.js";import"./step-CFLd_UlD-CAA9ZoWn.js";import"./init-DxzjmxYy-KazIMvGC.js";function ot(n,i){let s;if(i===void 0)for(const a of n)a!=null&&(s<a||s===void 0&&a>=a)&&(s=a);else{let a=-1;for(let u of n)(u=i(u,++a,n))!=null&&(s<u||s===void 0&&u>=u)&&(s=u)}return s}function yt(n,i){let s;if(i===void 0)for(const a of n)a!=null&&(s>a||s===void 0&&a>=a)&&(s=a);else{let a=-1;for(let u of n)(u=i(u,++a,n))!=null&&(s>u||s===void 0&&u>=u)&&(s=u)}return s}function H(n,i){let s=0;if(i===void 0)for(let a of n)(a=+a)&&(s+=a);else{let a=-1;for(let u of n)(u=+i(u,++a,n))&&(s+=u)}return s}function It(n){return n.target.depth}function $t(n){return n.depth}function Pt(n,i){return i-1-n.height}function dt(n,i){return n.sourceLinks.length?n.depth:i-1}function Dt(n){return n.targetLinks.length?n.depth:n.sourceLinks.length?yt(n.sourceLinks,It)-1:0}function q(n){return function(){return n}}function lt(n,i){return G(n.source,i.source)||n.index-i.index}function at(n,i){return G(n.target,i.target)||n.index-i.index}function G(n,i){return n.y0-i.y0}function J(n){return n.value}function Nt(n){return n.index}function Tt(n){return n.nodes}function Ct(n){return n.links}function ct(n,i){const s=n.get(i);if(!s)throw new Error("missing: "+i);return s}function ut({nodes:n}){for(const i of n){let s=i.y0,a=s;for(const u of i.sourceLinks)u.y0=s+u.width/2,s+=u.width;for(const u of i.targetLinks)u.y1=a+u.width/2,a+=u.width}}function Ot(){let n=0,i=0,s=1,a=1,u=24,k=8,m,g=Nt,e=dt,l,y,p=Tt,c=Ct,x=6;function _(){const t={nodes:p.apply(null,arguments),links:c.apply(null,arguments)};return M(t),w(t),S(t),P(t),$(t),ut(t),t}_.update=function(t){return ut(t),t},_.nodeId=function(t){return arguments.length?(g=typeof t=="function"?t:q(t),_):g},_.nodeAlign=function(t){return arguments.length?(e=typeof t=="function"?t:q(t),_):e},_.nodeSort=function(t){return arguments.length?(l=t,_):l},_.nodeWidth=function(t){return arguments.length?(u=+t,_):u},_.nodePadding=function(t){return arguments.length?(k=m=+t,_):k},_.nodes=function(t){return arguments.length?(p=typeof t=="function"?t:q(t),_):p},_.links=function(t){return arguments.length?(c=typeof t=="function"?t:q(t),_):c},_.linkSort=function(t){return arguments.length?(y=t,_):y},_.size=function(t){return arguments.length?(n=i=0,s=+t[0],a=+t[1],_):[s-n,a-i]},_.extent=function(t){return arguments.length?(n=+t[0][0],s=+t[1][0],i=+t[0][1],a=+t[1][1],_):[[n,i],[s,a]]},_.iterations=function(t){return arguments.length?(x=+t,_):x};function M({nodes:t,links:o}){for(const[f,r]of t.entries())r.index=f,r.sourceLinks=[],r.targetLinks=[];const h=new Map(t.map((f,r)=>[g(f,r,t),f]));for(const[f,r]of o.entries()){r.index=f;let{source:d,target:b}=r;typeof d!="object"&&(d=r.source=ct(h,d)),typeof b!="object"&&(b=r.target=ct(h,b)),d.sourceLinks.push(r),b.targetLinks.push(r)}if(y!=null)for(const{sourceLinks:f,targetLinks:r}of t)f.sort(y),r.sort(y)}function w({nodes:t}){for(const o of t)o.value=o.fixedValue===void 0?Math.max(H(o.sourceLinks,J),H(o.targetLinks,J)):o.fixedValue}function S({nodes:t}){const o=t.length;let h=new Set(t),f=new Set,r=0;for(;h.size;){for(const d of h){d.depth=r;for(const{target:b}of d.sourceLinks)f.add(b)}if(++r>o)throw new Error("circular link");h=f,f=new Set}}function P({nodes:t}){const o=t.length;let h=new Set(t),f=new Set,r=0;for(;h.size;){for(const d of h){d.height=r;for(const{source:b}of d.targetLinks)f.add(b)}if(++r>o)throw new Error("circular link");h=f,f=new Set}}function D({nodes:t}){const o=ot(t,r=>r.depth)+1,h=(s-n-u)/(o-1),f=new Array(o);for(const r of t){const d=Math.max(0,Math.min(o-1,Math.floor(e.call(null,r,o))));r.layer=d,r.x0=n+d*h,r.x1=r.x0+u,f[d]?f[d].push(r):f[d]=[r]}if(l)for(const r of f)r.sort(l);return f}function v(t){const o=yt(t,h=>(a-i-(h.length-1)*m)/H(h,J));for(const h of t){let f=i;for(const r of h){r.y0=f,r.y1=f+r.value*o,f=r.y1+m;for(const d of r.sourceLinks)d.width=d.value*o}f=(a-f+m)/(h.length+1);for(let r=0;r<h.length;++r){const d=h[r];d.y0+=f*(r+1),d.y1+=f*(r+1)}L(h)}}function $(t){const o=D(t);m=Math.min(k,(a-i)/(ot(o,h=>h.length)-1)),v(o);for(let h=0;h<x;++h){const f=Math.pow(.99,h),r=Math.max(1-f,(h+1)/x);N(o,f,r),O(o,f,r)}}function O(t,o,h){for(let f=1,r=t.length;f<r;++f){const d=t[f];for(const b of d){let W=0,j=0;for(const{source:V,value:Z}of b.targetLinks){let X=Z*(b.layer-V.layer);W+=C(V,b)*X,j+=X}if(!(j>0))continue;let Q=(W/j-b.y0)*o;b.y0+=Q,b.y1+=Q,I(b)}l===void 0&&d.sort(G),T(d,h)}}function N(t,o,h){for(let f=t.length,r=f-2;r>=0;--r){const d=t[r];for(const b of d){let W=0,j=0;for(const{target:V,value:Z}of b.sourceLinks){let X=Z*(V.layer-b.layer);W+=A(b,V)*X,j+=X}if(!(j>0))continue;let Q=(W/j-b.y0)*o;b.y0+=Q,b.y1+=Q,I(b)}l===void 0&&d.sort(G),T(d,h)}}function T(t,o){const h=t.length>>1,f=t[h];E(t,f.y0-m,h-1,o),F(t,f.y1+m,h+1,o),E(t,a,t.length-1,o),F(t,i,0,o)}function F(t,o,h,f){for(;h<t.length;++h){const r=t[h],d=(o-r.y0)*f;d>1e-6&&(r.y0+=d,r.y1+=d),o=r.y1+m}}function E(t,o,h,f){for(;h>=0;--h){const r=t[h],d=(r.y1-o)*f;d>1e-6&&(r.y0-=d,r.y1-=d),o=r.y0-m}}function I({sourceLinks:t,targetLinks:o}){if(y===void 0){for(const{source:{sourceLinks:h}}of o)h.sort(at);for(const{target:{targetLinks:h}}of t)h.sort(lt)}}function L(t){if(y===void 0)for(const{sourceLinks:o,targetLinks:h}of t)o.sort(at),h.sort(lt)}function C(t,o){let h=t.y0-(t.sourceLinks.length-1)*m/2;for(const{target:f,width:r}of t.sourceLinks){if(f===o)break;h+=r+m}for(const{source:f,width:r}of o.targetLinks){if(f===t)break;h-=r}return h}function A(t,o){let h=o.y0-(o.targetLinks.length-1)*m/2;for(const{source:f,width:r}of o.targetLinks){if(f===t)break;h+=r+m}for(const{target:f,width:r}of t.sourceLinks){if(f===o)break;h-=r}return h}return _}var tt=Math.PI,nt=2*tt,z=1e-6,jt=nt-z;function et(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function pt(){return new et}et.prototype=pt.prototype={constructor:et,moveTo:function(n,i){this._+="M"+(this._x0=this._x1=+n)+","+(this._y0=this._y1=+i)},closePath:function(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(n,i){this._+="L"+(this._x1=+n)+","+(this._y1=+i)},quadraticCurveTo:function(n,i,s,a){this._+="Q"+ +n+","+ +i+","+(this._x1=+s)+","+(this._y1=+a)},bezierCurveTo:function(n,i,s,a,u,k){this._+="C"+ +n+","+ +i+","+ +s+","+ +a+","+(this._x1=+u)+","+(this._y1=+k)},arcTo:function(n,i,s,a,u){n=+n,i=+i,s=+s,a=+a,u=+u;var k=this._x1,m=this._y1,g=s-n,e=a-i,l=k-n,y=m-i,p=l*l+y*y;if(u<0)throw new Error("negative radius: "+u);if(this._x1===null)this._+="M"+(this._x1=n)+","+(this._y1=i);else if(p>z)if(!(Math.abs(y*g-e*l)>z)||!u)this._+="L"+(this._x1=n)+","+(this._y1=i);else{var c=s-k,x=a-m,_=g*g+e*e,M=c*c+x*x,w=Math.sqrt(_),S=Math.sqrt(p),P=u*Math.tan((tt-Math.acos((_+p-M)/(2*w*S)))/2),D=P/S,v=P/w;Math.abs(D-1)>z&&(this._+="L"+(n+D*l)+","+(i+D*y)),this._+="A"+u+","+u+",0,0,"+ +(y*c>l*x)+","+(this._x1=n+v*g)+","+(this._y1=i+v*e)}},arc:function(n,i,s,a,u,k){n=+n,i=+i,s=+s,k=!!k;var m=s*Math.cos(a),g=s*Math.sin(a),e=n+m,l=i+g,y=1^k,p=k?a-u:u-a;if(s<0)throw new Error("negative radius: "+s);this._x1===null?this._+="M"+e+","+l:(Math.abs(this._x1-e)>z||Math.abs(this._y1-l)>z)&&(this._+="L"+e+","+l),s&&(p<0&&(p=p%nt+nt),p>jt?this._+="A"+s+","+s+",0,1,"+y+","+(n-m)+","+(i-g)+"A"+s+","+s+",0,1,"+y+","+(this._x1=e)+","+(this._y1=l):p>z&&(this._+="A"+s+","+s+",0,"+ +(p>=tt)+","+y+","+(this._x1=n+s*Math.cos(u))+","+(this._y1=i+s*Math.sin(u))))},rect:function(n,i,s,a){this._+="M"+(this._x0=this._x1=+n)+","+(this._y0=this._y1=+i)+"h"+ +s+"v"+ +a+"h"+-s+"Z"},toString:function(){return this._}};function ht(n){return function(){return n}}function zt(n){return n[0]}function Ft(n){return n[1]}var Ut=Array.prototype.slice;function Wt(n){return n.source}function Qt(n){return n.target}function Vt(n){var i=Wt,s=Qt,a=zt,u=Ft,k=null;function m(){var g,e=Ut.call(arguments),l=i.apply(this,e),y=s.apply(this,e);if(k||(k=g=pt()),n(k,+a.apply(this,(e[0]=l,e)),+u.apply(this,e),+a.apply(this,(e[0]=y,e)),+u.apply(this,e)),g)return k=null,g+""||null}return m.source=function(g){return arguments.length?(i=g,m):i},m.target=function(g){return arguments.length?(s=g,m):s},m.x=function(g){return arguments.length?(a=typeof g=="function"?g:ht(+g),m):a},m.y=function(g){return arguments.length?(u=typeof g=="function"?g:ht(+g),m):u},m.context=function(g){return arguments.length?(k=g??null,m):k},m}function Xt(n,i,s,a,u){n.moveTo(i,s),n.bezierCurveTo(i=(i+a)/2,s,i,u,a,u)}function Yt(){return Vt(Xt)}function qt(n){return[n.source.x1,n.y0]}function Gt(n){return[n.target.x0,n.y1]}function Kt(){return Yt().source(qt).target(Gt)}var it=function(){var n=function(g,e,l,y){for(l=l||{},y=g.length;y--;l[g[y]]=e);return l},i=[1,9],s=[1,10],a=[1,5,10,12],u={trace:function(){},yy:{},symbols_:{error:2,start:3,SANKEY:4,NEWLINE:5,csv:6,opt_eof:7,record:8,csv_tail:9,EOF:10,"field[source]":11,COMMA:12,"field[target]":13,"field[value]":14,field:15,escaped:16,non_escaped:17,DQUOTE:18,ESCAPED_TEXT:19,NON_ESCAPED_TEXT:20,$accept:0,$end:1},terminals_:{2:"error",4:"SANKEY",5:"NEWLINE",10:"EOF",11:"field[source]",12:"COMMA",13:"field[target]",14:"field[value]",18:"DQUOTE",19:"ESCAPED_TEXT",20:"NON_ESCAPED_TEXT"},productions_:[0,[3,4],[6,2],[9,2],[9,0],[7,1],[7,0],[8,5],[15,1],[15,1],[16,3],[17,1]],performAction:function(g,e,l,y,p,c,x){var _=c.length-1;switch(p){case 7:const M=y.findOrCreateNode(c[_-4].trim().replaceAll('""','"')),w=y.findOrCreateNode(c[_-2].trim().replaceAll('""','"')),S=parseFloat(c[_].trim());y.addLink(M,w,S);break;case 8:case 9:case 11:this.$=c[_];break;case 10:this.$=c[_-1];break}},table:[{3:1,4:[1,2]},{1:[3]},{5:[1,3]},{6:4,8:5,15:6,16:7,17:8,18:i,20:s},{1:[2,6],7:11,10:[1,12]},n(s,[2,4],{9:13,5:[1,14]}),{12:[1,15]},n(a,[2,8]),n(a,[2,9]),{19:[1,16]},n(a,[2,11]),{1:[2,1]},{1:[2,5]},n(s,[2,2]),{6:17,8:5,15:6,16:7,17:8,18:i,20:s},{15:18,16:7,17:8,18:i,20:s},{18:[1,19]},n(s,[2,3]),{12:[1,20]},n(a,[2,10]),{15:21,16:7,17:8,18:i,20:s},n([1,5,10],[2,7])],defaultActions:{11:[2,1],12:[2,5]},parseError:function(g,e){if(e.recoverable)this.trace(g);else{var l=new Error(g);throw l.hash=e,l}},parse:function(g){var e=this,l=[0],y=[],p=[null],c=[],x=this.table,_="",M=0,w=0,S=2,P=1,D=c.slice.call(arguments,1),v=Object.create(this.lexer),$={yy:{}};for(var O in this.yy)Object.prototype.hasOwnProperty.call(this.yy,O)&&($.yy[O]=this.yy[O]);v.setInput(g,$.yy),$.yy.lexer=v,$.yy.parser=this,typeof v.yylloc>"u"&&(v.yylloc={});var N=v.yylloc;c.push(N);var T=v.options&&v.options.ranges;typeof $.yy.parseError=="function"?this.parseError=$.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function F(){var d;return d=y.pop()||v.lex()||P,typeof d!="number"&&(d instanceof Array&&(y=d,d=y.pop()),d=e.symbols_[d]||d),d}for(var E,I,L,C,A={},t,o,h,f;;){if(I=l[l.length-1],this.defaultActions[I]?L=this.defaultActions[I]:((E===null||typeof E>"u")&&(E=F()),L=x[I]&&x[I][E]),typeof L>"u"||!L.length||!L[0]){var r="";f=[];for(t in x[I])this.terminals_[t]&&t>S&&f.push("'"+this.terminals_[t]+"'");v.showPosition?r="Parse error on line "+(M+1)+`:
`+v.showPosition()+`
Expecting `+f.join(", ")+", got '"+(this.terminals_[E]||E)+"'":r="Parse error on line "+(M+1)+": Unexpected "+(E==P?"end of input":"'"+(this.terminals_[E]||E)+"'"),this.parseError(r,{text:v.match,token:this.terminals_[E]||E,line:v.yylineno,loc:N,expected:f})}if(L[0]instanceof Array&&L.length>1)throw new Error("Parse Error: multiple actions possible at state: "+I+", token: "+E);switch(L[0]){case 1:l.push(E),p.push(v.yytext),c.push(v.yylloc),l.push(L[1]),E=null,w=v.yyleng,_=v.yytext,M=v.yylineno,N=v.yylloc;break;case 2:if(o=this.productions_[L[1]][1],A.$=p[p.length-o],A._$={first_line:c[c.length-(o||1)].first_line,last_line:c[c.length-1].last_line,first_column:c[c.length-(o||1)].first_column,last_column:c[c.length-1].last_column},T&&(A._$.range=[c[c.length-(o||1)].range[0],c[c.length-1].range[1]]),C=this.performAction.apply(A,[_,w,M,$.yy,L[1],p,c].concat(D)),typeof C<"u")return C;o&&(l=l.slice(0,-1*o*2),p=p.slice(0,-1*o),c=c.slice(0,-1*o)),l.push(this.productions_[L[1]][0]),p.push(A.$),c.push(A._$),h=x[l[l.length-2]][l[l.length-1]],l.push(h);break;case 3:return!0}}return!0}},k=function(){var g={EOF:1,parseError:function(e,l){if(this.yy.parser)this.yy.parser.parseError(e,l);else throw new Error(e)},setInput:function(e,l){return this.yy=l||this.yy||{},this._input=e,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var e=this._input[0];this.yytext+=e,this.yyleng++,this.offset++,this.match+=e,this.matched+=e;var l=e.match(/(?:\r\n?|\n).*/g);return l?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),e},unput:function(e){var l=e.length,y=e.split(/(?:\r\n?|\n)/g);this._input=e+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-l),this.offset-=l;var p=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),y.length-1&&(this.yylineno-=y.length-1);var c=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:y?(y.length===p.length?this.yylloc.first_column:0)+p[p.length-y.length].length-y[0].length:this.yylloc.first_column-l},this.options.ranges&&(this.yylloc.range=[c[0],c[0]+this.yyleng-l]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},less:function(e){this.unput(this.match.slice(e))},pastInput:function(){var e=this.matched.substr(0,this.matched.length-this.match.length);return(e.length>20?"...":"")+e.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var e=this.match;return e.length<20&&(e+=this._input.substr(0,20-e.length)),(e.substr(0,20)+(e.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var e=this.pastInput(),l=new Array(e.length+1).join("-");return e+this.upcomingInput()+`
`+l+"^"},test_match:function(e,l){var y,p,c;if(this.options.backtrack_lexer&&(c={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(c.yylloc.range=this.yylloc.range.slice(0))),p=e[0].match(/(?:\r\n?|\n).*/g),p&&(this.yylineno+=p.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:p?p[p.length-1].length-p[p.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+e[0].length},this.yytext+=e[0],this.match+=e[0],this.matches=e,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(e[0].length),this.matched+=e[0],y=this.performAction.call(this,this.yy,this,l,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),y)return y;if(this._backtrack){for(var x in c)this[x]=c[x];return!1}return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var e,l,y,p;this._more||(this.yytext="",this.match="");for(var c=this._currentRules(),x=0;x<c.length;x++)if(y=this._input.match(this.rules[c[x]]),y&&(!l||y[0].length>l[0].length)){if(l=y,p=x,this.options.backtrack_lexer){if(e=this.test_match(y,c[x]),e!==!1)return e;if(this._backtrack){l=!1;continue}else return!1}else if(!this.options.flex)break}return l?(e=this.test_match(l,c[p]),e!==!1?e:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var e=this.next();return e||this.lex()},begin:function(e){this.conditionStack.push(e)},popState:function(){var e=this.conditionStack.length-1;return e>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(e){return e=this.conditionStack.length-1-Math.abs(e||0),e>=0?this.conditionStack[e]:"INITIAL"},pushState:function(e){this.begin(e)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(e,l,y,p){switch(y){case 0:return this.pushState("csv"),4;case 1:return 10;case 2:return 5;case 3:return 12;case 4:return this.pushState("escaped_text"),18;case 5:return 20;case 6:return this.popState("escaped_text"),18;case 7:return 19}},rules:[/^(?:sankey-beta\b)/i,/^(?:$)/i,/^(?:((\u000D\u000A)|(\u000A)))/i,/^(?:(\u002C))/i,/^(?:(\u0022))/i,/^(?:([\u0020-\u0021\u0023-\u002B\u002D-\u007E])*)/i,/^(?:(\u0022)(?!(\u0022)))/i,/^(?:(([\u0020-\u0021\u0023-\u002B\u002D-\u007E])|(\u002C)|(\u000D)|(\u000A)|(\u0022)(\u0022))*)/i],conditions:{csv:{rules:[1,2,3,4,5,6,7],inclusive:!1},escaped_text:{rules:[6,7],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,6,7],inclusive:!0}}};return g}();u.lexer=k;function m(){this.yy={}}return m.prototype=u,u.Parser=m,new m}();it.parser=it;const K=it;let R=[],B=[],U={};const Rt=()=>{R=[],B=[],U={},Et()};class Bt{constructor(i,s,a=0){this.source=i,this.target=s,this.value=a}}const Zt=(n,i,s)=>{R.push(new Bt(n,i,s))};class Ht{constructor(i){this.ID=i}}const Jt=n=>(n=Lt.sanitizeText(n,rt()),U[n]||(U[n]=new Ht(n),B.push(U[n])),U[n]),tn=()=>B,nn=()=>R,en=()=>({nodes:B.map(n=>({id:n.ID})),links:R.map(n=>({source:n.source.ID,target:n.target.ID,value:n.value}))}),sn={nodesMap:U,getConfig:()=>rt().sankey,getNodes:tn,getLinks:nn,getGraph:en,addLink:Zt,findOrCreateNode:Jt,getAccTitle:_t,setAccTitle:mt,getAccDescription:xt,setAccDescription:kt,getDiagramTitle:vt,setDiagramTitle:bt,clear:Rt},gt=class st{static next(i){return new st(i+ ++st.count)}constructor(i){this.id=i,this.href=`#${i}`}toString(){return"url("+this.href+")"}};gt.count=0;let ft=gt;const rn={left:$t,right:Pt,center:Dt,justify:dt},on=function(n,i,s,a){var u,k,m,g,e,l,y;const{securityLevel:p,sankey:c}=rt(),x=wt.sankey;let _;p==="sandbox"&&(_=Y("#i"+i));const M=p==="sandbox"?Y(_.nodes()[0].contentDocument.body):Y("body"),w=p==="sandbox"?M.select(`[id="${i}"]`):Y(`[id="${i}"]`),S=(u=c==null?void 0:c.width)!=null?u:x.width,P=(k=c==null?void 0:c.height)!=null?k:x.width,D=(m=c==null?void 0:c.useMaxWidth)!=null?m:x.useMaxWidth,v=(g=c==null?void 0:c.nodeAlignment)!=null?g:x.nodeAlignment,$=(e=c==null?void 0:c.prefix)!=null?e:x.prefix,O=(l=c==null?void 0:c.suffix)!=null?l:x.suffix,N=(y=c==null?void 0:c.showValues)!=null?y:x.showValues,T=a.db.getGraph(),F=rn[v];Ot().nodeId(t=>t.id).nodeWidth(10).nodePadding(10+(N?15:0)).nodeAlign(F).extent([[0,0],[S,P]])(T);const E=Mt(St);w.append("g").attr("class","nodes").selectAll(".node").data(T.nodes).join("g").attr("class","node").attr("id",t=>(t.uid=ft.next("node-")).id).attr("transform",function(t){return"translate("+t.x0+","+t.y0+")"}).attr("x",t=>t.x0).attr("y",t=>t.y0).append("rect").attr("height",t=>t.y1-t.y0).attr("width",t=>t.x1-t.x0).attr("fill",t=>E(t.id));const I=({id:t,value:o})=>N?`${t}
${$}${Math.round(o*100)/100}${O}`:t;w.append("g").attr("class","node-labels").attr("font-family","sans-serif").attr("font-size",14).selectAll("text").data(T.nodes).join("text").attr("x",t=>t.x0<S/2?t.x1+6:t.x0-6).attr("y",t=>(t.y1+t.y0)/2).attr("dy",`${N?"0":"0.35"}em`).attr("text-anchor",t=>t.x0<S/2?"start":"end").text(I);const L=w.append("g").attr("class","links").attr("fill","none").attr("stroke-opacity",.5).selectAll(".link").data(T.links).join("g").attr("class","link").style("mix-blend-mode","multiply"),C=(c==null?void 0:c.linkColor)||"gradient";if(C==="gradient"){const t=L.append("linearGradient").attr("id",o=>(o.uid=ft.next("linearGradient-")).id).attr("gradientUnits","userSpaceOnUse").attr("x1",o=>o.source.x1).attr("x2",o=>o.target.x0);t.append("stop").attr("offset","0%").attr("stop-color",o=>E(o.source.id)),t.append("stop").attr("offset","100%").attr("stop-color",o=>E(o.target.id))}let A;switch(C){case"gradient":A=t=>t.uid;break;case"source":A=t=>E(t.source.id);break;case"target":A=t=>E(t.target.id);break;default:A=C}L.append("path").attr("d",Kt()).attr("stroke",A).attr("stroke-width",t=>Math.max(1,t.width)),At(void 0,w,0,D)},ln={draw:on},an=n=>n.replaceAll(/^[^\S\n\r]+|[^\S\n\r]+$/g,"").replaceAll(/([\n\r])+/g,`
`).trim(),cn=K.parse.bind(K);K.parse=n=>cn(an(n));const _n={parser:K,db:sn,renderer:ln};export{_n as diagram};