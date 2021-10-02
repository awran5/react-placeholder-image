# React Simple Placeholder Image

> A Minimal lightweight react component for adding a nice image placeholder.

[![NPM](https://img.shields.io/npm/v/react-simple-placeholder-image.svg)](https://www.npmjs.com/package/react-simple-placeholder-image) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)![npm bundle size](https://img.shields.io/bundlephobia/min/react-simple-placeholder-image)![GitHub](https://img.shields.io/github/license/awran5/react-simple-placeholder-image)

<p align="center">
  <img src="./assets/hello-world.svg" alt="screenshot" width="50%" />
</p>

## Install

#### npm

```sh
npm i react-simple-placeholder-image
```

#### Yarn

```sh
yarn add react-simple-placeholder-image
```

## Usage

```jsx
import React from 'react'
import { DummyImage } from 'react-simple-placeholder-image'

const MyComponent = () => {
  return (
    <div className='App'>
      <DummyImage {/* Props */} />
    </div>
  )
}
```

---

### Example

```jsx
import React from 'react'
import { DummyImage } from 'react-simple-placeholder-image'

const MyComponent = () => {
  return (
    <div className='App'>
      <DummyImage width={500} height={500} />
      <DummyImage width={500} height={500} placeholder='Hello World!' />
      <DummyImage width={500} height={500} shape='image' />
      <DummyImage width={500} height={500} shape='avatar' />
      <DummyImage width={500} height={500} placeholder='Colored!' bgColor='#0a1929' fgColor='#eb0014' />
    </div>
  )
}
```

<p align="center">
  <img src="./assets/500x500.svg" alt="screenshot" width="250" />
  <img src="./assets/hello-world.svg" alt="screenshot" width="250"/>
  <img src="./assets/image.svg" alt="screenshot" width="250" />
  <img src="./assets/avatar.svg" alt="screenshot" width="250" />
  <img src="./assets/colored.svg" alt="screenshot" width="250" />
</p>

---

<br />

## Available Props

| Prop          |           Type            | Options  | Description            |              Default               |
| ------------- | :-----------------------: | -------- | ---------------------- | :--------------------------------: |
| `shape`       | `avatar \| image \| text` | Optional | Image shape style      |               `text`               |
| `width`       |          Number           | Optional | Image width            |               `300`                |
| `height`      |          Number           | Optional | Image height           |               `300`                |
| `bgColor`     |          String           | Optional | Image background color |             `#e5e5e5`              |
| `fgColor`     |          String           | Optional | Image foreground color |             `#f9f9f9`              |
| `placeholder` |          String           | Optional | Text placeholder       |          `width x height`          |
| `fontFamily`  |          String           | Optional | Text font family       |            `sans-serif`            |
| `style`       |    React.CSSProperties    | Optional | CSS style prop         | `maxWidth: '100%', height: 'auto'` |
| `className`   |          String           | Optional | className prop         |            `dummy-img`             |
| `alt`         |          String           | Optional | Alt prop               |            `dummy-img`             |

<br />

[![Edit react-simple-placeholder-image](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/react-simple-placeholder-image-wu12s?fontsize=14&hidenavigation=1&theme=dark)

### License

MIT © [awran5](https://github.com/awran5/)
