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
import { db } from '../../config/Firebase'
import { getDocs, collection } from 'firebase/firestore'
import { useState, useEffect } from 'react'


const Menu = () => {
  const [menu, setMenu] = useState<menuImage[]>([])
  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const locationQuerySnapshot = await getDocs(collection(db, 'Menu'));
        const fetchedMenu: menuImage[] = [];
        locationQuerySnapshot.forEach((doc) => {
          const menu = doc.data();
          fetchedMenu.push({
            id: menu.id,
            data: {
              src: menu.url,
              name: menu.name,
            }
          });
        });
        setMenu(fetchedMenu);
      } catch (error) {
        console.log('Error fetching locations:', error);
      }
    };

    fetchMenu();
  }, []);

  return (
    <section id='menuSection'>
      <div className='menuWrapper w-full' id='menuSection'>
        <div className=''>
          <div className='menuText'>
            <TextDivider>Our Menu</TextDivider>
          </div>
          <div>
            <MenuDetail options={menu} />
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
