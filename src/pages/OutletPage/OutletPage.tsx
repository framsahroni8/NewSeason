import { Icon, OutletList, TextDivider } from 'ui-kit'
import { OutletData } from 'ui-kit/OutletList'
import BannerLogo from '../../assets/images/Manadong-Ricebox-4.jpg'
import { Link } from 'react-router-dom'

export interface OutletProps {
  OutletName: string
  DataOutlet: OutletData[]
}

const Outlet: React.FC<OutletProps> = ({ OutletName, DataOutlet }) => {
  return (
    <>
      <div className=' w-screen'>
        <div className='flex ml-2'>
          <Link to='/order'>
            <span className='text-black flex items-center gap-2'>
              <Icon type='ArrowLeft' size='medium' />
              Back
            </span>
          </Link>
        </div>
        <div className='flex'>
          <div className='flex p-6 justify-center gap-7'>
            <div className='w-[40%]'>
              <img src={BannerLogo} />
            </div>
            <div className='w-[40%] text-black'>
              <TextDivider>{OutletName}</TextDivider>
              <OutletList options={DataOutlet} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Outlet
