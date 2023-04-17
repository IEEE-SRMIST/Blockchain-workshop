import React from 'react'
import team from '../../utils/people'

const Team = () => {
  return (
    <div className='text-lexand pt-20 pb-20 text-white px-10 lg:px-20 xl:px-60' style={{ position: 'relative', zIndex: '1' }}>
      <h1 className="text-robotomono text-2xl pb-10 text-center lg:text-left pl-12">Meet The Team!</h1>
      <p className='text-lexand max-w-2xl text-justify pl-12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim dffan veniam, </p>
      <div className="list-none pt-20 justify-between grid md:grid-cols-2 lg:grid-cols-4">
        {team.map((member, idx) => (
          <a key={idx}>
            <img src="/images/speaker.svg" className='w-[60%] mx-auto pt-10 md:w-[70%]' />
          </a>
        ))}
      </div>
    </div>
  )
}

export default Team