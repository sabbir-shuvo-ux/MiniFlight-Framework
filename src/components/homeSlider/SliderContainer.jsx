"use client";

import { useState, useEffect } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// swiper css
import "swiper/css";

// slider data
import homeSliderData from "@/AppData/homeSliderData";
import Link from "next/link";
import Image from "next/image";

const SliderContainer = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Check the window width to determine mobile or desktop view
      const windowWidth = window.innerWidth;
      setIsMobile(windowWidth < 768); // Change the value as per your breakpoint
    };

    // Initial check on mount
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Swiper
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className="home_swiper"
    >
      {homeSliderData.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div
              className={`home_slider_parent banner_${
                index + 1
              } position-relative`}
            >
              <Image
                src={isMobile ? slide.mobileImg : slide.img}
                alt={slide.title}
                title={slide.title}
                className="d_md_none"
                fill
                priority={index === 0 ? true : false}
              />
              <div className="home_slider_content container-fluid custom_fluid">
                <div className="slider_inner_content">
                  <div className="banner_subtitle">
                    <h4 className="banner_subtitle_text text-uppercase h4">
                      Automatic Door
                    </h4>
                  </div>
                  {index === 0 ? (
                    <h1 className="h2 mb-4 slider_title">{slide.title}</h1>
                  ) : (
                    <h2 className="h2 mb-4 slider_title">{slide.title}</h2>
                  )}
                  <p className="slider_dec">{slide.des}</p>
                  <Link
                    className="main_btn"
                    href={"#"}
                    title={`Read more on ${slide.title}`}
                  >
                    LEARN MORE
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SliderContainer;
