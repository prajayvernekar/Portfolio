import React, { useEffect } from 'react'
import skilllogo from '../../images/qqqq.svg'
import './../../../src/components/Resume/Skills.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Skills(props) {

  useEffect(() => {
    AOS.init({ duration: 1500 })
  }, [])


  return (

    <div id='Skills' className={`px-5 lg:px-[50px] pb-0 ${props.small} lg:${props.large}`} style={{ backgroundImage: `linear-gradient(to ${props.direction}, #F5F5F5 63% , rgb(0, 200, 255) 37%)` }}>

      <div className=' lg:mt-15 pt-10 hidden lg:block'>
        <h1 className=' mb-5 flex text-[25px] border-solid border-gray-900 rounded-xl lg:text-[30px] lg:mx-10 bg-white text-[#1d4ed8] lg:text-[#00c8ff] w-[180px] p-2 cstmCard'>
          <svg xmlns="http://www.w3.org/2000/svg" className="lg:w-10 lg:h-10 w-8  mr-2 lg:mx-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
          Skills
        </h1>
      </div>

      <div className=' lg:mt-15 py-10 block lg:hidden'>
        <h1 className=' mb-5 lg:mb-16 flex text-[25px] border-solid border-gray-900 rounded-xl lg:text-[30px] lg:mx-10 bg-white text-[#1d4ed8] lg:text-[#00c8ff] w-[150px] p-2 cstmCard'>
          <svg xmlns="http://www.w3.org/2000/svg" className="lg:w-10 lg:h-10 w-8  mr-2 lg:mx-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
          Skills
        </h1>
      </div>



      <div className='flex flex-col lg:flex-row lg:justify-evenly lg:items-center pb-10'>

        <div className='lg:p-12 flex flex-col'>

          <h2 className='pl-5 text-black'>HTML</h2>
          <div className='flex items-center justify-center mb-8'>
            <div className='w-[600px] h-[20px] rounded-xl shadow-lg shadow-[#b8b8b8] bg-red-300'>
              <div data-aos="zoom-in" className='w-[75%] relative h-[20px] rounded-xl bg-red-500'></div>
            </div>
            <i data-aos="zoom-in" className="fa-brands fa-html5 text-orange-500 text-[40px] ml-5"></i>
          </div>

          <h2 className='pl-20 text-black'>CSS</h2>
          <div className='flex items-center justify-center mb-8'>
            <i data-aos="zoom-in" className="fa-brands fa-css3 text-[35px] ml-5 text-[#0099ff] mr-5"></i>
            <div className='w-[600px] h-[20px] rounded-xl  shadow-lg shadow-[#b8b8b8] bg-blue-300 '>
              <div data-aos="zoom-in" className='w-[80%] h-[20px] rounded-xl bg-[#0099ff]'></div>
            </div>
          </div>

          <h2 className='pl-5 text-black'>JAVASCRIPT</h2>
          <div className='flex items-center justify-center mb-8'>
            <div className='w-[600px] h-[20px] rounded-xl  shadow-lg shadow-[#b8b8b8] bg-yellow-100'>
              <div data-aos="zoom-in" className='w-[50%] h-[20px] rounded-xl bg-yellow-500'></div>
            </div>
            <i data-aos="zoom-in" className="fa-brands fa-js text-[35px] ml-5 text-yellow-500 mr-5"></i>
          </div>

          <h2 className='pl-20 text-black'>REACT</h2>
          <div className='flex items-center justify-center'>
            <i data-aos="zoom-in" className="fa-brands fa-react text-[35px] ml-5 text-[#61DBFB] mr-5"></i>
            <div className='w-[600px] h-[20px] rounded-xl  shadow-lg shadow-[#b8b8b8] bg-[#b9e9ff]'>
              <div data-aos="zoom-in" className='w-[53%] h-[20px] rounded-xl bg-[#00ccff]'></div>
            </div>
          </div>

        </div>

        <div>
          <img data-aos="slide-up" className='h-[600px] w-[700px] hidden lg:block' src={skilllogo} alt="" />
        </div>

      </div>


    </div>

  )
}
