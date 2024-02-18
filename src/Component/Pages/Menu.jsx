import React, { useEffect, useRef, useState } from 'react'
import bg from '../../assets/images/bg-1.png'
import downarrow from '../../assets/images/down-arrow.svg'
import circleText from '../../assets/images/circle-text.png'
import sideBg from '../../assets/images/menu-side-1.png'
import foodOne from '../../assets/images/food-1.png'
import foodTwo from '../../assets/images/food-2.png'
import foodThree from '../../assets/images/food-3.png'
import bannerOne from '../../assets/images/banner-1.png'
import iconOne from '../../assets/images/icon-1.svg'
import iconTwo from '../../assets/images/icon-2.svg'
import iconThree from '../../assets/images/icon-3.svg'
import sideImg from '../../assets/images/side-img.png'
import disOne from '../../assets/images/dis-1.png'
import disTwo from '../../assets/images/dis-2.png'
import disThree from '../../assets/images/dis-3.png'
import disFour from '../../assets/images/dis-4.png'
import disFive from '../../assets/images/dis-5.png'
import disSix from '../../assets/images/dis-6.png'
import disSeven from '../../assets/images/dis-7.png'
import secondBanner from '../../assets/images/secondBanner.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitText from '../../../node_modules/gsap-trial/dist/SplitText'
// import { MdArrowRightAlt } from "react-icons/md";


const images = [
    {
        id: 1,
        img: disOne,
        list: 'Dindugal Thalapakatti  Chicken Biriyani ',
    },
    {
        id: 2,
        img: disTwo,
        list: 'Natukozhi Kadai Chicken',
    },
    {
        id: 3,
        img: disThree,
        list: 'Aatukkal paaya/Mutton trotters stew',
    },
    {
        id: 4,
        img: disFour,
        list: 'Mutton curry dosa',
    },
    {
        id: 5,
        img: disFive,
        list: 'Nandu masala/Crab curry',
    },
    {
        id: 6,
        img: disSix,
        list: 'Chettinad fish curry',
    },
    {
        id: 7,
        img: disSeven,
        list: ' Vendhaya Keerai sambar',
    },


]

