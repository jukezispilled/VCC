import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import "./Swiper.css";

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Swiper0() {
  return (
    <>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper rounded-xl"
      >
        <SwiperSlide>
          <img src={process.env.PUBLIC_URL + '/proj1.jpg'} alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={process.env.PUBLIC_URL + '/proj1.jpg'} alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={process.env.PUBLIC_URL + '/proj1.jpg'} alt="Slide 1" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Swiper0;
