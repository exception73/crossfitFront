import React, {useRef, useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';

import './FitMartCaresol.css'

const FitMartCaresol = () => {

  // const progressCircle = useRef(null);
  // const progressContent = useRef(null);
  // const onAutoplayTimeLeft = (s, time, progress) => {
  //   // progressCircle.current.style.setProperty('--progress', 1 - progress);
  //   progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  // };

  return (
    <div>

<Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 1800,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay]}
        // onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>  <img className='fit-mart-caresol-img' src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:596/dpr_2/image/vm/a7141f41-878e-4eca-a6da-7a47f82a5047.jpg" alt="" /></SwiperSlide>
        <SwiperSlide> <img className='fit-mart-caresol-img' src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:596/dpr_2/image/vm/6a66fb86-9a55-48c7-b066-8a361e1bf6c3.jpg" alt="" /></SwiperSlide>
        <SwiperSlide> <img className='fit-mart-caresol-img' src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:596/dpr_2/image/vm/f1cd3131-4cf7-40b5-ade4-f3acc226be65.png" alt="" /></SwiperSlide>
        <SwiperSlide> <img className='fit-mart-caresol-img' src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:596/dpr_2/image/vm/f0a30f3a-cfe3-4bf1-a06a-2b2742d61216.jpg" alt="" /></SwiperSlide>
       
        {/* <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div> */}
      </Swiper>

    
    </div>
  )
}

export default FitMartCaresol