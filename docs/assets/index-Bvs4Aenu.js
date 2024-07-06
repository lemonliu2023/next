import{j as a}from"./index-_74sN05i.js";import{C as p,S as d,d as h,D as v,c as f,V as g,u as y}from"./useInitAll-BZnQvJx1.js";const _=`
uniform vec3 u_color;

uniform float time;
uniform float u_height;

varying float v_opacity;

void main() {

    vec3 vPosition = position;

    v_opacity = mix(1.0, 0.0, position.y / u_height);

    gl_Position = projectionMatrix * modelViewMatrix * vec4(vPosition, 1.0);
}
`,x=` 
uniform vec3 u_color;

varying float v_opacity;

void main() { 
    gl_FragColor = vec4(u_color, v_opacity * 0.5);
}
`;function j(o={}){const{radius:t,height:e,opacity:i,color:c,position:l}=Object.assign({color:"#f00",opacity:.6,radius:20,height:2,position:[0,0,0]},o),n=new p(t,t,e,32,1,!0);n.translate(0,e/2,0);const u=new d({uniforms:{u_height:{value:e},u_speed:{value:0},u_opacity:{value:i},u_color:{value:new h(c)},time:{value:100}},transparent:!0,depthWrite:!1,side:v,vertexShader:_,fragmentShader:x}),r=new f(n,u);r.position.copy(new g(...l));const s=()=>{const m=8+Math.sin(Date.now()*.003)*5;r.scale.y=m,requestAnimationFrame(s)};return s(),r}const S=()=>{const{sceneRef:o,rendererRef:t}=y("threejs-examples");return React.useEffect(()=>{var e;return(e=o.current)==null||e.add(j()),()=>{var i;(i=t.current)==null||i.dispose()}},[t,o]),a.jsx(a.Fragment,{children:a.jsx("div",{className:"threejs-examples-main",children:a.jsx("div",{id:"threejs-examples"})})})};export{S as default};
