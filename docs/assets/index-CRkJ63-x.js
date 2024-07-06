import{j as s}from"./index-B5FfwGTA.js";import{P as y,S as g,d as T,D as w,c as M,G as z,T as R,u as D}from"./useInitAll-Mm6g5EO8.js";const U=`
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

    `,P={vertexShader:`
    varying vec2 v_position;
    
    void main() {
        v_position = vec2(position.x, position.y);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }`,fragmentShader:`
    ${U} 
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
    }`};function C(d,e){const{radius:r=50,color:S="#00FF00",speed:j=1,opacity:I=1,angle:b=Math.PI,position:p={x:0,y:0,z:0},rotation:t={x:-Math.PI/2,y:0,z:0}}={},a=50*2,F=c=>{const n=new R().load("/next/"+c),f=`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,m=`
      uniform sampler2D map;
      varying vec2 vUv;
      void main() {
        gl_FragColor = texture2D(map, vUv);
      }
    `;return new g({vertexShader:f,fragmentShader:m,transparent:!0,side:w,uniforms:{map:{value:n}}})},v=(c,u=a,n)=>{const f=new y(u,u),m=F(c),o=new M(f,m);return o.rotation.set(t.x,t.y,t.z),o.position.copy(p),n&&(o.renderOrder=n),o};e||(e=new y(a,a,1,1));const x=new g({uniforms:{u_radius:{value:r},u_speed:{value:j},u_opacity:{value:I},u_width:{value:b},u_color:{value:new T(S)},time:{value:0}},transparent:!0,depthWrite:!1,side:w,vertexShader:P.vertexShader,fragmentShader:P.fragmentShader}),l=new M(e,x);l.rotation.set(t.x,t.y,t.z),l.position.copy(p);const i=new z;i.add(l);const _=v("radar_center.png",a);i.add(v("radar_out.png",a,-1)),i.add(_);const h=()=>{x.uniforms.time.value+=.05,_.rotation.z-=.01,requestAnimationFrame(h)};return h(),i}const q=()=>{const{sceneRef:d,rendererRef:e}=D("threejs-examples");return React.useEffect(()=>{var r;(r=d.current)==null||r.add(C())},[e,d]),s.jsx(s.Fragment,{children:s.jsx("div",{className:"threejs-examples-main",children:s.jsx("div",{id:"threejs-examples"})})})};export{q as default};
