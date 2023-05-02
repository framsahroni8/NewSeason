import { Link, useNavigate } from 'react-router-dom'
import './NavBar.scss'
import { Button } from 'ui-kit'
import Logo from '../../assets/logo/logo-navbar.png'
import { useState } from 'react'

const navigationData = [
  { name: 'Menu', href: '/menu', current: false },
  { name: 'Locations', href: '/locations', current: false },
  { name: 'Contact', href: '/locations', current: false },
]

const Navbar = () => {
  const navigate = useNavigate()
  const [activePage, setActivePage] = useState('home')

  const handleOrder = () => {
    navigate('/order')
  }

  const handleLogo = () => {
    navigate('/')
  }

  const handleNavbarMenu = (name: string) => {
    console.log('kepanggil' + name)
    setActivePage(name)
  }

  return (
    <>
      <div className='bg-primary text-base-100-content'>
        <div className='navbar container mx-auto'>
          <div className='navbar-start navbar-responsive w-full'>
            <div className='dropdown'>
              <label tabIndex={0} className='btn btn-ghost lg:hidden'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h8m-8 6h16'
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52 pr-[200px]'
              >
                {navigationData.map((item) => (
                  <li key={item.name}>
                    <Link to={item.href}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <img
              src={Logo}
              className=' navbar-logo'
              onClick={handleLogo}
            />
          </div>
          <div>
            <ul className='menu menu-horizontal px-1 hidden lg:flex'>
              {navigationData.map((item) => (
                <li
                  className={activePage === item.name ? 'navbar-menu active' : 'navbar-menu'}
                  key={item.name}
                >
                  <Link onClick={() => handleNavbarMenu(item.name)} to={item.href}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Button className='btn-navbar' onClick={handleOrder}>
              Order Now
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
