import{r,Y as e}from"./index-D3khomyw.js";import{u as n,P as a,S as v,M as c}from"./useInitAll-CbSIb_cJ.js";const d=`
varying vec2 vUv;

void main() {
    vec3 vPosition = position;
    if(position.y > 0.5) {
      vPosition.y = position.y / 2.0;
    };
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(vPosition, 1.0);
}
`,m=`
varying vec2 vUv;

void main() {
    gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
}`;function p(){const{sceneRef:t}=n("what-is-shader");return r.useEffect(()=>{const o=new a(50,50),i=new v({vertexShader:d,fragmentShader:m,transparent:!0}),s=new c(o,i);t.current.add(s)},[t]),e.jsx(e.Fragment,{children:e.jsx("div",{id:"what-is-shader",style:{width:"100%"}})})}export{p as default};
