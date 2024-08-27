import useInitAll from '@/hooks/useInitAll';
import CameraControls from 'camera-controls';
import { useEffect, useRef } from 'react';
import normalBox from '3DObjects/normalBox';
import * as THREE from 'three';
import { Button, Space } from 'antd';

CameraControls.install({ THREE });

function Index() {
  const { sceneRef, cameraRef, rendererRef } = useInitAll('threejs-container', {
    useCustomControl: true,
  });
  const cameraControlsRef = useRef<CameraControls>();
  const clock = new THREE.Clock();
  useEffect(() => {
    cameraControlsRef.current = new CameraControls(
      cameraRef.current!,
      rendererRef.current?.domElement
    );
    sceneRef.current?.add(
      normalBox(new THREE.Vector3(0, 0, 0)),
      normalBox(new THREE.Vector3(100, 100, 0))
    );
    (function anim() {
      const delta = clock.getDelta();
      cameraControlsRef.current.update(delta);

      requestAnimationFrame(anim);
    })();
  }, []);

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <Space direction="vertical" style={{ position: 'absolute' }}>
        <Button
          onClick={() => {
            cameraControlsRef.current!.setLookAt(
              100,
              120,
              130,
              100,
              100,
              0,
              true
            );
          }}
        >
          move to ( 100, 120, 130 ), look at ( 100, 100, 0 )
        </Button>
        <Button
          onClick={() => {
            cameraControlsRef.current!.setLookAt(
              100,
              100,
              100,
              0,
              0,
              0,
              true
            );
          }}
        >
          move to ( 100, 100, 100 ), look at ( 0, 0, 0 )
        </Button>
      </Space>
      <div
        id="threejs-container"
        style={{ width: '100%', height: '100%' }}
      ></div>
    </div>
  );
}

export default Index;
