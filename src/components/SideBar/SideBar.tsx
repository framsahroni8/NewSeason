import { Icon } from 'ui-kit'
import './SideBar.scss'

export interface sidebarData{
  id: number
  text: string
}

export interface Sidebarprops{
  options: sidebarData[]
}

const SideBar:React.FC<Sidebarprops> = ({options}) => {
  return (
  <div className='sidebar bg-primary p-8 w-[15%] h-screen'>
    <ul className='sideContainer'>
      {options.map ((option) => (
        <>
        <li className='sideText'><Icon type='Exit' size='small'/>{option.text}</li>
        </>
      ))}
    </ul>
  </div>
  )
}

export default SideBar
