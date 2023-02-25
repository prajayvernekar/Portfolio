import React, { useEffect } from 'react'
import './Download.css'
import 'tw-elements';
import svg from '../../images/tpur.svg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import pdf from "../../pdf/resume.pdf"

export default function Resume() {
    useEffect(() => {
        AOS.init({ duration: 1500 })
    }, [])
    return (
        <>
            <div id='GetDocs' className={`hidden lg:block supp p-5 lg:p-10`}>
                <div className='mb-3'>
                    <h1 className='flex text-[25px] lg:text-[30px] lg:mx-10 bg-white rounded-xl lg:text-[#00C8FF] p-[5px] mb-10 w-[220px] '>
                        <svg data-aos="flip-left" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="lg:w-10 lg:h-10 w-8  mr-2 lg:mx-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 13.5l3 3m0 0l3-3m-3 3v-6m1.06-4.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                        </svg>
                        Get docs
                    </h1>
                </div>

                <div className='flex flex-col lg:flex-row justify-evenly items-center'>
                    <div>
                        <img data-aos="slide-right" className='max-w-full h-auto mb-14 lg:p-8 md:h-[310px] lg:h-[480px]' src={svg} alt="resume" />
                    </div>

                    <div data-aos="slide-left" className="block lg:p-5 p-5 lg:mx-5 mb-5 rounded-lg shadow-lg bg-white max-w-sm">
                        <h5 className="text-blue-900 text-xl text-center leading-tight lg:font-medium mb-2">Download Resume</h5>
                        <p className="text-gray-700 text-[13px] lg:text-base my-6">
                            Click and download the resume to view the complete resume in document form
                        </p>
                        <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                            <a target={"_blank"} href={pdf}>DOWNLOAD</a>
                        </button>
                    </div>
                </div>
            </div>

            <div className={`block lg:hidden supp1 p-5 lg:p-10`}>
                <div className='mb-3'>
                    <h1 data-aos="zoom-in" className='mb-16 flex text-[25px]  rounded-xl lg:text-[30px] lg:mx-10 text-[#1d4ed8] lg:text-[white] w-[190px] p-2 cstmCard'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="lg:w-10 lg:h-10 w-8  mr-2 lg:mx-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 13.5l3 3m0 0l3-3m-3 3v-6m1.06-4.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                        </svg>
                        Get docs
                    </h1>
                </div>
                {/* <div className='lg:bg-[white] bg-[cyan] w-[58%] lg:ml-14  h-1 lg:w-[15%] rounded-xl'></div>
                <div className='lg:bg-[white] bg-[cyan] w-[70%] lg:ml-14 my-1 h-1 lg:w-[19%] rounded-xl mb-14'></div> */}

                <div className='flex flex-col lg:flex-row justify-evenly items-center'>
                    <div>
                        <img data-aos="slide-down" className='max-w-full h-auto mb-14 lg:p-8 md:h-[310px] lg:h-[480px]' src={svg} alt="resume" />
                    </div>

                    <div data-aos="slide-up" className="block lg:p-5 p-5 lg:mx-5 mb-5 rounded-lg shadow-lg bg-white max-w-sm">
                        <h5 className="text-blue-900 text-xl text-center leading-tight lg:font-medium mb-2">Download Resume</h5>
                        <p className="text-gray-700 text-[13px] lg:text-base my-6">
                            Click and download the resume to view the complete resume in document form
                        </p>
                        <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                            <a href="#">DOWNLOAD</a>
                        </button>
                    </div>
                </div>
            </div>
        </>

    )
}
