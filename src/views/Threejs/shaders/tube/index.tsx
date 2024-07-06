import * as THREE from 'three';
import { brokenLinePoints } from '@/views/Threejs/data/points';

const line = () => {
  // 在折线段取100个点, 让 Curve 3D 绘制出来的线 尽可能直
  const resArr: THREE.Vector3[] = [];
  brokenLinePoints.reduce((prev, next) => {
    const curve = new THREE.LineCurve3(
      new THREE.Vector3(prev.x, prev.y, prev.z),
      new THREE.Vector3(next.x, next.y, next.z)
    );
    const points = curve.getPoints(100);
    resArr.push(...points);
    return next;
  });
  const tubeGeometry = new THREE.TubeGeometry(
    new THREE.CatmullRomCurve3(resArr),
    80,
    0.8
  );
  const texture = new THREE.TextureLoader().load('/next/public/tube_bg.png');
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping; //每个都重复
  texture.repeat.set(1, 1);
  texture.needsUpdate = true;
  const material = new THREE.MeshBasicMaterial({
    map: texture,
    side: THREE.BackSide,
    transparent: true,
  });
  const mesh = new THREE.Mesh(tubeGeometry, material);
  const animationFn = () => {
    if (material.map?.offset?.x !== undefined) {
      material.map.offset.x = material.map?.offset?.x - 0.01;
    }
    requestAnimationFrame(animationFn);
  };
  animationFn();
  console.log(mesh, 'mesh');
  return mesh;
};

export default line;
