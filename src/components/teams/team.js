import React from 'react'
import team from '../../utils/people'

const Team = () => {
  return (
    <div className='text-lexand pt-10 text-white px-60'>
      <div>
        <h1 className="text-robotomono text-2xl pb-10">Meet The Team!</h1>
        <p className='text-lexand max-w-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim dffan veniam, </p>
      </div>
      <div className="list-none pt-10 justify-between pb-10 grid md:grid-cols-4 lg:grid-col-4">
            {team.map((member,idx) => (
            //   <li key={idx}>{member.name}</li>
            <a><img src="/images/speaker.svg" className='w-[60%] pt-10'></img></a>
            ))}
     </div>
    </div>
  )
}

export default Team
