var _=Object.defineProperty;var f=(o,e,t)=>e in o?_(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var i=(o,e,t)=>f(o,typeof e!="symbol"?e+"":e,t);import{S as C,a as m,D as M,V as r,P,M as A}from"./useInitAll-CbSIb_cJ.js";import{t as h}from"./index-DdmoGPpG.js";const x=(o,e,t)=>{const s=`
varying vec2 vUv;

void main() {
    vec3 vPosition = position;
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(vPosition, 1.0);
}
`,n=` 
varying vec2 vUv;
uniform float u_amplitude;
uniform vec3 u_glowColor;
uniform vec3 u_centerColor;
uniform float u_glowRate;

void main() {
    if(vUv.x < u_glowRate) {
        gl_FragColor = vec4(u_glowColor, pow(vUv.x / u_glowRate, 2.0 + u_amplitude ) * 0.6);
    } else if(vUv.x < (1.0 - u_glowRate)) {
        gl_FragColor = vec4(u_centerColor, 1.0);
    } else {
        gl_FragColor = vec4(u_glowColor, pow((1.0 - vUv.x) / u_glowRate, 2.0 + u_amplitude) * 0.6);
    }
}
`;return new C({uniforms:{u_amplitude:{value:0},u_glowColor:{value:new m(o)},u_centerColor:{value:new m(e)},u_glowRate:{value:t}},side:M,vertexShader:s,fragmentShader:n,transparent:!0})},y={start:new r(100,0,0),end:new r(0,0,100),lineWidth:10,glowRate:.4,glowColor:"red",centerColor:"#fff",speed:2};class G{constructor(e,t){i(this,"scene");i(this,"options");i(this,"name","GlowPlaneLine");i(this,"mesh");i(this,"material");i(this,"geometry");i(this,"animationId");this.name="GlowPlaneLine",this.scene=e,this.options=Object.assign(y,t)}createMesh(){const{start:e,end:t,lineWidth:s,glowColor:n,glowRate:u,centerColor:d,material:v}=this.options,l=h(e),c=h(t),w=l.distanceTo(c),g=l.clone().sub(c).normalize().dot(new r(0,0,1).normalize()),p=Math.acos(g);this.material=v||x(n,d,u),this.geometry=new P(s,w,1,10),this.mesh=new A(this.geometry,this.material);const a=new r;return a.addVectors(l,c).divideScalar(2),this.mesh.position.set(a.x,a.y,a.z),this.mesh.rotation.x=-Math.PI/2,this.mesh.rotation.z=p,this.mesh}createMeshAndStartAnimation(){return this.createMesh(),this.startAnimation(performance.now()),this}addToScene(){this.createMeshAndStartAnimation(),this.scene.add(this.mesh)}startAnimation(e){if(!e||!this.material){console.error(`${this.name}动画开始依赖的动画开始时间或材质缺失，请检查`);return}const{speed:t}=this.options,n=(performance.now()-e)*.001;this.material.uniforms.u_amplitude.value=Math.sin(2*n*Math.PI*t),this.animationId=requestAnimationFrame(()=>this.startAnimation(e))}stopAnimation(){if(!this.animationId){console.error(`${this.name}未开启动画，请检查`);return}cancelAnimationFrame(this.animationId)}destroy(){var e,t;this.stopAnimation(),(e=this.geometry)==null||e.dispose(),(t=this.material)==null||t.dispose()}remove(){this.scene.remove(this.mesh),this.destroy()}}export{G,x as c,y as i};
