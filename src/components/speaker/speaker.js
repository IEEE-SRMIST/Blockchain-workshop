import React from 'react'

const Speaker = () => {
  return (
    <div className='pt-40 flex flex-col justify-end md:space-x-10 text-lexand md:flex-row'>
        {/* left */}
        <div className='text-[#FFFFFF] lg:text-end items-center md:text-center'>
            <h1 className='text-4xl pb-16 text-center lg:text-end'>Our Speaker</h1>
            <div className='w-full md:hidden flex justify-center pb-10'>
              <img src="/images/speaker.svg" className='w-2/3' alt="speakers" />        
            </div>
            <p className='max-w-xl px-4 lg:px-0 pb-16 text-justify md:pl-10 lg:order-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim dffan veniam, quis nostrud  exercitat ullamco laboris nisi ut aliquip argentum.</p>
             <div className='flex lg:justify-end space-x-3 justify-center lg:order-3'>
                <div><a href="www.google.com"><img src="/images/links/mdi_github.svg" alt="github"/></a></div>
                <div><a href="www.google.com"><img src="/images/links/mdi_linkedin.svg" alt="linkedin"/></a></div>
                <div><a href="www.google.com"><img src="/images/links/ph_globe.svg" alt="global"/></a></div>
             </div>
        </div>
        {/* right */}
       <div className='w-full md:w-1/2 flex lg:justify-center md:pr-10 md:pt-auto lg:order-1'>
        <img className='hidden md:block' src="/images/speaker.svg" alt="speakers" />        
       </div>
    </div>
  )
}

export default Speaker
