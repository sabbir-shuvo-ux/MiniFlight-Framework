"use client";
import { useEffect, useState } from "react";
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
                className="d_md_none object-fit-cover"
                fill
                sizes="(min-width: 2960px) 2960px, (min-width: 2720px) 2720px, (min-width: 2480px) 2480px, (min-width: 2260px) calc(40vw + 1356px), (min-width: 2120px) 2120px, (min-width: 1920px) 1920px, (min-width: 1740px) 1740px, (min-width: 1580px) calc(28.57vw + 1129px), (min-width: 1500px) 1480px, (min-width: 1460px) calc(900vw - 11840px), (min-width: 1180px) calc(46.15vw + 635px), (min-width: 1100px) 1100px, (min-width: 940px) 940px, (min-width: 780px) 780px, (min-width: 680px) 680px, (min-width: 620px) 620px, (min-width: 540px) 540px, (min-width: 460px) 420px, calc(85.71vw + 43px)"
                priority={index === 0 ? true : false}
              />
              <div className="home_slider_content container-fluid custom_fluid">
                <div className="slider_inner_content position-relative">
                  <div className="banner_subtitle">
                    <h4 className="banner_subtitle_text text-uppercase h4">
                      Lorem Ipsume
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
