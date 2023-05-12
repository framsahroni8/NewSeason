import { Headline } from 'components/Headline'
import './Home.scss'
import { ContactUs } from 'components/ContactUs'
import { Menu } from 'components/Menu'
import { Locations } from 'components/Locations'
import { Reviews } from 'components/Reviews'
import { Link } from 'react-router-dom'
import { Button } from 'ui-kit'
import { useState, useEffect } from 'react'

const Home = () => {
  const [fadeIn, setFadeIn] = useState(false)
  const [isScrollingDown, setIsScrollingDown] = useState(false)

  const handleScroll = () => {
    const targetElement = document.getElementById('scrollTarget')
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrollingDown(scrollPosition > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    const handleScrollAnimation = () => {
      const scrollPosition = window.scrollY
      const targetElement = document.getElementById('scrollTarget')

      if (targetElement) {
        const targetPosition = targetElement.offsetTop
        const targetHeight = targetElement.offsetHeight

        if (
          scrollPosition >= targetPosition - window.innerHeight / 2 &&
          scrollPosition <= targetPosition + targetHeight
        ) {
          setFadeIn(true)
        } else {
          setFadeIn(false)
        }
      }
    }

    window.addEventListener('scroll', handleScrollAnimation)
    return () => {
      window.removeEventListener('scroll', handleScrollAnimation)
    }
  }, [])
  return (
    <>
      <div className='fade-in'>
        <Headline />
      </div>
      <div id='scrollTarget' className={`fixed${isScrollingDown ? 'fade-in' : 'fade-out'}`}>
        <Menu />
      </div>
      <div className={`pb-16${isScrollingDown ? 'fade-in' : 'fade-out'}`}>
        <Locations />
      </div>
      <div className={`${isScrollingDown ? 'fade-in' : 'fade-out'}`}>
        <Reviews />
      </div>
      <div className={`${isScrollingDown ? 'fade-in' : 'fade-out'}`}>
        <ContactUs />
      </div>
    </>
  )
}

export default Home
