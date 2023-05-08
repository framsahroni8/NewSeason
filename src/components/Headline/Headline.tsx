import Banner from '../../assets/images/banner-scaled.jpg'
import './Headline.scss'

const Headline = () => {
  return (
    <>
     <div className='headlineContainer'>
     <div className='headlineImage'>
        <img src={Banner} alt='banner-scaled' />
      </div>
      <div className='headlineWidget'>
        <div className='headlineText px-2'>
          <div className='headlineText-header'>
            <span>Manadong</span>
          </div>
          <div className='headlineText-body'>
            <span>#NikmatnyaGakPakaiRibet</span>
          </div>
        </div>
      </div>
     </div>
      
    </>
   
    // <div className='headlineRow'>
    //   <div className='headlineImage'>
    //     <img src={Banner} alt='banner-scaled' className='headlineImage-banner' />
    //   </div>
    //   <div className='headlineColumn'>
    //     <div className='headlineWidget'>
    //       <div className='headlineText'>
    //         <div className='headlineText-header'>
    //           <span>Manadong</span>
    //         </div>
    //         <div className='headlineText-body'>
    //           <span>#NikmatnyaGakPakaiRibet</span>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default Headline
