import { OutletData } from 'ui-kit/OutletList';
import Outlet from '../OutletPage';


const GoFoodPage = () => {
     const GoFoodList: OutletData[] = [
        {
            id: 1,
            Location: 'Senopati, Petogongan',
            link: 'https://gofood.link/u/YeyMQ',
            text: 'Purchase Here'
        },
        {
            id: 2,
            Location: 'Kebon Jeruk / Tanjung Duren',
            link: 'https://gofood.link/a/ziWtht7',
            text: 'Purchase Here'
        },
        {
            id: 3,
            Location: 'Food Plaza PIK',
            link: 'https://gofood.link/a/A11LH6N',
            text: 'Purchase Here'
        },
        {
            id: 4,
            Location: 'Kuningan - D\'Kanteen',
            link: '#',
            text: 'Purchase Here'
        },
        {
            id: 5,
            Location: 'Bintaro, Thelapan Square',
            link: 'https://gofood.link/a/ByCTe6j',
            text: 'Purchase Here'
        },
        {
            id: 6,
            Location: 'Gading Serpong',
            link: 'https://gofood.link/a/DahyP4A',
            text: 'Purchase Here'
        },
        {
            id: 7,
            Location: 'Cipete',
            link: 'https://gofood.link/a/DPGweCC',
            text: 'Purchase Here'
        },
        {
            id: 8,
            Location: 'Menteng',
            link: 'https://gofood.link/a/BcFwmdQ',
            text: 'Purchase Here'
        },
    ]
    return(
        <>
        <Outlet OutletName="GoFood Outlet" DataOutlet={GoFoodList} />
        </>
    )
}

export default GoFoodPage;