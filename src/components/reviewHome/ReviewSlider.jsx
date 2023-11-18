"use client";

import reviewHomeData from "@/AppData/reviewHomeData";
import { Swiper, SwiperSlide } from "swiper/react";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi2";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";

const ReviewSlider = () => {
  return (
    <div className="position-relative review_slider_container mt-5 mt-md-0">
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          576: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        navigation={{
          nextEl: ".right_btn",
          prevEl: ".left_btn",
        }}
        loop={true}
        modules={[Navigation]}
        className="review_slider"
      >
        {reviewHomeData.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="review_container">
              <div className="position-relative img_container">
                <Image
                  src={review.img}
                  alt="Our Customers Review"
                  title="Our Customers Review"
                  className="w-100 h-auto object-fit-contain"
                />
              </div>
              <div className="review_slider_content">
                <p className="client_comment">{review.comment}</p>
                <h5 className="client_review_title">{review.title}</h5>
                <h6 className="client_location">{review.location}</h6>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <HiChevronLeft className="left_btn" size={50} />
      <HiChevronRight className="right_btn" size={50} />
    </div>
  );
};

export default ReviewSlider;
