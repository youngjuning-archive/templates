---
title: Button
desc: '`Button` is one of the most commonly used components, used in some occasions that need to be clicked, such as plain text, pictures, and icons.'
demo: /basic/button
---

> /docs/docs/basic/ is the generic component category, and the folder under /docs/docs/ is rendered as a secondary menu.

> The Demo field in the Meta section at the top of Markdown is used to tell the right Demo which route to load.

## Code demo

### Plain text button

```jsx
<Button text="Click me" />
```

### Pure icon button

```jsx
<Button icon="power" />
```

### Button with Icon text

```jsx
<Button icon="selected" iconSize={24} text="Text" />
```

### Icon button (with background gradient)

```jsx
<Button
  textDirection="right"
  size={40}
  icon="selected"
  iconSize={24}
  iconColor="#fff"
  text="Text"
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

extends [TouchableOpacityProps](https://reactnative.dev/docs/touchableopacity#props)

<API name="ButtonProps"></API>
