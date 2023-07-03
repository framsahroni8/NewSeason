import { BrowserRouter } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { Provider } from 'react-redux'
import './App.css'
import MainRoutes from 'components/MainRoutes/MainRoutes'
import { Footer } from 'components/Footer'
import { store } from 'utils/redux/store'
import { SideBar } from 'components'
import { sidebarData } from 'components/SideBar/SideBar'

const sideData:sidebarData[] = [
  {
    id : 1,
    text: 'Main Menu'
  },
  {
    id: 2,
    text: 'Menu'
  },
  {
    id: 3,
    text: 'Location'
  },
  {
    id: 4,
    text: 'Review'
  }
]

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <BrowserRouter>
<<<<<<< HEAD
          <NavBar />
          <div className='flex'>
          <SideBar options={sideData}/>
          <MainRoutes />
          </div>
=======
          {/* <NavBar /> */}
          <MainRoutes />
>>>>>>> b8a117df9a39d44827d2b2e87e1e107099703225
          {/* <Footer /> */}
        </BrowserRouter>
      </div>
    </Provider>
  )
}

export default App