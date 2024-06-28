import * as THREE from 'three';

// 着色器代码
const vertexShader = `
    varying vec2 vUv;
    void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`;

const fragmentShader = `
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
}`;

export default (options?: any) => {
  const {
    lineWidth,
    height,
    width,
    position,
    lineOpenTime,
    scanTime,
    opacityTime,
  } = Object.assign(
    {
      lineWidth: 1,
      height: 100,
      width: 100,
      position: [0, 0, 0],
      lineOpenTime: 0.8,
      scanTime: 2.0,
      opacityTime: 0.2,
    },
    options
  );
  // 材质
  const material = new THREE.ShaderMaterial({
    uniforms: {
      time: { value: 0.0 },
      lineWidth: { value: lineWidth / height },
      lineOpenTime: { value: lineOpenTime },
      scanTime: { value: scanTime },
      opacityTime: { value: opacityTime },
    },
    vertexShader,
    fragmentShader,
    transparent: true,
    side: THREE.DoubleSide,
  });

  // 平面几何体
  const geometry = new THREE.PlaneGeometry(width, height, 1000, 1000);
  const plane = new THREE.Mesh(geometry, material);
  plane.position.copy(new THREE.Vector3(...position));

  const startTime = performance.now();

  function animate() {
    const currentTime = performance.now();
    requestAnimationFrame(animate);
    const elapsed = (currentTime - startTime) / 1000; // 时间转换为秒
    material.uniforms.time.value = elapsed; // 更新时间
  }

  animate();
  return plane;
};
