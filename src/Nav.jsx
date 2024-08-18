import React from 'react'
import { useNavigate } from 'react-router-dom'

const Nav = () => {
    const nav = useNavigate()
  return (
    <div className='flex gap-5 text-slate-100'>
      <p onClick={()=>nav("/")} className='cursor-pointer'>Home</p>
      <p onClick={()=>nav("/about")} className='cursor-pointer'>About</p>
    </div>
  )
}

export default Nav
