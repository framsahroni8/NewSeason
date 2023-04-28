import { Routes, Route, Navigate } from 'react-router-dom'

import { Home, NotFound } from 'pages'
import { PublicRoutes } from 'components'


const MainRoutes = () => (
  <Routes>
    {/** Public Routes */}
    {/** Wrap all Route under PublicRoutes element */}
    <Route path='/' element={<PublicRoutes />}>
      <Route path='/' element={<Navigate to='home'replace/>} />
      <Route path='home' element={<Home />} />
    </Route>
    {/** Permission denied route */}
    <Route path='/denied' element={<NotFound />} />
  </Routes>
)

export default MainRoutes
