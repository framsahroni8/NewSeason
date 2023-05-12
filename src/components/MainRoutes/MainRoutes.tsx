import { Routes, Route, Navigate } from 'react-router-dom'

import { Contact, Home, LocationPage, MenuPage, NotFound } from 'pages'
import { Menu, PublicRoutes } from 'components'
import { ContactUs } from 'components/ContactUs'


const MainRoutes = () => (
  <Routes>
    {/** Public Routes */}
    {/** Wrap all Route under PublicRoutes element */}
    <Route path='/' element={<PublicRoutes />}>
      <Route path='/' element={<Navigate to='home'replace/>} />
      <Route path='home' element={<Home />} />
      <Route path='/menu/:id' element={<Menu />} />
      <Route path='Contact' element={<Contact />} />
      <Route path='locations' element={<LocationPage />} />
    </Route>
    {/** Permission denied route */}
    <Route path='/denied' element={<NotFound />} />
  </Routes>
)

export default MainRoutes
