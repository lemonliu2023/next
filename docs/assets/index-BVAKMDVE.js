import{j as a}from"./index-C6CsJ-ch.js";import{b as i,S as f,D as u,P as h,M as w,V as x,u as g}from"./useInitAll-CZsFa0QU.js";const j=`
    varying vec2 vUv;
    void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`,y=`
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
`,M=e=>{const{height:t,position:o,width:c,color:l}=Object.assign({height:20,width:200,position:[0,0,0],color:new i(1.7,.2,3)},e),r=new f({uniforms:{time:{value:0},color:{value:new i(l)}},vertexShader:j,fragmentShader:y,transparent:!0,side:u}),m=new h(c,t,100,100),n=new w(m,r);n.position.copy(new x(...o));const p=performance.now();function s(){const v=performance.now();requestAnimationFrame(s);const d=(v-p)/1e3;r.uniforms.time.value=d}return s(),n},R=()=>{const{sceneRef:e,rendererRef:t}=g("threejs-examples");return React.useEffect(()=>{var o;(o=e.current)==null||o.add(M())},[t,e]),a.jsx(a.Fragment,{children:a.jsx("div",{className:"threejs-examples-main",children:a.jsx("div",{id:"threejs-examples"})})})};export{R as default};
