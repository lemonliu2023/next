import{P as _,S as y,b as F,D as x,M as g,G as T,T as z}from"./useInitAll-CZsFa0QU.js";const D=`
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

    `,h={vertexShader:`
    varying vec2 v_position;
    
    void main() {
        v_position = vec2(position.x, position.y);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }`,fragmentShader:`
    ${D} 
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
    }`};function G(U,n){const{radius:w=50,color:M="#00FF00",speed:P=1,opacity:S=1,angle:b=Math.PI,position:e={x:0,y:0,z:0},rotation:t={x:-Math.PI/2,y:0,z:0}}={},o=50*2,I=d=>{const r=new z().load("/next/"+d),c=`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,u=`
      uniform sampler2D map;
      varying vec2 vUv;
      void main() {
        gl_FragColor = texture2D(map, vUv);
      }
    `;return new y({vertexShader:c,fragmentShader:u,transparent:!0,side:x,uniforms:{map:{value:r}}})},f=(d,l=o,r)=>{const c=new _(l,l),u=I(d),a=new g(c,u);return a.rotation.set(t.x,t.y,t.z),r?(a.renderOrder=r,a.position.copy({...e,y:e.y-1})):a.position.copy(e),a};n||(n=new _(o,o,1,1));const v=new y({uniforms:{u_radius:{value:w},u_speed:{value:P},u_opacity:{value:S},u_width:{value:b},u_color:{value:new F(M)},time:{value:0}},transparent:!0,depthWrite:!1,side:x,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader}),s=new g(n,v);s.rotation.set(t.x,t.y,t.z),s.position.copy(e);const i=new T;i.add(s);const p=f("radar_center.png",o);i.add(f("radar_out.png",o,-10)),i.add(p);const m=()=>{v.uniforms.time.value+=.05,p.rotation.z-=.01,requestAnimationFrame(m)};return m(),i}export{G as r};
