import{j as a}from"./index-_74sN05i.js";import{d as c,S as u,D as f,P as h,c as w,V as x,u as g}from"./useInitAll-BZnQvJx1.js";const j=`
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
`,S=e=>{const{height:o,position:t,width:r,color:l}=Object.assign({height:20,width:200,position:[0,0,0],color:new c(1.7,.2,3)},e),n=new u({uniforms:{time:{value:0},color:{value:new c(l)}},vertexShader:j,fragmentShader:y,transparent:!0,side:f}),m=new h(r,o,100,100),s=new w(m,n);s.position.copy(new x(...t));const p=performance.now();function i(){const v=performance.now();requestAnimationFrame(i);const d=(v-p)/1e3;n.uniforms.time.value=d}return i(),s},U=()=>{const{sceneRef:e,rendererRef:o}=g("threejs-examples");return React.useEffect(()=>{var t;return(t=e.current)==null||t.add(S()),()=>{var r;(r=o.current)==null||r.dispose()}},[o,e]),a.jsx(a.Fragment,{children:a.jsx("div",{className:"threejs-examples-main",children:a.jsx("div",{id:"threejs-examples"})})})};export{U as default};
