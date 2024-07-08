import{j as i}from"./index-BytCle9r.js";import{C as p,S as d,d as h,D as v,c as f,V as g,u as y}from"./useInitAll-CuChwT_e.js";const _=`
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
`;function j(t={}){const{radius:o,height:e,opacity:s,color:c,position:l}=Object.assign({color:"#f00",opacity:.6,radius:20,height:2,position:[0,0,0]},t),r=new p(o,o,e,32,1,!0);r.translate(0,e/2,0);const u=new d({uniforms:{u_height:{value:e},u_speed:{value:0},u_opacity:{value:s},u_color:{value:new h(c)},time:{value:100}},transparent:!0,depthWrite:!1,side:v,vertexShader:_,fragmentShader:x}),a=new f(r,u);a.position.copy(new g(...l));const n=()=>{const m=8+Math.sin(Date.now()*.003)*5;a.scale.y=m,requestAnimationFrame(n)};return n(),a}const S=()=>{const{sceneRef:t,rendererRef:o}=y("threejs-examples");return React.useEffect(()=>{var e;(e=t.current)==null||e.add(j())},[o,t]),i.jsx(i.Fragment,{children:i.jsx("div",{className:"threejs-examples-main",children:i.jsx("div",{id:"threejs-examples"})})})};export{S as default};
