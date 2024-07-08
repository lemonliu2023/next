import { LineGeometry } from 'three/examples/jsm/lines/LineGeometry.js';
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js';
import { LineSegments2 } from 'three/examples/jsm/lines/LineSegments2.js';
import { brokenLinePoints } from '../../data/points';

const lineMesh = (options?: { color: string, lineWidth: number }) => {
  const { color = 'red', lineWidth = 20 } = options || {};
  const points: number[] = []
  brokenLinePoints.forEach(item => {
    points.push(item.x, item.y, item.z);
  })
  const geometry = new LineGeometry();
  geometry.setPositions(points);
  const material = new LineMaterial({
    color: color,
    linewidth: lineWidth,
    transparent: true,
    depthTest: false,
  });
  const line = new LineSegments2(geometry, material);
  // 6. 计算下线条长度
  // line.computeLineDistances();
  return line;
};

export default lineMesh;
