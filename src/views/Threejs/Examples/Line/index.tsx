import useInitAll from '@/hooks/useInitAll';
import { useEffect } from 'react';
import lineMesh from '3DObjects/line';

function Line() {
  const { sceneRef } = useInitAll('threejs-examples');
  useEffect(() => {
    sceneRef.current?.add(lineMesh());
  }, [sceneRef]);
  return (
    <>
      <div className="threejs-examples-main">
        <div id="threejs-examples"></div>
      </div>
    </>
  );
}

export default Line;
