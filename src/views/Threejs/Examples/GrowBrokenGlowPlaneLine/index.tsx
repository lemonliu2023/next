import useInitAll from '@/hooks/useInitAll';
import { brokenLinePoints } from '../../data/points';
import GlowBrokenGlowPlaneLineMesh from '../../shaders/growBrokenGlowPlaneLine';
import { useEffect, useRef } from 'react';

const GrowBrokenGlowPlaneLine = () => {
  const growBrokenGlowPlaneLineMeshRef = useRef<GlowBrokenGlowPlaneLineMesh>();
  const points = brokenLinePoints.map(
    (item) => [item.x, item.y, item.z] as [number, number, number]
  );
  const { sceneRef } = useInitAll('threejs-examples');
  useEffect(() => {
    growBrokenGlowPlaneLineMeshRef.current = new GlowBrokenGlowPlaneLineMesh(
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

export default GrowBrokenGlowPlaneLine;
