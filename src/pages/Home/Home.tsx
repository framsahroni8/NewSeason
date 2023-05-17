import { Headline } from 'components/Headline'
import './Home.scss'
import { ContactUs } from 'components/ContactUs'
import { Menu } from 'components/Menu'
import { Locations } from 'components/Locations'
import { Reviews } from 'components/Reviews'
import { useState, useEffect } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
  const [fadeIn, setFadeIn] = useState(false)
  const [isScrollingDown, setIsScrollingDown] = useState(false)

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
    AOS.init()
    const handleScrollAnimation = () => {
      const scrollPosition = window.scrollY
      const targetElement = document.getElementById('menu')

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
      <div className=''>
        <div id='headline' className=''>
          <Headline />
        </div>
        <div className='componentPosition' data-aos='fade-up'>
          <Menu />
        </div>
        <div className='componentPosition' data-aos='fade-up'>
          <Locations />
        </div>
        <div data-aos='fade-up'>
          <Reviews />
        </div>
        <div className='componentPosition' data-aos='fade-up'>
          <ContactUs />
        </div>
      </div>
    </>
  )
}

export default Home
