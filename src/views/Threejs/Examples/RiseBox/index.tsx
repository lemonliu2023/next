import useInitAll from '@/hooks/useInitAll';
import { useEffect } from 'react';
import RiseBox3D from '3DObjects/RiseBox';

const RisePlane = () => {
  const { sceneRef } = useInitAll('threejs-examples');
  useEffect(() => {
    const risePlaneObject3DIns = new RiseBox3D(sceneRef.current!);
    risePlaneObject3DIns.addToScene();
  }, [sceneRef]);
  return (
    <>
      <div className="threejs-examples-main">
        <div id="threejs-examples"></div>
      </div>
    </>
  );
};

export default RisePlane;
