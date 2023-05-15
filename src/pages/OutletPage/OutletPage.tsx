import { OutletList, TextDivider } from 'ui-kit';
import { OutletData } from 'ui-kit/OutletList';
import BannerLogo from '../../assets/images/Manadong-Ricebox-4.jpg'

const GoFoodPage = () => {

    const OutletListData: OutletData[] = [
        {
            id: 1,
            Location: 'Senopati, Petogongan',
            link: 'https://gofood.link/u/YeyMQ',
            text: 'Purchase Here'
        },
        {
            id: 2,
            Location: 'Senopati, Petogongan',
            link: 'https://gofood.link/u/YeyMQ',
            text: 'Purchase Here'
        },
        {
            id: 3,
            Location: 'Senopati, Petogongan',
            link: 'https://gofood.link/u/YeyMQ',
            text: 'Purchase Here'
        },
        {
            id: 4,
            Location: 'Senopati, Petogongan',
            link: 'https://gofood.link/u/YeyMQ',
            text: 'Purchase Here'
        },
        {
            id: 5,
            Location: 'Senopati, Petogongan',
            link: 'https://gofood.link/u/YeyMQ',
            text: 'Purchase Here'
        },
        {
            id: 6,
            Location: 'Senopati, Petogongan',
            link: 'https://gofood.link/u/YeyMQ',
            text: 'Purchase Here'
        },
        {
            id: 7,
            Location: 'Senopati, Petogongan',
            link: 'https://gofood.link/u/YeyMQ',
            text: 'Purchase Here'
        },
    ]

    return(
        <div className='flex p-5 w-screen gap-7'>
            <div className='flex p-5 justify-center gap-7'>
                <div className='w-[30%]'>
                    <img src={BannerLogo}/>
                </div>
                <div className='w-[40%] text-black'>
                    <TextDivider>GoFood Outlets</TextDivider>
                <OutletList options={OutletListData}/>
                </div>
            </div>
           
        </div>
    )
}

export default GoFoodPage;