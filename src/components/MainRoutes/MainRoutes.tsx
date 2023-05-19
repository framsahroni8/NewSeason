import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import {
  Contact,
  GoFoodPage,
  GrabFood,
  Home,
  LocationPage,
  NotFound,
  OrderPage,
  ShopeeFood,
} from 'pages'
import { Menu, PublicRoutes } from 'components'
import { Link as ScrollLink } from 'react-scroll'
import { ContactUs } from 'components/ContactUs'

const MainRoutes = () => {
  const location = useLocation()

  return (
    <Routes>
      {/** Public Routes */}
      {/** Wrap all Route under PublicRoutes element */}
      <Route path='/' element={<PublicRoutes />}>
        <Route path='/' element={<Navigate to='home' replace />} />
        <Route path='home' element={<Home />} />
        <>
          {location.pathname !== '/' && (
            <>
              <Route
                path={Home + '/#menuSection'}
                element={<ScrollLink to='menuSection' smooth={true} />}
              />
            </>
          )}
        </>

        <Route path='/Contact' element={<Contact />} />
        <Route path='/locations' element={<LocationPage />} />
        <Route path='/order' element={<OrderPage />} />
        <Route path='/GoFood' element={<GoFoodPage />} />
        <Route path='/GrabFood' element={<GrabFood />} />
        <Route path='/ShopeeFood' element={<ShopeeFood />} />
      </Route>
      {/** Permission denied route */}
      <Route path='/denied' element={<NotFound />} />
    </Routes>
  )
}

export default MainRoutes
