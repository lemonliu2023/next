import useInitAll from '@/hooks/useInitAll';
import { useEffect } from 'react';
import tube from '@/views/Threejs/shaders/tube';

const Tube = () => {
  const { sceneRef, rendererRef, outlinePassRef } =
    useInitAll('threejs-examples', {
      useOutlinePass: true
    });
  useEffect(() => {
    const tubeMesh = tube();
    sceneRef.current?.add(tubeMesh);
    if (outlinePassRef.current?.selectedObjects) {
      outlinePassRef.current.selectedObjects = [tubeMesh];
    }
    
  }, [rendererRef, sceneRef, outlinePassRef]);
  return (
    <>
      <div className="threejs-examples-main">
        <div id="threejs-examples"></div>
      </div>
    </>
  );
};

export default Tube;
