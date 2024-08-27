import useInitAll from '@/hooks/useInitAll';
import WallMesh from '../../3DObjects/Wall';
import WaveletMesh from '../../3DObjects/Wavelet';
import { useEffect } from 'react';

function RemoveMeshTest() {
  const { sceneRef } = useInitAll('threejs-container');
  useEffect(() => {
    const wall = new WallMesh(sceneRef.current!);
    wall.addToScene();
    const wavelet = new WaveletMesh(sceneRef.current!);
    wavelet.addToScene();
  }, []);
  return (
    <>
      <div
        id="threejs-container"
        style={{ width: '100%', height: '100%' }}
      ></div>
    </>
  );
}

export default RemoveMeshTest;
