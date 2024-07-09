import useInitAll from '@/hooks/useInitAll';
import { Button } from 'antd';
import { useEffect, useRef } from 'react';
import WallMesh from '@/views/Threejs/shaders/wall';
import radar from '../../shaders/radar';

function RemoveMeshTest() {
  const { sceneRef } = useInitAll('remove-mesh-test');
  const wallMeshRef = useRef<WallMesh>();
  useEffect(() => {
    wallMeshRef.current = new WallMesh(sceneRef.current!);
    wallMeshRef.current.addToScene()
  }, [sceneRef]);
  const changeMeshHandler = () => {
    wallMeshRef.current?.remove()
    sceneRef.current?.add(radar())
  };
  return (
    <>
      <Button onClick={changeMeshHandler}>change Mesh</Button>
      <div
        id="remove-mesh-test"
        style={{ width: '500px', height: '500px' }}
      ></div>
    </>
  );
}

export default RemoveMeshTest;
