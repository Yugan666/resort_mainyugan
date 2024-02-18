import React, { useEffect, useRef } from 'react'
import './Animation.css'
import downarrow from '../assets/images/down-arrow.svg'
import circleText from '../assets/images/circle-text.png'
import r1 from '../assets/images/r-1.png'
import r2 from '../assets/images/r-2.png'
import r3 from '../assets/images/r-3.png'
// import ExpolareSlider from './ExpolareSlider'
import story from '../assets/images/story.png'
import { FaArrowRightLong } from "react-icons/fa6";
import gallery1 from '../assets/images/g-1.png'
import gallery2 from '../assets/images/g-2.png'
import gallery3 from '../assets/images/g-3.png'
import gallery4 from '../assets/images/g-4.png'
import gallery5 from '../assets/images/g-5.png'
import imgOne from '../assets/images/images-1.png'
import imgTwo from '../assets/images/images-2.png'
import imgThree from '../assets/images/images-3.png'
import hero1 from '../assets/images/hero-1.png';
import hero2 from '../assets/images/hero-2.png';
import hero3 from '../assets/images/hero-3.png';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TestiData from './TestiData'
import AOS from 'aos';
import 'aos/dist/aos.css';
import ExpolareSlider from './ExpolareSlider'
import SplitText from '../../node_modules/gsap-trial/dist/SplitText'
import SliderPage from './Slider'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom'


gsap.registerPlugin(ScrollTrigger, SplitText);

