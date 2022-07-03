import React from 'react'

import { LazyLoad, LazyEarly } from 'lazy-load-kle'
import 'lazy-load-kle/dist/index.css'

const App = () => {
  return (
    <div>
      <div className='test'>
        <h1>Lazy load</h1>
      </div>
      <LazyLoad src='https://picsum.photos/1280/720' />
      <div className='test'>
        <h1>Lazy load</h1>
        <p>Add class for img tag</p>
      </div>
      <LazyLoad
        src='https://picsum.photos/1280/721'
        className='img_class'
        alt='img-two'
      />
      <div className='test'>
        <h1>Lazy load</h1>
        <p>Use placeholder image for a better experience</p>
      </div>
      <LazyLoad
        src='https://picsum.photos/1280/722'
        className='img_class'
        placeholder='https://via.placeholder.com/1280x720'
        alt='img-three'
      />
      <div className='test'>
        <h1>Lazy load</h1> <p>Preloaded img with dependence(default: 200px)</p>
      </div>
      <LazyEarly src='https://picsum.photos/1280/723' early={'abc'} />
    </div>
  )
}

export default App
