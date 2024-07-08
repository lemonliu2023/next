import * as THREE from 'three';
import { brokenLinePoints } from '@/views/Threejs/data/points';
import { MeshLine, MeshLineMaterial } from 'three.meshline';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function drawLine(options: any = {}) {
  const {
    textureUrl,
    color,
    lineWidth,
    speed,
    opacity,
    points
  } = Object.assign(
    {
      textureUrl: '/next/tube_bg.png',
      color: 'purple',
      lineWidth: 4,
      speed: 1,
      opacity: 1,
      points: brokenLinePoints,
    },
    options
  );

  const texture = new THREE.TextureLoader().load(textureUrl);
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(1, 1);
  // 创建线条材质
  const material = new MeshLineMaterial({
    // useMap: 1,
    color, // 白色
    lineWidth, // 线条宽度
    resolution: new THREE.Vector2(window.innerWidth, window.innerHeight), // 分辨率，用于计算线条的顶点数量
    sizeAttenuation: 1, // 是否根据距离衰减线条大小
    transparent: true,
    // map: texture,
    opacity,
  });

  // 创建线条对象
  const geometry = new MeshLine();

  // geometry.setPoints([startPosition.x, startPosition.y, startPosition.z]);

  const mesh = new THREE.Mesh(geometry, material);

  const verticesList: number[] = [];

  // 在折线段取100个点, 让 Curve 3D 绘制出来的线 尽可能直
  points.reduce((prev: any, next: any) => {
    const curve = new THREE.LineCurve3(
      new THREE.Vector3(prev.x, prev.y, prev.z),
      new THREE.Vector3(next.x, next.y, next.z)
    );
    const points = curve.getPoints(100);
    points.forEach(subItem => {
      verticesList.push(subItem.x, subItem.y, subItem.z);
    })
    return next;
  });


  let start = 3;

  // 更新线条的顶点数组
  function animate() {
    requestAnimationFrame(animate);

    const vertices = verticesList.slice(0, (start += 3 * speed));

    // 更新线条的顶点数组
    geometry.setPoints(vertices);
  }
  animate();

  return mesh;
}
