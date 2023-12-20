import React from 'react'

export default function Error() {
  return (
    <section className='w-full h-full flex flex-wrap justify-center my-10'>
        <div className='w-[700px] h-1/2 flex flex-wrap justify-center items-center'>
        <span className='text-5xl'>☹️</span>
        <span className='w-full text-center text-9xl text-[#8950FC]'>404</span>
        <p className='font-bold'>The page you are attempting to reach is currently not available. This may be because the page does not exist or has been moved.</p>
        </div>
    </section>
  )
}
