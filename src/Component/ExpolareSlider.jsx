import React, { useState, useEffect } from 'react'
import hall from '../assets/images/hall.png'
import explore2 from '../assets/images/explore-2.png'
import explore3 from '../assets/images/pandi.png'
import './Animation.css'



const ExpolareSlider = () => {

    const [currentImage, setCurrentImage] = useState(0);

    const images = [
        {
            name: `Pondicherry  Mandapam2`,
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum iste in dolore beatae debitis fugit velit harum eligendi nulla vitae.',
            img: hall
        },
        {
            name: 'Pondicherry Mandapam2',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum iste in dolore beatae debitis fugit velit harum eligendi nulla vitae.',
            img: explore2
        },
        {
            name: 'Pondicherry Mandapam3',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum iste in dolore beatae debitis fugit velit harum eligendi nulla vitae.',
            img: explore3
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


            <div className=" min-w-full h-[200px] md:h-[70vh] my-[50px] relative">
                {
                    images.map((itme, index) => 
                        <div key={index} style={{ display: index === currentImage ? 'block' : 'none' }}>
                            <div className="grid grid-cols-1 md:grid-cols-2 px-[10px] md:px-[100px] justify-between items-center -mt-[30px]  md:-mt-[100px] text-[#5C6C68]">
                                <div className="font-urban -mt-[10px] md:-mt-[100px] mb-8 md:mb-0 md:px-[100px] px-[10px]">
                                    <h2 className='leading-snug text-4xl md:text-[60px] zom'>{itme.name}</h2>

                                    <p className=' leading-5 md:leading-snug text-md md:text-[20px]'>
                                        {itme.desc}
                                    </p>

                                </div>
                                <div className="overflow-hidden">
                                    <img src={itme.img} alt="hall" className='object-contain overflow-hidden w-[400px] md:w-full zom' data-aos='zoom-in' data-aos-delay='600' />
                                </div>
                            </div>
                        </div>
                    )
                }
                <div className="bg-[#DEE2E1] h-[300px] -z-10 absolute bottom-0 w-full"></div>
            </div>

        </>
    )
}

export default ExpolareSlider