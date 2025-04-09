/**
 * 文件树（File Tree）
 * 作者: 稻米鼠
 * 网站: https://zji.me/
 * 支持: https://afdian.com/a/daomishu
 * 仓库: https://github.com/dmscode/DMS-Dataview-Views
 * 创建时间: 2025-04-09
 * 生成时间: 2025-04-09
 * 一个用于展示文件和文件夹的树形结构的组件。
 */
"use strict";(()=>{var w=Object.defineProperty;var i=(n,c)=>w(n,"name",{value:c,configurable:!0});(()=>{let n=Object.assign({root:"/",onlyFolders:!0,markEmoji:!1,type:"code",include:[],exclude:[]},input),c=app.vault.fileMap[n.root],u=n.type==="html"?"<br />":`
`,y=0,l="\\"+u,N=i(e=>e.children?"\u{1F4C1}":["png","jpg","jpeg","gif","webp","bmp","ico","svg"].includes(e.extension)?"\u{1F5BC}\uFE0F":["js","ts","jsx","tsx"].includes(e.extension)?"\u{1F4DC}":["css","scss","less","sass"].includes(e.extension)?"\u{1F3A8}":["html","htm"].includes(e.extension)?"\u{1F310}":["md","markdown"].includes(e.extension)?"\u{1F4DD}":["json","yaml","yml","toml"].includes(e.extension)?"\u2699\uFE0F":["py","java","cpp","c","cs","go","rs"].includes(e.extension)?"\u{1F4BB}":["mp3","wav","ogg","flac"].includes(e.extension)?"\u{1F3B5}":["mp4","avi","mov","wmv"].includes(e.extension)?"\u{1F3AC}":["pdf","doc","docx","xls","xlsx","ppt","pptx"].includes(e.extension)?"\u{1F4D1}":["zip","rar","7z","tar","gz"].includes(e.extension)?"\u{1F4E6}":["exe","bat","sh"].includes(e.extension)?"\u26A1":"\u{1F4C4}","getEmojiMark"),d=i(e=>n.include.length===0||n.include.includes(e.extension)?!n.exclude.includes(e.extension):!1,"isFileShow"),f=i(e=>{if(!e)return null;let s={...e};if(e.children){let t=[];for(let r of e.children)if(r.children){let o=f(r);o&&t.push(o)}else!n.onlyFolders&&d(r)&&t.push({...r});return t.length>0?(s.children=t,s):n.onlyFolders?null:(delete s.children,s)}return!n.onlyFolders&&d(e)?s:null},"createShadowTree"),j=i(e=>{let s=n.markEmoji?N(e):"",t=e.children?"/":"",r=s+e.name+t;return n.type==="html"?e.children?`<span>${r}</span>`:`<a href="${e.path}" class="internal-link" target="_blank" rel="noopener">${r}</a>`:r},"getNodeCode"),p=[],m=i((e,s)=>{e.children&&e.children.forEach((t,r,o)=>{let x=r===o.length-1;p[s]=x;let v=x?"\u2514\u2500\u2500 ":"\u251C\u2500\u2500 ",g="";for(let a=0;a<s;a++)g+=p[a]?"    ":"\u2502   ";l+=g+v+j(t)+u,t.children&&m(t,s+1)})},"traverse"),h=f(c);h&&m(h,y),n.type==="code"?(l="```tree\n"+l+"```",dv.span(l)):dv.container.innerHTML=l})();})();
