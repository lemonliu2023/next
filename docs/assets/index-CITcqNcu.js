import{j as r}from"./index-_74sN05i.js";import{S as x,e as c,D as g,P as y,c as T,V as j,u as S}from"./useInitAll-BZnQvJx1.js";const E=`
    varying vec2 vUv;
    void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`,G=`
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
`,M=n=>{const{lineWidth:e,height:i,position:o,lineOpenTime:u,scanTime:v,opacityTime:d,renderer:p}=Object.assign({lineWidth:10,height:1e3,width:1e3,position:[0,0,0],lineOpenTime:.8,scanTime:2,opacityTime:.2},n),s=new x({uniforms:{time:{value:0},lineWidth:{value:e/i},lineOpenTime:{value:u},scanTime:{value:v},opacityTime:{value:d},resolution:{value:new c(100,100)},mouse:{value:new c(0,0)}},vertexShader:E,fragmentShader:G,transparent:!0,side:g});var f=new y(100,100,100,100);const l=new T(f,s);l.position.copy(new j(...o));const w=performance.now();p.domElement.addEventListener("mousemove",t=>{const a=t.clientX/window.innerWidth*2-1,h=-(t.clientY/window.innerHeight)*2+1;s.uniforms.mouse.value=new c(a,h)});function m(){const t=performance.now();requestAnimationFrame(m);const a=(t-w)/1e3;s.uniforms.time.value=a}return m(),l},U=()=>{const{sceneRef:n,rendererRef:e}=S("threejs-examples");return React.useEffect(()=>{var i;return(i=n.current)==null||i.add(M({renderer:e.current})),()=>{var o;(o=e.current)==null||o.dispose()}},[e,n]),r.jsx(r.Fragment,{children:r.jsx("div",{className:"threejs-examples-main",children:r.jsx("div",{id:"threejs-examples"})})})};export{U as default};
