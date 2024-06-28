import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
// import { CSS3DRenderer } from 'three/examples/jsm/renderers/CSS3DRenderer.js';

export const initRender = (elementId: string) => {
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    // alpha: true,
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  document.getElementById(elementId)?.appendChild(renderer.domElement);
  return renderer;
};

export const initCamera = () => {
  const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
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

export default (elementId: string) => {
  let renderer: THREE.WebGLRenderer | null = null,
    camera: THREE.PerspectiveCamera | null = null,
    scene: THREE.Scene | null = null,
    controls: OrbitControls | null = null;
  renderer = initRender(elementId);
  camera = initCamera();
  scene = initScene();
  const geometry = new THREE.BoxGeometry(10, 10, 10);
  const material = new THREE.MeshBasicMaterial({ color: 'red' });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(0, 10, 0);
  // scene.add(mesh);
  controls = new OrbitControls(camera, renderer.domElement); // 可拖动
  const axesHelper = new THREE.AxesHelper(500)
  // const threeDRenderer = new CSS3DRenderer();
  // threeDRenderer.setSize(window.innerWidth - 200, window.innerHeight);
  // document.getElementById(elementId)?.appendChild(threeDRenderer.domElement);
  // new OrbitControls(camera, threeDRenderer.domElement)
  scene.add(axesHelper)
  const animationFn = () => {
    renderer?.render(scene!, camera!);
    // threeDRenderer.render(scene!, camera!)
    requestAnimationFrame(animationFn);
  };
  animationFn();
  return {
    renderer,
    camera,
    scene,
    controls,
  };
};
