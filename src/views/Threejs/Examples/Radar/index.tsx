import useInitAll from '@/hooks/useInitAll';
import { useEffect } from 'react';
import radar from '@/views/Threejs/shaders/radar';

const Radar = () => {
  const { sceneRef, rendererRef } = useInitAll('threejs-examples');
  useEffect(() => {
    sceneRef.current?.add(radar());
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

export default Radar;
