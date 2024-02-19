import React,{useRef,useEffect} from 'react'
import slider from '../assets/images/slider-1.png'
import slider2 from '../assets/images/slider-2.png'
import slider3 from '../assets/images/slider-3.png'
import './Animation.css'
import Sliders from 'react-slick'
import SplitText from '../../node_modules/gsap-trial/dist/SplitText'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


const Slider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true, // To ensure the centered slide is recognized for scaling
    focusOnSelect: true,
    // Add any more settings you require
  };

  const ref = useRef(null);

  useEffect(() => {
      const split = new SplitText(ref.current, { type: 'chars, words' });
      
      gsap.set(split.chars, { opacity: 0, y: 20 });

      ScrollTrigger.batch(split.chars, {
          onEnter: batch => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.05, overwrite: true }),
          onLeave: batch => gsap.set(batch, { opacity: 0, y: -20, overwrite: true }),
          onEnterBack: batch => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.05, overwrite: true }),
          onLeaveBack: batch => gsap.set(batch, { opacity: 0, y: 20, overwrite: true }),
          start: 'top bottom',
          end: 'bottom top'
      });

      return () => {
          split.revert();
      };
  }, []);

  return (

    <>



      <div className="relative h-screen w-full">

        <div className="absolute top-0 left-0 h-screen w-full bg-[#C7D4D1]"></div>
        <div className=" mx-auto flex items-center justify-center absolute z-10 h-screen w-full">
                <div className="bg-white absolute  \z-10 p-[20px] w-[250px] md:w-[300px] text-wrap ">
                  <div className="border border-gray-300 p-[30px] text-center">
                    <p className='font-urban text-md md:text-xl anim' ref={ref} > Courtyard Castle , we believe that the ultimate luxury lies in the time and connections we make. Hence, the facilities and experiences are carefully </p>
                  </div>
                </div>

              </div>
        <div className=" w-full md:w-[80vw] mx-auto  overflow-hidden items-center justify-center h-screen">
          <Sliders {...settings} className='w-full overflow-hidden sm:h-[500px] md:h-[80vh] top-14 relative'>

            <div className=" h-[300px] md:h-screen relative ">

              <div className="absolute flex items-center justify-center h-[500px] md:h-screen w-full ">
                <img src={slider} alt="Slider-img" className='bg-center bg-cover h-[500px] md:h-screen slow-spin mx-[100px]' />

              </div>

            </div>

            <div className="h-screen relative ">
            

              <div className="absolute flex items-center justify-center h-[500px] md:h-screen w-full">
                <img src={slider2} alt="Slider_img" className='bg-center bg-cover  object-cover w-full h-[500px] md:h-screen mx-[100px] slow-spin' />

              </div>
            </div>

            <div className="h-screen relative ">

              <div className="absolute flex items-center justify-center h-[500px] md:h-screen">
                <img src={slider3} alt="Slider_img" className='bg-center bg-cover  object-cover sm:w-full sm:h-full h-[500px] md:h-screen mx-[100px] slow-spin' />

              </div>

            </div>

          </Sliders>

        </div>
      </div>

   


    </>


  )
}

export default Slider