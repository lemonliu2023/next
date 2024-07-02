import React, { useEffect } from 'react';
import * as THREE from 'three';
import { Button, Space, Row } from 'antd';
import useInitAll from '@/hooks/useInitAll';
import './index.css';
import lianYi from './shaders/lianYi';
import radar from './shaders/radar';
import scan from './shaders/scan';
import laser from './shaders/laser';
import glsl from './shaders/glsl';
import wall from './shaders/wall';

function Threejs() {
  const sceneRef = React.useRef<THREE.Scene>();
  const rendererRef = React.useRef<THREE.WebGLRenderer>();
  const exampleList = [
    {
      id: 'wall',
      name: '墙',
      fn: () => {
        sceneRef.current?.add(wall({position: [0, 0, 0], height: 4}))
      }
    },
    {
      id: 'lianyi',
      name: '涟漪',
      fn: () => {
        sceneRef.current?.add(
          lianYi({
            position: { x: 0, y: 0, z: 0 },
          })
        );
      },
    },
    {
      id: 'radar',
      name: '雷达扫描',
      fn: () => {
        sceneRef.current?.add(
          radar({ color: '#69BDF2', position: { x: 0, y: 0, z: 0 } })
        );
      },
    },
    {
      id: 'scan',
      name: '二维码扫描',
      fn: () => {
        sceneRef.current?.add(scan());
      },
    },
    {
      id: 'laser',
      name: '激光束',
      fn: () => {
        sceneRef.current?.add(laser());
      },
    },
    {
      id: 'glsl',
      name: 'shaderToy实例加载',
      fn: () => {
        sceneRef.current?.add(glsl({renderer: rendererRef.current!}));
      },
    },
  ];
  const [activeIndex, setActiveIndex] = React.useState(0);

  useEffect(() => {
    const { scene, renderer } = useInitAll(exampleList[activeIndex].id);
    sceneRef.current = scene;
    rendererRef.current = renderer;
  }, []);

  useEffect(() => {
    sceneRef.current?.children.forEach((item) => {
      if (item.type === 'AxesHelper') return;
      sceneRef.current?.remove(item);
    });
    exampleList[activeIndex].fn();
  }, [activeIndex]);

  return (
    <div className="container">
      <div className="qr-scanner">
        <div className="box">
          <div className="line"></div>
          <div className="angle"></div>
        </div>
      </div>
      <Row className="aside" style={{ padding: 12 }}>
        <Space direction="vertical">
          {exampleList.map((example, index) => (
            <Button key={example.id} onClick={() => setActiveIndex(index)}>
              {example.name}
            </Button>
          ))}
        </Space>
      </Row>
      <div className="main">
        <div id={exampleList[activeIndex].id}></div>
      </div>
    </div>
  );
}

export default Threejs;
