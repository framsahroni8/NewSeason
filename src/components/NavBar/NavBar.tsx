import { Link, useLocation, useNavigate } from 'react-router-dom'
import './NavBar.scss'
import { Button } from 'ui-kit'
import Logo from '../../assets/logo/logo-navbar.png'
import { useState } from 'react'
import { Link as ScrollLink } from 'react-scroll'

const navigationData = [
  { name: 'Menu', href: '/#menu', current: false },
  { name: 'Locations', href: '/locations', current: false },
  { name: 'Contact', href: '/contact', current: false },
]

const Navbar = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [activePage, setActivePage] = useState('')
  const [isScrollingDown, setIsScrollingDown] = useState(false)

  const handleOrder = () => {
    navigate('/order')
  }

  const handleLogo = () => {
    navigate('/')
  }

  const handleNavbarMenu = (name: string) => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrollingDown(scrollPosition > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }

  return (
    <>
      <div className='bg-primary text-base-100-content h-[60px] pb-5 px-4'>
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
              <ul
                tabIndex={0}
                className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52 pr-[200px] hidden max-lg:flex'
              >
                {navigationData.map((item) => (
                  <li key={item.name}>
                    <Link to={item.href}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className='navbar-logo max-lg:justify-center'>
              <img src={Logo} className='w-[80px]' onClick={handleLogo} />
            </div>
          </div>

          <div className='navHidden'>
            <ul className='menu menu-horizontal px-1 hidden lg:flex'>
              {navigationData.map((item) => (
                <li key={item.name}>
                  {item.href === 'menu' ? (
                    <ScrollLink
                      to={item.href}
                      spy={true}
                      smooth={true}
                      duration={500}
                      activeClass='active'
                      onClick={() => handleNavbarMenu(item.name)}
                      className={activePage === item.name ? 'navActive' : ''}
                    >
                      {item.name}
                    </ScrollLink>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={() => handleNavbarMenu(item.name)}
                      className={location.pathname === item.href ? 'navActive' : ''}
                    >
                      {item.name}
                    </Link>
                  )}
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
function setIsScrollingDown(arg0: boolean) {
  throw new Error('Function not implemented.')
}
