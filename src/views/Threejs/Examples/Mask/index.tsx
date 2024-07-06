import useInitAll from '@/hooks/useInitAll';
import { useEffect } from 'react';
import mask from '@/views/Threejs/shaders/mask';

const Mask = () => {
    const { sceneRef } = useInitAll('threejs-examples')
    useEffect(() => {
        sceneRef.current?.add(mask()!)
    }, [sceneRef])
    return (
        <>
          <div className="threejs-examples-main">
            <div id="threejs-examples"></div>
          </div>
        </>
      ); 
}

export default Mask