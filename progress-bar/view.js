/**
 * 进度条视图（Progress Bar）
 * 作者: 稻米鼠
 * 网站: https://zji.me/
 * 支持: https://afdian.com/a/daomishu
 * 仓库: 
 * 生成时间: 2025/2/24 09:43:50
 * 此文件由构建工具自动生成，请勿直接修改
 */

"use strict";
(() => {
  // src/progress-bar/view.ts
  var container = dv.container;
  var config = Object.assign({
    /** 进度条宽度，百分比 1-100 */
    width: 100,
    /** 进度条类型，不填写为 normal，即显示输入的进度值，可选预设： Year | month | week | day，显示对应时间区间的进度 */
    type: "normal",
    /** 进度条左侧的文字，如果不填写则不显示 */
    text: "",
    /** 显示精度，默认为 2，即两位小数 */
    precision: 2,
    /** 进度条颜色，默认为 文字颜色 */
    color: "var(--text-normal)",
    /** 进度条的值，如果 type 为 normal 时，该值为进度，如果 type 为其他预设时，该值为时间点，格式 2024-10-31 07:28:44，将基于此时间计算进度，如未填写，则用当前时间计算 */
    value: ""
  }, input || {});
  var setProgress = (value) => {
    const label = dv.container.createEl("label", { cls: "dms-progress" });
    if (config.width)
      label.style.width = `${config.width}%`;
    label.innerHTML = (config.text && config.text.length ? `<span>${config.text}</span>` : "") + `<progress class="dms-progress-bar" value="${value}" max="100"></progress><span>${Number(value).toFixed(config.precision)}%</span>`;
  };
  var getTimePoints = () => {
    const timePoint = config.value && config.value.length ? new Date(config.value) : /* @__PURE__ */ new Date();
    const type = config.type.toLowerCase();
    const typeIndex = ["", "year", "month", "week", "day"].indexOf(type);
    if (!typeIndex) {
      return {
        start: timePoint,
        point: timePoint,
        end: timePoint
      };
    }
    const start = {
      year: timePoint.getFullYear(),
      month: typeIndex === 1 ? 0 : timePoint.getMonth(),
      date: typeIndex < 3 ? 1 : typeIndex === 3 ? timePoint.getDate() - timePoint.getDay() : timePoint.getDate()
    };
    const end = {
      year: typeIndex === 1 ? start.year + 1 : start.year,
      month: typeIndex === 2 ? start.month + 1 : start.month,
      date: typeIndex < 3 ? start.date : typeIndex === 3 ? start.date + 7 : start.date + 1
    };
    return {
      start: new Date(start.year, start.month, start.date),
      point: timePoint,
      end: new Date(end.year, end.month, end.date)
    };
  };
  if (config.type === "normal") {
    setProgress(Number(config.value));
  } else {
    const { start, point, end } = getTimePoints();
    setProgress(
      +((point.getTime() - start.getTime()) / (end.getTime() - start.getTime()) * 100).toFixed(config.precision)
    );
  }
})();
