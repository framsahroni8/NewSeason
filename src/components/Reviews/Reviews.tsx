import { TextDivider } from 'ui-kit/TextDivider'
import './Reviews.scss'
import SliderComponent, { ReviewData } from 'ui-kit/SliderComponent'

const Reviews = () => {
  const ReviewData: ReviewData[] = [
    {
      id: 1,
      comment: 'Comment 1',
      name: 'Orang 1',
    },
    {
      id: 2,
      comment: 'Comment 2',
      name: 'Orang 2',
    },
    {
      id: 3,
      comment: 'Comment 3',
      name: 'Orang 3',
    },
    {
      id: 4,
      comment: 'Comment 4',
      name: 'Orang 4',
    },
    {
      id: 5,
      comment: 'Comment 5',
      name: 'Orang 5',
    },
    {
      id: 6,
      comment: 'Comment 6',
      name: 'Orang 6',
    },
    {
      id: 7,
      comment: 'Comment 7',
      name: 'Orang 7',
    },
    {
      id: 8,
      comment: 'Comment 8',
      name: 'Orang 8',
    },
    {
      id: 9,
      comment: 'Comment 9',
      name: 'Orang 9',
    },
    {
      id: 10,
      comment: 'Comment 10',
      name: 'Orang 10',
    },
  ]

  return (
    <div className='reviewsWrapper'>
      <div className='px-10  w-full'>
        <div className='reviewsText'>
          <TextDivider>Reviews</TextDivider>
        </div>
        <div>
          <div className='pt-8'>
            <SliderComponent options={ReviewData} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reviews
