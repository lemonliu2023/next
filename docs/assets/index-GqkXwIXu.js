var l=Object.defineProperty;var u=(o,e,t)=>e in o?l(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var i=(o,e,t)=>u(o,typeof e!="symbol"?e+"":e,t);import{a as v,S as p,b as g,D as d,M as y}from"./useInitAll-CZsFa0QU.js";import{t as f}from"./index-DcSVnzJh.js";const _=`
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
`,M=` 
uniform vec3 u_color;
uniform float u_baseOpacity;
varying vec2 vUv;

void main() {
    /*
      // 只使用 片元着色器
      float heightRate = u_height / u_maxHeight;
      float stepOpacity = mix(1.0, 0.0, step(heightRate, vUv.y));
      float opacity = 1.0 - vUv.y / heightRate * stepOpacity;
      gl_FragColor = vec4(u_color, opacity* u_baseOpacity);
    */
    gl_FragColor = vec4(u_color, (1.0 - vUv.y) * u_baseOpacity);
}
`;class w{constructor(e,t){i(this,"name","Wall3DObject");i(this,"scene");i(this,"options");i(this,"material");i(this,"geometry");i(this,"mesh");i(this,"animationId");this.scene=e;const s={color:"red",radius:20,height:40,position:[0,0,0],moveRate:.7,speed:2,baseOpacity:.5};this.options={...s,...t}}createMesh(){const{radius:e,height:t,color:s,position:a,baseOpacity:r}=this.options;this.geometry=new v(e,e,t,32,1,!0),this.geometry.translate(0,t/2,0),this.material=new p({uniforms:{u_height:{value:0},u_color:{value:new g(s)},u_speed:{value:1},u_maxHeight:{value:t},u_baseOpacity:{value:r}},transparent:!0,depthWrite:!1,side:d,vertexShader:_,fragmentShader:M}),this.mesh=new y(this.geometry,this.material),this.mesh.position.copy(f(a))}addToScene(){if(this.createMesh(),!this.mesh){console.error(`${this.name}未成功创建，请检查`);return}this.startAnimation(performance.now()),this.scene.add(this.mesh)}remove(){var e,t;this.scene.remove(this.mesh),(e=this.geometry)==null||e.dispose(),(t=this.material)==null||t.dispose(),this.stopAnimation()}startAnimation(e){if(!e||!this.material){console.error(`${this.name}动画开始依赖的动画开始时间或材质缺失，请检查`);return}const t=performance.now(),{moveRate:s,height:a,speed:r}=this.options,n=(1-s)*a,h=(t-e)*.001,m=Math.sin((h*2/r-.5)*Math.PI)*.5+.5,c=n+m*(s*a);this.material.uniforms.u_height.value=c,this.animationId=requestAnimationFrame(()=>this.startAnimation(e))}stopAnimation(){if(!this.animationId){console.error(`${this.name}未开启动画，请检查`);return}cancelAnimationFrame(this.animationId)}}export{w as W};
