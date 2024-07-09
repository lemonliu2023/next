import useInitAll from '@/hooks/useInitAll';
import { useEffect, useRef } from 'react';
import WallMesh from '@/views/Threejs/shaders/wall';
import { Button } from 'antd';

const Wall = () => {
  const { sceneRef } = useInitAll('threejs-examples');
  const wallMeshInsRef = useRef<WallMesh>();
  useEffect(() => {
    wallMeshInsRef.current = new WallMesh(sceneRef.current!);
    wallMeshInsRef.current.addToScene();
  }, [sceneRef]);
  return (
    <>
      <div className="threejs-examples-main" style={{position: 'relative'}}>
        <Button
          style={{ position: 'absolute', top: 0, left: 0 }}
          onClick={() => wallMeshInsRef.current?.remove()}
        >
          移除元素
        </Button>
        <div id="threejs-examples"></div>
      </div>
    </>
  );
};

export default Wall;
