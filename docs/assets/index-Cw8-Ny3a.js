import{j as e}from"./index-FW1nyG-2.js";import{u as n,P as r,S as a,M as v}from"./useInitAll-CZsFa0QU.js";const c=`
varying vec2 vUv;

void main() {
    vec3 vPosition = position;
    if(position.y > 0.5) {
      vPosition.y = position.y / 2.0;
    };
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(vPosition, 1.0);
}
`,d=`
varying vec2 vUv;

void main() {
    gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
}`;function h(){const{sceneRef:t}=n("what-is-shader");return React.useEffect(()=>{const i=new r(50,50),o=new a({vertexShader:c,fragmentShader:d,transparent:!0}),s=new v(i,o);t.current.add(s)},[t]),e.jsx(e.Fragment,{children:e.jsx("div",{id:"what-is-shader",style:{width:"100%"}})})}export{h as default};
