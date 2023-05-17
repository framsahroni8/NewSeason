import { OutletData } from 'ui-kit/OutletList'
import Outlet from '../OutletPage'

const GrabFood = () => {
    const GrabFoodList: OutletData[] = [
        {
            id: 1,
            Location: 'Senopati, Petogongan',
            link: 'https://grab.onelink.me/2695613898?pid=inappsharing&c=6-C2AUTB3DWA2HNN&is_retargeting=true&af_dp=grab%3A%2F%2Fopen%3FscreenType%3DGRABFOOD%26sourceID%3DA4pcqCZkS4%26merchantIDs%3D6-C2AUTB3DWA2HNN&af_force_deeplink=true&af_web_dp=https%3A%2F%2Fwww.grab.com%2Fdownload',
            text: 'Purchase Here'
        },
        {
            id: 2,
            Location: 'Kebon Jeruk / Tanjung Duren',
            link: 'https://grab.onelink.me/2695613898?pid=inappsharing&c=6-C2BBJ3TBTEM2J2&is_retargeting=true&af_dp=grab%3A%2F%2Fopen%3FscreenType%3DGRABFOOD%26sourceID%3DA4pcqCZkS4%26merchantIDs%3D6-C2BBJ3TBTEM2J2&af_force_deeplink=true&af_web_dp=https%3A%2F%2Fwww.grab.com%2Fdownload',
            text: 'Purchase Here'
        },
        {
            id: 3,
            Location: 'Food Plaza PIK',
            link: 'https://grab.onelink.me/2695613898?pid=inappsharing&c=6-C2K3TVJJJAUFCA&is_retargeting=true&af_dp=grab%3A%2F%2Fopen%3FscreenType%3DGRABFOOD%26sourceID%3DA4pcqCZkS4%26merchantIDs%3D6-C2K3TVJJJAUFCA&af_force_deeplink=true&af_web_dp=https%3A%2F%2Fwww.grab.com%2Fdownload',
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
            link: 'https://grab.onelink.me/2695613898?pid=inappsharing&c=6-C2WTG7MUVXBVET&is_retargeting=true&af_dp=grab%3A%2F%2Fopen%3FscreenType%3DGRABFOOD%26sourceID%3DA4pcqCZkS4%26merchantIDs%3D6-C2WTG7MUVXBVET&af_force_deeplink=true&af_web_dp=https%3A%2F%2Fwww.grab.com%2Fdownload+628881267562',
            text: 'Purchase Here'
        },
        {
            id: 6,
            Location: 'Gading Serpong',
            link: 'https://grab.onelink.me/2695613898?pid=inappsharing&c=6-C3BKKEMWJP63BE&is_retargeting=true&af_dp=grab%3A%2F%2Fopen%3FscreenType%3DGRABFOOD%26sourceID%3DA4pcqCZkS4%26merchantIDs%3D6-C3BKKEMWJP63BE&af_force_deeplink=true&af_web_dp=https%3A%2F%2Fwww.grab.com%2Fdownload',
            text: 'Purchase Here'
        },
        {
            id: 7,
            Location: 'Cipete',
            link: 'https://grab.onelink.me/2695613898?pid=inappsharing&c=6-C3ETPFMUNBBWRN&is_retargeting=true&af_dp=grab%3A%2F%2Fopen%3FscreenType%3DGRABFOOD%26sourceID%3DA4pcqCZkS4%26merchantIDs%3D6-C3ETPFMUNBBWRN&af_force_deeplink=true&af_web_dp=https%3A%2F%2Fwww.grab.com%2Fdownload',
            text: 'Purchase Here'
        },
        {
            id: 8,
            Location: 'Menteng',
            link: 'https://grab.onelink.me/2695613898?pid=inappsharing&c=6-C2VDLY6FJCLDLA&is_retargeting=true&af_dp=grab%3A%2F%2Fopen%3FscreenType%3DGRABFOOD%26sourceID%3DA4pcqCZkS4%26merchantIDs%3D6-C2VDLY6FJCLDLA&af_force_deeplink=true&af_web_dp=https%3A%2F%2Fwww.grab.com%2Fdownload',
            text: 'Purchase Here'
        },
    ]
    return(
        <>
        <Outlet OutletName="GrabFood Outlet" DataOutlet={GrabFoodList} />
        </>
    )
}

export default GrabFood