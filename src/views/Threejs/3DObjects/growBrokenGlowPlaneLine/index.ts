import * as THREE from 'three';
import GlowPlaneLineMesh, {
  IOptions as GlowPlaneLineOptions,
  initOptions as glowPlaneLineInitOptions,
} from '../glowPlaneLine';
import { transVector3 } from '../../utils';

export interface IOptions {
  glowPlaneLineOptions: GlowPlaneLineOptions;
  points: (THREE.Vector3 | [number, number, number])[];
  glowSpeed: number;
}

export default class GlowBrokenGlowPlaneLineMesh {
  name: string;
  scene: THREE.Scene;
  options: IOptions;
  mesh?: THREE.Group;
  material?: THREE.ShaderMaterial;
  geometry?: THREE.PlaneGeometry;
  animationId?: number;
  points: THREE.Vector3[] = [];
  cur: number = 0;
  brokenCur: number = 0;
  glowPlaneLineMeshInsList: GlowPlaneLineMesh[] = [];
  constructor(
    scene: THREE.Scene,
    options?: Partial<IOptions & GlowPlaneLineOptions>
  ) {
    this.name = 'GlowBrokenGlowPlaneLineMesh';
    this.scene = scene;
    const initOptions: IOptions = {
      points: [],
      glowSpeed: 1,
      glowPlaneLineOptions: glowPlaneLineInitOptions,
    };
    this.options = Object.assign(initOptions, options);
  }
  createPoints() {
    const { points } = this.options;
    const start = points[this.brokenCur];
    const end = points[this.brokenCur + 1];
    const startVector3 = transVector3(start);
    const endVector3 = transVector3(end);
    console.log(startVector3, endVector3);
    const curve = new THREE.LineCurve3(
      new THREE.Vector3(startVector3.x, startVector3.y, startVector3.z),
      new THREE.Vector3(endVector3.x, endVector3.y, endVector3.z)
    );
    this.points = curve.getPoints(startVector3.distanceTo(endVector3));
  }
  createGlowPlaneLineMesh() {
    return new GlowPlaneLineMesh(this.scene, {
      start: this.points[0],
      end: this.points[this.cur],
    }).createMeshAndStartAnimation();
  }
  addToScene() {
    this.createPoints(); // 第一批points生成
    this.glowPlaneLineMeshInsList[this.brokenCur] =
      this.createGlowPlaneLineMesh()!; // 第一个glowPlaneLineMesh
    this.mesh = new THREE.Group();
    this.mesh?.add(this.glowPlaneLineMeshInsList[this.brokenCur].mesh as any);
    this.startAnimation(performance.now());
    this.scene.add(this.mesh!);
  }
  startAnimation(startAnimationTime: number) {
    this.glowPlaneLineMeshInsList[this.brokenCur]?.destroy();
    this.mesh?.remove(
      this.glowPlaneLineMeshInsList[this.brokenCur]?.mesh as any
    );
    this.glowPlaneLineMeshInsList[this.brokenCur] =
      this.createGlowPlaneLineMesh()!;
    this.mesh?.add(this.glowPlaneLineMeshInsList[this.brokenCur].mesh as any);
    this.cur += 3;
    if (this.cur >= this.points.length - 1) {
      console.log(
        this.cur,
        this.points.length - 1,
        this.brokenCur,
        'this.cur, this.points.length - 1'
      );
      if (this.brokenCur >= this.options.points.length - 2) {
        return;
      }
      this.brokenCur += 1;
      this.cur = 0;
      this.createPoints()
    }
    this.animationId = requestAnimationFrame(() =>
      this.startAnimation(startAnimationTime)
    );
  }
  stopAnimation() {}
}
