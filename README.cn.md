# hexo-theme-onion

一个极简的，响应式的[Hexo](http://hexo.io/)主题，基于Bootstrap5。

## 预览

[样例网站](https://lonion1124.github.io/)

在[这里](https://lonion1124.github.io/posts/36856836d52b/)查看*Onion*如何渲染Markdown格式。

## 安装

克隆仓库到本地。

```bash
$ git clone https://github.com/LOnion1124/hexo-theme-onion.git themes/onion
```

更改根目录下的`/_config.yml`：

```yaml
theme: onion
```

## 使用

为使用全部*Onion*功能，需要安装一些插件。

### 归档

*Onion*使用首字母排序的归档功能。为保证其功能正常：

```bash
$ npm uninstall hexo-generator-archive
$ npm install hexo-generator-archive-alphabet --save
```

### 本地搜索

添加插件：

```bash
$ npm install hexo-generator-search --save
```

在`/_config.yml`中增加如下设置：

```yaml
search:
  path: search.xml
  field: post
  content: true
  template: 
```

然后检查`/theme/onion/config.yml`开启了本地搜索功能（默认开启）：

```yaml
search:
  enable: true
```

### 脚注

原始的Hexo不支持Markdown脚注语法渲染，添加插件以支持此功能：

```bash
$ npm install hexo-reference --save
```

在你的博客里使用脚注：

```markdown
Some content with footnote[^1] in your post.

[^1]: This is footnote.
```

### LaTeX

卸载原先的渲染插件，安装新插件：

```bash
$ npm uninstall hexo-renderer-marked
$ npm install hexo-renderer-kramed --save
```

在你的博客里编写数学公式：

```latex
$$
\frac{1}{2} + \frac{3}{4} = \frac{5}{4}
$$
```

### 代码高亮

*Onion*默认使用*highlight.js*提供代码高亮功能。

在`/_config.yml`中禁用Hexo自带的代码高亮器：

```yaml
syntax_highlighter: 
highlight:
  enable: false
prismjs:
  enable: false
```

## 定制

通过编辑`/theme/onion/_config.yml`个性化你的博客。

### 元数据

描述博客网站的元数据。

```yaml
# example
meta:
  title: "My Blog"
  favicon: /img/favicon.ico
```

注意：文件路径基于根目录`/theme/onion/source`。

### Header

指定logo，网页标题，GitHub网址和其他信息。

注意以下两个变量：

```yaml
header:
  gallery: false
  about: false
```

如果设置为`true`，*Onion*只会在页首生成对应的链接。你需要在`/source`里创建对应的目录在指定显示内容：

```
source
├─ gallery
│  └─ index.md
└─ about
   └─ index.md
```

*Onion*会显示`index.md`的内容，其渲染样式与博客文章相同。

### 侧边信息栏&信息弹出框

描述侧边信息栏的内容。

注意`Info-modal.content`指定的使按下头像下方按钮后弹出框内的内容。

### 侧边栏（拉出显示）

默认不显示。

启用：

```yaml
sidebar:
  enable: true
```

## 贡献

欢迎加入*Onion*的开发。

## 鸣谢

请允许我向以下的人或物表示特别感谢。没有他们就没有*Onion*。

- GitHub，一切都需要它。
- ChatGPT，教会我很多。
- Bootstrap5，提供了方便的CSS和JS支持。
- Hexo社区，提供了强大的插件库和技术文章，教会我处理一些莫名其妙的状况。
- 我的电脑。
