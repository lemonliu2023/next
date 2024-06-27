import React, { useEffect } from 'react';
import useInitAll from '@/hooks/useInitAll';
// import Scan from './components/Scan';
// import Scan1 from './components/Scan/index1';
// import Scan2 from './components/Scan/index2';
// import LianYi from './components/LianYi';
// import Glsl from './components/Glsl';
import Radar from '@/components/Radar';
import './index.css'

function Threejs() {
  const exampleList = [
    { id: 'test1', name: 'Example 1' },
    { id: 'test2', name: 'Example 2' },
    { id: 'test3', name: 'Example 3' },
  ];
  const [activeIndex, setActiveIndex] = React.useState(0);

  useEffect(() => {
    const { scene } = useInitAll(exampleList[activeIndex].id);
    // scene.add(Glsl({renderer }));
    // scene.add(LianYi({
    //   position: {x: 0, y: 0, z: 0},
    // }));
   scene.add(Radar({color: "#69BDF2"}));
  }, [])

  return (
    <div className="container">
      <div className="qr-scanner">
        <div className="box">
          <div className="line"></div>
          <div className="angle"></div>
        </div>
      </div>
      <div className="aside">
        <ul>
          {exampleList.map((example, index) => (
            <li key={example.id} onClick={() => setActiveIndex(index)}>
              {example.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="main">
        <div id={exampleList[activeIndex].id}></div>
      </div>
    </div>
  );
}

export default Threejs;