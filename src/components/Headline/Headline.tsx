import { Button, Icon } from 'ui-kit'
import Banner from '../../assets/images/banner-scaled.jpg'
import './Headline.scss'
import { useMediaQuery } from 'react-responsive';
import { useEffect } from 'react';

const Headline = () => {
  // const isMobile = useMediaQuery({ maxWidth: 1920 });
  // useEffect(() => {
  //   const metaViewport = document.querySelector('meta[name="viewport"]');
  //   if (metaViewport) {
  //     metaViewport.setAttribute(
  //       'content',
  //       isMobile ? 'width=device-width, initial-scale=1' : 'width=1366'
  //     );
  //   }
  // }, [isMobile]);
  return (
    <>
      <div className='headlineContainer'>
        <div className='headlineImage'>
          <div>
            <img src={Banner} alt='banner-scaled' />
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
