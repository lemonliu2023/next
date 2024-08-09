var M=Object.defineProperty;var b=(n,e,t)=>e in n?M(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var r=(n,e,t)=>b(n,typeof e!="symbol"?e+"":e,t);import{j as p}from"./index-CcS5Ukqh.js";import{V as s,G as j,M as x,D as d,S as g,a as y,P as O,u as U}from"./useInitAll-Dhfga3n5.js";import{i as T}from"./index-BbRv-29c.js";import{L as S,a as D,b as I}from"./LineSegments2-CZm7TIPw.js";const H={color:"#ff4d4f",width:100,height:100,position:new s(0,0,0),speed:2,baseOpacity:.5,offset:10};class F{constructor(e,t){r(this,"name","RisePlane3DObject");r(this,"scene");r(this,"options");r(this,"material");r(this,"material1");r(this,"material2");r(this,"geometry");r(this,"object3D");r(this,"animationId");if(this.scene=e,this.options={...H,...t},!T(this.options.position)){console.error(`${this.name}位置参数错误，请检查`);return}}create3DObject(){const e=new j,{width:t,height:o,offset:i}=this.options,a=this.createGeometry(t,o),l=this.createGeometry(t+i*2,o),c=this.createSmallSquareMaterial();this.material=c;const m=this.createMeshMaterial();this.material1=m;const h=[new s(t/2,0,0),new s(-t/2,0,0),new s(0,0,-o/2),new s(0,0,o/2)],f=[new s(t/2+i,0,0),new s(-t/2-i,0,0),new s(0,0,-o/2-i),new s(0,0,o/2+i)];h.forEach(v=>{const u=new x(a,c);u.position.copy(v),v.x&&u.rotateY(Math.PI/2),e.add(u)});const _=new S;_.setPositions([50,100,50,50,100,-50,-50,100,-50,-50,100,50,50,100,50]);const w=new D({color:"#ff4d4f",linewidth:4,transparent:!0,depthTest:!1,side:d}),P=new I(_,w);return f.forEach(v=>{const u=new x(l,m);u.position.copy(v),v.x&&u.rotateY(Math.PI/2),e.add(u)}),setTimeout(()=>{e.add(P)},1e3),e}addToScene(){const e=this.create3DObject();console.log(e,"object3D"),this.startAnimation(performance.now()),this.scene.add(e)}remove(){var e,t;this.scene.remove(this.object3D),(e=this.geometry)==null||e.dispose(),(t=this.material)==null||t.dispose(),this.stopAnimation()}startAnimation(e){if(!e||!this.material){console.error(`${this.name}动画开始依赖的动画开始时间或材质缺失，请检查`);return}const t=performance.now(),{height:o,speed:i}=this.options,a=(t-e)*.001,l=Math.sin((a*2/i-.5)*Math.PI)*.5+.5,c=l*o;a>1?this.material.uniforms.u_height.value=o:this.material.uniforms.u_height.value=c,this.material.uniforms.u_moveTime.value=a,a<1?this.material1.uniforms.u_height.value=0:a>1&&a<2?this.material1.uniforms.u_height.value=o-c:this.material1.uniforms.u_height.value=o,this.material1.uniforms.u_moveTime.value=l,this.animationId=requestAnimationFrame(()=>this.startAnimation(e))}stopAnimation(){if(!this.animationId){console.error(`${this.name}未开启动画，请检查`);return}cancelAnimationFrame(this.animationId)}createPlaneMaterial(){const e=`
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
`,{height:o,color:i,baseOpacity:a}=this.options;return new g({uniforms:{u_height:{value:0},u_color:{value:new y(i)},u_speed:{value:1},u_maxHeight:{value:o},u_baseOpacity:{value:a}},transparent:!0,depthWrite:!1,side:d,vertexShader:e,fragmentShader:t})}createMeshMaterial(){const e=`
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
uniform float u_moveTime;
varying vec2 vUv;

void main() {
    for(int i = 0; i < 10; i++) {
      float s = smoothstep(float(i) / 10.0, float(i) / 10.0 + 0.005, vUv.x);
      if(s > 0.0  && s < 1.0) {
        gl_FragColor = vec4(u_color, 0.3 + (1.0 - u_moveTime) * 0.7);
      }
      float p = smoothstep(float(i) / 10.0, float(i) / 10.0 + 0.005, vUv.y);
      if(p > 0.0  && p < 1.0) {
        gl_FragColor = vec4(u_color, 0.3 + (1.0 - u_moveTime) * 0.7);
      }
    }
    if(vUv.y >= 1.0 - 0.005) {
      gl_FragColor = vec4(u_color, 0.3 + (1.0 - u_moveTime) * 0.7);
    }
}
`,{height:o,color:i,baseOpacity:a}=this.options;return new g({uniforms:{u_height:{value:o},u_color:{value:new y(i)},u_speed:{value:1},u_maxHeight:{value:o},u_baseOpacity:{value:a},u_moveTime:{value:0}},transparent:!0,depthWrite:!1,side:d,vertexShader:e,fragmentShader:t})}createSmallSquareMaterial(){const e=()=>{let c="";for(let m=0;m<80;m++){const h=Math.random(),f=Math.random(),_=Math.random();c+=`if(vUv.x > ${h} && vUv.x < ${h} + 0.06 && vUv.y > ${f} && vUv.y < ${f} + 0.06 && u_moveTime > 1.0) {
        gl_FragColor = vec4(u_color, 0.4 + (0.5+sin(3.0*u_pi*${_}+u_moveTime*10.0)/2.0)*0.3);
        return;
      };`}return c},t=`
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
`,o=` 
uniform vec3 u_color;
uniform float u_baseOpacity;
uniform float u_moveTime;
varying vec2 vUv;
uniform float u_pi;

void main() {
      ${e()}
      gl_FragColor = vec4(u_color, (1.0 - vUv.y) * u_baseOpacity);
}
`,{height:i,color:a,baseOpacity:l}=this.options;return new g({uniforms:{u_height:{value:i},u_color:{value:new y(a)},u_speed:{value:1},u_maxHeight:{value:i},u_baseOpacity:{value:l},u_moveTime:{value:0},u_pi:{value:Math.PI}},transparent:!0,depthWrite:!1,side:d,vertexShader:t,fragmentShader:o})}createGeometry(e,t){const o=new O(e,t,e*2);return o.translate(0,t/2,0),o}}const R=()=>{const{sceneRef:n}=U("threejs-examples");return React.useEffect(()=>{new F(n.current).addToScene()},[n]),p.jsx(p.Fragment,{children:p.jsx("div",{className:"threejs-examples-main",children:p.jsx("div",{id:"threejs-examples"})})})};export{R as default};
