import * as THREE from 'three';

export interface IOptions {}

const initOptions: IOptions = {
  
};

export default class WallMesh {
  name = '';
  scene: THREE.Scene;
  options: IOptions;
  material?: THREE.ShaderMaterial;
  geometry?: THREE.CylinderGeometry;
  mesh?: THREE.Mesh;
  animationId?: number;
  constructor(scene: THREE.Scene, options?: Partial<IOptions>) {
    this.scene = scene;
    this.options = {
      ...initOptions,
      ...options,
    };
  }
  createMesh() {}
  addToScene() {}
  removeFromScene() {}
  startAnimation(animationStartTime: number) {
    console.log(animationStartTime);
  }
  stopAnimation() {
    if (!this.animationId) {
      console.error(`${this.name}未开启动画，请检查`);
      return;
    }
    cancelAnimationFrame(this.animationId);
  }
}
