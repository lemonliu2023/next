import{V as e}from"./useInitAll-CbSIb_cJ.js";const n=r=>r instanceof e,o=r=>Array.isArray(r)&&r.length===3&&r.every(t=>typeof t=="number"),c=r=>n(r)?r:o(r)?new e(...r):(console.error("传入的坐标不符合规范，支持Vector3或者[number, number, number]"),new e(0,0,0));export{n as i,c as t};
