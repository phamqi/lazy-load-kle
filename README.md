# lazy-load-kle

> lazy load img with intersectionObserver

[![NPM](https://img.shields.io/npm/v/lazy-load-kle.svg)](https://www.npmjs.com/package/lazy-load-kle) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save lazy-load-kle
```

## Usage

```jsx
import React, { Component } from 'react'

import{ LazyLoad , LazyEarly }from 'lazy-load-kle'
import 'lazy-load-kle/dist/index.css'

class Example extends Component {
  render() {
    return <LazyLoad src='link of img' alt='alt' placeholder='link placeholder image' className='add some class for img'/>
    <LazyLoad src='link of img' alt='alt' placeholder='link placeholder image' className='add some class for img' early={value(default: 200)}/>
  }
}
```

## License

MIT © [phamqi](https://github.com/phamqi)
