import React from 'react'
import Video from '../home/Video'

const HomeHeroText = () => {
  return (
    <>
    <div className='font-[font1] text-[#FFFFFF] text-center pt-5'>
    <div className='text-[9.5vw] leading-[8vw] flex items-center justify-center mb-6'>
      THE SPARKS FOR
    </div>
    <div className='text-[9.5vw] leading-[8vw] flex items-center justify-center mb-6'>
      ALL<div className='h-[8vw] w-[16vw]  rounded-full overflow-hidden'><Video rounded/></div>THINGS
    </div>
    <div className='text-[9.5vw] leading-[8vw] flex items-center justify-center'>
      CREATIVE
    </div>
    </div>
    </>
  )
}

export default HomeHeroText
