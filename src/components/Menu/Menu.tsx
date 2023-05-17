import { MenuDetail, menuImage } from 'ui-kit/MenuDetail'
import CakalangRabe from '../../assets/images/Menu/cakalang_rabe_ricebo_xH6bJ-scaled.jpg'
import CakalangTinorasak from '../../assets/images/Menu/Cakalang-Tinoransak-Manadong.png'
import AyamRica from '../../assets/images/Menu/ayam_rica_ricebox-1-scaled.jpg'
import AyamWoku from '../../assets/images/Menu/ayam_woku_ricebox-scaled.jpg'
import CumiHitam from '../../assets/images/Menu/cumi_hitam_ricebox-scaled.jpg'
import LaukFrozen from '../../assets/images/Menu/Manadong-Lauk-Frozen-Ayam-Cakalang-Rabe-Rica-Tinoransak-Woku-e1638772096227.jpg'
import PerkedelJagung from '../../assets/images/Menu/Perkedel-Jagung-Manadong-Indonesia-e1638772185550.jpg'
import { TextDivider } from 'ui-kit/TextDivider'
import './Menu.scss'
import { Button } from 'ui-kit'

const Menu = () => {
  const menuData: menuImage[] = [
    {
      id: 1,
      image: CakalangRabe,
      name: 'Cakalang Rabe',
    },
    {
      id: 2,
      image: CakalangTinorasak,
      name: 'Cakalang Tinorasak',
    },
    {
      id: 3,
      image: AyamRica,
      name: 'Ayam Rica',
    },
    {
      id: 4,
      image: AyamWoku,
      name: 'Ayam Woku',
    },
    {
      id: 5,
      image: CumiHitam,
      name: 'Cumi Hitam',
    },
    {
      id: 6,
      image: LaukFrozen,
      name: 'Lauk Frozen',
    },
    {
      id: 7,
      image: PerkedelJagung,
      name: 'Perkedel Jagung',
    },
  ]
  return (
    <div className='menuWrapper' id='menu'>
      <div className=''>
        <div className='menuText'>
          <TextDivider>Our Menu</TextDivider>
        </div>
        <div>
          <MenuDetail options={menuData} />
        </div>
      </div>
      <div className='flex '>
        <Button>Order Now</Button>
      </div>
    </div>
  )
}

export default Menu
