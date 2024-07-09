import useInitAll from '@/hooks/useInitAll';
import { useEffect } from 'react';
import planeLine from '../../shaders/planeLine';

function PlaneLine() {
  const {sceneRef} = useInitAll('threejs-examples');
  useEffect(() => {
    sceneRef.current?.add(planeLine())
  }, [sceneRef])
  return (
    <>
      <div className="threejs-examples-main">
        <div id="threejs-examples"></div>
      </div>
    </>
  );
}

export default PlaneLine;
