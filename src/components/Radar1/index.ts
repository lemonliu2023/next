import * as THREE from 'three';

const vertexShader = `
  varying vec2 vUv;
  void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
  }`;
    

const fragmentShader = `uniform float time;
uniform vec2 resolution;
varying vec2 vUv;

float PI = 3.1415926535897932384626433832795;
float radarCenterSize = 0.05;
float radarLineLength = 0.95;
float radarLineWidth = 0.01;
float radarRotationSpeed = 1.0;

vec3 RadarColor(float d) {
    return mix(vec3(0.0), vec3(1.0), smoothstep(0.49, 0.51, d));
}

void main() {
    vec2 q = (gl_FragCoord.xy / resolution.xy) * 2.0 - 1.0;
    vec2 p = vec2(q.x, q.y);
    vec2 center = vec2(0.0);
    float distToCenter = length(p - center);

    if (distToCenter < radarCenterSize) {
        gl_FragColor = vec4(RadarColor(distToCenter / radarCenterSize), 1.0);
    } else {
        float angle = atan(p.y, p.x) + time * radarRotationSpeed;
        float distOnLine = cos(angle) * length(p);
        float distFromLine = abs(sin(angle) * length(p));

        if (distOnLine > 0.0 && distOnLine < radarLineLength && distFromLine < radarLineWidth) {
            gl_FragColor = vec4(RadarColor(distFromLine / radarLineWidth), 1.0);
        } else {
            discard;
        }
    }
}`;

export default function () {
  var geometry = new THREE.PlaneGeometry(10, 10);
  var material = new THREE.ShaderMaterial({
    uniforms: {
      time: { value: 1.0 },
      resolution: {
        value: new THREE.Vector2(window.innerWidth, window.innerHeight),
      },
    },
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    transparent: true,
  });

  const mesh = new THREE.Mesh(geometry, material);

  // mesh.rotation.set(rotation.x, rotation.y, rotation.z);
  mesh.position.copy(new THREE.Vector3(10, 10, 10));

  const animateFn = () => {
    material.uniforms.time.value += 0.01;
    requestAnimationFrame(animateFn);
  };
  animateFn();
  return mesh;
}
