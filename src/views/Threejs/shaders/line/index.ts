import * as THREE from 'three';
import { brokenLinePoints } from '@/views/Threejs/data/points';
import { MeshLine, MeshLineMaterial } from 'three.meshline';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function drawLine(options: any = {}) {
  const {
    textureUrl,
    color,
    lineWidth,
    startPosition,
    endPosition,
    speed,
    opacity,
  } = Object.assign(
    {
      textureUrl: '/next/tube_bg.png',
      // color: 'purple',
      lineWidth: 4,
      speed: 10,
      opacity: 1,
      startPosition: brokenLinePoints[0],
      endPosition: brokenLinePoints[1],
    },
    options
  );

  const texture = new THREE.TextureLoader().load(textureUrl);
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(1, 1);
  // 创建线条材质
  const material = new MeshLineMaterial({
    useMap: 1,
    color, // 白色
    lineWidth, // 线条宽度
    resolution: new THREE.Vector2(window.innerWidth, window.innerHeight), // 分辨率，用于计算线条的顶点数量
    sizeAttenuation: 1, // 是否根据距离衰减线条大小
    transparent: true,
    map: texture,
    opacity,
  });

  // 创建线条对象
  const geometry = new MeshLine();

  geometry.setPoints([startPosition.x, startPosition.y, startPosition.z]);

  const mesh = new THREE.Mesh(geometry, material);

  const verticesList: number[] = [];

  const process = 0.001;

  // 根据起点终点位置生成线条顶点数组
  for (let i = 0; i < 1; i += process) {
    const x = startPosition.x + (endPosition.x - startPosition.x) * i;
    const y = startPosition.y + (endPosition.y - startPosition.y) * i;
    const z = startPosition.z + (endPosition.z - startPosition.z) * i;
    verticesList.push(x, y, z);
  }

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
