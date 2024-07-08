import{D as T,v as N,A as G}from"./styles-d20c7d72-B3iOddNk-DJQjIh2F.js";import{c as t,h as S,l as k,i as L,j as v,y as O}from"./mermaid.core-CrY0-6Yn-C-xqgeZK.js";import{Z as P}from"./graph-Cx5EwEy7-CrVjd4AI.js";import{A as U}from"./layout-ITPnmHON-DioOgn9V.js";import"./data-B8HirxdE.js";import{P as I}from"./line-C3s158m--QyAb1aCS.js";import{z as R}from"./step-CFLd_UlD-CAA9ZoWn.js";import"./index-BytCle9r.js";import"./array-CqVTtuYm-C3YJfAyO.js";import"./path-H8vhG2aR-T6_P2E4R.js";const C=e=>e.append("circle").attr("class","start-state").attr("r",t().state.sizeUnit).attr("cx",t().state.padding+t().state.sizeUnit).attr("cy",t().state.padding+t().state.sizeUnit),W=e=>e.append("line").style("stroke","grey").style("stroke-dasharray","3").attr("x1",t().state.textHeight).attr("class","divider").attr("x2",t().state.textHeight*2).attr("y1",0).attr("y2",0),Y=(e,i)=>{const g=e.append("text").attr("x",2*t().state.padding).attr("y",t().state.textHeight+2*t().state.padding).attr("font-size",t().state.fontSize).attr("class","state-title").text(i.id),s=g.node().getBBox();return e.insert("rect",":first-child").attr("x",t().state.padding).attr("y",t().state.padding).attr("width",s.width+2*t().state.padding).attr("height",s.height+2*t().state.padding).attr("rx",t().state.radius),g},j=(e,i)=>{const g=function(o,f,b){const m=o.append("tspan").attr("x",2*t().state.padding).text(f);b||m.attr("dy",t().state.textHeight)},s=e.append("text").attr("x",2*t().state.padding).attr("y",t().state.textHeight+1.3*t().state.padding).attr("font-size",t().state.fontSize).attr("class","state-title").text(i.descriptions[0]).node().getBBox(),d=s.height,h=e.append("text").attr("x",t().state.padding).attr("y",d+t().state.padding*.4+t().state.dividerMargin+t().state.textHeight).attr("class","state-description");let l=!0,a=!0;i.descriptions.forEach(function(o){l||(g(h,o,a),a=!1),l=!1});const n=e.append("line").attr("x1",t().state.padding).attr("y1",t().state.padding+d+t().state.dividerMargin/2).attr("y2",t().state.padding+d+t().state.dividerMargin/2).attr("class","descr-divider"),x=h.node().getBBox(),c=Math.max(x.width,s.width);return n.attr("x2",c+3*t().state.padding),e.insert("rect",":first-child").attr("x",t().state.padding).attr("y",t().state.padding).attr("width",c+2*t().state.padding).attr("height",x.height+d+2*t().state.padding).attr("rx",t().state.radius),e},J=(e,i,g)=>{const s=t().state.padding,d=2*t().state.padding,h=e.node().getBBox(),l=h.width,a=h.x,n=e.append("text").attr("x",0).attr("y",t().state.titleShift).attr("font-size",t().state.fontSize).attr("class","state-title").text(i.id),x=n.node().getBBox().width+d;let c=Math.max(x,l);c===l&&(c=c+d);let o;const f=e.node().getBBox();i.doc,o=a-s,x>l&&(o=(l-c)/2+s),Math.abs(a-f.x)<s&&x>l&&(o=a-(x-l)/2);const b=1-t().state.textHeight;return e.insert("rect",":first-child").attr("x",o).attr("y",b).attr("class",g?"alt-composit":"composit").attr("width",c).attr("height",f.height+t().state.textHeight+t().state.titleShift+1).attr("rx","0"),n.attr("x",o+s),x<=l&&n.attr("x",a+(c-d)/2-x/2+s),e.insert("rect",":first-child").attr("x",o).attr("y",t().state.titleShift-t().state.textHeight-t().state.padding).attr("width",c).attr("height",t().state.textHeight*3).attr("rx",t().state.radius),e.insert("rect",":first-child").attr("x",o).attr("y",t().state.titleShift-t().state.textHeight-t().state.padding).attr("width",c).attr("height",f.height+3+2*t().state.textHeight).attr("rx",t().state.radius),e},Z=e=>(e.append("circle").attr("class","end-state-outer").attr("r",t().state.sizeUnit+t().state.miniPadding).attr("cx",t().state.padding+t().state.sizeUnit+t().state.miniPadding).attr("cy",t().state.padding+t().state.sizeUnit+t().state.miniPadding),e.append("circle").attr("class","end-state-inner").attr("r",t().state.sizeUnit).attr("cx",t().state.padding+t().state.sizeUnit+2).attr("cy",t().state.padding+t().state.sizeUnit+2)),$=(e,i)=>{let g=t().state.forkWidth,s=t().state.forkHeight;if(i.parentId){let d=g;g=s,s=d}return e.append("rect").style("stroke","black").style("fill","black").attr("width",g).attr("height",s).attr("x",t().state.padding).attr("y",t().state.padding)},F=(e,i,g,s)=>{let d=0;const h=s.append("text");h.style("text-anchor","start"),h.attr("class","noteText");let l=e.replace(/\r\n/g,"<br/>");l=l.replace(/\n/g,"<br/>");const a=l.split(v.lineBreakRegex);let n=1.25*t().state.noteMargin;for(const x of a){const c=x.trim();if(c.length>0){const o=h.append("tspan");if(o.text(c),n===0){const f=o.node().getBBox();n+=f.height}d+=n,o.attr("x",i+t().state.noteMargin),o.attr("y",g+d+1.25*t().state.noteMargin)}}return{textWidth:h.node().getBBox().width,textHeight:d}},X=(e,i)=>{i.attr("class","state-note");const g=i.append("rect").attr("x",0).attr("y",t().state.padding),s=i.append("g"),{textWidth:d,textHeight:h}=F(e,0,0,s);return g.attr("height",h+2*t().state.noteMargin),g.attr("width",d+t().state.noteMargin*2),g},H=function(e,i){const g=i.id,s={id:g,label:i.id,width:0,height:0},d=e.append("g").attr("id",g).attr("class","stateGroup");i.type==="start"&&C(d),i.type==="end"&&Z(d),(i.type==="fork"||i.type==="join")&&$(d,i),i.type==="note"&&X(i.note.text,d),i.type==="divider"&&W(d),i.type==="default"&&i.descriptions.length===0&&Y(d,i),i.type==="default"&&i.descriptions.length>0&&j(d,i);const h=d.node().getBBox();return s.width=h.width+2*t().state.padding,s.height=h.height+2*t().state.padding,s};let A=0;const q=function(e,i,g){const s=function(n){switch(n){case N.relationType.AGGREGATION:return"aggregation";case N.relationType.EXTENSION:return"extension";case N.relationType.COMPOSITION:return"composition";case N.relationType.DEPENDENCY:return"dependency"}};i.points=i.points.filter(n=>!Number.isNaN(n.y));const d=i.points,h=I().x(function(n){return n.x}).y(function(n){return n.y}).curve(R),l=e.append("path").attr("d",h(d)).attr("id","edge"+A).attr("class","transition");let a="";if(t().state.arrowMarkerAbsolute&&(a=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search,a=a.replace(/\(/g,"\\("),a=a.replace(/\)/g,"\\)")),l.attr("marker-end","url("+a+"#"+s(N.relationType.DEPENDENCY)+"End)"),g.title!==void 0){const n=e.append("g").attr("class","stateLabel"),{x,y:c}=O.calcLabelPosition(i.points),o=v.getRows(g.title);let f=0;const b=[];let m=0,M=0;for(let u=0;u<=o.length;u++){const p=n.append("text").attr("text-anchor","middle").text(o[u]).attr("x",x).attr("y",c+f),y=p.node().getBBox();m=Math.max(m,y.width),M=Math.min(M,y.x),k.info(y.x,x,c+f),f===0&&(f=p.node().getBBox().height,k.info("Title height",f,c)),b.push(p)}let E=f*o.length;if(o.length>1){const u=(o.length-1)*f*.5;b.forEach((p,y)=>p.attr("y",c+y*f-u)),E=f*o.length}const r=n.node().getBBox();n.insert("rect",":first-child").attr("class","box").attr("x",x-m/2-t().state.padding/2).attr("y",c-E/2-t().state.padding/2-3.5).attr("width",m+t().state.padding).attr("height",E+t().state.padding),k.info(r)}A++};let w;const z={},Q=function(){},_=function(e){e.append("defs").append("marker").attr("id","dependencyEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 19,7 L9,13 L14,7 L9,1 Z")},K=function(e,i,g,s){w=t().state;const d=t().securityLevel;let h;d==="sandbox"&&(h=S("#i"+i));const l=d==="sandbox"?S(h.nodes()[0].contentDocument.body):S("body"),a=d==="sandbox"?h.nodes()[0].contentDocument:document;k.debug("Rendering diagram "+e);const n=l.select(`[id='${i}']`);_(n);const x=s.db.getRootDoc();D(x,n,void 0,!1,l,a,s);const c=w.padding,o=n.node().getBBox(),f=o.width+c*2,b=o.height+c*2,m=f*1.75;L(n,b,m,w.useMaxWidth),n.attr("viewBox",`${o.x-w.padding}  ${o.y-w.padding} `+f+" "+b)},V=e=>e?e.length*w.fontSizeFactor:1,D=(e,i,g,s,d,h,l)=>{const a=new P({compound:!0,multigraph:!0});let n,x=!0;for(n=0;n<e.length;n++)if(e[n].stmt==="relation"){x=!1;break}g?a.setGraph({rankdir:"LR",multigraph:!0,compound:!0,ranker:"tight-tree",ranksep:x?1:w.edgeLengthFactor,nodeSep:x?1:50,isMultiGraph:!0}):a.setGraph({rankdir:"TB",multigraph:!0,compound:!0,ranksep:x?1:w.edgeLengthFactor,nodeSep:x?1:50,ranker:"tight-tree",isMultiGraph:!0}),a.setDefaultEdgeLabel(function(){return{}}),l.db.extract(e);const c=l.db.getStates(),o=l.db.getRelations(),f=Object.keys(c);for(const r of f){const u=c[r];g&&(u.parentId=g);let p;if(u.doc){let y=i.append("g").attr("id",u.id).attr("class","stateGroup");p=D(u.doc,y,u.id,!s,d,h,l);{y=J(y,u,s);let B=y.node().getBBox();p.width=B.width,p.height=B.height+w.padding/2,z[u.id]={y:w.compositTitleSize}}}else p=H(i,u);if(u.note){const y={descriptions:[],id:u.id+"-note",note:u.note,type:"note"},B=H(i,y);u.note.position==="left of"?(a.setNode(p.id+"-note",B),a.setNode(p.id,p)):(a.setNode(p.id,p),a.setNode(p.id+"-note",B)),a.setParent(p.id,p.id+"-group"),a.setParent(p.id+"-note",p.id+"-group")}else a.setNode(p.id,p)}k.debug("Count=",a.nodeCount(),a);let b=0;o.forEach(function(r){b++,k.debug("Setting edge",r),a.setEdge(r.id1,r.id2,{relation:r,width:V(r.title),height:w.labelHeight*v.getRows(r.title).length,labelpos:"c"},"id"+b)}),U(a),k.debug("Graph after layout",a.nodes());const m=i.node();a.nodes().forEach(function(r){r!==void 0&&a.node(r)!==void 0?(k.warn("Node "+r+": "+JSON.stringify(a.node(r))),d.select("#"+m.id+" #"+r).attr("transform","translate("+(a.node(r).x-a.node(r).width/2)+","+(a.node(r).y+(z[r]?z[r].y:0)-a.node(r).height/2)+" )"),d.select("#"+m.id+" #"+r).attr("data-x-shift",a.node(r).x-a.node(r).width/2),h.querySelectorAll("#"+m.id+" #"+r+" .divider").forEach(u=>{const p=u.parentElement;let y=0,B=0;p&&(p.parentElement&&(y=p.parentElement.getBBox().width),B=parseInt(p.getAttribute("data-x-shift"),10),Number.isNaN(B)&&(B=0)),u.setAttribute("x1",0-B+8),u.setAttribute("x2",y-B-8)})):k.debug("No Node "+r+": "+JSON.stringify(a.node(r)))});let M=m.getBBox();a.edges().forEach(function(r){r!==void 0&&a.edge(r)!==void 0&&(k.debug("Edge "+r.v+" -> "+r.w+": "+JSON.stringify(a.edge(r))),q(i,a.edge(r),a.edge(r).relation))}),M=m.getBBox();const E={id:g||"root",label:g||"root",width:0,height:0};return E.width=M.width+2*w.padding,E.height=M.height+2*w.padding,k.debug("Doc rendered",E,a),E},tt={setConf:Q,draw:K},ct={parser:T,db:N,renderer:tt,styles:G,init:e=>{e.state||(e.state={}),e.state.arrowMarkerAbsolute=e.arrowMarkerAbsolute,N.clear()}};export{ct as diagram};