import React, { useEffect, useRef } from 'react'

export const LazyEarly = ({ src, placeholder, alt, className, early }) => {
  const ref = useRef()
  const placeholderSrc = placeholder || ''
  const srcImg = src || placeholderSrc
  const altImg = alt || 'img'
  const earlyPx = typeof early == 'number' ? early : 200
  useEffect(() => {
    const lazyLoad = ref.current.getAttribute('lazy-load')
    const windowHeight = window.innerHeight
    const imgLocation = ref.current.getBoundingClientRect().top - earlyPx
    const onLoadEarly = () => {
      if (window.scrollY + windowHeight > imgLocation) {
        ref.current.setAttribute('src', lazyLoad)
      }
    }
    window.addEventListener('scroll', onLoadEarly)
    return () => {
      window.removeEventListener('scroll', onLoadEarly)
    }
  }, [])
  return (
    <img
      className={className}
      ref={ref}
      src={placeholderSrc}
      lazy-load={srcImg}
      alt={altImg}
    />
  )
}
