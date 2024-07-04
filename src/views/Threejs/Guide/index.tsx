import { initRender, initCamera, initScene } from '@/hooks/useInitAll';
import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/Addons.js';

const Guide = () => {
    const rendererRef = useRef<THREE.WebGLRenderer>();
  const cameraRef = useRef<THREE.PerspectiveCamera>();
  const sceneRef = useRef<THREE.Scene>();
  const controlsRef = useRef<OrbitControls>();
  useEffect(() => {
    const element = document.getElementById('threejs-guide-wrapper');
    rendererRef.current = initRender(element!);
    cameraRef.current = initCamera(element!);
    sceneRef.current = initScene();
    const geometry = new THREE.BoxGeometry(10, 10, 10);
    const material = new THREE.MeshBasicMaterial({ color: 'red' });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(0, 10, 0);
    // scene.add(mesh);
    controlsRef.current = new OrbitControls(
      cameraRef.current,
      rendererRef.current.domElement
    ); // 可拖动
    const axesHelper = new THREE.AxesHelper(100);
    // const threeDRenderer = new CSS3DRenderer();
    // threeDRenderer.setSize(window.innerWidth - 200, window.innerHeight);
    // document.getElementById(elementId)?.appendChild(threeDRenderer.domElement);
    // new OrbitControls(camera, threeDRenderer.domElement)
    sceneRef.current.add(axesHelper);
    const animationFn = () => {
      rendererRef.current?.render(sceneRef.current!, cameraRef.current!);
      // threeDRenderer.render(scene!, camera!)
      requestAnimationFrame(animationFn);
    };
    animationFn();
  }, []);
    return <div className="threejs-guide-container">
        <div id='threejs-guide-wrapper' style={{width: 400, height: 300}}></div>
    </div>
}

export default Guide;