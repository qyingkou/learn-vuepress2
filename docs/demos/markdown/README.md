---
lang: zh-CN
title: markdown练习
description: markdown练习
---


# Hello VuePress

[[toc]]

## emoji

:tada: ！

## 代码高亮

```ts{1,6-8}:no-line-numbers
import { defaultTheme, defineUserConfig } from 'vuepress'

export default defineUserConfig({
  title: '你好， VuePress',

  theme: defaultTheme({
    logo: 'https://vuejs.org/images/logo.png',
  }),
})
```

## v-pre

```md:no-v-pre
<!-- 这里会被 Vue 编译 -->
1 + 2 + 3 = {{ 1 + 2 + 3 }}
```

## 导入源代码

不支持逗号相隔的多个写法
@[code{10-12} js{2}](./code/a.js)

## vue的模板语法

一加一等于： {{ 1 + 1 }}

<span v-for="i in 3"> span: {{ i }} </span>

## 内置主题的组件

这是默认主题内置的 `<Badge />` 组件 <Badge text="演示" />
