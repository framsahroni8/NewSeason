import { TextDivider } from 'ui-kit/TextDivider'
import './Reviews.scss'
import SliderComponent, { ReviewData } from 'ui-kit/SliderComponent'
import { db } from '../../config/Firebase'
import { getDocs, collection } from 'firebase/firestore'
import { useState, useEffect } from 'react'

const Reviews = () => {
  const [comment, setComment] = useState<ReviewData[]>([])
  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const locationQuerySnapshot = await getDocs(collection(db, 'Comment'))
        const fetchedLocations: ReviewData[] = []
        locationQuerySnapshot.forEach((doc) => {
          const comment = doc.data()
          fetchedLocations.push({
            id: comment.id,
            comment: comment.comment,
            name: comment.name,
          })
        })
        setComment(fetchedLocations)
      } catch (error) {
        console.log('Error fetching locations:', error)
      }
    }

    fetchLocations()
  }, [])

  return (
    <div className='reviewsWrapper'>
      <div className='reviewsText'>
        <TextDivider>Reviews</TextDivider>
      </div>
      <div className='pt-8'>
        <SliderComponent options={comment} />
      </div>
    </div>
  )
}

export default Reviews
