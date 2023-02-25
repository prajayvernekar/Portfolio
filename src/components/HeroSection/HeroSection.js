import React, { useEffect } from 'react'
import "./HeroSection.css"
import AOS from 'aos'
import 'aos/dist/aos.css'
import Typed from "react-typed"

export default function HeroSection() {
    useEffect(() => {
        AOS.init({ duration: 1500 })
    }, [])
    return (
        <>
            <div className='lg:hidden flex justify-center supp1  p-[50px] lg:p-[110px] '>
                <div className='flex justify-center items-center flex-col lg:flex-row'>
                    <div data-aos="slide-up" className='cstmCard w-[300px] rounded-t-[15px] rounded-b-[15px]'>
                        <div className='lg:pt-10 rounded-t-[15px]  lg:pb-7 pt-5 pb-4 prabg-c flex justify-center items-center flex-col px-[20px] lg:px-[70px]'>
                            <img className='lg:h-[240px] lg:w-[240px] h-[190px] w-[190px] rounded-[50%] border-solid border-8 border-white' src="images\prajayRightLogo.png" alt="" />
                            <h3 className='font-bold text-[20px] my-[25px] PrajayName text-center m-0'>PRAJAY <br /> VERNEKAR</h3>
                            <div className='w-[50px] h-[3px] bg-blue-800 '></div>
                            <p className='text-[20px] mt-[25px] w-[250px] text-center'>Front-end developer</p>
                        </div>
                        <div className='rounded-b-[15px] flex justify-center p-[20px] bg-[#f3fbff]'>
                            <i className="fa-brands fa-facebook-f text-[20px] mx-4"></i>
                            <i className="fa-brands fa-instagram text-[20px] mx-4"></i>
                            <i className="fa-brands fa-linkedin-in text-[20px] mx-4"></i>
                        </div>
                    </div>
                    <div className='hidden lg:flex lg:flex-col lg:w-[380px] lg:px-[20px] bg-[#f3fbff]'>
                        <h1 className='text-[80px] text-center mt-6 mb-2'>Hello</h1>
                        <h3 className='text-[19px] text-center mb-8'>heres who i am & what i do</h3>
                        <p className='text-[13px]'>
                            Welcome to my portfolio website. I am a insert your profession, with insert number years of experience in insert your area of expertise. Throughout my career, I have worked with a variety of clients and projects, developing expertise in insert specific skills or tools you use.
                            My portfolio
                        </p>
                    </div>

                    <div data-aos="fade-up" data-aos-offset="80" className='mt-8 lg:w-[380px] lg:px-[20px] text-black bg-[#00C8FF]'>
                        <h1 className='text-[80px] text-center mt-6 mb-2'>Hello</h1>
                        <h3 className='text-[18px] text-center mb-8'>
                            <Typed
                                strings={[
                                    "Here's who i am and what i do",
                                ]}
                                typeSpeed={150}
                                backSpeed={100}
                                loop
                            />
                        </h3>
                        <p className='text-[13px] text-center'>
                            Hi, I'm Prajay Vernekar, a front-end developer building responsive, user-friendly interfaces for web applications. I create dynamic and visually appealing websites and applications.
                            I'm always looking for new opportunities to learn and grow as a developer, and I stay up-to-date with the latest trends and technologies in front-end development.
                        </p>
                    </div>
                </div>
            </div>
            {/* bg-[#9ceffc] */}


            <div className='lg:flex hidden justify-center supp  p-[110px] '>
                <div data-aos="slide-right" className='flex flex-col lg:flex-row'>
                    <div className='cstmCard rounded-tl-[15px] rounded-b-[15px]'>
                        <div className='lg:pt-10 lg:pb-7 rounded-tl-[15px] pt-5 pb-4 prabg-c flex justify-center items-center flex-col px-[20px] lg:px-[70px]'>
                            <img data-aos="slide-left" className='lg:h-[240px] lg:w-[240px] h-[190px] w-[190px] rounded-[50%] border-solid border-8 border-white' src="images\prajayRightLogo.png" alt="" />
                            <h3 className='font-bold text-[25px] my-[25px] PrajayName text-center m-0'>PRAJAY <br /> VERNEKAR</h3>
                            <div className='w-[50px] h-[3px] bg-blue-800 '></div>
                            <p className='text-[20px] mt-[25px] w-[250px] text-center'>Front-end developer</p>
                        </div>
                        <div className='rounded-bl-[15px] flex justify-center p-[20px] bg-[#f3fbff]'>
                            <a target={"_blank"} href="https://www.facebook.com/prajay.vernekar.73"><i className="fa-brands fa-facebook-f text-[20px] mx-4"></i></a>
                            <a target={"_blank"} href="https://www.instagram.com/prajay_2001/"><i className="fa-brands fa-instagram text-[20px] mx-4"></i></a>
                            <a target={"_blank"} href="https://www.linkedin.com/in/prajay-vernekar-a42255227/"><i className="fa-brands fa-linkedin-in text-[20px] mx-4"></i></a>
                        </div>
                    </div>
                    <div className='hidden rounded-r-[15px] lg:flex lg:flex-col lg:w-[380px] lg:px-[20px] bg-[#f3fbff] border-y-2 border-r-2'>
                        <h1 className='text-[80px] text-center mt-6 mb-2'>Hello</h1>
                        <h3 className='text-[19px] text-center mb-8'>
                            <Typed
                                strings={[
                                    "Here's who i am and what i do",
                                ]}
                                typeSpeed={150}
                                backSpeed={100}
                                loop
                            />
                        </h3>
                        <p className='text-[13px] text-center'>
                            Hi, I'm Prajay Vernekar, a front-end developer building responsive, user-friendly interfaces for web applications. I create dynamic and visually appealing websites and applications.
                            I'm always looking for new opportunities to learn and grow as a developer, and I stay up-to-date with the latest trends and technologies in front-end development.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
