import * as THREE from 'three';

const vertexShader = `
uniform vec3 u_color;

uniform float time;
uniform float u_height;

varying float v_opacity;

void main() {

    vec3 vPosition = position;

    v_opacity = mix(1.0, 0.0, position.y / u_height);

    gl_Position = projectionMatrix * modelViewMatrix * vec4(vPosition, 1.0);
}
`;
const fragmentShader = ` 
uniform vec3 u_color;

varying float v_opacity;

void main() { 
    gl_FragColor = vec4(u_color, v_opacity * 0.5);
}
`;


export default function (option = {} as any) {
    const {
        radius,
        height,
        opacity,
        color,
        position
    } = Object.assign({
        color: '#f00',
        opacity: 0.6,
        radius: 20,
        height: 2,
    }, option);
    if(!option.position) {
        throw Error('请传入模型位置信息')
    }
    const geometry = new THREE.CylinderGeometry(radius, radius, height, 32, 1, true);
    geometry.translate(0, height / 2, 0);

    const material = new THREE.ShaderMaterial({
        uniforms: {
            u_height: {
                value: height
            },
            u_speed: {
                value: 0
            },
            u_opacity: {
                value: opacity
            },
            u_color: {
                value: new THREE.Color(color)
            },
            time: {
                value: 100
            },
        },
        transparent: true,
        depthWrite: false, // ???
        // depthTest: false, // ???
        side: THREE.DoubleSide,
        vertexShader: vertexShader,
        fragmentShader: fragmentShader
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.copy(new THREE.Vector3(...position))
    const animationFn = () => {
        const targetHeight = 8 + Math.sin(Date.now() * 0.003) * 5; // 随时间变化的高度
        mesh.scale.y = targetHeight; // 更新圆柱体的高度
        requestAnimationFrame(animationFn)
    }
    animationFn()
    return mesh
}