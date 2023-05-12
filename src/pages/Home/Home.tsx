import { Headline } from 'components/Headline'
import './Home.scss'
import { ContactUs } from 'components/ContactUs'
import { Menu } from 'components/Menu'
import { Locations } from 'components/Locations'
import { Reviews } from 'components/Reviews'
import { useState, useEffect } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import AOS from 'aos';
import 'aos/dist/aos.css';

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
    AOS.init();
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
      <div id='headline' className=''>
        <Headline />
      </div>
      <div id='menu' className='componentPosition' >
        <Menu />
      </div>
      <div className='componentPosition'  >
        <Locations />
      </div>
      <div >
        <Reviews />
      </div>
      <div className='componentPosition'  >
        <ContactUs />
      </div>
    </>
  )
}

export default Home
