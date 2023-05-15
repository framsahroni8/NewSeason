import { Button, Icon } from 'ui-kit'
import Banner from '../../assets/images/banner-scaled.jpg'
import './Headline.scss'
import { Link } from 'react-router-dom'

const Headline = () => {
  const handleScroll = () => {
    const targetElement = document.getElementById('menu')
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <>
      <div className='headlineContainer'>
        <div className='headlineImage'>
          <div>
            <img src={Banner} alt='banner-scaled' />
            <div className='absolute'>
              <div className='iconContainer'>
                <span>Scroll Dong!</span>
                <Icon type='Down' size='large' onClick={handleScroll} />
              </div>
            </div>
          </div>
        </div>
        <div className='headlineWidget'>
          <div className='headlineText px-2'>
            <div className='headlineText-header'>
              <span>Manadong</span>
            </div>
            <div className='headlineText-body'>
              <span>#NikmatnyaGaPakeRibet</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Headline
