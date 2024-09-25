var h=Object.defineProperty;var m=(i,e,t)=>e in i?h(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var o=(i,e,t)=>m(i,typeof e!="symbol"?e+"":e,t);import{j as s}from"./index-BmhN_VlC.js";import{V as l,P as u,S as p,b as v,D as d,M as f,u as g}from"./useInitAll-CZsFa0QU.js";import{i as j}from"./index-DcSVnzJh.js";const b=`
uniform vec3 u_color;
varying vec2 vUv;
uniform float u_height;
uniform float u_maxHeight;

void main() {
    vec3 vPosition = position;
    vUv = uv;
    vPosition.y = vPosition.y * u_height / u_maxHeight;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(vPosition, 1.0);
}
`,x=` 
uniform vec3 u_color;
uniform float u_baseOpacity;
varying vec2 vUv;

void main() {
    gl_FragColor = vec4(u_color, (1.0 - vUv.y) * u_baseOpacity);
}
`,y={color:"red",width:40,height:40,position:new l(0,0,0),speed:2,baseOpacity:.5};class _{constructor(e,t){o(this,"name","RisePlane3DObject");o(this,"scene");o(this,"options");o(this,"material");o(this,"geometry");o(this,"object3D");o(this,"animationId");if(this.scene=e,this.options={...y,...t},!j(this.options.position)){console.error(`${this.name}位置参数错误，请检查`);return}}create3DObject(){const{width:e,height:t,color:n,position:a,baseOpacity:r}=this.options;return this.geometry=new u(e,t),this.geometry.translate(0,t/2,0),this.material=new p({uniforms:{u_height:{value:0},u_color:{value:new v(n)},u_speed:{value:1},u_maxHeight:{value:t},u_baseOpacity:{value:r}},transparent:!0,depthWrite:!1,side:d,vertexShader:b,fragmentShader:x}),this.object3D=new f(this.geometry,this.material),this.object3D.position.copy(a),this.object3D}addToScene(){const e=this.create3DObject();this.startAnimation(performance.now()),this.scene.add(e)}remove(){var e,t;this.scene.remove(this.object3D),(e=this.geometry)==null||e.dispose(),(t=this.material)==null||t.dispose(),this.stopAnimation()}startAnimation(e){if(!e||!this.material){console.error(`${this.name}动画开始依赖的动画开始时间或材质缺失，请检查`);return}const t=performance.now(),{height:n,speed:a}=this.options,r=(t-e)*.001,c=(Math.sin((r*2/a-.5)*Math.PI)*.5+.5)*n;this.material.uniforms.u_height.value=c,this.animationId=requestAnimationFrame(()=>this.startAnimation(e))}stopAnimation(){if(!this.animationId){console.error(`${this.name}未开启动画，请检查`);return}cancelAnimationFrame(this.animationId)}}const I=()=>{const{sceneRef:i}=g("threejs-examples");return React.useEffect(()=>{new _(i.current).addToScene()},[i]),s.jsx(s.Fragment,{children:s.jsx("div",{className:"threejs-examples-main",children:s.jsx("div",{id:"threejs-examples"})})})};export{I as default};
