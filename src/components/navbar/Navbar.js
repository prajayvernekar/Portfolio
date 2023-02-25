
import React, { useEffect, useState } from 'react';
import './Navbar.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom';

export default function Navbar() {
  useEffect(() => {
    AOS.init({ duration: 1500 })
  }, [])
  const [navOpen, setnavOpen] = useState(false)
  return (
    <div>

      {/* mobile view */}
      <div className={`block absolute z-40 h-screen overflow-y-auto transition-transform -translate-x-${!navOpen ? 'full' : ''} bg-gray-800 w-[70%] dark:bg-gray-800`}>
        <h5 id="drawer-navigation-label" className="text-center ml-4 mt-4 font-semibold text-gray-400 uppercase dark:text-gray-400">Menu</h5>

        <div className="py-4 overflow-y-auto">
          <ul className="space-y-2 flex justify-start items-start m-auto flex-col">
            <li className='ml-4'>
              <Link to="/" className="flex items-center p-2 text-base font-normal text-gray-200 rounded-lg dark:text-white  dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                </svg>
                <span onClick={()=>setnavOpen(false)} className="ml-3">About Me</span>
              </Link>
            </li>
            <li className='ml-4'>
              <Link to="/Resume" className="flex items-center p-2 text-base font-normal text-gray-200 rounded-lg dark:text-white dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
                <span onClick={()=>setnavOpen(false)} className="ml-3">Resume</span>
              </Link>
            </li>
            <li className='ml-4'>
              <Link to="/Cards" className="flex items-center p-2 text-base font-normal text-gray-200 rounded-lg dark:text-white dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z" />
                </svg>
                <span onClick={()=>setnavOpen(false)} className="ml-3">Projects</span>
              </Link>
            </li>
            <li className='ml-4'>
              <Link to="/ContactMe" className="flex items-center p-2 text-base font-normal text-gray-200 rounded-lg dark:text-white dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span onClick={()=>setnavOpen(false)} className="ml-3">Contacts</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>


      {/* PC view */}
      <nav data-aos="zoom-out" className="border-gray-200 lg:p-1 p-4 sm:px-4 bg-gray-900  dark:bg-gray-900">
        <div className="container flex md:flex-wrap items-center justify-between mx-auto">
          <a href="" className="flex items-center">
            <img src="images\jaylogo.png" className="h-[60px] mr-3 lg:h-[85px]" alt="Flowbite Logo" />
          </a>
          <button onClick={() => setnavOpen(!navOpen)} type="button" className="border-dashed border-2 border-sky-500 inline-flex items-center p-2 mr-3 text-sm text-gray-300 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-900 dark:text-gray-400 dark:hover:bg-gray-900 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            {!navOpen ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
            </svg>
              :
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>}
          </button>

          <div className={`hidden w-full md:block md:w-auto`} >
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-800 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-gray-900 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link to="/" className="CstmNavBtn m-2  text-[17px] block pl-3 pr-4 text-gray-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  <div className="flex items-center ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                    </svg>
                    <p className="ml-2">About Me</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/Resume" className="CstmNavBtn  m-2 text-[17px] block pl-3 pr-4 text-gray-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  <div className="flex items-center ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                    <p className="ml-2">Resume</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/Cards" className="CstmNavBtn  m-2 text-[17px] block pl-3 pr-4 text-gray-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  <div className="flex items-center ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z" />
                    </svg>
                    <p className="ml-2">Projects</p>
                  </div>
                </Link>              
              </li>
              <li>
                <Link to="/ContactMe" className="CstmNavBtn  m-2 text-[17px] block pl-3 pr-4 text-gray-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  <div className="flex items-center ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="ml-2">Contact</p>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </div>
  )
}
