import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { dataReviews } from '../dummies/review-product'; 

const SliderReview = () => {

    const [data, setData] = useState(dataReviews)
    console.log(data);
    useEffect(() => {
      setData(dataReviews)
    },[data])

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      navigation
      pagination={{ clickable: true }}
    >
    {data.map((item) => (
            <SwiperSlide key={item?.id} className="slide ">
                <div className="slide-content ml-20">
                    <div className="list-review hover:bg-indigo-300 font-mono bg-indigo-200 h-96 w-96 shadow-lg">
                        <h1 className='text-2xl font-mono max-w-xs text-justify ml-10 pt-8 mr-10'>{item?.comment}</h1>
                        <div className="absolute top-72 w-screen ml-28">
                            <div className="title-product font-extralight mt-10 inline">{item?.username} | </div>
                            <div className="desc-product font-extralight inline">{item?.country}</div>
                            <img className="w-24 ml-4" src={item?.review} />
                        </div>
                          
                    </div>
                </div>
            </SwiperSlide>
        ))}
    </Swiper> 
  );
};

export default SliderReview
