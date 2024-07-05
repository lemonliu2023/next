import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
// import { CSS3DRenderer } from 'three/examples/jsm/renderers/CSS3DRenderer.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
// 引入OutlinePass通道
import { OutlinePass } from 'three/examples/jsm/postprocessing/OutlinePass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { FXAAShader } from 'three/examples/jsm/shaders/FXAAShader.js';

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
  const outlinePassRef = useRef<OutlinePass>();
  useEffect(() => {
    const element = document.getElementById(elementId);
    if (!element) {
      throw Error(`not found target element => ${elementId}`);
    }
    rendererRef.current = initRender(element);
    cameraRef.current = initCamera(element);
    sceneRef.current = initScene();
    const renderScene = new RenderPass(sceneRef.current, cameraRef.current);
    // OutlinePass第一个参数v2的尺寸和canvas画布保持一致
    const v2 = new THREE.Vector2(window.innerWidth, window.innerHeight);
    outlinePassRef.current = new OutlinePass(
      v2,
      sceneRef.current,
      cameraRef.current
    );

    const composer = new EffectComposer(rendererRef.current);
    outlinePassRef.current.visibleEdgeColor.set('#4d57fd'); // 可见边缘颜色
    outlinePassRef.current.hiddenEdgeColor.set('#8a90f3'); // 隐藏边缘颜色
    outlinePassRef.current.edgeStrength = 4; // 边缘的强度，值越高边框范围越大
    outlinePassRef.current.edgeThickness = 5; // 边缘浓度
    outlinePassRef.current.pulsePeriod = 3; // 闪烁频率，值越大频率越低
    outlinePassRef.current.edgeGlow = 2.0; // 发光强度
    composer.addPass(renderScene);
    // 去锯齿 好像没用 -_-
    const effectFXAA = new ShaderPass(FXAAShader);
    effectFXAA.uniforms.resolution.value.set(
      1 / window.innerWidth,
      1 / window.innerHeight
    );
    composer.addPass(effectFXAA);

    // 一个模型对象
    outlinePassRef.current.selectedObjects = [];
    composer.addPass(outlinePassRef.current);
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
      // rendererRef.current?.render(sceneRef.current!, cameraRef.current!);
      composer.render();
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
    outlinePassRef
  };
};

export default useInitAll;
