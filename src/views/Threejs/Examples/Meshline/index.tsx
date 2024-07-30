import useInitAll from '@/hooks/useInitAll';
import { useEffect } from 'react';
import meshline from '3DObjects/meshline';

const Meshline = () => {
  const { sceneRef, rendererRef } = useInitAll('threejs-examples');
  useEffect(() => {
    sceneRef.current?.add(meshline());
    
  }, [rendererRef, sceneRef]);
  return (
    <>
      <div className="threejs-examples-main">
        <div id="threejs-examples"></div>
      </div>
    </>
  );
};

export default Meshline;
