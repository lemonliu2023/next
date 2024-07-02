import{D as K,v as L,A as Q,E as j,t as U,I as F,_ as H,C as X}from"./styles-d20c7d72-B3iOddNk-CdHuoggH.js";import{Z as tt}from"./graph-Cx5EwEy7-Dor-k3re.js";import{l as p,c as S,h as A,y as et,i as st,j as B}from"./mermaid.core-CrY0-6Yn-BW2-Cl-3.js";import{b as ot}from"./index-fc10efb0-CLMuuZ8X-4qNsVTZV.js";import"./index-DWgWNSPs.js";import"./layout-ITPnmHON-BqC6BRwV.js";import"./step-CFLd_UlD-CAA9ZoWn.js";import"./clone-Cyudgv5A-BDQbTyTG.js";import"./edges-d32062c0-BiaolFre-BWr52-L3.js";import"./createText-6b48ae7d-Brm7TOmQ-BJhbozus.js";import"./line-C3s158m--QyAb1aCS.js";import"./array-CqVTtuYm-C3YJfAyO.js";import"./path-H8vhG2aR-T6_P2E4R.js";const w="rect",k="rectWithTitle",it="start",at="end",rt="divider",nt="roundedWithTitle",dt="note",lt="noteGroup",u="statediagram",ct="state",pt=`${u}-${ct}`,z="transition",bt="note",gt="note-edge",ht=`${z} ${gt}`,ut=`${u}-${bt}`,yt="cluster",mt=`${u}-${yt}`,ft="cluster-alt",$t=`${u}-${ft}`,P="parent",W="note",xt="state",C="----",wt=`${C}${W}`,M=`${C}${P}`,G="fill:none",O="fill: #333",q="c",Y="text",Z="normal";let T={},c=0;const Tt=function(t){const i=Object.keys(t);for(const e of i)t[e]},St=function(t,i){return i.db.extract(i.db.getRootDocV2()),i.db.getClasses()};function Dt(t){return t==null?"":t.classes?t.classes.join(" "):""}function v(t="",i=0,e="",a=C){const r=e!==null&&e.length>0?`${a}${e}`:"";return`${xt}-${t}${r}-${i}`}const x=(t,i,e,a,r,n)=>{const s=e.id,y=Dt(a[s]);if(s!=="root"){let g=w;e.start===!0&&(g=it),e.start===!1&&(g=at),e.type!==j&&(g=e.type),T[s]||(T[s]={id:s,shape:g,description:B.sanitizeText(s,S()),classes:`${y} ${pt}`});const o=T[s];e.description&&(Array.isArray(o.description)?(o.shape=k,o.description.push(e.description)):o.description.length>0?(o.shape=k,o.description===s?o.description=[e.description]:o.description=[o.description,e.description]):(o.shape=w,o.description=e.description),o.description=B.sanitizeTextOrArray(o.description,S())),o.description.length===1&&o.shape===k&&(o.shape=w),!o.type&&e.doc&&(p.info("Setting cluster for ",s,E(e)),o.type="group",o.dir=E(e),o.shape=e.type===U?rt:nt,o.classes=o.classes+" "+mt+" "+(n?$t:""));const h={labelStyle:"",shape:o.shape,labelText:o.description,classes:o.classes,style:"",id:s,dir:o.dir,domId:v(s,c),type:o.type,padding:15};if(h.centerLabel=!0,e.note){const d={labelStyle:"",shape:dt,labelText:e.note.text,classes:ut,style:"",id:s+wt+"-"+c,domId:v(s,c,W),type:o.type,padding:15},l={labelStyle:"",shape:lt,labelText:e.note.text,classes:o.classes,style:"",id:s+M,domId:v(s,c,P),type:"group",padding:0};c++;const m=s+M;t.setNode(m,l),t.setNode(d.id,d),t.setNode(s,h),t.setParent(s,m),t.setParent(d.id,m);let b=s,f=d.id;e.note.position==="left of"&&(b=d.id,f=s),t.setEdge(b,f,{arrowhead:"none",arrowType:"",style:G,labelStyle:"",classes:ht,arrowheadStyle:O,labelpos:q,labelType:Y,thickness:Z})}else t.setNode(s,h)}i&&i.id!=="root"&&(p.trace("Setting node ",s," to be child of its parent ",i.id),t.setParent(s,i.id)),e.doc&&(p.trace("Adding nodes children "),At(t,e,e.doc,a,r,!n))},At=(t,i,e,a,r,n)=>{p.trace("items",e),e.forEach(s=>{switch(s.stmt){case H:x(t,i,s,a,r,n);break;case j:x(t,i,s,a,r,n);break;case F:{x(t,i,s.state1,a,r,n),x(t,i,s.state2,a,r,n);const y={id:"edge"+c,arrowhead:"normal",arrowTypeEnd:"arrow_barb",style:G,labelStyle:"",label:B.sanitizeText(s.description,S()),arrowheadStyle:O,labelpos:q,labelType:Y,thickness:Z,classes:z};t.setEdge(s.state1.id,s.state2.id,y,c),c++}break}})},E=(t,i=X)=>{let e=i;if(t.doc)for(let a=0;a<t.doc.length;a++){const r=t.doc[a];r.stmt==="dir"&&(e=r.value)}return e},kt=async function(t,i,e,a){p.info("Drawing state diagram (v2)",i),T={},a.db.getDirection();const{securityLevel:r,state:n}=S(),s=n.nodeSpacing||50,y=n.rankSpacing||50;p.info(a.db.getRootDocV2()),a.db.extract(a.db.getRootDocV2()),p.info(a.db.getRootDocV2());const g=a.db.getStates(),o=new tt({multigraph:!0,compound:!0}).setGraph({rankdir:E(a.db.getRootDocV2()),nodesep:s,ranksep:y,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}});x(o,void 0,a.db.getRootDocV2(),g,a.db,!0);let h;r==="sandbox"&&(h=A("#i"+i));const d=r==="sandbox"?A(h.nodes()[0].contentDocument.body):A("body"),l=d.select(`[id="${i}"]`),m=d.select("#"+i+" g");await ot(m,o,["barb"],u,i);const b=8;et.insertTitle(l,"statediagramTitleText",n.titleTopMargin,a.db.getDiagramTitle());const f=l.node().getBBox(),R=f.width+b*2,V=f.height+b*2;l.attr("class",u);const N=l.node().getBBox();st(l,V,R,n.useMaxWidth);const _=`${N.x-b} ${N.y-b} ${R} ${V}`;p.debug(`viewBox ${_}`),l.attr("viewBox",_);const J=document.querySelectorAll('[id="'+i+'"] .edgeLabel .label');for(const D of J){const I=D.getBBox(),$=document.createElementNS("http://www.w3.org/2000/svg",w);$.setAttribute("rx",0),$.setAttribute("ry",0),$.setAttribute("width",I.width),$.setAttribute("height",I.height),D.insertBefore($,D.firstChild)}},vt={setConf:Tt,getClasses:St,draw:kt},Wt={parser:K,db:L,renderer:vt,styles:Q,init:t=>{t.state||(t.state={}),t.state.arrowMarkerAbsolute=t.arrowMarkerAbsolute,L.clear()}};export{Wt as diagram};