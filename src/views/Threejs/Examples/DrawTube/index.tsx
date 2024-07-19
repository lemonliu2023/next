import * as THREE from 'three'
import useInitAll from '@/hooks/useInitAll';
import { useEffect } from 'react';
import TubeMesh from '3DObjects/DrawTube';
import { moreBrokenLinePoints } from '../../data/points';

const Tube = () => {
  const brokenLinePoints3D = moreBrokenLinePoints.map(item => new THREE.Vector3(item.x, item.y, item.z));
  const { sceneRef, rendererRef, outlinePassRef } =
    useInitAll('threejs-examples', {
      useOutlinePass: true
    });
  useEffect(() => {
    const tubeMesh = new TubeMesh(sceneRef.current!, {points: brokenLinePoints3D});
    tubeMesh.addToScene()
    if (outlinePassRef.current?.selectedObjects) {
      outlinePassRef.current.selectedObjects = [];
    }
    
  }, [rendererRef, sceneRef, outlinePassRef]);
  return (
    <>
      <div className="threejs-examples-main">
        <div id="threejs-examples"></div>
      </div>
    </>
  );
};

export default Tube;
