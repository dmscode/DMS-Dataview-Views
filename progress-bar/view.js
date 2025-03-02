/**
 * 进度条（Progress Bar）
 * 作者: 稻米鼠
 * 网站: https://zji.me/
 * 支持: https://afdian.com/a/daomishu
 * 仓库: https://github.com/dmscode/DMS-Dataview-Views
 * 创建时间: 2024-10-31
 * 生成时间: 2025-03-02
 * 用于显示完成度或进度信息，也可以显示年月周日的进度。
 */
"use strict";(()=>{var d=Object.defineProperty;var r=(e,n)=>d(e,"name",{value:n,configurable:!0});var l=dv.container,t=Object.assign({width:100,type:"normal",text:"",precision:2,color:"var(--text-normal)",value:""},input||{}),i=r(e=>{let n=document.createElement("label");n.classList.add("dms-progress"),dv.container.append(n),t.width&&(n.style.width=`${t.width}%`),n.innerHTML=(t.text&&t.text.length?`<span>${t.text}</span>`:"")+`<progress class="dms-progress-bar" value="${e}" max="100"></progress><span>${Number(e).toFixed(t.precision)}%</span>`},"setProgress"),c=r(()=>{let e=t.value&&t.value.length?new Date(t.value):new Date,n=t.type.toLowerCase(),a=["","year","month","week","day"].indexOf(n);if(!a)return{start:e,point:e,end:e};let o={year:e.getFullYear(),month:a===1?0:e.getMonth(),date:a<3?1:a===3?e.getDate()-e.getDay():e.getDate()},s={year:a===1?o.year+1:o.year,month:a===2?o.month+1:o.month,date:a<3?o.date:a===3?o.date+7:o.date+1};return{start:new Date(o.year,o.month,o.date),point:e,end:new Date(s.year,s.month,s.date)}},"getTimePoints");if(t.type==="normal")i(Number(t.value));else{let{start:e,point:n,end:a}=c();i(+((n.getTime()-e.getTime())/(a.getTime()-e.getTime())*100).toFixed(t.precision))}})();
