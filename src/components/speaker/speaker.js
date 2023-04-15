import React from 'react'

const Speaker = () => {
  return (
    <div className='pt-40 flex justify-center space-x-40 text-lexand'>
        {/* left */}
        <div className='text-[#FFFFFF] text-end items-center'>
            <h1 className='text-4xl pb-16'>Our Speaker</h1>
            <p className='max-w-xl pb-16 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim dffan veniam, quis nostrud  exercitat ullamco laboris nisi ut aliquip argentum.</p>
             <div className='flex justify-end space-x-4'>
                <div><a href="www.google.com"><img src="/images/links/mdi_github.svg" alt="github"/></a></div>
                <div><a href="www.google.com"><img src="/images/links/mdi_linkedin.svg" alt="linkedin"/></a></div>
                <div><a href="www.google.com"><img src="/images/links/ph_globe.svg" alt="global"/></a></div>
             </div>
        </div>
        {/* right */}
       <div>
        <img src="/images/speaker.svg" alt="speakers" />        
       </div>
    </div>
  )
}

export default Speaker
