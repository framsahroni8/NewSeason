import { IconType, OrderButton } from 'ui-kit'
import ImageOrder from '../../assets/images/Manadong-Ricebox-4.jpg'
import './OrderPage.scss'
import { OrderButtonData } from 'ui-kit/OrderButton'

const OrderPage = () => {

    const ShopData: OrderButtonData[] = [
        {
            id: 1,
            type: 'Primary',
            Icon: 'GoFood' ,
            size: 'medium',
            text: 'GoFood',
            link: '/GoFood'
        },
        {
            id: 2,
            type: 'Secondary',
            Icon: 'GoFood' ,
            size: 'medium',
            text: 'GrabFood',
            link: '/GrabFood'
        },
        {
            id: 3,
            type: 'Success',
            Icon: 'GoFood' ,
            size: 'medium',
            text: 'ShopeeFood',
            link: '/ShopeeFood'
        }
    ]

    return (
    <div className='p-24 flex gap-8 max-md:flex-col-reverse'>
      <div className='w-[30%] max-md:w-[100%]'>
        <span className='orderText'>Pesan di:</span>
        <OrderButton options={ShopData} className={''} />
      </div>
      <div className='p-6 w-[70%] max-md:w-[100%]'>
        <img src={ImageOrder} alt='Manadong-Ricebox-4' />
      </div>
    </div>
  )
}
export default OrderPage
