import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from 'utils/getAuth'
import { logout } from 'utils/redux/slice/login.slice'
import './NavBar.scss'

const navigationData = [
  { name: 'Home', href: '/', current: false },
  { name: '2nd Page', href: '/sec', current: true },
]

const Navbar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { auth } = useAuth()

  const handleLogout = () => {
    dispatch(logout())
    navigate('/login')
  }

  return (
    <>
      {auth && (
        <div className='bg-neutral text-neutral-content'>
          <div className='navbar container mx-auto'>
            <div className='navbar-start'>
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
                  className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
                >
                  {navigationData.map((item) => (
                    <li key={item.name}>
                      <Link to={item.href}>{item.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <a className='btn-ghost normal-case text-xl'>Concise</a>
              <ul className='menu menu-horizontal px-1 hidden lg:flex'>
                {navigationData.map((item) => (
                  <li key={item.name}>
                    <Link to={item.href}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className='navbar-end'>
              <a className='btn' onClick={handleLogout}>
                Logout
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar
