import { OutletData } from 'ui-kit/OutletList'
import Outlet from '../OutletPage'

const ShopeeFood = () => {
    const ShopeeFoodList: OutletData[] = [
        {
            id: 1,
            Location: 'Senopati, Petogongan',
            link: 'https://shopee.co.id/universal-link/now-food/shop/927288?deep_and_deferred=1&share&smtt=0.0.9',
            text: 'Purchase Here'
        },
        {
            id: 2,
            Location: 'Kebon Jeruk / Tanjung Duren',
            link: 'https://shopee.co.id/universal-link/now-food/shop/766999?deep_and_deferred=1&share&smtt=0.0.9',
            text: 'Purchase Here'
        },
        {
            id: 3,
            Location: 'Food Plaza PIK',
            link: 'https://shopee.co.id/universal-link/now-food/shop/927289?deep_and_deferred=1&share&smtt=0.0.9',
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
            link: 'https://shopee.co.id/universal-link/now-food/shop/1604358?deep_and_deferred=1&share&smtt=0.0.9',
            text: 'Purchase Here'
        },
        {
            id: 6,
            Location: 'Gading Serpong',
            link: '#',
            text: 'Purchase Here'
        },
        {
            id: 7,
            Location: 'Cipete',
            link: 'https://shopee.co.id/universal-link/now-food/shop/20377886?deep_and_deferred=1&share',
            text: 'Purchase Here'
        },
        {
            id: 8,
            Location: 'Menteng',
            link: 'https://shopee.co.id/universal-link/now-food/shop/1382706?deep_and_deferred=1&share&smtt=0.0.9',
            text: 'Purchase Here'
        },
    ]
    return(
        <>
        <Outlet OutletName="ShopeeFood Outlet" DataOutlet={ShopeeFoodList} />
        </>
    )
}

export default ShopeeFood