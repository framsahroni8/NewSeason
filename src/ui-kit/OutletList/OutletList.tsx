import { Link } from 'react-router-dom'
import { Icon } from 'ui-kit'
import './OutletList.scss'

export interface OutletData {
  id: number
  Location: string
  link: string
  text: string
}

export interface OutletDataProps {
  options: OutletData[]
}

export const OutletList: React.FC<OutletDataProps> = ({ options }) => {
  return (
    <div className='outletWrapper'>
      {options.map((option) => (
        <>
          <div className='outletContainer w-full py-3'>
            <div className='w-[50%]'>
              <span className='OutletLocation'>{option.Location}</span>
            </div>
            <Link to={option.link}>
              <div className='outletBody flex w-[100%]'>
                <span className='outletBody'>
                  {option.text} <Icon type='ArrowRight' className='outletLink'/>
                </span>
              </div>
            </Link>
          </div>
        </>
      ))}
    </div>
  )
}
