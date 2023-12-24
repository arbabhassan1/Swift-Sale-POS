import React from 'react'
import Loading from '../assets/loading.png'

function Loader() {
  return (
    <div className='w-full bg-slate-900  min-h-screen absolute top-0 left-0 flex items-center justify-center '>
     <img src={Loading} alt="Loading" className='w-[9em] animate-spin-slow' />
    </div>
  )
}

export default Loader
