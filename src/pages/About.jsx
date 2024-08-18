import React, {useState, useEffect} from 'react'
import AboutS from '../Skeleton/AboutS'
const About = () => {
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    }, 2000)
  }, [])
  return (
    <div className='flex flex-col h-[88vh] w-1/2 gap-2 items-center'>
    {!loading ?<>
      <h1 className='text-white font-bold'>About Random page .com</h1>  
      <p className='text-balance text-slate-400'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque laudantium saepe ex nam repellendus harum,
         quos voluptates fugit impedit suscipit dolore ipsum veritatis alias quisquam! Fugit id modi recusandae nostrum.</p></>
         : <AboutS/>}
    </div>
  )
}

export default About
