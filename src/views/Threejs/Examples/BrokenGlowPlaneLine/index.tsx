import useInitAll from '@/hooks/useInitAll';
import { useRef, useEffect } from 'react';
import { brokenLinePoints } from '../../data/points';
import BrokenGlowPlaneLineMesh from '3DObjects/brokenGlowPlaneLine';

const BrokenGlowPlaneLine = () => {
  const growBrokenGlowPlaneLineMeshRef = useRef<BrokenGlowPlaneLineMesh>();
  const points = brokenLinePoints.map(
    (item) => [item.x, item.y, item.z] as [number, number, number]
  );
  const points2: [[number, number, number], [number, number, number]][] = []
  points.reduce((pre, cur) => {
    points2.push([pre, cur])
    return cur
  })
  const { sceneRef } = useInitAll('threejs-examples');
  useEffect(() => {
    growBrokenGlowPlaneLineMeshRef.current = new BrokenGlowPlaneLineMesh(
      sceneRef.current!,
      {
        points: points2
      }
    );
    growBrokenGlowPlaneLineMeshRef.current.addToScene();
  }, [sceneRef, growBrokenGlowPlaneLineMeshRef, points]);
  return (
    <>
      <div className="threejs-examples-main">
        <div id="threejs-examples"></div>
      </div>
    </>
  );
};

export default BrokenGlowPlaneLine;
