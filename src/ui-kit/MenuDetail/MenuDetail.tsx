import './MenuDetail.scss'

export interface menuImage {
  id: number
  image: string
  name: string
}

export interface menuProps {
  options: menuImage[]
}

export const MenuDetail: React.FC<menuProps> = ({ options }) => {
  return (
    <div>
      <div className='flex flex-row items-center mt-[40px] gap-[24px] justify-center'>
        <div className='w-full flex flex-wrap'>
        {options.map((option) => (
          <div className='detailWrapper  menuContainer' key={option.id}>
            <div className='detailImage'>
              <img src={option.image} />
            </div>
            <div className='text-black'>
              <span>{option.name}</span>
            </div>
          </div>
        ))}
        </div>
        
      </div>
    </div>
  )
}
