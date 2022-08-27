import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import React, { useState, useEffect } from 'react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { initialState } from '../dummies/datas';

const Slider = () => {

    const [data, setData] = useState(initialState)

    useEffect(() => {
      setData(initialState)
    },[data])

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
    {data.map((item) => (
            <SwiperSlide key={item?.id} className="slide ">
                <div className="slide-content">
                    <div className="product-img hover:bg-violet-600 font-mono">
                        <img className="cursor-pointer hover:bg-violet-600" src={item?.image}/>
                        <div className="absolute top-80">
                            <div className="title-product font-black mt-10 ml-5">{item?.title}</div>
                            <div className="desc-product font-black text-2xl ml-5">{item?.desc}</div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        ))}
    </Swiper> 
  );
};

export default Slider
