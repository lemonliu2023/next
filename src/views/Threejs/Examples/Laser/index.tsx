import useInitAll from '@/hooks/useInitAll';
import { useEffect } from 'react';
import laser from '@/views/Threejs/shaders/laser';

const Laser = () => {
  const { sceneRef, rendererRef } = useInitAll('threejs-examples');
  useEffect(() => {
    sceneRef.current?.add(laser());
    return () => {
      rendererRef.current?.dispose();
    };
  }, [rendererRef, sceneRef]);
  return (
    <>
      <div className="threejs-examples-main">
        <div id="threejs-examples"></div>
      </div>
    </>
  );
};

export default Laser;
