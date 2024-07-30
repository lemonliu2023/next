import useInitAll from '@/hooks/useInitAll';
import { useEffect, useRef } from 'react';
import WallMesh from '3DObjects/Wall';

const Wall = () => {
  const { sceneRef } = useInitAll('threejs-examples');
  const wallMeshInsRef = useRef<WallMesh>();
  useEffect(() => {
    wallMeshInsRef.current = new WallMesh(sceneRef.current!);
    wallMeshInsRef.current.addToScene();
  }, [sceneRef]);
  return (
    <>
      <div className="threejs-examples-main">
        <div id="threejs-examples"></div>
      </div>
    </>
  );
};

export default Wall;
