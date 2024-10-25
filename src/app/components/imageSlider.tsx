'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';

import 'swiper/css';

const imgData = [
  {
    images: "/images/slideShow1.6f890b58.jpg",
  },
  {
    images: "/images/slideShow2.ce4d5430.jpg",
  },
  {
    images: "/images/slideShow3.0006489a.jpg",
  },
  {
    images: "/images/slideShow4.d9ba1e2d.jpg",
  },
  {
    images: "/images/slideShow5.b502aa01.jpg",
  },
  {
    images: "/images/slideShow6.03103579.jpg",
  },
  {
    images: "/images/slideShow7.9e3fcc75.jpg",
  },
  {
    images: "/images/slideShow8.4b79537a.jpg",
  },
];

const ImageSlider = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={16}
      slidesPerView={2}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        320: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        }
      }}
      className="max-w-[1300px] mx-auto"
    >
      {imgData.map((slide, index) => (
        <SwiperSlide key={index}>
          <Image
            src={slide.images}
            alt={`Slide ${index + 1}`}
            width={1156}
            height={521}
            priority={index === 0}
            className="w-full h-[300px] md:h-[600px] object-cover rounded-lg shadow-lg shadow-slate-800"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSlider;
