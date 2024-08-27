var d=Object.defineProperty;var h=(o,e,t)=>e in o?d(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var r=(o,e,t)=>h(o,typeof e!="symbol"?e+"":e,t);import{V as v,c as _,G as p,M as g,S as C,b as m,N as f,D as b}from"./useInitAll-CZsFa0QU.js";const w=`  
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
`,D=(o,e,t)=>new C({vertexShader:w,fragmentShader:M,uniforms:{u_time:{value:0},uRadius:{value:o},u_centerColor:{value:new m(e)},u_edgeColor:{value:new m(t)}},blending:f,transparent:!0,depthWrite:!1,side:b}),j={radius:50,centerColor:"red",edgeColor:"#F56C6C",circleNum:3,position:new v(0,0,0),speed:1.5};class A{constructor(e,t){r(this,"name","Wavelet3DObject");r(this,"scene");r(this,"options");r(this,"materials",[]);r(this,"geometry");r(this,"object3D");r(this,"animationId");this.scene=e,this.options={...j,...t}}create3DObject(){const{radius:e,centerColor:t,edgeColor:s,circleNum:l,position:c}=this.options;this.geometry=new _(e,e,1,Math.PI*2),this.object3D=new p;for(let a=0;a<l;a++){const i=D(e,t,s);this.materials.push(i);const n=new g(this.geometry,i);this.object3D.add(n),n.position.copy(c),n.rotation.x=-Math.PI/2}return this.object3D}addToScene(){const e=this.create3DObject();this.startAnimation(performance.now()),this.scene.add(e)}removeFromScene(){}startAnimation(e){var i;const{circleNum:t,speed:s}=this.options,c=(performance.now()-e)*.001,a=1/t;(i=this.materials)==null||i.forEach((n,u)=>{n.uniforms.u_time.value=Math.sin((c/s+a*u)%1*Math.PI*.5)}),this.animationId=requestAnimationFrame(()=>this.startAnimation(e))}stopAnimation(){if(!this.animationId){console.error(`${this.name}未开启动画，请检查`);return}cancelAnimationFrame(this.animationId)}}export{A as W};
