import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import './NavBar.scss'
import { Button, Icon } from 'ui-kit'
import Logo from '../../assets/logo/logo-navbar.png'
import { useState } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import DropdownGeneral, { IDropdownOptions } from 'ui-kit/Dropdown_General/Dropdown_General'
import { logout } from 'utils/redux/slice/login.slice'
import { useDispatch } from 'react-redux'
import { useAuth } from 'utils/getAuth'

const navigationData = [
<<<<<<< HEAD
  { name: 'Eatery', href: '#', current: true },
=======
  { name: 'Eatery', href: '/eatery', current: false },
  { name: 'News', href: 'http://blog.manadong.id/', current: false },
  { name: 'Menu', href: 'menuSection', current: false },
  { name: 'Locations', href: '/locations', current: false },
  { name: 'Contact', href: '/contact', current: false },
>>>>>>> b8a117df9a39d44827d2b2e87e1e107099703225
]

export const handleScroll = () => {
  console.log('Kepencet Scoll')
  const targetElement = document.getElementById('menuSection')
  if (targetElement) {
    const targetPosition = targetElement.getBoundingClientRect().top
    const scrollPosition = targetPosition + window.scrollY
    window.scrollTo({
      top: scrollPosition,
      behavior: 'smooth',
    })
  }
}

const Navbar = () => {
  const dispatch = useDispatch()
  const { auth, user } = useAuth()
  const navigate = useNavigate()
  const [activePage, setActivePage] = useState('home')

  const handleLogo = () => {
    navigate('/')
    setActivePage('home')
  }

  const optionsDropdown: IDropdownOptions[] = [
    {
      id: 1,
      title: 'logout',
      childIcon: 'Dropdown',
    }
  ]

  return (
    <>
      <div className='bg-primary text-base-100-content h-[100px] pb-5 px-4'>
        <div className='navbar mx-auto navContainer'>
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
            </div>
            <div className='navbar-logo flex items-center h-[100px] max-lg:justify-center'>
              <img src={Logo} className='w-[140px]' onClick={handleLogo} />
            </div>
          </div>
          <div className='flex gap-[23px]'>
            <Icon type='Setting' />
            <Icon type='Notification' />
          </div>
          <div className='flex-none'>
           <DropdownGeneral dropdownType='normal' parentIcon='User' options={optionsDropdown}>
            {user ? user.username : 'Username'}
           </DropdownGeneral>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
  {/* <ul
                tabIndex={0}
                className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52 pr-[200px] hidden max-lg:flex'
              >
                {navigationData.map((item) => (
                  <li key={item.name} className='w-[200px]'>
                    <NavLink to={item.href}>{item.name}</NavLink>
                  </li>
                ))}
              </ul> */}
{/* <ul className='menu menu-horizontal px-1 hidden lg:flex'>
              {updatedNavigationData.map((item) => (
                <li className={item.name === 'Eatery' ? '' : item.current ? 'navActive' : ''} key={item.name}>
                  {item.name === 'Menu' ? (
                    <NavLink
                      onClick={() => {
                        handleNavbarMenu(item.name)
                        handleScroll()
                      }}
                      to={item.href}
                    >
                      {item.name}
                    </NavLink>
                  ) : (
                    <NavLink onClick={() => handleNavbarMenu(item.name)} to={item.href}>
                      {item.name}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul> */}