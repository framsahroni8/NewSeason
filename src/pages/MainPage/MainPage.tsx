import './MainPage.scss'
import React, { useState } from 'react'
import { ModalPopUp, ImageMain, FlipComponent } from 'components'

const MainPage = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen pageMain gap-8'>
      <div className='lg:hidden'>
        <span className='textHP'>Bukanya Di Laptop ya maniezz</span>
      </div>
      <div className='max-lg:hidden'>
        <span className='textMain'>
          Hello, Are Your Ready for Next Step? <br /> If You Ready, Press the number now!
        </span>
      </div>
      <div className='max-lg:hidden'>
        <ImageMain />
      </div>
    </div>
  )
}

export default MainPage
