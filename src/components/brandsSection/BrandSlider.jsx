"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "swiper/css/free-mode";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

import brandImg1 from "../../../public/brands/brand1.png";
import brandImg2 from "../../../public/brands/brand2.png";
import brandImg3 from "../../../public/brands/brand3.png";
import brandImg4 from "../../../public/brands/brand4.png";
import brandImg5 from "../../../public/brands/brand5.png";
import brandImg6 from "../../../public/brands/brand6.png";
import brandImg7 from "../../../public/brands/brand7.png";

const BrandSlider = () => {
  const brands = [
    brandImg1,
    brandImg2,
    brandImg3,
    brandImg4,
    brandImg5,
    brandImg6,
    brandImg7,
    brandImg1,
    brandImg2,
    brandImg3,
    brandImg4,
    brandImg5,
    brandImg6,
    brandImg7,
  ];
  return (
    <Swiper
      slidesPerView={7}
      spaceBetween={30}
      breakpoints={{
        0: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        576: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        992: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
        1400: {
          slidesPerView: 7,
          spaceBetween: 30,
        },
      }}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      modules={[Autoplay]}
      loop={true}
      className="mySwiper"
    >
      {brands.map((brand, index) => (
        <SwiperSlide key={index}>
          <div className="">
            <Image
              src={brand}
              sizes="150px"
              alt={`barnd img ${index}`}
              width={150}
              height={80}
              className="object-fit-contain"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BrandSlider;
