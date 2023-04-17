import { useState } from 'react';
import { PopupButton } from '@typeform/embed-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleOurTeamClick = () => {
    const teamSection = document.getElementById('teams');
    teamSection.scrollIntoView({ behavior: 'smooth' });
  };
  const handleourspeakerClick = () => {
    const teamSection = document.getElementById('speaker');
    teamSection.scrollIntoView({ behavior: 'smooth' });
  };
  const handleaboutusClick = () => {
    const teamSection = document.getElementById('AboutUs');
    teamSection.scrollIntoView({ behavior: 'smooth' });
  };
  const handleabouteventClick = () => {
    const teamSection = document.getElementById('AboutEvent');
    teamSection.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className='fixed w-screen' style={{zIndex: 2}}>
      <div className='bg-[#1E1E1E] flex justify-between px-10 py-2'>
        <div className='cursor-pointer' onClick={handleaboutusClick}>
          <img src='/images/logo.svg' alt='logo'/>
        </div>
        <div className='hidden lg:flex text-[#FFFFFF] space-x-8 text-lexand'>
          <ul className='flex items-center space-x-8'>
            <li className="hover:text-[#00CCB7] cursor-pointer" onClick={handleaboutusClick}>About us</li>
            <li className="hover:text-[#00CCB7] cursor-pointer" onClick={handleabouteventClick}>About the event</li>
            <li className="hover:text-[#00CCB7] cursor-pointer" onClick={handleourspeakerClick}>Panelist</li>
            <li className="hover:text-[#00CCB7] cursor-pointer" onClick={handleOurTeamClick}>Our Team</li>
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
            <li onClick={handleaboutusClick}>About us</li>
            <li onClick={handleabouteventClick}>About the event</li>
            <li onClick={handleourspeakerClick}>Panelist</li>
            <li onClick={handleOurTeamClick}>Our Team</li>
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