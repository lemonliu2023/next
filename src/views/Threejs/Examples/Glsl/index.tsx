import useInitAll from '@/hooks/useInitAll';
import { useEffect } from 'react';
import glsl from '@/views/Threejs/shaders/glsl';

const Glsl = () => {
  const { sceneRef, rendererRef } = useInitAll('threejs-examples');
  useEffect(() => {
    sceneRef.current?.add(glsl({ renderer: rendererRef.current! }));
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

export default Glsl;
