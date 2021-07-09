### Tuya 组件demo模版

可支持一份代码打包到h5和面板！

#### 启动 h5

```bash
yarn start:umi
```

#### 启动面板

```bash
yarn start
```

##### 添加新组件

1. 多语言src/i18n
2. 组件用法src/pages
3. 面板路由注册src/routes

#### 组件编写规范

1. 所有组件demo都必须使用rn代码编写，不可引入web端库，不可引入css文件。
2. pages下一个组件为一个文件夹，文件夹名按中划线命名（kebab-case）。
3. pages下最多3级目录，/pages/[分类]/[组件名]/index.tsx，例如 /pages/basic/rc-button/index.tsx。

#### 问题反馈

1. 如果出现h5和面板表现不一致的情况，请及时联系 睦海（李利民）处理