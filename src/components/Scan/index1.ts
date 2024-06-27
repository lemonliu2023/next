import * as THREE from 'three';
import html2canvas from 'html2canvas';

export default (scene: THREE.Scene) => {
  const fn = () => {
    // requestAnimationFrame(fn);
    html2canvas(document.querySelector('.qr-scanner')!, {
      backgroundColor: null,
    }).then((canvas) => {
      // 使用canvas作为纹理
      const texture = new THREE.CanvasTexture(canvas);
      texture.needsUpdate = true;
      texture.format = THREE.RGBAFormat;
      const geometry = new THREE.PlaneGeometry(10, 10);
      const material = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        alphaTest: 0.5,
        //   opacity: 0.7
      });
      const plane = new THREE.Mesh(geometry, material);
      plane.position.copy(new THREE.Vector3(10, 10, 10));
      scene.add(plane);
    });
  };
  fn();
};
