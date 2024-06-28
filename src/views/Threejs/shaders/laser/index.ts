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
`;

export default (options?: any) => {
  const {
    height,
    position,
    width,
    color
  } = Object.assign(
    {
      height: 20,
      width: 200,
      position: [0, 0, 0],
      color: new THREE.Color(1.7, 0.2, 3.0)
    },
    options
  );
  // 材质
  const material = new THREE.ShaderMaterial({
    uniforms: {
      time: { value: 0.0 },
      color: {value: new THREE.Color(color)}
    },
    vertexShader,
    fragmentShader,
    transparent: true,
    side: THREE.DoubleSide,
  });

  // 平面几何体
  var myCylinderGeometry = new THREE.PlaneGeometry(width, height, 100, 100);
  const plane = new THREE.Mesh(myCylinderGeometry, material);
  plane.position.copy(new THREE.Vector3(...position));

  const startTime = performance.now();

  function animate() {
    const currentTime = performance.now();
    requestAnimationFrame(animate)
    const elapsed = (currentTime - startTime) / 1000; // 时间转换为秒
    material.uniforms.time.value = elapsed; // 更新时间
  }

  animate();
  return plane;
};
