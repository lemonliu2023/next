import * as THREE from 'three';
import { CSS3DObject, CSS3DSprite } from 'three/examples/jsm/renderers/CSS3DRenderer.js';

export default (scene: THREE.Scene) => {

  const object = new CSS3DObject(document.querySelector('.qr-scanner')!);
  object.position.x = -1;
  object.position.y = 1;  
  object.position.copy(new THREE.Vector3(0, 0, 0));
  object.position.set(0, 0, 0)
  const dom = document.createElement('div');
  dom.innerHTML = 'test'
  const tag = new CSS3DSprite(dom)
  tag.position.set(0, 0, 0)
  // scene.add(object);
  scene.add(tag)
};
