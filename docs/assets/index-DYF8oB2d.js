import{j as a}from"./index-C8OqWlM5.js";import{i as d,a as R,b as l,B as f,M as h,c as p,O as w,A as x}from"./useInitAll-CwWJDqFe.js";const B=()=>{const e=React.useRef(),t=React.useRef(),r=React.useRef(),o=React.useRef();return React.useEffect(()=>{const n=document.getElementById("threejs-guide-wrapper");e.current=d(n),t.current=R(n),r.current=l();const i=new f(10,10,10),u=new h({color:"red"});new p(i,u).position.set(0,10,0),o.current=new w(t.current,e.current.domElement);const m=new x(100);r.current.add(m);const s=()=>{var c;(c=e.current)==null||c.render(r.current,t.current),requestAnimationFrame(s)};s()},[]),a.jsx("div",{className:"threejs-guide-container",children:a.jsx("div",{id:"threejs-guide-wrapper",style:{width:400,height:300}})})};export{B as default};
