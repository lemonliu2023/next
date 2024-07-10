import * as THREE from 'three';

export const createGlowPlaneLineMaterial = (
  glowColor: string,
  centerColor: string,
  glowRate: number
) => {
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
uniform float u_amplitude;
uniform vec3 u_glowColor;
uniform vec3 u_centerColor;
uniform float u_glowRate;

void main() {
    if(vUv.x < u_glowRate) {
        gl_FragColor = vec4(u_glowColor, pow(vUv.x / u_glowRate, 2.0 + u_amplitude ) * 0.6);
    } else if(vUv.x < (1.0 - u_glowRate)) {
        gl_FragColor = vec4(u_centerColor, 1.0);
    } else {
        gl_FragColor = vec4(u_glowColor, pow((1.0 - vUv.x) / u_glowRate, 2.0 + u_amplitude) * 0.6);
    }
}
`;

  return new THREE.ShaderMaterial({
    uniforms: {
      u_amplitude: {
        value: 0,
      },
      u_glowColor: {
        value: new THREE.Color(glowColor),
      },
      u_centerColor: {
        value: new THREE.Color(centerColor),
      },
      u_glowRate: {
        value: glowRate,
      },
    },
    side: THREE.DoubleSide,
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    transparent: true,
  });
};