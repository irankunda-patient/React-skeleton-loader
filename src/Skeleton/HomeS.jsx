import React from 'react'

const Home = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-2'>
      <h1 className='bg-slate-400 w-[100px] h-5 rounded-full animate-pulse'></h1>
      <p className='w-[200px] h-3 bg-slate-400 rounded-full animate-pulse'></p>
      <div className='grid grid-cols-3 h-[80vh] w-[80vw] place-items-center gap-2 '>
        {Array(12).fill("").map((item, index) => (
          <div key={index} className='bg-slate-400 w-full h-full flex items-center justify-center animate-pulse'>
            <img src='' alt="svg" className='bg-slate-500 h-4 w-4 rounded-full'/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
