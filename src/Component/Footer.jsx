import React from 'react'
import logoTop from '../assets/images/logo-top.svg'
const Footer = () => {
    return (
        <>
            <div className="bg-[#5C6C68]  pt-[100px] pb-8">
                <div className=" px-[10px] md:px-[100px] grid grid-cols-2 md:grid-cols-3 max-w-full font-urban text-white">
                    <div className="">
                        <ul className=' space-y-5 md:space-y-10  text-md' >
                            <li>Rooms</li>
                            <li>Wellness</li>
                            <li>Gastro</li>
                            <li>Resort</li>
                        </ul>
                    </div>

                    <div className="space-y-9 md:space-y-20">
                        <div className="text-center flex items-center justify-center flex-col space-y-6">
                            <img src={logoTop} alt="Logo" className='object-contain' />
                            <h2 className='font-logo text-xl '>Courtyard Castle</h2>
                            <h5 className='text-xl'>Hotels & Resort</h5>
                        </div>
                        <div className="">
                            <p className='text-md leading-12 text-center'>
                                North street <br />
                                962 31 Colomus – Pondichery <br />
                                India
                            </p>
                        </div>

                        <div className="">
                            <p className='text-md text-center leading-12'>
                                +421 45 530 00 00 <br />
                                aeroian@resort.com <br />
                                Contacts  →
                            </p>
                        </div>
                    </div>

               

                    <div className=" space-y-6">
                        <h2 className='font-anti text-2xl md:text-[22px]'>Peaceful your stay</h2>
                        <p className='text-md'>Comfortable rooms, suites and <br />
                            villas are always ready for your visit.</p>

                            <button class="inline-block transition-all duration-200 relative overflow-hidden z-10 text-white px-7 py-2 cursor-pointer text-lg  bg-transparent border border-gray-300 shadow-lg hover:text-black hover:border-teal-500 button2">
                           Book Now
                        </button>
                    </div>

                </div>
                <div className="grid grid-cols-2 md:text-md text-[14px]  text-white pt-[40px] px-[10px] md:px-[100px]">
                    <p>Developed by Illusiview</p>
                    <p className='whitespace-nowrap'>© 2023 Courtyardcastle.com</p>
                    <p></p>
                    <p></p>
                </div>
            </div>
        </>
    )
}

export default Footer