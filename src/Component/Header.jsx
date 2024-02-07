import React, { useState, useEffect } from 'react'
// import menu from '../assets/images/menu-icon.svg'
import cross from '../assets/images/int.svg'
import { Link } from 'react-router-dom'
import './Animation.css'

const Header = () => {


    const [nav, setNav] = useState(false);

    const [visible, setVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        const isScrollingUp = prevScrollPos > currentScrollPos;

        setPrevScrollPos(currentScrollPos);

        if (isScrollingUp || currentScrollPos < 10) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    useEffect(() => {
        // Add event listener when the component mounts
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);






    return (
        <>
            <div className="nav bg-cover bg-center bg-no-repeat fixed  top-0 z-50 left-0"
                style={{
                    background: 'linear-gradient(111deg, rgba(255, 255, 255, 0.40) -8.95%, rgba(255, 255, 255, 0.01) 114%)',
                    backdropFilter: 'blur(50px)', display: visible ? 'block' : 'none'
                }}
            >

                {/* top nav */}

                <div className=" px-[10px] md:px-[100px]  flex justify-between items-center border-b border-gray-300  py-[10px]">
                    <div className="left-nav">

                        <div>
                            <button class="relative group" onClick={() => setNav(!nav)}>
                                <div class="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all duration-200 ">
                                    <div class="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                                        <div class="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:rotate-[42deg]"></div>
                                        <div class="bg-white h-[2px] w-1/2 rounded transform transition-all duration-300 group-focus:-translate-x-10"></div>
                                        <div class="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:-rotate-[42deg]"></div>
                                    </div>
                                </div>
                            </button>
                        </div>

                        {/* <img src={menu} alt="" onClick={() => setNav(!nav)} className='cursor-pointer  px-3 py-2 rounded-lg' /> */}

                        {nav ? <div className=" nav-bg-color z-20  w-screen absolute top-0 left-0 h-screen  transition duration-[2000ms] ease-in-out">
                            <div className="grid grid-cols-1 md:grid-cols-3  items-start justify-center h-screen">
                                <div className="right mx-auto">
                                    <img src={cross} alt="" className='opacity-60 w-[60px] h-[60px] mt-3 md:ml-20 cursor-pointer' onClick={() => setNav(false)} />
                                    <ul className='space-y-16 md:space-x-0 inline-block w-[80vw] px-[100px] mt-16'>

                                        <li><Link to='/rooms' onClick={() => setNav(false)} className='text-5xl text-white font-anti cursor-pointer hover:text-[#ccc] '><span className='hover:tracking-[5px] inline-block'>Rooms</span></Link></li>
                                        <li><Link to='/menu' onClick={() => setNav(false)} className='text-5xl text-white font-anti cursor-pointer hover:text-[#ccc] hover:scale-x-50'><span className='hover:tracking-[5px] inline-block'>Dinning</span></Link></li>
                                        <li><Link to='/about' onClick={() => setNav(false)} className='text-5xl text-white font-anti cursor-pointer hover:text-[#ccc] hover:scale-x-50'><span className='hover:tracking-[5px] inline-block'>Story</span></Link></li>
                                        <li><Link to='/gallery' onClick={() => setNav(false)} className='text-5xl text-white font-anti cursor-pointer hover:text-[#ccc] hover:scale-x-50'><span className='hover:tracking-[5px] inline-block'>Gallery</span></Link></li>

                                    </ul>
                                </div>

                                {/* nav-right add */}
                                <div className="hidden md:block"></div>
                                <div className="bg-[#5C6C68] h-screen items-center justify-center md:flex hidden ">
                                    <div className="nav-right-add text-white text-center space-y-8">
                                        <h2 className='text-white text-5xl font-bold font-logo'>Courtyard</h2>
                                        <p className='text-xl'><span className='text-2xl '>Courtyard Castle</span> <br />Lactus Street-Silicon Middle <br />Pondichery - India</p>
                                        <p className='text-xl'>courtyardcastle@gmail.com <br />+91 42345672</p>
                                    </div>

                                </div>
                            </div>

                        </div>
                            : null
                        }

                    </div>
                    <div className="center-nav">
                        <Link to='/'> <h3 className='font-logo text-[16px] md:text-2xl font-bold text-white'>Courtyard </h3></Link>
                    </div>
                    <div className="right-nav">

                        <button class="inline-block transition-all duration-200 relative overflow-hidden z-10 text-white md:px-7 px-3 md:py-2 py-1 cursor-pointer text-lg  bg-transparent border border-gray-300 shadow-lg hover:text-black  button2">
                            Book Now
                        </button>

                        {/* <button className=''>Book Now</button> */}
                    </div>
                </div>
                {/* bottom nav */}
                <div className="bot-nav border-b border-gray-300 text-white">
                    <ul className='flex items-center border-b-transparent justify-center w-screen space-x-2 md:space-x-12 '>
                        <Link to='/about'><li className={nav ? " text-[12px]  md-text-md text-xl p-[10px] border-b-2 cursor-pointer" : "text-xl p-[10px] hover:border-b-2 cursor-pointer"} >Our Story</li></Link>
                        <Link to='/rooms'><li className={nav ? " text-[12px]  md-text-md text-xl p-[10px] border-b-2 cursor-pointer" : "text-xl p-[10px] hover:border-b-2 cursor-pointer"}>Rooms</li></Link>
                        <Link to='/'><li className={nav ? " text-[12px]  md-text-md text-xl p-[10px] border-b-2 cursor-pointer" : "text-xl p-[10px] hover:border-b-2 cursor-pointer"}>Events</li></Link>
                        <Link to='/menu'> <li className={nav ? " text-[12px]  md-text-md text-xl p-[10px] border-b-2 cursor-pointer" : "text-xl p-[10px] hover:border-b-2 cursor-pointer"}>Dinning</li></Link>
                    </ul>
                </div>


            </div>



        </>
    )
}

export default Header