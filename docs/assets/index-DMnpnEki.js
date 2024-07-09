import{j as r}from"./index-CA71gu1J.js";import{V as d,T as x,S as h,b as y,q as M,M as g,u as j}from"./useInitAll-D69CNfK-.js";const O=`  
  varying vec2 vUv;  
  uniform vec2 uTextureOffset;  
  void main() {  
    vUv = uv;  
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);  
  }  
`,k=`  
            uniform sampler2D tMask;
            uniform float u_opacity;
            varying vec2 vUv;  
            uniform vec2 uTextureOffset;  
            void main() {
                float alpha = (1.0 + uTextureOffset.y * 4.0 + 0.2); // 保证消失时还有透明度
                alpha = clamp(alpha, 0.0, 1.0);
                vec2 uv = vUv + uTextureOffset;
                vec4 maskColor = texture2D(tMask, uv);  
                gl_FragColor = vec4(maskColor.rgb, maskColor.a * u_opacity * alpha); // 假设遮罩纹理包含alpha通道  
            }  
        `;function T(e={}){const{textureUrl:t,radius:l,renderOrder:u,flipY:c,opacity:m,scrollSpeed:f,position:p}=Object.assign({textureUrl:"/next/honeycomb.png",radius:50,renderOrder:1,flipY:!1,opacity:1,scrollSpeed:.8,position:new d(0,0,0)},e),s=new x().load(t);s.flipY=c;const n=new h({vertexShader:O,fragmentShader:k,uniforms:{tMask:{value:s},uTextureOffset:{value:new y(0,-10)},u_opacity:{value:m}},transparent:!0,depthWrite:!1}),v=new M(l,32,32,0,Math.PI*2,0,Math.PI/2),o=new g(v,n);o.position.copy(p),o.renderOrder=u;const i=()=>{let a=Date.now()*.001*f;a=(a-Math.floor(a))/4,n.uniforms.uTextureOffset.value.y=a,requestAnimationFrame(i)};return i(),o}const _=()=>{const{sceneRef:e}=j("threejs-examples");return React.useEffect(()=>{var t;(t=e.current)==null||t.add(T())},[e]),r.jsx(r.Fragment,{children:r.jsx("div",{className:"threejs-examples-main",children:r.jsx("div",{id:"threejs-examples"})})})};export{_ as default};
