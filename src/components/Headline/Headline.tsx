import { Button } from 'ui-kit'
import Banner from '../../assets/images/banner-scaled.jpg'
import './Headline.scss'

const Headline = () => {
  return (
    <>
      <div className='headlineContainer'>
        <div className='headlineImage'>
          <img src={Banner} alt='banner-scaled' />
          <div>
        <Button className='absolute'>Scroll Down</Button>
        </div>
        </div>
        <div className='headlineWidget'>
          <div className='headlineText px-4'>
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
