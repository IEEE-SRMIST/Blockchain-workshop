import React from 'react'

const Speaker = () => {
  return (
    <div className='pt-40 flex justify-end md:space-x-10 text-lexand md:flex-row'>
        {/* left */}
        <div className='text-[#FFFFFF] lg:text-end items-center md:text-center'>
            <h1 className='text-4xl pb-16'>Our Speaker</h1>
            <p className='max-w-xl px-4 lg:px-0 pb-16 md:text-justify md:pl-10 lg:text-end'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim dffan veniam, quis nostrud  exercitat ullamco laboris nisi ut aliquip argentum.</p>
             <div className='flex lg:justify-end space-x-2 md:justify-center'>
                <div><a href="www.google.com"><img src="/images/links/mdi_github.svg" alt="github"/></a></div>
                <div><a href="www.google.com"><img src="/images/links/mdi_linkedin.svg" alt="linkedin"/></a></div>
                <div><a href="www.google.com"><img src="/images/links/ph_globe.svg" alt="global"/></a></div>
             </div>
        </div>
        {/* right */}
       <div className='w-full md:w-1/2 flex lg:justify-center md:pr-24 md:pt-auto'>
        <img src="/images/speaker.svg" alt="speakers" />        
       </div>
    </div>
  )
}

export default Speaker
