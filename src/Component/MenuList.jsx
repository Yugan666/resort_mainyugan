import React, { useState } from 'react'
import disOne from '../assets/images/dis-1.png'
// import disTwo from '../assets/images/dis-2.png'
// import disThree from '../assets/images/dis-3.png'
// import disFour from '../assets/images/dis-4.png'
// import disFive from '../assets/images/dis-5.png'
// import disSix from '../assets/images/dis-6.png'
// import disSeven from '../assets/images/dis-7.png'
import { MdArrowRightAlt } from "react-icons/md"
import './Animation.css'

const MenuList = () => {
  
    const[imgs,setImgs] =useState(false)
  return (
    <div>

        <>
        <div className="text-[#5C6C68] grid grid-cols-2 gap-3 md:px-[100px] px-[10px]  md:h-auto">
                <div className="">
                    {imgs ?
                    <div className="listoneimg">
                        <img src={disOne} alt="foodList" className='object-contain h-[100vh]' data-aos='zoom-in' data-aos-delay='600' />
                    </div>:null
                    }
                </div>
                <div className="">
                    <h2 className='text-xl md:text-[54px] my-3 md:my-2 leading-snug'>Try Our Authentic Menu</h2>

                    <ul className=' space-y-3 md:space-y-5 list-none text-md md:text-[26px]'>
                        <li className='list' onMouseOver={setImgs(!imgs)}>
                            Dindugal Thalapakatti  Chicken Biriyani <span><MdArrowRightAlt /></span>
                        </li>
                        <li className='list'>
                            Natukozhi Kadai Chicken <span><MdArrowRightAlt /></span>
                        </li>
                        <li className='list'>
                            Aatukkal paaya/Mutton trotters stew <span><MdArrowRightAlt /></span>
                        </li>
                        <li className='list'>
                            Mutton curry dosa <span><MdArrowRightAlt /></span>
                        </li>
                        <li className='list'>
                            Nandu masala/Crab curry <span><MdArrowRightAlt /></span>
                        </li>
                        <li className='list'>
                            Chettinad fish curry <span><MdArrowRightAlt /></span>
                        </li>
                        <li className='list'>
                            Vendhaya Keerai sambar <span><MdArrowRightAlt /></span>
                        </li>
                    </ul>

                </div>
            </div>
        
        </>
    </div>
  )
}

export default MenuList