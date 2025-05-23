# 体重追踪（Weight Tracker）

![Created 2025-02-02](https://img.shields.io/badge/Created-2025--02--02-orange?style=flat-square&scale=1.5)
![Updated 2025-04-09](https://img.shields.io/badge/Updated-2025--04--09-blue?style=flat-square&scale=1.5)

## 功能概述

Weight Tracker 是一个体重和体脂率追踪的可视化工具，它能够：
- 生成体重和体脂率的双轴折线图
- 显示目标值参考线
- 计算与初始值和前一天的变化量
- 生成美观的图片用于分享

## 数据格式要求

数据需要以列表形式录入，每一行的格式为：

```
- 日期 | 体重 | 体脂率
```

示例：
```
- 2024-01-01 | 165.5 | 22.3
- 2024-01-02 | 165.2 | 22.1
```

> 注意：
> - 日期、体重和体脂率之间使用 `|` 或空格分隔
> - 体重单位为斤
> - 体脂率单位为百分比

### 衣物增减偏移量

```
- Set -0.89
```

表示减掉了 0.89 斤的衣物。这个数值会补偿在体重盒体之上，以保证图表仍能正确显示趋势。

粗略的认为增减衣物的 80% 会加在脂肪上


## 调用方法

必须在数据文件内调用，但是为了便于阅读可以先调用视图，而将数据写在底部。

### 基础调用。

调用方法为 `dataviewjs` 代码块：

````
```dataviewjs
dv.view("weightTracker")
```
````

`weightTracker` 为视图所在文件夹名称，如有重名则使用完整路径，如：`Dataview/weightTracker`

### 配置调用

调用方法为 `dataviewjs` 代码块：

````
```dataviewjs
dv.view("weightTracker", {
    title: "【🌟减重打卡🌟】",                // 打卡图片的标题
    chart: {
        stroke: 2,                      // 线条粗细
        weight: {
            title: "体重",                // 标题
            showTip: true,              // 是否显示坐标轴标题。
            tip: "斤",                   // 坐标轴标题
            start: 80,                  // 起始体重
            end: 180,                   // 结束体重
            step: 1,                    // 步长
            showTicks: true,            // 是否显示刻度
            color: "rgb(255, 99, 132)", // 颜色
                                        // 目标值
            target: {
                title: "目标体重",
                show: true,             // 是否显示目标值
                value: 120,             // 目标值
                fill: true,             // 是否填充
            },
        },
        bfRate: {
            title: "体脂",                // 标题
            showTip: true,              // 是否显示坐标轴标题。
            tip: "%",                   // 坐标轴标题
            start: 10,                  // 起始体脂率
            end: 30,                    // 结束体脂率
            step: 1,                    // 步长
            showTicks: true,            // 是否显示刻度
            color: "rgb(54, 162, 235)", // 颜色
                                        // 目标值
            target: {
                title: "目标体脂",
                show: true,             // 是否显示目标值
                value: 24,              // 目标值
                fill: true,             // 是否填充
            },
        }
    },
    increaseColor: "rgb(255, 99, 132)", // 增长颜色
    decreaseColor: "rgb(54, 162, 235)", // 减少颜色
    keepColor: "rgb(88, 88, 96)",       // 保持不变的颜色
})
```
````

配置对象中的属性，按需选择修改即可，并不需要全部写出。上面是完整的默认配置。

## 配置说明

可以通过修改配置来自定义图表的显示效果，主要配置项包括：

### 基础配置
- `title`: 图表标题，默认为"【🌟减重打卡🌟】"
- `chart.stroke`: 线条粗细，默认为2

### 体重相关配置 (chart.weight)
- `title`: 体重数据标题
- `showTip`: 是否显示坐标轴标题
- `tip`: 坐标轴标题文本（单位）
- `start`: Y轴起始值
- `end`: Y轴结束值
- `step`: Y轴刻度步长
- `showTicks`: 是否显示刻度
- `color`: 曲线颜色

#### 体重目标值配置 (chart.weight.target)
- `title`: 目标线标题
- `show`: 是否显示目标线
- `value`: 目标值
- `fill`: 是否填充目标线以下区域

### 体脂率相关配置 (chart.bfRate)
配置项与体重配置相同，可单独设置：
- 显示范围（start、end）
- 目标值
- 颜色等

### 变化量显示颜色
- `increaseColor`: 增长时的显示颜色
- `decreaseColor`: 减少时的显示颜色
- `keepColor`: 保持不变时的显示颜色

## 图表功能说明

1. **双轴折线图**
   - 左轴：体重数据（单位：斤）
   - 右轴：体脂率数据（单位：%）

2. **目标值参考线**
   - 可为体重和体脂率分别设置目标值
   - 支持填充目标值以下区域
   - 使用虚线样式区分

3. **变化量统计**
   - 显示与初始值的变化量
   - 显示与前一天的变化量
   - 使用不同颜色直观显示增减状态

4. **图片生成与分享**
   - 自动生成美观的图片
   - 支持随机更换页眉图片
   - 点击图片可复制到剪贴板

## 使用步骤

1. **数据录入**
   - 按照指定格式录入体重和体脂率数据
   - 确保数据格式正确，使用 `|` 或空格分隔

2. **配置调整（可选）**
   - 根据需要调整图表配置
   - 设置合适的显示范围和目标值

3. **查看图表**
   - 图表会自动生成并显示
   - 观察体重和体脂率的变化趋势
   - 查看与目标值的差距

4. **分享图表**
   - 点击生成的图片
   - 图片会自动复制到剪贴板
   - 可以粘贴到其他应用中分享

## 注意事项

1. 数据格式要求严格，请确保按照正确格式录入
2. 配置修改后会实时生效
3. 建议根据实际情况调整显示范围，以获得最佳显示效果
4. 图片生成可能需要短暂等待