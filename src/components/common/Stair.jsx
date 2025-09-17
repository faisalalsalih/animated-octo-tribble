import React, { useRef } from 'react'
import { useGSAP } from "@gsap/react"
import gsap from 'gsap'
import { useLocation } from 'react-router-dom';

const Stair = (props) => {

    const StairParentRef = useRef(null);

    const currentpath = useLocation().pathname;

    const pageRef = useRef(null);


    useGSAP(() => {

    const tl = gsap.timeline();

    tl.to(StairParentRef.current, {
        display: 'block',
    })


    tl.from('.stair', {
      height: 0,
      stagger:{
        amount: -0.25
      }
    })

    tl.to('.stair', {
      y:'100%',
      stagger:{
        amount:-0.25
      }
    })

    tl.to(StairParentRef.current, {
        display: 'none',
    })

    tl.to('.stair', {
        y:'0%'
    })

    gsap.from(pageRef.current, {
      opacity: 0,
      delay: 1.5,
    })
  }, [currentpath])
  return (
    <>
      <div ref={StairParentRef} className='h-screen w-full fixed top-0 z-20'>
      <div className='h-screen w-full flex'>
        <div className='stair h-full w-1/5 bg-black'></div>
        <div className='stair h-full w-1/5 bg-black'></div>
        <div className='stair h-full w-1/5 bg-black'></div>
        <div className='stair h-full w-1/5 bg-black'></div>
        <div className='stair h-full w-1/5 bg-black'></div>

      </div>
      </div>


      <div ref={pageRef}>
        {props.children}
      </div>
    </>
  )
}

export default Stair
