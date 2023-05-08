import { Icon } from 'ui-kit/Icon'
import './LocationDetail.scss'

export interface LocationData {
  id: number
  title: string
  detail: string
}

export interface iLocationProps {
  options: LocationData[]
}

export const LocationDetailComponent: React.FC<iLocationProps> = ({ options }) => {
  return (
    <div className='locationWrapper'>
      {options.map((option) => (
        <>
          <div className='locationContainer'>
            <div className='locationIcon flex items-center'>
              <Icon type='Location' size='medium' />
            </div>
            <div className='locationText'>
              <div className='locationText-title'>{option.title}</div>
              <div className='locationText-body'>{option.detail}</div>
            </div>
          </div>
        </>
      ))}
    </div>
  )
}
