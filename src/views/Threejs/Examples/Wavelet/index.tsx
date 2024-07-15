import useInitAll from '@/hooks/useInitAll';
import { useEffect } from 'react';
import Wavelet3DObject from '3DObjects/Wavelet';

const Wavelet = () => {
  const { sceneRef, rendererRef } = useInitAll('threejs-examples');
  useEffect(() => {
    const waveletIns = new Wavelet3DObject(sceneRef.current!)
    waveletIns.addToScene()
    
  }, [rendererRef, sceneRef]);
  return (
    <>
      <div className="threejs-examples-main">
        <div id="threejs-examples"></div>
      </div>
    </>
  );
};

export default Wavelet;
