import React, { useEffect, useState } from 'react'

const AboutS = () => {
  return (
    <div className='flex flex-col h-[88vh] w-1/2 gap-2 items-center justify-start space-y-2'>
      <h1 className='bg-slate-400 w-[200px] h-4 rounded-full animate-pulse'></h1>
      <p className='bg-slate-400 w-[600px] h-3 rounded-full animate-pulse'></p>
      <p className='bg-slate-400 w-[450px] h-2 rounded-full animate-pulse'></p>
      <p className='bg-slate-400 w-[500px] h-2 rounded-full animate-pulse'></p>
    </div>
  )
}

export default AboutS
