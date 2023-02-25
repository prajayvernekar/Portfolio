import React, { useEffect } from 'react'
import '../../../src/components/Resume/Education.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Typed from "react-typed"

export default function Education() {
  useEffect(() => {
    AOS.init({ duration: 1500 })
  }, [])

  return (
    <div id='Education' className=' p-5 lg:p-10'>

      <div className='mt-10 lg:mt-15 block lg:hidden'>
        <h1 className='mb-16 flex text-[25px] border-solid border-gray-900 rounded-xl lg:text-[30px] lg:mx-10 text-[#1d4ed8] lg:text-[#00c8ff] w-[200px] p-2 cstmCard'>
          <svg xmlns="http://www.w3.org/2000/svg" className="lg:w-10 lg:h-10 w-8  mr-2 lg:mx-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
          </svg>
          Education
        </h1>
      </div>

      <div className='mt-10 lg:mt-15 hidden lg:block'>
        <h1 className='mb-16 flex text-[25px] border-solid border-gray-900 rounded-xl lg:text-[30px] lg:mx-10 text-[#1d4ed8] lg:text-[#00c8ff] w-[250px] p-2 cstmCard'>
          <svg xmlns="http://www.w3.org/2000/svg" className="lg:w-10 lg:h-10 w-8  mr-2 lg:mx-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
          </svg>
          Education
        </h1>
      </div>

      {/* Mobile View */}

      <section className="lg:hidden block text-gray-600 body-font">
        <div className="container px-5 py-0 mx-auto">
          <div data-aos="fade-up" className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <p className='mb-4 text-[#00C8FF]'><b>ENGINEERING</b></p>
            <div className="sm:w-44 sm:h-36 h-44 w-64 sm:mr-10 inline-flex items-center justify-center  bg-indigo-100 text-indigo-500 flex-shrink-0">
              <img className="object-cover object-center rounded-2xl h-44 w-64" alt="hero" src="images\msrit2.jpg" />
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Ramaiah Institute Of Technology</h2>
              <p className="leading-relaxed text-base">
                Pursuing B.E in Electrical And Electronics Engineering <br />
                With an aggregate of CGPA  <b>8.22</b> <br />
                <p className='mt-4 text-lg'><b>2020 - Present</b></p>
              </p>
            </div>
          </div>

          <div data-aos="fade-up">
            <p className='mb-4 text-center text-[#00C8FF]'><b>DIPLOMA</b></p>
            <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
              <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Government Polytechnic karwar</h2>
                <p className="leading-relaxed text-base">
                  Completed Diploma in Electrical And Electronics Engineering <br />
                  With an aggregate of  <b>87.5%</b> <br />
                  <p className='mt-4 text-lg'><b>2017 - 2020</b></p>
                </p>
              </div>
              <div className="sm:w-56 sm:order-none order-first sm:h-32 h-44 w-64 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                <img className="object-cover object-center h-44 w-64 rounded-2xl" alt="hero" src="images\gptkwr2.jpg" />
              </div>
            </div>
          </div>
          <div data-aos="fade-up" className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
            <p className='mb-4 text-[#00C8FF]'><b>SCHOOL</b></p>
            <div className="sm:w-56 sm:h-36 h-44 w-64 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
              <img className="object-cover object-center rounded-2xl h-44 w-64" alt="hero" src="images\school.jpg" />
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Amrita Vidyalayam</h2>
              <p className="leading-relaxed text-base">
                Completed my Schooling in CBSE Board <br />
                With an aggregate of CGPA  <b>9.2</b> <br />
                <p className='mt-4 text-lg'><b>2007 - 2017</b></p>
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* PC View */}

      <div className='mx-20 lg:block hidden'>
        <section data-aos="zoom-in-up" className="text-gray-600 body-font rounded-[90px] px-24 mb-16 mx-auto shadow-2xl" style={{ backgroundImage: 'linear-gradient(to right, white 63% , rgb(0, 200, 255) 37%)' }}>
          <div className="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <p className='pb-2 text-[#00C8FF]'><b>ENGINEERING </b></p>
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Ramaiah Institute Of Technology
              </h1>
              <p className="mb-8 leading-relaxed">
                Pursuing B.E in Electrical And Electronics Engineering <br />
                With an aggregate of CGPA  <b>8.22</b> <br />
                <p className='mt-4 text-lg'><b>2020 - Present</b></p>
              </p>

            </div>
            <div className="lg:max-w-lg">
              <img className="object-cover object-center rounded-2xl" alt="hero" src="images\msrit2.jpg" />
            </div>
          </div>
        </section>

        <section data-aos="zoom-in-up" className="text-gray-600 body-font rounded-[90px] px-24 mb-16 mx-auto shadow-2xl" style={{ backgroundImage: 'linear-gradient(to left, white 63% , rgb(0, 200, 255) 37%)' }}>
          <div className="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg  mb-10 md:mb-0">
              <img className="object-cover object-center h-[350px] rounded-2xl w-[500px]" alt="hero" src="images\gptkwr2.jpg" />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <p className='pb-2 text-[#00C8FF]'><b>DIPLOMA </b></p>
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Government Polytechnic Karwar
              </h1>
              <p className="mb-8 leading-relaxed">
                Completed Diploma in Electrical And Electronics Engineering <br />
                With an aggregate of  <b>87.5%</b> <br />
                <p className='mt-4 text-lg'><b>2017 - 2020</b></p>
              </p>
            </div>
          </div>
        </section>

        <section data-aos="zoom-in-up" className="text-gray-600 body-font rounded-[90px] px-24 mb-16 mx-auto shadow-2xl" style={{ backgroundImage: 'linear-gradient(to right, white 63% , rgb(0, 200, 255) 37%)' }}>
          <div className="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <p className='pb-2 text-[#00C8FF]'><b>SCHOOL </b></p>
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Amrita Vidyalayam
              </h1>
              <p className="mb-8 leading-relaxed">
                Completed my Schooling in CBSE Board <br />
                With an aggregate of CGPA  <b>9.2</b> <br />
                <p className='mt-4 text-lg'><b>2007 - 2017</b></p>
              </p>
            </div>
            <div className="lg:max-w-lg">
              <img className="object-cover object-center rounded-2xl h-[350px] w-[490px]" alt="hero" src="images\school.jpg" />
            </div>
          </div>
        </section>
      </div>

    </div>
  )
}
