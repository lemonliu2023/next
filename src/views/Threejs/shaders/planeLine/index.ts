import * as THREE from 'three';

const vertexShader = `
varying vec2 vUv;

void main() {
    vec3 vPosition = position;
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(vPosition, 1.0);
}
`;
const fragmentShader = ` 
varying vec2 vUv;
uniform float u_speed;

void main() {
    if(vUv.x < 0.4) {
        gl_FragColor = vec4(1.0, 0.0, 0.0, pow(vUv.x / 0.35, 2.0 + u_speed ) * 0.6);
    } else if(vUv.x < 0.6) {
        gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
    } else {
        gl_FragColor = vec4(1.0, 0.0, 0.0, pow((0.35 - vUv.x + 0.65) / 0.35, 2.0 + u_speed) * 0.6);
    }
}
`;

const planeLine = () => {
  const startPosition = [100, 0, 0];
  const endPosition = [0, 0, 100];
  const plane = new THREE.PlaneGeometry(5, 100, 1, 100);
  const material = new THREE.ShaderMaterial({
    // color: 0x00ff00,
    uniforms: {
        u_speed: {
            value: 0.1
        }
    },
    side: THREE.DoubleSide,
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    transparent: true
  });
  const mesh = new THREE.Mesh(plane, material);
  mesh.position.set(
    (startPosition[0] + endPosition[0]) / 2,
    (startPosition[1] + endPosition[1]) / 2,
    (startPosition[2] + endPosition[2]) / 2
  );
  mesh.rotation.x = - Math.PI / 2;
  mesh.rotation.z = - Math.PI / 4;
  mesh.scale.setY(1.414)
  const animationFn = () => {
    material.uniforms.u_speed.value = Math.sin(Date.now() * 0.008)
    requestAnimationFrame(animationFn)
  }
  animationFn()
  return mesh;
};

export default planeLine;
