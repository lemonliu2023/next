import{r as d,Y as a}from"./index-D3khomyw.js";import{V as x,T as h,S as y,c as g,g as M,M as O,u as j}from"./useInitAll-CbSIb_cJ.js";const k=`  
  varying vec2 vUv;  
  uniform vec2 uTextureOffset;  
  void main() {  
    vUv = uv;  
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);  
  }  
`,T=`  
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
        `;function w(e={}){const{textureUrl:t,radius:l,renderOrder:u,flipY:c,opacity:m,scrollSpeed:f,position:p}=Object.assign({textureUrl:"/next/honeycomb.png",radius:50,renderOrder:1,flipY:!1,opacity:1,scrollSpeed:.8,position:new x(0,0,0)},e),o=new h().load(t);o.flipY=c;const n=new y({vertexShader:k,fragmentShader:T,uniforms:{tMask:{value:o},uTextureOffset:{value:new g(0,-10)},u_opacity:{value:m}},transparent:!0,depthWrite:!1}),v=new M(l,32,32,0,Math.PI*2,0,Math.PI/2),s=new O(v,n);s.position.copy(p),s.renderOrder=u;const i=()=>{let r=Date.now()*.001*f;r=(r-Math.floor(r))/4,n.uniforms.uTextureOffset.value.y=r,requestAnimationFrame(i)};return i(),s}const C=()=>{const{sceneRef:e}=j("threejs-examples");return d.useEffect(()=>{var t;(t=e.current)==null||t.add(w())},[e]),a.jsx(a.Fragment,{children:a.jsx("div",{className:"threejs-examples-main",children:a.jsx("div",{id:"threejs-examples"})})})};export{C as default};
