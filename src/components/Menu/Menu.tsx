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
import { Link } from 'react-router-dom'

export const menuData: menuImage[] = [
  {
    id: 1,
    data: {
      name: 'Cakalang Rabe',
      src: CakalangRabe,
    },
  },
  {
    id: 2,
    data: {
      name: 'Cakalang Tinorasak',
      src: CakalangTinorasak,
    },
  },
  {
    id: 3,
    data: {
      name: 'Ayam Rica',
      src: AyamRica,
    },
  },
  {
    id: 4,
    data: {
      name: 'Ayam Woku',
      src: AyamWoku,
    },
  },
  {
    id: 5,
    data: {
      name: 'Cumi Hitam',
      src: CumiHitam,
    },
  },
  {
    id: 6,
    data: {
      name: 'Lauk Frozen',
      src: LaukFrozen,
    },
  },
  {
    id: 7,
    data: {
      name: 'Perkedel Jagung',
      src: PerkedelJagung,
    },
  },
]

const Menu = () => {
  return (
    <section id='menuSection'>
      <div className='menuWrapper' id='menuSection'>
        <div className=''>
          <div className='menuText'>
            <TextDivider>Our Menu</TextDivider>
          </div>
          <div>
            <MenuDetail options={menuData} />
          </div>
        </div>
        <div className='flex justify-end'>
          <Link to='/order'>
            <Button>Order Now</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Menu
