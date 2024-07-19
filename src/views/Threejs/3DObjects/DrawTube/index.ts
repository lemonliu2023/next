/**
 * 管道不适合运动
 */
import * as THREE from 'three';

export interface IOptions {
  points: THREE.Vector3[];
  step: number; // 每秒增加的步长
  color: string;
}

const initOptions: IOptions = {
  points: [],
  step: 100,
  color: 'red',
};

export default class Tube3DObject {
  name = 'Tube3DObject';
  scene: THREE.Scene;
  options: IOptions;
  material?: THREE.MeshBasicMaterial;
  activeGeometry?: THREE.TubeGeometry;
  geometry?: THREE.TubeGeometry;
  mesh?: THREE.Object3D;
  animationId?: number;
  vector3Points: THREE.Vector3[][] = [];
  curSegment: number = 0; // 当前线段指针
  pointer: number = 0; // 当前线段的点指针段指针
  activeLineMesh: THREE.Object3D | undefined;
  constructor(scene: THREE.Scene, options?: Partial<IOptions>) {
    this.scene = scene;
    this.options = {
      ...initOptions,
      ...options,
    };
    const { points, step } = this.options;
    const filterPoints: THREE.Vector3[] = [];
    points.reduce((prev, next) => {
      if(!prev.equals(next)) {
        filterPoints.push(prev);
      }
      return next
    })
    filterPoints.reduce((prev, next, curIndex) => {
      const curve = new THREE.LineCurve3(prev, next);
      const points = curve.getPoints(prev.distanceTo(next));
      this.vector3Points[curIndex - 1] = points;
      return next;
    });
    this.pointer = step
  }
  createMesh() {
    const { color } = this.options;
    this.material = new THREE.MeshBasicMaterial({
      color: new THREE.Color(color),
      side: THREE.DoubleSide,
      transparent: true,
    });
    this.mesh = new THREE.Group();
    return this.mesh;
  }
  addToScene() {
    const mesh = this.createMesh();
    this.startAnimation(performance.now());
    this.scene.add(mesh);
  }
  removeFromScene() {
    this.scene.remove(this.mesh!);
    this.geometry?.dispose();
    this.material?.dispose();
    this.stopAnimation();
  }
  generateActiveMesh() {
    let flag = false;
    if (this.activeGeometry) {
      this.activeGeometry.dispose();
    }
    if (this.activeLineMesh && this.mesh) {
      this.mesh.remove(this.activeLineMesh);
    }
    const activePoints = this.vector3Points[this.curSegment]
    const curvePoints = activePoints.slice(0, this.pointer)
    if(curvePoints.length < 2) return
    const geometry = new THREE.TubeGeometry(
      new THREE.CatmullRomCurve3(curvePoints),
      80,
      0.8
    );
    const mesh = new THREE.Mesh(geometry, this.material);
    if(this.pointer > activePoints.length) {
      this.pointer = 0
      if(this.curSegment < this.vector3Points.length - 1) {
        this.curSegment++
      } else {
        flag = true
      }
    } else {
      this.activeGeometry = geometry
      this.activeLineMesh = mesh
    }
    this.mesh?.add(mesh)
    return flag
  }
  startAnimation(animationStartTime: number) {
    const currentTime = performance.now();
    const moveTime = (currentTime - animationStartTime) * 0.001; // 已经运动的时间，转换成秒
    this.pointer = this.options.step * moveTime;
    const isEnd = this.generateActiveMesh();
    if(isEnd) return;
    this.animationId = requestAnimationFrame(
      this.startAnimation.bind(this, this.pointer === 0 ? performance.now() : animationStartTime)
    );
  }
  stopAnimation() {
    if (!this.animationId) {
      console.error(`${this.name}未开启动画，请检查`);
      return;
    }
    cancelAnimationFrame(this.animationId);
  }
}
