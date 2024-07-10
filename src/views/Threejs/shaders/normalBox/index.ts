import * as THREE from 'three';

const normalBox = (
  position: THREE.Vector3 = new THREE.Vector3(0, 0, 0),
  width: number = 1,
  color: string = 'red'
) => {
  const geometry = new THREE.BoxGeometry(width, width, width);
  const material = new THREE.MeshBasicMaterial({ color: color });
  const cube = new THREE.Mesh(geometry, material);
  cube.position.set(position.x, position.y, position.z);
  return cube;
};

export default normalBox;
