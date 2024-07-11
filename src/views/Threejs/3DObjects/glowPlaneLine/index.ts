import * as THREE from 'three';
import { transVector3 } from '../../utils';
import { createGlowPlaneLineMaterial } from '../../utils/planeLine';

export interface IOptions {
  start: THREE.Vector3 | [number, number, number];
  end: THREE.Vector3 | [number, number, number];
  lineWidth: number; // 线宽
  glowRate: number; // 发光比例，中心比例 = 1.0 - 2 * glowRate
  glowColor: string; // 发光颜色
  centerColor: string; // 中心颜色
  speed: number; // 1s 几个周期
  material?: THREE.ShaderMaterial
}

export const initOptions: IOptions = {
  start: new THREE.Vector3(100, 0, 0),
  end: new THREE.Vector3(0, 0, 100),
  lineWidth: 10,
  glowRate: 0.4,
  glowColor: 'red',
  centerColor: '#fff',
  speed: 2,
};

export default class GlowPlaneLineMesh {
  scene: THREE.Scene;
  options: IOptions;
  name = 'GlowPlaneLine';
  mesh?: THREE.Mesh;
  material?: THREE.ShaderMaterial;
  geometry?: THREE.PlaneGeometry;
  animationId?: number;
  constructor(scene: THREE.Scene, options?: Partial<IOptions>) {
    this.name = 'GlowPlaneLine';
    this.scene = scene;
    this.options = Object.assign(initOptions, options);
  }
  createMesh() {
    const { start, end, lineWidth, glowColor, glowRate, centerColor, material } =
      this.options;
    // 将两个点转为三维坐标点
    const startVector3 = transVector3(start);
    const endVector3 = transVector3(end);
    // 计算两点距离
    const twoDotDistance = startVector3.distanceTo(endVector3);
    // 计算两点向量
    const startEndVector3 = startVector3.clone().sub(endVector3);
    // 计算两点向量与z轴的cos值
    const cos = startEndVector3
      .normalize()
      .dot(new THREE.Vector3(0, 0, 1).normalize());
    // 两点向量与z轴的弧度
    const rad = Math.acos(cos);
    // 创建mesh
    this.material = material || createGlowPlaneLineMaterial(glowColor, centerColor, glowRate);
    this.geometry = new THREE.PlaneGeometry(lineWidth, twoDotDistance, 1, 10);
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    // 计算两点的中心点作为mesh的位置(中心)
    const centerPoint = new THREE.Vector3();
    centerPoint.addVectors(startVector3, endVector3).divideScalar(2);
    this.mesh.position.set(centerPoint.x, centerPoint.y, centerPoint.z);
    // 默认的xy平面转为xz平面
    this.mesh.rotation.x = -Math.PI / 2;
    // 沿z轴旋转角度
    this.mesh.rotation.z = rad;
    return this.mesh;
  }
  createMeshAndStartAnimation() {
    this.createMesh();
    this.startAnimation(performance.now());
    return this
  }
  addToScene() {
    this.createMeshAndStartAnimation();
    this.scene.add(this.mesh!);
  }
  startAnimation(animationStartTime: number) {
    if (!animationStartTime || !this.material) {
      console.error(`${this.name}动画开始依赖的动画开始时间或材质缺失，请检查`);
      return;
    }
    const { speed } = this.options;
    const currentTime = performance.now();
    const moveTime = (currentTime - animationStartTime) * 0.001; // 已经运动的时间，转换成秒
    this.material.uniforms.u_amplitude.value = Math.sin(
      2 * moveTime * Math.PI * speed
    );
    this.animationId = requestAnimationFrame(() =>
      this.startAnimation(animationStartTime)
    );
  }
  stopAnimation() {
    if (!this.animationId) {
      console.error(`${this.name}未开启动画，请检查`);
      return;
    }
    cancelAnimationFrame(this.animationId);
  }
  destroy() {
    this.stopAnimation();
    this.geometry?.dispose();
    this.material?.dispose();
  }
  remove() {
    this.scene.remove(this.mesh!);
    this.destroy()
  }
}
