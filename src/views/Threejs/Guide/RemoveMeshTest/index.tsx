import * as THREE from 'three';
import useInitAll from '@/hooks/useInitAll';
import { Button } from 'antd';
import { useEffect, useRef } from 'react';
import wall from '@/views/Threejs/shaders/wall';
import radar from '../../shaders/radar';

function RemoveMeshTest() {
  const { sceneRef } = useInitAll('remove-mesh-test');
  const wallRef = useRef<THREE.Mesh>();
  useEffect(() => {
    wallRef.current = wall();
    sceneRef.current?.add(wallRef.current);
  }, [sceneRef]);
  const changeMeshHandler = () => {
    console.log(wallRef.current?.animations, 'wallRef.current?.animations')
    wallRef.current!.geometry.dispose();
    if(wallRef.current!.material instanceof THREE.ShaderMaterial) {
      wallRef.current!.material.dispose()
    }
    console.log(wallRef.current!.material instanceof THREE.ShaderMaterial, 'wallRef.current!.material')
    sceneRef.current?.remove(wallRef.current!);
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
