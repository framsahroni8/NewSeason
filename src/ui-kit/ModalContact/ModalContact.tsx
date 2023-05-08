import { Icon, IconSizeType, IconType } from 'ui-kit/Icon'
import './ModalContact.scss'
import { Button } from 'ui-kit/Button'

export interface modalProps {
  link: string
  logo: IconType
  detail: string
  size: IconSizeType
  buttonText: string
}

export interface modalData {
  options: modalProps[]
}

export const ModalContact: React.FC<modalData> = ({ options }) => {
  return (
    <>
      {options.map((option) => (
        <>
          <div className='modalPosition'>
            <div className='modal-box-hard'>
              <div className='modalContainer'>
                <div className='modalInfo'>
                  <div className='modalLogo'>
                    <a href={option.link}>
                      <Icon type={option.logo} size={option.size} />
                    </a>
                  </div>
                  <div>
                    <span className='bodyModal'>{option.detail}</span>
                  </div>
                </div>
                <div className='modalFooter'>
                  <Button className='modalButton'>{option.buttonText}</Button>
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
    </>
  )
}

export default ModalContact
