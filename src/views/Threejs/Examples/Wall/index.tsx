import useInitAll from '@/hooks/useInitAll';
import { useEffect, useRef } from 'react';
import WallMesh from '@/views/Threejs/shaders/wall';

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
