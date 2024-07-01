import{at as G,c as rt,s as oe,g as ce,v as le,x as ue,b as de,a as he,z as fe,m as me,l as pt,h as ht,i as ye,j as ke,y as pe}from"./mermaid.core-CrY0-6Yn-DceeZ5Sp.js";import{F as Dt,a as Ct}from"./index-Bp3V49vZ.js";import{l as ge,b as be,a as xe,c as Te,h as zt,w as Pt,G as Bt,D as Ht,U as Nt,q as Vt,n as Gt,t as ve,P as _e,R as we,V as $e,z as De,x as Ce,u as Se}from"./time-CyJSwiK1-DJFuX6eT.js";import{Z as Me}from"./linear-B0FzhLxF-Ca-Da0UA.js";import"./step-CFLd_UlD-CAA9ZoWn.js";import"./init-DxzjmxYy-KazIMvGC.js";function Ee(t){return t}var mt=1,xt=2,Tt=3,ft=4,jt=1e-6;function Ae(t){return"translate("+t+",0)"}function Ye(t){return"translate(0,"+t+")"}function Le(t){return r=>+t(r)}function Ie(t,r){return r=Math.max(0,t.bandwidth()-r*2)/2,t.round()&&(r=Math.round(r)),s=>+t(s)+r}function Fe(){return!this.__axis}function Kt(t,r){var s=[],a=null,o=null,l=6,f=6,x=3,M=typeof window<"u"&&window.devicePixelRatio>1?0:.5,k=t===mt||t===ft?-1:1,E=t===ft||t===xt?"x":"y",S=t===mt||t===Tt?Ae:Ye;function v(T){var B=a??(r.ticks?r.ticks.apply(r,s):r.domain()),d=o??(r.tickFormat?r.tickFormat.apply(r,s):Ee),D=Math.max(l,0)+x,Y=r.range(),A=+Y[0]+M,O=+Y[Y.length-1]+M,W=(r.bandwidth?Ie:Le)(r.copy(),M),N=T.selection?T.selection():T,z=N.selectAll(".domain").data([null]),I=N.selectAll(".tick").data(B,r).order(),m=I.exit(),b=I.enter().append("g").attr("class","tick"),g=I.select("line"),h=I.select("text");z=z.merge(z.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),I=I.merge(b),g=g.merge(b.append("line").attr("stroke","currentColor").attr(E+"2",k*l)),h=h.merge(b.append("text").attr("fill","currentColor").attr(E,k*D).attr("dy",t===mt?"0em":t===Tt?"0.71em":"0.32em")),T!==N&&(z=z.transition(T),I=I.transition(T),g=g.transition(T),h=h.transition(T),m=m.transition(T).attr("opacity",jt).attr("transform",function(n){return isFinite(n=W(n))?S(n+M):this.getAttribute("transform")}),b.attr("opacity",jt).attr("transform",function(n){var u=this.parentNode.__axis;return S((u&&isFinite(u=u(n))?u:W(n))+M)})),m.remove(),z.attr("d",t===ft||t===xt?f?"M"+k*f+","+A+"H"+M+"V"+O+"H"+k*f:"M"+M+","+A+"V"+O:f?"M"+A+","+k*f+"V"+M+"H"+O+"V"+k*f:"M"+A+","+M+"H"+O),I.attr("opacity",1).attr("transform",function(n){return S(W(n)+M)}),g.attr(E+"2",k*l),h.attr(E,k*D).text(d),N.filter(Fe).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",t===xt?"start":t===ft?"end":"middle"),N.each(function(){this.__axis=W})}return v.scale=function(T){return arguments.length?(r=T,v):r},v.ticks=function(){return s=Array.from(arguments),v},v.tickArguments=function(T){return arguments.length?(s=T==null?[]:Array.from(T),v):s.slice()},v.tickValues=function(T){return arguments.length?(a=T==null?null:Array.from(T),v):a&&a.slice()},v.tickFormat=function(T){return arguments.length?(o=T,v):o},v.tickSize=function(T){return arguments.length?(l=f=+T,v):l},v.tickSizeInner=function(T){return arguments.length?(l=+T,v):l},v.tickSizeOuter=function(T){return arguments.length?(f=+T,v):f},v.tickPadding=function(T){return arguments.length?(x=+T,v):x},v.offset=function(T){return arguments.length?(M=+T,v):M},v}function Oe(t){return Kt(mt,t)}function We(t){return Kt(Tt,t)}var Ut={exports:{}};(function(t,r){(function(s,a){t.exports=a()})(Dt,function(){var s="day";return function(a,o,l){var f=function(k){return k.add(4-k.isoWeekday(),s)},x=o.prototype;x.isoWeekYear=function(){return f(this).year()},x.isoWeek=function(k){if(!this.$utils().u(k))return this.add(7*(k-this.isoWeek()),s);var E,S,v,T,B=f(this),d=(E=this.isoWeekYear(),S=this.$u,v=(S?l.utc:l)().year(E).startOf("year"),T=4-v.isoWeekday(),v.isoWeekday()>4&&(T+=7),v.add(T,s));return B.diff(d,"week")+1},x.isoWeekday=function(k){return this.$utils().u(k)?this.day()||7:this.day(this.day()%7?k:k-7)};var M=x.startOf;x.startOf=function(k,E){var S=this.$utils(),v=!!S.u(E)||E;return S.p(k)==="isoweek"?v?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):M.bind(this)(k,E)}}})})(Ut);var ze=Ut.exports;const Pe=Ct(ze);var qt={exports:{}};(function(t,r){(function(s,a){t.exports=a()})(Dt,function(){var s={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},a=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,o=/\d\d/,l=/\d\d?/,f=/\d*[^-_:/,()\s\d]+/,x={},M=function(d){return(d=+d)+(d>68?1900:2e3)},k=function(d){return function(D){this[d]=+D}},E=[/[+-]\d\d:?(\d\d)?|Z/,function(d){(this.zone||(this.zone={})).offset=function(D){if(!D||D==="Z")return 0;var Y=D.match(/([+-]|\d\d)/g),A=60*Y[1]+(+Y[2]||0);return A===0?0:Y[0]==="+"?-A:A}(d)}],S=function(d){var D=x[d];return D&&(D.indexOf?D:D.s.concat(D.f))},v=function(d,D){var Y,A=x.meridiem;if(A){for(var O=1;O<=24;O+=1)if(d.indexOf(A(O,0,D))>-1){Y=O>12;break}}else Y=d===(D?"pm":"PM");return Y},T={A:[f,function(d){this.afternoon=v(d,!1)}],a:[f,function(d){this.afternoon=v(d,!0)}],S:[/\d/,function(d){this.milliseconds=100*+d}],SS:[o,function(d){this.milliseconds=10*+d}],SSS:[/\d{3}/,function(d){this.milliseconds=+d}],s:[l,k("seconds")],ss:[l,k("seconds")],m:[l,k("minutes")],mm:[l,k("minutes")],H:[l,k("hours")],h:[l,k("hours")],HH:[l,k("hours")],hh:[l,k("hours")],D:[l,k("day")],DD:[o,k("day")],Do:[f,function(d){var D=x.ordinal,Y=d.match(/\d+/);if(this.day=Y[0],D)for(var A=1;A<=31;A+=1)D(A).replace(/\[|\]/g,"")===d&&(this.day=A)}],M:[l,k("month")],MM:[o,k("month")],MMM:[f,function(d){var D=S("months"),Y=(S("monthsShort")||D.map(function(A){return A.slice(0,3)})).indexOf(d)+1;if(Y<1)throw new Error;this.month=Y%12||Y}],MMMM:[f,function(d){var D=S("months").indexOf(d)+1;if(D<1)throw new Error;this.month=D%12||D}],Y:[/[+-]?\d+/,k("year")],YY:[o,function(d){this.year=M(d)}],YYYY:[/\d{4}/,k("year")],Z:E,ZZ:E};function B(d){var D,Y;D=d,Y=x&&x.formats;for(var A=(d=D.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(b,g,h){var n=h&&h.toUpperCase();return g||Y[h]||s[h]||Y[n].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(u,c,y){return c||y.slice(1)})})).match(a),O=A.length,W=0;W<O;W+=1){var N=A[W],z=T[N],I=z&&z[0],m=z&&z[1];A[W]=m?{regex:I,parser:m}:N.replace(/^\[|\]$/g,"")}return function(b){for(var g={},h=0,n=0;h<O;h+=1){var u=A[h];if(typeof u=="string")n+=u.length;else{var c=u.regex,y=u.parser,i=b.slice(n),C=c.exec(i)[0];y.call(g,C),b=b.replace(C,"")}}return function(e){var p=e.afternoon;if(p!==void 0){var $=e.hours;p?$<12&&(e.hours+=12):$===12&&(e.hours=0),delete e.afternoon}}(g),g}}return function(d,D,Y){Y.p.customParseFormat=!0,d&&d.parseTwoDigitYear&&(M=d.parseTwoDigitYear);var A=D.prototype,O=A.parse;A.parse=function(W){var N=W.date,z=W.utc,I=W.args;this.$u=z;var m=I[1];if(typeof m=="string"){var b=I[2]===!0,g=I[3]===!0,h=b||g,n=I[2];g&&(n=I[2]),x=this.$locale(),!b&&n&&(x=Y.Ls[n]),this.$d=function(i,C,e){try{if(["x","X"].indexOf(C)>-1)return new Date((C==="X"?1e3:1)*i);var p=B(C)(i),$=p.year,L=p.month,w=p.day,F=p.hours,_=p.minutes,Z=p.seconds,X=p.milliseconds,nt=p.zone,at=new Date,ot=w||($||L?1:at.getDate()),H=$||at.getFullYear(),j=0;$&&!L||(j=L>0?L-1:at.getMonth());var V=F||0,tt=_||0,Q=Z||0,J=X||0;return nt?new Date(Date.UTC(H,j,ot,V,tt,Q,J+60*nt.offset*1e3)):e?new Date(Date.UTC(H,j,ot,V,tt,Q,J)):new Date(H,j,ot,V,tt,Q,J)}catch{return new Date("")}}(N,m,z),this.init(),n&&n!==!0&&(this.$L=this.locale(n).$L),h&&N!=this.format(m)&&(this.$d=new Date("")),x={}}else if(m instanceof Array)for(var u=m.length,c=1;c<=u;c+=1){I[1]=m[c-1];var y=Y.apply(this,I);if(y.isValid()){this.$d=y.$d,this.$L=y.$L,this.init();break}c===u&&(this.$d=new Date(""))}else O.call(this,W)}}})})(qt);var Be=qt.exports;const He=Ct(Be);var Rt={exports:{}};(function(t,r){(function(s,a){t.exports=a()})(Dt,function(){return function(s,a){var o=a.prototype,l=o.format;o.format=function(f){var x=this,M=this.$locale();if(!this.isValid())return l.bind(this)(f);var k=this.$utils(),E=(f||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,function(S){switch(S){case"Q":return Math.ceil((x.$M+1)/3);case"Do":return M.ordinal(x.$D);case"gggg":return x.weekYear();case"GGGG":return x.isoWeekYear();case"wo":return M.ordinal(x.week(),"W");case"w":case"ww":return k.s(x.week(),S==="w"?1:2,"0");case"W":case"WW":return k.s(x.isoWeek(),S==="W"?1:2,"0");case"k":case"kk":return k.s(String(x.$H===0?24:x.$H),S==="k"?1:2,"0");case"X":return Math.floor(x.$d.getTime()/1e3);case"x":return x.$d.getTime();case"z":return"["+x.offsetName()+"]";case"zzz":return"["+x.offsetName("long")+"]";default:return S}});return l.bind(this)(E)}}})})(Rt);var Ne=Rt.exports;const Ve=Ct(Ne);var vt=function(){var t=function(h,n,u,c){for(u=u||{},c=h.length;c--;u[h[c]]=n);return u},r=[6,8,10,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,30,32,33,35,37],s=[1,25],a=[1,26],o=[1,27],l=[1,28],f=[1,29],x=[1,30],M=[1,31],k=[1,9],E=[1,10],S=[1,11],v=[1,12],T=[1,13],B=[1,14],d=[1,15],D=[1,16],Y=[1,18],A=[1,19],O=[1,20],W=[1,21],N=[1,22],z=[1,24],I=[1,32],m={trace:function(){},yy:{},symbols_:{error:2,start:3,gantt:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NL:10,weekday:11,weekday_monday:12,weekday_tuesday:13,weekday_wednesday:14,weekday_thursday:15,weekday_friday:16,weekday_saturday:17,weekday_sunday:18,dateFormat:19,inclusiveEndDates:20,topAxis:21,axisFormat:22,tickInterval:23,excludes:24,includes:25,todayMarker:26,title:27,acc_title:28,acc_title_value:29,acc_descr:30,acc_descr_value:31,acc_descr_multiline_value:32,section:33,clickStatement:34,taskTxt:35,taskData:36,click:37,callbackname:38,callbackargs:39,href:40,clickStatementDebug:41,$accept:0,$end:1},terminals_:{2:"error",4:"gantt",6:"EOF",8:"SPACE",10:"NL",12:"weekday_monday",13:"weekday_tuesday",14:"weekday_wednesday",15:"weekday_thursday",16:"weekday_friday",17:"weekday_saturday",18:"weekday_sunday",19:"dateFormat",20:"inclusiveEndDates",21:"topAxis",22:"axisFormat",23:"tickInterval",24:"excludes",25:"includes",26:"todayMarker",27:"title",28:"acc_title",29:"acc_title_value",30:"acc_descr",31:"acc_descr_value",32:"acc_descr_multiline_value",33:"section",35:"taskTxt",36:"taskData",37:"click",38:"callbackname",39:"callbackargs",40:"href"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,2],[9,2],[9,1],[9,1],[9,1],[9,2],[34,2],[34,3],[34,3],[34,4],[34,3],[34,4],[34,2],[41,2],[41,3],[41,3],[41,4],[41,3],[41,4],[41,2]],performAction:function(h,n,u,c,y,i,C){var e=i.length-1;switch(y){case 1:return i[e-1];case 2:this.$=[];break;case 3:i[e-1].push(i[e]),this.$=i[e-1];break;case 4:case 5:this.$=i[e];break;case 6:case 7:this.$=[];break;case 8:c.setWeekday("monday");break;case 9:c.setWeekday("tuesday");break;case 10:c.setWeekday("wednesday");break;case 11:c.setWeekday("thursday");break;case 12:c.setWeekday("friday");break;case 13:c.setWeekday("saturday");break;case 14:c.setWeekday("sunday");break;case 15:c.setDateFormat(i[e].substr(11)),this.$=i[e].substr(11);break;case 16:c.enableInclusiveEndDates(),this.$=i[e].substr(18);break;case 17:c.TopAxis(),this.$=i[e].substr(8);break;case 18:c.setAxisFormat(i[e].substr(11)),this.$=i[e].substr(11);break;case 19:c.setTickInterval(i[e].substr(13)),this.$=i[e].substr(13);break;case 20:c.setExcludes(i[e].substr(9)),this.$=i[e].substr(9);break;case 21:c.setIncludes(i[e].substr(9)),this.$=i[e].substr(9);break;case 22:c.setTodayMarker(i[e].substr(12)),this.$=i[e].substr(12);break;case 24:c.setDiagramTitle(i[e].substr(6)),this.$=i[e].substr(6);break;case 25:this.$=i[e].trim(),c.setAccTitle(this.$);break;case 26:case 27:this.$=i[e].trim(),c.setAccDescription(this.$);break;case 28:c.addSection(i[e].substr(8)),this.$=i[e].substr(8);break;case 30:c.addTask(i[e-1],i[e]),this.$="task";break;case 31:this.$=i[e-1],c.setClickEvent(i[e-1],i[e],null);break;case 32:this.$=i[e-2],c.setClickEvent(i[e-2],i[e-1],i[e]);break;case 33:this.$=i[e-2],c.setClickEvent(i[e-2],i[e-1],null),c.setLink(i[e-2],i[e]);break;case 34:this.$=i[e-3],c.setClickEvent(i[e-3],i[e-2],i[e-1]),c.setLink(i[e-3],i[e]);break;case 35:this.$=i[e-2],c.setClickEvent(i[e-2],i[e],null),c.setLink(i[e-2],i[e-1]);break;case 36:this.$=i[e-3],c.setClickEvent(i[e-3],i[e-1],i[e]),c.setLink(i[e-3],i[e-2]);break;case 37:this.$=i[e-1],c.setLink(i[e-1],i[e]);break;case 38:case 44:this.$=i[e-1]+" "+i[e];break;case 39:case 40:case 42:this.$=i[e-2]+" "+i[e-1]+" "+i[e];break;case 41:case 43:this.$=i[e-3]+" "+i[e-2]+" "+i[e-1]+" "+i[e];break}},table:[{3:1,4:[1,2]},{1:[3]},t(r,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:17,12:s,13:a,14:o,15:l,16:f,17:x,18:M,19:k,20:E,21:S,22:v,23:T,24:B,25:d,26:D,27:Y,28:A,30:O,32:W,33:N,34:23,35:z,37:I},t(r,[2,7],{1:[2,1]}),t(r,[2,3]),{9:33,11:17,12:s,13:a,14:o,15:l,16:f,17:x,18:M,19:k,20:E,21:S,22:v,23:T,24:B,25:d,26:D,27:Y,28:A,30:O,32:W,33:N,34:23,35:z,37:I},t(r,[2,5]),t(r,[2,6]),t(r,[2,15]),t(r,[2,16]),t(r,[2,17]),t(r,[2,18]),t(r,[2,19]),t(r,[2,20]),t(r,[2,21]),t(r,[2,22]),t(r,[2,23]),t(r,[2,24]),{29:[1,34]},{31:[1,35]},t(r,[2,27]),t(r,[2,28]),t(r,[2,29]),{36:[1,36]},t(r,[2,8]),t(r,[2,9]),t(r,[2,10]),t(r,[2,11]),t(r,[2,12]),t(r,[2,13]),t(r,[2,14]),{38:[1,37],40:[1,38]},t(r,[2,4]),t(r,[2,25]),t(r,[2,26]),t(r,[2,30]),t(r,[2,31],{39:[1,39],40:[1,40]}),t(r,[2,37],{38:[1,41]}),t(r,[2,32],{40:[1,42]}),t(r,[2,33]),t(r,[2,35],{39:[1,43]}),t(r,[2,34]),t(r,[2,36])],defaultActions:{},parseError:function(h,n){if(n.recoverable)this.trace(h);else{var u=new Error(h);throw u.hash=n,u}},parse:function(h){var n=this,u=[0],c=[],y=[null],i=[],C=this.table,e="",p=0,$=0,L=2,w=1,F=i.slice.call(arguments,1),_=Object.create(this.lexer),Z={yy:{}};for(var X in this.yy)Object.prototype.hasOwnProperty.call(this.yy,X)&&(Z.yy[X]=this.yy[X]);_.setInput(h,Z.yy),Z.yy.lexer=_,Z.yy.parser=this,typeof _.yylloc>"u"&&(_.yylloc={});var nt=_.yylloc;i.push(nt);var at=_.options&&_.options.ranges;typeof Z.yy.parseError=="function"?this.parseError=Z.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function ot(){var q;return q=c.pop()||_.lex()||w,typeof q!="number"&&(q instanceof Array&&(c=q,q=c.pop()),q=n.symbols_[q]||q),q}for(var H,j,V,tt,Q={},J,U,Wt,dt;;){if(j=u[u.length-1],this.defaultActions[j]?V=this.defaultActions[j]:((H===null||typeof H>"u")&&(H=ot()),V=C[j]&&C[j][H]),typeof V>"u"||!V.length||!V[0]){var bt="";dt=[];for(J in C[j])this.terminals_[J]&&J>L&&dt.push("'"+this.terminals_[J]+"'");_.showPosition?bt="Parse error on line "+(p+1)+`:
`+_.showPosition()+`
Expecting `+dt.join(", ")+", got '"+(this.terminals_[H]||H)+"'":bt="Parse error on line "+(p+1)+": Unexpected "+(H==w?"end of input":"'"+(this.terminals_[H]||H)+"'"),this.parseError(bt,{text:_.match,token:this.terminals_[H]||H,line:_.yylineno,loc:nt,expected:dt})}if(V[0]instanceof Array&&V.length>1)throw new Error("Parse Error: multiple actions possible at state: "+j+", token: "+H);switch(V[0]){case 1:u.push(H),y.push(_.yytext),i.push(_.yylloc),u.push(V[1]),H=null,$=_.yyleng,e=_.yytext,p=_.yylineno,nt=_.yylloc;break;case 2:if(U=this.productions_[V[1]][1],Q.$=y[y.length-U],Q._$={first_line:i[i.length-(U||1)].first_line,last_line:i[i.length-1].last_line,first_column:i[i.length-(U||1)].first_column,last_column:i[i.length-1].last_column},at&&(Q._$.range=[i[i.length-(U||1)].range[0],i[i.length-1].range[1]]),tt=this.performAction.apply(Q,[e,$,p,Z.yy,V[1],y,i].concat(F)),typeof tt<"u")return tt;U&&(u=u.slice(0,-1*U*2),y=y.slice(0,-1*U),i=i.slice(0,-1*U)),u.push(this.productions_[V[1]][0]),y.push(Q.$),i.push(Q._$),Wt=C[u[u.length-2]][u[u.length-1]],u.push(Wt);break;case 3:return!0}}return!0}},b=function(){var h={EOF:1,parseError:function(n,u){if(this.yy.parser)this.yy.parser.parseError(n,u);else throw new Error(n)},setInput:function(n,u){return this.yy=u||this.yy||{},this._input=n,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var n=this._input[0];this.yytext+=n,this.yyleng++,this.offset++,this.match+=n,this.matched+=n;var u=n.match(/(?:\r\n?|\n).*/g);return u?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),n},unput:function(n){var u=n.length,c=n.split(/(?:\r\n?|\n)/g);this._input=n+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-u),this.offset-=u;var y=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),c.length-1&&(this.yylineno-=c.length-1);var i=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:c?(c.length===y.length?this.yylloc.first_column:0)+y[y.length-c.length].length-c[0].length:this.yylloc.first_column-u},this.options.ranges&&(this.yylloc.range=[i[0],i[0]+this.yyleng-u]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},less:function(n){this.unput(this.match.slice(n))},pastInput:function(){var n=this.matched.substr(0,this.matched.length-this.match.length);return(n.length>20?"...":"")+n.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var n=this.match;return n.length<20&&(n+=this._input.substr(0,20-n.length)),(n.substr(0,20)+(n.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var n=this.pastInput(),u=new Array(n.length+1).join("-");return n+this.upcomingInput()+`
`+u+"^"},test_match:function(n,u){var c,y,i;if(this.options.backtrack_lexer&&(i={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(i.yylloc.range=this.yylloc.range.slice(0))),y=n[0].match(/(?:\r\n?|\n).*/g),y&&(this.yylineno+=y.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:y?y[y.length-1].length-y[y.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+n[0].length},this.yytext+=n[0],this.match+=n[0],this.matches=n,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(n[0].length),this.matched+=n[0],c=this.performAction.call(this,this.yy,this,u,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),c)return c;if(this._backtrack){for(var C in i)this[C]=i[C];return!1}return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var n,u,c,y;this._more||(this.yytext="",this.match="");for(var i=this._currentRules(),C=0;C<i.length;C++)if(c=this._input.match(this.rules[i[C]]),c&&(!u||c[0].length>u[0].length)){if(u=c,y=C,this.options.backtrack_lexer){if(n=this.test_match(c,i[C]),n!==!1)return n;if(this._backtrack){u=!1;continue}else return!1}else if(!this.options.flex)break}return u?(n=this.test_match(u,i[y]),n!==!1?n:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var n=this.next();return n||this.lex()},begin:function(n){this.conditionStack.push(n)},popState:function(){var n=this.conditionStack.length-1;return n>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(n){return n=this.conditionStack.length-1-Math.abs(n||0),n>=0?this.conditionStack[n]:"INITIAL"},pushState:function(n){this.begin(n)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(n,u,c,y){switch(c){case 0:return this.begin("open_directive"),"open_directive";case 1:return this.begin("acc_title"),28;case 2:return this.popState(),"acc_title_value";case 3:return this.begin("acc_descr"),30;case 4:return this.popState(),"acc_descr_value";case 5:this.begin("acc_descr_multiline");break;case 6:this.popState();break;case 7:return"acc_descr_multiline_value";case 8:break;case 9:break;case 10:break;case 11:return 10;case 12:break;case 13:break;case 14:this.begin("href");break;case 15:this.popState();break;case 16:return 40;case 17:this.begin("callbackname");break;case 18:this.popState();break;case 19:this.popState(),this.begin("callbackargs");break;case 20:return 38;case 21:this.popState();break;case 22:return 39;case 23:this.begin("click");break;case 24:this.popState();break;case 25:return 37;case 26:return 4;case 27:return 19;case 28:return 20;case 29:return 21;case 30:return 22;case 31:return 23;case 32:return 25;case 33:return 24;case 34:return 26;case 35:return 12;case 36:return 13;case 37:return 14;case 38:return 15;case 39:return 16;case 40:return 17;case 41:return 18;case 42:return"date";case 43:return 27;case 44:return"accDescription";case 45:return 33;case 46:return 35;case 47:return 36;case 48:return":";case 49:return 6;case 50:return"INVALID"}},rules:[/^(?:%%\{)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:%%(?!\{)*[^\n]*)/i,/^(?:[^\}]%%*[^\n]*)/i,/^(?:%%*[^\n]*[\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:%[^\n]*)/i,/^(?:href[\s]+["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:call[\s]+)/i,/^(?:\([\s]*\))/i,/^(?:\()/i,/^(?:[^(]*)/i,/^(?:\))/i,/^(?:[^)]*)/i,/^(?:click[\s]+)/i,/^(?:[\s\n])/i,/^(?:[^\s\n]*)/i,/^(?:gantt\b)/i,/^(?:dateFormat\s[^#\n;]+)/i,/^(?:inclusiveEndDates\b)/i,/^(?:topAxis\b)/i,/^(?:axisFormat\s[^#\n;]+)/i,/^(?:tickInterval\s[^#\n;]+)/i,/^(?:includes\s[^#\n;]+)/i,/^(?:excludes\s[^#\n;]+)/i,/^(?:todayMarker\s[^\n;]+)/i,/^(?:weekday\s+monday\b)/i,/^(?:weekday\s+tuesday\b)/i,/^(?:weekday\s+wednesday\b)/i,/^(?:weekday\s+thursday\b)/i,/^(?:weekday\s+friday\b)/i,/^(?:weekday\s+saturday\b)/i,/^(?:weekday\s+sunday\b)/i,/^(?:\d\d\d\d-\d\d-\d\d\b)/i,/^(?:title\s[^\n]+)/i,/^(?:accDescription\s[^#\n;]+)/i,/^(?:section\s[^\n]+)/i,/^(?:[^:\n]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[6,7],inclusive:!1},acc_descr:{rules:[4],inclusive:!1},acc_title:{rules:[2],inclusive:!1},callbackargs:{rules:[21,22],inclusive:!1},callbackname:{rules:[18,19,20],inclusive:!1},href:{rules:[15,16],inclusive:!1},click:{rules:[24,25],inclusive:!1},INITIAL:{rules:[0,1,3,5,8,9,10,11,12,13,14,17,23,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50],inclusive:!0}}};return h}();m.lexer=b;function g(){this.yy={}}return g.prototype=m,m.Parser=g,new g}();vt.parser=vt;const Ge=vt;G.extend(Pe);G.extend(He);G.extend(Ve);let K="",St="",Mt,Et="",ct=[],lt=[],At={},Yt=[],gt=[],st="",Lt="";const Jt=["active","done","crit","milestone"];let It=[],ut=!1,Ft=!1,Ot="sunday",_t=0;const je=function(){Yt=[],gt=[],st="",It=[],yt=0,$t=void 0,kt=void 0,P=[],K="",St="",Lt="",Mt=void 0,Et="",ct=[],lt=[],ut=!1,Ft=!1,_t=0,At={},fe(),Ot="sunday"},Ze=function(t){St=t},Qe=function(){return St},Ke=function(t){Mt=t},Ue=function(){return Mt},qe=function(t){Et=t},Re=function(){return Et},Je=function(t){K=t},Xe=function(){ut=!0},tn=function(){return ut},en=function(){Ft=!0},nn=function(){return Ft},rn=function(t){Lt=t},sn=function(){return Lt},an=function(){return K},on=function(t){ct=t.toLowerCase().split(/[\s,]+/)},cn=function(){return ct},ln=function(t){lt=t.toLowerCase().split(/[\s,]+/)},un=function(){return lt},dn=function(){return At},hn=function(t){st=t,Yt.push(t)},fn=function(){return Yt},mn=function(){let t=Zt();const r=10;let s=0;for(;!t&&s<r;)t=Zt(),s++;return gt=P,gt},Xt=function(t,r,s,a){return a.includes(t.format(r.trim()))?!1:t.isoWeekday()>=6&&s.includes("weekends")||s.includes(t.format("dddd").toLowerCase())?!0:s.includes(t.format(r.trim()))},yn=function(t){Ot=t},kn=function(){return Ot},te=function(t,r,s,a){if(!s.length||t.manualEndTime)return;let o;t.startTime instanceof Date?o=G(t.startTime):o=G(t.startTime,r,!0),o=o.add(1,"d");let l;t.endTime instanceof Date?l=G(t.endTime):l=G(t.endTime,r,!0);const[f,x]=pn(o,l,r,s,a);t.endTime=f.toDate(),t.renderEndTime=x},pn=function(t,r,s,a,o){let l=!1,f=null;for(;t<=r;)l||(f=r.toDate()),l=Xt(t,s,a,o),l&&(r=r.add(1,"d")),t=t.add(1,"d");return[r,f]},wt=function(t,r,s){s=s.trim();const a=/^after\s+(?<ids>[\d\w- ]+)/.exec(s);if(a!==null){let l=null;for(const x of a.groups.ids.split(" ")){let M=et(x);M!==void 0&&(!l||M.endTime>l.endTime)&&(l=M)}if(l)return l.endTime;const f=new Date;return f.setHours(0,0,0,0),f}let o=G(s,r.trim(),!0);if(o.isValid())return o.toDate();{pt.debug("Invalid date:"+s),pt.debug("With date format:"+r.trim());const l=new Date(s);if(l===void 0||isNaN(l.getTime())||l.getFullYear()<-1e4||l.getFullYear()>1e4)throw new Error("Invalid date:"+s);return l}},ee=function(t){const r=/^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(t.trim());return r!==null?[Number.parseFloat(r[1]),r[2]]:[NaN,"ms"]},ne=function(t,r,s,a=!1){s=s.trim();const o=/^until\s+(?<ids>[\d\w- ]+)/.exec(s);if(o!==null){let k=null;for(const S of o.groups.ids.split(" ")){let v=et(S);v!==void 0&&(!k||v.startTime<k.startTime)&&(k=v)}if(k)return k.startTime;const E=new Date;return E.setHours(0,0,0,0),E}let l=G(s,r.trim(),!0);if(l.isValid())return a&&(l=l.add(1,"d")),l.toDate();let f=G(t);const[x,M]=ee(s);if(!Number.isNaN(x)){const k=f.add(x,M);k.isValid()&&(f=k)}return f.toDate()};let yt=0;const it=function(t){return t===void 0?(yt=yt+1,"task"+yt):t},gn=function(t,r){let s;r.substr(0,1)===":"?s=r.substr(1,r.length):s=r;const a=s.split(","),o={};ae(a,o,Jt);for(let f=0;f<a.length;f++)a[f]=a[f].trim();let l="";switch(a.length){case 1:o.id=it(),o.startTime=t.endTime,l=a[0];break;case 2:o.id=it(),o.startTime=wt(void 0,K,a[0]),l=a[1];break;case 3:o.id=it(a[0]),o.startTime=wt(void 0,K,a[1]),l=a[2];break}return l&&(o.endTime=ne(o.startTime,K,l,ut),o.manualEndTime=G(l,"YYYY-MM-DD",!0).isValid(),te(o,K,lt,ct)),o},bn=function(t,r){let s;r.substr(0,1)===":"?s=r.substr(1,r.length):s=r;const a=s.split(","),o={};ae(a,o,Jt);for(let l=0;l<a.length;l++)a[l]=a[l].trim();switch(a.length){case 1:o.id=it(),o.startTime={type:"prevTaskEnd",id:t},o.endTime={data:a[0]};break;case 2:o.id=it(),o.startTime={type:"getStartDate",startData:a[0]},o.endTime={data:a[1]};break;case 3:o.id=it(a[0]),o.startTime={type:"getStartDate",startData:a[1]},o.endTime={data:a[2]};break}return o};let $t,kt,P=[];const re={},xn=function(t,r){const s={section:st,type:st,processed:!1,manualEndTime:!1,renderEndTime:null,raw:{data:r},task:t,classes:[]},a=bn(kt,r);s.raw.startTime=a.startTime,s.raw.endTime=a.endTime,s.id=a.id,s.prevTaskId=kt,s.active=a.active,s.done=a.done,s.crit=a.crit,s.milestone=a.milestone,s.order=_t,_t++;const o=P.push(s);kt=s.id,re[s.id]=o-1},et=function(t){const r=re[t];return P[r]},Tn=function(t,r){const s={section:st,type:st,description:t,task:t,classes:[]},a=gn($t,r);s.startTime=a.startTime,s.endTime=a.endTime,s.id=a.id,s.active=a.active,s.done=a.done,s.crit=a.crit,s.milestone=a.milestone,$t=s,gt.push(s)},Zt=function(){const t=function(s){const a=P[s];let o="";switch(P[s].raw.startTime.type){case"prevTaskEnd":{const l=et(a.prevTaskId);a.startTime=l.endTime;break}case"getStartDate":o=wt(void 0,K,P[s].raw.startTime.startData),o&&(P[s].startTime=o);break}return P[s].startTime&&(P[s].endTime=ne(P[s].startTime,K,P[s].raw.endTime.data,ut),P[s].endTime&&(P[s].processed=!0,P[s].manualEndTime=G(P[s].raw.endTime.data,"YYYY-MM-DD",!0).isValid(),te(P[s],K,lt,ct))),P[s].processed};let r=!0;for(const[s,a]of P.entries())t(s),r=r&&a.processed;return r},vn=function(t,r){let s=r;rt().securityLevel!=="loose"&&(s=me.sanitizeUrl(r)),t.split(",").forEach(function(a){et(a)!==void 0&&(se(a,()=>{window.open(s,"_self")}),At[a]=s)}),ie(t,"clickable")},ie=function(t,r){t.split(",").forEach(function(s){let a=et(s);a!==void 0&&a.classes.push(r)})},_n=function(t,r,s){if(rt().securityLevel!=="loose"||r===void 0)return;let a=[];if(typeof s=="string"){a=s.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);for(let o=0;o<a.length;o++){let l=a[o].trim();l.charAt(0)==='"'&&l.charAt(l.length-1)==='"'&&(l=l.substr(1,l.length-2)),a[o]=l}}a.length===0&&a.push(t),et(t)!==void 0&&se(t,()=>{pe.runFunc(r,...a)})},se=function(t,r){It.push(function(){const s=document.querySelector(`[id="${t}"]`);s!==null&&s.addEventListener("click",function(){r()})},function(){const s=document.querySelector(`[id="${t}-text"]`);s!==null&&s.addEventListener("click",function(){r()})})},wn=function(t,r,s){t.split(",").forEach(function(a){_n(a,r,s)}),ie(t,"clickable")},$n=function(t){It.forEach(function(r){r(t)})},Dn={getConfig:()=>rt().gantt,clear:je,setDateFormat:Je,getDateFormat:an,enableInclusiveEndDates:Xe,endDatesAreInclusive:tn,enableTopAxis:en,topAxisEnabled:nn,setAxisFormat:Ze,getAxisFormat:Qe,setTickInterval:Ke,getTickInterval:Ue,setTodayMarker:qe,getTodayMarker:Re,setAccTitle:oe,getAccTitle:ce,setDiagramTitle:le,getDiagramTitle:ue,setDisplayMode:rn,getDisplayMode:sn,setAccDescription:de,getAccDescription:he,addSection:hn,getSections:fn,getTasks:mn,addTask:xn,findTaskById:et,addTaskOrg:Tn,setIncludes:on,getIncludes:cn,setExcludes:ln,getExcludes:un,setClickEvent:wn,setLink:vn,getLinks:dn,bindFunctions:$n,parseDuration:ee,isInvalidDate:Xt,setWeekday:yn,getWeekday:kn};function ae(t,r,s){let a=!0;for(;a;)a=!1,s.forEach(function(o){const l="^\\s*"+o+"\\s*$",f=new RegExp(l);t[0].match(f)&&(r[o]=!0,t.shift(1),a=!0)})}const Cn=function(){pt.debug("Something is calling, setConf, remove the call")},Qt={monday:ve,tuesday:_e,wednesday:we,thursday:$e,friday:De,saturday:Ce,sunday:Se},Sn=(t,r)=>{let s=[...t].map(()=>-1/0),a=[...t].sort((l,f)=>l.startTime-f.startTime||l.order-f.order),o=0;for(const l of a)for(let f=0;f<s.length;f++)if(l.startTime>=s[f]){s[f]=l.endTime,l.order=f+r,f>o&&(o=f);break}return o};let R;const Mn=function(t,r,s,a){const o=rt().gantt,l=rt().securityLevel;let f;l==="sandbox"&&(f=ht("#i"+r));const x=l==="sandbox"?ht(f.nodes()[0].contentDocument.body):ht("body"),M=l==="sandbox"?f.nodes()[0].contentDocument:document,k=M.getElementById(r);R=k.parentElement.offsetWidth,R===void 0&&(R=1200),o.useWidth!==void 0&&(R=o.useWidth);const E=a.db.getTasks();let S=[];for(const m of E)S.push(m.type);S=I(S);const v={};let T=2*o.topPadding;if(a.db.getDisplayMode()==="compact"||o.displayMode==="compact"){const m={};for(const g of E)m[g.section]===void 0?m[g.section]=[g]:m[g.section].push(g);let b=0;for(const g of Object.keys(m)){const h=Sn(m[g],b)+1;b+=h,T+=h*(o.barHeight+o.barGap),v[g]=h}}else{T+=E.length*(o.barHeight+o.barGap);for(const m of S)v[m]=E.filter(b=>b.type===m).length}k.setAttribute("viewBox","0 0 "+R+" "+T);const B=x.select(`[id="${r}"]`),d=ge().domain([be(E,function(m){return m.startTime}),xe(E,function(m){return m.endTime})]).rangeRound([0,R-o.leftPadding-o.rightPadding]);function D(m,b){const g=m.startTime,h=b.startTime;let n=0;return g>h?n=1:g<h&&(n=-1),n}E.sort(D),Y(E,R,T),ye(B,T,R,o.useMaxWidth),B.append("text").text(a.db.getDiagramTitle()).attr("x",R/2).attr("y",o.titleTopMargin).attr("class","titleText");function Y(m,b,g){const h=o.barHeight,n=h+o.barGap,u=o.topPadding,c=o.leftPadding,y=Me().domain([0,S.length]).range(["#00B9FA","#F95002"]).interpolate(Te);O(n,u,c,b,g,m,a.db.getExcludes(),a.db.getIncludes()),W(c,u,b,g),A(m,n,u,c,h,y,b),N(n,u),z(c,u,b,g)}function A(m,b,g,h,n,u,c){const y=[...new Set(m.map(e=>e.order))].map(e=>m.find(p=>p.order===e));B.append("g").selectAll("rect").data(y).enter().append("rect").attr("x",0).attr("y",function(e,p){return p=e.order,p*b+g-2}).attr("width",function(){return c-o.rightPadding/2}).attr("height",b).attr("class",function(e){for(const[p,$]of S.entries())if(e.type===$)return"section section"+p%o.numberSectionStyles;return"section section0"});const i=B.append("g").selectAll("rect").data(m).enter(),C=a.db.getLinks();if(i.append("rect").attr("id",function(e){return e.id}).attr("rx",3).attr("ry",3).attr("x",function(e){return e.milestone?d(e.startTime)+h+.5*(d(e.endTime)-d(e.startTime))-.5*n:d(e.startTime)+h}).attr("y",function(e,p){return p=e.order,p*b+g}).attr("width",function(e){return e.milestone?n:d(e.renderEndTime||e.endTime)-d(e.startTime)}).attr("height",n).attr("transform-origin",function(e,p){return p=e.order,(d(e.startTime)+h+.5*(d(e.endTime)-d(e.startTime))).toString()+"px "+(p*b+g+.5*n).toString()+"px"}).attr("class",function(e){const p="task";let $="";e.classes.length>0&&($=e.classes.join(" "));let L=0;for(const[F,_]of S.entries())e.type===_&&(L=F%o.numberSectionStyles);let w="";return e.active?e.crit?w+=" activeCrit":w=" active":e.done?e.crit?w=" doneCrit":w=" done":e.crit&&(w+=" crit"),w.length===0&&(w=" task"),e.milestone&&(w=" milestone "+w),w+=L,w+=" "+$,p+w}),i.append("text").attr("id",function(e){return e.id+"-text"}).text(function(e){return e.task}).attr("font-size",o.fontSize).attr("x",function(e){let p=d(e.startTime),$=d(e.renderEndTime||e.endTime);e.milestone&&(p+=.5*(d(e.endTime)-d(e.startTime))-.5*n),e.milestone&&($=p+n);const L=this.getBBox().width;return L>$-p?$+L+1.5*o.leftPadding>c?p+h-5:$+h+5:($-p)/2+p+h}).attr("y",function(e,p){return p=e.order,p*b+o.barHeight/2+(o.fontSize/2-2)+g}).attr("text-height",n).attr("class",function(e){const p=d(e.startTime);let $=d(e.endTime);e.milestone&&($=p+n);const L=this.getBBox().width;let w="";e.classes.length>0&&(w=e.classes.join(" "));let F=0;for(const[Z,X]of S.entries())e.type===X&&(F=Z%o.numberSectionStyles);let _="";return e.active&&(e.crit?_="activeCritText"+F:_="activeText"+F),e.done?e.crit?_=_+" doneCritText"+F:_=_+" doneText"+F:e.crit&&(_=_+" critText"+F),e.milestone&&(_+=" milestoneText"),L>$-p?$+L+1.5*o.leftPadding>c?w+" taskTextOutsideLeft taskTextOutside"+F+" "+_:w+" taskTextOutsideRight taskTextOutside"+F+" "+_+" width-"+L:w+" taskText taskText"+F+" "+_+" width-"+L}),rt().securityLevel==="sandbox"){let e;e=ht("#i"+r);const p=e.nodes()[0].contentDocument;i.filter(function($){return C[$.id]!==void 0}).each(function($){var L=p.querySelector("#"+$.id),w=p.querySelector("#"+$.id+"-text");const F=L.parentNode;var _=p.createElement("a");_.setAttribute("xlink:href",C[$.id]),_.setAttribute("target","_top"),F.appendChild(_),_.appendChild(L),_.appendChild(w)})}}function O(m,b,g,h,n,u,c,y){if(c.length===0&&y.length===0)return;let i,C;for(const{startTime:w,endTime:F}of u)(i===void 0||w<i)&&(i=w),(C===void 0||F>C)&&(C=F);if(!i||!C)return;if(G(C).diff(G(i),"year")>5){pt.warn("The difference between the min and max time is more than 5 years. This will cause performance issues. Skipping drawing exclude days.");return}const e=a.db.getDateFormat(),p=[];let $=null,L=G(i);for(;L.valueOf()<=C;)a.db.isInvalidDate(L,e,c,y)?$?$.end=L:$={start:L,end:L}:$&&(p.push($),$=null),L=L.add(1,"d");B.append("g").selectAll("rect").data(p).enter().append("rect").attr("id",function(w){return"exclude-"+w.start.format("YYYY-MM-DD")}).attr("x",function(w){return d(w.start)+g}).attr("y",o.gridLineStartPadding).attr("width",function(w){const F=w.end.add(1,"day");return d(F)-d(w.start)}).attr("height",n-b-o.gridLineStartPadding).attr("transform-origin",function(w,F){return(d(w.start)+g+.5*(d(w.end)-d(w.start))).toString()+"px "+(F*m+.5*n).toString()+"px"}).attr("class","exclude-range")}function W(m,b,g,h){let n=We(d).tickSize(-h+b+o.gridLineStartPadding).tickFormat(zt(a.db.getAxisFormat()||o.axisFormat||"%Y-%m-%d"));const u=/^([1-9]\d*)(millisecond|second|minute|hour|day|week|month)$/.exec(a.db.getTickInterval()||o.tickInterval);if(u!==null){const c=u[1],y=u[2],i=a.db.getWeekday()||o.weekday;switch(y){case"millisecond":n.ticks(Gt.every(c));break;case"second":n.ticks(Vt.every(c));break;case"minute":n.ticks(Nt.every(c));break;case"hour":n.ticks(Ht.every(c));break;case"day":n.ticks(Bt.every(c));break;case"week":n.ticks(Qt[i].every(c));break;case"month":n.ticks(Pt.every(c));break}}if(B.append("g").attr("class","grid").attr("transform","translate("+m+", "+(h-50)+")").call(n).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10).attr("dy","1em"),a.db.topAxisEnabled()||o.topAxis){let c=Oe(d).tickSize(-h+b+o.gridLineStartPadding).tickFormat(zt(a.db.getAxisFormat()||o.axisFormat||"%Y-%m-%d"));if(u!==null){const y=u[1],i=u[2],C=a.db.getWeekday()||o.weekday;switch(i){case"millisecond":c.ticks(Gt.every(y));break;case"second":c.ticks(Vt.every(y));break;case"minute":c.ticks(Nt.every(y));break;case"hour":c.ticks(Ht.every(y));break;case"day":c.ticks(Bt.every(y));break;case"week":c.ticks(Qt[C].every(y));break;case"month":c.ticks(Pt.every(y));break}}B.append("g").attr("class","grid").attr("transform","translate("+m+", "+b+")").call(c).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10)}}function N(m,b){let g=0;const h=Object.keys(v).map(n=>[n,v[n]]);B.append("g").selectAll("text").data(h).enter().append(function(n){const u=n[0].split(ke.lineBreakRegex),c=-(u.length-1)/2,y=M.createElementNS("http://www.w3.org/2000/svg","text");y.setAttribute("dy",c+"em");for(const[i,C]of u.entries()){const e=M.createElementNS("http://www.w3.org/2000/svg","tspan");e.setAttribute("alignment-baseline","central"),e.setAttribute("x","10"),i>0&&e.setAttribute("dy","1em"),e.textContent=C,y.appendChild(e)}return y}).attr("x",10).attr("y",function(n,u){if(u>0)for(let c=0;c<u;c++)return g+=h[u-1][1],n[1]*m/2+g*m+b;else return n[1]*m/2+b}).attr("font-size",o.sectionFontSize).attr("class",function(n){for(const[u,c]of S.entries())if(n[0]===c)return"sectionTitle sectionTitle"+u%o.numberSectionStyles;return"sectionTitle"})}function z(m,b,g,h){const n=a.db.getTodayMarker();if(n==="off")return;const u=B.append("g").attr("class","today"),c=new Date,y=u.append("line");y.attr("x1",d(c)+m).attr("x2",d(c)+m).attr("y1",o.titleTopMargin).attr("y2",h-o.titleTopMargin).attr("class","today"),n!==""&&y.attr("style",n.replace(/,/g,";"))}function I(m){const b={},g=[];for(let h=0,n=m.length;h<n;++h)Object.prototype.hasOwnProperty.call(b,m[h])||(b[m[h]]=!0,g.push(m[h]));return g}},En={setConf:Cn,draw:Mn},An=t=>`
  .mermaid-main-font {
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }

  .exclude-range {
    fill: ${t.excludeBkgColor};
  }

  .section {
    stroke: none;
    opacity: 0.2;
  }

  .section0 {
    fill: ${t.sectionBkgColor};
  }

  .section2 {
    fill: ${t.sectionBkgColor2};
  }

  .section1,
  .section3 {
    fill: ${t.altSectionBkgColor};
    opacity: 0.2;
  }

  .sectionTitle0 {
    fill: ${t.titleColor};
  }

  .sectionTitle1 {
    fill: ${t.titleColor};
  }

  .sectionTitle2 {
    fill: ${t.titleColor};
  }

  .sectionTitle3 {
    fill: ${t.titleColor};
  }

  .sectionTitle {
    text-anchor: start;
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }


  /* Grid and axis */

  .grid .tick {
    stroke: ${t.gridColor};
    opacity: 0.8;
    shape-rendering: crispEdges;
  }

  .grid .tick text {
    font-family: ${t.fontFamily};
    fill: ${t.textColor};
  }

  .grid path {
    stroke-width: 0;
  }


  /* Today line */

  .today {
    fill: none;
    stroke: ${t.todayLineColor};
    stroke-width: 2px;
  }


  /* Task styling */

  /* Default task */

  .task {
    stroke-width: 2;
  }

  .taskText {
    text-anchor: middle;
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }

  .taskTextOutsideRight {
    fill: ${t.taskTextDarkColor};
    text-anchor: start;
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }

  .taskTextOutsideLeft {
    fill: ${t.taskTextDarkColor};
    text-anchor: end;
  }


  /* Special case clickable */

  .task.clickable {
    cursor: pointer;
  }

  .taskText.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideLeft.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideRight.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }


  /* Specific task settings for the sections*/

  .taskText0,
  .taskText1,
  .taskText2,
  .taskText3 {
    fill: ${t.taskTextColor};
  }

  .task0,
  .task1,
  .task2,
  .task3 {
    fill: ${t.taskBkgColor};
    stroke: ${t.taskBorderColor};
  }

  .taskTextOutside0,
  .taskTextOutside2
  {
    fill: ${t.taskTextOutsideColor};
  }

  .taskTextOutside1,
  .taskTextOutside3 {
    fill: ${t.taskTextOutsideColor};
  }


  /* Active task */

  .active0,
  .active1,
  .active2,
  .active3 {
    fill: ${t.activeTaskBkgColor};
    stroke: ${t.activeTaskBorderColor};
  }

  .activeText0,
  .activeText1,
  .activeText2,
  .activeText3 {
    fill: ${t.taskTextDarkColor} !important;
  }


  /* Completed task */

  .done0,
  .done1,
  .done2,
  .done3 {
    stroke: ${t.doneTaskBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
  }

  .doneText0,
  .doneText1,
  .doneText2,
  .doneText3 {
    fill: ${t.taskTextDarkColor} !important;
  }


  /* Tasks on the critical line */

  .crit0,
  .crit1,
  .crit2,
  .crit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.critBkgColor};
    stroke-width: 2;
  }

  .activeCrit0,
  .activeCrit1,
  .activeCrit2,
  .activeCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.activeTaskBkgColor};
    stroke-width: 2;
  }

  .doneCrit0,
  .doneCrit1,
  .doneCrit2,
  .doneCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
    cursor: pointer;
    shape-rendering: crispEdges;
  }

  .milestone {
    transform: rotate(45deg) scale(0.8,0.8);
  }

  .milestoneText {
    font-style: italic;
  }
  .doneCritText0,
  .doneCritText1,
  .doneCritText2,
  .doneCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  .activeCritText0,
  .activeCritText1,
  .activeCritText2,
  .activeCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  .titleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${t.titleColor||t.textColor};
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }
`,Yn=An,Pn={parser:Ge,db:Dn,renderer:En,styles:Yn};export{Pn as diagram};
