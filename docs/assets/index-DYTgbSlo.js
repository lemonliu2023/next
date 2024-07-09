import{C as m,S as v,a as p,D as h,M as g,V as y}from"./useInitAll-D69CNfK-.js";const _=`
uniform vec3 u_color;

uniform float time;
uniform float u_height;

varying float v_opacity;

void main() {

    vec3 vPosition = position;

    v_opacity = mix(1.0, 0.0, position.y / u_height);

    gl_Position = projectionMatrix * modelViewMatrix * vec4(vPosition, 1.0);
}
`,f=` 
uniform vec3 u_color;

varying float v_opacity;

void main() { 
    gl_FragColor = vec4(u_color, v_opacity * 0.5);
}
`;function w(n={}){const{radius:e,height:o,opacity:r,color:s,position:c}=Object.assign({color:"#f00",opacity:.6,radius:20,height:2,position:[0,0,0]},n),i=new m(e,e,o,32,1,!0);i.translate(0,o/2,0);const l=new v({uniforms:{u_height:{value:o},u_speed:{value:0},u_opacity:{value:r},u_color:{value:new p(s)},time:{value:100}},transparent:!0,depthWrite:!1,side:h,vertexShader:_,fragmentShader:f}),t=new g(i,l);t.position.copy(new y(...c));const a=()=>{const u=8+Math.sin(Date.now()*.003)*5;t.scale.y=u,requestAnimationFrame(a)};return a(),t}export{w};
