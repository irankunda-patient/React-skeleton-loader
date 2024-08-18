import React, { useEffect, useState } from 'react'
import svg from "../assets/react.svg"
import HomeS from '../Skeleton/HomeS'

const Home = () => {
    const [loading, setloading] = useState(false)

    useEffect(()=>{
        setTimeout(()=>{
            setloading(true)
        },3000)
    },[])
  return (
    <div>
      { loading ?<><h1 className='font-montserrat font-bold text-white'>Home Page</h1>
      <p className='text-slate-400'>You're Welcome to Random page .com</p>
      <div className='grid grid-cols-3 h-[80vh] w-[80vw] place-items-center gap-2'>
        {Array(12).fill("").map((item, index)=>(
            <div key={index} className='bg-white w-full h-full flex items-center justify-center'>
                <img src={svg} alt="svg" />
            </div>
        ))}
      </div>
      </> : <HomeS/>}
    </div>
  )
}

export default Home
