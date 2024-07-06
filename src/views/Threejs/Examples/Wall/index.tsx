import useInitAll from '@/hooks/useInitAll';
import { useEffect } from 'react';
import wall from '@/views/Threejs/shaders/wall';

const Wall = () => {
  const { sceneRef, rendererRef } = useInitAll('threejs-examples');
  useEffect(() => {
    sceneRef.current?.add(wall());
    
  }, [rendererRef, sceneRef]);
  return (
    <>
      <div className="threejs-examples-main">
        <div id="threejs-examples"></div>
      </div>
    </>
  );
};

export default Wall;
