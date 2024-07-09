import{j as t}from"./index-CA71gu1J.js";import{S as x,b as s,D as g,P as y,M as T,V as j,u as S}from"./useInitAll-D69CNfK-.js";const E=`
    varying vec2 vUv;
    void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`,M=`
#ifdef GL_ES
precision mediump float;
#endif

uniform float time;
uniform vec2 resolution;
uniform vec2 mouse;
varying vec2 vUv;

vec3 lazer(vec2 pos, vec3 clr, float mult)
{
	
	float x = time/1.5 * 2.0;
	float w = fract(x*0.5);
	w = sin(3.14156*w);
	w *= 1.5+pos.x;
	w *= 2.0;
        vec3 color = clr * mult * w / abs(pos.y);

	float d = distance(pos,vec2(-1.0+fract(x*0.5)*2.,0.0));
	color += (clr * 0.25*w/d);
	return color;
}

void main()
{
	vec2 pos = ( vUv * 2.0 ) - 1.0;
	vec3 color = max(vec3(0.), lazer(pos, vec3(1.75, 0.2, 3.), 0.25));
	gl_FragColor = vec4(color * 0.05, 1.0);
}
`,b=e=>{const{lineWidth:n,height:i,position:m,lineOpenTime:v,scanTime:u,opacityTime:d,renderer:p}=Object.assign({lineWidth:10,height:1e3,width:1e3,position:[0,0,0],lineOpenTime:.8,scanTime:2,opacityTime:.2},e),r=new x({uniforms:{time:{value:0},lineWidth:{value:n/i},lineOpenTime:{value:v},scanTime:{value:u},opacityTime:{value:d},resolution:{value:new s(100,100)},mouse:{value:new s(0,0)}},vertexShader:E,fragmentShader:M,transparent:!0,side:g});var f=new y(100,100,100,100);const c=new T(f,r);c.position.copy(new j(...m));const w=performance.now();p.domElement.addEventListener("mousemove",o=>{const a=o.clientX/window.innerWidth*2-1,h=-(o.clientY/window.innerHeight)*2+1;r.uniforms.mouse.value=new s(a,h)});function l(){const o=performance.now();requestAnimationFrame(l);const a=(o-w)/1e3;r.uniforms.time.value=a}return l(),c},R=()=>{const{sceneRef:e,rendererRef:n}=S("threejs-examples");return React.useEffect(()=>{var i;(i=e.current)==null||i.add(b({renderer:n.current}))},[n,e]),t.jsx(t.Fragment,{children:t.jsx("div",{className:"threejs-examples-main",children:t.jsx("div",{id:"threejs-examples"})})})};export{R as default};
