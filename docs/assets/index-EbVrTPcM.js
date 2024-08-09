import{r as f,Y as a}from"./index-D3khomyw.js";import{a as i,S as u,D as h,P as w,M as x,V as g,u as j}from"./useInitAll-CbSIb_cJ.js";const y=`
    varying vec2 vUv;
    void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`,M=`
uniform float time;
uniform vec3 color;
varying vec2 vUv;

float lazer(vec2 pos)
{
	
	float x = time/.33 * 2.0;
	float w = fract(x*0.5);
	w = sin(3.14156*w);
	w *= 1.5 + pos.x;
	w *= 2.0;
  float alpha = w / abs(pos.y) / 16.0;

	float d = distance(pos, vec2(-1.0-fract(x*0.5)*2.,0.8));
	alpha += (0.25*w/d);
	return alpha / 4.0 < 0.3 ? 0.0 : alpha / 4.0;
}

void main()
{
	vec2 pos = ( vUv * 2.0 ) - 1.0; // 归一化 (0, 0) -> (1, 1) => (-1, -1) -> (1, 1)
	gl_FragColor = vec4(color, lazer(pos));
}
`,S=e=>{const{height:t,position:o,width:c,color:l}=Object.assign({height:20,width:200,position:[0,0,0],color:new i(1.7,.2,3)},e),r=new u({uniforms:{time:{value:0},color:{value:new i(l)}},vertexShader:y,fragmentShader:M,transparent:!0,side:h}),m=new w(c,t,100,100),s=new x(m,r);s.position.copy(new g(...o));const p=performance.now();function n(){const v=performance.now();requestAnimationFrame(n);const d=(v-p)/1e3;r.uniforms.time.value=d}return n(),s},C=()=>{const{sceneRef:e,rendererRef:t}=j("threejs-examples");return f.useEffect(()=>{var o;(o=e.current)==null||o.add(S())},[t,e]),a.jsx(a.Fragment,{children:a.jsx("div",{className:"threejs-examples-main",children:a.jsx("div",{id:"threejs-examples"})})})};export{C as default};
