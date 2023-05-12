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
  // when window width is >= 640px
  320: {
    slidesPerView: 1,
    spaceBetween: 10,
  },
  // when window width is >= 768px
  768: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  // when window width is >= 1024px
  1024: {
    slidesPerView: 3,
    spacesBetween: 30
  },
}

export const SliderComponent: React.FC<ReviewProps> = ({ options }) => {
  return (
    <Swiper
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
