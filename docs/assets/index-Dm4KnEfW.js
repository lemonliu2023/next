var b=Object.defineProperty;var M=(s,e,t)=>e in s?b(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var n=(s,e,t)=>M(s,typeof e!="symbol"?e+"":e,t);import{r as j,Y as p}from"./index-D3khomyw.js";import{V as r,G as O,M as x,D as d,S as g,a as _,P as U,u as S}from"./useInitAll-CbSIb_cJ.js";import{i as D}from"./index-DdmoGPpG.js";import{L as I,a as H,b as A}from"./LineSegments2-1G8MThKC.js";const F={color:"red",width:100,height:100,position:new r(0,0,0),speed:2,baseOpacity:.5,offset:10};class ${constructor(e,t){n(this,"name","RisePlane3DObject");n(this,"scene");n(this,"options");n(this,"material");n(this,"material1");n(this,"material2");n(this,"geometry");n(this,"object3D");n(this,"animationId");if(this.scene=e,this.options={...F,...t},!D(this.options.position)){console.error(`${this.name}位置参数错误，请检查`);return}}create3DObject(){const e=new O,{width:t,height:o,offset:i}=this.options,a=this.createGeometry(t,o),v=this.createGeometry(t+i*2,o),c=this.createSmallSquareMaterial();this.material=c;const u=this.createMeshMaterial();this.material1=u;const h=[new r(t/2,0,0),new r(-t/2,0,0),new r(0,0,-o/2),new r(0,0,o/2)],f=[new r(t/2+i,0,0),new r(-t/2-i,0,0),new r(0,0,-o/2-i),new r(0,0,o/2+i)];h.forEach(m=>{const l=new x(a,c);l.position.copy(m),m.x&&l.rotateY(Math.PI/2),e.add(l)});const y=new I;y.setPositions([50,100,50,50,100,-50,-50,100,-50,-50,100,50,50,100,50]);const w=new H({color:"red",linewidth:4,transparent:!0,depthTest:!1,side:d}),P=new A(y,w);return f.forEach(m=>{const l=new x(v,u);l.position.copy(m),m.x&&l.rotateY(Math.PI/2),setTimeout(()=>{e.add(l)},2e3)}),setTimeout(()=>{e.add(P)},2e3),e}addToScene(){const e=this.create3DObject();console.log(e,"object3D"),this.startAnimation(performance.now()),this.scene.add(e)}remove(){var e,t;this.scene.remove(this.object3D),(e=this.geometry)==null||e.dispose(),(t=this.material)==null||t.dispose(),this.stopAnimation()}startAnimation(e){if(!e||!this.material){console.error(`${this.name}动画开始依赖的动画开始时间或材质缺失，请检查`);return}const t=performance.now(),{height:o,speed:i}=this.options,a=(t-e)*.001,c=(Math.sin((a*2/i-.5)*Math.PI)*.5+.5)*o;a<1?this.material.uniforms.u_height.value=c:a>1&&a<2?this.material1.uniforms.u_height.value=c:cancelAnimationFrame(this.animationId),this.animationId=requestAnimationFrame(()=>this.startAnimation(e))}stopAnimation(){if(!this.animationId){console.error(`${this.name}未开启动画，请检查`);return}cancelAnimationFrame(this.animationId)}createPlaneMaterial(){const e=`
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
`,t=` 
uniform vec3 u_color;
uniform float u_baseOpacity;
varying vec2 vUv;

void main() {
    gl_FragColor = vec4(u_color, (1.0 - vUv.y) * u_baseOpacity);
}
`,{height:o,color:i,baseOpacity:a}=this.options;return new g({uniforms:{u_height:{value:0},u_color:{value:new _(i)},u_speed:{value:1},u_maxHeight:{value:o},u_baseOpacity:{value:a}},transparent:!0,depthWrite:!1,side:d,vertexShader:e,fragmentShader:t})}createMeshMaterial(){const e=`
uniform vec3 u_color;
varying vec2 vUv;
uniform float u_height;
uniform float u_maxHeight;

void main() {
    vec3 vPosition = position;
    vUv = uv;
    // vPosition.y = vPosition.y * u_height / u_maxHeight;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(vPosition, 1.0);
}
`,t=` 
uniform vec3 u_color;
uniform float u_baseOpacity;
varying vec2 vUv;

void main() {
    for(int i = 0; i < 10; i++) {
      float s = smoothstep(float(i) / 10.0, float(i) / 10.0 + 0.01, vUv.x);
      if(s > 0.0  && s < 1.0) {
        gl_FragColor = vec4(u_color, 1.0);
      }
      float p = smoothstep(float(i) / 10.0, float(i) / 10.0 + 0.01, vUv.y);
      if(p > 0.0  && p < 1.0) {
        gl_FragColor = vec4(u_color, 1.0);
      }
    }
}
`,{height:o,color:i,baseOpacity:a}=this.options;return new g({uniforms:{u_height:{value:o},u_color:{value:new _(i)},u_speed:{value:1},u_maxHeight:{value:o},u_baseOpacity:{value:a}},transparent:!0,depthWrite:!1,side:d,vertexShader:e,fragmentShader:t})}createSmallSquareMaterial(){const e=()=>{let c="";for(let u=0;u<50;u++){const h=Math.random(),f=Math.random();c+=`if(vUv.x > ${h} && vUv.x < ${h} + 0.08 && vUv.y > ${f} && vUv.y < ${f} + 0.08) {
        gl_FragColor = vec4(u_color, 1.0);
      }`}return c},t=`
uniform vec3 u_color;
varying vec2 vUv;
uniform float u_height;
uniform float u_maxHeight;

void main() {
    vec3 vPosition = position;
    vUv = uv;
    // vPosition.y = vPosition.y * u_height / u_maxHeight;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(vPosition, 1.0);
}
`;console.log(e(),"generateCode()");const o=` 
uniform vec3 u_color;
uniform float u_baseOpacity;
varying vec2 vUv;

void main() {
      ${e()}
}
`,{height:i,color:a,baseOpacity:v}=this.options;return new g({uniforms:{u_height:{value:i},u_color:{value:new _(a)},u_speed:{value:1},u_maxHeight:{value:i},u_baseOpacity:{value:v}},transparent:!0,depthWrite:!1,side:d,vertexShader:t,fragmentShader:o})}createGeometry(e,t){const o=new U(e,t,e*2);return o.translate(0,t/2,0),o}}const L=()=>{const{sceneRef:s}=S("threejs-examples");return j.useEffect(()=>{new $(s.current).addToScene()},[s]),p.jsx(p.Fragment,{children:p.jsx("div",{className:"threejs-examples-main",children:p.jsx("div",{id:"threejs-examples"})})})};export{L as default};
