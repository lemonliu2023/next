import { useEffect, useMemo } from 'react';
import { Menu, MenuProps } from 'antd';
import useInitAll from '@/hooks/useInitAll';
import './index.css';
import lianYi from '../shaders/lianYi';
import radar from '../shaders/radar';
import scan from '../shaders/scan';
import laser from '../shaders/laser';
import glsl from '../shaders/glsl';
import wall from '../shaders/wall';
import line from '../shaders/line';
import { useSearchParams } from 'react-router-dom';
import threeLine from '../shaders/threeLine';

type MenuItem = Required<MenuProps>['items'][number];

function Threejs() {
  const [searchParams] = useSearchParams();
  const { sceneRef, rendererRef } = useInitAll('threejs-examples');
  const cleanAll = () => {
    sceneRef.current?.children.forEach((item) => {
      if (item.type === 'AxesHelper') return;
      sceneRef.current?.remove(item);
    });
  };
  const exampleMap = useMemo(
    () =>
      new Map([
        [
          'wall',
          {
            label: '墙',
            onClick: () => {
              sceneRef.current?.add(wall({ position: [0, 0, 0], height: 4 }));
            },
          },
        ],
        [
          'lianyi',
          {
            label: '涟漪',
            onClick: () => {
              sceneRef.current?.add(
                lianYi({
                  position: { x: 0, y: 0, z: 0 },
                })
              );
            },
          },
        ],
        [
          'radar',
          {
            label: '雷达扫描',
            onClick: () => {
              sceneRef.current?.add(
                radar({ color: '#69BDF2', position: { x: 0, y: 0, z: 0 } })
              );
            },
          },
        ],
        [
          'scan',
          {
            label: '二维码扫描',
            onClick: () => {
              sceneRef.current?.add(scan());
            },
          },
        ],
        [
          'laser',
          {
            label: '激光束',
            onClick: () => {
              sceneRef.current?.add(laser());
            },
          },
        ],
        [
          'glsl',
          {
            label: 'glsl',
            onClick: () => {
              sceneRef.current?.add(glsl({ renderer: rendererRef.current! }));
            },
          },
        ],
        [
          'line',
          {
            label: 'line',
            onClick: () => {
              sceneRef.current?.add(line())
            }
          }
        ],
        [
          'threeLine',
          {
            label: 'threeLine',
            onClick: () => {
              sceneRef.current?.add(threeLine())
            }
          }
        ]
      ]),
    [sceneRef, rendererRef]
  );
  const exampleList = useMemo<MenuItem[]>(() => {
    return Array.from(exampleMap.entries()).map(([key, value]) => {
      return {
        key,
        label: value.label,
      };
    });
  }, [exampleMap]);

  useEffect(() => {
    if(searchParams.get('type')) {
      const item = exampleMap.get(searchParams.get('type') as string);
      if (item && typeof item.onClick === 'function') {
        item.onClick();
      }
    }
  }, [searchParams, exampleMap])

  return (
    <div className="threejs-examples-container">
      <Menu
        style={{ width: 256 }}
        onClick={(e) => {
          const item = exampleMap.get(e.key);
          if (item && typeof item.onClick === 'function') {
            cleanAll();
            item.onClick();
          }
        }}
        defaultSelectedKeys={[]}
        mode="inline"
        items={exampleList}
      />
      <div className="threejs-examples-main">
        <div id="threejs-examples"></div>
      </div>
    </div>
  );
}

export default Threejs;
