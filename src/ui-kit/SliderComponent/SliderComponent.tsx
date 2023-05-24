// Import Swiper React components
import './SliderComponent.scss'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation';
// import 'swiper/swiper.min.css';
// import 'swiper/components/navigation/navigation.min.css';

export interface ReviewData {
  id: number
  comment: string
  name: string
}

export interface ReviewProps {
  options: ReviewData[]
}

const swiperBreakPoints ={
  300: {
    slidesPerView: 1,
    spaceBetween: '10',
  },
  768: {
    slidesPerView: 2,
    spaceBetween: '20', // Mengatur jarak antara slider menjadi 20 piksel saat lebar >= 768px
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: '30',
  }
}

export const SliderComponent: React.FC<ReviewProps> = ({ options }) => {
  return (
    <Swiper
    className='swiper-gap'
      spaceBetween={0}
      slidesPerView={3}
      breakpoints={swiperBreakPoints}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {options.map((option) => (
        <>
          <SwiperSlide key={option.id}>
            <div className='boxWrapper'>
              <div className=''>
                <div className='boxItem'>
                  <div className='boxText'>
                    <span>{option.comment}</span>
                  </div>
                </div>
                <div className='circleBox'></div>
                <div className='boxTitle'>
                  <span>{option.name}</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </>
      ))}
    </Swiper>
  )
}
