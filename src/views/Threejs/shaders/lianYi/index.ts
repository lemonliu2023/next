import * as THREE from 'three';

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
uniform float uTime;  
uniform vec2 uCenter;  
uniform float uRadius;  
uniform float uAmplitude;
uniform vec3 u_color;
  
void main() {  
    // 计算像素到涟漪中心的距离  
    vec2 dist = (vUv - uCenter);  
    float len = length(dist) * 2.0;  

    float circle = mod(uTime, 1.0);
    float circle2 = mod(uTime + 0.5, 1.0);

    if(len < circle) {
        gl_FragColor = vec4(1.0, .0, .0, pow((1.0 - circle + len), 5.0) * (1.0 - len));
    }
}  
`;
export default function (option = {}) {
    const newOption = Object.assign({
        color: '#f00',
        position: null
    }, option)
    if(!newOption.position) {
        throw new Error('请传入模型位置信息')
    }
    const shaderMaterial = new THREE.ShaderMaterial({
        vertexShader: vertexShader,
        fragmentShader: fragmentShader,
        uniforms: {
            uTime: { value: 0.0 }, // 初始时间值
            uCenter: { value: new THREE.Vector2(0.5, 0.5) }, // 涟漪中心位于屏幕中心
            uRadius: { value: 20.0 }, // 涟漪的半径
            uAmplitude: { value: 50 }, // 涟漪的振幅
            u_color: {
                value: new THREE.Color('#f00')
            },
        },
        blending: THREE.NormalBlending,
        transparent: true,
        depthWrite:false
    });
    const shaderMaterial2 = new THREE.ShaderMaterial({
        vertexShader: vertexShader,
        fragmentShader: fragmentShader,
        uniforms: {
            uTime: { value: 0.5 }, // 初始时间值
            uCenter: { value: new THREE.Vector2(0.5, 0.5) }, // 涟漪中心位于屏幕中心
            uRadius: { value: 20.0 }, // 涟漪的半径
            uAmplitude: { value: 50 }, // 涟漪的振幅
            u_color: {
                value: new THREE.Color('#f00')
            },
        },
        blending: THREE.NormalBlending,
        transparent: true,
        depthWrite:false
    });
    const geometry = new THREE.CircleGeometry(50, 50, 1, Math.PI * 2); // 10x10的网格，1x1的分段  
    const plane = new THREE.Mesh(geometry, shaderMaterial);
    const plane2 = new THREE.Mesh(geometry, shaderMaterial2);
    plane.rotation.x = - Math.PI / 2; // 将平面旋转90度，使其与XZ平面对齐  
    plane.position.copy(newOption.position)
    plane2.rotation.x = - Math.PI / 2; // 将平面旋转90度，使其与XZ平面对齐  
    plane2.position.copy(newOption.position)
    const group = new THREE.Group()
    group.add(plane)
    group.add(plane2)
    const animationFn = () => {
        shaderMaterial.uniforms.uTime.value += 0.01
        shaderMaterial2.uniforms.uTime.value += 0.01
        requestAnimationFrame(animationFn)
    }
    animationFn()
    return group;
}