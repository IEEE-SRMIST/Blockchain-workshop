import React from 'react'

const Navbar = () => {
  return (
    <div className='fixed w-screen'>
        <div className="bg-[#1E1E1E] flex justify-between px-10 py-2">
      <div>
        <img src="/images/logo.svg" alt='logo' className=''/>
      </div>
      <div className='flex text-[#FFFFFF] space-x-8 text-lexand'>
        <ul className='flex items-center space-x-8'>
            <li>About us</li>
            <li>About the event</li>
            <li>Sponsors</li>
        </ul>
        <button className='bg-[#FFFFFF] text-[#1E1E1E] border rounded flex items-center px-2 py-0.5'>Register now</button>
      </div>
    </div>
    </div>
  )
}

export default Navbar
