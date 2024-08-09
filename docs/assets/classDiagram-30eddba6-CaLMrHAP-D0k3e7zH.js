import{z as Y,K as B,Y as C}from"./styles-991ebdfc-D2czhm50-DDPaO2vm.js";import{c as H,l as f,h as T,i as Z,y as v,aq as D}from"./mermaid.core-CrY0-6Yn-B-q7mtvF.js";import{Z as J}from"./graph-Cx5EwEy7--yv2nkcl.js";import{A as W}from"./layout-ITPnmHON-Q2WsQfLn.js";import"./data-C53evbMW.js";import{P as X}from"./line-C3s158m--QyAb1aCS.js";import{z as $}from"./step-CFLd_UlD-CAA9ZoWn.js";import"./index-CcS5Ukqh.js";import"./array-CqVTtuYm-C3YJfAyO.js";import"./path-H8vhG2aR-T6_P2E4R.js";let O=0;const P=function(n,a,t,s,l){const c=function(i){switch(i){case l.db.relationType.AGGREGATION:return"aggregation";case l.db.relationType.EXTENSION:return"extension";case l.db.relationType.COMPOSITION:return"composition";case l.db.relationType.DEPENDENCY:return"dependency";case l.db.relationType.LOLLIPOP:return"lollipop"}};a.points=a.points.filter(i=>!Number.isNaN(i.y));const o=a.points,g=X().x(function(i){return i.x}).y(function(i){return i.y}).curve($),d=n.append("path").attr("d",g(o)).attr("id","edge"+O).attr("class","relation");let r="";s.arrowMarkerAbsolute&&(r=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search,r=r.replace(/\(/g,"\\("),r=r.replace(/\)/g,"\\)")),t.relation.lineType==1&&d.attr("class","relation dashed-line"),t.relation.lineType==10&&d.attr("class","relation dotted-line"),t.relation.type1!=="none"&&d.attr("marker-start","url("+r+"#"+c(t.relation.type1)+"Start)"),t.relation.type2!=="none"&&d.attr("marker-end","url("+r+"#"+c(t.relation.type2)+"End)");let u,p;const x=a.points.length;let m=v.calcLabelPosition(a.points);u=m.x,p=m.y;let b,w,e,h;if(x%2!==0&&x>1){let i=v.calcCardinalityPosition(t.relation.type1!=="none",a.points,a.points[0]),y=v.calcCardinalityPosition(t.relation.type2!=="none",a.points,a.points[x-1]);f.debug("cardinality_1_point "+JSON.stringify(i)),f.debug("cardinality_2_point "+JSON.stringify(y)),b=i.x,w=i.y,e=y.x,h=y.y}if(t.title!==void 0){const i=n.append("g").attr("class","classLabel"),y=i.append("text").attr("class","label").attr("x",u).attr("y",p).attr("fill","red").attr("text-anchor","middle").text(t.title);window.label=y;const E=y.node().getBBox();i.insert("rect",":first-child").attr("class","box").attr("x",E.x-s.padding/2).attr("y",E.y-s.padding/2).attr("width",E.width+s.padding).attr("height",E.height+s.padding)}f.info("Rendering relation "+JSON.stringify(t)),t.relationTitle1!==void 0&&t.relationTitle1!=="none"&&n.append("g").attr("class","cardinality").append("text").attr("class","type1").attr("x",b).attr("y",w).attr("fill","black").attr("font-size","6").text(t.relationTitle1),t.relationTitle2!==void 0&&t.relationTitle2!=="none"&&n.append("g").attr("class","cardinality").append("text").attr("class","type2").attr("x",e).attr("y",h).attr("fill","black").attr("font-size","6").text(t.relationTitle2),O++},G=function(n,a,t,s){f.debug("Rendering class ",a,t);const l=a.id,c={id:l,label:a.id,width:0,height:0},o=n.append("g").attr("id",s.db.lookUpDomId(l)).attr("class","classGroup");let g;a.link?g=o.append("svg:a").attr("xlink:href",a.link).attr("target",a.linkTarget).append("text").attr("y",t.textHeight+t.padding).attr("x",0):g=o.append("text").attr("y",t.textHeight+t.padding).attr("x",0);let d=!0;a.annotations.forEach(function(i){const y=g.append("tspan").text("«"+i+"»");d||y.attr("dy",t.textHeight),d=!1});let r=A(a);const u=g.append("tspan").text(r).attr("class","title");d||u.attr("dy",t.textHeight);const p=g.node().getBBox().height;let x,m,b;if(a.members.length>0){x=o.append("line").attr("x1",0).attr("y1",t.padding+p+t.dividerMargin/2).attr("y2",t.padding+p+t.dividerMargin/2);const i=o.append("text").attr("x",t.padding).attr("y",p+t.dividerMargin+t.textHeight).attr("fill","white").attr("class","classText");d=!0,a.members.forEach(function(y){S(i,y,d,t),d=!1}),m=i.node().getBBox()}if(a.methods.length>0){b=o.append("line").attr("x1",0).attr("y1",t.padding+p+t.dividerMargin+m.height).attr("y2",t.padding+p+t.dividerMargin+m.height);const i=o.append("text").attr("x",t.padding).attr("y",p+2*t.dividerMargin+m.height+t.textHeight).attr("fill","white").attr("class","classText");d=!0,a.methods.forEach(function(y){S(i,y,d,t),d=!1})}const w=o.node().getBBox();var e=" ";a.cssClasses.length>0&&(e=e+a.cssClasses.join(" "));const h=o.insert("rect",":first-child").attr("x",0).attr("y",0).attr("width",w.width+2*t.padding).attr("height",w.height+t.padding+.5*t.dividerMargin).attr("class",e).node().getBBox().width;return g.node().childNodes.forEach(function(i){i.setAttribute("x",(h-i.getBBox().width)/2)}),a.tooltip&&g.insert("title").text(a.tooltip),x&&x.attr("x2",h),b&&b.attr("x2",h),c.width=h,c.height=w.height+t.padding+.5*t.dividerMargin,c},A=function(n){let a=n.id;return n.type&&(a+="<"+D(n.type)+">"),a},I=function(n,a,t,s){f.debug("Rendering note ",a,t);const l=a.id,c={id:l,text:a.text,width:0,height:0},o=n.append("g").attr("id",l).attr("class","classGroup");let g=o.append("text").attr("y",t.textHeight+t.padding).attr("x",0);const d=JSON.parse(`"${a.text}"`).split(`
`);d.forEach(function(p){f.debug(`Adding line: ${p}`),g.append("tspan").text(p).attr("class","title").attr("dy",t.textHeight)});const r=o.node().getBBox(),u=o.insert("rect",":first-child").attr("x",0).attr("y",0).attr("width",r.width+2*t.padding).attr("height",r.height+d.length*t.textHeight+t.padding+.5*t.dividerMargin).node().getBBox().width;return g.node().childNodes.forEach(function(p){p.setAttribute("x",(u-p.getBBox().width)/2)}),c.width=u,c.height=r.height+d.length*t.textHeight+t.padding+.5*t.dividerMargin,c},S=function(n,a,t,s){const{displayText:l,cssStyle:c}=a.getDisplayDetails(),o=n.append("tspan").attr("x",s.padding).text(l);c!==""&&o.attr("style",a.cssStyle),t||o.attr("dy",s.textHeight)},M={getClassTitleString:A,drawClass:G,drawEdge:P,drawNote:I};let N={};const L=20,k=function(n){const a=Object.entries(N).find(t=>t[1].label===n);if(a)return a[0]},R=function(n){n.append("defs").append("marker").attr("id","extensionStart").attr("class","extension").attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 1,7 L18,13 V 1 Z"),n.append("defs").append("marker").attr("id","extensionEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 1,1 V 13 L18,7 Z"),n.append("defs").append("marker").attr("id","compositionStart").attr("class","extension").attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),n.append("defs").append("marker").attr("id","compositionEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),n.append("defs").append("marker").attr("id","aggregationStart").attr("class","extension").attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),n.append("defs").append("marker").attr("id","aggregationEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),n.append("defs").append("marker").attr("id","dependencyStart").attr("class","extension").attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 5,7 L9,13 L1,7 L9,1 Z"),n.append("defs").append("marker").attr("id","dependencyEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L14,7 L9,1 Z")},z=function(n,a,t,s){const l=H().class;N={},f.info("Rendering diagram "+n);const c=H().securityLevel;let o;c==="sandbox"&&(o=T("#i"+a));const g=c==="sandbox"?T(o.nodes()[0].contentDocument.body):T("body"),d=g.select(`[id='${a}']`);R(d);const r=new J({multigraph:!0});r.setGraph({isMultiGraph:!0}),r.setDefaultEdgeLabel(function(){return{}});const u=s.db.getClasses(),p=Object.keys(u);for(const e of p){const h=u[e],i=M.drawClass(d,h,l,s);N[i.id]=i,r.setNode(i.id,i),f.info("Org height: "+i.height)}s.db.getRelations().forEach(function(e){f.info("tjoho"+k(e.id1)+k(e.id2)+JSON.stringify(e)),r.setEdge(k(e.id1),k(e.id2),{relation:e},e.title||"DEFAULT")}),s.db.getNotes().forEach(function(e){f.debug(`Adding note: ${JSON.stringify(e)}`);const h=M.drawNote(d,e,l,s);N[h.id]=h,r.setNode(h.id,h),e.class&&e.class in u&&r.setEdge(e.id,k(e.class),{relation:{id1:e.id,id2:e.class,relation:{type1:"none",type2:"none",lineType:10}}},"DEFAULT")}),W(r),r.nodes().forEach(function(e){e!==void 0&&r.node(e)!==void 0&&(f.debug("Node "+e+": "+JSON.stringify(r.node(e))),g.select("#"+(s.db.lookUpDomId(e)||e)).attr("transform","translate("+(r.node(e).x-r.node(e).width/2)+","+(r.node(e).y-r.node(e).height/2)+" )"))}),r.edges().forEach(function(e){e!==void 0&&r.edge(e)!==void 0&&(f.debug("Edge "+e.v+" -> "+e.w+": "+JSON.stringify(r.edge(e))),M.drawEdge(d,r.edge(e),r.edge(e).relation,l,s))});const x=d.node().getBBox(),m=x.width+L*2,b=x.height+L*2;Z(d,b,m,l.useMaxWidth);const w=`${x.x-L} ${x.y-L} ${m} ${b}`;f.debug(`viewBox ${w}`),d.attr("viewBox",w)},_={draw:z},rt={parser:Y,db:B,renderer:_,styles:C,init:n=>{n.class||(n.class={}),n.class.arrowMarkerAbsolute=n.arrowMarkerAbsolute,B.clear()}};export{rt as diagram};
