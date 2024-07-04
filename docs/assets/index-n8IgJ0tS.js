import{j as w}from"./index-C8OqWlM5.js";import{S as p,V as x,C as g,d as U,c as f,P as _,D as y,e as T,f as M,u as W}from"./useInitAll-CwWJDqFe.js";const b=`  
varying vec2 vUv;  

void main() {  
    vUv = uv;  
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);  
}  
`,j=`  
precision mediump float;  
varying vec2 vUv;  
uniform float uTime;  
uniform vec2 uCenter;  
uniform float uRadius;  
uniform float uAmplitude;
uniform vec3 u_color;
  
void main() {  
    // 计算像素到涟漪中心的距离  
    vec2 dist = (vUv - uCenter);  
    float len = length(dist);  
  
    // 使用距离和时间来计算涟漪效果  
    float ripple = sin(len * uRadius - uTime * 2.0) * uAmplitude;  
    
    float alpha = ripple * 0.5 + 0.5; // 涟漪效果越强，透明度越高  
    alpha = clamp(alpha, 0.0, 1.0); // 确保透明度在0到1之间  
  
    // 输出颜色  
    gl_FragColor = vec4(u_color, alpha * 0.5);  // 0.5 环透明度
}  
`;function F(t={}){const i=Object.assign({color:"#f00",position:null},t);if(!i.position)throw new Error("请传入模型位置信息");console.log(t,"option");const n=new p({vertexShader:b,fragmentShader:j,uniforms:{uTime:{value:10},uCenter:{value:new x(.5,.5)},uRadius:{value:40},uAmplitude:{value:50},u_color:{value:new g("#f00")}},transparent:!0,depthWrite:!1}),r=new U(50,50,1,Math.PI*2),l=new f(r,n);l.rotation.x=-Math.PI/2,l.position.copy(i.position);const e=()=>{n.uniforms.uTime.value+=.03,requestAnimationFrame(e)};return e(),l}const P=`
precision mediump float;
 
float atan2(float y, float x){
  float t0, t1, t2, t3, t4;
  t3 = abs(x);
  t1 = abs(y);
  t0 = max(t3, t1);
  t1 = min(t3, t1);
  t3 = float(1) / t0;
  t3 = t1 * t3;
  t4 = t3 * t3;
  t0 = -float(0.013480470);
  t0 = t0 * t4 + float(0.057477314);
  t0 = t0 * t4 - float(0.121239071);
  t0 = t0 * t4 + float(0.195635925);
  t0 = t0 * t4 - float(0.332994597);
  t0 = t0 * t4 + float(0.999995630);
  t3 = t0 * t3;
  t3 = (abs(y) > abs(x)) ? float(1.570796327) - t3 : t3;
  t3 = (x < 0.0) ?  float(3.141592654) - t3 : t3;
  t3 = (y < 0.0) ? -t3 : t3;
  return t3;
}
// 计算距离
float distanceTo(vec2 src, vec2 dst) {
	float dx = src.x - dst.x;
	float dy = src.y - dst.y;
	float dv = dx * dx + dy * dy;
	return sqrt(dv);
}

#define PI 3.14159265359
#define PI2 6.28318530718

uniform vec3 u_color;
uniform float time;
uniform float u_opacity;
uniform float u_radius;
uniform float u_width;
uniform float u_speed;

varying vec2 v_position;

    `,C={vertexShader:`
    varying vec2 v_position;
    
    void main() {
        v_position = vec2(position.x, position.y);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }`,fragmentShader:`
    ${P} 
    void main() {
        float d_time = u_speed * time;

        float angle = atan2(v_position.x, v_position.y) + PI;
        
        float angleT = mod(angle + d_time, PI2);

        float width = u_width;
    
        float d_opacity = 0.0;

        // 当前位置离中心位置
        float length = distanceTo(vec2(0.0, 0.0), v_position);
        
        float bw = 5.0;
       

        if (length < u_radius - bw / 1.1) {
            d_opacity = 1.0 - angleT / PI * (PI / width);
        } 

        if (length > u_radius) { d_opacity = 0.0; }
 
        gl_FragColor = vec4(u_color, d_opacity * u_opacity);
    }`};function O(t,i){const{radius:n=50,color:r="#fff",speed:l=1,opacity:e=1,angle:o=Math.PI,position:s={x:0,y:0,z:0},rotation:a={x:-Math.PI/2,y:0,z:0}}=t||{},c=50*2;i||(i=new _(c,c,1,1));const m=new p({uniforms:{u_radius:{value:n},u_speed:{value:l},u_opacity:{value:e},u_width:{value:o},u_color:{value:new g(r)},time:{value:0}},transparent:!0,depthWrite:!1,side:y,vertexShader:C.vertexShader,fragmentShader:C.fragmentShader}),v=new f(i,m);v.rotation.set(a.x,a.y,a.z),v.position.copy(s);const u=()=>{m.uniforms.time.value+=.05,requestAnimationFrame(u)};return u(),v}const A=`
    varying vec2 vUv;
    void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`,I=`
uniform float time;
uniform float lineWidth;
uniform float lineOpenTime;
uniform float scanTime;
uniform float opacityTime;
varying vec2 vUv;
void main()
{
  // 线的颜色
  vec3 color = vec3(44.0 / 255.0, 140.0 / 255.0, 70.0 / 255.0);

  const float gapWidth = 0.02;

  vec4 gradientColor = mix(vec4(0.0, 77.0 / 255.0, 23.0 / 255.0, 1.0), vec4(0.0, 77.0 / 255.0, 23.0 / 255.0, 0.0), vUv.y);

  // 刚开始的展开动画
  if (time < lineOpenTime)
  {
    float speed = 0.5 / lineOpenTime;
    float progress = speed * time;
    // 展开线
    if (0.5 - lineWidth - progress < vUv.y && vUv.y < 0.5 - progress || (vUv.y > 0.5 + progress && vUv.y < 0.5 + lineWidth + progress))
    {
      gl_FragColor = vec4(color, 1.0);
      return;
    }
    if (vUv.y > (0.5 - progress + gapWidth) && vUv.y < (0.5 + progress - gapWidth))
    {
      gl_FragColor = gradientColor;
    }
  }
  else
  {
    // 展开后的线
    if (vUv.y < lineWidth || vUv.y > 1.0 - lineWidth)
    {
      gl_FragColor = vec4(color, 1.0);
      // gap 部分
    }
    else if (vUv.y > lineWidth && vUv.y < lineWidth + gapWidth || (vUv.y > 1.0 - (lineWidth + gapWidth) && vUv.y < 1.0 - lineWidth))
    {
      gl_FragColor = vec4(0, 0, 0, 0);
    }
    else
    {
      float allTime = scanTime + opacityTime;
      float modTime = mod(time - lineOpenTime, allTime);
      if (modTime < scanTime)
      {
        if (modTime / scanTime < (1.0 - vUv.y))
        {
          gl_FragColor = vec4(0, 0, 0, 0);
        }
        else
        {
          gl_FragColor = gradientColor;
        }
      }
      else
      {
        gradientColor.a *= (allTime - modTime) / opacityTime;
        gl_FragColor = gradientColor;
      }
    }
  }
}`,k=t=>{const{lineWidth:i,height:n,width:r,position:l,lineOpenTime:e,scanTime:o,opacityTime:s}=Object.assign({lineWidth:1,height:100,width:100,position:[0,0,0],lineOpenTime:.8,scanTime:2,opacityTime:.2},t),a=new p({uniforms:{time:{value:0},lineWidth:{value:i/n},lineOpenTime:{value:e},scanTime:{value:o},opacityTime:{value:s}},vertexShader:A,fragmentShader:I,transparent:!0,side:y}),c=new _(r,n,1e3,1e3),m=new f(c,a);m.position.copy(new T(...l));const v=performance.now();function u(){const d=performance.now();requestAnimationFrame(u);const h=(d-v)/1e3;a.uniforms.time.value=h}return u(),m},z=`
    varying vec2 vUv;
    void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`,R=`
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
`,V=t=>{const{height:i,position:n,width:r,color:l}=Object.assign({height:20,width:200,position:[0,0,0],color:new g(1.7,.2,3)},t),e=new p({uniforms:{time:{value:0},color:{value:new g(l)}},vertexShader:z,fragmentShader:R,transparent:!0,side:y});var o=new _(r,i,100,100);const s=new f(o,e);s.position.copy(new T(...n));const a=performance.now();function c(){const m=performance.now();requestAnimationFrame(c);const v=(m-a)/1e3;e.uniforms.time.value=v}return c(),s},$=`
    varying vec2 vUv;
    void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`,E=`
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
`,q=t=>{const{lineWidth:i,height:n,position:r,lineOpenTime:l,scanTime:e,opacityTime:o,renderer:s}=Object.assign({lineWidth:10,height:1e3,width:1e3,position:[0,0,0],lineOpenTime:.8,scanTime:2,opacityTime:.2},t),a=new p({uniforms:{time:{value:0},lineWidth:{value:i/n},lineOpenTime:{value:l},scanTime:{value:e},opacityTime:{value:o},resolution:{value:new x(100,100)},mouse:{value:new x(0,0)}},vertexShader:$,fragmentShader:E,transparent:!0,side:y});var c=new _(100,100,100,100);const m=new f(c,a);m.position.copy(new T(...r));const v=performance.now();s.domElement.addEventListener("mousemove",d=>{const h=d.clientX/window.innerWidth*2-1,S=-(d.clientY/window.innerHeight)*2+1;a.uniforms.mouse.value=new x(h,S)});function u(){const d=performance.now();requestAnimationFrame(u);const h=(d-v)/1e3;a.uniforms.time.value=h}return u(),m},G=`
uniform vec3 u_color;

uniform float time;
uniform float u_height;

varying float v_opacity;

void main() {

    vec3 vPosition = position;

    v_opacity = mix(1.0, 0.0, position.y / u_height);

    gl_Position = projectionMatrix * modelViewMatrix * vec4(vPosition, 1.0);
}
`,D=` 
uniform vec3 u_color;

varying float v_opacity;

void main() { 
    gl_FragColor = vec4(u_color, v_opacity * 0.5);
}
`;function H(t={}){const{radius:i,height:n,opacity:r,color:l,position:e}=Object.assign({color:"#f00",opacity:.6,radius:20,height:2},t);if(!t.position)throw Error("请传入模型位置信息");const o=new M(i,i,n,32,1,!0);o.translate(0,n/2,0);const s=new p({uniforms:{u_height:{value:n},u_speed:{value:0},u_opacity:{value:r},u_color:{value:new g(l)},time:{value:100}},transparent:!0,depthWrite:!1,side:y,vertexShader:G,fragmentShader:D}),a=new f(o,s);a.position.copy(new T(...e));const c=()=>{const m=8+Math.sin(Date.now()*.003)*5;a.scale.y=m,requestAnimationFrame(c)};return c(),a}function Y(){const{sceneRef:t,rendererRef:i}=W("threejs-examples"),n=()=>{var e;(e=t.current)==null||e.children.forEach(o=>{var s;o.type!=="AxesHelper"&&((s=t.current)==null||s.remove(o))})},r=React.useMemo(()=>new Map([["wall",{label:"墙",onClick:()=>{var e;(e=t.current)==null||e.add(H({position:[0,0,0],height:4}))}}],["lianyi",{label:"涟漪",onClick:()=>{var e;(e=t.current)==null||e.add(F({position:{x:0,y:0,z:0}}))}}],["radar",{label:"雷达扫描",onClick:()=>{var e;(e=t.current)==null||e.add(O({color:"#69BDF2",position:{x:0,y:0,z:0}}))}}],["scan",{label:"二维码扫描",onClick:()=>{var e;(e=t.current)==null||e.add(k())}}],["laser",{label:"激光束",onClick:()=>{var e;(e=t.current)==null||e.add(V())}}],["glsl",{label:"glsl",onClick:()=>{var e;(e=t.current)==null||e.add(q({renderer:i.current}))}}]]),[t,i]),l=React.useMemo(()=>Array.from(r.entries()).map(([e,o])=>({key:e,label:o.label})),[r]);return React.useEffect(()=>{},[]),w.jsxs("div",{className:"threejs-examples-container",children:[w.jsx(antd.Menu,{style:{width:256},onClick:e=>{const o=r.get(e.key);o&&typeof o.onClick=="function"&&(n(),o.onClick())},defaultSelectedKeys:[],mode:"inline",items:l}),w.jsx("div",{className:"threejs-examples-main",children:w.jsx("div",{id:"threejs-examples"})})]})}export{Y as default};
