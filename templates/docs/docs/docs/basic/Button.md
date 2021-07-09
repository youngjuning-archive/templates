---
title: Button 按钮
desc: '`Button` 是一个最常用的组件，用于一些纯文本、图片、Icon 等需要点击的场合。'
demo: /basic/button
---

> /docs/docs/basic/是通用组件分类，/docs/docs/目录下的文件夹会渲染成二级菜单。

> markdown 顶部 meta 区的 demo 字段用来告诉右边 demo 加载哪个路由。

## 代码演示

### 纯文本按钮

```jsx
<Button text="点我一下" />
```

### 纯 Icon 按钮

```jsx
<Button icon="power" />
```

### 带 Icon 文字的按钮

```jsx
<Button icon="selected" iconSize={24} text="文字" />
```

### 图标按钮（带背景渐变）

```jsx
<Button
  textDirection="right"
  size={40}
  icon="selected"
  iconSize={24}
  iconColor="#fff"
  text="文字"
  background={{
    x1: '20%',
    y1: '20%',
    x2: '30%',
    y2: '100%',
    stops: {
      '0%': '#ffff00',
      '100%': '#000',
    },
  }}
/>
```

## API

继承自 [TouchableOpacityProps](https://reactnative.dev/docs/touchableopacity#props)

<API name="ButtonProps"></API>