const Menu = () => {



    const [activeImage, setActiveImage] = useState(null)

    const handleItemClick = (item) => {
        setActiveImage(item);
      };

    const ref = useRef(null);

    useEffect(() => {
        const split = new SplitText(ref.current, { type: 'chars, words' });

        gsap.set(split.chars, { opacity: 0, y: 20 });

        ScrollTrigger.batch(split.chars, {
            onEnter: batch => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.02, overwrite: true }),
            onLeave: batch => gsap.set(batch, { opacity: 0, y: -20, overwrite: true }),
            onEnterBack: batch => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.02, overwrite: true }),
            onLeaveBack: batch => gsap.set(batch, { opacity: 0, y: 20, overwrite: true }),
            start: 'top bottom',
            end: 'bottom top'
        });

        return () => {
            split.revert();
        };
    }, []);
    const ref2 = useRef(null);

    useEffect(() => {
        const split = new SplitText(ref2.current, { type: 'chars, words' });

        gsap.set(split.chars, { opacity: 0, y: 20 });

        ScrollTrigger.batch(split.chars, {
            onEnter: batch => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.02, overwrite: true }),
            onLeave: batch => gsap.set(batch, { opacity: 0, y: -20, overwrite: true }),
            onEnterBack: batch => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.02, overwrite: true }),
            onLeaveBack: batch => gsap.set(batch, { opacity: 0, y: 20, overwrite: true }),
            start: 'top bottom',
            end: 'bottom top'
        });

        return () => {
            split.revert();
        };
    }, []);


    useEffect(() => {
        AOS.init();
    }, []);




    return (
        <>
            <div className="slider  h-screen w-full sticky top-0 bg-gradient-to-tl from-gray-700 to-gray-700 -z-10" >
                <div className="h-screen  bg-center bg-cover bg-no-repeat object-contain w-full absolute mix-blend-overlay" style={{ backgroundImage: `url(${bg})` }}>
                </div>

            </div>

            <div className="h-screen absolute top-1/2 left-1/2 -z-10  transform -translate-x-1/2 -translate-y-1/2">

                <div className="h-screen items-center justify-center flex flex-col text-center text-white space-y-10" >
                    <h1 className='font-anti text-5xl md:text-[80px] font-w-[400px]'>Courtyard Castle</h1>
                    <p className='font-curban text-2xl anim' ref={ref2}>
                        Culinary art is an important part of the <br />
                        unforgettable experience
                    </p>
                </div>



            </div>

            {/* scroll donw */}

            <div className="absolute bottom-14 right-20 hidden md:block">
                <div className="  w-[100px] h-[100px] rounded-full bg-center bg-cover bg-no-repeat " style={{ backgroundImage: `url(${circleText})` }}>
                    <img src={downarrow} alt="scroll=down" className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[20px] animate-ping aimate-bounse' />
                </div>

            </div>


            {/* second section  */}
            <div className="bg-white h-max">

                <div className=" h-[300px] md:h-screen items-center justify-center flex text-center  px-[20px] md:px-[100px] text-[#5C6C68]">
                    <h2 className='text-2xl md:text-[64px] leading-snug  font-anti anim' ref={ref}>The idea of "Courtyard Castle" was born out of an enthusiasm for great food and culture.</h2>
                </div>


                <div className=" px-[20px] md:px-[100px] w-full  relative h-[400px] flex items-start justify-between">
                    <div className=''>
                        <h2 className='text-[#5C6C68] text-2xl font-anti absolute -left-16 md:left-0  rotate-[-90deg]'>Hotel & Resorts <span data-aos='fade-down' data-aos-delay='600' className='border-b-3 w-24 h-[1px] bg-[#5C6C68] inline-block'></span></h2>
                    </div>
                    <img src={sideBg} alt="line-border" className='object-contain w-[210px] h-[300px] absolute top-[10px] right-0 ' data-aos='zoom-in' data-aos-delay='600' />

                    <div className=" ">
                        <h2 className='text-4xl md:text-[128px] text-[#5C6C68] font-anti opacity-50' >Delicious</h2>

                        <h4 className='text-[#5C6C68] font-urban text-2xl md:text[40px]  absolute text-center bottom-0 left-1/2 -translate-x-1/2 '>
                            COMPLETE YOUR DINNER WITH AN OVERNIGHT STAY IN LA SUITE
                        </h4>
                    </div>
                </div>

                {/* specialize */}

                <div className="grid grid-cols-1 md:grid-cols-2  px-[10px] md:px-[100px] text-[#5C6C68] mt-[100px] mb-12 font-urban">
                    <div className="md:px-[30px]">
                        <p className='border-t-2 border-b-2 w-fit'>SPECIALIZE</p>
                        <h2 className='text-2xl md:text-[64px] leading-tight'>
                            Always fresh <br />
                            ingredients
                        </h2>
                        <p className='text-xl my-8' data-aos='zoom-out' data-aos-delay='600'>
                            The people, food and the prime locations make Rodich the perfect place good friends & family to come together and have great time.
                        </p>
                    </div>
                    <div className="">
                        <img src={foodOne} alt="food-plate" className='object-contain w-[500px]' data-aos='zoom-in' data-aos-delay='600' />
                    </div>
                </div>

                {/* next section */}

                <div className="relative">
                    <div className="absolute h-[300px] md:bg-[#DEE2E1] w-full bottom-0 -z-10"></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 px-[10px] md:px-[100px] pb-20 text-[#5C6C68] mt-[100px]  font-urban">
                        <div className="">
                            <img src={foodTwo} alt="food-dish" className='object-contain' data-aos='zoom-in' data-aos-delay='600' />
                        </div>
                        <div className="md:px-[40px]">
                            <p className='border-t-2 border-b-2 w-fit'>SPECIALIZE</p>
                            <h2 className='text-2xl md:text-[56px] leading-tight'>
                                We invite you to <br />
                                visit our restaurant
                            </h2>
                            <p className=' text-xl my-8'>
                                The people, food and the prime locations make Rodich the perfect place good friends & family to come together and have great time.
                            </p>
                        </div>

                    </div>
                </div>

                <div className="w-full bg-cover bg-no-repeat bg-center  h-[300px] object-contain" style={{ backgroundImage: `url(${bannerOne})` }}>

                    <div className="grid grid-cols-1 md:grid-cols-3 items-center px-[10px] md:px-[100px] h-[300px] text-white  font-urban">

                        <div className="flex flex-col items-center space-y-2" data-aos='fade-down' data-aos-delay='600'>
                            <img src={iconOne} alt="icon" className='w-[40px] md:w-[60px]' />
                            <h2 className=' text-md md:text-xl'>Fresh Coldpressed Oil</h2>

                        </div>
                        <div className="flex flex-col items-center space-y-2  min-w-fit" data-aos='fade-up' data-aos-delay='600'>
                            <img src={iconTwo} alt="icon" className='w-[40px] md:w-[60px]' />
                            <h2 className='text-md md:text-xl'>Authentic Skilled Chefs</h2>

                        </div>
                        <div className="flex flex-col items-center space-y-2" data-aos='fade-down' data-aos-delay='600'>
                            <img src={iconThree} alt="icon" className='w-[40px] md:w-[60px]' />
                            <h2 className=' text-md md:text-xl'>Freshly Cooked Food</h2>

                        </div>
                    </div>
                </div>

                <div className="relative">
                    <img src={sideImg} alt="food" className='absolute w-[210px] h-[300px] right-0 -top-28' data-aos='zoom-in' data-aos-delay='600' />
                    <div className="my-[100px] px-[10px] md:px-[100px]">

                        <h2 className='text-3xl md:text-[128px]  text-[#5C6C68] font-anti opacity-50' data-aos='zoom-in' data-aos-delay='600'>Menus</h2>
                    </div>
                </div>

                <div className="text-[#5C6C68] grid grid-cols-1 md:grid-cols-2 gap-3 md:px-[100px] px-[10px] md:h-auto">
                    <div className="relative">
                        {
                            activeImage? (
                                <img
                                
                                src={activeImage.img}
                                alt="food"
                                className={`object-contain md:h-[100vh] h-[60vh] md:mt-0 mt-2 w-full absolute transition-opacity duration-500`}
                                data-aos='zoom-in'
                                data-aos-delay='600'
                            />
                            ):(
                                <img
                                
                                src={disOne}
                                alt="food"
                                className={`object-contain md:h-[100vh] h-[50vh] absolute transition-opacity duration-500`}
                                data-aos='zoom-in'
                                data-aos-delay='600'
                            />
                            )
                        }
                    </div>
                    <div>
                        <h2 className='text-xl  md:text-[54px] my-1 md:my-2 leading-snug'>Try Our Authentic Menu</h2>
                        <ul className='space-y-1 relative md:space-y-2 list-none text-md md:text-[26px]'>
                            {images.map((item) => (
                                <li
                                    key={item.id}
                                    className='list cursor-pointer'
                                    onMouseOver={()=>handleItemClick(item)}  
                                >
                                    {item.list} <span className='inline-block transform transition-transform hover:translate-x-2'>→</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>


                {/* third */}

                <div className="relative">
                    <div className="absolute h-[300px] bg-[#DEE2E1] w-full bottom-0 -z-10">

                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 items-end px-[10px] md:px-[100px] pb-20 text-[#5C6C68] mt-[100px] md:mt-[300px]  font-urban">

                        <div className="">

                            <h2 className='text-2xl md:text-[64px] leading-tight'>
                                Come and Explore <br />
                                our Authentic Foods
                            </h2>
                            <p className='text-xl my-8'>
                                The people, food and the prime locations make Rodich the perfect place good friends & family to come together and have great time.
                            </p>
                        </div>

                        <div className="">
                            <img src={foodThree} alt="" className='object-contain ' data-aos='zoom-in' data-aos-delay='600' />
                        </div>

                    </div>
                </div>


                {/* second banner */}

                <div className=" h-[50vh] md:h-screen bg-center w-full bg-cover bg-no-repeat text-white flex justify-center items-center space-y-10 flex-col" style={{ backgroundImage: `url(${secondBanner})` }}>

                    <h2 className='font-anti text-3xl md:text-[64px] text-center'>Stay Tuned For the Delicious Food </h2>

                    <p className='font-urban text-xl'>Coming Soon
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="134" height="16" viewBox="0 0 234 16" fill="none">
                                <path d="M233.71 8.70407C234.099 8.31187 234.096 7.67871 233.704 7.28986L227.313 0.953276C226.921 0.564431 226.288 0.567148 225.899 0.959345C225.51 1.35154 225.513 1.9847 225.905 2.37355L231.586 8.00607L225.953 13.6871C225.564 14.0793 225.567 14.7125 225.959 15.1014C226.352 15.4902 226.985 15.4875 227.374 15.0953L233.71 8.70407ZM0.00429181 9.99999L233.004 8.99999L232.996 7.00001L-0.00429181 8.00001L0.00429181 9.99999Z" fill="white" />
                            </svg>
                        </span>
                    </p>

                </div>
            </div>
        </>
    )
}

export default Menu