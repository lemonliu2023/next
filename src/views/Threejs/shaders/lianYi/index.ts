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
precision mediump float;  
varying vec2 vUv;  
uniform float uTime;  
uniform vec2 uCenter;  
uniform float uRadius;  
uniform float uAmplitude;
uniform vec3 u_color;
  
void main() {  
    // 计算像素到涟漪中心的距离  
    vec2 dist = (vUv - uCenter);  
    float len = length(dist);  
  
    // 使用距离和时间来计算涟漪效果  
    float ripple = sin(len * uRadius - uTime * 2.0) * uAmplitude;  
    
    float alpha = ripple * 0.5 + 0.5; // 涟漪效果越强，透明度越高  
    alpha = clamp(alpha, 0.0, 1.0); // 确保透明度在0到1之间  
  
    // 输出颜色  
    gl_FragColor = vec4(u_color, alpha * 0.5);  // 0.5 环透明度
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
    console.log(option, 'option')
    const shaderMaterial = new THREE.ShaderMaterial({
        vertexShader: vertexShader,
        fragmentShader: fragmentShader,
        uniforms: {
            uTime: { value: 10.0 }, // 初始时间值
            uCenter: { value: new THREE.Vector2(0.5, 0.5) }, // 涟漪中心位于屏幕中心
            uRadius: { value: 40.0 }, // 涟漪的半径
            uAmplitude: { value: 50 }, // 涟漪的振幅
            u_color: {
                value: new THREE.Color('#f00')
            },
        },
        transparent: true,
        depthWrite:false
    });
    const geometry = new THREE.CircleGeometry(50, 50, 1, Math.PI * 2); // 10x10的网格，1x1的分段  
    const plane = new THREE.Mesh(geometry, shaderMaterial);
    plane.rotation.x = - Math.PI / 2; // 将平面旋转90度，使其与XZ平面对齐  
    plane.position.copy(newOption.position)
    const animationFn = () => {
        shaderMaterial.uniforms.uTime.value += 0.03
        requestAnimationFrame(animationFn)
    }
    animationFn()
    return plane
}