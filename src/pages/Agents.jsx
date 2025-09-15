import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const Agents = () => {

  const imageDevRef = useRef(null);
  const imageRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);



  const ImageArray = [
    'https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg',
  ]


  useGSAP(() => {
    gsap.to(imageDevRef.current, {
      scrollTrigger: {
        trigger: imageDevRef.current,
        // markers: true,
        start: 'top 30%',
        end: 'top -90%',
        pin: true,
        scrub: true,
        onUpdate: (elem) => {
          let ImageIndex;

          console.log(elem.progress);

          if(elem.progress < 1){
            ImageIndex = Math.floor(elem.progress * ImageArray.length);
          }
          else{
            ImageIndex = ImageArray.length - 1;
          }


          imageRef.current.src = ImageArray[ImageIndex]
        }
      }
    })
  })


  return (
    <>
    <div>
    <div className='section1 bg-red-600'>
      <div ref={imageDevRef} className='h-[22vw] w-[16vw] rounded-3xl overflow-hidden absolute top-56 left-[30vw]'>
        <img ref={imageRef} className='w-full h-full object-cover' src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg" alt="image1" />
      </div>
      <div className='font-[font2] relative'>
        <div className='mt-[55vh]'>
          <h1 className='text-[20vw] text-center text-black leading-[18vw] uppercase'>Seven7y <br />Two</h1>
        </div>

        <div className='pl-[40%] mt-20'>
          <p className='text-4xl'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We’re inquisitive and open-minded, and we make sure creativity crowds out ego from every corner. A brand is a living thing, with values, a personality and a story. If we ignore that, we can achieve short-term success, but not influence that goes the distance. We bring that perspective to every brand story we help tell.</p>
        </div>
      </div>
    </div>

    <div className="section2 h-screen bg-yellow-400">

    </div>
    </div>
    </>
  )
}

export default Agents
