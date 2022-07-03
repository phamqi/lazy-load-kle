import React, { useEffect, useRef } from 'react'

export const LazyLoad = ({ src, placeholder, alt, className }) => {
  const ref = useRef()
  const placeholderSrc = placeholder || ''
  const srcImg = src || placeholderSrc
  const altImg = alt || 'img'
  useEffect(() => {
    const lazyLoad = ref.current.getAttribute('lazy-load')
    try {
      if ('IntersectionObserver' in window) {
        const obServer = new IntersectionObserver((entries) => {
          const entry = entries[0]
          if (entry.isIntersecting) {
            entry.target.src = lazyLoad
            obServer.unobserve(entry.target)
            ref.current.removeAttribute('lazy-load')
          }
        })
        obServer.observe(ref.current)
      } else {
        const windowHeight = window.innerHeight
        const imgLocation = ref.current.getBoundingClientRect().top - 200
        window.addEventListener('scroll', function () {
          if (window.scrollY + windowHeight > imgLocation) {
            ref.current.setAttribute('src', lazyLoad)
          }
        })
      }
    } catch (error) {
      console.log(error)
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
