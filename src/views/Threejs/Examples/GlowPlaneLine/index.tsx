import * as THREE from 'three';
import useInitAll from '@/hooks/useInitAll';
import { useEffect, useMemo, useRef } from 'react';
import GlowPlaneLineMesh from '../../shaders/glowPlaneLine';
import normalBox from '../../shaders/normalBox';

function PlaneLine() {
  const { sceneRef } = useInitAll('threejs-examples');
  const glowPlaneLineMeshRef = useRef<GlowPlaneLineMesh>();
  const startPosition = useMemo(() => new THREE.Vector3(50, -10, 0), []);
  const endPosition = useMemo(() => new THREE.Vector3(0, -10, 100), []);
  useEffect(() => {
    glowPlaneLineMeshRef.current = new GlowPlaneLineMesh(sceneRef.current!, {
      start: startPosition,
      end: endPosition,
    });
    glowPlaneLineMeshRef.current.addToScene();
    sceneRef.current?.add(normalBox(startPosition), normalBox(endPosition));
  }, [endPosition, sceneRef, startPosition]);
  return (
    <>
      <div className="threejs-examples-main">
        <div id="threejs-examples"></div>
      </div>
    </>
  );
}

export default PlaneLine;
