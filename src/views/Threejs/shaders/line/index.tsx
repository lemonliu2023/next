// import * as THREE from 'three';
import { LineGeometry } from 'three/examples/jsm/lines/LineGeometry.js';
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js';
import { LineSegments2 } from 'three/examples/jsm/lines/LineSegments2.js';

const line = () => {
  const material = new LineMaterial({
    color: 'blue',
    linewidth: 10,
    // opacity: 1,
    transparent: true,
    depthTest: false,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
  });

  const geometry = new LineGeometry();

  geometry.setPositions([0, 0, 0, 100, 100, 100]);

  const mesh = new LineSegments2(geometry, material);

  return mesh;
};

export default line;
