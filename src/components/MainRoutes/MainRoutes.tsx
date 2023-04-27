import { Routes, Route, Navigate } from 'react-router-dom'

import { Home, Login, NotFound, SecondPage } from 'pages'
import { ProtectedRoutes, PublicRoutes } from 'components'


const MainRoutes = () => (
  <Routes>
    {/** Protected Routes */}
    {/** Wrap all Route under ProtectedRoutes element */}
    <Route path='/' element={<ProtectedRoutes />}>
      <Route path='/' element={<Navigate replace to='home' />} />
      <Route path='home' element={<Home />} />
      <Route path='sec' element={<SecondPage />} />
    </Route>
    {/** Public Routes */}
    {/** Wrap all Route under PublicRoutes element */}
    <Route path='login' element={<PublicRoutes />}>
      <Route path='/login' element={<Login />} />
    </Route>
    {/** Permission denied route */}
    <Route path='/denied' element={<NotFound />} />
  </Routes>
)

export default MainRoutes
