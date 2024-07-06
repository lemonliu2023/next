import{j as r}from"./index-_74sN05i.js";import{S as c,e as m,d,N as v,f as w,c as f,G as x,u as g}from"./useInitAll-BZnQvJx1.js";const p=`  
varying vec2 vUv;  

void main() {  
    vUv = uv;  
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);  
}  
`,h=`  
varying vec2 vUv;  
uniform float uTime;  
uniform vec2 uCenter;  
uniform float uRadius;  
uniform float uAmplitude;
uniform vec3 u_color;
  
void main() {  
    // 计算像素到涟漪中心的距离  
    vec2 dist = (vUv - uCenter);  
    float len = length(dist) * 2.0;  

    float circle = mod(uTime, 1.0);
    float circle2 = mod(uTime + 0.5, 1.0);

    if(len < circle) {
        gl_FragColor = vec4(1.0, .0, .0, pow((1.0 - circle + len), 5.0) * (1.0 - len));
    }
}  
`;function j(o={}){const e=Object.assign({color:"#f00",position:{x:0,y:0,z:0}},o);if(!e.position)throw new Error("请传入模型位置信息");const n=new c({vertexShader:p,fragmentShader:h,uniforms:{uTime:{value:0},uCenter:{value:new m(.5,.5)},uRadius:{value:20},uAmplitude:{value:50},u_color:{value:new d("#f00")}},blending:v,transparent:!0,depthWrite:!1}),t=new c({vertexShader:p,fragmentShader:h,uniforms:{uTime:{value:.5},uCenter:{value:new m(.5,.5)},uRadius:{value:20},uAmplitude:{value:50},u_color:{value:new d("#f00")}},blending:v,transparent:!0,depthWrite:!1}),u=new w(50,50,1,Math.PI*2),i=new f(u,n),a=new f(u,t);i.rotation.x=-Math.PI/2,i.position.copy(e.position),a.rotation.x=-Math.PI/2,a.position.copy(e.position);const s=new x;s.add(i),s.add(a);const l=()=>{n.uniforms.uTime.value+=.01,t.uniforms.uTime.value+=.01,requestAnimationFrame(l)};return l(),s}const C=()=>{const{sceneRef:o,rendererRef:e}=g("threejs-examples");return React.useEffect(()=>{var n;return(n=o.current)==null||n.add(j()),()=>{var t;(t=e.current)==null||t.dispose()}},[e,o]),r.jsx(r.Fragment,{children:r.jsx("div",{className:"threejs-examples-main",children:r.jsx("div",{id:"threejs-examples"})})})};export{C as default};
