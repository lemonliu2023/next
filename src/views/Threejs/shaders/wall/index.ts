import * as THREE from 'three';

interface IOptions {
  color: string;
  radius: number;
  height: number;
  position: [number, number, number];
  moveRate: number;
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
    /*
      // 只使用 片元着色器
      float heightRate = u_height / u_maxHeight;
      float stepOpacity = mix(1.0, 0.0, step(heightRate, vUv.y));
      float opacity = 1.0 - vUv.y / heightRate * stepOpacity;
      gl_FragColor = vec4(u_color, opacity* u_baseOpacity);
    */
    gl_FragColor = vec4(u_color, (1.0 - vUv.y) * u_baseOpacity);
}
`;

export default class WallMesh {
  scene: THREE.Scene;
  options: IOptions;
  name: string;
  mesh?: THREE.Mesh;
  material?: THREE.ShaderMaterial;
  geometry?: THREE.CylinderGeometry;
  animationId?: number;
  constructor(scene: THREE.Scene, options?: IOptions) {
    this.scene = scene;
    this.name = 'WallMesh';
    this.options = Object.assign(
      {
        color: 'red',
        radius: 20,
        height: 40,
        position: [0, 0, 0], // 圆柱的底面圆心位置
        moveRate: 0.7,
        speed: 2, // 1s 运动2个周期
        baseOpacity: 0.5,
      },
      options
    );
  }
  createMesh() {
    const { radius, height, color, position, baseOpacity } = this.options;
    this.geometry = new THREE.CylinderGeometry(
      radius,
      radius,
      height,
      32,
      1,
      true // 圆柱的两个圆面是否不存在，默认存在
    );
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
        }
      },
      transparent: true,
      depthWrite: false, // 渲染此材质是否对深度缓冲区有任何影响。默认为true
      // depthTest: false, // 是否在渲染此材质时启用深度测试。默认为 true。
      side: THREE.DoubleSide,
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
    });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.position.copy(new THREE.Vector3(...position));
  }
  addToScene() {
    this.createMesh();
    if (!this.mesh) {
      console.error(`${this.name}未成功创建，请检查`);
      return;
    }
    this.startAnimation(performance.now())
    this.scene.add(this.mesh);
  }
  remove() {
    this.scene.remove(this.mesh!);
    this.geometry?.dispose()
    this.material?.dispose()
    this.stopAnimation();
  }
  startAnimation(animationStartTime: number) {
    if (!animationStartTime || !this.material) {
      console.error(`${this.name}动画开始依赖的动画开始时间和材质缺失，请检查`);
      return;
    }
    const currentTime = performance.now();
    const { moveRate, height, speed } = this.options;
    const notMoveHeight = (1 - moveRate) * height;
    const moveTime = (currentTime - animationStartTime) * 0.001; // 已经运动的时间，转换成秒
    // sin(2x - 1/2)π * 0.5 + 0.5
    const fx = Math.sin((moveTime * 2 / speed - 0.5) * Math.PI) * 0.5 + 0.5;
    const targetHeight = notMoveHeight + fx * (moveRate * height); // 随时间变化的高度
    this.material.uniforms.u_height.value = targetHeight;
    this.animationId = requestAnimationFrame(() => this.startAnimation(animationStartTime));
  }
  stopAnimation() {
    if (!this.animationId) {
      console.error(`${this.name}未开启动画，请检查`);
      return;
    }
    cancelAnimationFrame(this.animationId);
  }
}
