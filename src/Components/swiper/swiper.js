import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./swipper.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { allTestimonialsAction } from "../../redux/slices/testimonialSlices";
import { useState } from "react";
const SwiperComponent = () => {
  const [data1,setData]=useState([]);
  const dispatch=useDispatch();
  useEffect(()=>{
    const mess="hi";
    dispatch(allTestimonialsAction(mess));
  },[]);

  // let test = useSelector((state)=>state.testimonial?.testimonials?.test);
  const test1 = useSelector((state) => state.testimonial?.testimonials.test)
  
  // test1.reverse();
  // console.log(test1);
  // const {test: test2} = test1
  // console.log(test2);
  // let dataf = [];
  // for(let i in test2){
  //   console.log(i);
  //   // dataf.push(test2[i].captionHeading)
  //   dataf.push({captionDescription: test2[i].captionDescription,
  //               captionHeading: test2[i].captionHeading,
  //               image_link: test2[i].user.avatar,
  //             user: test2[i].user.name})

  // }
  // console.log(dataf);
  // let dataArray=[];
  // console.log(typeof(dataArray));
  // for(let i in test){
  //   dataArray.push(test[i])
  // }
  // console.log(test);
  // console.log(dataArray);
  // console.log(typeof(dataArray));
  return (
    <div className="app1">
      <div className="upper">
        <div>
          <h3 className="core">WHAT USERS SAY</h3>
          <h1 className="reviww">Recent Reviews</h1>
        </div>
        <div>
          <Link to="/review" className="add-your-review-btn">
            Add Your Review
          </Link>
        </div>
      </div>
      <div className="line2"></div>
      <Swiper
        // install Swiper modules
        spaceBetween={50}
        slidesPerView={3}
        
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        // navigation
        onSwiper={(swiper) => console.log(swiper)}
  
      >
        {test1?.map((item) => (
          <SwiperSlide className="card">
            <p>{item.captionDescription}</p>
            <div className="line"></div>
            <div className="lower">
              <div>
                <img src={item.user.avatar} alt="wrong" />
              </div>
              <div>
                <p className="heading">{item.captionHeading}</p>
                <p className="user-giving-review-name">{item.user.name}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
