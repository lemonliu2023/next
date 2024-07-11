import * as THREE from 'three';
import GlowPlaneLineMesh, {
  IOptions as GlowPlaneLineOptions,
  initOptions as glowPlaneLineInitOptions,
} from '../glowPlaneLine';
import { transVector3 } from '../../utils';
import { createGlowPlaneLineMaterial } from '../../utils/planeLine';

export interface IOptions {
  glowPlaneLineOptions: GlowPlaneLineOptions;
  points: ([THREE.Vector3, THREE.Vector3] | [ [number, number, number], [number, number, number] ])[];
}


export default class GlowBrokenGlowPlaneLineMesh {
  name: string;
  scene: THREE.Scene;
  options: IOptions;
  mesh?: THREE.Object3D;
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
    this.name = 'BrokenGlowPlaneLineMesh';
    this.scene = scene;
    const initOptions: IOptions = {
      points: [],
      glowPlaneLineOptions: glowPlaneLineInitOptions,
    };
    this.options = Object.assign(initOptions, {
      ...options,
      glowPlaneLineOptions: {
        ...glowPlaneLineInitOptions,
        ...options?.glowPlaneLineOptions,
      },
    });
  }
  createMesh() {
    const {
      glowPlaneLineOptions: { glowColor, glowRate, centerColor },
    } = this.options;
    this.material = createGlowPlaneLineMaterial(glowColor, centerColor, glowRate);
    this.mesh = new THREE.Group();
    const { points } = this.options;
    points.forEach(([start, end]) => {
      const startVector3 = transVector3(start);
      const endVector3 = transVector3(end);
      const glowPlaneLineMesh = new GlowPlaneLineMesh(this.scene, {
        start: startVector3,
        end: endVector3,
        material: this.material,
      }).createMesh();
      this.mesh?.add(glowPlaneLineMesh);
    })
    return this.mesh;
  }
  addToScene() {
    this.createMesh();
    this.startAnimation(performance.now());
    this.scene.add(this.mesh!);
  }
  startAnimation(startAnimationTime: number) {
    if (!startAnimationTime || !this.material) {
      console.error(`${this.name}动画开始依赖的动画开始时间或材质缺失，请检查`);
      return;
    }
    const { speed } = this.options.glowPlaneLineOptions;
    const currentTime = performance.now();
    const moveTime = (currentTime - startAnimationTime) * 0.001; // 已经运动的时间，转换成秒
    this.material.uniforms.u_amplitude.value = Math.sin(
      2 * moveTime * Math.PI * speed
    );
    this.animationId = requestAnimationFrame(() =>
      this.startAnimation(startAnimationTime)
    );
  }
  stopAnimation() {}
}
