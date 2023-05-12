import { ContactUs } from 'components/ContactUs'
import { ModalContact } from 'ui-kit/ModalContact'
import { modalProps } from 'ui-kit/ModalContact/ModalContact'
import './Contact.scss'

const Contact = () => {
  const modalData: modalProps[] = [
    {
      logo: 'WhatsApp',
      link: 'https://wa.link/lqkgvh',
      size: 'large',
      detail: '+62-811-1009-115',
      buttonText: 'Send Message',
    },
  ]

  return (
    <div className='contactBox h-screen'>
      <ContactUs/>
    </div>
  )
}

export default Contact
