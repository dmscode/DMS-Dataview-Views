# 进度条（Progress Bar）

![Created 2024-10-31](https://img.shields.io/badge/Created-2024--10--31-orange?style=flat-square&scale=1.5)
![Updated 2025-04-09](https://img.shields.io/badge/Updated-2025--04--09-blue?style=flat-square&scale=1.5)

## 功能介绍
进度条组件是一个可自定义的进度显示工具，可用于显示任务完成度、时间进度或作为内容分隔条等多种场景。

### 主要特点
- 支持自定义进度值显示
- 内置年/月/周/日时间进度显示
- 可自定义宽度、~~颜色~~和显示精度
- 支持左侧文本标签显示

## 配置说明

### 基础配置项
- `width`: 进度条宽度，取值范围 1-100，表示百分比，默认为 100
- `type`: 进度条类型
  - `normal`: 默认类型，显示输入的进度值
  - `year`: 显示当年进度
  - `month`: 显示当月进度
  - `week`: 显示当周进度
  - `day`: 显示当天进度
- `text`: 进度条左侧显示的文字，不填写则不显示
- `precision`: 进度值显示精度，默认为 2（两位小数）
- ~~`color`: 进度条颜色，默认使用文字颜色~~ **目前暂无颜色自定义，使用 Obsidian 对进度条的默认配色。**
- `value`: 进度值或时间点
  - 当 type 为 normal 时（默认），该值为具体进度值
  - 当 type 为其他预设类型时，该值为时间点，格式如：2024-10-31 07:28:44，若不填写则使用当前时间

## 使用示例

### 基础进度条
```javascript
dv.view("progress-bar", {
    value: 75,
    text: "完成度"
})
```

### 自定义样式进度条
```javascript
dv.view("progress-bar", {
    value: 60,
    width: 80,
    precision: 1,
    text: "项目进度"
})
```

### 年度进度
```javascript
dv.view("progress-bar", {
    type: "year",
    text: "2024年进度"
})
```

### 月度进度
```javascript
dv.view("progress-bar", {
    type: "month",
    text: "本月进度"
})
```

### 指定时间点进度
```javascript
dv.view("progress-bar", {
    type: "week",
    value: "2024-02-23 20:17:02",
    text: "周进度"
})
```

## 应用场景

1. **任务追踪**：显示项目或任务的完成进度
2. **时间进度**：展示年度、月度、周度或日程的时间进度
3. **阅读进度**：标记文档阅读位置或完成度
4. **目标达成**：展示目标完成情况
5. **内容分隔**：作为美观的内容分隔条使用

## 注意事项

1. 进度值应为有效数字，范围在 0-100 之间
2. 时间点格式需符合标准日期时间格式
3. 宽度设置不应影响文档整体布局
4. 颜色值支持任何有效的 CSS 颜色表达式