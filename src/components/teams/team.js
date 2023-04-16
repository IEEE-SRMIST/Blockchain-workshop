import React from 'react'
import team from '../../utils/people'

const Team = () => {
  return (
    <div className='text-lexand pt-10 text-white px-60 flex flex-wrap space-x-10'>
      <div >
        <h1 className="text-robotomono text-2xl pb-10 md:text-center lg:text-start">Meet The Team!</h1>
        <p className='text-lexand lg:max-w-xl md:text-center lg:text-start '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim dffan veniam, </p>
      </div>
      <div className="list-none pt-20 justify-between pb-10 grid md:grid-cols-2 lg:grid-cols-4">
            {team.map((member,idx) => (
            //   <li key={idx}>{member.name}</li>
            <a><img src="/images/speaker.svg" className='w-[60%] pt-10 md:w-[70%]'></img></a>
            ))}
     </div>
    </div>
  )
}

export default Team
