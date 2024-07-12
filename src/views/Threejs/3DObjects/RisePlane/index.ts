import * as THREE from 'three';
import { isVector3 } from '../../utils';

export interface IOptions {
  color: string;
  width: number;
  height: number;
  position: THREE.Vector3;
  speed: number; // 1s 运动一个周期
  baseOpacity: number; // 基础透明度
}

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
const fragmentShader = ` 
uniform vec3 u_color;
uniform float u_baseOpacity;
varying vec2 vUv;

void main() {
    gl_FragColor = vec4(u_color, (1.0 - vUv.y) * u_baseOpacity);
}
`;

const initOptions: IOptions = {
  color: 'red',
  width: 40,
  height: 40,
  position: new THREE.Vector3(0, 0, 0), // 平面中心位置
  speed: 2, // 1s 运动2个周期
  baseOpacity: 0.5,
};

export default class WallMesh {
  name = 'RisePlane3DObject';
  scene: THREE.Scene;
  options: IOptions;
  material?: THREE.ShaderMaterial;
  geometry?: THREE.BufferGeometry;
  object3D?: THREE.Object3D;
  animationId?: number;
  constructor(scene: THREE.Scene, options?: Partial<IOptions>) {
    this.scene = scene;
    this.options = {
      ...initOptions,
      ...options,
    };
    if (!isVector3(this.options.position)) {
      console.error(`${this.name}位置参数错误，请检查`);
      return;
    }
  }
  create3DObject() {
    const { width, height, color, position, baseOpacity } = this.options;
    this.geometry = new THREE.PlaneGeometry(width, height);
    this.geometry.translate(0, height / 2, 0);

    this.material = new THREE.ShaderMaterial({
      uniforms: {
        u_height: {
          value: 0,
        },
        u_color: {
          value: new THREE.Color(color),
        },
        u_speed: {
          value: 1.0,
        },
        u_maxHeight: {
          value: height,
        },
        u_baseOpacity: {
          value: baseOpacity,
        },
      },
      transparent: true,
      depthWrite: false, // 渲染此材质是否对深度缓冲区有任何影响。默认为true
      // depthTest: false, // 是否在渲染此材质时启用深度测试。默认为 true。
      side: THREE.DoubleSide,
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
    });
    this.object3D = new THREE.Mesh(this.geometry, this.material);
    this.object3D.position.copy(position);
    return this.object3D;
  }
  addToScene() {
    const object3D = this.create3DObject();
    this.startAnimation(performance.now());
    this.scene.add(object3D);
  }
  remove() {
    this.scene.remove(this.object3D!);
    this.geometry?.dispose();
    this.material?.dispose();
    this.stopAnimation();
  }
  startAnimation(animationStartTime: number) {
    if (!animationStartTime || !this.material) {
      console.error(`${this.name}动画开始依赖的动画开始时间或材质缺失，请检查`);
      return;
    }
    const currentTime = performance.now();
    const { height, speed } = this.options;
    const moveTime = (currentTime - animationStartTime) * 0.001; // 已经运动的时间，转换成秒
    // sin(2x - 1/2)π * 0.5 + 0.5
    const fx = Math.sin(((moveTime * 2) / speed - 0.5) * Math.PI) * 0.5 + 0.5;
    const targetHeight = fx * height; // 随时间变化的高度
    this.material.uniforms.u_height.value = targetHeight;
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
}
