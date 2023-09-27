import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import "./Swiper.css";

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Swiper0( {images} ) {
  return (
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
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img src={image.src} alt={image.alt} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Swiper0;