const Hero = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(".your-image-class", {
            scale: 1,
            ease: "none",
            scrollTrigger: {
                trigger: ".your-image-class",
                start: "top bottom", // when the top of the trigger hits the bottom of the viewport
                end: "bottom top", // when the bottom of the trigger hits the top of the viewport
                scrub: true
            }
        });
    }, []);

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
    const ref3 = useRef(null);

    useEffect(() => {
        const split = new SplitText(ref3.current, { type: 'chars, words' });

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


    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
    };

    return (
        <>

            <div className="slider sticky top-0 h-screen w-full bg-gradient-to-tl from-gray-700 to-gray-700 -z-10" >
                <Slider {...settings} className='bg-hero '>
                    <img src={hero2} alt="hero-bg" className='bg-cover bg-no-repeat bg-center h-screen w-full' />
                    <img src={hero1} alt="hero-bg" className='bg-cover bg-no-repeat bg-center h-screen w-full' />
                    <img src={hero3} alt="hero-bg" className='bg-cover bg-no-repeat bg-center h-screen w-full' />

                </Slider>

            </div>


            <div className="h-screen absolute top-1/2 left-1/2 -z-10  transform -translate-x-1/2 -translate-y-1/2">
                <div className="h-screen items-center justify-center flex flex-col text-center text-white space-y-10">
                    <h1 className='font-anti text-5xl md:text-[80px] font-w-[400px]'>Courtyard Castle</h1>
                    <p className='font-curban text-2xl anim' ref={ref3}>
                        Culinary art is an important part of the <br />
                        unforgettable experience
                    </p>
                </div>



            </div>

            {/* scroll donw */}

            <div className="absolute bottom-14 right-20 hidden md:block overflow-hidden">
                <div className="  w-[100px] h-[100px] rounded-full bg-center bg-cover bg-no-repeat " style={{ backgroundImage: `url(${circleText})` }}>
                    <img src={downarrow} alt="down-arrow" className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[20px] animate-ping aimate-bounse' />
                </div>

            </div>
            {/* second section  */}

            <div className="bg-white h-max">

                <div className=" h-[300px] md:h-screen items-center bg-white  justify-center flex text-center px-[20px] md:px-[100px] text-[#5C6C68]">
                    <h2 className='text-2xl md:text-[64px] leading-snug  font-anti anim ' ref={ref}>The stay at Courtyard Castle  means enjoying every moment. Relax. Find inspiration. Be fascinated.</h2>
                </div>

                <div className=" px-[20px] md:px-[100px] w-full  relative md:h-[400px] flex items-center justify-between">
                    <div className='hidden md:block'>
                        <h2 className='text-[#5C6C68] text-2xl font-anti absolute -left-16 md:left-0  rotate-[-90deg]'>Hotel & Resorts <span data-aos='fade-top' data-aos-delay='600' className='border-b-3 w-24 h-[1px] bg-[#5C6C68] inline-block'></span></h2>
                    </div>

                    <div className=" md:block hidden">
                        <h2 className='text-4xl md:text-[128px] text-[#5C6C68] font-anti opacity-50 ' >SPACES</h2>

                        <h4 className='text-[#5C6C68] font-urban text-2xl md:text[40px]  absolute text-center bottom-0 left-1/2 -translate-x-1/2 '>
                            COME AS YOU ARE AND WE WILL TAKE CARE OF THE REST
                        </h4>
                    </div>
                </div>
                <div className="block md:hidden px-[10px]">
                    <h2 className='text-4xl md:text-[128px] text-[#5C6C68] font-anti opacity-50 ' data-aos='zoom-in' data-aos-delay='100'>SPACES</h2>
                </div>


                {/* carosuel slider-1 */}
                <div className="h-[500px] md:h-screen my-[20px] md:my-[100px] relative  ">
                    <SliderPage />
                </div>

                {/* hover rooms */}

                <div className="">
                    <div className=" h-auto  md:h-screen bg-[#DEE2E1] grid grid-cols-1 place-items-center md:grid-cols-3 px-[10px] md:px-[100px] text-[#5C6C68] font-[anti] ">


                        <div className="relative hover:text-white hidden md:block">
                            <h2 className='text-2xl md:text-5xl hover:text-white text-center cursor-pointer absolute top-1/2 left-1/2  translate-y-1/2 z-10'>Rooms</h2>
                            <div className="relative perspective-1000">
                                <div className="transform-style-preserve-3d delay-300">
                                    <img src={r1} alt="suites" className='w-full object-cover opacity-0 hover:opacity-100 md:hover:scale-x-110 hover:scale-y-150  transform transition-transform duration-300 -z-10' />
                                </div>
                            </div>
                        </div>
                        <div className="relative hover:text-white hidden md:block">
                            <h2 className='text-2xl md:text-5xl hover:text-white text-center cursor-pointer absolute top-1/2 left-1/2  translate-y-1/2 z-10'>Suites</h2>
                            <div className="relative perspective-1000">
                                <div className="transform-style-preserve-3d">
                                    <img src={r2} alt="suites" className='w-full object-cover opacity-0 hover:opacity-100 md:hover:scale-x-110 hover:scale-y-150  transform transition-transform duration-300 -z-10' />
                                </div>
                            </div>
                        </div>
                        <div className="relative hover:text-white hidden md:block">
                            <h2 className='text-2xl md:text-5xl hover:text-white text-center cursor-pointer absolute top-1/2 left-1/2  translate-y-1/2 z-10'>Villas</h2>
                            <div className="relative perspective-1000">
                                <div className="transform-style-preserve-3d">
                                    <img src={r3} alt="suites" className='w-full object-cover opacity-0 hover:opacity-100 md:hover:scale-x-110 hover:scale-y-150 transform transition-transform duration-300 -z-10' />
                                </div>
                            </div>
                        </div>

                        <div className="md:hidden text-[60px]">
                            <Link to='/rooms'>Room</Link>
                        </div>
                        <div className="md:hidden text-[60px]">
                            <Link to='/rooms'>Suites</Link>
                        </div>
                        <div className="md:hidden text-[60px]">
                            <Link to='/rooms'>Villas</Link>
                        </div>


                    </div>
                </div>
                {/* expolare */}

                <div className="h-auto relative my-[100px] px-[10px] md:px-[100px] space-y-2 md:space-y-14 text-[#5C6C68]">
                    <h2 className='text-3xl md:text-[128px]  font-anti opacity-50'>EXPLORE</h2>

                    <h4 className='text-center text-xl md:text-3xl md:text-[40px] font-urban py-[5px] md:py-20'>Explore the Nature tourist places near <br /> <br />Courtyard Castle</h4>

                </div>

                <div className="h-[400px] md:h-[500px]  relative mb-24">

                    <ExpolareSlider />
                </div>



                {/* story */}

                <div className="h-auto px-[10px] md:px-[100px] py-[20px]">
                    <h2 className='text-4xl md:text-[128px] font-anti text-[#5c6c68] text-right opacity-50' data-aos='zoom-in' data-aos-delay='600'>Story</h2>

                </div>
                <div className="flex items-center justify-between mb-[100px] w-fit">
                    <img src={story} alt="story-content" className='w-[300px] hidden md:block' data-aos='fade-right' data-aos-delay='600' />
                    <div className="px-[10px] md:px-[50px] text-urban text-xl md:text-3xl text-[#494541]">
                        <p ref={ref2} className='anim'>
                            At Aeorian , we believe that the ultimate luxury lies in the time and connections we make. Hence, the facilities and experiences are carefully crafted to rejuvenate the senses and foster connections with nature, family, and friends. Relax, rejuvenate, and reconnect with the world around you .
                        </p>
                    </div>
                </div>

                {/* experince */}

                <h2 className='text-4xl md:text-[128px] text-[#5c6c68] font-anti  px-[10px] md:px-[100px] sm:py-[10px] md:my-44 opacity-50' data-aos='zoom-in' data-aos-delay='600'>Experience</h2>

                <div className="bg-[#DEE2E1] h-[300px] md:h-[500px] py-[10px] md:py-[50px] text-[#5C6C68] text-center font-urban space-y-8 md:space-y-11">
                    <h2 className=' text-xl md:text-3xl'>Explore our Virtual tour for our premium , <br /> resort for our visitors in to life</h2>
                    <p>At Aeorian , we believe that the ultimate luxury lies in the time and .</p>

                    <button class="inline-block items-center transition-all duration-200 relative overflow-hidden z-10 text-[#5C6C68] md:px-7 exp-button px-3 md:py-2 py-1 cursor-pointer text-lg  bg-transparent border border-[#5C6C68] hover:text-white shadow-lg  button3">
                        <div className="flex items-center "><span className='pr-3 iconsd'><FaArrowRightLong /></span><span className=''>Explore Virual tour</span></div>
                    </button>
                    {/* <button className='py-2 px-4  border border-gray-500'><span><img src={rightarrow} alt="" className='inline pr-2' /></span><span className='inline'>Explore Virual tour</span></button> */}
                </div>

                <div className="relative h-[50vh] md:h-[100vh] w-full">
                    <div className=" h-[300px] md:h-screen bg-[#DEE2E1] items-center justify-center flex min-w-full sticky top-[50px] md:top-[100px]" >
                        <iframe
                            src="https://cdn.illusiview.com/Arch4Foundation/index.htm"
                            frameborder="0"
                            title='illusview'
                            className=' w-full md:w-[100vw] h-[50vh] md:h-screen object-cover your-image-class' style={{ transform: 'scale(0.9)' }}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen>
                        </iframe>
                        {/* <img src={videothumb} alt="videothumb" className='w-[80vw] h-screen object-contain your-image-class' style={{ transform: 'scale(0.9)' }} /> */}
                        {/* <img src={videothumb} alt="videothumb" className='w-full block md:hidden'  ref={imageRefs}/> */}

                    </div>
                </div>


                {/* same page  */}

                <h2 className='text-3xl md:text-[128px] text-[#5C6C68] font-anti mt-8 opacity-50 md:hidden px-[30px] ' data-aos='zoom-in' data-aos-delay='600'>Dinning</h2>

                <div className=" px-[10px] md:px-[100px]  relative my-[80px] h-[80px] md:h-[300px] flex items-center justify-between">
                    <div className=' hidden md:block'>
                        <h2 className='text-[#5C6C68] text-2xl font-anti absolute -left-16 md:left-0  rotate-[-90deg]'>Hotel & Resorts <span className='border-b-3 w-24 h-[1px] bg-[#5C6C68] inline-block'></span></h2>
                    </div>


                    <div className="text-[#5c6c68] ">
                        <h2 className='text-3xl md:text-[128px] text-[#5C6C68] font-anti opacity-50 hidden md:block' data-aos='zoom-in' data-aos-delay='600'>Dinning</h2>

                        <h4 className='text-[#5C6C68] font-urban text-xl md:text[40px]  absolute text-center bottom-0 md:left-1/2 px-[30px] md:px-[0px] md:-translate-x-1/2 '>
                            Explore our dinning Indian  traditional food for our premium , resort for our visitors in to life
                        </h4>
                    </div>
                </div>

                {/* gallery */}

                <div className=" h-auto md:h-screen px-[10px] md:px-[100px]  gap-3 grid md:grid-cols-3 grid-cols-2">
                    <div className="gals">
                        <img src={gallery1} alt="gallery" className='object-contain ' data-aos='zoom-in' data-aos-delay='600' />
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="gals">
                            <img src={gallery2} alt="gallery" className='object-contain' data-aos='zoom-in' data-aos-delay='600' />
                        </div>
                        <div className="gals">
                            <img src={gallery3} alt="gallery" className='object-contain' data-aos='zoom-in' data-aos-delay='600' />
                        </div>
                    </div>
                    <div className=" gap-2 hidden md:block">
                        <div className="my-2 gals">
                            <img src={gallery4} alt="gallery" className='object-contain' data-aos='zoom-in' data-aos-delay='600' />
                        </div>
                        <div className="gals">
                            <img src={gallery5} alt="gallery" className='object-contain' data-aos='zoom-in' data-aos-delay='600' />
                        </div>
                    </div>
                </div>
                <div className="p-[10px] grid grid-cols-2 gap-2 md:hidden " data-aos='zoom-in' data-aos-delay='600'>
                    <div className="gals">
                        <img src={gallery4} alt="gallery" className='object-contain' data-aos='zoom-in' data-aos-delay='600' />
                    </div>
                    <div className="gals">
                        <img src={gallery5} alt="gallery" className='object-contain' data-aos='zoom-in' data-aos-delay='600' />
                    </div>
                </div>

                {/* revievs */}

                <div className=" mt-[100px] md:mt-[200px] px-[10px] md:px-[100px]">
                    <h2 className='text-4xl md:text-[128px] font-anti my-12 md:my-44 opacity-50'>Reviews</h2>
                </div>

                <div className=" h-[400px] md:h-screen bg-[#DEE2E1] relative">
                    <div className="md:px-[100px] px-[10px]">
                        <h2 className='leading-snug text-3xl md:text-[64px] text-[#5C6C68] absolute -top-[35px] md:-top-[100px]'>
                            What Our <br />
                            Customers Are Saying
                        </h2>
                    </div>

                    <div className="w-full overflow-hidden">
                        <TestiData />
                    </div>
                </div>

                <div className=" px-[10px] md:px-[100px] relative my-[28px] md:my-[180px] h-auto flex items-center justify-between">
                    <div className=' md:block hidden'>
                        <h2 className='text-[#5C6C68] text-2xl font-anti absolute -left-16 md:left-0   rotate-[-90deg]'>Hotel & Resorts <span className='border-b-3 w-24 h-[1px] bg-[#5C6C68] inline-block'></span></h2>
                    </div>
                    <div className=" ">
                        <h2 className='text-4xl md:text-[128px] py-[20px] md:py-0 text-[#5C6C68] font-anti opacity-50'>Gallery</h2>
                    </div>

                </div>
                <div className="grid grid-cols-1 md:grid-cols-3  px-[10px] md:px-[100px] gap-4  pb-5 ">
                    <img src={imgOne} alt="gallery-imgs" className='object-contain sticky top-14 md:top-0 sm:-z-20 md:z-0 ' data-aos='fade-up' data-aos-delay='600' />
                    <img src={imgTwo} alt="gallery-imgs" className='object-contain sticky top-14 md:top-0 sm:-z-10 md:z-0' data-aos='fade-down' data-aos-delay='600' />
                    <img src={imgThree} alt="gallery-imgs" className='object-contain' data-aos='fade-up' data-aos-delay='600' />
                </div>
            </div>

        </>
    )
}

export default Hero