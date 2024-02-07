import React from 'react'
import gallery from '../../assets/images/gallery-bg.png'
import downarrow from '../../assets/images/down-arrow.svg'
import circleText from '../../assets/images/circle-text.png'
import galOne from '../../assets/images/gal-1.png'
import galTwo from '../../assets/images/gal-2.png'
import galThree from '../../assets/images/gal-3.png'
import galFour from '../../assets/images/gal-4.png'
import galFive from '../../assets/images/gal-5.png'
import galSix from '../../assets/images/gal-6.png'
import galSeven from '../../assets/images/gal-7.png'
import galEight from '../../assets/images/gal-8.png'
import galNighen from '../../assets/images/gal-9.png'
import galTen from '../../assets/images/gal-10.png'
import galElevan from '../../assets/images/gal-11.png'
import galtwelle from '../../assets/images/gal-12.png'
import 'aos/dist/aos.css';
import Aos from 'aos'

const Gallery = () => {
    document.addEventListener('DOMContentLoaded',(e)=>{
        Aos.init()
    })

    return (
        <>

            <div className="slider relative h-screen w-full bg-gradient-to-tl from-gray-900 to-gray-400 -z-10">
                <div className="h-screen  bg-center bg-cover bg-no-repeat object-contain w-full mix-blend-overlay absolute" style={{ backgroundImage: `url(${gallery})` }}>
                </div>

            </div>

            <div className="h-screen absolute top-1/2 left-1/2 -z-10  transform -translate-x-1/2 -translate-y-1/2">

                <div className="h-screen items-center justify-center flex flex-col text-center text-white space-y-10">
                    <h1 className='font-anti text-5xl md:text-[80px] font-w-[400px]'>Courtyard Castle</h1>
                    <p className='font-curban text-2xl'>
                        Culinary art is an important part of the <br />
                        unforgettable experience
                    </p>
                </div>



            </div>

            {/* scroll donw */}

            <div className="absolute bottom-14 right-20">
                <div className="  w-[100px] h-[100px] rounded-full bg-center bg-cover bg-no-repeat " style={{ backgroundImage: `url(${circleText})` }}>
                    <img src={downarrow} alt="gallery" className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[20px] animate-ping aimate-bounse' />
                </div>

            </div>


            <div className=" ">
                <h2 className='text-4xl md:text-[128px] text-right p-[10px] md:p-[100px] text-[#5C6C68] font-anti opacity-50' data-aos='zoom-in' data-aos-delay='600'>Our Gallery</h2>
            </div>


            {/* gallery imgaes */}

            <div className="p-[10px] md:p-[100px]">

                <div className="grid md:grid-cols-4 grid-cols-2 gap-x-2  min-w-full  mt-10 items-start">
                    <div className="w-full" data-aos='zoom-in' data-aos-delay='600'>
                        <img src={galOne} alt="gallery" className='object-contain ' />
                        <p className='font-urban -tracking-tighter text-md text-[#292E36]'>SPECIALIZE</p>
                        <p className='font-anti text-[#5C6C68] text-xl'>Double Cetric HeRoom</p>

                    </div>
                    <div className="w-full" data-aos='zoom-in' data-aos-delay='600'>
                        <img src={galTwo} alt="gallery" className='object-contain ' />
                        <p className='font-urban -tracking-tighter text-md text-[#292E36]'>SPECIALIZE</p>
                        <p className='font-anti text-[#5C6C68] text-xl'>Double Cetric HeRoom</p>
                    </div>
                    <div className="w-full" data-aos='zoom-in' data-aos-delay='600'>
                        <img src={galThree} alt="gallery" className='object-contain ' />
                        <p className='font-urban -tracking-tighter text-md text-[#292E36]'>SPECIALIZE</p>
                        <p className='font-anti text-[#5C6C68] text-xl'>Double Cetric HeRoom</p>
                    </div>
                    <div className="w-full" data-aos='zoom-in' data-aos-delay='600'>
                        <img src={galFour} alt="gallery" className='object-contain ' />
                        <p className='font-urban -tracking-tighter text-md text-[#292E36]'>SPECIALIZE</p>
                        <p className='font-anti text-[#5C6C68] text-xl'>Double Cetric HeRoom</p>
                    </div>

                    </div>

                    <div className="grid md:grid-cols-4 grid-cols-2 items-end gap-x-2  min-w-full   ">
                    <div className="w-full" data-aos='zoom-in' data-aos-delay='600'>
                        <img src={galFive} alt="gallery" className='object-contain ' />
                        <p className='font-urban -tracking-tighter text-md text-[#292E36]'>SPECIALIZE</p>
                        <p className='font-anti text-[#5C6C68] text-xl'>Double Cetric HeRoom</p>
                    </div>
                    <div className="w-full" data-aos='zoom-in' data-aos-delay='600'>
                        <img src={galSix} alt="gallery" className='object-contain ' />
                        <p className='font-urban -tracking-tighter text-md text-[#292E36]'>SPECIALIZE</p>
                        <p className='font-anti text-[#5C6C68] text-xl'>Double Cetric HeRoom</p>
                    </div>
                    <div className="w-full" data-aos='zoom-in' data-aos-delay='600'>
                        <img src={galSeven} alt="gallery" className='object-contain ' />
                        <p className='font-urban -tracking-tighter text-md text-[#292E36]'>SPECIALIZE</p>
                        <p className='font-anti text-[#5C6C68] text-xl'>Double Cetric HeRoom</p>
                    </div>
                    <div className="w-full" data-aos='zoom-in' data-aos-delay='600'>
                        <img src={galEight} alt="gallery" className='object-contain ' />
                        <p className='font-urban -tracking-tighter text-md text-[#292E36]'>SPECIALIZE</p>
                        <p className='font-anti text-[#5C6C68] text-xl'>Double Cetric HeRoom</p>
                    </div>

                    </div>

                   

                 <div className="grid md:grid-cols-4 grid-cols-2 gap-x-2  min-w-full  my-14 items-start">
                 <div className="w-full" data-aos='zoom-in' data-aos-delay='600'>
                        <img src={galNighen} alt="gallery" className='object-contain ' />
                        <p className='font-urban -tracking-tighter text-md text-[#292E36]'>SPECIALIZE</p>
                        <p className='font-anti text-[#5C6C68] text-xl'>Double Cetric HeRoom</p>
                    </div>
                    <div className="w-full" data-aos='zoom-in' data-aos-delay='600'>
                        <img src={galTen} alt="gallery" className='object-contain ' />
                        <p className='font-urban -tracking-tighter text-md text-[#292E36]'>SPECIALIZE</p>
                        <p className='font-anti text-[#5C6C68] text-xl'>Double Cetric HeRoom</p>
                    </div>
                    <div className="w-full" data-aos='zoom-in' data-aos-delay='600'>
                        <img src={galElevan} alt="gallery" className='object-contain ' />
                        <p className='font-urban -tracking-tighter text-md text-[#292E36]'>SPECIALIZE</p>
                        <p className='font-anti text-[#5C6C68] text-xl'>Double Cetric HeRoom</p>
                    </div>
                    <div className="w-full" data-aos='zoom-in' data-aos-delay='600'>
                        <img src={galtwelle} alt="gallery" className='object-contain ' />
                        <p className='font-urban -tracking-tighter text-md text-[#292E36]'>SPECIALIZE</p>
                        <p className='font-anti text-[#5C6C68] text-xl'>Double Cetric HeRoom</p>
                    </div>

                 </div>
                </div>
            

        </>
    )
}

export default Gallery