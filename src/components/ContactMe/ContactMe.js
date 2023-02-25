import React from 'react'

export default function ContactMe() {
    return (
        <div>

            <div>
                <div className='lg:pt-10 hidden lg:block'>
                    <h1 className=' flex text-[25px] border-solid border-gray-900 rounded-xl lg:text-[30px] lg:mx-10 bg-white text-[#1d4ed8] lg:text-[#00c8ff] w-[270px] p-2 cstmCard'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="lg:w-10 lg:h-10 w-8  mr-2 lg:mx-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Contact Me
                    </h1>
                </div>

                <div className=' lg:mt-15 px-5 pt-10 block lg:hidden'>
                    <h1 className='lg:mb-16 flex text-[25px] border-solid border-gray-900 rounded-xl lg:text-[30px] lg:mx-10 bg-white text-[#1d4ed8] lg:text-[#00c8ff] w-[210px] p-2 cstmCard'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="lg:w-10 lg:h-10 w-8  mr-2 lg:mx-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Contact Me
                    </h1>
                </div>
            </div>

            <section className="text-gray-600 body-font relative" >
                <div className="container px-5 py-16 mx-auto flex sm:flex-nowrap flex-wrap">
                    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                        <iframe width="100%" height="100%" className="absolute inset-0" frameBorder="0" title="map" marginHeight="0" marginWidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=sadashivgad+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }}></iframe>
                        <div className="bg-white relative flex flex-wrap py-6 right-5 lg:left-5 rounded shadow-md ">
                            <div className="lg:w-1/2 px-6">
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                                <p className="mt-1 text-sm lg:text-lg">Kanasgiri Road Navadurga Nagar Sadashivgad Karwar</p>
                            </div>
                            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                                <a className="text-blue-500 leading-relaxed text-sm lg:text-lg">prajayvernekar2001@gmail.com</a>
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                                <p className="leading-relaxed text-sm lg:text-lg">6362491546</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
                        <p className="leading-relaxed mb-5 text-gray-600">Give your Feedback through below</p>
                        <div className="relative mb-4">
                            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                            <input type="text" id="name" name="name" autoComplete='off' className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                            <input type="email" id="email" name="email" autoComplete='off' className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                            <textarea id="message" name="message" autoComplete='off' className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                        </div>
                        <button className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Submit</button>
                    </div>
                </div>
            </section>
        </div>
    )
}
