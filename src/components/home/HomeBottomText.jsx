import React from 'react'
import { Link } from "react-router-dom"

const HomeBottomText = () => {
  return (
    <>
    <div className='font-[font2] flex items-center justify-center gap-2 pb-2'>
      <Link className='text-[5vw] leading-[6vw] border-5 border-white rounded-full uppercase text-white pt-5 px-14 hover:text-[#D3FD50] hover:border-[#D3FD50]' to="/projects">Projects</Link>
      <Link className='text-[5vw] leading-[6vw] border-5 border-white rounded-full uppercase text-white pt-5 px-14 hover:text-[#D3FD50] hover:border-[#D3FD50]' to="/agents">Agence</Link>
    </div>
    </>
  )
}

export default HomeBottomText
