var m=Object.defineProperty;var u=(n,e,s)=>e in n?m(n,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[e]=s;var t=(n,e,s)=>u(n,typeof e!="symbol"?e+"":e,s);import{j as h}from"./index-CcS5Ukqh.js";import{L as p,V as a,G as w,u as L}from"./useInitAll-Dhfga3n5.js";import{b as d}from"./points-C26p6jvW.js";import{G as P,i as g}from"./index-D8I6NSTc.js";import{t as c}from"./index-BbRv-29c.js";class k{constructor(e,s){t(this,"name");t(this,"scene");t(this,"options");t(this,"mesh");t(this,"material");t(this,"geometry");t(this,"animationId");t(this,"points",[]);t(this,"cur",0);t(this,"brokenCur",0);t(this,"glowPlaneLineMeshInsList",[]);this.name="GlowBrokenGlowPlaneLineMesh",this.scene=e;const i={points:[],glowSpeed:1,glowPlaneLineOptions:g};this.options=Object.assign(i,s)}createPoints(){const{points:e}=this.options,s=e[this.brokenCur],i=e[this.brokenCur+1],o=c(s),r=c(i);console.log(o,r);const l=new p(new a(o.x,o.y,o.z),new a(r.x,r.y,r.z));this.points=l.getPoints(o.distanceTo(r))}createGlowPlaneLineMesh(){return new P(this.scene,{start:this.points[0],end:this.points[this.cur]}).createMeshAndStartAnimation()}addToScene(){var e;this.createPoints(),this.glowPlaneLineMeshInsList[this.brokenCur]=this.createGlowPlaneLineMesh(),this.mesh=new w,(e=this.mesh)==null||e.add(this.glowPlaneLineMeshInsList[this.brokenCur].mesh),this.startAnimation(performance.now()),this.scene.add(this.mesh)}startAnimation(e){var s,i,o,r;if((s=this.glowPlaneLineMeshInsList[this.brokenCur])==null||s.destroy(),(o=this.mesh)==null||o.remove((i=this.glowPlaneLineMeshInsList[this.brokenCur])==null?void 0:i.mesh),this.glowPlaneLineMeshInsList[this.brokenCur]=this.createGlowPlaneLineMesh(),(r=this.mesh)==null||r.add(this.glowPlaneLineMeshInsList[this.brokenCur].mesh),this.cur+=3,this.cur>=this.points.length-1){if(console.log(this.cur,this.points.length-1,this.brokenCur,"this.cur, this.points.length - 1"),this.brokenCur>=this.options.points.length-2)return;this.brokenCur+=1,this.cur=0,this.createPoints()}this.animationId=requestAnimationFrame(()=>this.startAnimation(e))}stopAnimation(){}}const I=()=>{const n=React.useRef(),e=d.map(i=>[i.x,i.y,i.z]),{sceneRef:s}=L("threejs-examples");return React.useEffect(()=>{n.current=new k(s.current,{points:e}),n.current.addToScene()},[s,n,e]),h.jsx(h.Fragment,{children:h.jsx("div",{className:"threejs-examples-main",children:h.jsx("div",{id:"threejs-examples"})})})};export{I as default};
