import * as THREE from 'three';
import GlowPlaneLineMesh, {
  IOptions as GlowPlaneLineOptions,
  initOptions as glowPlaneLineInitOptions,
} from '../glowPlaneLine';
import { transVector3 } from '../../utils';

export interface IOptions {
  glowPlaneLineOptions: GlowPlaneLineOptions;
  points: (THREE.Vector3 | [number, number, number])[];
}


const vertexShader = `
varying vec2 vUv;

void main() {
    vec3 vPosition = position;
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(vPosition, 1.0);
}
`;
const fragmentShader = ` 
varying vec2 vUv;
uniform float u_amplitude;
uniform vec3 u_glowColor;
uniform vec3 u_centerColor;
uniform float u_glowRate;

void main() {
    if(vUv.x < u_glowRate) {
        gl_FragColor = vec4(u_glowColor, pow(vUv.x / u_glowRate, 2.0 + u_amplitude ) * 0.6);
    } else if(vUv.x < (1.0 - u_glowRate)) {
        gl_FragColor = vec4(u_centerColor, 1.0);
    } else {
        gl_FragColor = vec4(u_glowColor, pow((1.0 - vUv.x) / u_glowRate, 2.0 + u_amplitude) * 0.6);
    }
}
`;


function createMaterial(glowColor: string, centerColor: string, glowRate: number) {
  return new THREE.ShaderMaterial({
    uniforms: {
      u_amplitude: {
        value: 0,
      },
      u_glowColor: {
        value: new THREE.Color(glowColor),
      },
      u_centerColor: {
        value: new THREE.Color(centerColor),
      },
      u_glowRate: {
        value: glowRate,
      },
    },
    side: THREE.DoubleSide,
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    transparent: true,
  });
}

let material: THREE.ShaderMaterial;
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
    this.name = 'BrokenGlowPlaneLineMesh';
    this.scene = scene;
    const initOptions: IOptions = {
      points: [],
      glowPlaneLineOptions: glowPlaneLineInitOptions,
    };
    this.options = Object.assign(initOptions, options);
  }
  createMesh() {
    material = createMaterial('red', '#fff', 0.4)
    this.mesh = new THREE.Group();
    const { points } = this.options;
    points.reduce((pre, cur) => {
      console.log(pre, cur)
      const startVector3 = transVector3(pre);
      const endVector3 = transVector3(cur);
      this.mesh?.add(
        new GlowPlaneLineMesh(this.scene, {
          start: startVector3,
          end: endVector3,
          material
        }).createMesh() as any
      );
      return cur;
    });
    
  }
  addToScene() {
    this.createMesh()
    this.scene.add(this.mesh!);
    this.startAnimation(performance.now());
  }
  startAnimation(startAnimationTime: number) {
    if (!startAnimationTime || !material) {
        console.error(`${this.name}动画开始依赖的动画开始时间或材质缺失，请检查`);
        return;
      }
      const { speed } = this.options.glowPlaneLineOptions;
      const currentTime = performance.now();
      const moveTime = (currentTime - startAnimationTime) * 0.001; // 已经运动的时间，转换成秒
      material.uniforms.u_amplitude.value = Math.sin(
        2 * moveTime * Math.PI * speed
      );
      this.animationId = requestAnimationFrame(() =>
        this.startAnimation(startAnimationTime)
      );
  }
  stopAnimation() {}
}
