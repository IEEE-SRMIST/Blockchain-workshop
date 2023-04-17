import { useState } from 'react';
import { PopupButton } from '@typeform/embed-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='fixed w-screen' style={{zIndex: 2}}>
      <div className='bg-[#1E1E1E] flex justify-between px-10 py-2'>
        <div>
          <img src='/images/logo.svg' alt='logo' />
        </div>
        <div className='hidden lg:flex text-[#FFFFFF] space-x-8 text-lexand'>
          <ul className='flex items-center space-x-8'>
            <li>About us</li>
            <li>About the event</li>
            <li>Sponsors</li>
          </ul>
          <button className='bg-[#FFFFFF] hover:bg-[#00CCB7] roundedbg-[#FFFFFF] text-[#1E1E1E] border rounded flex items-center px-2 py-0.5 text-sm'>
          <PopupButton id="q6rWVcPk" style={{ fontSize: 20 }} className="my-button">Register now</PopupButton>
          </button>
        </div>
        <div className='lg:hidden flex'>
          <button onClick={toggleMenu} className='focus:outline-none'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 text-[#FFFFFF]'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className='bg-[#1E1E1E] w-screen py-2 lg:hidden text-[#FFFFFF]'>
          <ul className='flex flex-col items-center space-y-4'>
            <li>About us</li>
            <li>About the event</li>
            <li>Sponsors</li>
            <button className='bg-[#FFFFFF] text-[#1E1E1E] border rounded flex items-center px-2 py-0.5'>
              Register now
            </button>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;