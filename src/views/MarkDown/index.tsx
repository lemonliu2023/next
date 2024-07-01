import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Affix, Button, Input, Space, message } from 'antd';
import type { TState } from '@muyajs/core';
import '@muyajs/core/lib/style.css';
import {
  CodeBlockLanguageSelector,
  EmojiSelector,
  ImageEditTool,
  ImageResizeBar,
  ImageToolBar,
  InlineFormatToolbar,
  Muya,
  ParagraphFrontButton,
  ParagraphFrontMenu,
  ParagraphQuickInsertMenu,
  PreviewToolBar,
  TableColumnToolbar,
  TableDragBar,
  TableRowColumMenu,
  zh,
} from '@muyajs/core';

import { DEFAULT_MARKDOWN } from './data';
import { exportTextPlainContent } from '@/utils';

export default function MarkDown() {
  const muyaRef = useRef<Muya>();
  const [replaceInput, setReplaceInput] = useState<string>('');
  const navigate = useNavigate();

  // Fix Intl.Segmenter is not work on firefox.
  if (!(Intl as any).Segmenter) {
    import('intl-segmenter-polyfill/dist/bundled').then((polyfill) => {
      polyfill.createIntlSegmenterPolyfill().then((res) => {
        (Intl as any).Segmenter = res;
      });
    });
  }

  async function imagePathPicker() {
    return 'https://pics.ettoday.net/images/2253/d2253152.jpg';
  }

  async function imageAction() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg'
        );
      }, 3000);
    });
  }

  useEffect(() => {
    Muya.use(EmojiSelector);
    Muya.use(InlineFormatToolbar);
    Muya.use(ImageEditTool, {
      imagePathPicker,
      imageAction,
    });
    Muya.use(ImageToolBar);
    Muya.use(ImageResizeBar);
    Muya.use(CodeBlockLanguageSelector);

    Muya.use(ParagraphFrontButton);
    Muya.use(ParagraphFrontMenu);
    Muya.use(TableColumnToolbar);
    Muya.use(ParagraphQuickInsertMenu);
    Muya.use(TableDragBar);
    Muya.use(TableRowColumMenu);
    Muya.use(PreviewToolBar);
    const container: HTMLElement = document.querySelector('#editor')!;

    muyaRef.current = new Muya(container, {
      markdown: DEFAULT_MARKDOWN,
    });

    muyaRef.current.locale(zh);

    muyaRef.current.init();

    muyaRef.current.on('json-change', (_changes) => {
      // console.log(JSON.stringify(muyaRef.current?.getState(), null, 2));
      // console.log(muyaRef.current?.getMarkdown());
      // console.log(JSON.stringify(_changes, null, 2));
    });

    // muya.on('selection-change', changes => {
    //   const { anchor, focus, path } = changes
    //   console.log(JSON.stringify([anchor.offset, focus.offset, path]))
    // })
    
    document.addEventListener('keydown', (e) => {
      // 检查按下的是否是S键
      if (
        e.key === 's' &&
        (navigator.platform.match('Mac') ? e.metaKey : e.ctrlKey)
      ) {
        e.preventDefault();
        // 在这里执行保存操作
        console.log('保存操作被触发！');
      }
    });
  }, []);

  return (
    <div>
      <Affix>
        <Space>
          <Button
            onClick={() => {
              muyaRef.current?.undo();
            }}
          >
            撤销
          </Button>
          <Button
            onClick={() => {
              muyaRef.current?.redo();
            }}
          >
            重做
          </Button>
          <Input
            placeholder="查找"
            onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
              muyaRef.current?.search(e.target.value, { isRegexp: true });
            }}
          ></Input>
          <Button>上一个</Button>
          <Button>下一个</Button>
          <Input
            onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
              setReplaceInput(e.target.value);
            }}
          ></Input>
          <Button
            onClick={() => {
              muyaRef.current?.replace(replaceInput, {
                isSingle: true,
                isRegexp: true,
              });
            }}
          >
            替换
          </Button>
          <Button
            onClick={() => {
              muyaRef.current?.replace(replaceInput, {
                isSingle: false,
                isRegexp: false,
              });
            }}
          >
            全部替换
          </Button>
          <Button
            onClick={() => {
              muyaRef.current?.selectAll();
            }}
          >
            全选
          </Button>
          <Button
            onClick={() => {
              const content = [
                {
                  name: 'paragraph',
                  text: 'foo bar',
                },
              ];
              muyaRef.current?.setContent(content as TState[]);
            }}
          >
            设置内容
          </Button>
          <Button onClick={() => {
            const content = muyaRef.current?.getMarkdown()
            if(!content?.trim()) {
              message.warning('请输入文本')
              return;
            }
            exportTextPlainContent(content, 'file.md')
          }}>导出</Button>
          <Button onClick={() => {
            navigate('/markdown/onlyView')
          }}>仅查看</Button>
        </Space>
      </Affix>
      <div className="editor-container">
        <div id="editor"></div>
      </div>
    </div>
  );
}
