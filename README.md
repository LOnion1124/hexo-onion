# hexo-theme-onion

A simple, responsive [Hexo](http://hexo.io/) theme based on Bootstrap5.

- [Chinese Documentation](https://github.com/LOnion1124/hexo-theme-onion/blob/main/README.cn.md)

## Preview

[Here](https://lonion1124.github.io/) is an example website.

To learn how *Onion* display Markdown formats, see [this post](https://lonion1124.github.io/posts/36856836d52b/).

## Installation

Clone this repository into your blog directory.

```bash
$ git clone https://github.com/LOnion1124/hexo-theme-onion.git themes/onion
```

Then change `/_config.yml` in the root directory:

```yaml
theme: onion
```

## Usage

To enable all functions of *Onion*, you need to add some dependencies.

### Archive

*Onion* uses alphabetical order to sort posts in archive page. To make sure it works properly:

```bash
$ npm uninstall hexo-generator-archive
$ npm install hexo-generator-archive-alphabet --save
```

### Local search

Add plugin:

```bash
$ npm install hexo-generator-search --save
```

Add following config in `/_config.yml`:

```yaml
search:
  path: search.xml
  field: post
  content: true
  template: 
```

Then check `/theme/onion/config.yml` to enable local search (the value is true by default):

```yaml
search:
  enable: true
```

### Footnote

The original Hexo generator does not support Markdown footnote. Add plugin to support it:

```bash
$ npm install hexo-reference --save
```

To write a footnote in your post:

```markdown
Some content with footnote[^1] in your post.

[^1]: This is footnote.
```

### LaTeX

Uninstall the origin renderer and then add plugin:

```bash
$ npm uninstall hexo-renderer-marked
$ npm install hexo-renderer-kramed --save
```

To write math expressions in your post:

```latex
$$
\frac{1}{2} + \frac{3}{4} = \frac{5}{4}
$$
```

### Code highlight

By default, *Onion* uses *highlight.js* to highlight code blocks.

Disable the default highlight config in `/_config.yml`:

```yaml
syntax_highlighter: 
highlight:
  enable: false
prismjs:
  enable: false
```

## Language

Currently supported languages:

- en: English (default)
- zh-cn: Simplified Chinese
- zh-tw: Traditional Chinese
- ja: Japanese

To change language, edit `/config.yml`:

```yaml
language: zh-cn
```

## Customize

Customize your blog website by editing `/theme/onion/_config.yml`.

### Metadata

Describes the metadata of the website.

```yaml
# example
meta:
  title: "My Blog"
  favicon: /img/favicon.ico
```

Note: directory is based on root `/theme/onion/source`.

### Header

Describes your logo, webpage title, GitHub URL and something else.

Note these two variables:

```yaml
header:
  gallery: false
  about: false
```

If set to `true`, *Onion* will only create a link in the navbar. You need to create your own page folder in `/source` to let Hexo know what to display.

```
source
├─ gallery
│  └─ index.md
└─ about
   └─ index.md
```

*Onion* will render the content in `index.md` in the same way as post content.

### Infobar & Info-modal

Describes the content of sidebar.

Note that `Info-modal.content` describes the content shown in the pop-up after clicking the button under the avatar.

### Sidebar (Offcanvas)

Is not displayed by default.

To use it:

```yaml
sidebar:
  enable: true
```

## Contributing

You are welcomed to join the development *Onion*.

## Thanks

Allow me to express my special thanks to the following authors and services without whom I may never complete the development of *Onion*.

- GitHub, literally everything need it.
- ChatGPT, I've learnt a lot from it.
- Bootstrap5, for its convenient CSS and JS support.
- Hexo community, for those fantastic plugins and blogs that taught me how to deal with confusing situations.
- My PC.
