import React from "react";
import Container from "../layouts/Container";
import bannerOne from "../../assets/images/banner-one.webp";
import bannerTwo from "../../assets/images/banner-two.webp";
import bannerThree from "../../assets/images/banner-three.webp";
import rightBannerOne from "../../assets/images/right-banner-one.webp";
import rightBannerTwo from "../../assets/images/right-banner-two.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper/modules";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Hero = () => {
  return (
    <>
      <section className="py-6 px-3 lg:px-0">
        <Container>
          <div className="main grid grid-cols-1 lg:grid-cols-3 gap-6 ">
            <div className="right lg:col-span-2">
              <Swiper
                pagination={{
                  clickable: true,
                }}
                modules={[EffectFade, Autoplay, Pagination]}
               effect="fade"
                    fadeEffect={{ crossFade: true }}
                    speed={1500}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    loop={true}
              >
                <SwiperSlide>
                  <div className="size-full rounded-md overflow-hidden  max-h-150 cursor-pointer">
                    <img
                      src={bannerOne}
                      alt=""
                      width={"100%"}
                      className="w-full min-h-[262px] "
                      fetchPriority="high"
                      loading="eager"
                    />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="size-full rounded-md overflow-hidden max-h-150 cursor-pointer">
                    <img
                      src={bannerThree}
                      alt=""
                      width={"100%"}
                      height={"100%"}
                      className="w-full "
                      fetchPriority="high"
                      loading="eager"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="size-full rounded-md overflow-hidden   max-h-150 cursor-pointer">
                    <img
                      src={bannerTwo}
                      alt=""
                      width={"100%"}
                      height={"100%"}
                      className="w-full "
                      fetchPriority="high"
                      loading="eager"
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="left lg:col-span-1 flex flex-col md:flex-row lg:flex-col gap-6 items-center w-full">
              <div className="size-full cursor-pointer overflow-hidden group rounded-md">
                <img src={rightBannerOne} alt="banner" fetchPriority="high" loading="eager"  className="group-hover:scale-[1.02] transition-all duration-300"/>
              </div>
              <div className="size-full cursor-pointer overflow-hidden group rounded-md">
                <img src={rightBannerTwo} alt="banner" fetchPriority="high" loading="eager"  className="group-hover:scale-[1.02] transition-all duration-300"/>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Hero;
