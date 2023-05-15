import { Button } from 'ui-kit/Button'
import { Icon, IconSizeType } from 'ui-kit/Icon'
import './OrderButton.scss'
import classNames from 'classnames'
import { IconType } from 'ui-kit'
import { Link } from 'react-router-dom'

export type OrderType = 'Primary' | 'Secondary' | 'Success'

export interface OrderButtonData {
  id: number
  Icon: IconType
  size: IconSizeType
  text: string
  type: OrderType
  link: string
}

export interface OrderButtonProps {
  options: OrderButtonData[]
  className: string
}

export const OrderButton: React.FC<OrderButtonProps> = ({ options, className }) => {
  return (
    <div className='flex flex-col gap-3 '>
      {options.map((option) => (
        <>
        <Link to={option.link}>
          <Button
            typeIcon={option.Icon}
            sizeIcon={option.size}
            className={classNames(' w-full btnOrder', className, {
              'btnOrder__primary': option.type === 'Primary',
              'btnOrder__secondary': option.type === 'Success',
              'btnOrder__success': option.type === 'Secondary',
            })}
          >
            <span>{option.text}</span>
          </Button>
        </Link>
        </>
        
      ))}
    </div>
  )
}
// ' w-full btnOrder'
