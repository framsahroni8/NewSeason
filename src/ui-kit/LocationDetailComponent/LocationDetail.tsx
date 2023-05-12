import { Icon } from 'ui-kit/Icon'
import './LocationDetail.scss'

export interface LocationData {
  id: number
  title: string
  detail: string
}

export interface iLocationProps {
  options: LocationData[]
  isMap: boolean
}

export const LocationDetailComponent: React.FC<iLocationProps> = ({ options, isMap }) => {
  return (
    <div className='locationWrapper'>
      {options.map((option) => (
        <>
          {isMap ? (
            <div className='locationContainerIsMap '>
              <div className='flex gap-[15px]'>
              <div className='locationIcon '>
                <Icon type='Location' size='medium' />
              </div>
              <div className='locationText'>
                <div className='locationText-title'>{option.title}</div>
                <div className='locationText-body'>{option.detail}</div>
              </div>
              </div>
              
              <div className='locationMap'>
                <iframe src='https://maps.google.com/maps?q=-6.238468781972374%2C%20106.81199375374425&t=m&z=12&output=embed&iwloc=near'></iframe>
              </div>
            </div>
          ) : (
            <div className='locationContainer'>
              <div className='locationIcon '>
                <Icon type='Location' size='medium' />
              </div>
              <div className='locationText'>
                <div className='locationText-title'>{option.title}</div>
                <div className='locationText-body'>{option.detail}</div>
              </div>
            </div>
          )}
        </>
      ))}
    </div>
  )
}
//   <iframe src='https://maps.google.com/maps?q=-6.238468781972374%2C%20106.81199375374425&t=m&z=12&output=embed&iwloc=near'></iframe>
// {isMap && (

// )}
