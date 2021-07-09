---
group:
  title: Basic

title: BrickButton
desc: '`BrickButton` is enriched on the basis of the original Button function.'
demo: /basic/brick-button
---

> Here is the documentation for the Brick Button Component. Try to create new Component documents component.md, component.en.md in /docs/docs/basic/.

## Code demo

### Text BrickButton

```jsx
<BrickButton text="loading" loading={true} />
```

### Gradient background button

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

> The following is a table of properties generated from the API Data Data source, detailed in the @tuya/dumi-theme-tuya documentation.

<API name="BrickButtonProps"></API>
