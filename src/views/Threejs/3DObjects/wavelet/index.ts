import * as THREE from 'three';

export interface IOptions {
  radius: number; // 半径
  color: string; // 颜色
  circleNum: number; // 涟漪数量
  position: THREE.Vector3; // 位置
  speed: number; // 速度 1s 展示几个周期
}

// 自定义的顶点着色器和片元着色器
const vertexShader = `  
varying vec2 vUv;  

void main() {  
    vUv = uv;  
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);  
}  
`;

const fragmentShader = `  
varying vec2 vUv;  
uniform float u_time;  
uniform vec3 u_color;
  
void main() {  
    // 计算像素到涟漪中心的距离  
    vec2 dist = (vUv - vec2(0.5, 0.5));  
    float len = length(dist) * 2.0;  

    if(len < u_time) {
        gl_FragColor = vec4(u_color, pow((1.0 - u_time + len), 10.0) * (1.0 - len));
    }
}  
`;

const createWaveletMaterial = (radius: number, color: string) => {
  return new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms: {
      u_time: { value: 0.0 }, // 初始时间值
      uRadius: { value: radius }, // 涟漪的半径
      u_color: {
        value: new THREE.Color(color),
      },
    },
    blending: THREE.NormalBlending,
    transparent: true,
    depthWrite: false,
    side: THREE.DoubleSide,
  });
};

const initOptions: IOptions = {
  radius: 50,
  color: '#67C23A',
  circleNum: 3,
  position: new THREE.Vector3(0, 0, 0),
  speed: 3,
};

export default class WallMesh {
  name = 'Wavelet3DObject';
  scene: THREE.Scene;
  options: IOptions;
  materials: THREE.ShaderMaterial[] = [];
  geometry?: THREE.BufferGeometry;
  object3D?: THREE.Object3D;
  animationId?: number;
  constructor(scene: THREE.Scene, options?: Partial<IOptions>) {
    this.scene = scene;
    this.options = {
      ...initOptions,
      ...options,
    };
  }
  create3DObject() {
    const { radius, color, circleNum, position } = this.options;
    this.geometry = new THREE.CircleGeometry(radius, radius, 1, Math.PI * 2);
    this.object3D = new THREE.Group();
    for (let i = 0; i < circleNum; i++) {
      const material = createWaveletMaterial(radius, color);
      this.materials.push(material);
      const mesh = new THREE.Mesh(this.geometry, material);
      this.object3D.add(mesh);
      mesh.position.copy(position);
      mesh.rotation.x = -Math.PI / 2; // 将平面旋转90度，使其与XZ平面对齐
    }
    return this.object3D;
  }
  addToScene() {
    const object3D = this.create3DObject();
    this.startAnimation(performance.now());
    this.scene.add(object3D);
  }
  removeFromScene() {}
  startAnimation(animationStartTime: number) {
    const { circleNum, speed } = this.options;
    const currentTime = performance.now();
    const moveTime = (currentTime - animationStartTime) * 0.001;
    const step = 1.0 / circleNum;
    this.materials?.forEach((item, index) => {
      item.uniforms.u_time.value = Math.sin(
        ((moveTime / speed + step * index) % 1.0) * Math.PI * 0.5
      );
    });
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
