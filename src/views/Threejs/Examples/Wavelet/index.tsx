import useInitAll from '@/hooks/useInitAll';
import { useEffect } from 'react';
import wavelet from '3DObjects/wavelet';

const Wavelet = () => {
  const { sceneRef, rendererRef } = useInitAll('threejs-examples');
  useEffect(() => {
    sceneRef.current?.add(wavelet());
    
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
