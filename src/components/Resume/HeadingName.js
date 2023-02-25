import React from 'react'

export default function HeadingName() {
  return (
    <div>
      <div className='lg:pt-10 hidden lg:block'>
        <h1 className=' mb-5 flex text-[25px] border-solid border-gray-900 rounded-xl lg:text-[30px] lg:mx-10 bg-white text-[#1d4ed8] lg:text-[#00c8ff] w-[220px] p-2 cstmCard'>
          <svg xmlns="http://www.w3.org/2000/svg" className="lg:w-10 lg:h-10 w-8  mr-2 lg:mx-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
          </svg>
          Projects
        </h1>
      </div>

      <div className=' lg:mt-15 px-5 pt-10 pb-7 block lg:hidden'>
        <h1 className='lg:mb-16 flex text-[25px] border-solid border-gray-900 rounded-xl lg:text-[30px] lg:mx-10 bg-white text-[#1d4ed8] lg:text-[#00c8ff] w-[170px] p-2 cstmCard'>
          <svg xmlns="http://www.w3.org/2000/svg" className="lg:w-10 lg:h-10 w-8  mr-2 lg:mx-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
          </svg>
          Projects
        </h1>
      </div>
    </div>
  )
}
