import useInitAll from '@/hooks/useInitAll';
import { useEffect } from 'react';
import radar from '3DObjects/radar';

const Radar = () => {
  const { sceneRef, rendererRef } = useInitAll('threejs-examples');
  useEffect(() => {
    sceneRef.current?.add(radar());
    
  }, [rendererRef, sceneRef]);
  return (
    <>
      <div className="threejs-examples-main">
        <div id="threejs-examples"></div>
      </div>
    </>
  );
};

export default Radar;
