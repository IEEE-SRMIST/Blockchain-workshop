import React from 'react'
import { PopupButton } from '@typeform/embed-react'

const Navbar = () => {
  return (
    <div className='fixed w-screen'>
        <div className="bg-[#1E1E1E] flex justify-between px-10 py-2">
      <div>
        <img src="/images/logo.svg" alt='logo' className=''/>
      </div>
      <div className='flex text-[#FFFFFF] space-x-8 text-lexand'>
        <ul className='flex items-center space-x-8 '>
            <li className='hover:text-[#00CCB7]'>About us</li>
            <li className='hover:text-[#00CCB7]'>About the event</li>
            <li className='hover:text-[#00CCB7]'>Sponsors</li>
        </ul>
        <button class="bg-[#00CCB7] hover:bg-[#06f7e3] text-white font-bold py-2 px-4 rounded"><PopupButton id="q6rWVcPk" style={{ fontSize: 20 }} className="my-button"></PopupButton>Register now</button>
      </div>
    </div>
    </div>
  )
}

export default Navbar
