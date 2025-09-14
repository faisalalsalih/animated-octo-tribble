import React from 'react'
import video from '../../assets/videos/video.mp4'

const Video = ({rounded = false}) => {
  return (
    <>
    <div className='h-full w-full'>
      <video 
      autoPlay muted loop className={`w-full h-full object-cover ${rounded ? 'rounded-full': ''}`}>
        <source src={video} type="video/mp4"/>
      </video>
      </div>
    </>
  )
}

export default Video
