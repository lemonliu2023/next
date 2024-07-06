import useInitAll from '@/hooks/useInitAll';
import { useEffect } from 'react';
import tube from '@/views/Threejs/shaders/tube';

const Tube = () => {
  const { sceneRef, rendererRef } = useInitAll('threejs-examples');
  useEffect(() => {
    sceneRef.current?.add(tube());
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

export default Tube;
