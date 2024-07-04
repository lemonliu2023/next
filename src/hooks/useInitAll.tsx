import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
// import { CSS3DRenderer } from 'three/examples/jsm/renderers/CSS3DRenderer.js';

export const initRender = (element: HTMLElement) => {
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    // alpha: true,
  });
  renderer.setSize(element?.clientWidth, element?.clientHeight);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  element?.appendChild(renderer.domElement);
  return renderer;
};

export const initCamera = (element: HTMLElement) => {
  const camera = new THREE.PerspectiveCamera(
    45,
    element?.clientWidth / element?.clientHeight,
    0.1,
    10000
  );
  camera.position.set(-100, 100, 100);
  camera.lookAt(0, 0, 0);
  // camera.position.z = 5;
  return camera;
};

export const initScene = () => {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xf0f0f0);
  return scene;
};

const useInitAll = (elementId: string) => {
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const cameraRef = useRef<THREE.PerspectiveCamera>();
  const sceneRef = useRef<THREE.Scene>();
  const controlsRef = useRef<OrbitControls>();
  useEffect(() => {
    const element = document.getElementById(elementId);
    if(!element) {
      throw Error(`not found target element => ${elementId}`)
    }
    rendererRef.current = initRender(element);
    cameraRef.current = initCamera(element);
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
    const axesHelper = new THREE.AxesHelper(500);
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
  }, [elementId]);
  return {
    rendererRef,
    cameraRef,
    sceneRef,
    controlsRef,
  };
};

export default useInitAll;
