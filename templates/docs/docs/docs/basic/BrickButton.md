---
group:
  title: 通用

title: BrickButton 块状按钮
desc: '`BrickButton` 是在原 Button 功能基础上进行的丰富。'
demo: /basic/brick-button
---

> 这里是 BrickButton 组件的文档，尝试在/docs/docs/basic/目录下创建新的组件文档 Component.md、Component.en.md。

## 代码演示

### 文字块状按钮

```jsx
<BrickButton text="loading" loading={true} />
```

### 渐变背景按钮

```jsx
<BrickButton
  loading={true}
  loadingSize="large"
  type="primaryGradient"
  background={{
    x1: '0%',
    y1: '0%',
    x2: '0%',
    y2: '100%',
    stops: {
      '0%': 'red',
      '30%': 'blue',
      '100%': 'yellow',
    },
  }}
/>
```

## API

> 下面是基于 apiData 数据源生成的属性表格，详细说明参见 @tuya/dumi-theme-tuya 文档

<API name="BrickButtonProps"></API>
