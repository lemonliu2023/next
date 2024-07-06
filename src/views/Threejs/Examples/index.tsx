// import { useEffect } from 'react';
// import useInitAll from '@/hooks/useInitAll';
import './index.css';
import { Outlet } from 'react-router-dom';


function Examples() {
  // const [searchParams] = useSearchParams();
  // const { sceneRef, rendererRef, outlinePassRef } =
  //   useInitAll('threejs-examples');
  // const cleanAll = () => {
  //   sceneRef.current?.children.forEach((item) => {
  //     if (item.type === 'AxesHelper') return;
  //     sceneRef.current?.remove(item);
  //   });
  // };
  // const exampleMap = useMemo(
  //   () =>
  //     new Map([
  //       [
  //         'wall',
  //         {
  //           label: '墙',
  //           onClick: () => {
  //             sceneRef.current?.add(wall({ position: [0, 0, 0], height: 4 }));
  //           },
  //         },
  //       ],
  //       [
  //         'lianyi',
  //         {
  //           label: '涟漪',
  //           onClick: () => {
  //             sceneRef.current?.add(
  //               lianYi({
  //                 position: { x: 0, y: 0, z: 0 },
  //               })
  //             );
  //           },
  //         },
  //       ],
  //       [
  //         'radar',
  //         {
  //           label: '雷达扫描',
  //           onClick: () => {
  //             sceneRef.current?.add(radar({ position: { x: 0, y: 0, z: 0 } }));
  //           },
  //         },
  //       ],
  //       [
  //         'scan',
  //         {
  //           label: '二维码扫描',
  //           onClick: () => {
  //             sceneRef.current?.add(scan());
  //           },
  //         },
  //       ],
  //       [
  //         'laser',
  //         {
  //           label: '激光束',
  //           onClick: () => {
  //             sceneRef.current?.add(laser());
  //           },
  //         },
  //       ],
  //       [
  //         'glsl',
  //         {
  //           label: 'glsl',
  //           onClick: () => {
  //             sceneRef.current?.add(glsl({ renderer: rendererRef.current! }));
  //           },
  //         },
  //       ],
  //       [
  //         'line',
  //         {
  //           label: 'line',
  //           onClick: () => {
  //             const lineMesh = line();
  //             sceneRef.current?.add(lineMesh);
  //             if (outlinePassRef.current?.selectedObjects) {
  //               outlinePassRef.current.selectedObjects = [lineMesh];
  //             }
  //           },
  //         },
  //       ],
  //       [
  //         'threeLine',
  //         {
  //           label: 'threeLine',
  //           onClick: () => {
  //             sceneRef.current?.add(threeLine());
  //           },
  //         },
  //       ],
  //     ]),
  //   [sceneRef, rendererRef]
  // );

  // useEffect(() => {
  //   if (searchParams.get('type')) {
  //     const item = exampleMap.get(searchParams.get('type') as string);
  //     if (item && typeof item.onClick === 'function') {
  //       item.onClick();
  //     }
  //   }
  // }, [searchParams, exampleMap]);

  return (
    // <div className="threejs-examples-container">
    //   <div className="threejs-examples-main">
    //     <div id="threejs-examples"></div>
    //   </div>
      <Outlet />
    // </div>
  );
}

export default Examples;
