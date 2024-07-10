import useInitAll from '@/hooks/useInitAll';
import { useRef, useEffect } from 'react';
import { brokenLinePoints } from '../../data/points';
import BrokenGlowPlaneLineMesh from '../../shaders/brokenGlowPlaneLine';

const BrokenGlowPlaneLine = () => {
  const growBrokenGlowPlaneLineMeshRef = useRef<BrokenGlowPlaneLineMesh>();
  const points = brokenLinePoints.map(
    (item) => [item.x, item.y, item.z] as [number, number, number]
  );
  const { sceneRef } = useInitAll('threejs-examples');
  useEffect(() => {
    growBrokenGlowPlaneLineMeshRef.current = new BrokenGlowPlaneLineMesh(
      sceneRef.current!,
      {
        points,
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
