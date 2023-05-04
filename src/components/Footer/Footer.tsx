import { IconGroup } from 'ui-kit/IconGroup'
import './Footer.scss'
import { TypeIcon } from 'ui-kit/IconGroup/IconGroup'

const Footer = () => {
  const iconType: TypeIcon[] = [
    {
      iconTypes: 'Facebook',
      href: '#',
    },
    {
      iconTypes: 'Twitter',
      href: '#',
    },
    {
      iconTypes: 'Message',
      href: '#',
    },
    {
      iconTypes: 'WhatsApp',
      href: '#',
    },
  ]

  return (
    <div className='footerContainer'>
      <div className='footerWrapper'>
        <div className='footerText flex-end'>
          <span>&copy; PT Bogadong Anugerah Indonesia, 2022</span>
        </div>
        <div className='footerDetail'>
          <div className='footerShare'>
            <span>Share Manadong</span>
          </div>
          <div className='footerLogo'>
              <IconGroup options={iconType} />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
