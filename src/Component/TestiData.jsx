import React, { useState, useEffect } from 'react'
import testi from '../assets/images/testi.png'
const TestiData = () => {

    const [currentImage, setCurrentImage] = useState(0);

    const images = [
        {
            name: `GENEVA ROBEL`,
            desc: ' In voluptates iste soluta veniam beatae sed ipsa quos numquam. Perferendis eos similique sunt temporibus. Tempore rem libero deleniti adipisci nulla.',
            img: testi
        },
        {
            name: 'GENEVA ROBEL2',
            desc: ' In voluptates iste soluta veniam beatae sed ipsa quos numquam. Perferendis eos similique sunt temporibus. Tempore rem libero deleniti adipisci nulla.',
            img: testi
        },
        {
            name: 'GENEVA ROBEL3',
            desc: ' In voluptates iste soluta veniam beatae sed ipsa quos numquam. Perferendis eos similique sunt temporibus. Tempore rem libero deleniti adipisci nulla.',
            img: testi
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 10000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <>
            <div className=" w-[90vw] md:w-[60vw] overflow-hidden m-auto">
                {
                    images.map((item, index) => 
                        <div className="" key={index} style={{ display: index === currentImage ? 'block' : 'none' }}>
                            <div className=' py-[100px] md:pt-[120px]'>
                                <div className="flex items-end justify-center">
                                    <div className="">
                                        <img src={item.img} alt="reviewImg" className='w-[400px] md:w-[300px] anims' data-aos='flip-left' data-aos-delay='600' />
                                    </div>
                                    <div className="relative flex flex-col">
                                        <div className="side-r text-[#494541] my-6 mx-2 text-2xl font-urban font-bold ">
                                            <h3>{item.name}</h3>
                                        </div>
                                        <div className="banner-b bg-[#5C6C68] text-[16px] font-urban w-auto md:w-[400px] h-auto md:py-[40px] py-[10px] px-[10px] md:px-[40px] ">
                                            <h6 className='text-white testi-gal'>{item.desc}</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }


            </div>

        </>
    )
}

export default TestiData