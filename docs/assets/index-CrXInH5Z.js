const __vite__fileDeps=["assets/bundled-Br83STzG.js","assets/index-CcS5Ukqh.js","assets/index-DY__M6dn.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{u,_ as d,j as n}from"./index-CcS5Ukqh.js";import{U as a,P as p,R as j,F as m,a as g,G as h,Z as x,B as f,T as R,t as k,l as y,h as v,y as _,v as B,D as w,E as S}from"./data-C53evbMW.js";const C=(r,o)=>{const c=new Blob([r],{type:"text/plain"}),s=document.createElement("a");s.href=URL.createObjectURL(c),s.download=o,s.click(),URL.revokeObjectURL(s.href)};function E(){const r=React.useRef(),[o,c]=React.useState(""),s=u();Intl.Segmenter||d(()=>import("./bundled-Br83STzG.js").then(e=>e.b),__vite__mapDeps([0,1,2])).then(e=>{e.createIntlSegmenterPolyfill().then(t=>{Intl.Segmenter=t})});async function i(){return"https://pics.ettoday.net/images/2253/d2253152.jpg"}async function l(){return new Promise(e=>{setTimeout(()=>{e("https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg")},3e3)})}return React.useEffect(()=>{a.use(p),a.use(j),a.use(m,{imagePathPicker:i,imageAction:l}),a.use(g),a.use(h),a.use(x),a.use(f),a.use(R),a.use(k),a.use(y),a.use(v),a.use(_),a.use(B);const e=document.querySelector("#editor");return r.current=new a(e,{markdown:w}),r.current.locale(S),r.current.init(),r.current.on("json-change",t=>{console.log(JSON.stringify(t,null,2))}),document.addEventListener("keydown",t=>{t.key==="s"&&(navigator.platform.match("Mac")?t.metaKey:t.ctrlKey)&&(t.preventDefault(),console.log("保存操作被触发！"))}),()=>{var t;(t=r.current)==null||t.destroy()}},[]),n.jsxs("div",{children:[n.jsx(antd.Affix,{children:n.jsxs(antd.Space,{style:{padding:12},children:[n.jsx(antd.Button,{onClick:()=>{var e;(e=r.current)==null||e.undo()},children:"撤销"}),n.jsx(antd.Button,{onClick:()=>{var e;(e=r.current)==null||e.redo()},children:"重做"}),n.jsx(antd.Input,{placeholder:"查找",onInput:e=>{var t;(t=r.current)==null||t.search(e.target.value,{isRegexp:!0})}}),n.jsx(antd.Button,{children:"上一个"}),n.jsx(antd.Button,{children:"下一个"}),n.jsx(antd.Input,{onInput:e=>{c(e.target.value)}}),n.jsx(antd.Button,{onClick:()=>{var e;(e=r.current)==null||e.replace(o,{isSingle:!0,isRegexp:!0})},children:"替换"}),n.jsx(antd.Button,{onClick:()=>{var e;(e=r.current)==null||e.replace(o,{isSingle:!1,isRegexp:!1})},children:"全部替换"}),n.jsx(antd.Button,{onClick:()=>{var e;(e=r.current)==null||e.selectAll()},children:"全选"}),n.jsx(antd.Button,{onClick:()=>{var t;const e=[{name:"paragraph",text:"foo bar"}];(t=r.current)==null||t.setContent(e)},children:"设置内容"}),n.jsx(antd.Button,{onClick:()=>{var t;const e=(t=r.current)==null?void 0:t.getMarkdown();if(!(e!=null&&e.trim())){antd.message.warning("请输入文本");return}C(e,"file.md")},children:"导出"}),n.jsx(antd.Button,{onClick:()=>{s("/markdown/onlyView")},children:"仅查看"})]})}),n.jsx("div",{className:"editor-container",children:n.jsx("div",{id:"editor"})})]})}export{E as default};
