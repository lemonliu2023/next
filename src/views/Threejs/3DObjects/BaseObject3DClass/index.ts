import * as THREE from 'three';

export interface IOptions {}


// eslint-disable-next-line @typescript-eslint/no-unused-vars
const vertexShader = `
uniform vec3 u_color;
varying vec2 vUv;
uniform float u_height;
uniform float u_maxHeight;

void main() {
    vec3 vPosition = position;
    vUv = uv;
    vPosition.y = vPosition.y * u_height / u_maxHeight;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(vPosition, 1.0);
}
`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const fragmentShader = ` 
uniform vec3 u_color;
uniform float u_baseOpacity;
varying vec2 vUv;

void main() {

}
`;

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
