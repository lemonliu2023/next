var h=Object.defineProperty;var v=(o,e,t)=>e in o?h(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var r=(o,e,t)=>v(o,typeof e!="symbol"?e+"":e,t);import{j as a}from"./index-CcS5Ukqh.js";import{V as p,b as _,G as g,M as f,S as C,a as u,N as j,D as b,u as w}from"./useInitAll-Dhfga3n5.js";const x=`  
varying vec2 vUv;  

void main() {  
    vUv = uv;  
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);  
}  
`,M=`  
varying vec2 vUv;  
uniform float u_time;  
uniform vec3 u_centerColor;
uniform vec3 u_edgeColor;
  
void main() {  
    // 计算像素到涟漪中心的距离  
    vec2 dist = (vUv - vec2(0.5, 0.5));  
    float len = length(dist) * 2.0;

    vec3 u_color = vec3(u_centerColor.r + (u_edgeColor.r - u_centerColor.r) * u_time, u_centerColor.g + (u_edgeColor.g - u_centerColor.g) * u_time, u_centerColor.b + (u_edgeColor.b - u_centerColor.b) * u_time);

    if(len < u_time) {
        gl_FragColor = vec4(u_color, pow((1.0 - u_time + len), 10.0) * (1.0 - len));
    }
}  
`,D=(o,e,t)=>new C({vertexShader:x,fragmentShader:M,uniforms:{u_time:{value:0},uRadius:{value:o},u_centerColor:{value:new u(e)},u_edgeColor:{value:new u(t)}},blending:j,transparent:!0,depthWrite:!1,side:b}),I={radius:50,centerColor:"red",edgeColor:"#F56C6C",circleNum:3,position:new p(0,0,0),speed:1.5};class y{constructor(e,t){r(this,"name","Wavelet3DObject");r(this,"scene");r(this,"options");r(this,"materials",[]);r(this,"geometry");r(this,"object3D");r(this,"animationId");this.scene=e,this.options={...I,...t}}create3DObject(){const{radius:e,centerColor:t,edgeColor:c,circleNum:m,position:l}=this.options;this.geometry=new _(e,e,1,Math.PI*2),this.object3D=new g;for(let s=0;s<m;s++){const n=D(e,t,c);this.materials.push(n);const i=new f(this.geometry,n);this.object3D.add(i),i.position.copy(l),i.rotation.x=-Math.PI/2}return this.object3D}addToScene(){const e=this.create3DObject();this.startAnimation(performance.now()),this.scene.add(e)}removeFromScene(){}startAnimation(e){var n;const{circleNum:t,speed:c}=this.options,l=(performance.now()-e)*.001,s=1/t;(n=this.materials)==null||n.forEach((i,d)=>{i.uniforms.u_time.value=Math.sin((l/c+s*d)%1*Math.PI*.5)}),this.animationId=requestAnimationFrame(()=>this.startAnimation(e))}stopAnimation(){if(!this.animationId){console.error(`${this.name}未开启动画，请检查`);return}cancelAnimationFrame(this.animationId)}}const N=()=>{const{sceneRef:o,rendererRef:e}=w("threejs-examples");return React.useEffect(()=>{new y(o.current).addToScene()},[e,o]),a.jsx(a.Fragment,{children:a.jsx("div",{className:"threejs-examples-main",children:a.jsx("div",{id:"threejs-examples"})})})};export{N as default};
