import { IconType, Icon } from '..'
import './Dropdown_General.scss'
import classNames from 'classnames'
import React from 'react'

export type DropdownType = 'normal' | 'danger'
export interface IDropdownOptions {
  id: number
  title: string
  childIcon: IconType
  action?: () => void
}

interface IDropdownProps {
  isDisabled?: boolean
  dropdownType: DropdownType
  parentIcon: IconType
  children: React.ReactNode
  options: IDropdownOptions[]
  className?: string
}

const Dropdown_General: React.FC<IDropdownProps> = ({
  className,
  options,
  children,
  parentIcon,
  dropdownType = 'normal',
  isDisabled = false,
}) => {
  return (
    <div
      className={classNames('dropdown items-center rounded-[8px] w-[120px]', className, {
        dropdown__disabled: isDisabled === true,
        dropdown__normal: dropdownType === 'normal',
        dropdown__danger: dropdownType === 'danger',
      })}
      tabIndex={0}
    >
      <div className='flex gap-[4px] items-center my-2.5 mx-3 '>
        {isDisabled === false ? (
          <Icon className='flex-none' type={parentIcon} />
        ) : (
          <Icon className='flex-none' type={parentIcon} />
        )}
        <div className='grow dropdown-parent-text'>{children}</div>
        {isDisabled === false ? (
          <Icon className='flex-none' type='Dropdown' />
        ) : (
          <Icon className='flex-none' type='Dropdown_disabled' />
        )}
      </div>
      <ul tabIndex={0} className={classNames('dropdown-content menu my-2')}>
        {options.map((option) => (
          <li key={option.id} className='' onClick={option.action}>
            <div
              className={classNames(
                'flex gap-[4px] items-center py-2.5 px-3 w-[118px] rounded-[8px] childDropdown',
                className,
                {
                  childDropdown__disabled: isDisabled === true,
                  childDropdown__normal: dropdownType === 'normal',
                  childDropdown__danger: dropdownType === 'danger',
                }
              )}
            >
              <Icon className='' type={option.childIcon} />
              <div className='dropdown-parent-text'>{option.title}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Dropdown_General
