import { Router, Routes, Route, Navigate, useLocation, Link, useNavigate } from 'react-router-dom'
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
import { RouteMenuComponent, handleScroll, } from 'pages/Home/Home'

// const HomeWithClickEvent = () => {
//   const navigate = useNavigate();

//   const handleClick = () => {
//     // Handle the click event here
//     console.log('Home clicked!');
//     // You can perform any additional actions or navigation logic here
//     navigate('/');
//   };

//   return (
//     <Home onClick={handleScroll} />
//   );
// };

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route>
          <Route path='/' element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path='menuSection' element={<Home/>}/>
          <Route path='locations' element={<LocationPage />} />
          <Route path='contact' element={<Contact />} />
          <Route path='order' element={<OrderPage />} />
          <Route path='gofood' element={<GoFoodPage />} />
          <Route path='grabfood' element={<GrabFood />} />
          <Route path='shopeefood' element={<ShopeeFood />} />
        </Route>
        {/** Permission denied route */}
        <Route path='/denied' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default MainRoutes
