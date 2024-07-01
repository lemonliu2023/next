import { MarkdownToHtml } from '@muyajs/core';
import { DEFAULT_MARKDOWN } from '../data';
import { useEffect, useState } from 'react';
import { Skeleton, message } from 'antd';

const OnlyView = () => {
  const [showSkeleton, setShowSkeleton] = useState(false);
  useEffect(() => {
    setShowSkeleton(true);
    // only view
    const md2Html = new MarkdownToHtml(DEFAULT_MARKDOWN);
    md2Html.generate().then((_html) => {
      const viewerDom = document.querySelector('#viewer');
      //   setShowSkeleton(false);
      if (!viewerDom) {
        message.error('未找到容器');
        return;
      }
      viewerDom.innerHTML = _html;
      setTimeout(() => {
        setShowSkeleton(false);
        viewerDom.setAttribute('style', 'display: block');
      });
    });
  }, []);
  return (
    <>
      {showSkeleton && <Skeleton />}
      <div id="viewer" style={{ display: 'none' }}></div>
    </>
  );
};

export default OnlyView;
