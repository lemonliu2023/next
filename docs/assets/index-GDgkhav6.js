import{j as s}from"./index-CcS5Ukqh.js";import{u as l}from"./useInitAll-Dhfga3n5.js";import{L as c,a as m,b as p}from"./LineSegments2-CZm7TIPw.js";import{b as d}from"./points-C26p6jvW.js";const f=t=>{const{color:e="red",lineWidth:o=20}={},r=[];d.forEach(n=>{r.push(n.x,n.y,n.z)});const i=new c;i.setPositions(r);const a=new m({color:e,linewidth:o,transparent:!0,depthTest:!1});return new p(i,a)};function w(){const{sceneRef:t}=l("threejs-examples");return React.useEffect(()=>{var e;(e=t.current)==null||e.add(f())},[t]),s.jsx(s.Fragment,{children:s.jsx("div",{className:"threejs-examples-main",children:s.jsx("div",{id:"threejs-examples"})})})}export{w as default};
