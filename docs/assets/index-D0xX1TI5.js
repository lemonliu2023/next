import{g as Q,c as Z,u as ee,j as W}from"./index-_yDWP6kv.js";import{S as M,V as T,C as S,N as D,d as te,c as y,G as $,P as z,D as P,T as V,e as U,f as ie,L as re,g as ae,h as ne,R as H,M as oe,j as se,t as ue,u as le}from"./useInitAll-6_PGupIj.js";const q=`  
varying vec2 vUv;  

void main() {  
    vUv = uv;  
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);  
}  
`,B=`  
varying vec2 vUv;  
uniform float uTime;  
uniform vec2 uCenter;  
uniform float uRadius;  
uniform float uAmplitude;
uniform vec3 u_color;
  
void main() {  
    // 计算像素到涟漪中心的距离  
    vec2 dist = (vUv - uCenter);  
    float len = length(dist) * 2.0;  

    float circle = mod(uTime, 1.0);
    float circle2 = mod(uTime + 0.5, 1.0);

    if(len < circle) {
        gl_FragColor = vec4(1.0, .0, .0, pow((1.0 - circle + len), 5.0) * (1.0 - len));
    }
}  
`;function ce(p={}){const l=Object.assign({color:"#f00",position:null},p);if(!l.position)throw new Error("请传入模型位置信息");const h=new M({vertexShader:q,fragmentShader:B,uniforms:{uTime:{value:0},uCenter:{value:new T(.5,.5)},uRadius:{value:20},uAmplitude:{value:50},u_color:{value:new S("#f00")}},blending:D,transparent:!0,depthWrite:!1}),v=new M({vertexShader:q,fragmentShader:B,uniforms:{uTime:{value:.5},uCenter:{value:new T(.5,.5)},uRadius:{value:20},uAmplitude:{value:50},u_color:{value:new S("#f00")}},blending:D,transparent:!0,depthWrite:!1}),i=new te(50,50,1,Math.PI*2),u=new y(i,h),c=new y(i,v);u.rotation.x=-Math.PI/2,u.position.copy(l.position),c.rotation.x=-Math.PI/2,c.position.copy(l.position);const r=new $;r.add(u),r.add(c);const o=()=>{h.uniforms.uTime.value+=.01,v.uniforms.uTime.value+=.01,requestAnimationFrame(o)};return o(),r}const he=`
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

    `,G={vertexShader:`
    varying vec2 v_position;
    
    void main() {
        v_position = vec2(position.x, position.y);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }`,fragmentShader:`
    ${he} 
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
    }`};function pe(p,l){const{radius:h=50,color:v="#00FF00",speed:i=1,opacity:u=1,angle:c=Math.PI,position:r={x:0,y:0,z:0},rotation:o={x:-Math.PI/2,y:0,z:0}}=p||{},e=50*2,a=x=>{const b=new V().load("/next/public/"+x),A=`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,C=`
      uniform sampler2D map;
      varying vec2 vUv;
      void main() {
        gl_FragColor = texture2D(map, vUv);
      }
    `;return new M({vertexShader:A,fragmentShader:C,transparent:!0,side:P,uniforms:{map:{value:b}}})},t=(x,w=e,b)=>{const A=new z(w,w),C=a(x),g=new y(A,C);return g.rotation.set(o.x,o.y,o.z),g.position.copy(r),b&&(g.renderOrder=b),g};l||(l=new z(e,e,1,1));const s=new M({uniforms:{u_radius:{value:h},u_speed:{value:i},u_opacity:{value:u},u_width:{value:c},u_color:{value:new S(v)},time:{value:0}},transparent:!0,depthWrite:!1,side:P,vertexShader:G.vertexShader,fragmentShader:G.fragmentShader}),n=new y(l,s);n.rotation.set(o.x,o.y,o.z),n.position.copy(r);const m=new $;m.add(n);const f=t("radar_center.png",e);m.add(t("radar_out.png",e,-1)),m.add(f);const d=()=>{s.uniforms.time.value+=.05,f.rotation.z-=.01,requestAnimationFrame(d)};return d(),m}const ve=`
    varying vec2 vUv;
    void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`,me=`
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
}`,fe=p=>{const{lineWidth:l,height:h,width:v,position:i,lineOpenTime:u,scanTime:c,opacityTime:r}=Object.assign({lineWidth:1,height:100,width:100,position:[0,0,0],lineOpenTime:.8,scanTime:2,opacityTime:.2},p),o=new M({uniforms:{time:{value:0},lineWidth:{value:l/h},lineOpenTime:{value:u},scanTime:{value:c},opacityTime:{value:r}},vertexShader:ve,fragmentShader:me,transparent:!0,side:P}),e=new z(v,h,1e3,1e3),a=new y(e,o);a.position.copy(new U(...i));const t=performance.now();function s(){const n=performance.now();requestAnimationFrame(s);const m=(n-t)/1e3;o.uniforms.time.value=m}return s(),a},de=`
    varying vec2 vUv;
    void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`,ye=`
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
`,ge=p=>{const{height:l,position:h,width:v,color:i}=Object.assign({height:20,width:200,position:[0,0,0],color:new S(1.7,.2,3)},p),u=new M({uniforms:{time:{value:0},color:{value:new S(i)}},vertexShader:de,fragmentShader:ye,transparent:!0,side:P});var c=new z(v,l,100,100);const r=new y(c,u);r.position.copy(new U(...h));const o=performance.now();function e(){const a=performance.now();requestAnimationFrame(e);const t=(a-o)/1e3;u.uniforms.time.value=t}return e(),r},xe=`
    varying vec2 vUv;
    void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`,we=`
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
`,be=p=>{const{lineWidth:l,height:h,position:v,lineOpenTime:i,scanTime:u,opacityTime:c,renderer:r}=Object.assign({lineWidth:10,height:1e3,width:1e3,position:[0,0,0],lineOpenTime:.8,scanTime:2,opacityTime:.2},p),o=new M({uniforms:{time:{value:0},lineWidth:{value:l/h},lineOpenTime:{value:i},scanTime:{value:u},opacityTime:{value:c},resolution:{value:new T(100,100)},mouse:{value:new T(0,0)}},vertexShader:xe,fragmentShader:we,transparent:!0,side:P});var e=new z(100,100,100,100);const a=new y(e,o);a.position.copy(new U(...v));const t=performance.now();r.domElement.addEventListener("mousemove",n=>{const m=n.clientX/window.innerWidth*2-1,f=-(n.clientY/window.innerHeight)*2+1;o.uniforms.mouse.value=new T(m,f)});function s(){const n=performance.now();requestAnimationFrame(s);const m=(n-t)/1e3;o.uniforms.time.value=m}return s(),a},_e=`
uniform vec3 u_color;

uniform float time;
uniform float u_height;

varying float v_opacity;

void main() {

    vec3 vPosition = position;

    v_opacity = mix(1.0, 0.0, position.y / u_height);

    gl_Position = projectionMatrix * modelViewMatrix * vec4(vPosition, 1.0);
}
`,Me=` 
uniform vec3 u_color;

varying float v_opacity;

void main() { 
    gl_FragColor = vec4(u_color, v_opacity * 0.5);
}
`;function Ae(p={}){const{radius:l,height:h,opacity:v,color:i,position:u}=Object.assign({color:"#f00",opacity:.6,radius:20,height:2},p);if(!p.position)throw Error("请传入模型位置信息");const c=new ie(l,l,h,32,1,!0);c.translate(0,h/2,0);const r=new M({uniforms:{u_height:{value:h},u_speed:{value:0},u_opacity:{value:v},u_color:{value:new S(i)},time:{value:100}},transparent:!0,depthWrite:!1,side:P,vertexShader:_e,fragmentShader:Me}),o=new y(c,r);o.position.copy(new U(...u));const e=()=>{const a=8+Math.sin(Date.now()*.003)*5;o.scale.y=a,requestAnimationFrame(e)};return e(),o}const k=[{x:400,y:-15,z:-100},{x:310,y:-15,z:0},{x:270,y:-15,z:-108},{x:210,y:-15,z:0},{x:170,y:-15,z:-108},{x:125,y:-15,z:-110},{x:110,y:-15,z:0},{x:-50,y:-15,z:100}],Ce=()=>{const p=[];k.reduce((c,r)=>{const e=new re(new U(c.x,c.y,c.z),new U(r.x,r.y,r.z)).getPoints(100);return p.push(...e),r});const l=new ae(new ne(p),80,.8),h=new V().load("/next/public/tube_bg.png");h.wrapS=h.wrapT=H,h.repeat.set(1,1),h.needsUpdate=!0;const v=new oe({map:h,side:se,transparent:!0}),i=new y(l,v),u=()=>{var c,r,o,e;((r=(c=v.map)==null?void 0:c.offset)==null?void 0:r.x)!==void 0&&(v.map.offset.x=((e=(o=v.map)==null?void 0:o.offset)==null?void 0:e.x)-.01),requestAnimationFrame(u)};return u(),console.log(i,"mesh"),i};function Te(p){throw new Error('Could not dynamically require "'+p+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var R={exports:{}};const Se=Q(ue);(function(p,l){(function(){var h=this,v=typeof Te<"u",i=h.THREE||v&&Se;if(!i)throw new Error("MeshLine requires three.js");class u extends i.BufferGeometry{constructor(){super(),this.isMeshLine=!0,this.type="MeshLine",this.positions=[],this.previous=[],this.next=[],this.side=[],this.width=[],this.indices_array=[],this.uvs=[],this.counters=[],this._points=[],this._geom=null,this.widthCallback=null,this.matrixWorld=new i.Matrix4,Object.defineProperties(this,{geometry:{enumerable:!0,get:function(){return this}},geom:{enumerable:!0,get:function(){return this._geom},set:function(a){this.setGeometry(a,this.widthCallback)}},points:{enumerable:!0,get:function(){return this._points},set:function(a){this.setPoints(a,this.widthCallback)}}})}}u.prototype.setMatrixWorld=function(e){this.matrixWorld=e},u.prototype.setGeometry=function(e,a){this._geometry=e,this.setPoints(e.getAttribute("position").array,a)},u.prototype.setPoints=function(e,a){if(!(e instanceof Float32Array)&&!(e instanceof Array)){console.error("ERROR: The BufferArray of points is not instancied correctly.");return}if(this._points=e,this.widthCallback=a,this.positions=[],this.counters=[],e.length&&e[0]instanceof i.Vector3)for(var t=0;t<e.length;t++){var s=e[t],n=t/e.length;this.positions.push(s.x,s.y,s.z),this.positions.push(s.x,s.y,s.z),this.counters.push(n),this.counters.push(n)}else for(var t=0;t<e.length;t+=3){var n=t/e.length;this.positions.push(e[t],e[t+1],e[t+2]),this.positions.push(e[t],e[t+1],e[t+2]),this.counters.push(n),this.counters.push(n)}this.process()};function c(e,a){var t=new i.Matrix4,s=new i.Ray,n=new i.Sphere,m=new i.Vector3,f=this.geometry;if(f.boundingSphere||f.computeBoundingSphere(),n.copy(f.boundingSphere),n.applyMatrix4(this.matrixWorld),e.ray.intersectSphere(n,m)!==!1){t.copy(this.matrixWorld).invert(),s.copy(e.ray).applyMatrix4(t);var d=new i.Vector3,x=new i.Vector3,w=new i.Vector3,b=this instanceof i.LineSegments?2:1,A=f.index,C=f.attributes;if(A!==null)for(var g=A.array,L=C.position.array,j=C.width.array,_=0,O=g.length-1;_<O;_+=b){var N=g[_],Y=g[_+1];d.fromArray(L,N*3),x.fromArray(L,Y*3);var K=j[Math.floor(_/3)]!==void 0?j[Math.floor(_/3)]:1,E=e.params.Line.threshold+this.material.lineWidth*K/2,X=E*E,J=s.distanceSqToSegment(d,x,m,w);if(!(J>X)){m.applyMatrix4(this.matrixWorld);var F=e.ray.origin.distanceTo(m);F<e.near||F>e.far||(a.push({distance:F,point:w.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this}),_=O)}}}}u.prototype.raycast=c,u.prototype.compareV3=function(e,a){var t=e*6,s=a*6;return this.positions[t]===this.positions[s]&&this.positions[t+1]===this.positions[s+1]&&this.positions[t+2]===this.positions[s+2]},u.prototype.copyV3=function(e){var a=e*6;return[this.positions[a],this.positions[a+1],this.positions[a+2]]},u.prototype.process=function(){var e=this.positions.length/6;this.previous=[],this.next=[],this.side=[],this.width=[],this.indices_array=[],this.uvs=[];var a,t;this.compareV3(0,e-1)?t=this.copyV3(e-2):t=this.copyV3(0),this.previous.push(t[0],t[1],t[2]),this.previous.push(t[0],t[1],t[2]);for(var s=0;s<e;s++){if(this.side.push(1),this.side.push(-1),this.widthCallback?a=this.widthCallback(s/(e-1)):a=1,this.width.push(a),this.width.push(a),this.uvs.push(s/(e-1),0),this.uvs.push(s/(e-1),1),s<e-1){t=this.copyV3(s),this.previous.push(t[0],t[1],t[2]),this.previous.push(t[0],t[1],t[2]);var n=s*2;this.indices_array.push(n,n+1,n+2),this.indices_array.push(n+2,n+1,n+3)}s>0&&(t=this.copyV3(s),this.next.push(t[0],t[1],t[2]),this.next.push(t[0],t[1],t[2]))}this.compareV3(e-1,0)?t=this.copyV3(1):t=this.copyV3(e-1),this.next.push(t[0],t[1],t[2]),this.next.push(t[0],t[1],t[2]),!this._attributes||this._attributes.position.count!==this.positions.length?this._attributes={position:new i.BufferAttribute(new Float32Array(this.positions),3),previous:new i.BufferAttribute(new Float32Array(this.previous),3),next:new i.BufferAttribute(new Float32Array(this.next),3),side:new i.BufferAttribute(new Float32Array(this.side),1),width:new i.BufferAttribute(new Float32Array(this.width),1),uv:new i.BufferAttribute(new Float32Array(this.uvs),2),index:new i.BufferAttribute(new Uint16Array(this.indices_array),1),counters:new i.BufferAttribute(new Float32Array(this.counters),1)}:(this._attributes.position.copyArray(new Float32Array(this.positions)),this._attributes.position.needsUpdate=!0,this._attributes.previous.copyArray(new Float32Array(this.previous)),this._attributes.previous.needsUpdate=!0,this._attributes.next.copyArray(new Float32Array(this.next)),this._attributes.next.needsUpdate=!0,this._attributes.side.copyArray(new Float32Array(this.side)),this._attributes.side.needsUpdate=!0,this._attributes.width.copyArray(new Float32Array(this.width)),this._attributes.width.needsUpdate=!0,this._attributes.uv.copyArray(new Float32Array(this.uvs)),this._attributes.uv.needsUpdate=!0,this._attributes.index.copyArray(new Uint16Array(this.indices_array)),this._attributes.index.needsUpdate=!0),this.setAttribute("position",this._attributes.position),this.setAttribute("previous",this._attributes.previous),this.setAttribute("next",this._attributes.next),this.setAttribute("side",this._attributes.side),this.setAttribute("width",this._attributes.width),this.setAttribute("uv",this._attributes.uv),this.setAttribute("counters",this._attributes.counters),this.setIndex(this._attributes.index),this.computeBoundingSphere(),this.computeBoundingBox()};function r(e,a,t,s,n){var m;if(e=e.subarray||e.slice?e:e.buffer,t=t.subarray||t.slice?t:t.buffer,e=a?e.subarray?e.subarray(a,n&&a+n):e.slice(a,n&&a+n):e,t.set)t.set(e,s);else for(m=0;m<e.length;m++)t[m+s]=e[m];return t}u.prototype.advance=function(e){var a=this._attributes.position.array,t=this._attributes.previous.array,s=this._attributes.next.array,n=a.length;r(a,0,t,0,n),r(a,6,a,0,n-6),a[n-6]=e.x,a[n-5]=e.y,a[n-4]=e.z,a[n-3]=e.x,a[n-2]=e.y,a[n-1]=e.z,r(a,6,s,0,n-6),s[n-6]=e.x,s[n-5]=e.y,s[n-4]=e.z,s[n-3]=e.x,s[n-2]=e.y,s[n-1]=e.z,this._attributes.position.needsUpdate=!0,this._attributes.previous.needsUpdate=!0,this._attributes.next.needsUpdate=!0},i.ShaderChunk.meshline_vert=["",i.ShaderChunk.logdepthbuf_pars_vertex,i.ShaderChunk.fog_pars_vertex,"","attribute vec3 previous;","attribute vec3 next;","attribute float side;","attribute float width;","attribute float counters;","","uniform vec2 resolution;","uniform float lineWidth;","uniform vec3 color;","uniform float opacity;","uniform float sizeAttenuation;","","varying vec2 vUV;","varying vec4 vColor;","varying float vCounters;","","vec2 fix( vec4 i, float aspect ) {","","    vec2 res = i.xy / i.w;","    res.x *= aspect;","	 vCounters = counters;","    return res;","","}","","void main() {","","    float aspect = resolution.x / resolution.y;","","    vColor = vec4( color, opacity );","    vUV = uv;","","    mat4 m = projectionMatrix * modelViewMatrix;","    vec4 finalPosition = m * vec4( position, 1.0 );","    vec4 prevPos = m * vec4( previous, 1.0 );","    vec4 nextPos = m * vec4( next, 1.0 );","","    vec2 currentP = fix( finalPosition, aspect );","    vec2 prevP = fix( prevPos, aspect );","    vec2 nextP = fix( nextPos, aspect );","","    float w = lineWidth * width;","","    vec2 dir;","    if( nextP == currentP ) dir = normalize( currentP - prevP );","    else if( prevP == currentP ) dir = normalize( nextP - currentP );","    else {","        vec2 dir1 = normalize( currentP - prevP );","        vec2 dir2 = normalize( nextP - currentP );","        dir = normalize( dir1 + dir2 );","","        vec2 perp = vec2( -dir1.y, dir1.x );","        vec2 miter = vec2( -dir.y, dir.x );","        //w = clamp( w / dot( miter, perp ), 0., 4. * lineWidth * width );","","    }","","    //vec2 normal = ( cross( vec3( dir, 0. ), vec3( 0., 0., 1. ) ) ).xy;","    vec4 normal = vec4( -dir.y, dir.x, 0., 1. );","    normal.xy *= .5 * w;","    normal *= projectionMatrix;","    if( sizeAttenuation == 0. ) {","        normal.xy *= finalPosition.w;","        normal.xy /= ( vec4( resolution, 0., 1. ) * projectionMatrix ).xy;","    }","","    finalPosition.xy += normal.xy * side;","","    gl_Position = finalPosition;","",i.ShaderChunk.logdepthbuf_vertex,i.ShaderChunk.fog_vertex&&"    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );",i.ShaderChunk.fog_vertex,"}"].join(`
`),i.ShaderChunk.meshline_frag=["",i.ShaderChunk.fog_pars_fragment,i.ShaderChunk.logdepthbuf_pars_fragment,"","uniform sampler2D map;","uniform sampler2D alphaMap;","uniform float useMap;","uniform float useAlphaMap;","uniform float useDash;","uniform float dashArray;","uniform float dashOffset;","uniform float dashRatio;","uniform float visibility;","uniform float alphaTest;","uniform vec2 repeat;","","varying vec2 vUV;","varying vec4 vColor;","varying float vCounters;","","void main() {","",i.ShaderChunk.logdepthbuf_fragment,"","    vec4 c = vColor;","    if( useMap == 1. ) c *= texture2D( map, vUV * repeat );","    if( useAlphaMap == 1. ) c.a *= texture2D( alphaMap, vUV * repeat ).a;","    if( c.a < alphaTest ) discard;","    if( useDash == 1. ){","        c.a *= ceil(mod(vCounters + dashOffset, dashArray) - (dashArray * dashRatio));","    }","    gl_FragColor = c;","    gl_FragColor.a *= step(vCounters, visibility);","",i.ShaderChunk.fog_fragment,"}"].join(`
`);class o extends i.ShaderMaterial{constructor(a){super({uniforms:Object.assign({},i.UniformsLib.fog,{lineWidth:{value:1},map:{value:null},useMap:{value:0},alphaMap:{value:null},useAlphaMap:{value:0},color:{value:new i.Color(16777215)},opacity:{value:1},resolution:{value:new i.Vector2(1,1)},sizeAttenuation:{value:1},dashArray:{value:0},dashOffset:{value:0},dashRatio:{value:.5},useDash:{value:0},visibility:{value:1},alphaTest:{value:0},repeat:{value:new i.Vector2(1,1)}}),vertexShader:i.ShaderChunk.meshline_vert,fragmentShader:i.ShaderChunk.meshline_frag}),this.isMeshLineMaterial=!0,this.type="MeshLineMaterial",Object.defineProperties(this,{lineWidth:{enumerable:!0,get:function(){return this.uniforms.lineWidth.value},set:function(t){this.uniforms.lineWidth.value=t}},map:{enumerable:!0,get:function(){return this.uniforms.map.value},set:function(t){this.uniforms.map.value=t}},useMap:{enumerable:!0,get:function(){return this.uniforms.useMap.value},set:function(t){this.uniforms.useMap.value=t}},alphaMap:{enumerable:!0,get:function(){return this.uniforms.alphaMap.value},set:function(t){this.uniforms.alphaMap.value=t}},useAlphaMap:{enumerable:!0,get:function(){return this.uniforms.useAlphaMap.value},set:function(t){this.uniforms.useAlphaMap.value=t}},color:{enumerable:!0,get:function(){return this.uniforms.color.value},set:function(t){this.uniforms.color.value=t}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(t){this.uniforms.opacity.value=t}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(t){this.uniforms.resolution.value.copy(t)}},sizeAttenuation:{enumerable:!0,get:function(){return this.uniforms.sizeAttenuation.value},set:function(t){this.uniforms.sizeAttenuation.value=t}},dashArray:{enumerable:!0,get:function(){return this.uniforms.dashArray.value},set:function(t){this.uniforms.dashArray.value=t,this.useDash=t!==0?1:0}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(t){this.uniforms.dashOffset.value=t}},dashRatio:{enumerable:!0,get:function(){return this.uniforms.dashRatio.value},set:function(t){this.uniforms.dashRatio.value=t}},useDash:{enumerable:!0,get:function(){return this.uniforms.useDash.value},set:function(t){this.uniforms.useDash.value=t}},visibility:{enumerable:!0,get:function(){return this.uniforms.visibility.value},set:function(t){this.uniforms.visibility.value=t}},alphaTest:{enumerable:!0,get:function(){return this.uniforms.alphaTest.value},set:function(t){this.uniforms.alphaTest.value=t}},repeat:{enumerable:!0,get:function(){return this.uniforms.repeat.value},set:function(t){this.uniforms.repeat.value.copy(t)}}}),this.setValues(a)}}o.prototype.copy=function(e){return i.ShaderMaterial.prototype.copy.call(this,e),this.lineWidth=e.lineWidth,this.map=e.map,this.useMap=e.useMap,this.alphaMap=e.alphaMap,this.useAlphaMap=e.useAlphaMap,this.color.copy(e.color),this.opacity=e.opacity,this.resolution.copy(e.resolution),this.sizeAttenuation=e.sizeAttenuation,this.dashArray.copy(e.dashArray),this.dashOffset.copy(e.dashOffset),this.dashRatio.copy(e.dashRatio),this.useDash=e.useDash,this.visibility=e.visibility,this.alphaTest=e.alphaTest,this.repeat.copy(e.repeat),this},p.exports&&(l=p.exports={MeshLine:u,MeshLineMaterial:o,MeshLineRaycast:c}),l.MeshLine=u,l.MeshLineMaterial=o,l.MeshLineRaycast=c}).call(Z)})(R,R.exports);var I=R.exports;function Pe(p={}){const{textureUrl:l,color:h,lineWidth:v,startPosition:i,endPosition:u,speed:c,opacity:r}=Object.assign({textureUrl:"/next/public/tube_bg.png",lineWidth:4,speed:10,opacity:1,startPosition:k[0],endPosition:k[1]},p),o=new V().load(l);o.wrapS=o.wrapT=H,o.repeat.set(1,1);const e=new I.MeshLineMaterial({useMap:1,color:h,lineWidth:v,resolution:new T(window.innerWidth,window.innerHeight),sizeAttenuation:1,transparent:!0,map:o,opacity:r}),a=new I.MeshLine;a.setPoints([i.x,i.y,i.z]);const t=new y(a,e),s=[],n=.001;for(let d=0;d<1;d+=n){const x=i.x+(u.x-i.x)*d,w=i.y+(u.y-i.y)*d,b=i.z+(u.z-i.z)*d;s.push(x,w,b)}let m=3;function f(){requestAnimationFrame(f);const d=s.slice(0,m+=3*c);a.setPoints(d)}return f(),t}function We(){const[p]=ee(),{sceneRef:l,rendererRef:h,outlinePassRef:v}=le("threejs-examples"),i=()=>{var r;(r=l.current)==null||r.children.forEach(o=>{var e;o.type!=="AxesHelper"&&((e=l.current)==null||e.remove(o))})},u=React.useMemo(()=>new Map([["wall",{label:"墙",onClick:()=>{var r;(r=l.current)==null||r.add(Ae({position:[0,0,0],height:4}))}}],["lianyi",{label:"涟漪",onClick:()=>{var r;(r=l.current)==null||r.add(ce({position:{x:0,y:0,z:0}}))}}],["radar",{label:"雷达扫描",onClick:()=>{var r;(r=l.current)==null||r.add(pe({position:{x:0,y:0,z:0}}))}}],["scan",{label:"二维码扫描",onClick:()=>{var r;(r=l.current)==null||r.add(fe())}}],["laser",{label:"激光束",onClick:()=>{var r;(r=l.current)==null||r.add(ge())}}],["glsl",{label:"glsl",onClick:()=>{var r;(r=l.current)==null||r.add(be({renderer:h.current}))}}],["line",{label:"line",onClick:()=>{var o,e;const r=Ce();(o=l.current)==null||o.add(r),(e=v.current)!=null&&e.selectedObjects&&(v.current.selectedObjects=[r])}}],["threeLine",{label:"threeLine",onClick:()=>{var r;(r=l.current)==null||r.add(Pe())}}]]),[l,h]),c=React.useMemo(()=>Array.from(u.entries()).map(([r,o])=>({key:r,label:o.label})),[u]);return React.useEffect(()=>{if(p.get("type")){const r=u.get(p.get("type"));r&&typeof r.onClick=="function"&&r.onClick()}},[p,u]),W.jsxs("div",{className:"threejs-examples-container",children:[W.jsx(antd.Menu,{style:{width:256},onClick:r=>{const o=u.get(r.key);o&&typeof o.onClick=="function"&&(i(),o.onClick())},defaultSelectedKeys:[],mode:"inline",items:c}),W.jsx("div",{className:"threejs-examples-main",children:W.jsx("div",{id:"threejs-examples"})})]})}export{We as default};
