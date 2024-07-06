import useInitAll from '@/hooks/useInitAll';
import { useEffect } from 'react';
import scanQrCode from '@/views/Threejs/shaders/scanQrCode';

const ScanQrCode = () => {
  const { sceneRef, rendererRef } = useInitAll('threejs-examples');
  useEffect(() => {
    sceneRef.current?.add(scanQrCode());
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

export default ScanQrCode;
