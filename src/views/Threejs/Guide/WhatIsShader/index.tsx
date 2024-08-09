import useInitAll from '@/hooks/useInitAll';
import { useEffect } from 'react';
import * as THREE from 'three';

const vertexShader = `
varying vec2 vUv;

void main() {
    vec3 vPosition = position;
    if(position.y > 0.5) {
      vPosition.y = position.y / 2.0;
    };
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(vPosition, 1.0);
}
`
const fragmentShader = `
varying vec2 vUv;

void main() {
    gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
}`

function RemoveMeshTest() {
  const { sceneRef } = useInitAll('what-is-shader')
  useEffect(() => {
    const geometry = new THREE.PlaneGeometry(50, 50);
    const material = new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        transparent: true,
    });
    const object = new THREE.Mesh(geometry, material);
    sceneRef.current!.add(object);
  }, [sceneRef]);
  return (
    <>
      <div id="what-is-shader" style={{width: '100%'}}></div>
    </>
  );
}

export default RemoveMeshTest;
