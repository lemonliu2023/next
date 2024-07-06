import useInitAll from '@/hooks/useInitAll';
import { useEffect } from 'react';
import line from '@/views/Threejs/shaders/line';

const Line = () => {
  const { sceneRef, rendererRef } = useInitAll('threejs-examples');
  useEffect(() => {
    sceneRef.current?.add(line());
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

export default Line;
