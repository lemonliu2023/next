import * as THREE from 'three';
import { isVector3 } from '../../utils';
import { LineGeometry } from 'three/examples/jsm/lines/LineGeometry.js';
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js';
import { LineSegments2 } from 'three/examples/jsm/lines/LineSegments2.js';

export interface IOptions {
  color: string;
  width: number;
  height: number;
  position: THREE.Vector3;
  speed: number; // 1s 运动一个周期
  baseOpacity: number; // 基础透明度
  offset: number;
}

const initOptions: IOptions = {
  color: 'red',
  width: 100,
  height: 100,
  position: new THREE.Vector3(0, 0, 0), // 平面中心位置
  speed: 2, // 1s 运动2个周期
  baseOpacity: 0.5,
  offset: 10,
};

export default class WallMesh {
  name = 'RisePlane3DObject';
  scene: THREE.Scene;
  options: IOptions;
  material?: THREE.ShaderMaterial;
  material1?: THREE.ShaderMaterial;
  material2?: THREE.ShaderMaterial;
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
    const group = new THREE.Group();
    const { width, height, offset } = this.options;
    const geometry = this.createGeometry(width, height);
    const geometry1 = this.createGeometry(width + offset * 2, height);

    const material = this.createSmallSquareMaterial();
    this.material = material;
    const material1 = this.createMeshMaterial();
    this.material1 = material1;
    const vertices = [
      new THREE.Vector3(width / 2, 0, 0),
      new THREE.Vector3(-width / 2, 0, 0),
      new THREE.Vector3(0, 0, -height / 2),
      new THREE.Vector3(0, 0, height / 2),
    ];

    const vertices1 = [
      new THREE.Vector3(width / 2 + offset, 0, 0),
      new THREE.Vector3(-width / 2 - offset, 0, 0),
      new THREE.Vector3(0, 0, -height / 2 - offset),
      new THREE.Vector3(0, 0, height / 2 + offset),
    ];

    vertices.forEach((item) => {
      const object3D = new THREE.Mesh(geometry, material);
      object3D.position.copy(item);
      if (item.x) {
        object3D.rotateY(Math.PI / 2);
      }
      group.add(object3D);
    });
    const g = new LineGeometry();
    g.setPositions([
      50, 100, 50, 50, 100, -50, -50, 100, -50, -50, 100, 50, 50, 100, 50,
    ]);
    const m = new LineMaterial({
      color: 'red',
      linewidth: 4,
      transparent: true,
      depthTest: false,
      side: THREE.DoubleSide,
    });
    const line = new LineSegments2(g, m);
    vertices1.forEach((item) => {
      const object3D = new THREE.Mesh(geometry1, material1);
      object3D.position.copy(item);
      if (item.x) {
        object3D.rotateY(Math.PI / 2);
      }
      // setTimeout(() => {
        group.add(object3D);
      // }, 1000);
    });
    setTimeout(() => {
      group.add(line);
    }, 1000);
    return group;
  }
  addToScene() {
    const object3D = this.create3DObject();
    console.log(object3D, 'object3D');
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
    if(moveTime > 1) {
      this.material.uniforms.u_height.value = height;
    } else {
      this.material.uniforms.u_height.value = targetHeight;
    }
    this.material.uniforms.u_moveTime.value = moveTime
    if(moveTime < 1) {
      this.material1!.uniforms.u_height.value = 0;
    } else if (moveTime > 1 && moveTime < 2) {
      this.material1!.uniforms.u_height.value = height - targetHeight;
    } else {
      this.material1!.uniforms.u_height.value = height;
    }
    this.material1!.uniforms.u_moveTime.value = fx;
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
  createPlaneMaterial() {
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
    const { height, color, baseOpacity } = this.options;
    return new THREE.ShaderMaterial({
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
  }
  createMeshMaterial() {
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
uniform float u_moveTime;
varying vec2 vUv;

void main() {
    for(int i = 0; i < 10; i++) {
      float s = smoothstep(float(i) / 10.0, float(i) / 10.0 + 0.005, vUv.x);
      if(s > 0.0  && s < 1.0) {
        gl_FragColor = vec4(u_color, 0.3 + (1.0 - u_moveTime) * 0.7);
      }
      float p = smoothstep(float(i) / 10.0, float(i) / 10.0 + 0.005, vUv.y);
      if(p > 0.0  && p < 1.0) {
        gl_FragColor = vec4(u_color, 0.3 + (1.0 - u_moveTime) * 0.7);
      }
    }
    if(vUv.y >= 1.0 - 0.005) {
      gl_FragColor = vec4(u_color, 0.3 + (1.0 - u_moveTime) * 0.7);
    }
}
`;
    const { height, color, baseOpacity } = this.options;
    return new THREE.ShaderMaterial({
      uniforms: {
        u_height: {
          value: height,
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
        u_moveTime: {
          value: 0,
        },
      },
      transparent: true,
      depthWrite: false, // 渲染此材质是否对深度缓冲区有任何影响。默认为true
      // depthTest: false, // 是否在渲染此材质时启用深度测试。默认为 true。
      side: THREE.DoubleSide,
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
    });
  }
  createSmallSquareMaterial() {
    const generateCode = () => {
      let str = '';
      for (let i = 0; i < 50; i++) {
        const randomX = Math.random();
        const randomY = Math.random();
        const randomZ = Math.random();
        str += `if(vUv.x > ${randomX} && vUv.x < ${randomX} + 0.08 && vUv.y > ${randomY} && vUv.y < ${randomY} + 0.08 && u_moveTime > 1.0) {
        gl_FragColor = vec4(u_color, 0.4 + (0.5+sin(3.0*u_pi*${randomZ}+u_moveTime*10.0)/2.0)*0.3);
        return;
      };`;
      }
      return str;
    };
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
uniform float u_moveTime;
varying vec2 vUv;
uniform float u_pi;

void main() {
      ${generateCode()}
      gl_FragColor = vec4(u_color, (1.0 - vUv.y) * u_baseOpacity);
}
`;

    const { height, color, baseOpacity } = this.options;
    return new THREE.ShaderMaterial({
      uniforms: {
        u_height: {
          value: height,
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
        u_moveTime: {
          value: 0
        },
        u_pi: {
          value: Math.PI
        },
      },
      transparent: true,
      depthWrite: false, // 渲染此材质是否对深度缓冲区有任何影响。默认为true
      // depthTest: false, // 是否在渲染此材质时启用深度测试。默认为 true。
      side: THREE.DoubleSide,
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
    });
  }
  createGeometry(width: number, height: number) {
    const geometry = new THREE.PlaneGeometry(width, height, width * 2);
    geometry.translate(0, height / 2, 0);
    return geometry;
  }
}
