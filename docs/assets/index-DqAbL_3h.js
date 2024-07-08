import{j as o}from"./index-BytCle9r.js";import{S as h,D as T,P as u,c as y,V as U,u as W}from"./useInitAll-CuChwT_e.js";const C=`
    varying vec2 vUv;
    void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`,x=`
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
}`,j=i=>{const{lineWidth:t,height:e,width:l,position:s,lineOpenTime:m,scanTime:v,opacityTime:c}=Object.assign({lineWidth:1,height:100,width:100,position:[0,0,0],lineOpenTime:.8,scanTime:2,opacityTime:.2},i),n=new h({uniforms:{time:{value:0},lineWidth:{value:t/e},lineOpenTime:{value:m},scanTime:{value:v},opacityTime:{value:c}},vertexShader:C,fragmentShader:x,transparent:!0,side:T}),d=new u(l,e,1e3,1e3),r=new y(d,n);r.position.copy(new U(...s));const p=performance.now();function a(){const g=performance.now();requestAnimationFrame(a);const f=(g-p)/1e3;n.uniforms.time.value=f}return a(),r},O=()=>{const{sceneRef:i,rendererRef:t}=W("threejs-examples");return React.useEffect(()=>{var e;(e=i.current)==null||e.add(j())},[t,i]),o.jsx(o.Fragment,{children:o.jsx("div",{className:"threejs-examples-main",children:o.jsx("div",{id:"threejs-examples"})})})};export{O as default};
