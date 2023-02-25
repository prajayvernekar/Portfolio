import React from 'react';

export default function language(props) {
    return (

        <div id='Language' className={`p-5 ${props.smalll} lg:${props.big}`} style={{ backgroundImage: `linear-gradient(to ${props.direction}, rgb(0, 200, 255) 62% ,  white 38%)` }}>

            <div className=' lg:mt-15 pt-10 hidden lg:block'>
                <h1 className=' mb-5 flex text-[25px] border-solid border-gray-900 rounded-xl lg:text-[30px] lg:mx-10 bg-white text-[#1d4ed8] lg:text-[#00c8ff] w-[250px] p-2 cstmCard'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="lg:w-10 lg:h-10 w-8  mr-2 lg:mx-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                    </svg>
                    Language
                </h1>
            </div>

            <div className=' lg:mt-15 py-5 block lg:hidden'>
                <h1 className=' mb-5 lg:mb-16 flex text-[25px] border-solid border-gray-900 rounded-xl lg:text-[30px] lg:mx-10 bg-white text-[#1d4ed8] lg:text-[#00c8ff] w-[190px] p-2 cstmCard'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="lg:w-10 lg:h-10 w-8  mr-2 lg:mx-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                    </svg>
                    Language
                </h1>
            </div>

            <div className='hidden lg:flex lg:flex-row flex-col justify-evenly items-center pb-16' >

                <div>
                    <div style={{ backgroundImage: `linear-gradient(to right, white 63% ,  rgb(0, 200, 255) 37%)` }} className="block m-3 p-6 my-7 bg-white border border-gray-200 rounded-xl shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">English</h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">Proffessional working Proficiency</p>
                    </div>
                </div>

                <div>
                    <div style={{ backgroundImage: `linear-gradient(to right, white 63% ,  rgb(0, 200, 255) 37%)` }} className="block max-w-sm p-6 my-7 bg-white border border-gray-200 rounded-xl shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Hindi</h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">Native or Bilingual Proficiency</p>
                    </div>
                </div>

                <div>
                    <div style={{ backgroundImage: `linear-gradient(to right, white 63% ,  rgb(0, 200, 255) 37%)` }} className="block max-w-sm p-6 my-7 bg-white border border-gray-200 rounded-xl shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Konkani</h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">Native or Bilingual Proficiency</p>
                    </div>
                </div>

            </div>


            <div className='lg:hidden flex lg:flex-row flex-col justify-evenly items-center pb-7' >

                <div>
                    <div data-aos="fade-up" className="block m-3 p-6 my-7 bg-white border border-gray-200 rounded-xl shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">English</h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">Proffessional working Proficiency</p>
                    </div>
                </div>

                <div>
                    <div data-aos="fade-up" className="block max-w-sm p-6 my-7 bg-white border border-gray-200 rounded-xl shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Hindi</h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">Native or Bilingual Proficiency</p>
                    </div>
                </div>

                <div>
                    <div data-aos="fade-up" className="block max-w-sm p-6 my-7 bg-white border border-gray-200 rounded-xl shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Konkani</h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">Native or Bilingual Proficiency</p>
                    </div>
                </div>

            </div>

        </div>
    )
}
