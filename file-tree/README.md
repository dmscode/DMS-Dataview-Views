# 文件树状图（File Tree）

![Created 2025-04-09](https://img.shields.io/badge/Created-2025--04--09-orange?style=flat-square&scale=1.5)
![Updated 2025-04-09](https://img.shields.io/badge/Updated-2025--04--09-blue?style=flat-square&scale=1.5)

## 简介

文件树状图是一个用于在 Obsidian 中可视化显示文件和文件夹结构的 DataView 视图。它能够以树形结构展示您的文件系统，支持不同类型的文件使用不同的图标标记，并提供多种自定义配置选项。

## 功能特点

- 以树形结构直观展示文件和文件夹
- 支持仅显示文件夹或同时显示文件和文件夹
- 可选择使用表情符号标记不同类型的文件
- 支持代码块或 HTML 两种输出格式
- 自动识别多种文件类型并分配对应的图标
- 支持根据文件类型进行结果过滤

## 使用方法

在Obsidian笔记中，创建一个 DataView 代码块，并引用此视图：

```dataviewjs
dv.view("file-tree")
```

### 配置选项

您可以通过传递配置对象来自定义文件树的显示方式：

```dataviewjs
dv.view("file-tree", {
  root: "/",              // 根目录路径
  onlyFolders: true,      // 是否只显示文件夹
  markEmoji: true,        // 是否使用表情符号标记文件类型
  type: "code",           // 输出类型：code 或 html
  include: ["md", "png"], // 要包含的文件后缀列表
  exclude: ["tmp"]        // 要排除的文件后缀列表
})
```

#### 配置参数说明

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| root | 字符串 | `"/"` | 文件树的根目录路径 |
| onlyFolders | 布尔值 | `true` | 设置为`true`时只显示文件夹，设置为`false`时显示文件夹和文件 |
| markEmoji | 布尔值 | `false` | 设置为`true`时使用表情符号标记不同类型的文件 |
| type | 字符串 | `"code"` | 输出格式，可选值：`"code"`(代码块) 或 `"html"`(HTML格式) |
| include | 字符串数组 | `[]` | 要包含的文件后缀列表，空数组表示不限制 |
| exclude | 字符串数组 | `[]` | 要排除的文件后缀列表 |

### 文件过滤功能

当`onlyFolders`设置为`false`时，您可以使用`include`和`exclude`参数来控制哪些类型的文件应该显示在文件树中：

- **include**: 指定要包含的文件后缀列表。如果此数组为空，则表示不限制文件类型（除非在exclude中排除）
- **exclude**: 指定要排除的文件后缀列表，这些类型的文件将不会显示在文件树中

## 文件类型图标

当`markEmoji`设置为`true`时，不同类型的文件将使用以下表情符号标记：

- 📁 文件夹
- 🖼️ 图片文件 (png, jpg, jpeg, gif, webp, bmp, ico, svg)
- 📜 JavaScript/TypeScript文件 (js, ts, jsx, tsx)
- 🎨 样式文件 (css, scss, less, sass)
- 🌐 HTML文件 (html, htm)
- 📝 Markdown文件 (md, markdown)
- ⚙️ 配置文件 (json, yaml, yml, toml)
- 💻 编程语言源文件 (py, java, cpp, c, cs, go, rs)
- 🎵 音频文件 (mp3, wav, ogg, flac)
- 🎬 视频文件 (mp4, avi, mov, wmv)
- 📑 文档文件 (pdf, doc, docx, xls, xlsx, ppt, pptx)
- 📦 压缩文件 (zip, rar, 7z, tar, gz)
- ⚡ 可执行文件 (exe, bat, sh)
- 📄 其他文件类型

## 示例输出

### 代码块格式 (type: "code")

```tree
\
└── 📁Obsidian/
    ├── 📁.obsidian/
    │   ├── 📁plugins/
    │   │   └── 📁dataview/
    │   └── 📁themes/
    ├── 📁Attachments/
    │   ├── 🖼️image.png
    │   └── 📑document.pdf
    └── 📁Notes/
        ├── 📝daily-note.md
        └── 📝project-ideas.md
```

### HTML格式 (type: "html")

HTML 格式会渲染成可点击的链接，点击文件名可以直接跳转到对应的文件。

## 注意事项

- 在大型仓库中使用时，如果显示所有文件可能会导致性能问题，建议使用`onlyFolders: true`选项