import { current } from "@reduxjs/toolkit"
import React, { useEffect, useRef, useState } from "react"

  function VideoPlayer({src, isPlaying}: {src:string, isPlaying:boolean}) {
    const videoRef = useRef<any>(null)
    useEffect(() => {
      if(isPlaying) {
      
      videoRef.current.play()
    } else {
      videoRef.current.pause()
    
    }
    }, [isPlaying])
    return <video ref ={videoRef} width={500} src={src} loop controls></video>

  }
  

 function Effect() {
  const [isPlaying, setInPlaying] = useState(false)
  const [videoSrc, setvideoSrc] = useState('')
  useEffect(() => {
    setTimeout(() => {
      const src = 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4'
      setvideoSrc(src)
      
    }, 1000);
  })
  return (
    <div> 
      <VideoPlayer isPlaying ={isPlaying} src={videoSrc} />
      <br />
      <button onClick={() =>setInPlaying(!isPlaying)}>{isPlaying ? 'Pause': 'Play'}</button>
    </div>
       
     
       
  )
}

export default Effect