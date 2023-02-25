import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Footer() {
    useEffect(()=>{
        AOS.init({duration:1500})
      }, [])
    return (
        <>
            <footer class="p-4 bg-gray-900 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-900">
                <a href="" className="flex items-center justify-center sm:mb-0">
                    <img src="images\jaylogo.png" className="h-[80px] ml-3" alt="Flowbite Logo" />
                </a>
                <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li className='lg:mx-8'>
                        <div className='text-left m-2'>Call</div>
                        <div className='text-left m-2'>6362491546</div>
                    </li>
                    <li className='lg:mx-8'>
                        <div className='text-left m-2'>Mail</div>
                        <div className='text-left m-2'>Prajayvernekar2001@gmail.com</div>
                    </li>
                    <li className='lg:mx-8'>
                        <div className='text-left m-2'>Follow</div>
                        <div className='text-left m-2'>
                            <a target={"_blank"} href="https://www.facebook.com/prajay.vernekar.73"><i className="fa-brands fa-facebook-f text-[20px] mr-4"></i></a>
                            <a target={"_blank"} href="https://www.instagram.com/prajay_2001/"><i className="fa-brands fa-instagram text-[20px] mx-4"></i></a>
                            <a target={"_blank"} href="https://www.linkedin.com/in/prajay-vernekar-a42255227/"><i className="fa-brands fa-linkedin-in text-[20px] mx-4"></i></a>
                        </div>
                    </li>
                </ul>
            </footer>

        </>





    )
}
