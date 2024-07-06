import * as THREE from 'three';

// 顶点着色器代码
const vertexShader = `  
  varying vec2 vUv;  
  uniform vec2 uTextureOffset;  
  void main() {  
    vUv = uv;  
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);  
  }  
`;

// 片段着色器代码，使用遮罩纹理来决定像素的透明度
const fragmentShader = `  
            uniform sampler2D tMask;
            uniform float u_opacity;
            varying vec2 vUv;  
            uniform vec2 uTextureOffset;  
            void main() {
                float alpha = (1.0 + uTextureOffset.y * 4.0 + 0.2); // 保证消失时还有透明度
                alpha = clamp(alpha, 0.0, 1.0);
                vec2 uv = vUv + uTextureOffset;
                vec4 maskColor = texture2D(tMask, uv);  
                gl_FragColor = vec4(maskColor.rgb, maskColor.a * u_opacity * alpha); // 假设遮罩纹理包含alpha通道  
            }  
        `;

export default function (option: any = {}) {
  const { textureUrl, radius, renderOrder, flipY, opacity, scrollSpeed, position } =
    Object.assign(
      {
        textureUrl: '/next/honeycomb.png', // 纹理图片地址
        radius: 50, // 遮罩半径
        renderOrder: 1, // 渲染层级
        flipY: false, // 是否翻转纹理
        opacity: 1, // 纹理透明度
        scrollSpeed: 0.8,
        position: new THREE.Vector3(0, 0, 0),
      },
      option
    );
  const maskTexture = new THREE.TextureLoader().load(textureUrl);
  maskTexture.flipY = flipY; // 根据需要翻转纹理
  // 创建ShaderMaterial
  const material = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    uniforms: {
      tMask: { value: maskTexture }, // 传递遮罩纹理到着色器
      uTextureOffset: { value: new THREE.Vector2(0, -10) },
      u_opacity: { value: opacity }, // 透明度，可以用于控制遮罩的强度
    },
    transparent: true, // 启用透明度混合
    depthWrite: false, // 通常遮罩不需要写入深度缓冲区
  });

  // 创建一个几何体（例如一个平面）并应用材质
  const geometry = new THREE.SphereGeometry(
    radius,
    32,
    32,
    0,
    Math.PI * 2,
    0,
    Math.PI / 2
  );
  const plane = new THREE.Mesh(geometry, material);
  // plane.rotation.x = - Math.PI / 2; // 将平面旋转90度，使其与XZ平面对齐
  plane.position.copy(position);
  plane.renderOrder = renderOrder;
  const animationFn = () => {
    // 设置纹理滚动的偏移量
    const time = Date.now() * 0.001;
    let offset = time * scrollSpeed;

    // 为了循环滚动，我们需要将offset限制在0到1的范围内
    // 假设纹理的高度完全覆盖半球体，则当offset到达1时，它应该回到0并继续滚动
    offset = (offset - Math.floor(offset)) / 4; // 使用取整函数将offset限制在[0, 0.25)的范围内，防止直接到底球上无纹理
    material.uniforms.uTextureOffset.value.y = offset; // 注意负号使纹理向下移动
    requestAnimationFrame(animationFn);
  };
  animationFn();
  return plane;
}
